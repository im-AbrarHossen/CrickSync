import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import cloudinary from "@/app/lib/cloudinary";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/authOptions";
import bcrypt from "bcryptjs";

export async function PATCH(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const userEmail = session.user.email;
    const usersCollection = dbConnect("players");

    const data = await req.json();
    const { name, email, password, image } = data;

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    if (image) {
      // image should be base64 or file URL
      const uploaded = await cloudinary.uploader.upload(image, {
        folder: "profile_images",
        overwrite: true,
      });
      updateData.image = uploaded.secure_url;
    }

    await usersCollection.updateOne({ email: userEmail }, { $set: updateData });

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

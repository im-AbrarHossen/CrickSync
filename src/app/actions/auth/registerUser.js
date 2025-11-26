// "use server";

// import dbConnect from "@/app/lib/dbConnect";

// export const registerUser = async (payload) => {

//     try {
//         // add default role
//         const finalPayload = {
//             ...payload,
//             role: "player"  // default role
//         };

//         const result = await dbConnect("players").insertOne(finalPayload);
//         return result;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

"use server";

import dbConnect from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (payload) => {
    try {
        const players = dbConnect("players");

        // Check duplicate email
        const existingUser = await players.findOne({ email: payload.email });
        if (existingUser) {
            return {
                success: false,
                message: "Email already exists"
            };
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(payload.password, 10);

        // final payload
        const finalPayload = {
            ...payload,
            password: hashedPassword,
            role: "player",
            createdAt: new Date()
        };

        // Insert user
        const result = await players.insertOne(finalPayload);

        // Return plain JSON only
        return {
            success: true,
            id: result.insertedId.toString()
        };

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Server error"
        };
    }
};

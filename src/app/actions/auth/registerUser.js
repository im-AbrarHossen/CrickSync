"use server";

import dbConnect from "@/app/lib/dbConnect";

export const registerUser = async (payload) => {

    try {
        const result = await dbConnect("players").insertOne(payload);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
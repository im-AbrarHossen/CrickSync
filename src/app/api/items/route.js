import dbConnect from "@/app/lib/dbConnect"

export async function GET() {
    const data = await dbConnect()

    return Response.json()
}
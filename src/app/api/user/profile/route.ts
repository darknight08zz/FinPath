import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        // Auth Check
        const token = request.headers.get("x-auth-token");
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        let userId;
        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
            userId = decoded.user.id;
        } catch (err) {
            return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
        }

        const reqBody = await request.json();
        const { bio, location, jobTitle, profileImage } = reqBody;

        // Find user and update
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                bio,
                location,
                jobTitle,
                profileImage
            },
            { new: true } // Return the updated document
        ).select("-password"); // Exclude password from the result

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Profile updated successfully",
            user: updatedUser
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

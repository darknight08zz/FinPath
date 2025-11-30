import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/db';
import jwt from 'jsonwebtoken';

// Helper to get user from token (since we saw 'x-auth-token' in AuthContext)
const getUserFromRequest = async (req: Request) => {
    const token = req.headers.get('x-auth-token');
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        return (decoded as any).user;
    } catch (err) {
        return null;
    }
};

export async function POST(req: Request) {
    await connectDB();

    const userDecoded = await getUserFromRequest(req);
    if (!userDecoded) {
        return NextResponse.json({ msg: 'No token, authorization denied' }, { status: 401 });
    }

    try {
        const { lessonId, completed } = await req.json();

        const user = await User.findById(userDecoded.id);
        if (!user) {
            return NextResponse.json({ msg: 'User not found' }, { status: 404 });
        }

        // Initialize fields if they don't exist (handling schema updates on existing docs)
        // Use user.get() to safely access fields that might not be in the cached schema
        let completedLessons: number[] | undefined;
        try {
            completedLessons = user.get('completedLessons');
        } catch (e) {
            completedLessons = undefined;
        }

        if (!Array.isArray(completedLessons)) {
            completedLessons = [];
            user.set('completedLessons', completedLessons, { strict: false });
        }

        let currentLesson: number | undefined = user.get('currentLesson');
        if (currentLesson === undefined || currentLesson === null) {
            currentLesson = 1;
            user.set('currentLesson', currentLesson, { strict: false });
        }

        if (completed) {
            if (!completedLessons.includes(lessonId)) {
                completedLessons.push(lessonId);
                // Need to set it back if we modified the array reference or if it wasn't tracked
                user.set('completedLessons', completedLessons, { strict: false });
            }
            // Logic to set next lesson as current
            // Assuming lesson IDs are sequential integers for now based on data/modules.ts
            // If the completed lesson was the current one, move to next
            if (currentLesson === lessonId) {
                user.set('currentLesson', lessonId + 1, { strict: false });
            }
        } else {
            // Just updating current lesson without completion (e.g. started but not finished)
            user.set('currentLesson', lessonId, { strict: false });
        }

        await user.save();
        return NextResponse.json(user);
    } catch (err: any) {
        console.error('Progress Update Error:', err);
        return NextResponse.json({ msg: 'Server error', error: err.message }, { status: 500 });
    }
}

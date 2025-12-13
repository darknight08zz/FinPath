import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    try {
        await connectDB();
        const token = req.headers.get('x-auth-token');

        if (!token) {
            return NextResponse.json({ msg: 'No token, authorization denied' }, { status: 401 });
        }

        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
            const userId = decoded.user.id;
            const { challengeId } = await req.json();

            const user = await User.findById(userId);
            if (!user) return NextResponse.json({ msg: 'User not found' }, { status: 404 });

            // Check if already joined or completed
            if (user.joinedChallenges.includes(challengeId) || user.completedChallenges.includes(challengeId)) {
                return NextResponse.json({ msg: 'Already joined or completed' }, { status: 400 });
            }

            user.joinedChallenges.push(challengeId);
            await user.save();

            return NextResponse.json({
                joinedChallenges: user.joinedChallenges,
                msg: 'Challenge joined successfully'
            });

        } catch (err) {
            return NextResponse.json({ msg: 'Token is not valid' }, { status: 401 });
        }
    } catch (err: any) {
        console.error('Join Challenge Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

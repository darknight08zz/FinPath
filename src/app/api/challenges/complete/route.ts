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
            const { challengeId, xpReward } = await req.json();

            const user = await User.findById(userId);
            if (!user) return NextResponse.json({ msg: 'User not found' }, { status: 404 });

            // Remove from joined, add to completed
            user.joinedChallenges = user.joinedChallenges.filter((id: string) => id !== challengeId);

            if (!user.completedChallenges.includes(challengeId)) {
                user.completedChallenges.push(challengeId);
                // Award XP
                user.xp += (xpReward || 100);
                // Simple Level up logic (same as in xp route - rudimentary)
                const newLevel = Math.floor(user.xp / 1000) + 1;
                if (newLevel > user.level) {
                    user.level = newLevel;
                }
            }

            await user.save();

            return NextResponse.json({
                joinedChallenges: user.joinedChallenges,
                completedChallenges: user.completedChallenges,
                xp: user.xp,
                level: user.level,
                msg: 'Challenge completed successfully'
            });

        } catch (err) {
            return NextResponse.json({ msg: 'Token is not valid' }, { status: 401 });
        }
    } catch (err: any) {
        console.error('Complete Challenge Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

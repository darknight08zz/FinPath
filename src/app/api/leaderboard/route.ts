import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectDB();

        // Fetch top 10 users sorted by XP descending
        const users = await User.find({})
            .select('username xp level badges streak')
            .sort({ xp: -1 })
            .limit(10);

        // Map to simpler format if needed by frontend, or send as is
        const leaderboard = users.map((user, index) => ({
            id: user._id,
            rank: index + 1,
            name: user.username,
            xp: user.xp,
            level: user.level,
            badges: user.badges || [], // return badges array
            avatar: user.username.substring(0, 2).toUpperCase(), // Generate simple initials avatar
            streak: user.streak || 0
        }));

        return NextResponse.json(leaderboard);
    } catch (err: any) {
        console.error('Leaderboard API Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

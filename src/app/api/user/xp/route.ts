import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function PUT(req: Request) {
    try {
        await connectDB();

        const token = req.headers.get('x-auth-token');

        if (!token) {
            return NextResponse.json({ msg: 'No token, authorization denied' }, { status: 401 });
        }

        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
            const userId = decoded.user.id;

            const { xp, level } = await req.json();

            const user = await User.findById(userId);

            if (!user) {
                return NextResponse.json({ msg: 'User not found' }, { status: 404 });
            }

            user.xp = xp;
            if (level) {
                user.level = level;
            }

            // Reset Logic: If specifically resetting to start
            if (xp === 0 && level === 1) {
                user.badges = [];
            }

            // Gamification: Badge Unlocking
            if (!user.badges) user.badges = [];

            const newBadges = [];

            // "First Steps" - First XP earned
            if (user.xp > 0 && !user.badges.includes('🌱')) {
                user.badges.push('🌱');
                newBadges.push('🌱');
            }

            // "Level 5" - Reached Level 5
            if (user.level >= 5 && !user.badges.includes('⭐')) {
                user.badges.push('⭐');
                newBadges.push('⭐');
            }

            // "Expert" - Reached Level 10
            if (user.level >= 10 && !user.badges.includes('🚀')) {
                user.badges.push('🚀');
                newBadges.push('🚀');
            }

            // "Master" - Reached Level 20
            if (user.level >= 20 && !user.badges.includes('🏆')) {
                user.badges.push('🏆');
                newBadges.push('🏆');
            }

            await user.save();

            // Return user without password
            const userResponse = {
                id: user.id,
                username: user.username,
                email: user.email,
                xp: user.xp,
                level: user.level,
                badges: user.badges,
            };

            return NextResponse.json(userResponse);

        } catch (err) {
            return NextResponse.json({ msg: 'Token is not valid' }, { status: 401 });
        }
    } catch (err: any) {
        console.error('Server Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

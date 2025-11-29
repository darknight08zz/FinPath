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

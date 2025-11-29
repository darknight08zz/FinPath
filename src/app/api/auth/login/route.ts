import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        // Validation
        if (!email || !password) {
            return NextResponse.json({ msg: 'Please enter all fields' }, { status: 400 });
        }

        // Check for user
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ msg: 'Invalid Credentials' }, { status: 400 });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ msg: 'Invalid Credentials' }, { status: 400 });
        }

        // Create token
        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: 360000 }
        );

        return NextResponse.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                xp: user.xp,
                level: user.level,
                badges: user.badges,
            },
        });
    } catch (err: any) {
        console.error('Login Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

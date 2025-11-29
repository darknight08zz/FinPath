import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    try {
        await connectDB();

        const { username, email, password } = await req.json();

        // Validation
        if (!username || !email || !password) {
            return NextResponse.json({ msg: 'Please enter all fields' }, { status: 400 });
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ msg: 'User already exists' }, { status: 400 });
        }

        // Create new user
        const user = new User({
            username,
            email,
            password,
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

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
        console.error('Signup Error Full:', err);
        console.error('Stack:', err.stack);
        console.log('MONGO_URI defined:', !!process.env.MONGO_URI);
        return NextResponse.json({ msg: 'Server error', error: err.message }, { status: 500 });
    }
}

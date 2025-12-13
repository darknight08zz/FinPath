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

        // Streak Logic
        const today = new Date();
        const lastLogin = user.lastLogin ? new Date(user.lastLogin) : null;

        if (lastLogin) {
            const diffTime = Math.abs(today.getTime() - lastLogin.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // If login is next day, increment streak
            // Note: simple check logic, can be made more robust with date comparison (ignoring time)
            const isNextDay = diffDays > 0 && diffDays <= 2 && today.getDate() !== lastLogin.getDate();

            if (isNextDay) {
                user.streak = (user.streak || 0) + 1;
            } else if (diffDays > 2) {
                // Missed a day
                user.streak = 1;
            }
            // else: same day, keep streak
        } else {
            // First login ever or since feature added
            user.streak = 1;
        }

        user.lastLogin = today;
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
                streak: user.streak,
            },
        });
    } catch (err: any) {
        console.error('Login Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function GET(req: Request) {
    try {
        await connectDB();

        const token = req.headers.get('x-auth-token');

        if (!token) {
            return NextResponse.json({ msg: 'No token, authorization denied' }, { status: 401 });
        }

        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
            const user = await User.findById(decoded.user.id).select('-password');

            if (!user) {
                return NextResponse.json({ msg: 'User not found' }, { status: 404 });
            }

            return NextResponse.json(user);
        } catch (err) {
            return NextResponse.json({ msg: 'Token is not valid' }, { status: 401 });
        }
    } catch (err: any) {
        console.error('Server Error:', err.message);
        return NextResponse.json({ msg: 'Server error' }, { status: 500 });
    }
}

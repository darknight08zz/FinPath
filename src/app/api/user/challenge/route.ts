import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/db';
import jwt from 'jsonwebtoken';

// Helper to get user from token
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
        const { action } = await req.json();

        const user = await User.findById(userDecoded.id);
        if (!user) {
            return NextResponse.json({ msg: 'User not found' }, { status: 404 });
        }

        // Initialize budgetChallenge if it doesn't exist (safe access)
        let budgetChallenge = user.get('budgetChallenge');
        console.log('Current budgetChallenge state:', budgetChallenge);

        if (!budgetChallenge) {
            console.log('Initializing budgetChallenge');
            budgetChallenge = {
                isActive: false,
                daysCompleted: 0
            };
            user.set('budgetChallenge', budgetChallenge, { strict: false });
        }

        if (action === 'start') {
            if (budgetChallenge.isActive) {
                console.log('Challenge already active, returning 400');
                return NextResponse.json({ msg: 'Challenge already active' }, { status: 400 });
            }
            const newChallenge = {
                isActive: true,
                startDate: new Date(),
                daysCompleted: 0,
                lastCheckIn: null
            };
            user.set('budgetChallenge', newChallenge, { strict: false });
        } else if (action === 'checkin') {
            if (!budgetChallenge.isActive) {
                return NextResponse.json({ msg: 'Challenge not active' }, { status: 400 });
            }

            const now = new Date();
            const lastCheckIn = budgetChallenge.lastCheckIn ? new Date(budgetChallenge.lastCheckIn) : null;

            // Check if already checked in today
            if (lastCheckIn && lastCheckIn.toDateString() === now.toDateString()) {
                return NextResponse.json({ msg: 'Already checked in today' }, { status: 400 });
            }

            // Update progress
            const updatedChallenge = {
                ...budgetChallenge,
                lastCheckIn: now,
                daysCompleted: (budgetChallenge.daysCompleted || 0) + 1
            };
            user.set('budgetChallenge', updatedChallenge, { strict: false });

            // Award XP for check-in (e.g., 50 XP)
            user.xp = (user.xp || 0) + 50;
            // Recalculate level if needed (simple logic for now)
            user.level = Math.floor(user.xp / 500) + 1;
        } else {
            return NextResponse.json({ msg: 'Invalid action' }, { status: 400 });
        }

        await user.save();
        return NextResponse.json(user);
    } catch (err: any) {
        console.error('Challenge API Error:', err);
        return NextResponse.json({ msg: 'Server error', error: err.message }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function GET() {
    try {
        await connectDB();
        const state = mongoose.connection.readyState;
        const states = {
            0: 'disconnected',
            1: 'connected',
            2: 'connecting',
            3: 'disconnecting',
        };
        return NextResponse.json({
            message: 'Database Connection Test',
            state: (states as any)[state] || 'unknown',
            connectionString: process.env.MONGO_URI ? 'Defined (Hidden)' : 'Undefined',
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

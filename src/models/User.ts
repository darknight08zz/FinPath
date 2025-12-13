import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profileImage: {
        type: String, // Base64 encoded image
        default: "",
    },
    bio: {
        type: String,
        default: "",
        maxlength: 500,
    },
    location: {
        type: String,
        default: "",
    },
    jobTitle: {
        type: String,
        default: "",
    },
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    },
    completedLessons: {
        type: [Number],
        default: [],
    },
    currentLesson: {
        type: Number,
        default: 1,
    },
    budgetChallenge: {
        isActive: {
            type: Boolean,
            default: false,
        },
        startDate: {
            type: Date,
        },
        lastCheckIn: {
            type: Date,
        },
        daysCompleted: {
            type: Number,
            default: 0,
        },
    },
    badges: [
        {
            type: String,
        },
    ],
    lastLogin: {
        type: Date,
    },
    streak: {
        type: Number,
        default: 0,
    },
    joinedChallenges: {
        type: [String],
        default: [],
    },
    completedChallenges: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Force model recompilation in dev to pick up schema changes
if (process.env.NODE_ENV === 'development') {
    delete mongoose.models.User;
}

export default mongoose.models.User || mongoose.model('User', UserSchema);

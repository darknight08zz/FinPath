import { Trophy, Users, Calendar, Star, Target, Zap } from "lucide-react";

export interface LeaderboardEntry {
    id: string; // Changed to string
    rank: number;
    name: string;
    xp: number;
    level: number;
    avatar: string;
    badges: string[];
}

export interface Challenge {
    id: string; // Changed to string
    title: string;
    description: string;
    participants: number;
    daysLeft: number;
    target: string;
    reward: string;
    icon: any;
    color: "primary" | "success" | "achievement" | "warning";
    progress: number;
}

export interface Workshop {
    id: string; // Changed to string
    title: string;
    instructor: string;
    date: string;
    time: string;
    attendees: number;
    category: string;
    image: string;
}

export const leaderboardData: LeaderboardEntry[] = [
    {
        id: "1",
        rank: 1,
        name: "Alex Johnson",
        xp: 12500,
        level: 15,
        avatar: "AJ",
        badges: ["🏆", "🔥", "⭐"],
    },
    {
        id: "2",
        rank: 2,
        name: "Sarah Smith",
        xp: 11200,
        level: 14,
        avatar: "SS",
        badges: ["🔥", "⭐"],
    },
    {
        id: "3",
        rank: 3,
        name: "Mike Brown",
        xp: 10800,
        level: 13,
        avatar: "MB",
        badges: ["⭐", "🚀"],
    },
    {
        id: "4",
        rank: 4,
        name: "Emily Davis",
        xp: 9500,
        level: 12,
        avatar: "ED",
        badges: ["🌱"],
    },
    {
        id: "5",
        rank: 5,
        name: "Chris Wilson",
        xp: 8900,
        level: 11,
        avatar: "CW",
        badges: ["🚀"],
    },
];

export const challengesData: Challenge[] = [
    {
        id: "1",
        title: "Savings Sprint",
        description: "Save $500 this month by cutting unnecessary expenses.",
        participants: 1240,
        daysLeft: 12,
        target: "$500 Saved",
        reward: "500 XP + 'Saver' Badge",
        icon: Target,
        color: "success",
        progress: 65,
    },
    {
        id: "2",
        title: "Debt Destroyer",
        description: "Pay off an extra $100 towards your highest interest debt.",
        participants: 850,
        daysLeft: 5,
        target: "$100 Extra Payment",
        reward: "300 XP + 'Freedom' Badge",
        icon: Zap,
        color: "warning",
        progress: 40,
    },
    {
        id: "3",
        title: "Investment Club",
        description: "Complete the 'Investment Fundamentals' module and start your portfolio.",
        participants: 2100,
        daysLeft: 20,
        target: "Module Complete",
        reward: "1000 XP + 'Investor' Badge",
        icon: Trophy,
        color: "primary",
        progress: 10,
    },
];

export const workshopsData: Workshop[] = [
    {
        id: "1",
        title: "Investing 101: Getting Started",
        instructor: "Warren B.",
        date: "Oct 15, 2023",
        time: "2:00 PM EST",
        attendees: 342,
        category: "Investing",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "2",
        title: "Tax Prep Masterclass",
        instructor: "Sarah C.PA",
        date: "Oct 22, 2023",
        time: "4:00 PM EST",
        attendees: 156,
        category: "Taxes",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "3", // Changed to string
        title: "Budgeting for Families",
        instructor: "Dave R.",
        date: "Oct 29, 2023",
        time: "1:00 PM EST",
        attendees: 289,
        category: "Budgeting",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1000",
    },
];

import {
    PiggyBank,
    CreditCard,
    Shield,
    TrendingUp,
    Target,
    BookOpen,
    DollarSign,
    PieChart,
    BarChart,
    Briefcase,
    Landmark,
    Scale,
    FileText,
} from "lucide-react";

export interface Module {
    id: number;
    title: string;
    description: string;
    icon: any;
    duration: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    progress: number;
    xp: number;
    color: "primary" | "success" | "achievement" | "warning" | "info" | "destructive";
}

export type LessonStepType = "intro" | "content" | "quiz" | "tip" | "complete";

export interface LessonStep {
    type: LessonStepType;
    title: string;
    content?: string;
    question?: string;
    options?: string[];
    correctAnswer?: number;
    explanation?: string;
    xpEarned?: number;
}

export const modules: Module[] = [
    {
        id: 1,
        title: "Budget Basics",
        description: "Learn to create and manage a personal budget that works for you",
        icon: PiggyBank,
        duration: "12 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "primary",
    },
    {
        id: 2,
        title: "Understanding Credit",
        description: "Master credit scores, credit cards, and building good credit habits",
        icon: CreditCard,
        duration: "15 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 200,
        color: "success",
    },
    {
        id: 3,
        title: "Saving Strategies",
        description: "Discover effective ways to save money and build an emergency fund",
        icon: Shield,
        duration: "10 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "achievement",
    },
    {
        id: 4,
        title: "Investment Fundamentals",
        description: "Get started with investing: stocks, bonds, and retirement accounts",
        icon: TrendingUp,
        duration: "18 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 250,
        color: "primary",
    },
    {
        id: 5,
        title: "Goal Setting & Planning",
        description: "Set financial goals and create actionable plans to achieve them",
        icon: Target,
        duration: "8 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "success",
    },
    {
        id: 6,
        title: "Money Mindset",
        description: "Transform your relationship with money and build healthy habits",
        icon: BookOpen,
        duration: "10 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "achievement",
    },
    // New Modules
    {
        id: 7,
        title: "The 50/30/20 Rule",
        description: "A simple framework to manage your after-tax income effectively",
        icon: PieChart,
        duration: "5 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "info",
    },
    {
        id: 8,
        title: "Tracking Expenses",
        description: "Why knowing where your money goes is the first step to financial freedom",
        icon: BarChart,
        duration: "7 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 120,
        color: "warning",
    },
    {
        id: 9,
        title: "Emergency Funds 101",
        description: "How much to save and where to keep it for life's unexpected events",
        icon: Shield,
        duration: "6 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "destructive",
    },
    {
        id: 10,
        title: "Reading a Credit Report",
        description: "Decode your credit report and spot errors that could hurt your score",
        icon: FileText,
        duration: "15 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 200,
        color: "primary",
    },
    {
        id: 11,
        title: "Interest Rates Explained",
        description: "Understand APR, compound interest, and how they affect your debt",
        icon: Scale,
        duration: "10 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 180,
        color: "warning",
    },
    {
        id: 12,
        title: "Debt: Snowball vs. Avalanche",
        description: "Compare two popular strategies for paying off debt faster",
        icon: TrendingUp,
        duration: "12 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 200,
        color: "destructive",
    },
    {
        id: 13,
        title: "Good vs. Bad Debt",
        description: "Learn to distinguish between debt that builds wealth and debt that destroys it",
        icon: Scale,
        duration: "8 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "info",
    },
    {
        id: 14,
        title: "Consolidating Debt",
        description: "When and how to combine multiple debts into a single payment",
        icon: Landmark,
        duration: "10 mins",
        difficulty: "Advanced",
        progress: 0,
        xp: 250,
        color: "achievement",
    },
    {
        id: 15,
        title: "Compound Interest Magic",
        description: "See how starting early can exponentially grow your wealth",
        icon: TrendingUp,
        duration: "8 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "success",
    },
    {
        id: 16,
        title: "Stocks vs. Bonds",
        description: "Understand the key differences and roles of these asset classes",
        icon: Briefcase,
        duration: "12 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 180,
        color: "primary",
    },
    {
        id: 17,
        title: "ETF Basics",
        description: "Why Exchange Traded Funds are a popular choice for beginners",
        icon: PieChart,
        duration: "10 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 200,
        color: "info",
    },
    {
        id: 18,
        title: "Risk Tolerance",
        description: "Determine your personal comfort level with investment risk",
        icon: Target,
        duration: "5 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "warning",
    },
];

export const lessons: { [key: number]: LessonStep[] } = {
    1: [
        {
            type: "intro",
            title: "Understanding Your Income",
            content: "In this lesson, you'll learn the difference between gross income and net income, and why this matters for your financial planning.",
        },
        {
            type: "content",
            title: "What is Gross Income?",
            content: "Gross income is the total amount of money you earn before any deductions are taken out. This includes your salary, bonuses, tips, and any other earnings.\n\nFor example, if your job offers you $50,000 per year, that's your gross income.",
        },
        {
            type: "quiz",
            title: "Quick Check",
            question: "Sarah earns $4,000 per month from her job. What is her gross income?",
            options: [
                "$4,000",
                "$3,500 (after taxes)",
                "$48,000 (annual)",
                "Both A and C",
            ],
            correctAnswer: 3,
            explanation: "Her gross monthly income is $4,000, and her gross annual income is $48,000. Both are correct ways to express gross income.",
        },
        {
            type: "content",
            title: "What is Net Income?",
            content: "Net income (also called take-home pay) is what's left after all deductions:\n\n• Income taxes\n• Social Security\n• Medicare\n• Health insurance\n• Retirement contributions\n\nThis is the actual amount that goes into your bank account.",
        },
        {
            type: "quiz",
            title: "Test Your Understanding",
            question: "Why is net income more important than gross income for budgeting?",
            options: [
                "It sounds more professional",
                "It's the actual money you can spend",
                "It's always a bigger number",
                "Employers prefer it",
            ],
            correctAnswer: 1,
            explanation: "Net income is what you actually receive and can spend. When budgeting, you need to work with your actual take-home pay, not your gross income.",
        },
        {
            type: "tip",
            title: "Pro Tip",
            content: "Always base your budget on your net income, not gross income. A common mistake is calculating expenses based on gross income, which leads to overspending.\n\n💡 Try this: Look at your last paycheck and identify the difference between your gross and net pay.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Great job! You've learned the fundamental difference between gross and net income. This knowledge will help you create more accurate budgets.",
            xpEarned: 50,
        },
    ],
    // Placeholder content for other lessons to avoid errors, in a real app these would be fully populated
    7: [
        {
            type: "intro",
            title: "The 50/30/20 Rule",
            content: "A simple, intuitive framework for managing your money without complex spreadsheets.",
        },
        {
            type: "content",
            title: "The Breakdown",
            content: "The rule suggests dividing your after-tax income into three buckets:\n\n• 50% for Needs (Rent, Groceries, Utilities)\n• 30% for Wants (Dining out, Hobbies, Entertainment)\n• 20% for Savings & Debt Repayment",
        },
        {
            type: "quiz",
            title: "Scenario",
            question: "If your monthly take-home pay is $3,000, how much should you aim to save according to this rule?",
            options: ["$300", "$600", "$1,000", "$1,500"],
            correctAnswer: 1,
            explanation: "20% of $3,000 is $600. This amount should go towards savings, investments, or extra debt payments.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You now have a solid framework for budgeting! Try applying this to your own income this month.",
            xpEarned: 100,
        },
    ],
    12: [
        {
            type: "intro",
            title: "Debt Repayment Strategies",
            content: "Learn two powerful methods to tackle debt: The Snowball and The Avalanche.",
        },
        {
            type: "content",
            title: "The Debt Snowball",
            content: "With the Snowball method, you list your debts from smallest balance to largest balance.\n\nYou pay minimums on everything, but throw all extra money at the SMALLEST debt. When it's gone, you roll that payment into the next smallest.",
        },
        {
            type: "content",
            title: "The Debt Avalanche",
            content: "With the Avalanche method, you list debts from highest INTEREST RATE to lowest.\n\nYou attack the debt with the highest rate first. Mathematically, this saves you the most money over time.",
        },
        {
            type: "quiz",
            title: "Which is better?",
            question: "Which method is better for someone who needs quick wins to stay motivated?",
            options: ["Debt Avalanche", "Debt Snowball", "Neither", "Paying randomly"],
            correctAnswer: 1,
            explanation: "The Debt Snowball provides quick psychological wins by eliminating small debts fast, which helps build momentum.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Choose the strategy that fits your personality best. The best strategy is the one you stick to!",
            xpEarned: 200,
        },
    ],
    15: [
        {
            type: "intro",
            title: "The Magic of Compound Interest",
            content: "Einstein reportedly called it the 'eighth wonder of the world'. Let's see why.",
        },
        {
            type: "content",
            title: "How it Works",
            content: "Compound interest is when you earn interest on your interest. Over time, this creates a snowball effect that can turn small regular contributions into massive wealth.",
        },
        {
            type: "tip",
            title: "Time is Your Best Friend",
            content: "The earlier you start, the less you need to save to reach the same goal. Starting 10 years earlier can double your final amount without saving a penny more!",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Start investing now, even if it's a small amount. Time is your greatest asset.",
            xpEarned: 150,
        },
    ]
};

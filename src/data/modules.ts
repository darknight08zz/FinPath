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
            xpEarned: 150,
        },
    ],
    2: [
        {
            type: "intro",
            title: "Demystifying Credit",
            content: "Credit can be a powerful tool or a dangerous trap. In this lesson, we'll break down how credit works and how to make it work for you.",
        },
        {
            type: "content",
            title: "What is a Credit Score?",
            content: "Your credit score is a three-digit number (usually between 300 and 850) that tells lenders how likely you are to repay debt. Think of it as your financial report card.\n\n• 720+: Excellent\n• 690-719: Good\n• 630-689: Fair\n• <629: Poor",
        },
        {
            type: "content",
            title: "What Makes Up Your Score?",
            content: "Your FICO score is calculated based on five factors:\n\n1. Payment History (35%): Do you pay on time?\n2. Amounts Owed (30%): How much of your available credit are you using?\n3. Length of Credit History (15%): How long have you had credit?\n4. New Credit (10%): Have you opened many accounts recently?\n5. Credit Mix (10%): Do you have different types of credit?",
        },
        {
            type: "quiz",
            title: "Credit Quiz",
            question: "Which factor has the biggest impact on your credit score?",
            options: ["Total debt amount", "Payment history", "Number of credit cards", "Age"],
            correctAnswer: 1,
            explanation: "Payment history accounts for 35% of your score. Missing even one payment can significantly drop your score.",
        },
        {
            type: "tip",
            title: "Utilization Rule",
            content: "Try to keep your credit utilization below 30%. If you have a $1,000 limit, try not to carry a balance of more than $300.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You now understand the building blocks of credit. Use this knowledge to build a strong financial reputation!",
            xpEarned: 200,
        },
    ],
    3: [
        {
            type: "intro",
            title: "The Art of Saving",
            content: "Saving isn't just about spending less; it's about building security and freedom. Let's explore strategies to make saving effortless.",
        },
        {
            type: "content",
            title: "Pay Yourself First",
            content: "Instead of saving what's left after spending, spend what's left after saving. Set up an automatic transfer to your savings account on payday.\n\nTreat your savings contribution like a mandatory bill that must be paid.",
        },
        {
            type: "quiz",
            title: "Strategy Check",
            question: "What is the 'Pay Yourself First' method?",
            options: [
                "Buying something nice for yourself before paying bills",
                "Saving a portion of income immediately upon receiving it",
                "Paying off debts before buying groceries",
                "Using a credit card for everything",
            ],
            correctAnswer: 1,
            explanation: "It means prioritizing your savings goals by setting aside money as soon as you get paid, ensuring you actually save.",
        },
        {
            type: "content",
            title: "The Power of Automation",
            content: "Willpower is a limited resource. Automation removes the need for willpower.\n\n• Auto-transfer to savings\n• Auto-invest in 401(k)/IRA\n• Auto-pay bills\n\nWhen you don't see the money in your checking account, you learn to live without it.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "By automating your savings, you're building wealth on autopilot. Great work!",
            xpEarned: 150,
        },
    ],
    4: [
        {
            type: "intro",
            title: "Investing 101",
            content: "Investing is how you make your money work for you. It's the key to building long-term wealth and beating inflation.",
        },
        {
            type: "content",
            title: "Risk vs. Reward",
            content: "All investing involves risk. Generally, higher potential returns come with higher risk.\n\n• Cash: Low risk, low return (loses value to inflation)\n• Bonds: Medium risk, medium return\n• Stocks: Higher risk, higher potential return",
        },
        {
            type: "content",
            title: "Diversification",
            content: "Don't put all your eggs in one basket. Diversification means spreading your money across different investments to reduce risk.\n\nIf one company fails, you don't lose everything because you own hundreds of others.",
        },
        {
            type: "quiz",
            title: "Investment Logic",
            question: "Why is diversification important?",
            options: [
                "It guarantees high returns",
                "It eliminates all fees",
                "It reduces risk by spreading investments",
                "It makes tax filing easier",
            ],
            correctAnswer: 2,
            explanation: "Diversification protects your portfolio. If one sector crashes, others might rise or stay stable, smoothing out your returns.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You've taken the first step into the world of investing. Remember: Time in the market beats timing the market.",
            xpEarned: 250,
        },
    ],
    5: [
        {
            type: "intro",
            title: "Setting Financial Goals",
            content: "A goal without a plan is just a wish. Let's learn how to set financial goals that you'll actually achieve.",
        },
        {
            type: "content",
            title: "SMART Goals",
            content: "Make your goals SMART:\n\n• Specific: 'Save $5,000' vs 'Save money'\n• Measurable: Trackable progress\n• Achievable: Realistic for your income\n• Relevant: Aligns with your values\n• Time-bound: Has a deadline",
        },
        {
            type: "quiz",
            title: "Goal Check",
            question: "Which is a SMART goal?",
            options: [
                "I want to be rich someday",
                "I will save $10,000 for a down payment by Dec 31st",
                "I will try to spend less on food",
                "I need to invest more",
            ],
            correctAnswer: 1,
            explanation: "This goal is Specific ($10k down payment), Measurable ($10k), Time-bound (Dec 31st), and presumably Achievable/Relevant.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "With SMART goals, you have a roadmap to success. Now go set your first target!",
            xpEarned: 100,
        },
    ],
    6: [
        {
            type: "intro",
            title: "Mastering Your Money Mindset",
            content: "Your beliefs about money drive your financial decisions. Let's explore how to cultivate a healthy money mindset.",
        },
        {
            type: "content",
            title: "Scarcity vs. Abundance",
            content: "A scarcity mindset focuses on what you lack ('I'll never have enough'). An abundance mindset focuses on possibility ('How can I afford this?').\n\nShifting your language from 'I can't' to 'How can I' opens up creative solutions.",
        },
        {
            type: "tip",
            title: "Pause Before Purchase",
            content: "Implement a 24-hour rule for non-essential purchases. This simple pause helps separate impulse from genuine need.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Your mindset is the foundation of your financial house. Keep building positive beliefs!",
            xpEarned: 150,
        },
    ],
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
    8: [
        {
            type: "intro",
            title: "Tracking Your Expenses",
            content: "You can't manage what you don't measure. Tracking expenses is the diagnostic tool for your financial health.",
        },
        {
            type: "content",
            title: "Where Does It Go?",
            content: "Small leaks sink great ships. That $5 daily coffee is $1,800 a year. Tracking helps you identify these leaks.\n\nUse an app, a spreadsheet, or a notebook. The method doesn't matter; consistency does.",
        },
        {
            type: "quiz",
            title: "Awareness Check",
            question: "What is the primary benefit of tracking expenses?",
            options: [
                "It makes you feel guilty",
                "It takes up free time",
                "It creates awareness of spending habits",
                "It stops you from spending entirely",
            ],
            correctAnswer: 2,
            explanation: "Tracking creates awareness. Once you see where money is going, you can make conscious choices to redirect it.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Knowledge is power. By tracking your spending, you regain control over your financial life.",
            xpEarned: 120,
        },
    ],
    9: [
        {
            type: "intro",
            title: "Building an Emergency Fund",
            content: "Life happens. The car breaks down, you lose a job, or a medical bill pops up. An emergency fund turns a disaster into an inconvenience.",
        },
        {
            type: "content",
            title: "How Much is Enough?",
            content: "Aim for 3 to 6 months of essential living expenses. If your bare-bones monthly budget is $2,000, aim for $6,000 - $12,000.\n\nStart small: $1,000 is a great first milestone.",
        },
        {
            type: "content",
            title: "Where to Keep It?",
            content: "Keep it liquid (accessible) but separate from your checking account. A High-Yield Savings Account (HYSA) is ideal because it earns interest while keeping the money safe.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Your emergency fund is your financial shield. Start building it today!",
            xpEarned: 100,
        },
    ],
    10: [
        {
            type: "intro",
            title: "Reading Your Credit Report",
            content: "Your credit report contains the data that determines your score. Errors are common, so you need to know how to check it.",
        },
        {
            type: "content",
            title: "The Big Three",
            content: "There are three major credit bureaus: Equifax, Experian, and TransUnion. You are entitled to a free report from each of them every year at AnnualCreditReport.com.",
        },
        {
            type: "quiz",
            title: "Fact Check",
            question: "How often can you get a free credit report from the major bureaus?",
            options: ["Once a lifetime", "Once a year", "Only when denied credit", "Every month"],
            correctAnswer: 1,
            explanation: "By law, you can access your report for free once every 12 months from each bureau.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Regularly checking your report protects you from identity theft and errors. Mark your calendar!",
            xpEarned: 200,
        },
    ],
    11: [
        {
            type: "intro",
            title: "Interest Rates Explained",
            content: "Interest is the price of money. When you borrow, you pay it. When you save, you earn it.",
        },
        {
            type: "content",
            title: "APR vs. APY",
            content: "• APR (Annual Percentage Rate): The cost of borrowing (e.g., credit cards, loans). Lower is better.\n• APY (Annual Percentage Yield): The return on savings. Higher is better.",
        },
        {
            type: "content",
            title: "Simple vs. Compound",
            content: "Simple interest is calculated only on the principal. Compound interest is calculated on the principal PLUS accumulated interest.\n\nCompound interest works against you with debt, but for you with investing.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Understanding interest rates helps you make smarter borrowing and saving decisions.",
            xpEarned: 180,
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
    13: [
        {
            type: "intro",
            title: "Good Debt vs. Bad Debt",
            content: "Not all debt is created equal. Some debt can help you build wealth, while other debt destroys it.",
        },
        {
            type: "content",
            title: "The Difference",
            content: "• Good Debt: Used to buy assets that increase in value or generate income (e.g., mortgage, student loans for high-ROI degrees, business loans).\n• Bad Debt: Used to buy things that lose value (e.g., credit card debt for clothes, high-interest car loans).",
        },
        {
            type: "quiz",
            title: "Debt ID",
            question: "Which of the following is typically considered 'bad debt'?",
            options: ["A mortgage on a rental property", "A student loan for medical school", "Credit card debt for a vacation", "A small business loan"],
            correctAnswer: 2,
            explanation: "A vacation is an experience, not an asset. Financing it with high-interest debt is a wealth-destroying move.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Leverage good debt carefully, and avoid bad debt whenever possible.",
            xpEarned: 150,
        },
    ],
    14: [
        {
            type: "intro",
            title: "Consolidating Debt",
            content: "Juggling multiple payments? Consolidation might simplify your life and save you money.",
        },
        {
            type: "content",
            title: "How it Works",
            content: "Debt consolidation involves taking out one new loan to pay off multiple smaller debts. Ideally, the new loan has a lower interest rate than the average of your old debts.",
        },
        {
            type: "tip",
            title: "Warning",
            content: "Consolidation solves the symptom, not the problem. If you consolidate credit card debt but keep spending on the cards, you'll end up in deeper trouble.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Consolidation is a tool, not a cure. Use it wisely as part of a broader repayment plan.",
            xpEarned: 250,
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
    ],
    16: [
        {
            type: "intro",
            title: "Stocks vs. Bonds",
            content: "These are the two main building blocks of most investment portfolios. Let's understand the difference.",
        },
        {
            type: "content",
            title: "Stocks (Equity)",
            content: "When you buy a stock, you own a tiny piece of a company. You profit if the company grows or pays dividends. Stocks are volatile but offer high long-term growth.",
        },
        {
            type: "content",
            title: "Bonds (Debt)",
            content: "When you buy a bond, you are lending money to a government or company. They pay you interest in return. Bonds are generally safer than stocks but offer lower returns.",
        },
        {
            type: "quiz",
            title: "Risk Profile",
            question: "If you are young and investing for retirement in 40 years, which asset class is typically recommended for growth?",
            options: ["100% Cash", "Mostly Bonds", "Mostly Stocks", "Gold bars"],
            correctAnswer: 2,
            explanation: "Stocks have historically provided the highest returns over long periods, making them suitable for long-term goals despite short-term volatility.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Balancing stocks and bonds allows you to manage risk while pursuing growth.",
            xpEarned: 180,
        },
    ],
    17: [
        {
            type: "intro",
            title: "ETF Basics",
            content: "Exchange Traded Funds (ETFs) have revolutionized investing for everyday people.",
        },
        {
            type: "content",
            title: "What is an ETF?",
            content: "An ETF is a basket of securities (like stocks) that trades on an exchange. Buying one share of an S&P 500 ETF instantly gives you exposure to 500 of the largest US companies.",
        },
        {
            type: "content",
            title: "Why ETFs?",
            content: "• Diversification: Instant spread of risk.\n• Low Cost: Often cheaper than mutual funds.\n• Simplicity: Buy and hold strategy.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "ETFs are a fantastic tool for building a diversified portfolio with minimal effort.",
            xpEarned: 200,
        },
    ],
    18: [
        {
            type: "intro",
            title: "Understanding Risk Tolerance",
            content: "Investing isn't just about math; it's about psychology. How much volatility can you handle?",
        },
        {
            type: "content",
            title: "Factors of Risk",
            content: "1. Time Horizon: When do you need the money? (Longer = more risk capacity)\n2. Financial Capacity: Can you afford to lose money?\n3. Emotional Tolerance: Will you panic sell if the market drops 20%?",
        },
        {
            type: "quiz",
            title: "Self Check",
            question: "If the stock market drops 20% tomorrow, what should a long-term investor do?",
            options: ["Sell everything to prevent further loss", "Stick to the plan and do nothing (or buy more)", "Check their account every hour", "Complain on social media"],
            correctAnswer: 1,
            explanation: "Panic selling locks in losses. History shows markets recover over time. Sticking to the plan is key.",
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Knowing your risk tolerance helps you build a portfolio you can stick with, even when times get tough.",
            xpEarned: 100,
        },
    ],
};

'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
    ArrowLeft,
    PiggyBank,
    DollarSign,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Info,
    Calculator,
    LineChart,
    Gamepad2
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "next-themes";

const Tools = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();
    const [income, setIncome] = useState(5000);
    const [needs, setNeeds] = useState(50);
    const [wants, setWants] = useState(30);
    const [savings, setSavings] = useState(20);
    const [advice, setAdvice] = useState<any[]>([]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    // Smart Advice Engine
    useEffect(() => {
        const newAdvice = [];

        // Needs Analysis
        if (needs > 50) {
            newAdvice.push({
                type: 'warning',
                text: "Your fixed costs are high (>50%). Consider auditing subscriptions or negotiating bills to free up cash flow.",
                category: "Needs"
            });
        }

        // Wants Analysis
        if (wants > 30) {
            newAdvice.push({
                type: 'warning',
                text: "Discretionary spending is high (>30%). Try the '7-Day Pause' rule before buying non-essentials.",
                category: "Wants"
            });
        }

        // Savings Analysis
        if (savings < 20) {
            newAdvice.push({
                type: 'alert',
                text: "Savings rate is below recommended 20%. Even +1% helps compound interest work for you!",
                category: "Savings"
            });
        } else if (savings >= 30) {
            newAdvice.push({
                type: 'success',
                text: "Excellent savings rate! You are accelerating your path to financial freedom.",
                category: "Savings"
            });
        }

        if (needs + wants + savings !== 100) {
            newAdvice.push({
                type: 'error',
                text: `Total allocation must equal 100% (Currently: ${needs + wants + savings}%)`,
                category: "Allocation"
            });
        } else if (newAdvice.length === 0) {
            newAdvice.push({
                type: 'success',
                text: "Your budget is perfectly balanced! Stick to this plan.",
                category: "General"
            });
        }

        setAdvice(newAdvice);
    }, [needs, wants, savings]);

    if (isLoading || !isAuthenticated) {
        return null; // Or loading spinner
    }

    const needsAmount = (income * needs) / 100;
    const wantsAmount = (income * wants) / 100;
    const savingsAmount = (income * savings) / 100;

    const data = [
        { name: "Needs", value: needsAmount, color: "hsl(var(--primary))" },
        { name: "Wants", value: wantsAmount, color: "hsl(var(--success))" },
        { name: "Savings", value: savingsAmount, color: "hsl(var(--achievement))" },
    ];

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            {/* Header */}
            <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-achievement bg-clip-text text-transparent">
                            Smart Financial Tools
                        </h1>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Main Budget Tool */}
                <div className="glass-card rounded-2xl p-8 mb-12 animate-fade-in border-primary/20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary animate-bounce-subtle">
                            <PiggyBank className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Smart Budget Auditor</h2>
                            <p className="text-muted-foreground">Analyze your 50/30/20 allocation with AI-driven insights</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Input Section */}
                        <div className="space-y-8">
                            <div>
                                <Label htmlFor="income" className="text-base font-semibold mb-2 block">
                                    Monthly Income (After Tax)
                                </Label>
                                <div className="relative group">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <Input
                                        id="income"
                                        type="number"
                                        value={income}
                                        onChange={(e) => setIncome(Number(e.target.value))}
                                        className="pl-10 text-lg h-12 bg-background/50 border-primary/20 focus:border-primary transition-all"
                                        placeholder="5000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Sliders */}
                                {[{ label: 'Needs', val: needs, set: setNeeds, color: 'text-primary', desc: 'Rent, Bills, Groceries' },
                                { label: 'Wants', val: wants, set: setWants, color: 'text-success', desc: 'Dining, Hobbies, Shopping' },
                                { label: 'Savings', val: savings, set: setSavings, color: 'text-achievement', desc: 'Investments, Debt, Emergency Fund' }
                                ].map((item) => (
                                    <div key={item.label} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <Label className={`font-bold text-lg ${item.color}`}>{item.label}</Label>
                                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                            <span className="text-xl font-bold bg-background/80 px-3 py-1 rounded-md border">{item.val}%</span>
                                        </div>
                                        <Slider
                                            value={[item.val]}
                                            onValueChange={(val) => item.set(val[0])}
                                            max={100}
                                            step={1}
                                            className="py-2"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visualization & Advice */}
                        <div className="space-y-6">
                            {/* Chart */}
                            <div className="h-64 relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            paddingAngle={4}
                                            dataKey="value"
                                            cornerRadius={6}
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value: number) => `$${value.toFixed(0)}`}
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <span className="text-sm text-muted-foreground">Total</span>
                                        <p className="text-2xl font-bold border-b border-primary/20">${income}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Advice Cards */}
                            <div className="space-y-3">
                                {advice.map((tip, i) => (
                                    <div
                                        key={i}
                                        className={`p-4 rounded-xl flex gap-3 items-start border backdrop-blur-sm transition-all duration-300 animate-slide-in
                                            ${tip.type === 'error' ? 'bg-destructive/10 border-destructive/30 text-destructive' :
                                                tip.type === 'warning' ? 'bg-warning/10 border-warning/30 text-warning-foreground' :
                                                    tip.type === 'alert' ? 'bg-info/10 border-info/30 text-info-foreground' :
                                                        'bg-success/10 border-success/30 text-success-foreground'}`}
                                    >
                                        {tip.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> :
                                            tip.type === 'error' ? <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" /> :
                                                <Info className="w-5 h-5 shrink-0 mt-0.5" />}
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-wide opacity-80 mb-1">{tip.category}</h4>
                                            <p className="text-sm font-medium leading-relaxed">{tip.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Tools Section */}
                <h3 className="text-xl font-bold mb-6 ml-1 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    More Calculators
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/tools/emi" className="block">
                        <Card className="glass-panel p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full border-primary/10">
                            <div className="flex flex-col gap-4">
                                <div className="p-3 bg-primary/10 w-fit rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">EMI Calculator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Calculate monthly loan payments and total interest costs.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/tools/investment" className="block">
                        <Card className="glass-panel p-6 hover:shadow-xl hover:shadow-success/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full border-success/10">
                            <div className="flex flex-col gap-4">
                                <div className="p-3 bg-success/10 w-fit rounded-xl text-success group-hover:bg-success group-hover:text-success-foreground transition-colors">
                                    <LineChart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-success transition-colors">Investment Simulator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Visualize the power of compound interest over time.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/tools/scenario" className="block">
                        <Card className="glass-panel p-6 hover:shadow-xl hover:shadow-achievement/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full border-achievement/10">
                            <div className="flex flex-col gap-4">
                                <div className="p-3 bg-achievement/10 w-fit rounded-xl text-achievement group-hover:bg-achievement group-hover:text-achievement-foreground transition-colors">
                                    <Gamepad2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-achievement transition-colors">Financial Scenarios</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Roleplay real-world financial decisions in a safe environment.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tools;

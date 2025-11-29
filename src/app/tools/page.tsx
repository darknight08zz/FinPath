'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, PiggyBank, DollarSign, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useAuth } from "@/context/AuthContext";

const Tools = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();
    const [income, setIncome] = useState(5000);
    const [needs, setNeeds] = useState(50);
    const [wants, setWants] = useState(30);
    const [savings, setSavings] = useState(20);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null;
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
            <header className="border-b bg-card shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold">Financial Tools</h1>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Card className="p-8 animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <PiggyBank className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Budget Planner</h2>
                            <p className="text-muted-foreground">Create your 50/30/20 budget plan</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Input Section */}
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="income" className="text-base font-semibold mb-2 block">
                                    Monthly Income
                                </Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="income"
                                        type="number"
                                        value={income}
                                        onChange={(e) => setIncome(Number(e.target.value))}
                                        className="pl-10 text-lg"
                                        placeholder="5000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Needs (Essential)</Label>
                                        <span className="text-sm font-medium">{needs}%</span>
                                    </div>
                                    <Slider
                                        value={[needs]}
                                        onValueChange={(val) => setNeeds(val[0])}
                                        max={100}
                                        step={5}
                                        className="mb-1"
                                    />
                                    <p className="text-xs text-muted-foreground">Rent, utilities, groceries, insurance</p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Wants (Lifestyle)</Label>
                                        <span className="text-sm font-medium">{wants}%</span>
                                    </div>
                                    <Slider
                                        value={[wants]}
                                        onValueChange={(val) => setWants(val[0])}
                                        max={100}
                                        step={5}
                                        className="mb-1"
                                    />
                                    <p className="text-xs text-muted-foreground">Entertainment, dining out, hobbies</p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Savings & Debt</Label>
                                        <span className="text-sm font-medium">{savings}%</span>
                                    </div>
                                    <Slider
                                        value={[savings]}
                                        onValueChange={(val) => setSavings(val[0])}
                                        max={100}
                                        step={5}
                                        className="mb-1"
                                    />
                                    <p className="text-xs text-muted-foreground">Emergency fund, investments, debt repayment</p>
                                </div>
                            </div>

                            {needs + wants + savings !== 100 && (
                                <Card className="p-4 bg-destructive/10 border-destructive/20">
                                    <p className="text-sm text-destructive font-medium">
                                        Total must equal 100%. Currently: {needs + wants + savings}%
                                    </p>
                                </Card>
                            )}
                        </div>

                        {/* Results Section */}
                        <div className="space-y-6">
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-3">
                                <Card className="p-4 border-l-4 border-l-primary">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Needs</span>
                                        <span className="text-2xl font-bold">${needsAmount.toFixed(0)}</span>
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-success">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Wants</span>
                                        <span className="text-2xl font-bold">${wantsAmount.toFixed(0)}</span>
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-achievement">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Savings</span>
                                        <span className="text-2xl font-bold">${savingsAmount.toFixed(0)}</span>
                                    </div>
                                </Card>
                            </div>

                            <Button className="w-full" size="lg">
                                <TrendingUp className="w-5 h-5 mr-2" />
                                Save Budget Plan
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Additional Tools Preview */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <Link href="/tools/emi" className="block">
                        <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">EMI Calculator</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Calculate loan payments and total interest
                            </p>
                            <Button variant="outline" className="w-full">Calculate EMI</Button>
                        </Card>
                    </Link>

                    <Link href="/tools/investment" className="block">
                        <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Investment Simulator</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Project your investment growth over time
                            </p>
                            <Button variant="outline" className="w-full">Simulate Growth</Button>
                        </Card>
                    </Link>

                    <Link href="/tools/scenario" className="block">
                        <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Financial Scenarios</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Practice real-world financial decisions
                            </p>
                            <Button variant="outline" className="w-full">Play Game</Button>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tools;

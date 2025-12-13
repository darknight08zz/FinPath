'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, TrendingUp, Download, IndianRupee } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useAuth } from "@/context/AuthContext";



const InvestmentSimulator = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();
    const [monthlySip, setMonthlySip] = useState(5000);
    const [years, setYears] = useState(10);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [inflation, setInflation] = useState(6);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null;
    }

    // Calculate future value using compound interest
    const months = years * 12;
    const monthlyRate = expectedReturn / 12 / 100;

    // SIP Future Value formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r)
    const futureValue = monthlySip * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvested = monthlySip * months;
    const totalReturns = futureValue - totalInvested;

    // Inflation-adjusted value
    const inflationRate = inflation / 100;
    const realValue = futureValue / Math.pow(1 + inflationRate, years);

    // Generate year-wise data
    const generateGrowthData = () => {
        const data = [];
        let invested = 0;
        let value = 0;

        for (let year = 1; year <= years; year++) {
            const monthsElapsed = year * 12;
            invested = monthlySip * monthsElapsed;
            value = monthlySip * (((Math.pow(1 + monthlyRate, monthsElapsed) - 1) / monthlyRate) * (1 + monthlyRate));
            const realVal = value / Math.pow(1 + inflationRate, year);

            data.push({
                year,
                invested: Math.round(invested),
                value: Math.round(value),
                realValue: Math.round(realVal),
            });
        }

        return data;
    };

    const growthData = generateGrowthData();

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/tools">
                            <Button variant="ghost" size="icon" className="hover:bg-success/10">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                            Investment Simulator
                        </h1>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="glass-card rounded-2xl p-8 animate-fade-in border-success/20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-success/10 rounded-2xl text-success animate-bounce-subtle">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">SIP Investment Calculator</h2>
                            <p className="text-muted-foreground">Visualize the power of compound interest</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Input Section */}
                        <div className="space-y-8">
                            <div>
                                <Label htmlFor="sip" className="text-base font-semibold mb-2 block">
                                    Monthly SIP Amount
                                </Label>
                                <div className="relative group">
                                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-success transition-colors" />
                                    <Input
                                        id="sip"
                                        type="number"
                                        value={monthlySip}
                                        onChange={(e) => setMonthlySip(Number(e.target.value))}
                                        className="pl-10 text-lg h-12 bg-background/50 border-success/20 focus:border-success transition-all"
                                        placeholder="5000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Investment Period (Years)</Label>
                                        <span className="text-sm font-medium bg-background/80 px-2 py-1 rounded border">{years} years</span>
                                    </div>
                                    <Slider
                                        value={[years]}
                                        onValueChange={(val) => setYears(val[0])}
                                        min={1}
                                        max={30}
                                        step={1}
                                        className="py-2"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Expected Return (% per year)</Label>
                                        <span className="text-sm font-medium bg-background/80 px-2 py-1 rounded border">{expectedReturn}%</span>
                                    </div>
                                    <Slider
                                        value={[expectedReturn]}
                                        onValueChange={(val) => setExpectedReturn(val[0])}
                                        min={1}
                                        max={25}
                                        step={0.5}
                                        className="py-2"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">Nifty 50 historical average: ~12%</p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Expected Inflation (%)</Label>
                                        <span className="text-sm font-medium bg-background/80 px-2 py-1 rounded border">{inflation}%</span>
                                    </div>
                                    <Slider
                                        value={[inflation]}
                                        onValueChange={(val) => setInflation(val[0])}
                                        min={1}
                                        max={12}
                                        step={0.5}
                                        className="py-2"
                                    />
                                </div>
                            </div>

                            {/* Results Cards */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <Card className="p-5 border-l-4 border-l-success bg-success/5 col-span-2 shadow-lg shadow-success/5">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="font-medium text-muted-foreground block text-sm">Projected Future Value</span>
                                            <span className="text-3xl font-bold text-success">₹{Math.round(futureValue).toLocaleString('en-IN')}</span>
                                        </div>
                                        <TrendingUp className="w-8 h-8 text-success opacity-20" />
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-primary bg-background/50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground mb-1">Total Invested</span>
                                        <span className="text-lg font-bold">₹{Math.round(totalInvested).toLocaleString('en-IN')}</span>
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-achievement bg-background/50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground mb-1">Wealth Gained</span>
                                        <span className="text-lg font-bold">₹{Math.round(totalReturns).toLocaleString('en-IN')}</span>
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-info bg-background/50 col-span-2">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="font-medium text-info block">Inflation-Adjusted Value</span>
                                            <p className="text-xs text-muted-foreground">Purchasing power in today's money</p>
                                        </div>
                                        <span className="text-xl font-bold text-info">₹{Math.round(realValue).toLocaleString('en-IN')}</span>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Chart Section */}
                        <div className="space-y-6">
                            <div className="h-96 w-full glass-panel p-4 rounded-xl">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                        <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${value / 1000}k`} />
                                        <Tooltip
                                            formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                            labelFormatter={(label) => `Year ${label}`}
                                        />
                                        <Legend />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="hsl(var(--success))"
                                            fillOpacity={1}
                                            fill="url(#colorValue)"
                                            name="Future Value"
                                            strokeWidth={3}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="invested"
                                            stroke="hsl(var(--primary))"
                                            fillOpacity={1}
                                            fill="url(#colorInvested)"
                                            name="Invested Amount"
                                            strokeWidth={3}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="realValue"
                                            stroke="hsl(var(--info))"
                                            fill="none"
                                            strokeDasharray="5 5"
                                            name="Real Value (Adjusted)"
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Key Insights */}
                            <Card className="glass-panel border-0 bg-success/5 p-6">
                                <h3 className="font-bold mb-4 flex items-center gap-2 text-lg">
                                    <TrendingUp className="w-5 h-5 text-success" />
                                    Investment Insights
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center p-2 rounded hover:bg-white/5">
                                        <span className="text-muted-foreground">Return on Investment</span>
                                        <span className="font-bold text-success text-lg">{((totalReturns / totalInvested) * 100).toFixed(1)}%</span>
                                    </li>
                                    <li className="flex justify-between items-center p-2 rounded hover:bg-white/5">
                                        <span className="text-muted-foreground">Wealth Multiplier</span>
                                        <span className="font-bold text-lg">{(futureValue / totalInvested).toFixed(2)}x</span>
                                    </li>
                                    <li className="flex justify-between items-center p-2 rounded hover:bg-white/5">
                                        <span className="text-muted-foreground">Real Return (after inflation)</span>
                                        <span className="font-bold text-info text-lg">{(expectedReturn - inflation).toFixed(1)}%</span>
                                    </li>
                                </ul>
                            </Card>

                            <Button className="w-full bg-success hover:bg-success/90 text-white shadow-lg shadow-success/20" size="lg">
                                <Download className="w-5 h-5 mr-2" />
                                Export Projection
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentSimulator;

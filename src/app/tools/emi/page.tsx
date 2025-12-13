'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Calculator, Download, IndianRupee } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useAuth } from "@/context/AuthContext";



const EmiCalculator = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();
    const [principal, setPrincipal] = useState(500000);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(5);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null;
    }

    // Calculate EMI using formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    const emi = monthlyRate !== 0
        ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
        : principal / months;

    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    // Generate amortization schedule
    const generateSchedule = () => {
        const schedule = [];
        let balance = principal;

        for (let year = 1; year <= tenure; year++) {
            let yearlyPrincipal = 0;
            let yearlyInterest = 0;

            for (let month = 1; month <= 12; month++) {
                const interest = balance * monthlyRate;
                const principalPayment = emi - interest;
                balance -= principalPayment;
                yearlyPrincipal += principalPayment;
                yearlyInterest += interest;
            }

            schedule.push({
                year,
                principal: Math.round(yearlyPrincipal),
                interest: Math.round(yearlyInterest),
                balance: Math.max(0, Math.round(balance)),
            });
        }

        return schedule;
    };

    const schedule = generateSchedule();

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/tools">
                            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-info to-primary bg-clip-text text-transparent">
                            EMI Calculator
                        </h1>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="glass-card rounded-2xl p-8 animate-fade-in border-info/20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-info/10 rounded-2xl text-info animate-bounce-subtle">
                            <Calculator className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Loan EMI Calculator</h2>
                            <p className="text-muted-foreground">Calculate your monthly installments with precision</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Input Section */}
                        <div className="space-y-8">
                            <div>
                                <Label htmlFor="principal" className="text-base font-semibold mb-2 block">
                                    Loan Amount
                                </Label>
                                <div className="relative group">
                                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-info transition-colors" />
                                    <Input
                                        id="principal"
                                        type="number"
                                        value={principal}
                                        onChange={(e) => setPrincipal(Number(e.target.value))}
                                        className="pl-10 text-lg h-12 bg-background/50 border-info/20 focus:border-info transition-all"
                                        placeholder="500000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Interest Rate (% per year)</Label>
                                        <span className="text-sm font-medium bg-background/80 px-2 py-1 rounded border">{rate}%</span>
                                    </div>
                                    <Slider
                                        value={[rate]}
                                        onValueChange={(val) => setRate(val[0])}
                                        min={1}
                                        max={20}
                                        step={0.5}
                                        className="py-2"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <Label className="font-semibold">Loan Tenure (Years)</Label>
                                        <span className="text-sm font-medium bg-background/80 px-2 py-1 rounded border">{tenure} years</span>
                                    </div>
                                    <Slider
                                        value={[tenure]}
                                        onValueChange={(val) => setTenure(val[0])}
                                        min={1}
                                        max={30}
                                        step={1}
                                        className="py-2"
                                    />
                                </div>
                            </div>

                            {/* Results Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-4 border-l-4 border-l-info bg-info/5 col-span-2 shadow-lg shadow-info/5">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="font-medium text-muted-foreground block text-sm">Monthly EMI</span>
                                            <span className="text-3xl font-bold text-info">₹{Math.round(emi).toLocaleString('en-IN')}</span>
                                        </div>
                                        <Calculator className="w-8 h-8 text-info opacity-20" />
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-primary bg-background/50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground mb-1">Principal Amount</span>
                                        <span className="text-lg font-bold">₹{principal.toLocaleString('en-IN')}</span>
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-warning bg-background/50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground mb-1">Total Interest</span>
                                        <span className="text-lg font-bold">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                                    </div>
                                </Card>

                                <Card className="p-4 border-l-4 border-l-success bg-background/50 col-span-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Total Payment (Principal + Interest)</span>
                                        <span className="text-xl font-bold text-success">₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        {/* Chart Section */}
                        <div className="space-y-6">
                            <div className="h-80 w-full glass-panel p-4 rounded-xl">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={schedule} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                        <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${value / 1000}k`} />
                                        <Tooltip
                                            formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`}
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend />
                                        <Line type="monotone" dataKey="principal" stroke="hsl(var(--primary))" name="Principal Paid" strokeWidth={3} dot={false} />
                                        <Line type="monotone" dataKey="interest" stroke="hsl(var(--warning))" name="Interest Paid" strokeWidth={3} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Amortization Table */}
                            <Card className="glass-panel border-0 bg-background/40">
                                <div className="p-4 border-b border-border/50">
                                    <h3 className="font-bold">Amortization Schedule</h3>
                                </div>
                                <div className="p-4 max-h-60 overflow-auto space-y-2 pr-2 custom-scrollbar">
                                    {schedule.map((item) => (
                                        <div key={item.year} className="flex justify-between items-center text-sm p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
                                                    {item.year}
                                                </div>
                                                <span className="font-medium text-muted-foreground">Year {item.year}</span>
                                            </div>
                                            <span className="font-mono font-medium">₹{item.balance.toLocaleString('en-IN')}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Button className="w-full bg-info hover:bg-info/90 text-white shadow-lg shadow-info/20" size="lg">
                                <Download className="w-5 h-5 mr-2" />
                                Export Schedule
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmiCalculator;

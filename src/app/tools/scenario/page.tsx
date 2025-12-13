'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Gamepad2, Trophy, Coins, Heart, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";

interface Decision {
    id: string;
    text: string;
    consequence: string;
    moneyChange: number;
    xpChange: number;
    happinessChange?: number;
}

interface ScenarioNode {
    id: string;
    title: string;
    description: string;
    money: number;
    happiness: number;
    decisions: Decision[];
}

const scenarios: ScenarioNode[] = [
    {
        id: "start",
        title: "New Job Offer",
        description: "You've just received your first salary of ₹30,000. You're excited but also aware of your responsibilities. What's your first move?",
        money: 30000,
        happiness: 80,
        decisions: [
            {
                id: "save",
                text: "Save 50% and create an emergency fund",
                consequence: "Great choice! You've built a safety net. Your emergency fund now has ₹15,000. This will protect you from unexpected expenses.",
                moneyChange: 0,
                xpChange: 50,
                happinessChange: 5,
            },
            {
                id: "spend",
                text: "Treat yourself to a new phone you've wanted",
                consequence: "You bought a phone for ₹20,000. It feels good, but your savings took a hit. Consider balancing wants and needs next time.",
                moneyChange: -20000,
                xpChange: 10,
                happinessChange: 10,
            },
            {
                id: "invest",
                text: "Invest ₹10,000 in a mutual fund SIP",
                consequence: "Excellent! You've started your investment journey early. The power of compounding will work in your favor over time.",
                moneyChange: 0,
                xpChange: 75,
                happinessChange: 0,
            },
        ],
    },
    {
        id: "emergency",
        title: "Medical Emergency",
        description: "Your family member needs urgent medical treatment costing ₹15,000. You have some savings, but this wasn't planned.",
        money: 25000,
        happiness: 60,
        decisions: [
            {
                id: "emergency-fund",
                text: "Use your emergency fund (smart planning!)",
                consequence: "Your emergency fund saved the day! This is exactly why emergency funds exist. You handled it without stress or debt.",
                moneyChange: -15000,
                xpChange: 100,
                happinessChange: 15,
            },
            {
                id: "credit-card",
                text: "Use credit card and pay in installments",
                consequence: "You covered the emergency but now have credit card debt with 18% interest. Try to pay it off quickly to avoid heavy interest charges.",
                moneyChange: -15000,
                xpChange: 30,
                happinessChange: -10,
            },
            {
                id: "borrow",
                text: "Borrow from friends or family",
                consequence: "You managed the crisis, but now owe money to loved ones. This can strain relationships. Always have an emergency fund for such situations.",
                moneyChange: 0,
                xpChange: 20,
                happinessChange: -15,
            },
        ],
    },
    {
        id: "investment",
        title: "Investment Opportunity",
        description: "A friend tells you about a 'guaranteed returns' investment scheme promising 30% returns in 6 months. Sounds too good to be true?",
        money: 40000,
        happiness: 70,
        decisions: [
            {
                id: "research",
                text: "Research thoroughly before investing",
                consequence: "Smart move! After research, you discovered it was a pyramid scheme. You avoided a scam and learned to verify investment opportunities.",
                moneyChange: 0,
                xpChange: 80,
                happinessChange: 10,
            },
            {
                id: "invest-all",
                text: "Invest ₹20,000 - high risk, high reward!",
                consequence: "Oh no! It was a scam. You lost ₹20,000. Never invest in schemes promising unrealistic returns. Diversify and stick to regulated options.",
                moneyChange: -20000,
                xpChange: 40,
                happinessChange: -30,
            },
            {
                id: "sip-instead",
                text: "Start a safe mutual fund SIP instead",
                consequence: "Excellent choice! You started a disciplined SIP in index funds. Over time, this will likely give you good inflation-beating returns.",
                moneyChange: 0,
                xpChange: 90,
                happinessChange: 15,
            },
        ],
    },
    {
        id: "salary-negotiation",
        title: "Salary Negotiation",
        description: "It's performance review time! You exceeded your targets. Your boss offers a standard 5% hike. Inflation is at 6%.",
        money: 45000,
        happiness: 65,
        decisions: [
            {
                id: "accept",
                text: "Accept gracefully to avoid conflict",
                consequence: "You kept the peace, but your real income actually went down due to inflation. You missed a chance to grow.",
                moneyChange: 2250,
                xpChange: 20,
                happinessChange: 0,
            },
            {
                id: "negotiate",
                text: "Negotiate for 15% with data proof",
                consequence: "Bold move! Your boss was impressed by your preparation and agreed to 12%. Wealth is often built by asking.",
                moneyChange: 5400,
                xpChange: 100,
                happinessChange: 20,
            },
            {
                id: "quiet-quit",
                text: "Complain to colleagues and do less work",
                consequence: "Bad idea. You soured your reputation and gained nothing. Negativity hurts your long-term career value.",
                moneyChange: 0,
                xpChange: -20,
                happinessChange: -10,
            },
        ],
    },
    {
        id: "credit-trap",
        title: "The Credit Trap",
        description: "Your credit card bill is ₹25,000. You have ₹30,000 in your bank. The 'Minimum Due' is only ₹1,200.",
        money: 55000,
        happiness: 75,
        decisions: [
            {
                id: "min-due",
                text: "Pay only Minimum Due (₹1,200) to keep cash",
                consequence: "Trap! The remaining ₹23,800 will now attract 40% annual interest. You just signed up for expensive debt.",
                moneyChange: -1200,
                xpChange: 10,
                happinessChange: 5,
            },
            {
                id: "full-pay",
                text: "Pay Full Amount (₹25,000)",
                consequence: "Painful now, but smart. You paid ₹0 interest and kept your credit score high. You are debt-free!",
                moneyChange: -25000,
                xpChange: 120,
                happinessChange: -5,
            },
            {
                id: "convert-emi",
                text: "Convert to 6-month EMI",
                consequence: "Okay choice. You pay some interest (15%) but keep liquidity. Better than minimum due, worse than full payment.",
                moneyChange: -4500,
                xpChange: 60,
                happinessChange: 0,
            },
        ],
    },
    {
        id: "insurance",
        title: "Risk Management",
        description: "A friend was hospitalized and faced a huge bill. You realized you have no health insurance. A policy costs ₹8,000/year.",
        money: 50000,
        happiness: 70,
        decisions: [
            {
                id: "buy-insurance",
                text: "Buy the Health Insurance Policy",
                consequence: "You spent money for 'nothing' right now, but you bought peace of mind. One hospital visit won't bankrupt you.",
                moneyChange: -8000,
                xpChange: 90,
                happinessChange: 10,
            },
            {
                id: "skip-insurance",
                text: "Skip it, I'm young and healthy",
                consequence: "Risky! You saved cash, but if an accident happens, your savings will be wiped out instantly.",
                moneyChange: 0,
                xpChange: 0,
                happinessChange: 0,
            },
            {
                id: "invest-premium",
                text: "Invest the premium amount instead",
                consequence: "Investments grow wealth, Insurance protects it. You need both. Don't mix risk management with investing.",
                moneyChange: 0,
                xpChange: 40,
                happinessChange: 5,
            },
        ],
    },
    {
        id: "side-hustle",
        title: "The Weekend Hustle",
        description: "You have a free weekend. You could freelance for extra cash, learn a new skill, or just relax.",
        money: 60000,
        happiness: 60,
        decisions: [
            {
                id: "freelance",
                text: "Freelance for a client",
                consequence: "Grind mode! You earned extra cash, but you're tired. Remember that burnout can cost money too.",
                moneyChange: 5000,
                xpChange: 50,
                happinessChange: -10,
            },
            {
                id: "relax",
                text: "Relax and recharge",
                consequence: "You earned ₹0, but your mental health improved. Sometimes rest is the most productive thing to do.",
                moneyChange: 0,
                xpChange: 20,
                happinessChange: 20,
            },
            {
                id: "upskill",
                text: "Take an online course",
                consequence: "Investment in self! You spent time learning. This will likely increase your salary in the next negotiation.",
                moneyChange: -500,
                xpChange: 150,
                happinessChange: 5,
            },
        ],
    },
];

const ScenarioGame = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [totalXP, setTotalXP] = useState(0);
    const [totalMoney, setTotalMoney] = useState(scenarios[0].money);
    const [happiness, setHappiness] = useState(scenarios[0].happiness);
    const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
    const [gameComplete, setGameComplete] = useState(false);
    const [decisions, setDecisions] = useState<Decision[]>([]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null;
    }

    const currentScenario = scenarios[currentScenarioIndex];

    const handleDecision = (decision: Decision) => {
        setSelectedDecision(decision);
        setTotalXP(totalXP + decision.xpChange);
        setTotalMoney(totalMoney + decision.moneyChange);
        setHappiness(Math.min(100, Math.max(0, happiness + (decision.happinessChange || 0))));
        setDecisions([...decisions, decision]);
    };

    const handleNext = () => {
        setSelectedDecision(null);
        if (currentScenarioIndex < scenarios.length - 1) {
            setCurrentScenarioIndex(currentScenarioIndex + 1);
        } else {
            setGameComplete(true);
        }
    };

    const handleRestart = () => {
        setCurrentScenarioIndex(0);
        setTotalXP(0);
        setTotalMoney(scenarios[0].money);
        setHappiness(scenarios[0].happiness);
        setSelectedDecision(null);
        setGameComplete(false);
        setDecisions([]);
    };

    if (gameComplete) {
        return (
            <div className="min-h-screen bg-background pb-20 md:pb-8">
                <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center gap-4">
                            <Link href="/tools">
                                <Button variant="ghost" size="icon" className="hover:bg-achievement/10">
                                    <ArrowLeft className="w-5 h-5" />
                                </Button>
                            </Link>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-achievement to-warning bg-clip-text text-transparent">
                                Scenario Game
                            </h1>
                        </div>
                    </div>
                </header>

                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    <div className="glass-card rounded-2xl p-8 text-center animate-fade-in border-achievement/20">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-achievement/10 mb-6 animate-celebration shadow-lg shadow-achievement/20">
                            <Trophy className="w-12 h-12 text-achievement" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-achievement to-warning bg-clip-text text-transparent">Game Complete!</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Great job navigating through financial decisions!
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="glass-panel p-6 border-l-4 border-l-achievement relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                <div className="absolute inset-0 bg-achievement/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Trophy className="w-8 h-8 text-achievement mb-2 mx-auto" />
                                <div className="text-4xl font-bold text-achievement mb-1">{totalXP}</div>
                                <div className="text-sm text-muted-foreground font-medium">XP Earned</div>
                            </div>

                            <div className="glass-panel p-6 border-l-4 border-l-success relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                <div className="absolute inset-0 bg-success/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Coins className="w-8 h-8 text-success mb-2 mx-auto" />
                                <div className="text-4xl font-bold text-success mb-1">₹{totalMoney.toLocaleString('en-IN')}</div>
                                <div className="text-sm text-muted-foreground font-medium">Final Balance</div>
                            </div>

                            <div className="glass-panel p-6 border-l-4 border-l-destructive relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                <div className="absolute inset-0 bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Heart className="w-8 h-8 text-destructive mb-2 mx-auto" />
                                <div className="text-4xl font-bold text-destructive mb-1">{happiness}%</div>
                                <div className="text-sm text-muted-foreground font-medium">Happiness</div>
                            </div>
                        </div>

                        <div className="glass-panel p-6 mb-8 text-left bg-background/40">
                            <h3 className="font-bold mb-4 text-lg">Your Journey Highlights:</h3>
                            <div className="space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                {decisions.map((decision, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                        <Badge variant={decision.xpChange > 60 ? "default" : "secondary"} className="mt-1 shadow-sm">
                                            Lvl {idx + 1}
                                        </Badge>
                                        <div className="flex-1">
                                            <p className="font-medium mb-1">{decision.text}</p>
                                            <div className="flex gap-4 text-sm">
                                                <span className={`flex items-center gap-1 font-medium ${decision.moneyChange >= 0 ? "text-success" : "text-destructive"}`}>
                                                    {decision.moneyChange >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                                    {decision.moneyChange >= 0 ? '+' : ''}₹{Math.abs(decision.moneyChange).toLocaleString('en-IN')}
                                                </span>
                                                <span className="text-achievement font-medium flex items-center gap-1">
                                                    <Trophy className="w-3 h-3" />
                                                    +{decision.xpChange} XP
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Button onClick={handleRestart} size="lg" className="gap-2 bg-achievement hover:bg-achievement/90 text-white shadow-lg shadow-achievement/20 transition-all hover:scale-105">
                                <Gamepad2 className="w-5 h-5" />
                                Play Again
                            </Button>
                            <Link href="/tools">
                                <Button variant="outline" size="lg" className="hover:bg-muted transition-colors">
                                    Back to Tools
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-10 transition-all duration-300">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/tools">
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                                    <ArrowLeft className="w-5 h-5" />
                                </Button>
                            </Link>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                                Financial Scenarios
                            </h1>
                        </div>
                        <Badge variant="outline" className="text-sm py-1 px-3 border-primary/20 bg-primary/5">
                            Scenario {currentScenarioIndex + 1}/{scenarios.length}
                        </Badge>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4 mb-8 animate-slide-in-up">
                    <div className="glass-panel p-4 text-center border-l-4 border-l-success flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform">
                        <div className="p-2 bg-success/10 rounded-full mb-2">
                            <Coins className="w-6 h-6 text-success" />
                        </div>
                        <div className="text-2xl font-bold text-success animate-in fade-in zoom-in duration-300">₹{totalMoney.toLocaleString('en-IN')}</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Balance</div>
                    </div>

                    <div className="glass-panel p-4 text-center border-l-4 border-l-achievement flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform">
                        <div className="p-2 bg-achievement/10 rounded-full mb-2">
                            <Trophy className="w-6 h-6 text-achievement" />
                        </div>
                        <div className="text-2xl font-bold text-achievement animate-in fade-in zoom-in duration-300">{totalXP}</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">XP</div>
                    </div>

                    <div className="glass-panel p-4 text-center border-l-4 border-l-destructive flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform">
                        <div className="p-2 bg-destructive/10 rounded-full mb-2">
                            <Heart className="w-6 h-6 text-destructive" />
                        </div>
                        <div className="text-2xl font-bold text-destructive animate-in fade-in zoom-in duration-300">{happiness}%</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Happiness</div>
                    </div>
                </div>

                {/* Scenario Content */}
                <div className="glass-card rounded-2xl p-8 animate-fade-in relative overflow-hidden min-h-[400px]">
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    {!selectedDecision ? (
                        <>
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="p-4 bg-primary/10 rounded-2xl animate-bounce-subtle">
                                    <Gamepad2 className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{currentScenario.title}</h2>
                                    <p className="text-muted-foreground font-medium">Choose your path wisely</p>
                                </div>
                            </div>

                            <p className="text-xl mb-10 leading-relaxed text-foreground/90 font-medium border-l-4 border-primary/30 pl-6 py-2 bg-primary/5 rounded-r-lg">
                                {currentScenario.description}
                            </p>

                            <div className="space-y-4">
                                {currentScenario.decisions.map((decision, idx) => (
                                    <button
                                        key={decision.id}
                                        onClick={() => handleDecision(decision)}
                                        className="w-full text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 flex justify-between items-center">
                                            <div className="flex-1">
                                                <p className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{decision.text}</p>
                                                <div className="flex gap-4 text-sm font-medium text-muted-foreground">
                                                    {decision.moneyChange !== 0 && (
                                                        <span className={`flex items-center gap-1 ${decision.moneyChange > 0 ? "text-success" : "text-destructive"}`}>
                                                            {decision.moneyChange > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                                            {decision.moneyChange > 0 ? '+' : ''}₹{Math.abs(decision.moneyChange).toLocaleString('en-IN')}
                                                        </span>
                                                    )}
                                                    <span className="text-achievement flex items-center gap-1">
                                                        <Trophy className="w-3 h-3" />
                                                        +{decision.xpChange} XP
                                                    </span>
                                                </div>
                                            </div>
                                            <ArrowLeft className="w-5 h-5 text-muted-foreground rotate-180 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-success/10 rounded-2xl shadow-lg shadow-success/10">
                                    <Trophy className="w-10 h-10 text-success" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-success">Decision Made!</h2>
                                    <p className="text-muted-foreground">Here are the consequences of your choice</p>
                                </div>
                            </div>

                            <div className="glass-panel p-8 mb-8 bg-muted/30 border-l-4 border-l-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-16 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <p className="font-semibold mb-3 text-primary uppercase tracking-wide text-sm">You Chose</p>
                                <p className="text-xl font-bold mb-4">{selectedDecision.text}</p>
                                <div className="h-px w-full bg-border/50 mb-4" />
                                <p className="text-lg leading-relaxed text-foreground/90 italic">"{selectedDecision.consequence}"</p>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-8">
                                {selectedDecision.moneyChange !== 0 && (
                                    <div className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 ${selectedDecision.moneyChange > 0 ? "bg-success/10 text-success border border-success/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`}>
                                        {selectedDecision.moneyChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                        {selectedDecision.moneyChange > 0 ? '+' : ''}₹{Math.abs(selectedDecision.moneyChange).toLocaleString('en-IN')}
                                    </div>
                                )}
                                <div className="px-4 py-2 rounded-lg font-bold flex items-center gap-2 bg-achievement/10 text-achievement border border-achievement/20">
                                    <Trophy className="w-4 h-4" />
                                    +{selectedDecision.xpChange} XP
                                </div>
                                {(selectedDecision.happinessChange !== 0 && selectedDecision.happinessChange) && (
                                    <div className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 ${selectedDecision.happinessChange > 0 ? "bg-pink-500/10 text-pink-500 border border-pink-500/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`}>
                                        <Heart className="w-4 h-4" />
                                        {selectedDecision.happinessChange > 0 ? '+' : ''}{selectedDecision.happinessChange}% Happiness
                                    </div>
                                )}
                            </div>

                            <Button onClick={handleNext} size="lg" className="w-full h-14 text-lg shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all bg-primary hover:bg-primary/90">
                                {currentScenarioIndex < scenarios.length - 1 ? (
                                    <span className="flex items-center gap-2">Next Scenario <ArrowLeft className="w-5 h-5 rotate-180" /></span>
                                ) : (
                                    <span className="flex items-center gap-2">Complete Game <Trophy className="w-5 h-5" /></span>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScenarioGame;

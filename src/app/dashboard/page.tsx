'use client';

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    Menu,
    Bell,
    User,
    BookOpen,
    TrendingUp,
    Target,
    Award,
    Clock,
    Star,
    Zap,
    Users,
    Trophy,
    Calculator,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { useAuth } from "@/context/AuthContext";
import { modules } from "@/data/modules";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Info, Home } from "lucide-react";

const Dashboard = () => {
    const router = useRouter();
    const { user, isLoading, isAuthenticated, updateChallenge } = useAuth();
    const userXP = user?.xp || 0;
    const userLevel = user?.level || 1;
    const nextLevelXP = userLevel * 500;
    const progress = (userXP / nextLevelXP) * 100;

    // Determine the next lesson to show
    const completedLessons = user?.completedLessons || [];

    // Find the first module that hasn't been completed yet
    // This handles cases where users complete lessons out of order
    const nextModule = modules.find(m => !completedLessons.includes(m.id)) || modules[0];
    const isAllCompleted = completedLessons.length >= modules.length;

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-card shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader className="mb-6">
                                    <SheetTitle className="text-2xl font-bold text-primary tracking-tight w-fit">
                                        FinPath
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2">
                                    <Link href="/dashboard" className="w-full">
                                        <Button variant="ghost" className="w-full justify-start gap-4 text-base">
                                            <Home className="w-5 h-5" /> Dashboard
                                        </Button>
                                    </Link>
                                    <Link href="/modules" className="w-full">
                                        <Button variant="ghost" className="w-full justify-start gap-4 text-base">
                                            <BookOpen className="w-5 h-5" /> Learning Modules
                                        </Button>
                                    </Link>
                                    <Link href="/tools" className="w-full">
                                        <Button variant="ghost" className="w-full justify-start gap-4 text-base">
                                            <Zap className="w-5 h-5" /> Financial Tools
                                        </Button>
                                    </Link>
                                    <Link href="/community" className="w-full">
                                        <Button variant="ghost" className="w-full justify-start gap-4 text-base">
                                            <Users className="w-5 h-5" /> Community
                                        </Button>
                                    </Link>
                                    <Link href="/profile" className="w-full">
                                        <Button variant="ghost" className="w-full justify-start gap-4 text-base">
                                            <User className="w-5 h-5" /> My Profile
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <h1 className="text-2xl font-bold text-primary tracking-tight">
                            FinPath
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <ThemeCustomizer />
                        <ModeToggle />
                        <Button variant="ghost" size="icon">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => router.push("/profile")}>
                            <User className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Welcome Section */}
                <div className="mb-8 animate-fade-in">
                    <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
                    <p className="text-muted-foreground">Ready to level up your financial skills?</p>
                </div>

                {/* Progress Card */}
                <Card className="p-6 mb-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-fade-in">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Badge variant="secondary" className="text-lg px-3 py-1">
                                    Level {userLevel}
                                </Badge>
                                <span className="text-2xl font-bold">{userXP} XP</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {nextLevelXP - userXP} XP to Level {userLevel + 1}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Award className="w-8 h-8 text-achievement" />
                            <Star className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <Progress value={progress} className="h-3" />
                </Card>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <Link href="/modules" className="block">
                        <Card className="p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-primary/10 bg-card/50 backdrop-blur-sm group">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Learning Modules</h3>
                                    <p className="text-sm text-muted-foreground">Continue your financial education journey</p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/tools" className="block">
                        <Card className="p-6 hover:shadow-xl hover:shadow-success/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-success/10 bg-card/50 backdrop-blur-sm group">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-2xl bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground transition-colors duration-300">
                                    <Calculator className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-success transition-colors">Financial Tools</h3>
                                    <p className="text-sm text-muted-foreground">Calculators and budget planners</p>
                                </div>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/community" className="block">
                        <Card className="p-6 hover:shadow-xl hover:shadow-achievement/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-achievement/10 bg-card/50 backdrop-blur-sm group">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="p-4 rounded-2xl bg-achievement/10 text-achievement group-hover:bg-achievement group-hover:text-achievement-foreground transition-colors duration-300">
                                    <Users className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-achievement transition-colors">Community</h3>
                                    <p className="text-sm text-muted-foreground">Join challenges and leaderboards</p>
                                </div>
                            </div>
                        </Card>
                    </Link>


                </div>

                {/* Current Challenge */}
                <Card className="p-6 mb-8 border-2">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-xl font-bold">30-Day Budget Challenge</h3>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-xs">
                                            <p>A guided challenge to help you track every expense for 30 days. This builds awareness and helps identify spending leaks!</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <p className="text-muted-foreground">
                                Track your expenses for 30 days and stick to your budget
                            </p>
                        </div>
                        {user?.budgetChallenge?.isActive && (
                            <Badge className="bg-success text-success-foreground">Active</Badge>
                        )}
                    </div>

                    {!user?.budgetChallenge?.isActive ? (
                        <div className="mt-4">
                            <p className="text-sm text-muted-foreground mb-4">
                                Ready to take control of your spending? Start the challenge now!
                            </p>
                            <Button onClick={() => updateChallenge('start')} className="w-full md:w-auto">
                                Start Challenge
                            </Button>
                        </div>
                    ) : (
                        <div className="mb-3">
                            <div className="flex justify-between text-sm mb-2">
                                <span>Progress</span>
                                <span className="font-medium">{user.budgetChallenge.daysCompleted}/30 days</span>
                            </div>
                            <Progress value={(user.budgetChallenge.daysCompleted / 30) * 100} className="h-2 mb-4" />

                            {(() => {
                                const lastCheckIn = user.budgetChallenge.lastCheckIn ? new Date(user.budgetChallenge.lastCheckIn) : null;
                                const today = new Date();
                                const isCheckedInToday = lastCheckIn && lastCheckIn.toDateString() === today.toDateString();

                                return isCheckedInToday ? (
                                    <Button disabled className="w-full md:w-auto bg-muted text-muted-foreground">
                                        Checked In Today
                                    </Button>
                                ) : (
                                    <Button onClick={() => updateChallenge('checkin')} className="w-full md:w-auto">
                                        Check In
                                    </Button>
                                );
                            })()}
                        </div>
                    )}
                </Card>

                {/* Next Lesson Preview */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
                    {isAllCompleted ? (
                        <Card className="p-6 bg-gradient-to-br from-success/10 to-accent/10 border-success/20">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                                    <Trophy className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">All Caught Up!</h4>
                                    <p className="text-muted-foreground">
                                        You've completed all available modules. Check back later for more!
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <Link href={`/lesson/${nextModule.id}`}>
                            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 bg-${nextModule.color}/10 group-hover:bg-${nextModule.color}/20 transition-colors`}>
                                        {/* Dynamic Icon rendering if possible, else fallback */}
                                        <BookOpen className={`w-8 h-8 text-${nextModule.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <Badge variant="secondary" className="mb-2">{nextModule.difficulty}</Badge>
                                        <h4 className="font-bold text-lg mb-1">{nextModule.title}</h4>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {nextModule.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{nextModule.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4" />
                                                <span>+{nextModule.xp} XP</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button>Start</Button>
                                </div>
                            </Card>
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
                <div className="flex justify-around py-3">
                    <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
                        <TrendingUp className="w-5 h-5 mb-1" />
                        <span className="text-xs">Home</span>
                    </Button>
                    <Link href="/modules">
                        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
                            <BookOpen className="w-5 h-5 mb-1" />
                            <span className="text-xs">Modules</span>
                        </Button>
                    </Link>
                    <Link href="/tools">
                        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
                            <Target className="w-5 h-5 mb-1" />
                            <span className="text-xs">Tools</span>
                        </Button>
                    </Link>
                    <Link href="/profile">
                        <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
                            <Award className="w-5 h-5 mb-1" />
                            <span className="text-xs">Profile</span>
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Dashboard;

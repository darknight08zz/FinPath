'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ArrowLeft,
    Trophy,
    Users,
    Calendar,
    Medal,
    Clock,
    Target,
    Zap,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { challengesData, workshopsData } from "@/data/community";
import api from "@/services/api";

interface LeaderboardUser {
    id: string;
    rank: number;
    name: string;
    xp: number;
    level: number;
    badges: string[];
    avatar: string;
    streak: number;
}

const Community = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading, user } = useAuth(); // Assuming 'user' is now returned by useAuth
    const [activeTab, setActiveTab] = useState("leaderboard");
    const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);

    // Real Gamification State
    const [joinedChallenges, setJoinedChallenges] = useState<string[]>([]);
    const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const res = await api.get('/leaderboard');
                setLeaderboard(res.data);
            } catch (err) {
                console.error("Failed to fetch leaderboard", err);
                // toast.error("Failed to load leaderboard");
            }
        };

        const fetchUserChallenges = async () => {
            // Ideally we get this from user context, but for now we can fetch profile
            try {
                const res = await api.get('/auth/user');
                setJoinedChallenges(res.data.joinedChallenges || []);
                setCompletedChallenges(res.data.completedChallenges || []);
            } catch (err) {
                // Warning suppressed
            }
        };

        if (isAuthenticated) {
            fetchLeaderboard();
            fetchUserChallenges();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null;
    }

    const handleRegister = (workshopTitle: string) => {
        toast.success(`Registered for ${workshopTitle}!`, {
            description: "We've sent a calendar invite to your email.",
        });
    };

    const handleJoinChallenge = async (challengeId: string, challengeTitle: string) => {
        try {
            const res = await api.post('/challenges/join', { challengeId });
            setJoinedChallenges(res.data.joinedChallenges);
            toast.success(`Joined ${challengeTitle}!`, {
                description: "Good luck! Track your progress.",
            });
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.msg || "Failed to join challenge");
        }
    };

    const handleCompleteChallenge = async (challengeId: string) => {
        try {
            const res = await api.post('/challenges/complete', { challengeId, xpReward: 500 }); // Hardcoded 500 XP for now
            setJoinedChallenges(res.data.joinedChallenges);
            setCompletedChallenges(res.data.completedChallenges);
            toast.success(`Challenge Completed!`, {
                description: `You earned 500 XP! New XP: ${res.data.xp}`,
            });
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.msg || "Failed to complete challenge");
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            {/* Header */}
            <header className="border-b bg-card shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold">Community & Challenges</h1>
                    </div>
                    <p className="text-muted-foreground">
                        Compete, learn, and grow with the FinPath community.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            <span className="hidden sm:inline">Leaderboard</span>
                        </TabsTrigger>
                        <TabsTrigger value="challenges" className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            <span className="hidden sm:inline">Challenges</span>
                        </TabsTrigger>
                        <TabsTrigger value="workshops" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="hidden sm:inline">Workshops</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* LEADERBOARD TAB */}
                    <TabsContent value="leaderboard" className="animate-fade-in">
                        <Card className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Trophy className="w-6 h-6 text-achievement" />
                                    Top Earners
                                </h2>
                                <Badge variant="secondary">Global Ranking</Badge>
                            </div>

                            <div className="space-y-4">
                                {leaderboard.length === 0 ? (
                                    <div className="text-center py-8 text-muted-foreground">
                                        Loading leaderboard...
                                    </div>
                                ) : (
                                    leaderboard.map((user: LeaderboardUser) => (
                                        <div
                                            key={user.id}
                                            className={`flex items-center p-4 rounded-lg border transition-all hover:bg-muted/50 ${user.rank <= 3 ? "border-achievement/50 bg-achievement/5" : "border-border"
                                                }`}
                                        >
                                            <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-full mr-4 ${user.rank === 1 ? "bg-yellow-500 text-white" :
                                                user.rank === 2 ? "bg-gray-400 text-white" :
                                                    user.rank === 3 ? "bg-amber-700 text-white" :
                                                        "bg-muted text-muted-foreground"
                                                }`}>
                                                {user.rank}
                                            </div>

                                            <Avatar className="w-10 h-10 border-2 border-background mr-4">
                                                <AvatarFallback>{user.avatar}</AvatarFallback>
                                            </Avatar>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold">{user.name}</h3>
                                                    <div className="flex gap-1">
                                                        {user.badges.map((badge: string, i: number) => (
                                                            <span key={i} className="text-sm" title="Badge">{badge}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground">Level {user.level} {user.streak > 0 && `• 🔥 ${user.streak} Day Streak`}</p>
                                            </div>

                                            <div className="text-right">
                                                <p className="font-bold text-primary">{user.xp.toLocaleString()} XP</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </Card>
                    </TabsContent>

                    {/* CHALLENGES TAB */}
                    <TabsContent value="challenges" className="animate-fade-in">
                        <div className="grid gap-6">
                            {challengesData.map((challenge) => {
                                const Icon = challenge.icon;
                                const isJoined = joinedChallenges.includes(challenge.id);
                                const isCompleted = completedChallenges.includes(challenge.id);

                                return (
                                    <Card key={challenge.id} className="p-6 border-2 hover:border-primary transition-colors">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className={`p-3 rounded-lg bg-${challenge.color}/10`}>
                                                    <Icon className={`w-6 h-6 text-${challenge.color}`} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">{challenge.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{challenge.target}</p>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {challenge.daysLeft} days left
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground mb-4">
                                            {challenge.description}
                                        </p>

                                        <div className="mb-4">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-muted-foreground flex items-center gap-1">
                                                    <Users className="w-3 h-3" /> {challenge.participants} participants
                                                </span>
                                                <span className="font-medium">{challenge.progress}% Complete</span>
                                            </div>
                                            <Progress value={challenge.progress} className="h-2" />
                                        </div>

                                        <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                            <div className="flex items-center gap-2 text-sm font-medium text-achievement">
                                                <Medal className="w-4 h-4" />
                                                {challenge.reward}
                                            </div>

                                            {isCompleted ? (
                                                <Button disabled variant="outline" className="border-achievement text-achievement bg-achievement/10">
                                                    <Medal className="w-4 h-4 mr-2" /> Completed
                                                </Button>
                                            ) : isJoined ? (
                                                <Button onClick={() => handleCompleteChallenge(challenge.id)}>
                                                    Mark Complete
                                                </Button>
                                            ) : (
                                                <Button onClick={() => handleJoinChallenge(challenge.id, challenge.title)}>
                                                    Join Challenge
                                                </Button>
                                            )}
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </TabsContent>

                    {/* WORKSHOPS TAB */}
                    <TabsContent value="workshops" className="animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-6">
                            {workshopsData.map((workshop) => (
                                <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-all">
                                    <div className="h-32 bg-muted relative">
                                        <img
                                            src={workshop.image}
                                            alt={workshop.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <Badge className="absolute top-2 right-2 bg-background/80 text-foreground backdrop-blur-sm">
                                            {workshop.category}
                                        </Badge>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-lg mb-2 line-clamp-1">{workshop.title}</h3>
                                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                <span>Instructor: {workshop.instructor}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{workshop.date} • {workshop.time}</span>
                                            </div>
                                        </div>
                                        <Button className="w-full" variant="outline" onClick={() => handleRegister(workshop.title)}>
                                            Register Now
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Community;

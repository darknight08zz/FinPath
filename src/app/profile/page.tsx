'use client';

import { useState, useEffect } from "react";
import { ArrowLeft, Download, User, Shield, Palette, FileText, Trash2, LogOut, Award, TrendingUp, BookOpen, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
    const router = useRouter();
    const { toast } = useToast();
    const [textSize, setTextSize] = useState("medium");
    const [language, setLanguage] = useState("en");
    const [ttsSpeed, setTtsSpeed] = useState("normal");
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const { user: authUser, logout, isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null; // Or a loading spinner
    }

    const user = {
        name: authUser?.username || "Financial Learner",
        email: authUser?.email || "learner@finpath.com",
        xp: authUser?.xp || 0,
        level: authUser?.level || 1,
        badges: authUser?.badges || [],
        completedModules: 0, // TODO: Track completed modules in DB
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };

    const badges = [
        { id: "first_lesson", name: "First Steps", description: "Completed first lesson", icon: "🎓", earned: true },
        { id: "budget_master", name: "Budget Master", description: "Created first budget plan", icon: "💰", earned: true },
        { id: "early_adopter", name: "Early Adopter", description: "Joined FinPath", icon: "⭐", earned: true },
        { id: "scenario_pro", name: "Decision Maker", description: "Complete 5 scenarios", icon: "🎯", earned: false },
        { id: "investment_guru", name: "Investment Guru", description: "Use investment simulator 10 times", icon: "📈", earned: false },
        { id: "streak_master", name: "Streak Master", description: "7-day learning streak", icon: "🔥", earned: false }
    ];

    const progressStats = [
        { label: "Total XP", value: user.xp, icon: TrendingUp, color: "text-primary" },
        { label: "Completed Modules", value: user.completedModules, icon: BookOpen, color: "text-success" },
        { label: "Current Level", value: user.level, icon: Trophy, color: "text-achievement" },
        { label: "Badges Earned", value: user.badges.length, icon: Award, color: "text-warning" }
    ];

    const exportData = () => {
        const data = {
            user: user,
            progress: localStorage.getItem("lesson_progress") || "[]",
            exportDate: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "finpath-data.json";
        a.click();
        toast({
            title: "Data exported",
            description: "Your learning data has been downloaded successfully."
        });
    };

    const resetOnboarding = () => {
        localStorage.removeItem("onboarding_complete");
        toast({
            title: "Onboarding reset",
            description: "You can now view the onboarding flow again."
        });
        setTimeout(() => router.push("/onboarding"), 1000);
    };

    const handleSignOut = () => {
        logout();
        router.push("/login");
    };

    const handleDeleteAccount = () => {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            localStorage.clear();
            toast({
                title: "Account deleted",
                description: "Your account has been permanently deleted.",
                variant: "destructive"
            });
            setTimeout(() => router.push("/"), 1000);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" onClick={() => router.push("/dashboard")} className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                            Profile & Settings
                        </h1>
                        <div className="w-20" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Profile Header Card */}
                <Card className="p-8 mb-6 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-achievement flex items-center justify-center text-4xl shadow-glow">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                            <p className="text-muted-foreground mb-4">{user.email}</p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">{user.xp}</div>
                                    <div className="text-sm text-muted-foreground">Total XP</div>
                                </div>
                                <Separator orientation="vertical" className="h-12" />
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-achievement">Level {user.level}</div>
                                    <div className="text-sm text-muted-foreground">Current Level</div>
                                </div>
                                <Separator orientation="vertical" className="h-12" />
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-success">{user.badges.length}</div>
                                    <div className="text-sm text-muted-foreground">Badges Earned</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {progressStats.map((stat, index) => (
                        <Card key={index} className="p-4 hover-scale cursor-pointer">
                            <div className="flex flex-col items-center text-center gap-2">
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Tabs for detailed sections */}
                <Tabs defaultValue="badges" className="space-y-6">
                    <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="badges">Badges</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                        <TabsTrigger value="account">Account</TabsTrigger>
                    </TabsList>

                    {/* Badges Tab */}
                    <TabsContent value="badges" className="space-y-4">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-achievement" />
                                Your Achievements
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {badges.map((badge) => (
                                    <Card
                                        key={badge.id}
                                        className={`p-4 text-center transition-all ${badge.earned
                                            ? "bg-gradient-to-br from-achievement/10 to-success/10 border-achievement/30 shadow-achievement"
                                            : "opacity-50 grayscale"
                                            }`}
                                    >
                                        <div className="text-4xl mb-2">{badge.icon}</div>
                                        <h4 className="font-semibold mb-1">{badge.name}</h4>
                                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                                        {badge.earned && (
                                            <div className="mt-2 text-xs font-medium text-achievement">✓ Earned</div>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Settings Tab */}
                    <TabsContent value="settings" className="space-y-4">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Palette className="w-5 h-5" />
                                Appearance & Accessibility
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label htmlFor="text-size" className="text-base">Text Size</Label>
                                        <p className="text-sm text-muted-foreground">Adjust reading comfort</p>
                                    </div>
                                    <Select value={textSize} onValueChange={setTextSize}>
                                        <SelectTrigger className="w-32">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="small">Small</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="large">Large</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label htmlFor="language" className="text-base">Language</Label>
                                        <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                                    </div>
                                    <Select value={language} onValueChange={setLanguage}>
                                        <SelectTrigger className="w-32">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="hi">हिंदी</SelectItem>
                                            <SelectItem value="es">Español</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label htmlFor="tts-speed" className="text-base">Text-to-Speech Speed</Label>
                                        <p className="text-sm text-muted-foreground">Adjust narration speed</p>
                                    </div>
                                    <Select value={ttsSpeed} onValueChange={setTtsSpeed}>
                                        <SelectTrigger className="w-32">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="slow">Slow</SelectItem>
                                            <SelectItem value="normal">Normal</SelectItem>
                                            <SelectItem value="fast">Fast</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label htmlFor="dark-mode" className="text-base">Dark Mode</Label>
                                        <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                                    </div>
                                    <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                                </div>

                                <Separator />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label htmlFor="notifications" className="text-base">Email Notifications</Label>
                                        <p className="text-sm text-muted-foreground">Receive learning reminders</p>
                                    </div>
                                    <Switch
                                        id="notifications"
                                        checked={emailNotifications}
                                        onCheckedChange={setEmailNotifications}
                                    />
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                Data & Privacy
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <Label className="text-base">Export Your Data</Label>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Download all your learning progress and activity
                                    </p>
                                    <Button onClick={exportData} variant="outline" className="gap-2">
                                        <Download className="w-4 h-4" />
                                        Export Data (JSON)
                                    </Button>
                                </div>

                                <Separator />

                                <div>
                                    <Label className="text-base">Reset Onboarding</Label>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        View the welcome tour again
                                    </p>
                                    <Button onClick={resetOnboarding} variant="outline">
                                        Restart Onboarding
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Account Tab */}
                    <TabsContent value="account" className="space-y-4">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Account Actions
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <Label className="text-base">Sign Out</Label>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Sign out of your account on this device
                                    </p>
                                    <Button onClick={handleSignOut} variant="outline" className="gap-2">
                                        <LogOut className="w-4 h-4" />
                                        Sign Out
                                    </Button>
                                </div>

                                <Separator />

                                <div>
                                    <Label className="text-base text-destructive">Danger Zone</Label>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Permanently delete your account and all associated data
                                    </p>
                                    <Button onClick={handleDeleteAccount} variant="destructive" className="gap-2">
                                        <Trash2 className="w-4 h-4" />
                                        Delete Account
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 bg-muted/50">
                            <h3 className="text-sm font-semibold mb-2">Account Information</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <p>Joined: {user.joinedDate}</p>
                                <p>Account ID: demo-user-123</p>
                                <p>Last sign in: Today</p>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Profile;

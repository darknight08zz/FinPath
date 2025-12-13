'use client';

import { useState, useEffect } from "react";
import { ArrowLeft, Download, User, Shield, Palette, FileText, Trash2, LogOut, Award, TrendingUp, BookOpen, Trophy, Edit, MapPin, Briefcase, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Profile = () => {
    const router = useRouter();
    const { toast } = useToast();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false); // To prevent hydration mismatch

    // Initialize states from localStorage or defaults
    const [textSize, setTextSize] = useState("medium");
    const [language, setLanguage] = useState("en");
    const [ttsSpeed, setTtsSpeed] = useState("normal");
    const [emailNotifications, setEmailNotifications] = useState(true);

    // Edit Profile States
    const [isEditing, setIsEditing] = useState(false);
    const [editBio, setEditBio] = useState("");
    const [editLocation, setEditLocation] = useState("");
    const [editJobTitle, setEditJobTitle] = useState("");
    const [editImage, setEditImage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const { user: authUser, logout, isAuthenticated, isLoading, updateXP, refreshUser } = useAuth();

    // Load saved settings on mount
    useEffect(() => {
        setMounted(true);
        const savedTextSize = localStorage.getItem("settings_textSize") || "medium";
        const savedLanguage = localStorage.getItem("settings_language") || "en";
        const savedTtsSpeed = localStorage.getItem("settings_ttsSpeed") || "normal";
        const savedEmailNotifs = localStorage.getItem("settings_emailNotifications");

        setTextSize(savedTextSize);
        setLanguage(savedLanguage);
        setTtsSpeed(savedTtsSpeed);
        if (savedEmailNotifs !== null) {
            setEmailNotifications(savedEmailNotifs === "true");
        }
    }, []);

    // Initialize edit form when user loads
    useEffect(() => {
        if (authUser) {
            setEditBio(authUser.bio || "");
            setEditLocation(authUser.location || "");
            setEditJobTitle(authUser.jobTitle || "");
            setEditImage(authUser.profileImage || "");
        }
    }, [authUser]);

    // Effect: Apply Text Size
    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("settings_textSize", textSize);
        const root = document.documentElement;
        if (textSize === "small") root.style.fontSize = "14px";
        else if (textSize === "large") root.style.fontSize = "18px";
        else root.style.fontSize = "16px";
    }, [textSize, mounted]);

    // Effect: Save other settings
    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("settings_language", language);
        // In a real app, this would trigger i18n change
    }, [language, mounted]);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("settings_ttsSpeed", ttsSpeed);
    }, [ttsSpeed, mounted]);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("settings_emailNotifications", String(emailNotifications));
    }, [emailNotifications, mounted]);

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
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        bio: authUser?.bio || "No bio yet.",
        location: authUser?.location || "Unknown Location",
        jobTitle: authUser?.jobTitle || "Financial Enthusiast",
        profileImage: authUser?.profileImage
    };

    const ALL_BADGES = [
        { id: "🌱", name: "First Steps", description: "Earn your first XP", icon: "🌱" },
        { id: "⭐", name: "Rising Star", description: "Reach Level 5", icon: "⭐" },
        { id: "🚀", name: "Expert", description: "Reach Level 10", icon: "🚀" },
        { id: "🏆", name: "Master", description: "Reach Level 20", icon: "🏆" },
        { id: "💰", name: "Saver", description: "Complete Savings Challenge", icon: "💰" },
        { id: "🦅", name: "Freedom", description: "Complete Debt Challenge", icon: "🦅" },
        { id: "📈", name: "Investor", description: "Complete Investment Challenge", icon: "📈" },
        { id: "🔥", name: "On Fire", description: "7 Day Streak", icon: "🔥" }
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

    const handleResetLearningLevel = async () => {
        try {
            await updateXP(0, 1);
            toast({
                title: "Learning Level Reset",
                description: "Your XP has been reset to 0 and Level to 1.",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to reset learning level.",
                variant: "destructive"
            });
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5000000) { // 5MB limit
                toast({
                    title: "File too large",
                    description: "Please upload an image smaller than 5MB.",
                    variant: "destructive"
                });
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = async () => {
        setIsSaving(true);
        try {
            const res = await api.put('/user/profile', {
                bio: editBio,
                location: editLocation,
                jobTitle: editJobTitle,
                profileImage: editImage
            });

            if (res.status === 200) {
                toast({
                    title: "Profile Updated",
                    description: "Your profile information has been saved successfully."
                });
                await refreshUser(); // Refresh global auth state
                setIsEditing(false);
            }
        } catch (error: any) {
            console.error("Profile update error:", error);
            toast({
                title: "Update Failed",
                description: error.response?.data?.message || "Could not update profile.",
                variant: "destructive"
            });
        } finally {
            setIsSaving(false);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pb-20">
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
                <Card className="p-8 mb-6 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-primary/20">
                                {user.profileImage ? (
                                    <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-primary to-achievement flex items-center justify-center text-4xl text-white font-bold">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                                <DialogTrigger asChild>
                                    <Button size="icon" className="absolute bottom-0 right-0 rounded-full shadow-lg hover:scale-105 transition-transform" onClick={() => setIsEditing(true)}>
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>Edit Profile</DialogTitle>
                                        <DialogDescription>
                                            Update your personal information and public profile.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-6 py-4">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 group cursor-pointer">
                                                {editImage ? (
                                                    <img src={editImage} alt="Preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                                        <User className="w-8 h-8" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Camera className="w-6 h-6 text-white" />
                                                </div>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                    onChange={handleImageUpload}
                                                />
                                            </div>
                                            <Label className="text-sm text-muted-foreground cursor-pointer hover:text-primary">
                                                Tap to change photo
                                            </Label>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="grid w-full gap-1.5">
                                                <Label htmlFor="bio">Bio</Label>
                                                <Textarea
                                                    id="bio"
                                                    placeholder="Tell us about yourself..."
                                                    value={editBio}
                                                    onChange={(e) => setEditBio(e.target.value)}
                                                    className="resize-none"
                                                />
                                            </div>
                                            <div className="grid w-full gap-1.5">
                                                <Label htmlFor="job">Job Title</Label>
                                                <Input
                                                    id="job"
                                                    placeholder="e.g. Student, Engineer"
                                                    value={editJobTitle}
                                                    onChange={(e) => setEditJobTitle(e.target.value)}
                                                />
                                            </div>
                                            <div className="grid w-full gap-1.5">
                                                <Label htmlFor="location">Location</Label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                                    <Input
                                                        id="location"
                                                        placeholder="City, Country"
                                                        className="pl-9"
                                                        value={editLocation}
                                                        onChange={(e) => setEditLocation(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                                        <Button onClick={handleSaveProfile} disabled={isSaving}>
                                            {isSaving ? "Saving..." : "Save Changes"}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-2">
                            <div>
                                <h2 className="text-3xl font-bold">{user.name}</h2>
                                <p className="text-primary font-medium flex items-center justify-center md:justify-start gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    {user.jobTitle}
                                </p>
                            </div>

                            <div className="space-y-1 text-sm text-muted-foreground">
                                <p className="flex items-center justify-center md:justify-start gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {user.location}
                                </p>
                                <p className="flex items-center justify-center md:justify-start gap-2">
                                    <User className="w-4 h-4" />
                                    {user.bio}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4 pt-4 border-t border-border/50">
                                <div className="text-center md:text-left px-4 border-r border-border first:pl-0 last:border-0">
                                    <div className="text-2xl font-bold text-primary">{user.xp}</div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground">XP</div>
                                </div>
                                <div className="text-center md:text-left px-4 border-r border-border last:border-0">
                                    <div className="text-2xl font-bold text-achievement">Level {user.level}</div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Level</div>
                                </div>
                                <div className="text-center md:text-left px-4 border-r border-border last:border-0">
                                    <div className="text-2xl font-bold text-success">{user.badges.length}</div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Badges</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {progressStats.map((stat, index) => (
                        <Card key={index} className="p-4 hover-scale cursor-pointer border-l-4 border-l-primary/20 hover:border-l-primary transition-all">
                            <div className="flex flex-col items-center text-center gap-2">
                                <stat.icon className={`w-8 h-8 ${stat.color} mb-1`} />
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Tabs for detailed sections */}
                <Tabs defaultValue="badges" className="space-y-6">
                    <TabsList className="grid grid-cols-3 w-full p-1 bg-muted/50 backdrop-blur">
                        <TabsTrigger value="badges" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">Badges</TabsTrigger>
                        <TabsTrigger value="settings" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">Settings</TabsTrigger>
                        <TabsTrigger value="account" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">Account</TabsTrigger>
                    </TabsList>

                    {/* Badges Tab */}
                    <TabsContent value="badges" className="space-y-4 animate-fade-in">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Award className="w-5 h-5 text-achievement" />
                                Your Achievements
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {ALL_BADGES.map((badge) => {
                                    // Check if user has this badge (stored as the icon/string in DB)
                                    const isEarned = user.badges.includes(badge.id);

                                    return (
                                        <div
                                            key={badge.id}
                                            className={`p-4 rounded-xl text-center transition-all relative overflow-hidden group ${isEarned
                                                ? "bg-gradient-to-br from-achievement/10 to-success/10 border border-achievement/30 shadow-lg shadow-achievement/10 hover:-translate-y-1"
                                                : "opacity-60 bg-muted/30 border border-dashed hover:opacity-80"
                                                }`}
                                        >
                                            {isEarned && <div className="absolute top-0 right-0 p-1 bg-achievement text-white rounded-bl-lg text-[10px] font-bold">EARNED</div>}
                                            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{badge.icon}</div>
                                            <h4 className="font-semibold mb-1 truncate">{badge.name}</h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{badge.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Settings Tab */}
                    <TabsContent value="settings" className="space-y-4 animate-fade-in">
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
                                    <Switch
                                        id="dark-mode"
                                        checked={theme === 'dark'}
                                        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                    />
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
                    <TabsContent value="account" className="space-y-4 animate-fade-in">
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
                                    <div className="flex flex-col gap-3">
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="outline" className="gap-2 border-destructive text-destructive hover:bg-destructive/10 w-full md:w-auto justify-start">
                                                    <TrendingUp className="w-4 h-4" />
                                                    Reset Learning Level (XP: 0, Level: 1)
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action will reset your learning progress. Your XP will be set to 0 and your Level will be reset to 1. This cannot be undone.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={handleResetLearningLevel} className="bg-destructive hover:bg-destructive/90">
                                                        Reset Progress
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                        <Button onClick={handleDeleteAccount} variant="destructive" className="gap-2 w-full md:w-auto justify-start">
                                            <Trash2 className="w-4 h-4" />
                                            Delete Account
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-zinc-950 border-zinc-800 text-zinc-100 overflow-hidden shadow-2xl">
                            {/* Terminal Header */}
                            <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
                                <div className="ml-2 text-xs text-zinc-500 font-mono flex-1 text-center pr-12">
                                    user_system.exe
                                </div>
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 font-mono text-sm space-y-3">
                                <div className="flex gap-2">
                                    <span className="text-green-500">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span className="text-zinc-400">whoami</span>
                                </div>

                                <div className="text-zinc-300 pl-4 border-l-2 border-zinc-800 space-y-1">
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-zinc-500">User:</span>
                                        <span className="text-green-400">"{user.name}"</span>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-zinc-500">Role:</span>
                                        <span className="text-yellow-400">"{user.jobTitle}"</span>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-zinc-500">Location:</span>
                                        <span className="text-purple-400">"{user.location}"</span>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-zinc-500">Status:</span>
                                        <span className="text-blue-400">"Online"</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <span className="text-green-500">➜</span>
                                    <span className="text-blue-400">~</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Profile;

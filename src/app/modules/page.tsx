'use client';

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
    ArrowLeft,
    Search,
    Clock,
    Star,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { modules } from "@/data/modules";

const Modules = () => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading || !isAuthenticated) {
        return null;
    }

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
                        <h1 className="text-2xl font-bold">Learning Modules</h1>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search modules..."
                            className="pl-10"
                        />
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Filter Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        All
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Beginner
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Intermediate
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        Short (&lt; 10 mins)
                    </Badge>
                </div>

                {/* Module Cards */}
                <div className="space-y-4">
                    {modules.map((module, index) => {
                        const Icon = module.icon;
                        return (
                            <Card
                                key={module.id}
                                className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer animate-fade-in border-2 hover:border-primary"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{module.title}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {module.description}
                                                </p>
                                            </div>
                                            <Badge variant={module.difficulty === "Beginner" ? "secondary" : "default"}>
                                                {module.difficulty}
                                            </Badge>
                                        </div>

                                        {module.progress > 0 && (
                                            <div className="mb-3">
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="text-muted-foreground">Progress</span>
                                                    <span className="font-medium">{module.progress}%</span>
                                                </div>
                                                <Progress value={module.progress} className="h-1.5" />
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{module.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4" />
                                                    <span>+{module.xp} XP</span>
                                                </div>
                                            </div>

                                            <Link href={`/lesson/${module.id}`}>
                                                <Button variant={module.progress > 0 ? "default" : "outline"}>
                                                    {module.progress > 0 ? "Continue" : "Start"}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Modules;

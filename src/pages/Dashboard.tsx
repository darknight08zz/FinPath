import { Link, useNavigate } from "react-router-dom";
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
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeCustomizer } from "@/components/theme-customizer";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userXP = user?.xp || 0;
  const userLevel = user?.level || 1;
  const nextLevelXP = userLevel * 500;
  const progress = (userXP / nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FinPath
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeCustomizer />
            <ModeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
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
          <Link to="/modules" className="block">
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full border-2 hover:border-primary">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Start Lesson</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Continue your learning journey
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>5-10 mins</span>
              </div>
            </Card>
          </Link>

          <Link to="/tools" className="block">
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full border-2 hover:border-success">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-success/10 rounded-full">
                  <Target className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-bold text-lg">Use Tool</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Plan your budget or calculate investments
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Zap className="w-4 h-4" />
                <span>Budget Planner</span>
              </div>
            </Card>
          </Link>

          <Link to="/community" className="block">
            <Card className="p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full border-2 hover:border-achievement">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-achievement/10 rounded-full">
                  <Users className="w-6 h-6 text-achievement" />
                </div>
                <h3 className="font-bold text-lg">Community</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Join challenges and climb the leaderboard
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Trophy className="w-4 h-4" />
                <span>Weekly Challenges</span>
              </div>
            </Card>
          </Link>
        </div>

        {/* Current Challenge */}
        <Card className="p-6 mb-8 border-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">30-Day Budget Challenge</h3>
              <p className="text-muted-foreground">
                Track your expenses for 30 days and stick to your budget
              </p>
            </div>
            <Badge className="bg-success text-success-foreground">Active</Badge>
          </div>
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span className="font-medium">7/30 days</span>
            </div>
            <Progress value={23} className="h-2" />
          </div>
          <Button className="w-full md:w-auto">Continue Challenge</Button>
        </Card>

        {/* Next Lesson Preview */}
        <div>
          <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-2">Beginner</Badge>
                <h4 className="font-bold text-lg mb-1">Understanding Your Income</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn to differentiate between gross and net income, and how taxes affect your take-home pay
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>8 mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>+50 XP</span>
                  </div>
                </div>
              </div>
              <Button>Start</Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
        <div className="flex justify-around py-3">
          <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
            <TrendingUp className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </Button>
          <Link to="/modules">
            <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
              <BookOpen className="w-5 h-5 mb-1" />
              <span className="text-xs">Modules</span>
            </Button>
          </Link>
          <Link to="/tools">
            <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
              <Target className="w-5 h-5 mb-1" />
              <span className="text-xs">Tools</span>
            </Button>
          </Link>
          <Link to="/profile">
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

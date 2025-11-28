import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Sparkles, TrendingUp, Target, Award } from "lucide-react";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("onboarding_complete", "true");
    localStorage.setItem("user_type", userType);
    navigate("/dashboard");
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 text-center animate-fade-in shadow-lg">
          <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to FinPath
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn money skills. Build real habits.
          </p>
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full"
              onClick={() => setStep(2)}
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => navigate("/dashboard")}
            >
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 animate-fade-in shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Who are you?</h2>
          <p className="text-muted-foreground mb-6">
            Help us personalize your learning experience
          </p>
          
          <RadioGroup value={userType} onValueChange={setUserType} className="space-y-3">
            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-colors">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student" className="flex-1 cursor-pointer font-medium">
                Student
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-colors">
              <RadioGroupItem value="professional" id="professional" />
              <Label htmlFor="professional" className="flex-1 cursor-pointer font-medium">
                Young Professional
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-colors">
              <RadioGroupItem value="leader" id="leader" />
              <Label htmlFor="leader" className="flex-1 cursor-pointer font-medium">
                Community Leader
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-colors">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="flex-1 cursor-pointer font-medium">
                Other
              </Label>
            </div>
          </RadioGroup>

          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              onClick={() => setStep(3)}
              disabled={!userType}
              className="flex-1"
            >
              Continue
            </Button>
          </div>
          
          <Button
            variant="ghost"
            onClick={handleComplete}
            className="w-full mt-3"
          >
            Skip
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 animate-fade-in shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Quick Tour</h2>
        <p className="text-muted-foreground mb-8">
          Here's what you can do with FinPath
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 border-2 hover:border-primary transition-colors cursor-pointer">
            <TrendingUp className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-bold mb-2">Learn Modules</h3>
            <p className="text-sm text-muted-foreground">
              Bite-sized lessons on budgeting, saving, and investing
            </p>
          </Card>
          
          <Card className="p-6 border-2 hover:border-success transition-colors cursor-pointer">
            <Target className="w-10 h-10 text-success mb-3" />
            <h3 className="font-bold mb-2">Financial Tools</h3>
            <p className="text-sm text-muted-foreground">
              Budget planners, calculators, and scenario simulators
            </p>
          </Card>
          
          <Card className="p-6 border-2 hover:border-achievement transition-colors cursor-pointer">
            <Award className="w-10 h-10 text-achievement mb-3" />
            <h3 className="font-bold mb-2">Earn Rewards</h3>
            <p className="text-sm text-muted-foreground">
              Complete challenges and earn badges as you learn
            </p>
          </Card>
        </div>

        <Button
          size="lg"
          className="w-full"
          onClick={handleComplete}
        >
          Start My First Lesson
        </Button>
      </Card>
    </div>
  );
};

export default Onboarding;

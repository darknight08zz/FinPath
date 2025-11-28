import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Check, Award } from "lucide-react";
import { toast } from "sonner";

import { lessons } from "@/data/modules";

import { useAuth } from "@/context/AuthContext";

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, updateXP } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: boolean }>({});

  const lessonId = Number(id);
  const lessonContent = lessons[lessonId];

  if (!lessonContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
          <Button onClick={() => navigate("/modules")}>Back to Modules</Button>
        </div>
      </div>
    );
  }

  const currentContent = lessonContent[currentStep];
  const progress = ((currentStep + 1) / lessonContent.length) * 100;

  const handleNext = () => {
    if (currentContent.type === "quiz" && !showExplanation) {
      if (selectedAnswer === null) {
        toast.error("Please select an answer");
        return;
      }
      const isCorrect = selectedAnswer === currentContent.correctAnswer;
      setQuizAnswers({ ...quizAnswers, [currentStep]: isCorrect });
      setShowExplanation(true);

      if (isCorrect) {
        toast.success("Correct! 🎉");
      } else {
        toast.error("Not quite right. Read the explanation below.");
      }
      return;
    }

    if (currentStep < lessonContent.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      const xpEarned = currentContent.xpEarned || 0;
      const currentXP = user?.xp || 0;
      const newXP = currentXP + xpEarned;
      const newLevel = Math.floor(newXP / 500) + 1;

      updateXP(newXP, newLevel);

      toast.success(`Lesson completed! +${xpEarned} XP earned`, {
        icon: <Award className="w-5 h-5" />,
      });
      setTimeout(() => navigate("/modules"), 2000);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/modules")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <span className="text-sm font-medium">
              Step {currentStep + 1} of {lessonContent.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-8 animate-fade-in">
          {currentContent.type === "complete" ? (
            <div className="text-center">
              <div className="inline-flex p-4 mb-6 rounded-full bg-gradient-to-br from-success to-achievement animate-celebration">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{currentContent.title}</h2>
              <p className="text-lg text-muted-foreground mb-6 whitespace-pre-line">
                {currentContent.content}
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 text-success rounded-full font-bold text-lg mb-6">
                <Award className="w-6 h-6" />
                +{currentContent.xpEarned} XP
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">{currentContent.title}</h2>

              {currentContent.type === "quiz" ? (
                <>
                  <p className="text-lg mb-6">{currentContent.question}</p>
                  <RadioGroup value={selectedAnswer?.toString()} onValueChange={(val) => setSelectedAnswer(Number(val))}>
                    <div className="space-y-3">
                      {currentContent.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors ${showExplanation && index === currentContent.correctAnswer
                            ? "border-success bg-success/10"
                            : showExplanation && selectedAnswer === index
                              ? "border-destructive bg-destructive/10"
                              : "border-border hover:border-primary"
                            }`}
                        >
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showExplanation} />
                          <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-medium">
                            {option}
                          </Label>
                          {showExplanation && index === currentContent.correctAnswer && (
                            <Check className="w-5 h-5 text-success" />
                          )}
                        </div>
                      ))}
                    </div>
                  </RadioGroup>

                  {showExplanation && (
                    <Card className="mt-6 p-4 bg-muted/50 animate-fade-in">
                      <p className="text-sm font-medium mb-2">Explanation:</p>
                      <p className="text-sm text-muted-foreground">{currentContent.explanation}</p>
                    </Card>
                  )}
                </>
              ) : currentContent.type === "tip" ? (
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <p className="text-lg whitespace-pre-line">{currentContent.content}</p>
                </Card>
              ) : (
                <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                  {currentContent.content}
                </p>
              )}
            </>
          )}

          <div className="flex gap-3 mt-8">
            {currentStep > 0 && currentContent.type !== "complete" && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button onClick={handleNext} className="flex-1">
              {currentContent.type === "complete" ? "Back to Modules" :
                currentStep === lessonContent.length - 1 ? "Complete" : "Next"}
              {currentContent.type !== "complete" && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Lesson;

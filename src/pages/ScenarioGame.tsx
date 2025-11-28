import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Gamepad2, Trophy, Coins, Heart, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
];

const ScenarioGame = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [totalMoney, setTotalMoney] = useState(scenarios[0].money);
  const [happiness, setHappiness] = useState(scenarios[0].happiness);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [decisions, setDecisions] = useState<Decision[]>([]);

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
        <header className="border-b bg-card shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Link to="/tools">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Scenario Game</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="p-8 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-achievement/20 mb-6 animate-celebration">
              <Trophy className="w-10 h-10 text-achievement" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Game Complete!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Great job navigating through financial decisions!
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="p-6 border-l-4 border-l-achievement">
                <Trophy className="w-8 h-8 text-achievement mb-2 mx-auto" />
                <div className="text-3xl font-bold text-achievement mb-1">{totalXP}</div>
                <div className="text-sm text-muted-foreground">XP Earned</div>
              </Card>

              <Card className="p-6 border-l-4 border-l-success">
                <Coins className="w-8 h-8 text-success mb-2 mx-auto" />
                <div className="text-3xl font-bold text-success mb-1">₹{totalMoney.toLocaleString('en-IN')}</div>
                <div className="text-sm text-muted-foreground">Final Balance</div>
              </Card>

              <Card className="p-6 border-l-4 border-l-destructive">
                <Heart className="w-8 h-8 text-destructive mb-2 mx-auto" />
                <div className="text-3xl font-bold text-destructive mb-1">{happiness}%</div>
                <div className="text-sm text-muted-foreground">Happiness</div>
              </Card>
            </div>

            <Card className="p-6 mb-6 text-left bg-muted/50">
              <h3 className="font-bold mb-4">Your Decisions:</h3>
              <div className="space-y-3">
                {decisions.map((decision, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                    <Badge variant={decision.xpChange > 60 ? "default" : "secondary"}>
                      Scenario {idx + 1}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium mb-1">{decision.text}</p>
                      <div className="flex gap-3 text-sm">
                        <span className={decision.moneyChange >= 0 ? "text-success" : "text-destructive"}>
                          {decision.moneyChange >= 0 ? <TrendingUp className="inline w-4 h-4" /> : <TrendingDown className="inline w-4 h-4" />}
                          {decision.moneyChange >= 0 ? '+' : ''}₹{Math.abs(decision.moneyChange).toLocaleString('en-IN')}
                        </span>
                        <span className="text-achievement">+{decision.xpChange} XP</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} size="lg" className="gap-2">
                <Gamepad2 className="w-5 h-5" />
                Play Again
              </Button>
              <Link to="/tools">
                <Button variant="outline" size="lg">
                  Back to Tools
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <header className="border-b bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/tools">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Financial Scenario</h1>
            </div>
            <Badge variant="secondary">
              Scenario {currentScenarioIndex + 1}/{scenarios.length}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in">
          <Card className="p-4 text-center border-l-4 border-l-success">
            <Coins className="w-6 h-6 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-success">₹{totalMoney.toLocaleString('en-IN')}</div>
            <div className="text-xs text-muted-foreground">Balance</div>
          </Card>

          <Card className="p-4 text-center border-l-4 border-l-achievement">
            <Trophy className="w-6 h-6 text-achievement mx-auto mb-2" />
            <div className="text-2xl font-bold text-achievement">{totalXP}</div>
            <div className="text-xs text-muted-foreground">XP</div>
          </Card>

          <Card className="p-4 text-center border-l-4 border-l-destructive">
            <Heart className="w-6 h-6 text-destructive mx-auto mb-2" />
            <div className="text-2xl font-bold text-destructive">{happiness}%</div>
            <div className="text-xs text-muted-foreground">Happiness</div>
          </Card>
        </div>

        {/* Scenario Content */}
        <Card className="p-8 animate-fade-in">
          {!selectedDecision ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{currentScenario.title}</h2>
                  <p className="text-sm text-muted-foreground">Make your choice wisely</p>
                </div>
              </div>

              <p className="text-lg mb-8 leading-relaxed">{currentScenario.description}</p>

              <div className="space-y-4">
                {currentScenario.decisions.map((decision) => (
                  <Button
                    key={decision.id}
                    onClick={() => handleDecision(decision)}
                    variant="outline"
                    className="w-full text-left h-auto py-4 px-6 justify-start hover:border-primary transition-all"
                  >
                    <div className="flex-1">
                      <p className="font-medium mb-2">{decision.text}</p>
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        {decision.moneyChange !== 0 && (
                          <span className={decision.moneyChange > 0 ? "text-success" : "text-destructive"}>
                            {decision.moneyChange > 0 ? '+' : ''}₹{Math.abs(decision.moneyChange).toLocaleString('en-IN')}
                          </span>
                        )}
                        <span className="text-achievement">+{decision.xpChange} XP</span>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-success/10 rounded-full">
                  <Trophy className="w-8 h-8 text-success" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Decision Made!</h2>
                  <p className="text-sm text-muted-foreground">Here's what happened</p>
                </div>
              </div>

              <Card className="p-6 mb-6 bg-muted/50 border-l-4 border-l-primary">
                <p className="font-medium mb-2 text-primary">You chose:</p>
                <p className="text-lg mb-4">{selectedDecision.text}</p>
                <p className="leading-relaxed">{selectedDecision.consequence}</p>
              </Card>

              <div className="flex gap-4 mb-6">
                {selectedDecision.moneyChange !== 0 && (
                  <Badge variant={selectedDecision.moneyChange > 0 ? "default" : "destructive"} className="text-base py-2 px-4">
                    {selectedDecision.moneyChange > 0 ? '+' : ''}₹{Math.abs(selectedDecision.moneyChange).toLocaleString('en-IN')}
                  </Badge>
                )}
                <Badge variant="secondary" className="text-base py-2 px-4">
                  +{selectedDecision.xpChange} XP
                </Badge>
              </div>

              <Button onClick={handleNext} size="lg" className="w-full">
                {currentScenarioIndex < scenarios.length - 1 ? 'Next Scenario' : 'Complete Game'}
              </Button>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ScenarioGame;

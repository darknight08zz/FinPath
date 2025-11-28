import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, TrendingUp, Download, IndianRupee } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const InvestmentSimulator = () => {
  const [monthlySip, setMonthlySip] = useState(5000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflation, setInflation] = useState(6);

  // Calculate future value using compound interest
  const months = years * 12;
  const monthlyRate = expectedReturn / 12 / 100;
  
  // SIP Future Value formula: FV = P × [((1 + r)^n - 1) / r] × (1 + r)
  const futureValue = monthlySip * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
  const totalInvested = monthlySip * months;
  const totalReturns = futureValue - totalInvested;

  // Inflation-adjusted value
  const inflationRate = inflation / 100;
  const realValue = futureValue / Math.pow(1 + inflationRate, years);

  // Generate year-wise data
  const generateGrowthData = () => {
    const data = [];
    let invested = 0;
    let value = 0;
    
    for (let year = 1; year <= years; year++) {
      const monthsElapsed = year * 12;
      invested = monthlySip * monthsElapsed;
      value = monthlySip * (((Math.pow(1 + monthlyRate, monthsElapsed) - 1) / monthlyRate) * (1 + monthlyRate));
      const realVal = value / Math.pow(1 + inflationRate, year);
      
      data.push({
        year,
        invested: Math.round(invested),
        value: Math.round(value),
        realValue: Math.round(realVal),
      });
    }
    
    return data;
  };

  const growthData = generateGrowthData();

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
            <h1 className="text-2xl font-bold">Investment Simulator</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Card className="p-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-success/10 rounded-full">
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">SIP Investment Calculator</h2>
              <p className="text-muted-foreground">Project your investment growth over time</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="sip" className="text-base font-semibold mb-2 block">
                  Monthly SIP Amount
                </Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="sip"
                    type="number"
                    value={monthlySip}
                    onChange={(e) => setMonthlySip(Number(e.target.value))}
                    className="pl-10 text-lg"
                    placeholder="5000"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label className="font-semibold">Investment Period (Years)</Label>
                  <span className="text-sm font-medium">{years} years</span>
                </div>
                <Slider
                  value={[years]}
                  onValueChange={(val) => setYears(val[0])}
                  min={1}
                  max={30}
                  step={1}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label className="font-semibold">Expected Return (% per year)</Label>
                  <span className="text-sm font-medium">{expectedReturn}%</span>
                </div>
                <Slider
                  value={[expectedReturn]}
                  onValueChange={(val) => setExpectedReturn(val[0])}
                  min={1}
                  max={25}
                  step={0.5}
                />
                <p className="text-xs text-muted-foreground mt-1">Typical equity returns: 10-15%</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label className="font-semibold">Expected Inflation (%)</Label>
                  <span className="text-sm font-medium">{inflation}%</span>
                </div>
                <Slider
                  value={[inflation]}
                  onValueChange={(val) => setInflation(val[0])}
                  min={1}
                  max={12}
                  step={0.5}
                />
              </div>

              {/* Results Cards */}
              <div className="space-y-3 pt-4">
                <Card className="p-4 border-l-4 border-l-primary">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Invested</span>
                    <span className="text-xl font-bold">₹{Math.round(totalInvested).toLocaleString('en-IN')}</span>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-success bg-success/5">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Future Value</span>
                    <span className="text-2xl font-bold text-success">₹{Math.round(futureValue).toLocaleString('en-IN')}</span>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-achievement">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Expected Returns</span>
                    <span className="text-xl font-bold">₹{Math.round(totalReturns).toLocaleString('en-IN')}</span>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-info">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Inflation-Adjusted Value</span>
                    <span className="text-xl font-bold">₹{Math.round(realValue).toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Purchasing power in today's money</p>
                </Card>
              </div>
            </div>

            {/* Chart Section */}
            <div className="space-y-6">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                    <YAxis />
                    <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="invested" 
                      stackId="1"
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary))" 
                      fillOpacity={0.6}
                      name="Invested" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--success))" 
                      fill="hsl(var(--success))" 
                      fillOpacity={0.3}
                      name="Future Value" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="realValue" 
                      stroke="hsl(var(--info))" 
                      fill="none" 
                      strokeDasharray="5 5"
                      name="Real Value" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Key Insights */}
              <Card className="p-4 bg-success/5">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  Key Insights
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Return on Investment:</span>
                    <span className="font-bold text-success">{((totalReturns / totalInvested) * 100).toFixed(1)}%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wealth Multiplier:</span>
                    <span className="font-bold">{(futureValue / totalInvested).toFixed(2)}x</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Real Return (after inflation):</span>
                    <span className="font-bold">{(expectedReturn - inflation).toFixed(1)}%</span>
                  </li>
                </ul>
              </Card>

              <Button className="w-full" size="lg" variant="outline">
                <Download className="w-5 h-5 mr-2" />
                Export Projection
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentSimulator;

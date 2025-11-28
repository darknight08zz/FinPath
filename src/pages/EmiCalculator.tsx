import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Calculator, Download, IndianRupee } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(5);

  // Calculate EMI using formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = monthlyRate !== 0 
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    : principal / months;
  
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  // Generate amortization schedule
  const generateSchedule = () => {
    const schedule = [];
    let balance = principal;
    
    for (let year = 1; year <= tenure; year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;
      
      for (let month = 1; month <= 12; month++) {
        const interest = balance * monthlyRate;
        const principalPayment = emi - interest;
        balance -= principalPayment;
        yearlyPrincipal += principalPayment;
        yearlyInterest += interest;
      }
      
      schedule.push({
        year,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        balance: Math.max(0, Math.round(balance)),
      });
    }
    
    return schedule;
  };

  const schedule = generateSchedule();

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
            <h1 className="text-2xl font-bold">EMI Calculator</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Card className="p-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-info/10 rounded-full">
              <Calculator className="w-8 h-8 text-info" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Loan EMI Calculator</h2>
              <p className="text-muted-foreground">Calculate your monthly installments</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="principal" className="text-base font-semibold mb-2 block">
                  Loan Amount
                </Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="pl-10 text-lg"
                    placeholder="500000"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label className="font-semibold">Interest Rate (% per year)</Label>
                  <span className="text-sm font-medium">{rate}%</span>
                </div>
                <Slider
                  value={[rate]}
                  onValueChange={(val) => setRate(val[0])}
                  min={1}
                  max={20}
                  step={0.5}
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label className="font-semibold">Loan Tenure (Years)</Label>
                  <span className="text-sm font-medium">{tenure} years</span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(val) => setTenure(val[0])}
                  min={1}
                  max={30}
                  step={1}
                />
              </div>

              {/* Results Cards */}
              <div className="space-y-3 pt-4">
                <Card className="p-4 border-l-4 border-l-info bg-info/5">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Monthly EMI</span>
                    <span className="text-2xl font-bold text-info">₹{Math.round(emi).toLocaleString('en-IN')}</span>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-primary">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Principal Amount</span>
                    <span className="text-xl font-bold">₹{principal.toLocaleString('en-IN')}</span>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-warning">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Interest</span>
                    <span className="text-xl font-bold">₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                  </div>
                </Card>

                <Card className="p-4 border-l-4 border-l-success">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Payment</span>
                    <span className="text-xl font-bold">₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Chart Section */}
            <div className="space-y-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={schedule}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                    <YAxis />
                    <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                    <Legend />
                    <Line type="monotone" dataKey="principal" stroke="hsl(var(--primary))" name="Principal" strokeWidth={2} />
                    <Line type="monotone" dataKey="interest" stroke="hsl(var(--warning))" name="Interest" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Amortization Table */}
              <Card className="p-4 max-h-64 overflow-auto">
                <h3 className="font-bold mb-3">Amortization Schedule</h3>
                <div className="space-y-2">
                  {schedule.map((item) => (
                    <div key={item.year} className="flex justify-between text-sm border-b pb-2">
                      <span className="font-medium">Year {item.year}</span>
                      <span className="text-muted-foreground">Balance: ₹{item.balance.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Button className="w-full" size="lg" variant="outline">
                <Download className="w-5 h-5 mr-2" />
                Export Schedule
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmiCalculator;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Shield, Target } from "lucide-react";

const Home = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <nav className="border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                            <BarChart3 className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold">FinPath</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <Button variant="ghost">Log in</Button>
                        </Link>
                        <Link to="/signup">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1">
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            Master Your Financial Journey
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Learn, track, and grow your wealth with our interactive financial literacy platform.
                            Gamified lessons, real-time simulations, and expert tools at your fingertips.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/signup">
                                <Button size="lg" className="gap-2">
                                    Start Learning Now <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button size="lg" variant="outline">
                                    Continue Journey
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-background p-8 rounded-xl shadow-sm border">
                                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
                                <p className="text-muted-foreground">
                                    Bite-sized modules on budgeting, investing, and debt management designed to make learning easy.
                                </p>
                            </div>
                            <div className="bg-background p-8 rounded-xl shadow-sm border">
                                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                                    <BarChart3 className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Real-time Simulations</h3>
                                <p className="text-muted-foreground">
                                    Practice trading and investment strategies in a risk-free environment with market data.
                                </p>
                            </div>
                            <div className="bg-background p-8 rounded-xl shadow-sm border">
                                <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
                                <p className="text-muted-foreground">
                                    Your data is encrypted and secure. We prioritize your privacy while you focus on growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t py-8">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <p>&copy; 2024 FinPath. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;

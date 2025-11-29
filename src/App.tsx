import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import Lesson from "./pages/Lesson";
import Tools from "./pages/Tools";
import EmiCalculator from "./pages/EmiCalculator";
import InvestmentSimulator from "./pages/InvestmentSimulator";
import ScenarioGame from "./pages/ScenarioGame";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onboarding" element={<Onboarding />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/modules" element={
              <ProtectedRoute>
                <Modules />
              </ProtectedRoute>
            } />
            <Route path="/lesson/:id" element={
              <ProtectedRoute>
                <Lesson />
              </ProtectedRoute>
            } />
            <Route path="/tools" element={
              <ProtectedRoute>
                <Tools />
              </ProtectedRoute>
            } />
            <Route path="/tools/emi" element={
              <ProtectedRoute>
                <EmiCalculator />
              </ProtectedRoute>
            } />
            <Route path="/tools/investment" element={
              <ProtectedRoute>
                <InvestmentSimulator />
              </ProtectedRoute>
            } />
            <Route path="/tools/scenario" element={
              <ProtectedRoute>
                <ScenarioGame />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

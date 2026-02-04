import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import VerifyOTP from "./pages/VerifyOTP";
import VerifyEmail from "./pages/VerifyEmail";
import AuthCallback from "./pages/AuthCallback";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardPrograms from "./pages/DashboardPrograms";
import DashboardUsers from "./pages/DashboardUsers";
import DashboardEvents from "./pages/DashboardEvents";
import DashboardReports from "./pages/DashboardReports";
import DashboardGrowth from "./pages/DashboardGrowth";
import DashboardLocations from "./pages/DashboardLocations";
import DashboardMessages from "./pages/DashboardMessages";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardProfile from "./pages/DashboardProfile";



const queryClient = new QueryClient();

const App = () => (

  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    
      <BrowserRouter basename = "/"> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/verify-otp" element={<VerifyOTP />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard/programs" element={<DashboardPrograms />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
          <Route path="/dashboard/events" element={<DashboardEvents />} />
          <Route path="/dashboard/reports" element={<DashboardReports />} />
          <Route path="/dashboard/growth" element={<DashboardGrowth />} />
          <Route path="/dashboard/locations" element={<DashboardLocations />} />
          <Route path="/dashboard/messages" element={<DashboardMessages />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

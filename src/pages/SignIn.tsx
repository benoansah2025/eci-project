import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/integrations/api/client";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
const location = useLocation(); 
 // ✅ Scroll to section if hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // "sign-in"
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      const res = await api.post<{ success: boolean; user?: unknown }>('/api/accounts/signin/', {
        email: data.email,
        password: data.password,
      });

      if (res.user) {
        toast({ title: "Welcome back!", description: "Signed in successfully." });
        navigate("/dashboard");
      } else {
        toast({ title: "Code sent", description: "A verification code has been sent to your email." });
        navigate("/auth/verify-otp", { state: { email: data.email, isSignIn: true } });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Header />
      <br /><br />
      <div className="container mx-auto px-4 py-12 scroll-mt-40" >
        <div className="max-w-md mx-auto scroll-mt-40" id = "sign-in">
          <Card className="shadow-elegant border-border/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                <LogIn className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your ECI account to access the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Enter your password"
                      className={errors.password ? "border-destructive pr-10" : "pr-10"}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-brand hover:bg-gradient-brand/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center space-y-2">
                  <Link 
                    to="/auth/forgot-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot your password?
                  </Link>
                  
                  <div className="text-sm">
                    <span className="text-muted-foreground">Don't have an account? </span>
                    <Link 
                      to="/auth/sign-up" 
                      className="text-primary hover:underline font-medium"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;
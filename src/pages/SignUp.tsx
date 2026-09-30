import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/integrations/api/client";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

interface DivisionOption {
  value: string;
  label: string;
}

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(10, "Password must be at least 10 characters")
    .max(24, "Password must be no more than 24 characters")
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, "Password must contain at least one letter and one number"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  division: z.string().min(1, "Division is required"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [divisions, setDivisions] = useState<DivisionOption[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    api.get<{ success: boolean; divisions: DivisionOption[] }>('/api/accounts/divisions/')
      .then((res) => setDivisions(res.divisions))
      .catch(() => { /* non-fatal — division select stays empty */ });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const division = watch("division");

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      const res = await api.post<{ success: boolean; user?: unknown }>('/api/accounts/signup/', {
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        phone_number: data.phoneNumber,
        division: data.division,
        password: data.password,
      });

      // OTP verification disabled — navigate directly to dashboard on success
      toast({ title: "Account created!", description: "Welcome to ECI." });
      navigate("/dashboard");
      /* if (res.user) {
        toast({ title: "Account created!", description: "Welcome to ECI." });
        navigate("/dashboard");
      } else {
        toast({ title: "Code sent", description: "A verification code has been sent to your email." });
        navigate("/auth/verify-otp", { state: { email: data.email, isSignUp: true } });
      } */
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
      <br />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto mt-scroll-40" id="sign-up">
          <Card className="shadow-elegant border-border/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Join ECI</CardTitle>
              <CardDescription>
                Create your account to access career mentorship and volunteer opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="Nathan"
                      className={errors.firstName ? "border-destructive" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Akornor"
                      className={errors.lastName ? "border-destructive" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="nathan@example.com"
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
                      placeholder="**************"
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
                  <p className="text-xs text-muted-foreground">
                    10-24 characters with at least one letter and one number
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    {...register("phoneNumber")}
                    placeholder="+233 123 456 789"
                    className={errors.phoneNumber ? "border-destructive" : ""}
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-destructive">{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="division">Division</Label>
                  <Controller
                    name="division"
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className={errors.division ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select your division" />
                        </SelectTrigger>
                        <SelectContent>
                          {divisions.map((d) => (
                            <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.division && (
                    <p className="text-sm text-destructive">{errors.division.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-brand hover:bg-gradient-brand/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Sign Up"}
                </Button>

                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link 
                    to="/auth/sign-in" 
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
                  </Link>
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

export default SignUp;
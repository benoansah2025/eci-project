import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/sign-in", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
        <p className="text-lg font-medium">Verifying your account...</p>
        <p className="text-sm text-muted-foreground mt-2">Please wait while we complete your authentication.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
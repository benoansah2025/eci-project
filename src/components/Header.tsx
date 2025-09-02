import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/eci-back2.png";

const Header = () => {
  return (
    <header className="bg-background/70 backdrop-blur-sm border-b border-border sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-3 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <img src={logo} alt="Elite Career Initiative Logo" width={120}/>
          <div>
          
            <h1 className="text-xlg font-bold text-primary">Empowering Ghana's Next Generation Of Leaders</h1>
           
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4" role="navigation" aria-label="Main navigation">
          <a 
            href="/" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Home page"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Learn about our mission"
          >
            About
          </a>
          <a 
            href="/team" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Meet our team"
          >
            Team
          </a>
          <a 
            href="/resources" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Access our resource library"
          >
            Resources
          </a>
          <a 
            href="#programs" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="View our career development programs"
          >
            Programs
          </a>
          <a 
            href="/contact" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Contact us"
          >
            Contact
          </a>
          <a 
            href="/donate" 
            className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Support our mission"
          >
            Support Us
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Mobile navigation">
                <a 
                  href="/" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Home page"
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Learn about our mission"
                >
                  About
                </a>
                <a 
                  href="/team" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Meet our team"
                >
                  Team
                </a>
                <a 
                  href="/resources" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Access our resource library"
                >
                  Resources
                </a>
                <a 
                  href="#programs" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="View our career development programs"
                >
                  Programs
                </a>
                <a 
                  href="/contact" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Contact us"
                >
                  Contact
                </a>
                <a 
                  href="/donate" 
                  className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1 text-lg"
                  aria-label="Support our mission"
                >
                  Support Us
                </a>
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button variant="ghost" size="sm" aria-label="Sign in to your account">
                    Sign In
                  </Button>
                  <Button variant="cta" size="sm" aria-label="Join Elite Career Initiative">
                    Join ECI
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="hero" size="sm" aria-label="Sign in to your account">
            Sign In
          </Button>
          <Button variant= "hero" size="sm" aria-label="Join Elite Career Initiative">
            Join ECI
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
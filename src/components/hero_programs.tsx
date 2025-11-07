import { Button } from "@/components/ui/button";
import heroImage from "@/assets/programs-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Diverse young Ghanaian students and professionals collaborating in a modern training environment"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-background/85 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center md:text-left">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="md:text-7xl font-bold text-secondary-foreground mb-8 pt-40">
           Our
            <span className="text-primary"> Services</span>
          </h1>
          
          <p className="text-lg md:text-3xl text-secondary-foreground  mb-8 max-w-1xl pb-20">
            Discover our comprehensive career development services.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
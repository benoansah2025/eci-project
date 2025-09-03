import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sponsor_3.jpg";

const Hero = () => {
  return (
    <section className="relative min-h flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Young African professionals and students in mentorship and career development settings"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/85 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center md:text-left">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="md:text-7xl font-bold text-secondary-foreground mb-8 pt-40 space-y-10">
            Support <span className="text-primary ">Our Mission</span>
            {/* <span className="text-primary block mt-3">Employment Success</span> */}
             <p className="text-lg md:text-3xl text-secondary-foreground  mb-8 max-w-1xl pb-20">
            Help us bridge the gap between education and employment in Ghana. Your contribution makes a lasting impact.
          </p>
          </h1>
          
         
     
        </div>
      </div>
    </section>
  );
};

export default Hero;
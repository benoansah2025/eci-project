import { Button } from "@/components/ui/button";
import heroImage from "@/assets/about_2.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-background/85 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center md:text-left">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="md:text-7xl font-bold text-primary mb-8 pt-40">
            About ECI
            {/* <span className="text-primary block mt-3">Employment Success</span> */}
          </h1>
          
          <p className="text-lg md:text-3xl text-primary  mb-8 max-w-1xl pt-15">
            Founded with a passion for empowering Ghana's youth, we bridge the gap between education and employment, creating pathways for young professionals to thrive in the modern economy.
          </p>
     
        </div>
      </div>
    </section>
  );
};

export default Hero;
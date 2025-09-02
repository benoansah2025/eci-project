
import heroImage from "@/assets/team_x.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-1 flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Young African professionals and students in mentorship and career development settings"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-background/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center md:text-left">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="md:text-7xl font-bold text-primary mb-8 pt-40">
            Meet Our Team
            {/* <span className="text-primary block mt-3">Employment Success</span> */}
          </h1>
          
          <p className="text-lg md:text-3xl text-primary font-regular  mb-8 max-w-1xl pb-20">
            Passionate professionals dedicated to empowering Ghana's youth and transforming career development across West Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
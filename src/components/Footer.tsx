import logo from "@/assets/eci-back2.png";
import { Linkedin, Facebook,Instagram } from "lucide-react"
const Footer = () => {
  return (
    <footer className="bg-background backdrop-blur-xs text-primary py-1" role="contentinfo">
      <div className="container mx-auto p-4 space-y-1">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Elite Career Initiative Logo" width={120}/>
              {/* <EciLogo className="w-10 h-10" /> */}
              <div className="container space-y-2 items-center">
                {/* <h3 className="text-lg font-semibold">Elite Career Initiative</h3> */}
                <p className="text-xlg font-bold text-primary flex space-x-5">Empowering Ghana's Future</p>
                <p className="text-primary space-x-5 mb-4 max-w-md">
              Bridging the gap between traditional education(classroom) and employment (workplace) through personalized coaching, career development trainings, workshops, and resources materials.
            </p>
              </div>
            </div>
            
            {/* <div className="pt-12 space-x-4 space-y-3">
              <a 
                href="https://linkedin.com/company/elite-career-initiative" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/elitecareergh" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary transition-colors"
                aria-label="Visit our Twitter page"
              >
                Twitter
              </a>
              <a 
                href="https://facebook.com/elitecareerinitiative" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                Facebook
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#programs" className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">Programs</a></li>
              <li><a href="#how-it-works" className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">How It Works</a></li>
              <li><a href="#get-involved" className="text-primary hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">Get Involved</a></li>
              <li><a href="#" className="text-primary/ hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">Success Stories</a></li>
              <li><a href="#" className="text-primary/ hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm">Resources</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="">
            <h4 className="font-bold mb-4 text-primary">Contact</h4>
  <ul className="space-y-4 text-sm text-primary">
    <li className="flex items-center">
      <span role="img" aria-label="Email" className="text-lg">📧</span>
      <a
        href="mailto:elitecareerinitiative@gmail.com"
        className="ml-2 hover:text-secondary transition-colors"
      >
        elitecareerinitiative@gmail.com
      </a>
    </li>
    <li className="flex items-center ">
      <span role="img" aria-label="Phone" className="text-lg">📱</span>
      <span className="ml-2 hover:text-secondary transition-colors">+233 059 408 4031</span>
    </li>
    <li className="flex items-center">
      <span role="img" aria-label="Location" className="text-lg">📍</span>
      <span className="ml-2 hover:text-secondary transition-colors">Accra, Ghana</span>
    </li>
  </ul>
          </div>
        </div>
        <br />
       <div className="border-t border-primary-foreground space-x-6 text-center">
          <div className="flex md:flex-row items-center gap-6 text-center">
            <a
              href="https://linkedin.com/company/elite-career-initiatives"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="w-10 h-10" />
            </a>
            <a
              href="https://instagram.com/elitecareergh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
              aria-label="Visit our Twitter page"
            >
              <Instagram className="h-10 w-10" />
            </a>
            <a
              href="https://facebook.com/elitecareerinitiative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-10 w-10" />
            </a>
          </div>
          <br />
          <p className="text-lg text-primary">
            Elite Career Initiatives

          </p>
          <p className="text-md text-primary">
            © copyright 2025

          </p>
          <p className="text-sm text-primary">

            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
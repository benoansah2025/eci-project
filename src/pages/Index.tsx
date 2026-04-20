import { useState } from "react";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { imagePresets } from "@/lib/cloudinary";

const EVENT_BANNER_PUBLIC_ID = "Event_FlyerV4.jpg_rlyud8.jpg";
const EVENT_REGISTRATION_URL = "https://forms.gle/jQuePbtL7yWJvUoC7";

const Index = () => {
  const [showEventBanner, setShowEventBanner] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const closeEventBanner = () => {
    setShowEventBanner(false);
    setShowRegistrationForm(false);
  };

  return (
    <div className="min-h-screen">
      {showEventBanner && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Upcoming event banner"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-lg bg-background shadow-2xl">
            <button
              type="button"
              onClick={closeEventBanner}
              className="absolute right-2 top-2 z-10 rounded-full bg-background/90 p-2 text-foreground transition hover:bg-background"
              aria-label="Close event banner"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="space-y-1 px-4 pb-3 pt-10 text-center">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Have you registered for the upcoming event?
              </h2>
              <p className="text-sm text-muted-foreground">
                Checkout the details below and complete your registration form.
              </p>
            </div>
            <img
              src={imagePresets.eventBanner(EVENT_BANNER_PUBLIC_ID)}
              alt="Elite Career Initiatives event on 24th April 2026"
              className="h-auto w-full object-contain"
            />
            <div className="flex items-center justify-center px-4 pb-4 pt-3">
              <button
                type="button"
                onClick={() => setShowRegistrationForm(true)}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showRegistrationForm && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Event registration form"
        >
          <div className="relative h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-background shadow-2xl">
            <button
              type="button"
              onClick={() => setShowRegistrationForm(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-background p-2 text-foreground shadow transition hover:bg-muted"
              aria-label="Close registration form"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="border-b border-border px-5 py-4 pr-14">
              <h3 className="text-lg font-semibold text-foreground">Event Registration</h3>
              <p className="text-sm text-muted-foreground">
                Fill the embedded form below to reserve your slot.
              </p>
            </div>
            <iframe
              title="Event Registration (Career Awareness & Empowerment Series - ATU Edition)"
              src={`${EVENT_REGISTRATION_URL}?embedded=true`}
              className="h-[calc(90vh-74px)] w-full"
            />
          </div>
        </div>
      )}

      {/* Skip navigation for screen readers */}
      <a 
        href="#main-content" 
        className="skip-nav focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Skip to main content
      </a>
       <div className="relative">
        <Hero />
        <Header />
      </div>

      {/* <Header /> */}
      <main id="main-content" role="main">
        {/* <Hero /> */}
        <Programs />
        <HowItWorks />
        {/* <Impact /> */}
        <GetInvolved />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

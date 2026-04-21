import hero from "@/assets/hero.jpg";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-accent" /> Lagos' Premier Beauty Destination
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Where Beauty <br />
            Meets <span className="text-gradient-gold">Glow.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Experience luxury hair styling, spa treatments, and beauty services crafted for the modern Nigerian woman.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-elegant hover:scale-105 transition-smooth">
              Book Appointment
            </a>
            <a href="#services" className="px-8 py-4 rounded-full font-medium border border-foreground/20 hover:bg-foreground/5 transition-smooth">
              View Services
            </a>
          </div>
          <div className="mt-12 flex gap-8">
            <div>
              <p className="font-serif text-3xl font-bold text-primary">5K+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-primary">25+</p>
              <p className="text-sm text-muted-foreground">Expert Stylists</p>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-4 bg-gradient-gold rounded-[2rem] opacity-30 blur-2xl" />
          <img
            src={hero}
            alt="Elegant Nigerian woman with beautiful styled hair at Glow Hair and Spa Lagos"
            width={1536}
            height={1024}
            className="relative rounded-[2rem] shadow-elegant w-full object-cover aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
};

import { Scissors, Sparkles, Flower2, Hand, Brush, Crown } from "lucide-react";

const services = [
  { icon: Scissors, name: "Hair Styling", desc: "Cuts, blowouts & finishing", price: "₦15,000" },
  { icon: Crown, name: "Wig Installation", desc: "Lace frontals & closures", price: "₦35,000" },
  { icon: Sparkles, name: "Box Braids & Twists", desc: "Knotless, boho & Senegalese", price: "₦45,000" },
  { icon: Brush, name: "Hair Coloring", desc: "Balayage, highlights, full color", price: "₦40,000" },
  { icon: Flower2, name: "Spa Facial", desc: "Deep cleanse & glow facial", price: "₦25,000" },
  { icon: Hand, name: "Mani & Pedi", desc: "Gel polish + paraffin treatment", price: "₦18,000" },
  { icon: Crown, name: "Bridal Package", desc: "Hair, makeup & spa for your day", price: "₦150,000" },
  { icon: Sparkles, name: "Full Body Massage", desc: "60-minute Swedish massage", price: "₦30,000" },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">Our Menu</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Services & Pricing</h2>
          <p className="text-muted-foreground">
            Indulge in our signature treatments — every service is delivered by certified professionals using premium products.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-smooth">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <p className="text-2xl font-serif font-bold text-gradient-gold">
                {s.price}<span className="text-xs text-muted-foreground font-sans font-normal"> from</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

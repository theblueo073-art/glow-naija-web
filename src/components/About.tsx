import { Award, Heart, Leaf } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Experts", desc: "A team of master stylists trained in the latest international techniques." },
  { icon: Leaf, title: "Premium Products", desc: "We use only top-tier, salon-grade products that nurture your hair and skin." },
  { icon: Heart, title: "Personalized Care", desc: "Every appointment is tailored to your unique style, hair type, and goals." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">Why Glow</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Crafted for Lagos. Loved Everywhere.</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Born in the heart of Lagos, Glow Hair & Spa is more than a salon — it's a sanctuary. We blend
          African heritage with modern luxury to create looks and treatments that make you feel as radiant as you are.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-8 rounded-2xl bg-gradient-hero border border-border">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground mb-4 shadow-gold">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

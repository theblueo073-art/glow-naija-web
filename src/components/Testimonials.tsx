import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Homeowner, Lekki",
    initials: "AO",
    text: "PrimeNest made buying our family home in Lagos seamless. Their team handled every legal detail with professionalism — we couldn't be more grateful.",
  },
  {
    name: "Chinedu Okafor",
    role: "Investor, Abuja",
    initials: "CO",
    text: "I've worked with several agencies, but PrimeNest stands above the rest. Honest, knowledgeable, and they always find me prime investment opportunities.",
  },
  {
    name: "Folake Adebayo",
    role: "Tenant, Victoria Island",
    initials: "FA",
    text: "From viewing to keys-in-hand in under two weeks. The agents truly care, and the apartment exceeded every expectation. Highly recommended!",
  },
  {
    name: "Emeka Nwosu",
    role: "Developer, Port Harcourt",
    initials: "EN",
    text: "PrimeNest helped us sell out our entire estate ahead of schedule. Their marketing reach and client network in Nigeria are second to none.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Words From Our Clients</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative p-8 bg-card rounded-2xl shadow-soft border border-border hover:shadow-luxury transition-smooth"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed mb-6">"{t.text}"</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-navy text-primary-foreground flex items-center justify-center font-serif font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

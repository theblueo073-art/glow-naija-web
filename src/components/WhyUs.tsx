import { ShieldCheck, Award, Handshake, Headphones, KeyRound, TrendingUp } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every property is legally vetted and physically inspected by our team." },
  { icon: Award, title: "15+ Years Expertise", desc: "Over a decade of trusted service in Nigeria's premium property market." },
  { icon: Handshake, title: "Transparent Deals", desc: "No hidden fees. Clear contracts. Honest pricing — every single time." },
  { icon: Headphones, title: "24/7 Concierge", desc: "Dedicated agents available round-the-clock for clients and viewings." },
  { icon: KeyRound, title: "End-to-End Service", desc: "From first viewing to handover — we manage every step seamlessly." },
  { icon: TrendingUp, title: "Investment Insight", desc: "Data-driven advice to help your property portfolio grow in value." },
];

export const WhyUs = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Why PrimeNest</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nigeria's Most Trusted Realty</h2>
          <p className="text-primary-foreground/75">
            We combine local market mastery with world-class service to deliver property experiences that exceed expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-7 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/[0.07] transition-smooth"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center text-primary mb-5 shadow-gold group-hover:scale-110 transition-smooth">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

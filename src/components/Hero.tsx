import { Search, MapPin, Building2 } from "lucide-react";
import hero from "@/assets/hero.jpg";

const stats = [
  { value: "2,500+", label: "Properties Listed" },
  { value: "1,800+", label: "Happy Clients" },
  { value: "4", label: "Cities Covered" },
  { value: "15+", label: "Years Experience" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-0 md:min-h-[100vh] flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Luxury Nigerian property at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container mx-auto py-20 md:py-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-medium tracking-wider uppercase mb-6">
            Nigeria's Trusted Property Partner
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight">
            Discover Your <br />
            <span className="text-gradient-gold">Prime Address.</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
            Luxury homes, premium apartments and investment properties across Lagos, Abuja, Port Harcourt and Ibadan.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mt-10 max-w-4xl bg-background/95 backdrop-blur rounded-2xl shadow-luxury p-3 md:p-4 animate-fade-up [animation-delay:200ms]">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-2 md:gap-3">
            <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Location</span>
                <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
                  <option>All Cities</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Ibadan</option>
                </select>
              </div>
            </label>
            <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
              <Building2 className="h-5 w-5 text-accent shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Type</span>
                <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
                  <option>Any Property</option>
                  <option>Duplex</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Land</option>
                </select>
              </div>
            </label>
            <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50">
              <span className="text-accent font-bold text-lg shrink-0">₦</span>
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Budget</span>
                <select className="w-full bg-transparent text-sm font-medium text-foreground outline-none">
                  <option>Any Price</option>
                  <option>Under ₦50M</option>
                  <option>₦50M – ₦150M</option>
                  <option>₦150M – ₦500M</option>
                  <option>₦500M+</option>
                </select>
              </div>
            </label>
            <button className="bg-gradient-gold text-primary px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-gold hover:scale-[1.02] transition-smooth">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-up [animation-delay:400ms]">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left border-l-2 border-accent/60 pl-4">
              <p className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">{s.value}</p>
              <p className="text-xs md:text-sm text-primary-foreground/75 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

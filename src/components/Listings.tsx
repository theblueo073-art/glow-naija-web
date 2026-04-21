import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

type Property = {
  img: string;
  title: string;
  location: string;
  ngn: string;
  usd: string;
  beds: number;
  baths: number;
  sqm: number;
  tag: "For Sale" | "For Rent";
};

const properties: Property[] = [
  { img: p1, title: "Modern 5-Bedroom Duplex", location: "Lekki Phase 1, Lagos", ngn: "₦450,000,000", usd: "$295,000", beds: 5, baths: 6, sqm: 480, tag: "For Sale" },
  { img: p2, title: "Sky-View Penthouse", location: "Maitama, Abuja", ngn: "₦18,500,000/yr", usd: "$12,200/yr", beds: 3, baths: 3, sqm: 220, tag: "For Rent" },
  { img: p3, title: "Tropical Villa & Pool", location: "GRA, Port Harcourt", ngn: "₦320,000,000", usd: "$210,000", beds: 4, baths: 5, sqm: 410, tag: "For Sale" },
  { img: p4, title: "Elegant Terraced Home", location: "Bodija, Ibadan", ngn: "₦95,000,000", usd: "$62,500", beds: 4, baths: 4, sqm: 320, tag: "For Sale" },
  { img: p5, title: "Luxury High-Rise Suite", location: "Victoria Island, Lagos", ngn: "₦25,000,000/yr", usd: "$16,500/yr", beds: 2, baths: 2, sqm: 165, tag: "For Rent" },
  { img: p6, title: "Classical Estate Mansion", location: "Asokoro, Abuja", ngn: "₦1,200,000,000", usd: "$790,000", beds: 7, baths: 8, sqm: 920, tag: "For Sale" },
];

export const Listings = () => {
  return (
    <section id="listings" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Featured Properties</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Handpicked Listings</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Curated homes and investment properties across Nigeria's most prestigious neighbourhoods.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((p) => (
            <article
              key={p.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/40 hover:shadow-luxury transition-smooth"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  p.tag === "For Sale" ? "bg-gradient-gold text-primary" : "bg-primary text-primary-foreground"
                }`}>
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{p.location}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3 line-clamp-1">{p.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-2xl font-bold text-gradient-gold">{p.ngn}</span>
                  <span className="text-sm text-muted-foreground">≈ {p.usd}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 mb-5">
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-accent" /> {p.beds}</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-accent" /> {p.baths}</span>
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-accent" /> {p.sqm}m²</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-gradient-gold hover:text-primary transition-smooth">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, alt: "Silk press hairstyle", label: "Silk Press" },
  { src: g2, alt: "Knotless box braids", label: "Box Braids" },
  { src: g5, alt: "Bridal updo", label: "Bridal Glam" },
  { src: g3, alt: "Curly hair styling", label: "Natural Curls" },
  { src: g4, alt: "Luxury spa room", label: "Spa Sanctuary" },
  { src: g6, alt: "Burgundy hair color", label: "Color & Cut" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">Our Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Glow Gallery</h2>
          <p className="text-muted-foreground">A glimpse of the transformations happening daily at our Lagos studio.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                i === 0 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={it.src}
                alt={it.alt}
                width={768}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-primary-foreground font-serif text-xl">{it.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

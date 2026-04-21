import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-accent font-medium uppercase tracking-widest text-sm mb-3">Visit Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Make You Glow.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book your appointment via WhatsApp for the fastest response, or drop by our Lagos studio.
          </p>
          <ul className="space-y-5">
            <li className="flex gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium">Our Studio</p>
                <p className="text-muted-foreground">12 Admiralty Way, Lekki Phase 1, Lagos</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium">Call or WhatsApp</p>
                <p className="text-muted-foreground">+234 801 234 5678</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium">Opening Hours</p>
                <p className="text-muted-foreground">Mon – Sat: 9am – 8pm · Sun: 11am – 6pm</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Instagram className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium">Follow our work</p>
                <p className="text-muted-foreground">@glowhairandspa.lagos</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative p-10 md:p-12 rounded-3xl bg-card shadow-elegant border border-border text-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full text-sm font-medium shadow-gold">
            Fastest Booking
          </div>
          <h3 className="font-serif text-3xl font-bold mt-4 mb-3">Book on WhatsApp</h3>
          <p className="text-muted-foreground mb-8">
            Send us a message and one of our stylists will confirm your appointment within minutes.
          </p>
          <a
            href="https://wa.me/2348012345678?text=Hello%20Glow%20Hair%20%26%20Spa!%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium shadow-elegant hover:scale-105 transition-smooth"
          >
            Chat with us now
          </a>
          <p className="mt-6 text-xs text-muted-foreground">Walk-ins welcome · Group bookings available</p>
        </div>
      </div>
    </section>
  );
};

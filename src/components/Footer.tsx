import { Home, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["Buy", "Rent", "Sell", "Agents", "About", "Contact"];
const cities = ["Lagos", "Abuja", "Port Harcourt", "Ibadan"];
const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-deep text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary-foreground/10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-5">
              <span className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                <Home className="h-5 w-5 text-primary" />
              </span>
              <span className="font-serif text-xl font-bold">
                Prime<span className="text-gradient-gold">Nest</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              Nigeria's premier real estate company — connecting discerning buyers with exceptional properties since 2009.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gradient-gold hover:text-primary flex items-center justify-center transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-smooth">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-accent">Cities We Serve</h4>
            <ul className="space-y-3">
              {cities.map((c) => (
                <li key={c}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent text-sm transition-smooth">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-accent">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/75">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>14 Adeola Odeku Street, Victoria Island, Lagos</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+234 800 PRIME 01</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>hello@primenest.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} PrimeNest Realty Limited. All rights reserved.</p>
          <p>Made with care in Lagos, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
};

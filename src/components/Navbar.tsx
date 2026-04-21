import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

const links = [
  { label: "Buy", href: "#listings" },
  { label: "Rent", href: "#listings" },
  { label: "Sell", href: "#contact" },
  { label: "Agents", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-primary/85 border-b border-accent/20">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 text-primary-foreground">
          <span className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
            <Home className="h-5 w-5 text-primary" />
          </span>
          <span className="font-serif text-xl font-bold tracking-tight">
            Prime<span className="text-gradient-gold">Nest</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex bg-gradient-gold text-primary px-5 py-2.5 rounded-full text-sm font-semibold shadow-gold hover:scale-105 transition-smooth"
        >
          List Property
        </a>
        <button className="md:hidden p-2 text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-accent/20 bg-primary">
          <ul className="container mx-auto py-4 space-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-2 text-primary-foreground/85 hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-block mt-2 bg-gradient-gold text-primary px-5 py-2 rounded-full text-sm font-semibold">
                List Property
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

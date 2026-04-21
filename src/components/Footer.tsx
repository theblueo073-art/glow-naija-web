export const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-background/80">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-serif text-lg text-background">
          Glow <span className="text-gradient-gold">Hair & Spa</span> Lagos
        </p>
        <p>© {new Date().getFullYear()} Glow Hair & Spa. Made with love in Lagos.</p>
      </div>
    </footer>
  );
};

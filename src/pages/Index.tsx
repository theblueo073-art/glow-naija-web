import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Listings } from "@/components/Listings";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Listings />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

import { MessageCircle } from "lucide-react";

const PHONE = "2348000000001";
const MESSAGE = "Hello PrimeNest! I'd like to enquire about a property.";

export const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PrimeNest on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-4 shadow-luxury hover:scale-105 transition-smooth animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Chat with us</span>
    </a>
  );
};

import { MessageCircle } from "lucide-react";

const PHONE = "2348012345678"; // Update to real number
const MESSAGE = "Hello Glow Hair & Spa! I'd like to book an appointment.";

export const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-elegant transition-smooth hover:scale-105 hover:shadow-gold animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
    </a>
  );
};

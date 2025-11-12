import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        asChild
      >
        <a
          href={"https://wa.me/962797265521?text=" + encodeURIComponent("مرحبا المتكاملة لاعمال الايبوكسي")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        asChild
      >
        <a href="tel:+962797265521" aria-label="Call us">
          <Phone size={24} />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;

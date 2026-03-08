import { Phone } from "lucide-react";

const MobileStickyFooter = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border p-3 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <a
        href="tel:+16473953620"
        className="w-full flex items-center justify-center gap-2 gold-gradient font-body text-sm tracking-widest uppercase py-3 rounded text-primary-foreground font-semibold shadow-lg active:scale-[0.98] transition-transform"
      >
        <Phone size={18} /> Tap To Call Now
      </a>
    </div>
  );
};

export default MobileStickyFooter;

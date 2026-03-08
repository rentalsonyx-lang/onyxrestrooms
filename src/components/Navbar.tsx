import { useState } from "react";
import { Menu, X, Phone } from "lucide-react"; // Imported Phone icon

const links = [
  { label: "About", href: "#about" },
  { label: "Our Trailer", href: "#fleet" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Get a Quote", href: "#quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        
        {/* Empty left div to keep the center links perfectly balanced */}
        <div className="hidden md:block w-48"></div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center justify-center gap-12">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side - Clickable Phone Number (Desktop) */}
        <div className="hidden md:flex justify-end w-48">
          <a 
            href="tel:+16473953620" 
            className="flex items-center gap-2 font-body text-sm tracking-widest text-primary hover:text-primary/80 transition-colors"
          >
            <Phone size={16} /> 647-395-3620
          </a>
        </div>

        {/* Mobile Menu Button - Pushed to the right */}
        <div className="w-full flex justify-end md:hidden">
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          {/* Mobile Clickable Phone Number */}
          <a 
            href="tel:+16473953620" 
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary/10 font-body text-sm tracking-widest text-primary border-b border-border/50"
          >
            <Phone size={16} /> Tap to Call: 647-395-3620
          </a>
          
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-center px-6 py-4 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

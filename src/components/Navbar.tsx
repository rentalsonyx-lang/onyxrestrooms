import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/onyx-logo.png";

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
      {/* INCREASED HEADER BAR HEIGHT: h-20 on mobile, h-24 on desktop */}
      <div className="container mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        <a href="#" className="flex items-center">
          {/* INCREASED LOGO SIZE: h-14 on mobile, h-20 on desktop */}
          <img src={logo} alt="Onyx Restrooms" className="h-14 md:h-20" />
        </a>

        <div className="hidden md:flex items-center gap-8">
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

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left px-6 py-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
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

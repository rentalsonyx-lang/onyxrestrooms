These are excellent additions. A sticky mobile footer will absolutely drive more calls, and having the logo gracefully fade into the navigation bar as you scroll is a staple of premium web design.

To implement this, we are going to update two existing files and create two brand new files.

1. Update src/components/Navbar.tsx
Replace your existing code with this. I added a scroll listener (isScrolled) that watches how far down the page you are. Once you scroll past the main hero image, the logo will smoothly fade into the left side of the navigation bar.

TypeScript
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the logo after scrolling down 300px
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        
        {/* Left Side - Logo that fades in */}
        <div className="w-1/3 md:w-48 flex justify-start">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className={`flex items-center transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img src={logo} alt="Onyx Restrooms" className="h-10 md:h-12" />
          </button>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10 lg:gap-12">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
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

        {/* Mobile Menu Button */}
        <div className="flex justify-end w-1/3 md:hidden">
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
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

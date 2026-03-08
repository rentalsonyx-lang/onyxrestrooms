import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/onyx-logo.png";

const Footer = () => (
  <footer className="py-16 bg-secondary border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Onyx Restrooms" className="h-12 mb-4" />
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Premium luxury restroom trailer rentals for events that demand excellence.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
            Quick Links
          </h4>
          <div className="space-y-2">
            {["About", "Our Trailer", "Features", "Testimonials", "Get a Quote"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .getElementById(
                      link === "Our Trailer" ? "fleet" : link === "Get a Quote" ? "quote" : link.toLowerCase()
                    )
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
            Contact
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">647-395-3620</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">rentals.onyx@gmail.com</span>
            </div>
            <a
              href="https://instagram.com/onyx.restrooms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">@onyx.restrooms</span>
            </a>

            <a
              href="https://www.tiktok.com/@onyx.restrooms"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">@onyx.restrooms</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Onyx Restrooms. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

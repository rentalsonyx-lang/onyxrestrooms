import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-secondary border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-4">
            LUXE<span className="text-foreground">LOO</span>
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Premium luxury restroom trailer rentals for events that demand excellence.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
            Quick Links
          </h4>
          <div className="space-y-2">
            {["About", "Fleet", "Features", "Testimonials", "Get a Quote"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .getElementById(link.toLowerCase().replace("get a ", ""))
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
              <span className="font-body text-sm text-muted-foreground">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">info@luxeloo.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">Serving Nationwide</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} LuxeLoo. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

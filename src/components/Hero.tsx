import { motion } from "framer-motion";
import { Phone } from "lucide-react"; // Imported the Phone icon
import trailerImage from "@/assets/onyx-trailer.jpg";
import logo from "@/assets/onyx-logo.png";

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${trailerImage})` }}
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="Onyx Restrooms" 
            className="w-64 md:w-96 lg:w-[32rem] mb-10" 
          />

          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-12">
            Premium Mobile Restroom Experiences
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gold-text">Luxury</span>{" "}
            <span className="text-foreground">Restroom</span>
            <br />
            <span className="text-foreground">Trailer Rentals</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Elevate your event with Onyx Restrooms. Premium finishes,
            climate control, and five-star amenities — delivered to your venue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* NEW CLICKABLE PHONE BUTTON */}
          <a
            href="tel:+16473953620"
            className="flex items-center justify-center gap-3 gold-gradient font-body text-sm tracking-widest uppercase px-10 py-4 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone size={18} /> Call 647-395-3620
          </a>
          
          <button
            onClick={scrollToQuote}
            className="border border-primary/30 font-body text-sm tracking-widest uppercase px-10 py-4 text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            Request a Quote
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 gold-gradient opacity-50"
        />
      </div>
    </section>
  );
};

export default Hero;

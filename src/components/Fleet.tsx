import { motion } from "framer-motion";
import trailerImage from "@/assets/onyx-trailer.jpg";

const Fleet = () => (
  <section id="fleet" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Our Collection
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          The <span className="gold-text">Onyx Trailer</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-card border border-border group overflow-hidden">
          <div className="overflow-hidden h-80 md:h-[28rem]">
            <img
              src={trailerImage}
              alt="Onyx Restrooms luxury restroom trailer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-primary mb-3">
              The Onyx
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Our signature luxury restroom trailer, featuring sleek black exterior finishes, premium interior amenities, climate control, and designer lighting — perfect for weddings, corporate events, private parties, and festivals.
            </p>
            <div className="flex flex-wrap gap-6 border-t border-border pt-6">
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                ✦ Climate Controlled
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                ✦ Premium Finishes
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                ✦ Full Service
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-primary">
                ✦ Available Now
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Fleet;

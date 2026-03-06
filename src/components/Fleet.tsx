import { motion } from "framer-motion";
import exteriorImage from "@/assets/trailer-exterior.jpg";
import interiorImage from "@/assets/trailer-interior.jpg";
import heroImage from "@/assets/hero-trailer.jpg";

const trailers = [
  {
    name: "The Monarch",
    description: "Our flagship 8-station trailer with full marble interiors, perfect for weddings and galas of up to 300 guests.",
    capacity: "Up to 300 guests",
    stations: "8 stations",
    image: heroImage,
  },
  {
    name: "The Ambassador",
    description: "A versatile 4-station unit ideal for corporate events, festivals, and upscale outdoor gatherings.",
    capacity: "Up to 150 guests",
    stations: "4 stations",
    image: exteriorImage,
  },
  {
    name: "The Sovereign",
    description: "An intimate 2-station trailer with VIP-level finishes, perfect for smaller celebrations and private parties.",
    capacity: "Up to 75 guests",
    stations: "2 stations",
    image: interiorImage,
  },
];

const Fleet = () => (
  <section id="fleet" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Our Collection
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          The <span className="gold-text">Fleet</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {trailers.map((trailer, i) => (
          <motion.div
            key={trailer.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card border border-border group overflow-hidden"
          >
            <div className="overflow-hidden h-64">
              <img
                src={trailer.image}
                alt={`${trailer.name} luxury restroom trailer`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                {trailer.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {trailer.description}
              </p>
              <div className="flex justify-between border-t border-border pt-4">
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  {trailer.capacity}
                </span>
                <span className="font-body text-xs uppercase tracking-wider text-primary">
                  {trailer.stations}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Fleet;

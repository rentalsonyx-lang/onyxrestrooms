import { motion } from "framer-motion";
import trailerImage from "@/assets/onyx-trailer.jpg";

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden">
            <img
              src={trailerImage}
              alt="Onyx Restrooms luxury restroom trailer"
              className="w-full h-[500px] object-cover gold-glow"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Redefining <span className="gold-text">Portable</span> Luxury
          </h2>
          <div className="w-16 h-px gold-gradient mb-8" />
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            At Onyx Restrooms, we set out to transform the way people experience
            restroom facilities at events. Our luxury restroom trailer brings
            five-star comfort to any location — from elegant weddings and galas
            to corporate events and film sets.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Our trailer is meticulously maintained and features premium finishes
            including designer lighting, climate control, and high-end fixtures.
            Because your guests deserve nothing less.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: "500+", label: "Events Served" },
              { number: "5★", label: "Client Rating" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-primary">{stat.number}</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;

import { motion } from "framer-motion";
import { Droplets, Wind, Lightbulb, Music, Sparkles, Clock } from "lucide-react";

const features = [
  { icon: Droplets, title: "Running Water", desc: "Hot & cold running water with premium faucets and hands-free operation." },
  { icon: Wind, title: "Climate Control", desc: "Full HVAC systems ensure comfort in any weather condition." },
  { icon: Lightbulb, title: "Designer Lighting", desc: "Elegant ambient and vanity lighting throughout each unit." },
  { icon: Music, title: "Sound Systems", desc: "Built-in Bluetooth speakers for curated background ambiance." },
  { icon: Sparkles, title: "Premium Finishes", desc: "Marble counters, hardwood floors, and high-end fixtures throughout." },
  { icon: Clock, title: "Full-Service", desc: "Delivery, setup, attendant service, and removal — all included." },
];

const Features = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Why Choose Us
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Unmatched <span className="gold-text">Amenities</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-border p-8 hover:border-primary/40 transition-colors group"
          >
            <f.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

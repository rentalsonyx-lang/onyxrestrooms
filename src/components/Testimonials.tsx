import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James W.",
    event: "Wedding · Napa Valley",
    text: "Our guests could not stop talking about the restroom trailers. They were more beautiful than most indoor bathrooms. Absolutely worth every penny.",
  },
  {
    name: "Michael R.",
    event: "Corporate Gala · Downtown LA",
    text: "Professional, punctual, and the trailers were immaculate. Our clients were incredibly impressed. We've booked them for every event since.",
  },
  {
    name: "Diana K.",
    event: "Festival · Austin, TX",
    text: "Game changer for our annual festival. The climate control alone made a huge difference. The team handled everything seamlessly from start to finish.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Client Experiences
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          What They <span className="gold-text">Say</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="border border-border p-8 bg-card"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

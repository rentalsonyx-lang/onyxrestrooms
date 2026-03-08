import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you require water and power hookups?",
    answer: "Our trailers require a standard 110V dedicated 20-amp power outlet and a standard garden hose connection for water. If your location does not have access to these, we can provide a quiet generator and a fresh water holding tank for an additional fee.",
  },
  {
    question: "Where can the trailer be placed at my event?",
    answer: "The trailer must be placed on flat, level ground. It can be parked on grass, gravel, dirt, or pavement. We need clear access for our delivery truck to maneuver the trailer into place.",
  },
  {
    question: "Are supplies included with the rental?",
    answer: "Yes! Every rental comes fully stocked with premium toilet paper, high-quality paper towels, luxury hand soap, and interior waste baskets.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking as soon as you have your event date secured, especially for peak wedding season (May through October) as weekends book up very quickly.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto opacity-50" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-none overflow-hidden bg-secondary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-display font-medium text-lg text-foreground">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 font-body text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

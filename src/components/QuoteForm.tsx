import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    message: "",
  });
  const [dates, setDates] = useState<Date[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dates.length === 0) {
      toast.error("Please select at least one event date.");
      return;
    }
    toast.success("Thank you! We'll be in touch within 24 hours.", {
      description: "Your quote request has been received.",
    });
    setForm({ name: "", email: "", phone: "", eventType: "", guestCount: "", message: "" });
    setDates([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-input border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="quote" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
                Book Your Experience
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Request a <span className="gold-text">Quote</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        inputClass,
                        "flex items-center justify-between text-left",
                        dates.length === 0 && "text-muted-foreground"
                      )}
                    >
                      <span className="truncate">
                        {dates.length === 0
                          ? "Event Date(s) *"
                          : dates.length === 1
                          ? format(dates[0], "MMM d, yyyy")
                          : `${dates.length} days selected`}
                      </span>
                      <CalendarIcon className="w-4 h-4 shrink-0 ml-2 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="multiple"
                      selected={dates}
                      onSelect={(days) => setDates(days || [])}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Event Type *</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="festival">Festival</option>
                  <option value="private">Private Party</option>
                  <option value="construction">Construction Site</option>
                  <option value="film">Film / Production Set</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="number"
                  name="guestCount"
                  placeholder="Estimated Guest Count *"
                  required
                  value={form.guestCount}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your event..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
              <button
                type="submit"
                className="w-full gold-gradient font-body text-sm tracking-widest uppercase px-10 py-4 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Quote Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

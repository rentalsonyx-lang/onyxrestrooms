import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import emailjs from '@emailjs/browser'; 

const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    message: "",
  });
  
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateRange?.from) {
      toast.error("Please select an event date.");
      return;
    }

    setIsSubmitting(true);

    const formattedDates = dateRange.to
      ? `${format(dateRange.from, "MMM d, yyyy")} - ${format(dateRange.to, "MMM d, yyyy")}`
      : format(dateRange.from, "MMM d, yyyy");

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      eventType: form.eventType,
      guestCount: form.guestCount,
      message: form.message,
      date_range: formattedDates,
    };

    emailjs.send(
      'service_fma1vts',   // Your Service ID
      'template_a2152rm',  // Your Template ID
      templateParams,
      '5a54xRpOdKy5x-0GD'  // Your Public Key
    )
    .then(() => {
      toast.success("Thank you! We'll be in touch within 24 hours.", {
        description: "Your quote request has been received.",
      });
      setForm({ name: "", email: "", phone: "", eventType: "", guestCount: "", message: "" });
      setDateRange(undefined);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error("Something went wrong. Please try again or call us directly at 647-395-3620.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full bg-input border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="quote" className="py-24 bg-background relative">
      <style dangerouslySetInnerHTML={{__html: `
        .custom-today {
          position: relative;
          color: hsl(var(--primary)) !important;
          font-weight: 700;
          border: 1px solid hsl(var(--primary)) !important;
        }
        .custom-today::after {
          content: "Today";
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.45rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}} />

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
                        !dateRange?.from && "text-muted-foreground"
                      )}
                    >
                      <span className="truncate">
                        {!dateRange?.from ? (
                          "Event Date(s) *"
                        ) : dateRange.to ? (
                          <>
                            {format(dateRange.from, "MMM d, yyyy")} - {format(dateRange.to, "MMM d, yyyy")}
                          </>
                        ) : (
                          format(dateRange.from, "MMM d, yyyy")
                        )}
                      </span>
                      <CalendarIcon className="w-4 h-4 shrink-0 ml-2 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                      numberOfMonths={1}
                      className={cn("p-3 pointer-events-auto")}
                      classNames={{
                        day_range_start: "aria-selected:bg-primary aria-selected:text-primary-foreground",
                        day_range_end: "aria-selected:bg-primary aria-selected:text-primary-foreground",
                        day_range_middle: "aria-selected:bg-primary/20 aria-selected:text-foreground",
                        day_today: "custom-today bg-background",
                      }}
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
                  min="1"
                  value={form.guestCount}
                  onChange={(e) => {
                    if (Number(e.target.value) < 1 && e.target.value !== "") return;
                    handleChange(e);
                  }}
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
                disabled={isSubmitting}
                className="w-full gold-gradient font-body text-sm tracking-widest uppercase px-10 py-4 text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Quote Request"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

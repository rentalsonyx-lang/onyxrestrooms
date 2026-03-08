import { Star } from "lucide-react";

// Swap these out with your actual 5-star Google reviews!
const reviews = [
  { 
    name: "Arman G.", 
    text: "Amazing! Had the best tatti here after some taco bell.", 
    date: "yesterday" 
  },
  { 
    name: "Shaan G.", 
    text: "By far the best experience I could ask for, I couldn't imagine gooning in any other washroom, Onyx Restrooms is THE WAY", 
    date: "1 month ago" 
  },
  { 
    name: "Eikum G", 
    text: "Worth every penny. I blacked out at my cousins wedding and the only thing I remember was pissing all the alcohol out in this luxurious bathroom", 
    date: "3 months ago" 
  },
  { 
    name: "Sanjot T.", 
    text: "Little too expensive, wish it was under $500 for 4 days but it is what it is", 
    date: "4 months ago" 
  },
  { 
    name: "Kiranpal G (the goat)", 
    text: "Hanji babeyo, theres no restroom like Onyx, 5 Stars", 
    date: "5 months ago" 
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto opacity-50 mb-6" />
        
        {/* Overall Rating Display */}
        <div className="flex items-center justify-center gap-3">
          <span className="font-body font-semibold text-2xl text-foreground">5.0</span>
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
          <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">
            Google Reviews
          </span>
        </div>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        
        {/* Fade Out Edges for a premium look */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        {/* The Track (Pauses on hover) */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          
          {/* We map the reviews twice to create the seamless infinite loop effect */}
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 bg-background p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed min-h-[100px]">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-border pt-4">
                <div>
                  <span className="block font-display font-semibold text-foreground">
                    {review.name}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                {/* Custom G to mimic Google */}
                <span className="font-display font-bold text-xl text-primary opacity-50">
                  G
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS to handle the infinite smooth scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;

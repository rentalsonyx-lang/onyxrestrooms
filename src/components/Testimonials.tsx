import { Star } from "lucide-react";

// The official Google G Logo as an SVG
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.85-2.22.83-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  { 
    name: "Arman G.", 
    text: "Amazing! Had the best tatti here after some taco bell.", 
    date: "Last Night",
    color: "bg-blue-500"
  },
  { 
    name: "Shaan G.", 
    text: "By far the best experience I could ask for, I couldn't imagine gooning in any other washroom, Onyx Restrooms is THE WAY", 
    date: "1 month ago",
    color: "bg-green-600"
  },
  { 
    name: "Eikum G.", 
    text: "Worth every penny. I blacked out at my cousins wedding and the only thing I remember was pissing all the alcohol out in this luxurious bathroom", 
    date: "3 months ago",
    color: "bg-purple-500"
  },
  { 
    name: "Sanjot T.", 
    text: "Little too expensive, wish it was under $500 for 4 days but it is what it is", 
    date: "4 months ago",
    color: "bg-orange-500"
  },
  { 
    name: "Kiranpal G (the goat)", 
    text: "Hanji babeyo, theres no restroom like Onyx, 5 Stars", 
    date: "5 months ago",
    color: "bg-teal-500"
  },
  { 
    name: "Gagan S.", 
    text: "Unreal setup. We had a backyard party and this trailer was literally nicer than the actual house's washroom.", 
    date: "6 months ago",
    color: "bg-red-500"
  },
  { 
    name: "Simran K.", 
    text: "So clean and aesthetic! Perfect for my mehndi night. Everyone was taking mirror selfies in there all night long.", 
    date: "7 months ago",
    color: "bg-pink-500"
  },
  { 
    name: "Harkirat B.", 
    text: "Top tier service. They pulled up, set it up perfectly, and the AC was blasting. 10/10.", 
    date: "8 months ago",
    color: "bg-indigo-500"
  },
  { 
    name: "Manpreet D.", 
    text: "Bro the interior is crazy. Felt like I was in a 5 star hotel. Highly recommend Onyx.", 
    date: "10 months ago",
    color: "bg-cyan-600"
  },
  { 
    name: "Sunny M.", 
    text: "Absolute game changer for outdoor events. No more stinky porta potties. Best decision we made for the reception.", 
    date: "1 year ago",
    color: "bg-yellow-500"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Client Reviews
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto opacity-50 mb-8" />
        
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-body font-semibold text-3xl text-foreground">5.0</span>
            <div className="flex text-[#FBBC04]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" stroke="none" />
              ))}
            </div>
          </div>
          
          <a 
            href="https://www.google.com/search?q=Onyx+Restrooms&rlz=1C5CHFA_enCA1073CA1073&oq=onyx+restrooms&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGKIEGIkFMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgcIBBAAGO8FMgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEIMjEwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <GoogleLogo />
            <span className="font-body text-sm font-medium text-black">
              Read all reviews on Google
            </span>
          </a>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden group py-4">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        {/* The Track (Pauses on hover) */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="w-[320px] md:w-[380px] flex-shrink-0 mx-4 bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-lg ${review.color}`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    {/* CHANGED: font-display to font-body, and font-medium to font-bold */}
                    <div className="font-body font-bold text-sm text-black leading-tight">
                      {review.name}
                    </div>
                    <div className="font-body text-xs text-gray-500 mt-0.5">
                      {review.date}
                    </div>
                  </div>
                </div>
                <GoogleLogo />
              </div>
              
              <div className="flex text-[#FBBC04] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              
              <p className="font-body text-sm text-black leading-relaxed flex-grow">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Adjusted the animation timing to 60s since the track is much longer now */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;

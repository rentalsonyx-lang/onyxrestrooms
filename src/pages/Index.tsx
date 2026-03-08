import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ"; // Added FAQ
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import MobileStickyFooter from "@/components/MobileStickyFooter"; // Added Mobile Footer

const Index = () => (
  // Added padding bottom on mobile so the sticky footer doesn't cover content
  <div className="pb-20 md:pb-0"> 
    <Navbar />
    <Hero />
    <About />
    <Fleet />
    <Features />
    <FAQ />
    <Testimonials />
    <QuoteForm />
    <Footer />
    <MobileStickyFooter />
  </div>
);

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import QuoteForm from "@/components/QuoteForm"; // Moved up!
import Testimonials from "@/components/Testimonials"; // Moved below form
import FAQ from "@/components/FAQ"; // Moved below form
import Footer from "@/components/Footer";
import MobileStickyFooter from "@/components/MobileStickyFooter";

const Index = () => (
  <div className="pb-20 md:pb-0"> 
    <Navbar />
    <Hero />
    <About />
    <Fleet />
    <Features />
    
    {/* The Ask: Right after they see how nice the trailer is */}
    <QuoteForm /> 
    
    {/* The Social Proof & Reassurance: For people who kept scrolling */}
    <Testimonials />
    <FAQ />
    
    <Footer />
    <MobileStickyFooter />
  </div>
);

export default Index;

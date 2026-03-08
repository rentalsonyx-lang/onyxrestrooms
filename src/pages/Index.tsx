import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyFooter from "@/components/MobileStickyFooter";

const Index = () => (
  <div className="pb-20 md:pb-0"> 
    <Navbar />
    <Hero />
    <About />
    <Fleet />
    <Features />
    <QuoteForm /> 
    <Testimonials />
    <FAQ />
    <Footer />
    <MobileStickyFooter />
  </div>
);

export default Index;

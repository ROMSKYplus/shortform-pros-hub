import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import PricingCalculator from "@/components/PricingCalculator";
import ProcessTimeline from "@/components/ProcessTimeline";
import ResultsDashboard from "@/components/ResultsDashboard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import BookingCalendar from "@/components/BookingCalendar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <ResultsDashboard />
        <About />
        <ProcessTimeline />
        <PricingCalculator />
        <BookingCalendar />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Video editing workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Available for New Projects</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="heading-gradient">Transforming Ideas</span>
            <br />
            <span className="text-foreground">Into Viral Content</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Video Editor & Creator specializing in high-converting short-form content for 
            <span className="text-primary font-semibold"> TikTok, Instagram Reels & YouTube Shorts</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-hero text-lg px-8 py-4 group"
              onClick={scrollToPortfolio}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/30 hover:border-primary text-lg px-8 py-4 bg-background/50 backdrop-blur-sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Create Together
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500M+</div>
              <div className="text-sm text-muted-foreground">Total Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24hrs</div>
              <div className="text-sm text-muted-foreground">Average Turnaround</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-primary animate-bounce cursor-pointer" onClick={scrollToPortfolio} />
      </div>
    </section>
  );
};

export default Hero;
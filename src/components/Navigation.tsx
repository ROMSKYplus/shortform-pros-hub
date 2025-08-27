import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Play, ChevronDown, Briefcase, BookOpen, Download, MessageCircle, Calendar } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services", id: "services" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "About", href: "#about", id: "about" }
  ];

  const resourceItems = [
    { label: "Blog & Case Studies", id: "blog", icon: BookOpen },
    { label: "Download Center", id: "downloads", icon: Download },
    { label: "FAQ", id: "faq", icon: MessageCircle },
    { label: "Process Timeline", id: "process", icon: Briefcase }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Map section IDs to actual element IDs  
      const sectionMap: { [key: string]: string } = {
        services: "services",
        portfolio: "portfolio", 
        about: "about",
        blog: "blog-case-studies",
        downloads: "download-center",
        faq: "faq",
        process: "process-timeline",
        contact: "contact",
        booking: "booking-calendar"
      };
      
      const elementId = sectionMap[sectionId] || sectionId;
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">VideoCreator</div>
              <div className="text-xs text-muted-foreground">Short-Form Specialist</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
              >
                {item.label}
              </button>
            ))}
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200">
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border shadow-xl min-w-[220px]">
                {resourceItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                    >
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/30 hover:border-primary text-sm"
              onClick={() => scrollToSection("booking")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Call
            </Button>
            <Button 
              size="sm"
              className="btn-hero text-sm"
              onClick={() => scrollToSection("contact")}
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-xl">
            <div className="px-4 py-6 space-y-1">
              {/* Main Navigation */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Resources Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Resources</div>
                {resourceItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 w-full text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      <IconComponent className="w-4 h-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
              
              {/* CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-primary/30 hover:border-primary"
                  onClick={() => scrollToSection("booking")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Call
                </Button>
                <Button 
                  className="w-full btn-hero"
                  onClick={() => scrollToSection("contact")}
                >
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
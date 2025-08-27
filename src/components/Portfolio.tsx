import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Filter } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Viral TikTok Campaign",
      category: "tiktok",
      service: "Full Production",
      image: portfolio1,
      description: "Created a series of engaging TikTok videos that generated 2M+ views and 150K engagements for a lifestyle brand.",
      metrics: "2M+ Views • 150K Engagements • 300% ROI"
    },
    {
      id: 2,
      title: "Instagram Reels Series",
      category: "reels",
      service: "Video Editing",
      image: portfolio2,
      description: "Transformed product demos into engaging Reels format, resulting in 40% increase in product inquiries.",
      metrics: "500K+ Views • 40% Lead Increase • 25K Saves"
    },
    {
      id: 3,
      title: "YouTube Shorts Educational",
      category: "shorts",
      service: "Scriptwriting + Editing",
      image: portfolio3,
      description: "Educational content series that simplified complex topics, achieving 95% completion rate and 50K subscribers.",
      metrics: "1M+ Views • 95% Completion • 50K New Subs"
    },
    {
      id: 4,
      title: "Brand Promotional Campaign",
      category: "reels",
      service: "Full Production",
      image: portfolio4,
      description: "Complete campaign development from concept to execution for B2B software company's product launch.",
      metrics: "800K+ Views • 200% CTR Increase • 75 MQLs"
    },
    {
      id: 5,
      title: "Entertainment Series",
      category: "tiktok",
      service: "Video Editing",
      image: portfolio5,
      description: "High-energy entertainment content with motion graphics and sound design that went viral across multiple platforms.",
      metrics: "3M+ Views • 500K Shares • Top 1% Content"
    },
    {
      id: 6,
      title: "Fitness Motivation Content",
      category: "shorts",
      service: "Full Production",
      image: portfolio6,
      description: "Motivational fitness content with dynamic editing and inspiring messaging that built a community of 100K+ followers.",
      metrics: "1.5M+ Views • 100K Followers • 85% Engagement"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "tiktok", label: "TikTok", count: projects.filter(p => p.category === "tiktok").length },
    { id: "reels", label: "Instagram Reels", count: projects.filter(p => p.category === "reels").length },
    { id: "shorts", label: "YouTube Shorts", count: projects.filter(p => p.category === "shorts").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Portfolio</span>
            <span className="text-foreground"> & Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how strategic video editing and content creation have driven real results 
            for brands across different platforms and industries.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg" 
                    : "border-primary/30 hover:border-primary hover:bg-primary/5"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item group">
              {/* Project Image */}
              <div className="aspect-[9/16] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="portfolio-overlay">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary mb-3">
                      {project.service}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="text-xs text-primary font-medium">{project.metrics}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see similar results for your brand?
          </p>
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
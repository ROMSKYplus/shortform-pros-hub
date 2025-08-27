import { Video, PenTool, Mic, Zap, Clock, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Fast-paced, engaging edits with quick cuts, sound design, color grading, and dynamic transitions optimized for maximum retention.",
      features: ["Motion Graphics", "Color Grading", "Sound Design", "Text Overlays", "Platform Optimization"]
    },
    {
      icon: PenTool,
      title: "Scriptwriting",
      description: "Compelling narratives and scripts tailored for short-form content with strong hooks and storytelling to maximize watch time.",
      features: ["Hook Development", "Storytelling Structure", "Call-to-Action Copy", "Platform-Specific Scripts", "Engagement Optimization"]
    },
    {
      icon: Mic,
      title: "Voice-Over",
      description: "High-quality voice-over recording and production, perfectly synced with on-screen text and visuals for clear messaging.",
      features: ["Professional Recording", "Multiple Voice Styles", "Sync with Visuals", "Audio Enhancement", "Script Reading"]
    },
    {
      icon: Zap,
      title: "Full Video Production",
      description: "Complete 'done-for-you' solution combining scripting, filming, editing, and delivery. From concept to viral content.",
      features: ["Concept Development", "Content Strategy", "Complete Production", "Brand Alignment", "Performance Analytics"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Services That Drive</span>
            <br />
            <span className="text-foreground">Engagement & Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to viral success, I offer comprehensive video solutions 
            tailored for short-form content that converts viewers into customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">24hr Turnaround</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Platform Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
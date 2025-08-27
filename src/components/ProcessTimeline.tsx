import { CheckCircle, Clock, MessageSquare, Play, Sparkles, Rocket } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      duration: "Day 1",
      icon: MessageSquare,
      description: "We start with a detailed consultation to understand your brand, goals, target audience, and content requirements.",
      deliverables: ["Project brief", "Content strategy", "Timeline & milestones"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Content Planning",
      duration: "Day 1-2",
      icon: Sparkles,
      description: "I develop the creative concept, write scripts, plan visual elements, and create a detailed storyboard for approval.",
      deliverables: ["Script & storyboard", "Visual concept", "Music & style guide"],
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Production & Editing",
      duration: "Day 2-3",
      icon: Play,
      description: "I bring your content to life with professional editing, motion graphics, sound design, and all visual elements.",
      deliverables: ["First draft video", "Motion graphics", "Sound design"],
      color: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      title: "Review & Refinement",
      duration: "Day 3-4",
      icon: Clock,
      description: "You review the content and provide feedback. I make revisions to ensure it perfectly matches your vision and goals.",
      deliverables: ["Revision rounds", "Feedback integration", "Quality assurance"],
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "05",
      title: "Final Delivery",
      duration: "Day 4-5",
      icon: Rocket,
      description: "Final video delivered in all required formats, optimized for each platform with posting guidelines and strategy tips.",
      deliverables: ["Multi-format files", "Posting guidelines", "Performance tips"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    { icon: Clock, title: "Fast Turnaround", desc: "Average 2-3 day delivery" },
    { icon: MessageSquare, title: "Clear Communication", desc: "Regular updates throughout" },
    { icon: CheckCircle, title: "Quality Guaranteed", desc: "Unlimited revisions until perfect" },
    { icon: Sparkles, title: "Platform Optimized", desc: "Formatted for maximum performance" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">My Proven</span>
            <br />
            <span className="heading-gradient">5-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined workflow designed to deliver exceptional results efficiently. 
            From initial concept to viral content, here's exactly how we'll work together.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Step Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <div className="text-sm text-primary font-medium">{step.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-foreground">Key Deliverables:</h4>
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Why This Process Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's kick off your content creation journey with a free consultation. 
            I'll walk you through the process and create a custom strategy for your goals.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-hero"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
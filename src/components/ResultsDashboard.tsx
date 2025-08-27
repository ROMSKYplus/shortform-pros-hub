import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Eye, Heart, Share2, DollarSign, Users, Play, ArrowUpRight, ArrowDownRight } from "lucide-react";

const ResultsDashboard = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 0,
      client: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Low engagement on product demos",
      solution: "Transformed static product demos into dynamic, story-driven content with strong hooks and clear value props",
      timeframe: "3 months",
      before: {
        views: "2.5K",
        engagement: "1.2%",
        conversions: "0.3%",
        followers: "850"
      },
      after: {
        views: "125K",
        engagement: "8.7%",
        conversions: "4.2%",
        followers: "12.4K"
      },
      highlights: [
        "5000% increase in video views",
        "725% boost in engagement rate", 
        "1400% improvement in conversion rate",
        "Generated 150+ qualified leads"
      ],
      testimonial: "Our video engagement skyrocketed! The content created directly led to a 40% increase in demo bookings."
    },
    {
      id: 1,
      client: "FitnessHub",
      industry: "Fitness & Wellness",
      challenge: "Content wasn't reaching fitness enthusiasts effectively",
      solution: "Created high-energy workout teasers and transformation stories with trending audio and motivational messaging",
      timeframe: "2 months", 
      before: {
        views: "8.2K",
        engagement: "2.1%",
        conversions: "0.8%",
        followers: "3.2K"
      },
      after: {
        views: "890K",
        engagement: "12.5%",
        conversions: "6.3%",
        followers: "45.8K"
      },
      highlights: [
        "10,750% increase in video views",
        "595% boost in engagement rate",
        "788% improvement in conversion rate", 
        "1,331% growth in followers"
      ],
      testimonial: "My content consistently hits 100K+ views now. The transformation has been incredible for my business."
    },
    {
      id: 2,
      client: "EcoStyle Co.",
      industry: "Sustainable Fashion",
      challenge: "Difficulty showcasing product benefits in short-form content",
      solution: "Developed product showcase format highlighting sustainability benefits with aesthetic visuals and compelling narratives",
      timeframe: "4 months",
      before: {
        views: "5.1K", 
        engagement: "1.8%",
        conversions: "1.1%",
        followers: "2.1K"
      },
      after: {
        views: "456K",
        engagement: "9.4%",
        conversions: "7.8%",
        followers: "28.3K"
      },
      highlights: [
        "8,900% increase in video views",
        "522% boost in engagement rate",
        "709% improvement in conversion rate",
        "200% increase in online sales"
      ],
      testimonial: "The videos perfectly captured our brand values and drove significant sales growth. ROI was incredible."
    }
  ];

  const currentCase = caseStudies[activeCase];

  const calculateGrowth = (before: string, after: string) => {
    const beforeNum = parseFloat(before.replace(/[K%]/g, '')) * (before.includes('K') ? 1000 : 1);
    const afterNum = parseFloat(after.replace(/[K%]/g, '')) * (after.includes('K') ? 1000 : 1);
    return Math.round(((afterNum - beforeNum) / beforeNum) * 100);
  };

  const formatNumber = (value: string) => {
    const num = parseFloat(value.replace(/[K%]/g, ''));
    const isK = value.includes('K');
    const isPercent = value.includes('%');
    
    if (isK) {
      return `${num}K`;
    } else if (isPercent) {
      return `${num}%`;
    }
    return num.toString();
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/10 via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Real Results</span>
            <br />
            <span className="text-foreground">From Real Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the measurable impact of strategic video content creation. These aren't just views—these are business results that matter.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <Button
              key={index}
              variant={activeCase === index ? "default" : "outline"}
              onClick={() => setActiveCase(index)}
              className={`transition-all ${
                activeCase === index 
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg" 
                  : "border-primary/30 hover:border-primary hover:bg-primary/5"
              }`}
            >
              {study.client}
            </Button>
          ))}
        </div>

        {/* Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Challenge & Solution */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{currentCase.client}</h3>
                <p className="text-sm text-muted-foreground">{currentCase.industry} • {currentCase.timeframe}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-500 mb-2">The Challenge</h4>
                <p className="text-muted-foreground">{currentCase.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-500 mb-2">The Solution</h4>
                <p className="text-muted-foreground">{currentCase.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentCase.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Client Testimonial */}
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                "{currentCase.testimonial}"
              </blockquote>
              <div className="font-semibold">{currentCase.client}</div>
              <div className="text-sm text-muted-foreground">{currentCase.industry}</div>
            </div>
          </Card>
        </div>

        {/* Before/After Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { key: "views", label: "Video Views", icon: Eye },
            { key: "engagement", label: "Engagement Rate", icon: Heart },
            { key: "conversions", label: "Conversion Rate", icon: DollarSign },
            { key: "followers", label: "Followers", icon: Users }
          ].map((metric) => {
            const beforeValue = currentCase.before[metric.key as keyof typeof currentCase.before];
            const afterValue = currentCase.after[metric.key as keyof typeof currentCase.after];
            const growth = calculateGrowth(beforeValue, afterValue);
            
            return (
              <Card key={metric.key} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="font-medium text-sm mb-4">{metric.label}</h4>
                
                {/* Before */}
                <div className="mb-3">
                  <div className="text-xs text-muted-foreground mb-1">Before</div>
                  <div className="text-lg font-semibold text-red-500">{formatNumber(beforeValue)}</div>
                </div>
                
                {/* Growth Indicator */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  <ArrowUpRight className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-green-500">+{growth}%</span>
                </div>
                
                {/* After */}
                <div>
                  <div className="text-xs text-muted-foreground mb-1">After</div>
                  <div className="text-2xl font-bold text-green-500">{formatNumber(afterValue)}</div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Portfolio Performance Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500M+</div>
              <div className="text-sm text-muted-foreground">Total Views Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">850%</div>
              <div className="text-sm text-muted-foreground">Average Engagement Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average ROI Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to See Similar Results?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            These results speak for themselves. Let's create a custom strategy to achieve similar growth for your brand.
          </p>
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Clock, DollarSign, Video, FileText, Headphones } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "What makes your video editing different from others?",
          a: "I specialize exclusively in short-form content optimized for social media algorithms. Every edit is designed with platform-specific best practices, engagement psychology, and conversion optimization in mind. I don't just edit videos—I create viral content that drives real business results."
        },
        {
          q: "Which platforms do you create content for?",
          a: "I specialize in TikTok, Instagram Reels, YouTube Shorts, Facebook Reels, and LinkedIn video content. Each platform has unique requirements for optimal performance, and I tailor every video accordingly with proper aspect ratios, timing, and engagement techniques."
        },
        {
          q: "Do you work with businesses of all sizes?",
          a: "Yes! I work with everyone from individual content creators and small businesses to Fortune 500 companies. My pricing is scalable, and I offer packages suitable for any budget while maintaining the same high-quality standards."
        }
      ]
    },
    {
      title: "Pricing & Packages",
      icon: DollarSign,
      questions: [
        {
          q: "How much do your services cost?",
          a: "Pricing varies based on the services needed. Video editing starts at $150, scriptwriting at $75, voice-over at $100, and full production at $300. Use the pricing calculator above for an instant quote based on your specific needs. I also offer package discounts for multiple videos."
        },
        {
          q: "Do you offer package deals or bulk discounts?",
          a: "Absolutely! I offer 10% off for 3+ videos and 15% off for 5+ videos. I also have monthly retainer packages for ongoing content needs, which provide the best value and priority scheduling. Contact me to discuss custom packages for your specific requirements."
        },
        {
          q: "What's included in the 'Full Production' service?",
          a: "Full Production includes everything: concept development, scriptwriting, storyboarding, video editing, motion graphics, sound design, voice-over (if needed), and final delivery in all required formats. It's a complete done-for-you solution from idea to viral content."
        }
      ]
    },
    {
      title: "Process & Timeline",
      icon: Clock,
      questions: [
        {
          q: "What's your typical turnaround time?",
          a: "Standard delivery is 2-3 business days for most projects. I also offer rush delivery (24 hours) for urgent projects at a 50% premium, and economy delivery (5-7 days) at a 20% discount. Timeline depends on project complexity and current workload."
        },
        {
          q: "How many revisions are included?",
          a: "All projects include 2 rounds of revisions to ensure you're completely satisfied. Additional revisions are available if needed. I work closely with clients during the process to minimize revisions by understanding requirements upfront."
        },
        {
          q: "What's your process for working together?",
          a: "1) Discovery call to understand your goals 2) I create a detailed brief and timeline 3) You provide materials (footage, brand assets, etc.) 4) I create the first draft 5) Review and revisions 6) Final delivery in all required formats. Communication throughout via email/Slack."
        }
      ]
    },
    {
      title: "Technical Requirements",
      icon: Video,
      questions: [
        {
          q: "What file formats do you deliver?",
          a: "I deliver in all major formats optimized for each platform: MP4 (H.264) for most platforms, MOV for high quality, and specific aspect ratios (9:16 for TikTok/Reels, 1:1 for Instagram feed, 16:9 for YouTube). All files come with optimized compression for fast loading and high quality."
        },
        {
          q: "What footage/materials do I need to provide?",
          a: "For editing projects, provide raw footage, brand assets (logos, colors, fonts), any specific music preferences, and a brief outlining your goals. For full production, I can source stock footage, create graphics, and handle everything. I'll provide a detailed requirements list after our initial consultation."
        },
        {
          q: "Do you create motion graphics and animations?",
          a: "Yes! I specialize in creating engaging motion graphics, animated text overlays, transitions, and visual effects that are trending on social media. This includes kinetic typography, logo animations, data visualizations, and custom graphics that make your content stand out."
        }
      ]
    },
    {
      title: "Content Strategy",
      icon: FileText,
      questions: [
        {
          q: "Do you help with content strategy and planning?",
          a: "Absolutely! I provide strategic guidance on content themes, posting schedules, trending topics, and platform-specific optimization. Many clients work with me on monthly content calendars where I help plan and create cohesive content series that build audience and drive results."
        },
        {
          q: "Can you help make my content go viral?",
          a: "While I can't guarantee virality, I use proven techniques that significantly increase your chances: hook optimization, trending sounds, platform algorithms understanding, optimal posting times, and engagement-driving techniques. My content has generated over 500M views using these strategies."
        },
        {
          q: "Do you provide performance analytics and insights?",
          a: "Yes, I provide detailed reports on how your content performs and recommendations for improvement. I track key metrics like view rates, engagement, completion rates, and conversion metrics. This data informs future content strategy for continuously improving results."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked</span>
            <br />
            <span className="heading-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about working together, pricing, process, and creating content that converts.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card border border-border rounded-xl p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Questions */}
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-8">
          <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? I'm here to help! Schedule a free 15-minute consultation 
            to discuss your project and get all your questions answered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-hero"
            >
              Schedule Free Consultation
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-primary/30 hover:border-primary text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
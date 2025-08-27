import { Star, Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: client1,
      rating: 5,
      text: "Working with this video editor was a game-changer for our social media strategy. Our TikTok engagement increased by 300% and we saw a direct 40% boost in product inquiries. The turnaround time was incredible - 24 hours as promised!",
      highlight: "300% engagement increase"
    },
    {
      name: "Marcus Chen",
      role: "Content Creator",
      company: "FitnessHub",
      image: client2,
      rating: 5,
      text: "I've worked with many editors, but none understand short-form content like this. The way they craft hooks and maintain engagement throughout the entire video is phenomenal. My content now consistently hits 1M+ views.",
      highlight: "Consistently 1M+ views"
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "EcoStyle Co.",
      image: client3,
      rating: 5,
      text: "From concept to final delivery, the full production service exceeded our expectations. They delivered our campaign ahead of schedule and the results speak for themselves - 200% increase in click-through rates and 75 new qualified leads.",
      highlight: "200% CTR increase"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What Clients Say About</span>
            <br />
            <span className="heading-gradient">Working With Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what brands and creators have experienced 
            after working together on their short-form content strategy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card group">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </blockquote>
              
              {/* Highlight Metric */}
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                🎯 {testimonial.highlight}
              </div>
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-card border border-border rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Repeat Clients</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">24hrs</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
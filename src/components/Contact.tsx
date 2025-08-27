import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MessageCircle, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      handle: "@videoeditor"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      handle: "@contentcreator"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      handle: "@videoexpert"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Ready to Create</span>
            <br />
            <span className="text-foreground">Something Amazing?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and create content that drives real results. 
            Get in touch and let's turn your vision into viral success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-7 h-7 text-primary" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-7 h-7 text-primary" />
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Response Time</h4>
                  <p className="text-muted-foreground">
                    I typically respond within <span className="text-primary font-semibold">24 hours</span> and 
                    provide detailed project proposals within 48 hours.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Project Timeline</h4>
                  <p className="text-muted-foreground">
                    Most short-form content projects are delivered within 
                    <span className="text-primary font-semibold"> 24-72 hours</span>, depending on complexity.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9 AM - 7 PM EST<br />
                    Weekend availability for urgent projects
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Follow My Work</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4 text-primary">Ready to Get Started?</h4>
              <p className="text-muted-foreground mb-6">
                Book a free 15-minute consultation to discuss your project and see if we're a good fit.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, X, User, Mail } from "lucide-react";

const LiveChatWidget = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
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

    // Simulate chat message submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent! 💬",
      description: "Thanks for reaching out! I'll respond within a few minutes.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="w-16 h-16 rounded-full btn-hero shadow-2xl hover:shadow-[var(--glow-primary)] animate-pulse hover:animate-none"
              size="icon"
            >
              <MessageCircle className="w-8 h-8" />
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md bg-card border-border">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">Let's Chat!</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    Typically responds in a few minutes
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>

            {/* Chat Interface */}
            <div className="mt-6">
              {/* Welcome Message */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium mb-1">Hi there! 👋</p>
                    <p className="text-muted-foreground">
                      I'm here to help with your video editing project. What can I create for you?
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Message Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi! I need help with..."
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Quick Actions */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setFormData({...formData, message: "I need a video for social media"})}
                    className="text-xs border-primary/30 hover:bg-primary/10"
                  >
                    Social Media Video
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setFormData({...formData, message: "I need help with video editing"})}
                    className="text-xs border-primary/30 hover:bg-primary/10"
                  >
                    Video Editing
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setFormData({...formData, message: "What are your rates?"})}
                    className="text-xs border-primary/30 hover:bg-primary/10"
                  >
                    Pricing Info
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default LiveChatWidget;
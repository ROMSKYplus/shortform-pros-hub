import { Award, Users, Clock, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const tools = [
    { name: "Adobe Premiere Pro", category: "Editing" },
    { name: "After Effects", category: "Motion Graphics" },
    { name: "DaVinci Resolve", category: "Color Grading" },
    { name: "Audition", category: "Audio" },
    { name: "Photoshop", category: "Graphics" },
    { name: "Final Cut Pro", category: "Editing" }
  ];

  const achievements = [
    {
      icon: Award,
      metric: "500M+",
      label: "Total Views Generated",
      description: "Content I've edited has reached over half a billion views across all platforms"
    },
    {
      icon: Users,
      metric: "200+",
      label: "Happy Clients",
      description: "From startups to Fortune 500 companies, delivering results that exceed expectations"
    },
    {
      icon: Clock,
      metric: "5+",
      label: "Years Experience",
      description: "Specialized focus on short-form content since the rise of TikTok and Reels"
    },
    {
      icon: Zap,
      metric: "24hrs",
      label: "Average Turnaround",
      description: "Fast delivery without compromising on quality - perfect for viral content needs"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Quick Facts */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative inline-block">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Video Editor Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Tools I Master
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div>
                      <div className="font-medium text-sm">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="heading-gradient">Crafting Stories</span>
              <br />
              <span className="text-foreground">That Convert</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate video editor and content creator who specializes in transforming 
                ideas into viral short-form content. With over 5 years of experience in the industry, 
                I've developed a unique understanding of what makes content not just watchable, but <span className="text-primary font-semibold">irresistibly engaging</span>.
              </p>
              
              <p>
                My journey began when I noticed the shift towards short-form content and the incredible 
                opportunity it presented for brands to connect with audiences in meaningful ways. Since then, 
                I've dedicated myself to mastering the art and science of creating content that not only 
                captures attention but drives real business results.
              </p>
              
              <p>
                What sets me apart is my <span className="text-primary font-semibold">data-driven approach</span> to creativity. 
                I don't just edit videos—I craft experiences that are optimized for each platform's algorithm, 
                audience behavior, and engagement patterns. Every cut, transition, and effect serves a purpose: 
                to keep viewers watching and convert them into customers.
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl">
              <h4 className="font-semibold mb-3 text-primary">My Philosophy</h4>
              <p className="text-muted-foreground italic">
                "Great content isn't just about looking good—it's about making your audience feel something, 
                then guiding them towards action. Every frame should serve your story and your business goals."
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{achievement.metric}</div>
                  <div className="text-sm font-medium mb-2">{achievement.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  FileText, 
  Palette, 
  Video, 
  Settings, 
  Star, 
  Lock,
  CheckCircle,
  Mail
} from "lucide-react";

const DownloadCenter = () => {
  const { toast } = useToast();
  const [emailData, setEmailData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadedItems, setDownloadedItems] = useState<number[]>([]);

  const downloads = [
    {
      id: 1,
      title: "Ultimate Video Editing Checklist",
      description: "Complete pre-production to post-production checklist to ensure professional quality every time.",
      category: "guide",
      type: "PDF Guide",
      size: "2.5 MB",
      downloads: "1,247",
      rating: 4.9,
      isPremium: false,
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Color Grading LUTs Pack", 
      description: "Professional color grading presets for cinematic looks. Compatible with Premiere Pro, DaVinci Resolve, and Final Cut Pro.",
      category: "presets",
      type: "LUT Pack",
      size: "45 MB",
      downloads: "892",
      rating: 4.8,
      isPremium: true,
      icon: Palette,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Social Media Video Templates",
      description: "Ready-to-use templates for Instagram, TikTok, and YouTube. Includes lower thirds, transitions, and text animations.",
      category: "templates",
      type: "Project Files", 
      size: "120 MB",
      downloads: "2,156",
      rating: 4.9,
      isPremium: true,
      icon: Video,
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      title: "Brand Style Guide Template",
      description: "Professional brand guidelines template. Perfect for creating consistent video content for clients.",
      category: "templates",
      type: "AI Template",
      size: "8.2 MB", 
      downloads: "543",
      rating: 4.7,
      isPremium: false,
      icon: Settings,
      color: "from-green-500 to-green-600"
    },
    {
      id: 5,
      title: "Audio Enhancement Presets",
      description: "Professional audio presets for crystal clear voice recordings and background music balancing.",
      category: "presets",
      type: "Audio Presets",
      size: "12 MB",
      downloads: "1,089",
      rating: 4.8,
      isPremium: true,
      icon: Settings,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Client Questionnaire Template",
      description: "Comprehensive questionnaire to gather all necessary information for video projects. Streamline your workflow.",
      category: "guide",
      type: "PDF Template",
      size: "1.1 MB",
      downloads: "876",
      rating: 4.6,
      isPremium: false,
      icon: FileText,
      color: "from-teal-500 to-teal-600"
    }
  ];

  const categories = [
    { id: "all", label: "All Resources", count: downloads.length },
    { id: "guide", label: "Guides & Checklists", count: downloads.filter(d => d.category === "guide").length },
    { id: "templates", label: "Templates", count: downloads.filter(d => d.category === "templates").length },
    { id: "presets", label: "Presets & LUTs", count: downloads.filter(d => d.category === "presets").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDownloads = selectedCategory === "all" 
    ? downloads 
    : downloads.filter(download => download.category === selectedCategory);

  const handleEmailSubmit = async (e: React.FormEvent, downloadId: number) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Download Started! 📁",
      description: "Check your email for the download link and bonus resources.",
    });

    setDownloadedItems([...downloadedItems, downloadId]);
    setEmailData({ name: "", email: "" });
    setIsSubmitting(false);
  };

  const handleDirectDownload = (downloadId: number, title: string) => {
    setDownloadedItems([...downloadedItems, downloadId]);
    toast({
      title: "Download Started! 📁", 
      description: `${title} is being downloaded to your device.`,
    });
  };

  return (
    <section id="download-center" className="py-24 px-4 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Resource</span>
            <br />
            <span className="text-foreground">Download Center</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional templates, presets, and guides to elevate your video content. 
            Download premium resources used in my client projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "btn-hero" : "border-border hover:border-primary/50"}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDownloads.map((download) => {
            const IconComponent = download.icon;
            const isDownloaded = downloadedItems.includes(download.id);
            
            return (
              <Card key={download.id} className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${download.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {download.isPremium && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                      {isDownloaded && (
                        <Badge variant="outline" className="border-green-500 text-green-500">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Downloaded
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {download.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {download.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <span>{download.type}</span>
                      <span>{download.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{download.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span>{download.downloads} downloads</span>
                  </div>

                  {/* Download Button */}
                  {download.isPremium ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                          <Lock className="w-4 h-4 mr-2" />
                          Get Premium Resource
                        </Button>
                      </DialogTrigger>
                      
                      <DialogContent className="sm:max-w-md bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${download.color} flex items-center justify-center`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            Download {download.title}
                          </DialogTitle>
                        </DialogHeader>

                        <div className="mt-6">
                          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 mb-6">
                            <h4 className="font-semibold mb-2">What you'll get:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Premium {download.type.toLowerCase()}</li>
                              <li>• Installation instructions</li>
                              <li>• Bonus tutorial video</li>
                              <li>• Email support</li>
                            </ul>
                          </div>

                          <form onSubmit={(e) => handleEmailSubmit(e, download.id)} className="space-y-4">
                            <div>
                              <Input
                                type="text"
                                placeholder="Your name"
                                value={emailData.name}
                                onChange={(e) => setEmailData({...emailData, name: e.target.value})}
                                required
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                            <div>
                              <Input
                                type="email"
                                placeholder="Your email address"
                                value={emailData.email}
                                onChange={(e) => setEmailData({...emailData, email: e.target.value})}
                                required
                                className="bg-background border-border focus:border-primary"
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
                                  <Mail className="w-4 h-4 mr-2" />
                                  Send Download Link
                                </>
                              )}
                            </Button>
                          </form>

                          <p className="text-xs text-muted-foreground mt-4 text-center">
                            No spam, unsubscribe anytime. Download link expires in 24 hours.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button 
                      onClick={() => handleDirectDownload(download.id, download.title)}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      disabled={isDownloaded}
                    >
                      {isDownloaded ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Downloaded
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Free Download
                        </>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Custom Resources?</h3>
            <p className="text-muted-foreground mb-6">
              I create custom templates, presets, and style guides tailored to your brand and projects.
            </p>
            <Button className="btn-hero">
              Request Custom Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
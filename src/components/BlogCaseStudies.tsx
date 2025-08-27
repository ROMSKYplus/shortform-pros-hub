import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, ArrowRight, TrendingUp, Award, Users } from "lucide-react";

const BlogCaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "How I Increased Client's Instagram Engagement by 300%",
      excerpt: "A deep dive into the video editing techniques and strategies that transformed a small business's social media presence into a viral success story.",
      category: "case-study",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      tags: ["Social Media", "Instagram", "Viral Content"],
      metrics: {
        views: "2.3M",
        engagement: "+300%",
        followers: "+15K"
      }
    },
    {
      id: 2,
      title: "The Ultimate Guide to Short-Form Video Editing",
      excerpt: "Master the art of creating compelling 15-60 second videos that capture attention and drive action across all major platforms.",
      category: "tutorial",
      date: "2024-01-10",
      readTime: "12 min read", 
      image: "/api/placeholder/600/300",
      tags: ["Tutorial", "Short-Form", "Best Practices"]
    },
    {
      id: 3,
      title: "YouTube Channel Transformation: 0 to 100K Subscribers",
      excerpt: "Complete breakdown of how strategic video editing and content optimization helped a creator achieve 100K subscribers in 6 months.",
      category: "case-study",
      date: "2024-01-08",
      readTime: "10 min read",
      image: "/api/placeholder/600/300",
      tags: ["YouTube", "Growth", "Content Strategy"],
      metrics: {
        subscribers: "+100K",
        views: "5.2M",
        revenue: "+$25K/month"
      }
    },
    {
      id: 4,
      title: "2024 Video Trends: What's Working Right Now",
      excerpt: "Stay ahead of the curve with the latest video editing trends and techniques that are driving engagement across all platforms.",
      category: "industry",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      tags: ["Trends", "2024", "Industry Analysis"]
    },
    {
      id: 5,
      title: "Corporate Video Success: Brand Awareness Campaign",
      excerpt: "How professional video editing transformed a B2B company's marketing strategy, resulting in significant brand recognition and lead generation.",
      category: "case-study", 
      date: "2024-01-03",
      readTime: "9 min read",
      image: "/api/placeholder/600/300",
      tags: ["Corporate", "B2B", "Brand Awareness"],
      metrics: {
        brandAwareness: "+180%",
        leads: "+220%",
        conversion: "+45%"
      }
    },
    {
      id: 6,
      title: "Color Grading Secrets for Cinematic Look",
      excerpt: "Professional color grading techniques that will make your videos stand out with that coveted cinematic quality.",
      category: "tutorial",
      date: "2024-01-01",
      readTime: "15 min read",
      image: "/api/placeholder/600/300", 
      tags: ["Color Grading", "Cinematic", "Advanced Techniques"]
    }
  ];

  const categories = [
    { id: "all", label: "All Posts", count: blogPosts.length },
    { id: "case-study", label: "Case Studies", count: blogPosts.filter(post => post.category === "case-study").length },
    { id: "tutorial", label: "Tutorials", count: blogPosts.filter(post => post.category === "tutorial").length },
    { id: "industry", label: "Industry Insights", count: blogPosts.filter(post => post.category === "industry").length }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "case-study":
        return <TrendingUp className="w-4 h-4" />;
      case "tutorial":
        return <Award className="w-4 h-4" />;
      case "industry":
        return <Users className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "case-study":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "tutorial": 
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "industry":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="blog-case-studies" className="py-24 px-4 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Insights & Success</span>
            <br />
            <span className="text-foreground">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results, proven strategies, and industry insights from successful video projects. 
            Learn from case studies and stay updated with the latest trends.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-card border border-border">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {getCategoryIcon(category.id)}
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(post.category)} border`}>
                    {getCategoryIcon(post.category)}
                    <span className="ml-1 capitalize">{post.category.replace('-', ' ')}</span>
                  </Badge>
                </div>
                {post.metrics && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    Featured
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </CardHeader>

              <CardContent>
                {/* Metrics for Case Studies */}
                {post.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                    {Object.entries(post.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-border">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read More Button */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between p-0 h-auto text-primary hover:text-primary hover:bg-transparent"
                >
                  <span>Read Full {post.category === 'case-study' ? 'Case Study' : 'Article'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest video editing insights, case studies, and industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
              <Button className="btn-hero px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCaseStudies;
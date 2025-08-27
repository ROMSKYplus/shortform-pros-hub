import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, Clock, Video, Zap, PenTool, Mic } from "lucide-react";

const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [videoLength, setVideoLength] = useState([30]);
  const [timeline, setTimeline] = useState("standard");
  const [videoCount, setVideoCount] = useState([1]);

  const services = [
    {
      id: "editing",
      name: "Video Editing",
      icon: Video,
      basePrice: 150,
      description: "Professional editing with cuts, transitions, and effects"
    },
    {
      id: "scripting",
      name: "Scriptwriting",
      icon: PenTool,
      basePrice: 75,
      description: "Compelling scripts optimized for engagement"
    },
    {
      id: "voiceover",
      name: "Voice-Over",
      icon: Mic,
      basePrice: 100,
      description: "Professional voice recording and production"
    },
    {
      id: "production",
      name: "Full Production",
      icon: Zap,
      basePrice: 300,
      description: "Complete done-for-you video creation"
    }
  ];

  const timelineMultipliers = {
    rush: { label: "Rush (24hrs)", multiplier: 1.5 },
    standard: { label: "Standard (2-3 days)", multiplier: 1 },
    economy: { label: "Economy (5-7 days)", multiplier: 0.8 }
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    let total = 0;
    
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        total += service.basePrice;
      }
    });

    // Video length multiplier
    const lengthMultiplier = videoLength[0] > 30 ? 1 + (videoLength[0] - 30) / 100 : 1;
    total *= lengthMultiplier;

    // Timeline multiplier
    total *= timelineMultipliers[timeline as keyof typeof timelineMultipliers].multiplier;

    // Video count
    total *= videoCount[0];

    // Volume discount for multiple videos
    if (videoCount[0] >= 5) {
      total *= 0.85; // 15% discount
    } else if (videoCount[0] >= 3) {
      total *= 0.9; // 10% discount
    }

    return Math.round(total);
  };

  const total = calculateTotal();
  const savings = videoCount[0] >= 3 ? Math.round(calculateTotal() / (videoCount[0] >= 5 ? 0.85 : 0.9) - total) : 0;

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="heading-gradient">Pricing Calculator</span>
            <br />
            <span className="text-foreground">Get Your Instant Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for all your video needs. Select your services and get an instant quote with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services Selection */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Select Services</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedServices.includes(service.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={selectedServices.includes(service.id)}
                        onChange={() => {}}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <service.icon className="w-5 h-5 text-primary" />
                          <span className="font-medium">{service.name}</span>
                          <span className="text-sm text-primary font-semibold ml-auto">
                            ${service.basePrice}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Video Specifications */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Video Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video Length */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Video Length: {videoLength[0]} seconds
                  </label>
                  <Slider
                    value={videoLength}
                    onValueChange={setVideoLength}
                    max={120}
                    min={15}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>15s</span>
                    <span>60s (optimal)</span>
                    <span>120s</span>
                  </div>
                </div>

                {/* Video Count */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Number of Videos: {videoCount[0]}
                    {videoCount[0] >= 3 && (
                      <span className="text-green-500 ml-2 text-xs">
                        ({videoCount[0] >= 5 ? "15%" : "10%"} discount!)
                      </span>
                    )}
                  </label>
                  <Slider
                    value={videoCount}
                    onValueChange={setVideoCount}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1</span>
                    <span>10</span>
                    <span>20+</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-3">Delivery Timeline</label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(timelineMultipliers).map(([key, { label, multiplier }]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center justify-between w-full">
                          <span>{label}</span>
                          {multiplier !== 1 && (
                            <span className="ml-4 text-sm">
                              {multiplier > 1 ? `+${((multiplier - 1) * 100).toFixed(0)}%` : `-${((1 - multiplier) * 100).toFixed(0)}%`}
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>

          {/* Quote Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-primary/20">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Instant Quote</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Your Project Estimate</h3>
                  {selectedServices.length === 0 ? (
                    <p className="text-muted-foreground">Select services to see pricing</p>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-primary mb-2">${total}</div>
                      {savings > 0 && (
                        <div className="text-sm text-green-500">
                          You save ${savings} with volume pricing!
                        </div>
                      )}
                    </>
                  )}
                </div>

                {selectedServices.length > 0 && (
                  <>
                    {/* Breakdown */}
                    <div className="space-y-3 mb-6">
                      {selectedServices.map(serviceId => {
                        const service = services.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex justify-between text-sm">
                            <span>{service.name}</span>
                            <span>${service.basePrice}</span>
                          </div>
                        ) : null;
                      })}
                      <div className="border-t border-border pt-3 mt-3">
                        <div className="flex justify-between text-sm">
                        <span>Timeline: {timelineMultipliers[timeline as keyof typeof timelineMultipliers].label}</span>
                          <span>
                            {timelineMultipliers[timeline as keyof typeof timelineMultipliers].multiplier !== 1 && 
                              `${timelineMultipliers[timeline as keyof typeof timelineMultipliers].multiplier}x`
                            }
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Video count: {videoCount[0]}</span>
                          <span>{videoCount[0]}x</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      className="w-full btn-hero"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Started - ${total}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Final pricing may vary based on specific requirements
                    </p>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize, X, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    id: number;
    title: string;
    description: string;
    metrics: string;
    service: string;
    duration: string;
    platform: string;
    views: string;
    engagement: string;
  };
}

const VideoModal = ({ isOpen, onClose, video }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-background border-border">
        <DialogTitle className="sr-only">{video.title}</DialogTitle>
        
        {/* Video Player Section */}
        <div className="relative flex-1 bg-black rounded-t-lg overflow-hidden">
          {/* Placeholder Video - In real implementation, you'd use actual video files */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-medium">Video Preview</p>
                <p className="text-sm opacity-60">{video.platform} • {video.duration}</p>
              </div>
            </div>
            
            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                
                {/* Progress Bar */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-xs text-white">{formatTime(currentTime)}</span>
                  <div className="flex-1 h-1 bg-white/30 rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-white">{formatTime(duration || 45)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-white" />
                  <Maximize className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Details Section */}
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {video.service}
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  {video.platform}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{video.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {video.description}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{video.views}</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">{video.engagement}</div>
              <div className="text-sm text-muted-foreground">Engagement Rate</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">{video.duration}</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button className="btn-hero flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Video
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/30 hover:border-primary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Similar Project
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
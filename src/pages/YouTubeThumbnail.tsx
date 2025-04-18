
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Play } from "lucide-react";  // Corrected import from 'play' to 'Play'

const YouTubeThumbnail = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoSummary, setVideoSummary] = useState("");
  const [thumbnailStyle, setThumbnailStyle] = useState("");
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  const handleSubmitUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingSummary(true);
    // TODO: Integrate with backend API
    setIsGeneratingSummary(false);
    // Placeholder summary
    setVideoSummary("Video summary will appear here...");
  };

  const handleGenerateThumbnail = async () => {
    // TODO: Integrate with backend API for thumbnail generation
    console.log("Generating thumbnail with:", { videoSummary, thumbnailStyle });
  };

  return (
    <div className="pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <h1 className="text-2xl font-bold mb-6">Generate YouTube Thumbnail</h1>
          
          <form onSubmit={handleSubmitUrl} className="space-y-6">
            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium mb-2">
                YouTube Video URL
              </label>
              <Input
                id="videoUrl"
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                required
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700"
              disabled={isGeneratingSummary}
            >
              Get Video Summary
            </Button>
          </form>

          {videoSummary && (
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="summary" className="block text-sm font-medium mb-2">
                  Edit Video Summary
                </label>
                <Textarea
                  id="summary"
                  value={videoSummary}
                  onChange={(e) => setVideoSummary(e.target.value)}
                  className="w-full h-32"
                />
              </div>

              <div>
                <label htmlFor="style" className="block text-sm font-medium mb-2">
                  Thumbnail Style Description
                </label>
                <Textarea
                  id="style"
                  value={thumbnailStyle}
                  onChange={(e) => setThumbnailStyle(e.target.value)}
                  placeholder="Describe the style you want for your thumbnail..."
                  className="w-full h-32"
                />
              </div>

              <Button
                onClick={handleGenerateThumbnail}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Generate Thumbnail
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default YouTubeThumbnail;

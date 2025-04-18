import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Play, Brush } from "lucide-react";

const YouTubeThumbnail = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoSummary, setVideoSummary] = useState("");
  const [thumbnailStyle, setThumbnailStyle] = useState("");
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [isStyleGenerated, setIsStyleGenerated] = useState(false);

  const handleSubmitUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingSummary(true);
    // TODO: Integrate with backend API
    setIsGeneratingSummary(false);
    // Placeholder summary
    setVideoSummary("Video summary will appear here...");
  };

  const handleGenerateStyle = async () => {
    // TODO: Integrate with AI style generation
    setThumbnailStyle("Modern, vibrant thumbnail with bold typography and engaging visual hierarchy...");
    setIsStyleGenerated(true);
  };

  const handleGenerateThumbnail = async () => {
    // TODO: Integrate with backend API for thumbnail generation
    console.log("Generating thumbnail with:", { videoSummary, thumbnailStyle });
  };

  return (
    <div className="pt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-purple-800">Generate YouTube Thumbnail</h1>
          
          <form onSubmit={handleSubmitUrl} className="space-y-6">
            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium mb-2 text-gray-700">
                YouTube Video URL
              </label>
              <div className="flex gap-2">
                <Input
                  id="videoUrl"
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  required
                  className="flex-1 border-2 focus:border-purple-500 transition-colors"
                />
                <Button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700 transition-colors"
                  disabled={isGeneratingSummary}
                >
                  <Play className="mr-2" />
                  Get Summary
                </Button>
              </div>
            </div>
          </form>

          {videoSummary && (
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="summary" className="block text-sm font-medium mb-2 text-gray-700">
                  Edit Video Summary
                </label>
                <Textarea
                  id="summary"
                  value={videoSummary}
                  onChange={(e) => setVideoSummary(e.target.value)}
                  className="w-full h-32 border-2 focus:border-purple-500 transition-colors p-3 rounded-md"
                />
                <Button
                  onClick={handleGenerateStyle}
                  className="mt-2 bg-purple-600 hover:bg-purple-700 transition-colors"
                >
                  <Brush className="mr-2" />
                  Generate Style
                </Button>
              </div>

              <div>
                <label htmlFor="style" className="block text-sm font-medium mb-2 text-gray-700">
                  Thumbnail Style Description
                </label>
                <Textarea
                  id="style"
                  value={thumbnailStyle}
                  onChange={(e) => setThumbnailStyle(e.target.value)}
                  placeholder="Describe the style you want for your thumbnail..."
                  className="w-full h-32 border-2 focus:border-purple-500 transition-colors p-3 rounded-md"
                />
              </div>

              <Button
                onClick={handleGenerateThumbnail}
                className="w-full bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Generate Thumbnail
              </Button>
            </div>
          )}

          {isStyleGenerated && (
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                Thumbnail Style Options
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-md font-medium text-purple-700 mb-2">
                    Color Palette
                  </h4>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-md font-medium text-purple-700 mb-2">
                    Text Styles
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-purple-600 focus:ring-purple-500" 
                      />
                      <span>Bold Typography</span>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2 text-purple-600 focus:ring-purple-500" 
                      />
                      <span>Gradient Text</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default YouTubeThumbnail;

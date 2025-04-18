
import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Library = () => {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Thumbnails</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Thumbnail {item}</h3>
                <p className="text-sm text-gray-500">Created on April 18, 2024</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;

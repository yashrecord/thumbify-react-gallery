
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, UploadIcon } from "lucide-react";

const MainApp = () => {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Create New Thumbnail</h1>
          <Card className="p-8 text-center">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
              <div className="flex flex-col items-center">
                <UploadIcon className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-xl font-medium mb-2">Drop your image here</p>
                <p className="text-gray-500 mb-4">or</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Choose File
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainApp;

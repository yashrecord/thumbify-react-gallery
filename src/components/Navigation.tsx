
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageIcon, BookOpenIcon, UserIcon, InfoIcon } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ImageIcon className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-xl text-gray-900">Thumbify</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/app">
              <Button variant="ghost">
                <ImageIcon className="h-4 w-4 mr-2" />
                Create
              </Button>
            </Link>
            <Link to="/library">
              <Button variant="ghost">
                <BookOpenIcon className="h-4 w-4 mr-2" />
                Library
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">
                <InfoIcon className="h-4 w-4 mr-2" />
                About
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="default" className="bg-purple-600 hover:bg-purple-700">
                <UserIcon className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

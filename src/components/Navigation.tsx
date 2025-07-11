
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              CVS
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-900">Coosa Valley Signs</h1>
              <p className="text-sm text-gray-600">Rome, GA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              (706) 234-6225
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                <Phone className="h-4 w-4 mr-2" />
                (706) 555-0123
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

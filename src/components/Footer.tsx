
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                CVS
              </div>
              <div>
                <h3 className="font-bold text-lg">Coosa Valley Signs</h3>
                <p className="text-gray-400 text-sm">Rome, GA</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional signage solutions serving Rome, GA and surrounding areas 
              since 2009. Quality craftsmanship and exceptional service.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(706) 234-6225</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@coosavalleysigns.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  406 John Davenport Dr<br />
                  Rome, GA 30165
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 8:00 AM - 5:00 PM</div>
                  <div>Saturday & Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact & Quote
              </Link>
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Coosa Valley Signs. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

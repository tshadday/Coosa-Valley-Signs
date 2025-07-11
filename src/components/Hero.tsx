
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
            <Award className="h-4 w-4 mr-2" />
            Serving Rome, GA Since 2009
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional Signs That 
            <span className="text-blue-300 block">Make You Stand Out</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From custom business signs to vehicle wraps, we create high-quality signage 
            that gets your business noticed in Rome, GA and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-blue-900 px-8 py-4 text-lg">
              View Our Work
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="h-6 w-px bg-blue-400/30 hidden sm:block"></div>
            <div className="font-medium">500+ Happy Customers</div>
            <div className="h-6 w-px bg-blue-400/30 hidden sm:block"></div>
            <div className="font-medium">Licensed & Insured</div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-indigo-600/10 to-transparent"></div>
    </section>
  );
};

export default Hero;

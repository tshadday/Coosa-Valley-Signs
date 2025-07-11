
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Car, 
  Palette, 
  Zap, 
  Store, 
  Truck,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Signage",
    description: "Professional storefront signs, channel letters, and monument signs that establish your brand presence.",
    badge: "Most Popular"
  },
  {
    icon: Car,
    title: "Vehicle Wraps",
    description: "Turn your vehicles into mobile billboards with custom wraps and graphics.",
    badge: "High Impact"
  },
  {
    icon: Palette,
    title: "Custom Graphics",
    description: "Unique designs tailored to your brand, from logos to full visual identity systems.",
    badge: "Creative"
  },
  {
    icon: Store,
    title: "Indoor Signage",
    description: "Wayfinding signs, lobby displays, and interior branding solutions.",
    badge: "Professional"
  },
  {
    icon: Truck,
    title: "Installation",
    description: "Professional installation services with proper permits and safety protocols.",
    badge: "Full Service"
  },
  {
    icon: Zap,
    title: "LED & Neon",
    description: "Energy-efficient LED signs and modern neon alternatives for maximum visibility.",
    badge: "Modern"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Sign Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to installation, we handle every aspect of your signage project with 
            professional expertise and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                    {service.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ExternalLink } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Modern Storefront Sign",
    category: "Business Signage",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    description: "Contemporary illuminated sign for downtown business"
  },
  {
    id: 2,
    title: "Restaurant Channel Letters",
    category: "Channel Letters",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    description: "Bright LED channel letters for local restaurant"
  },
  {
    id: 3,
    title: "Vehicle Wrap Design",
    category: "Vehicle Graphics",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
    description: "Full vehicle wrap for delivery company"
  },
  {
    id: 4,
    title: "Medical Office Signage",
    category: "Professional Signs",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    description: "Clean, professional signage for medical practice"
  },
  {
    id: 5,
    title: "Retail Window Graphics",
    category: "Window Graphics",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
    description: "Eye-catching window display graphics"
  },
  {
    id: 6,
    title: "Monument Sign",
    category: "Monument Signs",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
    description: "Elegant stone and metal monument sign"
  }
];

const categories = ["All", "Business Signage", "Channel Letters", "Vehicle Graphics", "Professional Signs", "Window Graphics", "Monument Signs"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Our Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent signage projects throughout Rome, GA and 
            the surrounding areas. Quality craftsmanship in every sign we create.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all ${
                selectedCategory === category 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        onClick={() => setSelectedImage(item)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      {selectedImage && (
                        <div>
                          <img 
                            src={selectedImage.image} 
                            alt={selectedImage.title}
                            className="w-full h-80 object-cover rounded-lg mb-4"
                          />
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                              <Badge>{selectedImage.category}</Badge>
                            </div>
                            <p className="text-muted-foreground">{selectedImage.description}</p>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to see your business in our portfolio?
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Project <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import LeadForm from "@/components/LeadForm";

interface HeroSectionProps {
  onEnquireClick: () => void;
}

const HeroSection = ({ onEnquireClick }: HeroSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={img}
            alt={`Elan Sector 49 - View ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            4 BHK Luxury Apartments
          </h1>
          <p className="text-2xl md:text-3xl mb-2 text-primary font-semibold">
            Sector 49, Gurgaon
          </p>
          <p className="text-3xl md:text-4xl font-bold mb-8">
            ₹10 Cr* Onwards
          </p>
          <Button
            onClick={onEnquireClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
          >
            Enquire Now
          </Button>
        </div>

        <div className="hidden lg:block w-[450px] bg-white rounded-lg shadow-2xl">
          <LeadForm />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImage ? "bg-primary w-8" : "bg-white/50"
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/statement-1.png";
import gallery2 from "@/assets/statement-2.jpg";
import gallery3 from "@/assets/statement-3.jpg";
import gallery4 from "@/assets/statement-4.png";
import LeadForm from "./LeadForm";
import { Lock } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const galleryImages = [
    { id: 1, src: gallery1, alt: "Elan The Statement Exterior" },
    { id: 2, src: gallery2, alt: "Luxury High Rise Tower" },
    { id: 3, src: gallery3, alt: "Grand Entrance Lobby" },
    { id: 4, src: gallery4, alt: "Cloud Level Amenities" },
  ];

  const handleImageClick = (src: string) => {
    if (isUnlocked) {
      setSelectedImage(src);
    } else {
      setShowLeadForm(true);
    }
  };

  const handleFormSuccess = () => {
    setIsUnlocked(true);
    setShowLeadForm(false);
  };

  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[16/9] bg-muted"
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${!isUnlocked ? "blur-[2px]" : ""}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {!isUnlocked && <Lock className="w-12 h-12 text-white opacity-80" />}
                {isUnlocked && <p className="text-foreground p-4 font-semibold absolute bottom-0">{image.alt}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
          <LeadForm onSuccess={handleFormSuccess} title="Unlock Gallery" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

import { Dumbbell, Waves, Theater, Trees, Sparkles, Gamepad2, Shield, Car } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Building2, name: "Double Height Lobby", image: "lobby" },
    { icon: Sparkles, name: "Grandeur", image: "grandeur" },
    { icon: Waves, name: "Swimming Pool", image: "pool" },
    { icon: Theater, name: "Theater", image: "theater" },
    { icon: Trees, name: "Joggers Park", image: "joggers" },
    { icon: Dumbbell, name: "Gymnasium", image: "gym" },
    { icon: Sparkles, name: "SPA", image: "spa" },
    { icon: Gamepad2, name: "Games Room", image: "games" },
    { icon: Shield, name: "24/7 Security", image: "security" },
    { icon: Car, name: "Ample Parking", image: "parking" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class Amenities</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience luxury living with premium amenities designed for your comfort and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">{amenity.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Add missing import
import { Building2 } from "lucide-react";

export default Amenities;

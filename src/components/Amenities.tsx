import { Building2, Waves, Sparkles, Trees, Shield, Dumbbell, Gamepad2, Theater, Car, Utensils, Users, Trophy, Star } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Building2, name: "Luxury Club House", image: "club" },
    { icon: Waves, name: "Olympic Sized Pool", image: "pool" },
    { icon: Sparkles, name: "Floating Sauna", image: "sauna" },
    { icon: Trees, name: "Horse Riding", image: "riding" },
    { icon: Shield, name: "5-Tier Security", image: "security" },
    { icon: Dumbbell, name: "Professional Gym", image: "gym" },
    { icon: Trees, name: "Landscaped Central Greens", image: "greens" },
    { icon: Gamepad2, name: "Shooting Range", image: "shooting" },
    { icon: Theater, name: "Home Automation", image: "automation" },
    { icon: Utensils, name: "Multi Cuisine Restaurant", image: "restaurant" },
    { icon: Users, name: "Concierge / Help Desk", image: "concierge" },
    { icon: Trophy, name: "Tennis & Badminton", image: "sports" },
    { icon: Star, name: "8ft Wide Deck/Balcony", image: "balcony" }, // Correcting based on logical 8ft
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



export default Amenities;

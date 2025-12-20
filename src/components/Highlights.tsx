import { CheckCircle } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      title: "Expansive Greenery",
      description: "Spread in 40 Acres, 75% Open Greens with every apartment facing central greens.",
    },
    {
      title: "Opulent Design",
      description: "Contemporary and opulent design features with an Air-conditioned Triple height lobby.",
    },
    {
      title: "Podium Clubhouse",
      description: "Podium-Level Clubhouse with all amenities, including a Floating sauna and picturesque pool.",
    },
    {
      title: "Premium Interiors",
      description: "VRV/VRF ACs in bedrooms, living & dining area. Modular Kitchen with sealed piping.",
    },
    {
      title: "Convenience",
      description: "3-level basement parking and seamless connectivity from Delhi. A short drive from IGI Airport.",
    },
    {
      title: "Recreation",
      description: "Features Horse Riding & Shooting range, Tennis & Badminton Court, and Dedicated Kids Zone.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Highlights</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

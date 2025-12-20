import { CheckCircle } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      title: "Residences",
      description: "These residences offer a perfect blend of grandeur, exclusivity and modern sophistication. 3-Side open apartments with running balconies.",
    },
    {
      title: "The Billionaire Club",
      description: "Watch simple moments transform into extraordinary experiences at the Clubhouse. Luxury 8 level club with 100+ amenities.",
    },
    {
      title: "Amenities",
      description: "Watch luxury get a new definition through never seen before amenities, exclusive spaces, ideas and imaginations. Olympic sized swimming pool.",
    },
    {
      title: "Magnificent Arrival",
      description: "Step into timeless elegance as the grand entrance, surrounded by breathtaking greenery, sets the stage for opulent living.",
    },
    {
      title: "Pristine Natural Elements",
      description: "Watch pristine natural elements surround you as beautifully landscaped green spaces invite you to unwind and reconnect.",
    },
    {
      title: "Recreation & Wellness",
      description: "Features expansive open spaces, tailored for kids and senior citizens alike. Private elevators with every home.",
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

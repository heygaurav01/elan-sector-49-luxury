import { CheckCircle } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      title: "Ultra-Luxury Residences",
      description: "The project offers a limited collection of spacious 4 BHK Apartments, with sizes 4500 Sq. Ft.",
    },
    {
      title: "Low-Density Living",
      description: "Spread across approximately 6 acres, the development is low-density, with 340 units and generally two apartments per core (floor) in high-rise towers (G+36 floors), ensuring maximum privacy and exclusivity.",
    },
    {
      title: "Expansive Clubhouse",
      description: "A massive, resort-style clubhouse, ranging from 70,000 to over 150,000 Sq. Ft., is a focal point, featuring extensive amenities like a gym, spa, swimming pools (including an Olympic-style indoor pool), and various sports courts.",
    },
    {
      title: "Premium Interiors & Finishes",
      description: "Residences are crafted with high-end specifications including imported Italian marble flooring, double-glazed soundproof windows, energy-efficient VRV/VRF air conditioning, and European-style modular kitchens.",
    },
    {
      title: "Strategic Location",
      description: "Situated on Sohna Road, the project offers excellent connectivity to the Golf Course Extension Road, NH-48, Southern Peripheral Road (SPR), and is a short drive from major business hubs like Cyber City and top-tier schools and hospitals.",
    },
    {
      title: "Green & Sustainable",
      description: "The development incorporates sustainable practices with around 65% open green spaces, landscaped gardens, rainwater harvesting systems, and solar-powered common areas.",
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

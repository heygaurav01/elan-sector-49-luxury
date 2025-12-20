import { MapPin, Maximize2, Building2, Layers, Home, CheckCircle, User, HardHat } from "lucide-react";

const Overview = () => {
  const specs = [
    { icon: MapPin, label: "Location", value: "Sector 106, Dwarka Expressway" },
    { icon: Maximize2, label: "Land Area", value: "40 Acres" },
    { icon: Building2, label: "Developer", value: "Elan Limited" },
    { icon: Layers, label: "Type", value: "Apartments/Penthouses" },
    { icon: Layers, label: "Open Area", value: "75% Open Greens" },
    { icon: Home, label: "Area", value: "2500 - 6500 SQFT" },
    { icon: User, label: "Architect", value: "UHA London" },
    { icon: HardHat, label: "Construction", value: "Leighton" },
    { icon: CheckCircle, label: "Status", value: "New Launch" },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Overview</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                <p className={`font-bold ${spec.label === "RERA ID" ? "text-xs" : "text-lg"} break-words text-center px-2`}>{spec.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;

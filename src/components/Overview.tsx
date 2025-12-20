import { MapPin, Maximize2, Building2, Layers, Home, CheckCircle } from "lucide-react";

const Overview = () => {
  const specs = [
    { icon: MapPin, label: "Location", value: "Sector 106, Dwarka Expressway" },
    { icon: Maximize2, label: "Land Area", value: "12 Acres" }, // Approximation based on typical luxury projects, can adjust if strict data needed
    { icon: Building2, label: "No. of Units", value: "Limited Edition" },
    { icon: Layers, label: "Types", value: "Super Luxury Residences" },
    { icon: Layers, label: "Floors", value: "High Rise" }, // Generic if not specific
    { icon: Home, label: "Unit Variants", value: "4 & 5 BHK + SQ & Penthouses" },
    { icon: CheckCircle, label: "Status", value: "New Launch" },
    { icon: CheckCircle, label: "RERA ID", value: "GGM/902/634/2025/05" },
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

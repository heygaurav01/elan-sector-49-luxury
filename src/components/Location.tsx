import { useState } from "react";
import { MapPin, Clock, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";
import { Button } from "./ui/button";

const Location = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const landmarks = [
    { name: "Sohna Road", time: "02 Mins" },
    { name: "Golf Course Extension Road", time: "05 Mins" },
    { name: "NH-48 (Delhi–Jaipur Highway)", time: "10 Mins" },
    { name: "Huda City Centre Metro Station", time: "15 Mins" },
    { name: "Cyber City / Udyog Vihar", time: "25 Mins" },
    { name: "Medanta – The Medicity Hospital", time: "10 Mins" },
    { name: "IGI Airport", time: "25 Mins" },
    { name: "Aravalli Biodiversity Park / Nature Trails", time: "15 Mins" },
  ];

  const handleSuccess = () => {
    setIsUnlocked(true);
    setShowDialog(false);
  };

  return (
    <section className="py-20 bg-muted" id="location">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Location Advantage</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Strategically located in Sector 49, Gurgaon with excellent connectivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {landmarks.map((landmark, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold">{landmark.name}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{landmark.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden relative">
            <div className={`transition-all duration-300 ${!isUnlocked ? "blur-sm pointer-events-none select-none" : ""}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.355740667288!2d77.03865598848331!3d28.40852081335848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23f0adb4d8b1%3A0x53d689bdda690228!2sElan%20Group%20Sector%2049!5e0!3m2!1sen!2sin!4v1764614791212!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elan Sector 49 Location"
              />
            </div>

            {!isUnlocked && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
                onClick={() => setShowDialog(true)}
              >
                <Button variant="secondary" className="gap-2 shadow-lg hover:scale-105 transition-transform">
                  <Eye className="w-4 h-4" />
                  View Location
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
          <LeadForm onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Location;

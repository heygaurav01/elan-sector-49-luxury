import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download } from "lucide-react";
import floorPlan from "@/assets/floor-plan.png";
import masterPlan from "@/assets/master-plan.png";
import LeadForm from "./LeadForm";

const FloorPlans = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"floor" | "master" | "price">("floor");

  const handleDownloadClick = (type: "floor" | "master" | "price") => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Floor Plans & Master Plan</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={floorPlan}
              alt="Floor Plan"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Floor Plan</h3>
              <Button
                onClick={() => handleDownloadClick("floor")}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Floor Plan
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={masterPlan}
              alt="Master Plan"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Master Plan</h3>
              <Button
                onClick={() => handleDownloadClick("master")}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Master Plan
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Price List & Brochure</h3>
            <p className="text-muted-foreground mb-6">
              Download detailed pricing information and complete project brochure
            </p>
            <Button
              onClick={() => handleDownloadClick("price")}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Price Sheet
            </Button>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>
                {dialogType === "floor"
                  ? "Download Floor Plan"
                  : dialogType === "master"
                  ? "Download Master Plan"
                  : "Download Price Sheet"}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-6">
                Please fill in your details to download
              </p>
              <LeadForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FloorPlans;

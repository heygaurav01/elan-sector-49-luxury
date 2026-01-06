import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

const FloorPlans = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleDownloadClick = (type: string) => {
    setShowDialog(true);
  };

  return (
    <section className="py-20 bg-background" id="floor-plans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Floor Plans & Pricing
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
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

          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
              <LeadForm onSuccess={() => setShowDialog(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;

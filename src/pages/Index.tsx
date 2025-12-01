import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeadForm from "@/components/LeadForm";
import Overview from "@/components/Overview";
import Highlights from "@/components/Highlights";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import FloorPlans from "@/components/FloorPlans";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileLeadButton from "@/components/MobileLeadButton";

const Index = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection onEnquireClick={() => setIsLeadFormOpen(true)} />

      {/* Desktop Fixed Lead Form */}
      <div className="hidden lg:block fixed right-4 top-24 z-40 w-[420px]">
        <div className="sticky top-24">
          <LeadForm />
        </div>
      </div>

      <div id="overview">
        <Overview />
      </div>

      <div id="highlights">
        <Highlights />
      </div>

      <div id="amenities">
        <Amenities />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="floor-plans">
        <FloorPlans />
      </div>

      <div id="location">
        <Location />
      </div>

      <Footer />

      {/* Mobile Lead Button */}
      <MobileLeadButton />

      {/* Enquire Now Dialog */}
      <Dialog open={isLeadFormOpen} onOpenChange={setIsLeadFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enquire Now</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <LeadForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import LeadForm from "./LeadForm";

const MobileLeadButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background border-t border-border md:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-semibold"
        >
          Enquire Now
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="h-[90vh]">
          <SheetHeader>
            <SheetTitle>Register Your Interest</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <LeadForm />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileLeadButton;

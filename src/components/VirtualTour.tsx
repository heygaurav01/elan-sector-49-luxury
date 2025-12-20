import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";
import { Button } from "./ui/button";

const VirtualTour = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <section className="py-20" id="virtual-tour">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Virtual Sample Apartment Tour
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground text-lg font-light">
                        Experience Luxury Living
                    </p>
                </div>

                <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: 'url("/virtual-tour-bg-final.png")' }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* Content - Play Button */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="animate-pulse">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white text-white transition-all hover:scale-110"
                                onClick={() => setShowDialog(true)}
                            >
                                <Play className="w-8 h-8 fill-white ml-1" />
                                <span className="sr-only">Play Virtual Tour</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Form */}
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
                    <LeadForm onSuccess={() => setShowDialog(false)} />
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default VirtualTour;

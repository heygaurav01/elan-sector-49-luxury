import { useState } from "react";
import { Play } from "lucide-react";
import LeadFormModal from "./LeadFormModal";
import heroImage from "@/assets/hero-1.png"; // reusing hero image as placeholder

const VirtualSiteVisit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Virtual Site Visit</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Experience the project from the comfort of your home
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        {/* Placeholder Image */}
                        <img
                            src={heroImage}
                            alt="Virtual Site Tour"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse">
                                <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                            </div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                            <p className="text-xl font-semibold text-white dropdown-shadow-md">
                                Watch Project Walkthrough
                            </p>
                        </div>
                    </div>
                </div>

                <LeadFormModal
                    open={isModalOpen}
                    onOpenChange={setIsModalOpen}
                />
            </div>
        </section>
    );
};

export default VirtualSiteVisit;

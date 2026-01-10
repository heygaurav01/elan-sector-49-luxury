import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import LeadFormModal from "./LeadFormModal";

interface BlurGatewayProps {
    children: React.ReactNode;
    title?: string;
}

const BlurGateway = ({ children, title = "View" }: BlurGatewayProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative group overflow-hidden rounded-lg">
            <div className="filter blur-[5px] pointer-events-none select-none transition-all duration-300">
                {children}
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 shadow-lg transform transition-transform hover:scale-105 flex items-center gap-2"
                >
                    <Eye className="w-4 h-4" />
                    {title}
                </Button>
            </div>

            <LeadFormModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </div>
    );
};

export default BlurGateway;

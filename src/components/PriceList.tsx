import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import LeadFormModal from "./LeadFormModal";

const PriceList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Configuration inspired by Smart World / User Request
    // "make the price list table sheet and make the view button of total value when any one tap pop up the form"
    const units = [
        { type: "4 BHK", size: "4285 Sq. Ft.", price: "On Request" },
        { type: "4 BHK", size: "4340 Sq. Ft.", price: "On Request" },
    ];

    return (
        <section className="py-20 bg-background" id="price-list">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Price List</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground text-lg">
                        Exclusive pre-launch prices available for a limited time
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold text-foreground">Typology</th>
                                    <th className="px-6 py-4 text-left font-bold text-foreground">Size (Super Area)</th>
                                    <th className="px-6 py-4 text-left font-bold text-foreground">Price</th>
                                    <th className="px-6 py-4 text-left font-bold text-foreground">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {units.map((unit, index) => (
                                    <tr key={index} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4 font-medium">{unit.type}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{unit.size}</td>
                                        <td className="px-6 py-4 relative">
                                            <div className="filter blur-sm select-none">₹ 15 Cr*</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Button
                                                onClick={() => setIsModalOpen(true)}
                                                size="sm"
                                                className="bg-primary hover:bg-primary/90 gap-2"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View Price
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 bg-muted/30 text-center">
                        <p className="text-sm text-muted-foreground">
                            *Sizes and prices are subject to change. Contact us for the latest offers.
                        </p>
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

export default PriceList;

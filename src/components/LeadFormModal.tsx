import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeadForm from "./LeadForm";

interface LeadFormModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    trigger?: React.ReactNode;
}

const LeadFormModal = ({ open, onOpenChange, trigger }: LeadFormModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-transparent border-none shadow-none">
                <LeadForm />
            </DialogContent>
        </Dialog>
    );
};

export default LeadFormModal;

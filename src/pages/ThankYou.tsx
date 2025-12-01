import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md mx-auto">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="h-24 w-24 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Your interest has been registered successfully. Our team will get back to you shortly.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="/">Back to Home</a>
                </Button>
            </div>
        </div>
    );
};

export default ThankYou;

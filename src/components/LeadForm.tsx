import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitFormData } from "@/lib/api";
import { trackContactForm } from "@/lib/analytics";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  hideHeader?: boolean;
}

const LeadForm = ({
  title = "Register for Exclusive Offers",
  subtitle = "Get best deals and latest updates",
  className = "",
  hideHeader = false
}: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    const result = await submitFormData({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      countryCode: "+91", // Assuming default country code
    });

    if (result.success) {
      trackContactForm("contact");
      // Redirect to thank-you page
      window.location.href = "/thank-you.html";
    } else {
      toast({
        title: "Submission Failed",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`bg-white rounded-lg p-8 h-full flex flex-col justify-center ${className}`}>
      {!hideHeader && (
        <>
          <>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {subtitle}
            </p>
          </>
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-gray-900">Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="bg-white text-gray-900 border-gray-300 focus:border-primary placeholder:text-gray-500"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-900">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className="bg-white text-gray-900 border-gray-300 focus:border-primary placeholder:text-gray-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-900">Email (Optional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-white text-gray-900 border-gray-300 focus:border-primary placeholder:text-gray-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Register Now
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;

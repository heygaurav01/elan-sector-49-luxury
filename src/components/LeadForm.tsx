import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitFormData } from "@/lib/api";
import { trackContactForm } from "@/lib/analytics";

interface LeadFormProps {
  onSuccess?: () => void;
  title?: string;
  compact?: boolean;
}

const LeadForm = ({ onSuccess, title = "Register for Exclusive Offers", compact = false }: LeadFormProps = {}) => {
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
      if (onSuccess) {
        onSuccess();
        toast({
          title: "Registration Successful",
          description: "Thank you for your interest!",
        });
      } else {
        // Redirect to thank-you page
        window.location.href = "/thank-you.html";
      }
    } else {
      toast({
        title: "Submission Failed",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className={`bg-white rounded-lg h-full flex flex-col justify-center ${compact ? 'p-5' : 'p-8'}`}>
      <h3 className={`font-bold text-foreground ${compact ? 'text-xl mb-3' : 'text-2xl mb-2'}`}>
        {title}
      </h3>
      <p className={`text-sm text-muted-foreground ${compact ? 'mb-4' : 'mb-6'}`}>
        Get best deals and latest updates
      </p>

      <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
        <div>
          <Label htmlFor="name" className={compact ? "text-xs" : ""}>Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className={compact ? "h-9" : ""}
          />
        </div>

        <div>
          <Label htmlFor="phone" className={compact ? "text-xs" : ""}>Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
            }
            required
            className={compact ? "h-9" : ""}
          />
        </div>

        <div>
          <Label htmlFor="email" className={compact ? "text-xs" : ""}>Email (Optional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={compact ? "h-9" : ""}
          />
        </div>

        <Button type="submit" className={`w-full bg-primary hover:bg-primary/90 ${compact ? 'h-9 text-sm' : ''}`}>
          Register Now
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;

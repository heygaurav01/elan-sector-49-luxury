import { Phone, Mail, MapPin } from "lucide-react";
import LeadForm from "./LeadForm";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-primary">ELAN</span> Sector 49
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Experience ultra-luxury living in the heart of Gurgaon. Premium 3/4 BHK apartments designed for those who appreciate the finer things in life.
            </p>
            <p className="text-xs opacity-75">
              PROJECT RERA  No: APPLIED https://haryanarera.gov.in/
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919111193575"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9111193575
              </a>

              <div className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Sector 49, Sohna Road, Gurgaon, Haryana</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#overview" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                Project Overview
              </a>
              <a href="#highlights" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                Highlights
              </a>
              <a href="#amenities" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                Amenities
              </a>
              <a href="#floor-plans" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                Floor Plans
              </a>
              <a href="#location" className="block text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors">
                Location
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 text-black">
            <LeadForm title="Schedule Site Visit" compact={true} />
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Elan Sector 49. All rights reserved.</p>
          <p className="text-xs text-gray-200 mt-2">
            <a href="/Disclaimer.html" className="hover:underline hover:text-gray-500 transition-colors">
              Disclaimer & Privacy Policy
            </a>
          </p>
          <p className="mt-2 text-xs">
            Disclaimer: The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

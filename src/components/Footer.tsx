import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import LeadForm from "./LeadForm";
import { PROJECT_NAME, PROJECT_LOCATION, PROJECT_RERA, CONTACT_INFO } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-primary">ELAN</span> The Presidential
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Experience the grandeur of {PROJECT_NAME}. Super Luxury Residences in {PROJECT_LOCATION}.
            </p>
            <p className="text-xs opacity-75">
              RERA No: {PROJECT_RERA} | haryanarera.gov.in
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xl font-semibold mb-2">Internal Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#overview" className="opacity-80 hover:text-primary transition-colors">Overview</a>
              <a href="#highlights" className="opacity-80 hover:text-primary transition-colors">Highlights</a>
              <a href="#amenities" className="opacity-80 hover:text-primary transition-colors">Amenities</a>
              <a href="#floor-plans" className="opacity-80 hover:text-primary transition-colors">Floor Plans</a>
              <a href="#gallery" className="opacity-80 hover:text-primary transition-colors">Gallery</a>
              <a href="#location" className="opacity-80 hover:text-primary transition-colors">Location</a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 opacity-80 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 opacity-80 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-3 opacity-80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{PROJECT_LOCATION}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} {PROJECT_NAME}. All rights reserved.</p>
          <p className="mt-2">Disclaimer: This is not the official website. The content is for information purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

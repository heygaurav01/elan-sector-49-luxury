import { useState, useEffect } from "react";
import { Menu, X, Phone, FileText } from "lucide-react";
import { Button } from "./ui/button";
import LeadForm from "./LeadForm";
import { NAV_ITEMS, CONTACT_INFO, PROJECT_NAME } from "@/lib/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {/* Using a text logo since I don't have the image logo handy after branch switch, but maintaining branding logic */}
          <div className="text-2xl font-bold font-serif text-primary">
            ELAN <span className={isScrolled ? "text-slate-800" : "text-white"}>The Presidential</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? "text-gray-800" : "text-white"
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className={`flex items-center gap-2 font-semibold hover:text-primary transition-colors ${isScrolled ? "text-gray-800" : "text-white"
              }`}
          >
            <Phone className="w-4 h-4" />
            {CONTACT_INFO.phoneDisplay}
          </a>

          <Button
            onClick={() => setShowLeadForm(true)}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            site visit
          </Button>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? "text-primary" : "text-white"}`} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 font-medium hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-2 text-gray-800 font-semibold"
          >
            <Phone className="w-4 h-4" />
            {CONTACT_INFO.phoneDisplay}
          </a>
          <Button onClick={() => {
            setShowLeadForm(true);
            setIsMobileMenuOpen(false);
          }} className="w-full">
            site visit
          </Button>
        </div>
      )}

      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-scale-in">
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Schedule Site Visit</h3>
            <LeadForm onSuccess={() => setShowLeadForm(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

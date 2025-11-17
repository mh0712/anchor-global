"use client";


import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin,
  ChevronUp
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import globalConfig from "@/config/globalConfig.json";
import { useLanguage } from "@/contexts/LanguageContext";


export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { phone, email } = globalConfig.globalContact;

  const quickLinks = [
    { name: t.navigation.about, href: "#about" },
    { name: t.navigation.services, href: "#services" },
    { name: t.navigation.network, href: "#network" },
    { name: t.navigation.contact, href: "#contact" }
  ];

  const services = t.footer.servicesList;

  const regions = t.footer.regions;

  return (
    <footer className="bg-[#003366] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image 
          src="/src13.jpg" 
          alt="Footer background" 
          fill 
          className="object-cover" 
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] to-[#003366]/90" />
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-[rgb(252,251,248)] rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                <Image src="/Picture1.png" alt="Company Logo" width={60} height={60} />
              </div>
              <span className="font-bold text-base">ANCHOR GLOBAL</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed text-xs">
              {t.footer.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-xs hover:text-[rgb(252,251,248)] transition-colors duration-200 cursor-pointer">
                <Phone className="w-3 h-3 mr-2" />
                <span className="font-medium">{phone}</span>
              </div>
              <div className="flex items-center text-xs hover:text-[rgb(252,251,248)] transition-colors duration-200 cursor-pointer">
                <Mail className="w-4 h-4 mr-3" />
                <span>{email}</span>
              </div>
              <div className="flex items-center text-sm hover:text-[rgb(252,251,248)] transition-colors duration-200">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{t.footer.globalMaritimeServices}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-xl mb-8 font-display">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-xl mb-8 font-display">{t.footer.services}</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm hover:text-[rgb(252,251,248)] transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-xl mb-8 font-display">{t.footer.globalPresence}</h4>
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="mr-3">
                    {region.code ? (
                      <ReactCountryFlag
                        countryCode={region.code}
                        svg
                        style={{ width: "1.2em", height: "1.2em", verticalAlign: "middle" }}
                        title={region.name}
                      />
                    ) : (
                      <span role="img" aria-label="Other Locations">🌍</span>
                    )}
                  </span>
                  <span className="text-primary-foreground/80">{region.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            {t.footer.copyright} | {t.footer.maritimeExcellence}
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-primary-foreground/60 text-xs">{t.footer.emergencySupport}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-accent hover:bg-primary-hover px-4 py-2"
            >
              <ChevronUp className="w-4 h-4 mr-2" />
              {t.footer.backToTop}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
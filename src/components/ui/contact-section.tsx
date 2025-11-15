"use client";

import regionalContactsData from "@/data/regionalContacts.json";
import Image from "next/image";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Globe as LucideGlobe,
  CheckCircle,
  MessageSquare,
  ArrowRight
} from "lucide-react";

// Custom Globe icon for PhoneInput with placeholder styling and 2px higher
const Globe = (props: any) => (
  <LucideGlobe
    {...props}
    color="#94a3b8"
    className="opacity-60"
    size={16}
    style={{ transform: "translateY(-2px)", ...(props.style || {}) }}
  />
);

// Animated arrows pointing to the form
const AnimatedArrows = () => {
  const arrowStyle: React.CSSProperties = {
    animation: 'slideX 5s cubic-bezier(0.4,0,0.2,1) infinite'
  };

  return (
    <div className="flex justify-center items-center py-20">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideX {
            0% {
              transform: translateX(-20px);
              opacity: 0.2;
            }
            50% {
              transform: translateX(10px);
              opacity: 0.2;
            }
            100% {
              transform: translateX(-20px);
              opacity: 0.2;
            }
          }
        `
      }} />
      <div className="flex items-center space-x-3">
        <ArrowRight className="w-10 h-10 text-[#003366]" style={arrowStyle} />
        <ArrowRight className="w-10 h-10 text-[#003366]" style={arrowStyle} />
        <ArrowRight className="w-10 h-10 text-[#003366]" style={arrowStyle} />
      </div>
    </div>
  );
};

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });


  const getNameOrCompanyError = (value: string, label: string) => {
    if (!value.trim()) return `${label} is required.`;
    // Only allow letters, spaces, hyphens, and apostrophes
    if (!/^[A-Za-z\s\-']+$/.test(value)) return `${label} cannot contain special characters or numbers.`;
    if (value.length < 2) return `${label} must be at least 2 characters.`;
    return '';
  };

  const getEmailError = (email: string) => {
    if (!email.trim()) return 'Email is required.';
    if (!email.includes('@')) return "Email must contain '@' (e.g. user@example.com).";
    const [local, domain] = email.split('@');
    if (!local) return 'Email must have text before the @.';
    if (!domain) return 'Email must have a domain after the @.';
    if (!domain.includes('.')) return 'Email domain must contain a dot (e.g. example.com).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email format is invalid (e.g. user@example.com).';
    return '';
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true;
    return isValidPhoneNumber(phone || "");
  };

  const validateForm = () => {
    const errors: any = {};
    const nameError = getNameOrCompanyError(formData.name, 'Full name');
    if (nameError) errors.name = nameError;
    const companyError = formData.company ? getNameOrCompanyError(formData.company, 'Company') : '';
    if (companyError) errors.company = companyError;
    const emailError = getEmailError(formData.email);
    if (emailError) errors.email = emailError;
    if (formData.phone && !validatePhone(formData.phone)) errors.phone = 'Please enter a valid phone number.';
    if (!formData.service.trim()) errors.service = 'Please select a service.';
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    } else if (formData.message.trim().length < 80) {
      errors.message = 'Message must be at least 120 characters to help us better understand your needs.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setFormErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
          duration: 5000,
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setFormErrors({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      } else {
        toast({
          title: "Failed to Send Message",
          description: result.error || "There was a problem sending your message.",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        duration: 5000,
      });
    }
    setIsSubmitting(false);
  };


  // Map emails and phone numbers from env vars (server-side only)
  const regionalContacts = (regionalContactsData as Array<{
    region: string;
    flag: string;
    phone: string;
    email: string;
    address: string;
    timezone: string;
  }>).map(contact => ({
    ...contact,
    email: typeof window === "undefined" ? (process.env[contact.email] || "") : "",
    phone: typeof window === "undefined" ? (process.env[contact.phone] || contact.phone) : contact.phone
  }));

  // For dropdown selection
  const [selectedCountry, setSelectedCountry] = useState(regionalContacts[0].region);

  // Get selected contact info
  const selectedContact = regionalContacts.find(c => c.region === selectedCountry);

  const globalContact = {
    email: process.env.NEXT_PUBLIC_GLOBAL_CONTACT_EMAIL || "info@anchorglobal.com",
    phone: process.env.NEXT_PUBLIC_GLOBAL_CONTACT_PHONE || "(727) 488-7351"
  };

  return (
    <section id="contact" className="pt-0 pb-8 md:pt-0 md:pb-10 bg-slate-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image 
          src="/src10.jpg" 
          alt="Contact background" 
          fill 
          className="object-cover" 
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/80 to-white/90" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Left: Header/Intro */}
          <div className="w-full lg:basis-2/5 lg:max-w-[38%] mb-4 lg:mb-0 animate-fade-in-up pl-2 lg:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-5">
              Contact Our Team
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl leading-snug mb-8">
              Ready to discuss your maritime needs? Our experienced team is available 24/7 
              to provide expert consultation and immediate assistance.
            </p>
            <div className="flex flex-col gap-2 mb-3 mt-2">
              <div className="flex items-center text-xs text-[#003366]">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">(727) 488-7351</span>
              </div>
              <div className="flex items-center text-xs text-[#003366]">
                <Mail className="w-4 h-4 mr-2" />
                <span className="font-medium">{globalContact.email}</span>
              </div>
              <div className="flex items-center text-xs text-[#003366]">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Worldwide Operations</span>
              </div>
            </div>
            <AnimatedArrows />
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:basis-3/5 lg:max-w-[62%]">
            <Card className="bg-white border border-slate-200 shadow-lg animate-fade-in-up">
              <CardHeader className="p-3 space-y-0">
                <CardTitle className="text-sm font-bold text-[#003366] mb-1">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-[11px] text-slate-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-3 pb-3 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div className="space-y-0.5">
                      <label htmlFor="name" className={`text-[11px] font-semibold ${formErrors.name ? 'text-red-600' : 'text-[#003366]'}`}>Full Name *</label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name" 
                        className={`h-7 bg-white border text-xs transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] text-slate-900 ${formErrors.name ? 'border-red-500' : 'border-slate-300'}`}
                        autoComplete="off"
                      />
                      {formErrors.name && <span className="text-red-500 text-[10px]">{formErrors.name}</span>}
                    </div>
                    <div className="space-y-0.5">
                      <label htmlFor="company" className="text-[11px] font-semibold text-[#003366]">Company</label>
                      <Input 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name" 
                        className="h-7 bg-white border-slate-300 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] text-xs"
                        autoComplete="off"
                      />
                      {formErrors.company && <span className="text-red-500 text-[10px]">{formErrors.company}</span>}
                    </div>
                  </div>

                  {/* Service and Country/Region on same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div className="mb-0">
                      <label htmlFor="service" className={`text-[11px] font-semibold mb-1 block ${formErrors.service ? 'text-red-600' : 'text-[#003366]'}`}>Service Interest</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full h-7 px-2 py-1 border rounded-lg bg-white text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] text-xs ${formErrors.service ? 'border-red-500' : 'border-slate-300'}`}
                        autoComplete="off"
                      >
                        <option value="">Select a service</option>
                        <option value="husbanding">Husbanding Agency</option>
                        <option value="ship-supply">Ship Supply</option>
                        <option value="crew-management">Crew Management</option>
                        <option value="logistics">Logistics</option>
                        <option value="ship-chandler">Ship Chandler</option>
                        <option value="ship-owner">Ship Owner Services</option>
                        <option value="other">Other</option>
                      </select>
                      {formErrors.service && <span className="text-red-500 text-[10px]">{formErrors.service}</span>}
                    </div>
                    <div className="mb-0">
                      <label htmlFor="country" className="text-[11px] font-semibold text-[#003366] mb-1 block">
                        Country / Region
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full h-7 px-2 py-1 border border-slate-300 rounded-lg bg-white text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] flex items-center justify-between text-left text-xs"
                        >
                          <div className="flex items-center">
                            {selectedContact && (
                              <ReactCountryFlag 
                                countryCode={selectedContact.flag} 
                                svg 
                                style={{ 
                                  width: "1.6em", 
                                  height: "1em",
                                  marginRight: "0.4rem"
                                }} 
                              />
                            )}
                            <span>{selectedCountry}</span>
                          </div>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg max-h-48 overflow-auto">
                            {regionalContacts.map((contact, idx) => (
                              <button
                                key={contact.region}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(contact.region);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full px-2 py-2 text-left hover:bg-slate-50 flex items-center transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg text-xs"
                              >
                                <ReactCountryFlag 
                                  countryCode={contact.flag} 
                                  svg 
                                  style={{ 
                                    width: "1em", 
                                    height: "1em",
                                    marginRight: "0.5rem"
                                  }} 
                                />
                                <span className="text-slate-900">{contact.region}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div className="space-y-0.5">
                      <label htmlFor="email" className={`text-[11px] font-semibold ${formErrors.email ? 'text-red-600' : 'text-[#003366]'}`}>Email Address *</label>
                      <Input 
                        id="email" 
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={selectedContact?.email || "your.email@example.com"}
                        className={`h-7 bg-white border text-xs transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] text-slate-900 ${formErrors.email ? 'border-red-500' : 'border-slate-300'}`}
                        autoComplete="off"
                        inputMode="email"
                      />
                      {formErrors.email && <span className="text-red-500 text-[10px]">{formErrors.email}</span>}
                    </div>
                    <div className="space-y-0.5">
                      <label htmlFor="phone" className={`text-[11px] font-semibold ${formErrors.phone ? 'text-red-600' : 'text-[#003366]'}`}>Phone Number</label>
                      <PhoneInput
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(value) => handleInputChange({
                          target: { name: "phone", value: value || "" }
                        } as React.ChangeEvent<HTMLInputElement>)}
                        placeholder="Enter phone number"
                        className={`h-7 bg-white border text-xs transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] text-slate-900 w-full rounded-lg px-2 ${formErrors.phone ? 'border-red-500' : 'border-slate-300'}`}
                        autoComplete="off"
                        international
                        internationalIcon={Globe}
                      />
                      {formErrors.phone && <span className="text-red-500 text-[10px]">{formErrors.phone}</span>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className={`text-[11px] font-semibold mb-1 block ${formErrors.message ? 'text-red-600' : 'text-[#003366]'}`}>Message *</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, vessel type, port location, and any specific needs..."
                      rows={4}
                      className={`bg-white border text-xs transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] resize-none text-slate-900 ${formErrors.message ? 'border-red-500' : 'border-slate-300'}`}
                      autoComplete="off"
                    />
                    {formErrors.message && <span className="text-red-500 text-[10px]">{formErrors.message}</span>}
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#003366] hover:bg-[#002244] text-white h-10 text-[13px] font-semibold shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Additional Info */}
          </div>
        </div>
      </div>
    </section>
  );
}
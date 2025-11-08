"use client";

import regionalContactsData from "@/data/regionalContacts.json";
import Image from "next/image";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Globe,
  CheckCircle,
  MessageSquare
} from "lucide-react";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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


  // Map emails from env vars (server-side only)
  const regionalContacts = (regionalContactsData as Array<{
    region: string;
    flag: string;
    phone: string;
    email: string;
    address: string;
    timezone: string;
  }>).map(contact => ({
    ...contact,
    email: typeof window === "undefined" ? (process.env[contact.email] || "") : ""
  }));

  // For dropdown selection
  const [selectedCountry, setSelectedCountry] = useState(regionalContacts[0].region);

  // Get selected contact info
  const selectedContact = regionalContacts.find(c => c.region === selectedCountry);

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
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

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left: Header/Intro */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up">
            <Badge className="mb-4 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-8">
              Contact Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Ready to discuss your maritime needs? Our experienced team is available 24/7 
              to provide expert consultation and immediate assistance.
            </p>
            {/* Optional image for visual enhancement */}
            <div className="mt-8 hidden md:block">
              <Image 
                src="/contact-visual.png" 
                alt="Contact Visual" 
                width={400} 
                height={300} 
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <Card className="bg-white border-2 border-slate-200 shadow-xl animate-fade-in-up">
              <CardHeader className="p-8 space-y-0">
                <CardTitle className="text-2xl font-bold text-[#003366] flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 mr-3 text-[rgb(252,251,248)]" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-[#003366]">
                        Full Name *
                      </label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name" 
                        required 
                        className="h-12 bg-white border-slate-300 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-[#003366]">
                        Company
                      </label>
                      <Input 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name" 
                        className="h-12 bg-white border-slate-300 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)]"
                      />
                    </div>
                  </div>

                  {/* Country Dropdown */}
                  <div className="mb-6">
                    <label htmlFor="country" className="text-sm font-semibold text-[#003366] mb-2 block">
                      Country / Region
                    </label>
                    <div className="relative">
                      {/* Custom Dropdown Button */}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full h-12 px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] flex items-center justify-between text-left"
                      >
                        <div className="flex items-center">
                          {selectedContact && (
                            <ReactCountryFlag 
                              countryCode={selectedContact.flag} 
                              svg 
                              style={{ 
                                width: "1.2em", 
                                height: "1.2em",
                                marginRight: "0.75rem"
                              }} 
                            />
                          )}
                          <span>{selectedCountry}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Options */}
                      {isDropdownOpen && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                          {regionalContacts.map((contact, idx) => (
                            <button
                              key={contact.region}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(contact.region);
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-3 py-3 text-left hover:bg-slate-50 flex items-center transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                            >
                              <ReactCountryFlag 
                                countryCode={contact.flag} 
                                svg 
                                style={{ 
                                  width: "1.2em", 
                                  height: "1.2em",
                                  marginRight: "0.75rem"
                                }} 
                              />
                              <span className="text-slate-900">{contact.region}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-[#003366]">
                        Email Address *
                      </label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={selectedContact?.email || "your.email@example.com"}
                        required 
                        className="h-12 bg-white border-slate-300 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-[#003366]">
                        Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={selectedContact?.phone || "+1 (555) 123-4567"}
                        className="h-12 bg-white border-slate-300 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)]"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="text-sm font-semibold text-[#003366] mb-2 block">
                      Service Interest
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)]"
                    >
                      <option value="">Select a service</option>
                      <option value="husbanding">Husbanding Services</option>
                      <option value="fuel">Fuel & Lubricants</option>
                      <option value="chandlery">Ship Chandlery</option>
                      <option value="logistics">Port Logistics</option>
                      <option value="crew">Crew Services</option>
                      <option value="military">Military Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="text-sm font-semibold text-[#003366] mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, vessel type, port location, and any specific needs..."
                      rows={6}
                      required 
                      className="bg-white border-slate-300 text-slate-900 transition-all duration-300 focus:ring-2 focus:ring-[rgb(252,251,248)] focus:border-[rgb(252,251,248)] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#003366] hover:bg-[#002244] text-white h-14 text-lg font-semibold shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
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
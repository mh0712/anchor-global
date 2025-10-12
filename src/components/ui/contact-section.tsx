"use client";

import Image from "next/image";
import { useState } from "react";
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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const regionalContacts = [
    {
      region: "United States",
      flag: "🇺🇸",
      phone: "+1 (832) 584-3574",
      email: "triton@tritonmaritime.us",
      address: "Houston, Texas",
      timezone: "CST (UTC-6)"
    },
    {
      region: "Mexico", 
      flag: "🇲🇽",
      phone: "+52 229 931 7640",
      email: "triton@tritonmaritime.mx",
      address: "Veracruz, Mexico",
      timezone: "CST (UTC-6)"
    },
    {
      region: "Brazil",
      flag: "🇧🇷", 
      phone: "+55 21 3614-0168",
      email: "purchase@tritonmaritime.com.br",
      address: "Rio de Janeiro, Brazil",
      timezone: "BRT (UTC-3)"
    }
  ];

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
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="mb-4 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-8">
            Contact Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your maritime needs? Our experienced team is available 24/7 
            to provide expert consultation and immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-2 border-slate-200 shadow-xl animate-fade-in-up">
              <CardHeader className="p-8 space-y-0">
                <CardTitle className="text-2xl font-bold text-[#003366] flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 mr-3 text-[rgb(252,251,248)]" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
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
                        placeholder="your.email@example.com" 
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
                        placeholder="+1 (555) 123-4567" 
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
            {/* Emergency Contact */}
            <Card className="bg-[#003366] border-2 border-[rgb(252,251,248)]/20 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="p-6 pb-4 space-y-0">
                <CardTitle className="text-lg flex items-center text-white font-bold mb-3">
                  <Clock className="w-5 h-5 mr-3 text-[rgb(252,251,248)]" />
                  24/7 Emergency Support
                </CardTitle>
                <CardDescription className="text-base text-white/80">
                  Immediate assistance for urgent maritime needs
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-2">
                <div className="space-y-4">
                  <div className="flex items-center text-sm font-medium text-white">
                    <Phone className="w-4 h-4 mr-3 text-[rgb(252,251,248)]" />
                    <span className="font-bold">+1 (832) 584-3574</span>
                  </div>
                  <div className="flex items-center text-sm text-white/90">
                    <Mail className="w-4 h-4 mr-3 text-[rgb(252,251,248)]" />
                    <span>emergency@tritonmaritime.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regional Contacts */}
            {regionalContacts.map((contact, index) => (
              <Card key={index} className="bg-white border-2 border-slate-200 animate-fade-in-up hover:shadow-xl hover:border-[rgb(252,251,248)] transition-all duration-500" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <CardHeader className="p-6 pb-4 space-y-0">
                  <CardTitle className="text-lg flex items-center text-[#003366] font-bold">
                    <span className="text-2xl mr-3">{contact.flag}</span>
                    {contact.region}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-2">
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-slate-700">
                      <Phone className="w-4 h-4 mr-3 text-slate-500 flex-shrink-0" />
                      <span className="font-medium">{contact.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Mail className="w-4 h-4 mr-3 text-slate-500 flex-shrink-0" />
                      <span className="break-all">{contact.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <MapPin className="w-4 h-4 mr-3 text-slate-500 flex-shrink-0" />
                      <span>{contact.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Globe className="w-4 h-4 mr-3 text-slate-500 flex-shrink-0" />
                      <span>{contact.timezone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Info */}
            <Card className="bg-[rgb(252,251,248)] text-[#003366] border-2 border-[rgb(252,251,248)] shadow-xl animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <CardContent className="p-8 pt-8">
                <h4 className="font-bold mb-6 text-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  Response Times
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#003366] rounded-full mr-3 animate-pulse flex-shrink-0"></div>
                    <span>Emergency: Immediate</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span>Standard Inquiries: Within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span>Quotes: Within 48 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span>Technical Support: Same day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
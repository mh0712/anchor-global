"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Ship, 
  Anchor, 
  Fuel, 
  ShoppingCart, 
  Users, 
  Shield
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Ship,
      title: "Husbanding Services",
      description: "Comprehensive port agency services for all vessel types including coordination with port authorities, customs clearance, and crew assistance.",
      features: ["Port Agency", "Customs Clearance", "Crew Services", "Documentation"]
    },
    {
      icon: Fuel,
      title: "Fuel & Lubricants",
      description: "Quality marine fuel supply and lubricants delivery with competitive pricing and certified products for optimal vessel performance.",
      features: ["Marine Gas Oil", "Heavy Fuel Oil", "Lubricants", "Bunker Services"]
    },
    {
      icon: ShoppingCart,
      title: "Ship Chandlery",
      description: "Complete ship supply services including provisions, deck equipment, engine spares, and safety equipment from trusted suppliers.",
      features: ["Provisions", "Deck Supplies", "Engine Parts", "Safety Equipment"]
    },
    {
      icon: Anchor,
      title: "Port Logistics",
      description: "Efficient cargo handling, warehousing, and transportation services ensuring smooth operations for all types of maritime cargo.",
      features: ["Cargo Handling", "Warehousing", "Transportation", "Customs Support"]
    },
    {
      icon: Users,
      title: "Crew Services",
      description: "Complete crew support including shore leave arrangements, medical assistance, repatriation services, and accommodation.",
      features: ["Shore Leave", "Medical Care", "Repatriation", "Accommodation"]
    },
    {
      icon: Shield,
      title: "Military Support",
      description: "Specialized services for military vessels with security clearances and expertise in handling sensitive military logistics.",
      features: ["Security Clearance", "Specialized Handling", "Confidential Logistics", "Military Protocols"]
    }
  ];

  const vesselTypes = [
    { 
      name: "Tankers", 
      description: "Oil, chemical, and LNG tankers",
      image: "/src4.jpg"
    },
    { 
      name: "Cruise Ships", 
      description: "Passenger and cruise vessels",
      image: "/src5.jpg"
    },
    { 
      name: "Supply Boats", 
      description: "Offshore support vessels",
      image: "/src6.jpg"
    },
    { 
      name: "Military Vessels", 
      description: "Naval and coast guard ships",
      image: "/src7.jpg"
    },
    { 
      name: "Cargo Ships", 
      description: "Container and bulk carriers",
      image: "/src8.jpg"
    },
    { 
      name: "Offshore Rigs", 
      description: "Drilling and production platforms",
      image: "/src9.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-4 py-2">
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            Comprehensive Maritime Services
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From husbanding services to complete ship supply solutions, we provide 
            end-to-end maritime support with unmatched quality and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white border-2 border-slate-200 hover:border-[rgb(252,251,248)] hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <CardHeader className="!space-y-0 !p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#001f3f] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg !mb-6">
                  <service.icon className="w-8 h-8 text-[rgb(252,251,248)]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#003366] group-hover:text-[#001f3f] transition-colors !mb-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-slate-600 leading-relaxed !mt-0">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="!px-8 !pb-8 !pt-0">
                <div className="flex flex-wrap gap-2 !mt-6">
                  {service.features.map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-slate-100 text-slate-700 hover:bg-[rgb(252,251,248)] hover:text-[#003366] transition-colors duration-200 text-xs font-medium px-3 py-1"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vessel Types Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Supporting All Vessel Types
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized expertise across all maritime sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vesselTypes.map((type, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80"
                style={{
                  animation: `scaleIn 0.6s ease-out ${index * 0.15}s forwards`,
                  opacity: 0
                }}
              >
                {/* Image */}
                <Image 
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/50 to-transparent group-hover:from-[#001f3f]/95 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-[rgb(252,251,248)] transition-colors duration-300">
                    {type.name}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>
                  
                  {/* Hover Line */}
                  <div className="w-0 h-1 bg-[rgb(252,251,248)] mt-2 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

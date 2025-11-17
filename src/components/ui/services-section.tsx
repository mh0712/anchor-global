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
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Ship,
      title: t.services.hubanding.title,
      description: t.services.hubanding.description,
      features: t.services.hubandingFeatures
    },
    {
      icon: Fuel,
      title: t.services.fuel.title,
      description: t.services.fuel.description,
      features: t.services.fuel.features
    },
    {
      icon: ShoppingCart,
      title: t.services.chandler.title,
      description: t.services.chandler.description,
      features: t.services.chandlerFeatures
    },
    {
      icon: Anchor,
      title: t.services.logistics.title,
      description: t.services.logistics.description,
      features: t.services.logisticsFeatures
    },
    {
      icon: Users,
      title: t.services.crew.title,
      description: t.services.crew.description,
      features: t.services.crewFeatures
    },
    {
      icon: Shield,
      title: t.services.military.title,
      description: t.services.military.description,
      features: t.services.military.features
    }
  ];

  const vesselTypes = [
    { 
      name: t.services.vesselTypes.tankers.name, 
      description: t.services.vesselTypes.tankers.description,
      image: "/tanker-ships.jpg"
    },
    { 
      name: t.services.vesselTypes.cruiseShips.name, 
      description: t.services.vesselTypes.cruiseShips.description,
      image: "/cruise-ships.jpg"
    },
    { 
      name: t.services.vesselTypes.supplyBoats.name, 
      description: t.services.vesselTypes.supplyBoats.description,
      image: "/supply-boats.jpg"
    },
    { 
      name: t.services.vesselTypes.militaryVessels.name, 
      description: t.services.vesselTypes.militaryVessels.description,
      image: "/military-vessels.jpg"
    },
    { 
      name: t.services.vesselTypes.cargoShips.name, 
      description: t.services.vesselTypes.cargoShips.description,
      image: "/src8.jpg"
    },
    { 
      name: t.services.vesselTypes.offshoreRigs.name, 
      description: t.services.vesselTypes.offshoreRigs.description,
      image: "/src9.jpg"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <Badge className="mb-2 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-2 py-1 text-xs">
            {t.services.badge}
          </Badge>
          <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-3">
            {t.services.title}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white border border-slate-200 hover:border-[rgb(252,251,248)] hover:shadow-lg transition-all duration-300 group overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <CardHeader className="!space-y-0 !p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#003366] to-[#001f3f] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg !mb-3">
                  <service.icon className="w-5 h-5 text-[rgb(252,251,248)]" />
                </div>
                <CardTitle className="text-sm font-bold text-[#003366] group-hover:text-[#001f3f] transition-colors !mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-xs text-slate-600 leading-relaxed !mt-0">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="!px-4 !pb-4 !pt-0">
                <div className="flex flex-wrap gap-1 !mt-3">
                  {service.features.map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-slate-100 text-slate-700 hover:bg-[rgb(252,251,248)] hover:text-[#003366] transition-colors duration-200 text-xs font-medium px-2 py-0.5"
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
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-3">
              {t.services.vesselTypesTitle}
            </h3>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              {t.services.vesselTypesDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vesselTypes.map((type, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-56"
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
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-[rgb(252,251,248)] transition-colors duration-300">
                    {type.name}
                  </h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {type.description}
                  </p>
                  {/* Hover Line */}
                  <div className="w-0 h-1 bg-[rgb(252,251,248)] mt-2 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

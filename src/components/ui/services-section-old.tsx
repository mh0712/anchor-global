"use client";

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
    { name: "Tankers", description: "Oil, chemical, and LNG tankers" },
    { name: "Cruise Ships", description: "Passenger and cruise vessels" },
    { name: "Supply Boats", description: "Offshore support vessels" },
    { name: "Military Vessels", description: "Naval and coast guard ships" },
    { name: "Cargo Ships", description: "Container and bulk carriers" },
    { name: "Offshore Rigs", description: "Drilling and production platforms" }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 font-medium">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 font-display">
            Comprehensive Maritime Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From husbanding services to complete ship supply solutions, we provide 
            end-to-end maritime support with unmatched quality and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="card-professional group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-maritime rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500 shadow-glow float-animation">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors font-display">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vessel Types */}
        <div className="bg-gradient-maritime rounded-3xl p-10 md:p-16 text-center shadow-premium animate-scale-in">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 font-display">
            Supporting All Vessel Types
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {vesselTypes.map((type, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <h4 className="text-xl font-bold text-primary-foreground mb-3 font-display group-hover:text-accent transition-colors">
                  {type.name}
                </h4>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
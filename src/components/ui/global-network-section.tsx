"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap";
import globalConfig from "@/config/globalConfig.json";
import { useLanguage } from "@/contexts/LanguageContext";

export function GlobalNetworkSection() {
  const { t } = useLanguage();
  const { phone: globalPhone, email: globalEmail } = globalConfig.globalContact;
  const regions = [
    {
      region: "North America",
      countries: [
        {
          name: "United States",
          flag: "🇺🇸",
          cities: ["New York", "Miami", "Los Angeles", "Houston", "New Orleans"],
          services: ["Husbanding Agency", "Ship Supply", "Logistics"],
          description: "Operating in East Coast, West Coast & Gulf of Mexico",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        }
      ]
    },
    {
      region: "Central America & Caribbean",
      countries: [
        {
          name: "Mexico",
          flag: "🇲🇽",
          cities: ["Veracruz", "Tampico", "Manzanillo"],
          services: ["Ship Owner", "Husbanding Agency", "Ship Chandler", "Logistics"],
          description: "Comprehensive maritime services across major Mexican ports",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        },
        {
          name: "Trinidad & Tobago",
          flag: "🇹🇹",
          cities: ["Port of Spain"],
          services: ["Husbanding Agency", "Ship Supply", "Crew Management", "Logistics"],
          description: "Strategic Caribbean hub for maritime operations",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        }
      ]
    },
    {
      region: "South America",
      countries: [
        {
          name: "Brazil",
          flag: "🇧🇷",
          cities: ["Santos", "Rio de Janeiro", "Salvador"],
          services: ["Husbanding Agency", "Ship Supply", "Crew Management", "Logistics"],
          description: "Full-service operations across Brazil's major ports",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        },
        {
          name: "Guyana",
          flag: "🇬🇾",
          cities: ["Georgetown"],
          services: ["Husbanding Agency", "Ship Supply", "Logistics"],
          description: "Gateway services for South American operations",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        }
      ]
    },
    {
      region: "Europe",
      countries: [
        {
          name: "Portugal",
          flag: "🇵🇹",
          cities: ["Lisbon", "Porto"],
          services: ["Husbanding Agency", "Ship Supply", "Crew Management", "Logistics"],
          description: "Strategic European Atlantic gateway",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        },
        {
          name: "Spain",
          flag: "🇪🇸",
          cities: ["Barcelona", "Valencia", "Bilbao"],
          services: ["Husbanding Agency", "Ship Supply", "Crew Management", "Logistics"],
          description: "Comprehensive services across Spanish Mediterranean and Atlantic ports",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        }
      ]
    },
    {
      region: "Middle East",
      countries: [
        {
          name: "Lebanon",
          flag: "🇱🇧",
          cities: ["Beirut", "Tripoli"],
          services: ["Husbanding Agency", "Ship Supply", "Crew Management", "Logistics"],
          description: "Eastern Mediterranean maritime services hub",
          contact: {
            phone: globalPhone,
            email: globalEmail
          }
        }
      ]
    }
  ];

  return (
    <section id="network" className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-2 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-2 py-1 text-xs">
            {t.network.badge}
          </Badge>
          <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-3">
            {t.network.title}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.network.description}
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="mb-12">
          <InteractiveWorldMap />
        </div>
      </div>
    </section>
  );
}

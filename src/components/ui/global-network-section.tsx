import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap";

export function GlobalNetworkSection() {
  const regions = [
    {
      region: "North America",
      countries: [
        {
          name: "United States",
          flag: "🇺🇸",
          cities: ["Houston", "New Orleans", "Miami", "Los Angeles", "New York", "Seattle", "Portland", "San Francisco", "Long Beach"],
          contact: {
            phone: "+1 (832) 584-3574",
            email: "usa@anchorglobal.com"
          }
        },
        {
          name: "Canada",
          flag: "🇨🇦",
          cities: ["Vancouver", "Halifax", "Montreal", "Quebec City", "Toronto"],
          contact: {
            phone: "+1 (604) 555-0100",
            email: "canada@anchorglobal.com"
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
          cities: ["Veracruz", "Tampico", "Altamira", "Coatzacoalcos", "Manzanillo", "Lázaro Cárdenas"],
          contact: {
            phone: "+52 229 931 7640",
            email: "mexico@anchorglobal.com"
          }
        },
        {
          name: "Panama",
          flag: "🇵🇦",
          cities: ["Panama City", "Colón", "Balboa"],
          contact: {
            phone: "+507 555-0100",
            email: "panama@anchorglobal.com"
          }
        },
        {
          name: "Costa Rica",
          flag: "🇨🇷",
          cities: ["Puerto Limón", "Puntarenas"],
          contact: {
            phone: "+506 555-0100",
            email: "costarica@anchorglobal.com"
          }
        },
        {
          name: "Jamaica",
          flag: "🇯🇲",
          cities: ["Kingston", "Montego Bay"],
          contact: {
            phone: "+1 876 555-0100",
            email: "jamaica@anchorglobal.com"
          }
        },
        {
          name: "Trinidad & Tobago",
          flag: "🇹🇹",
          cities: ["Port of Spain", "Point Lisas"],
          contact: {
            phone: "+1 868 555-0100",
            email: "trinidad@anchorglobal.com"
          }
        },
        {
          name: "Dominican Republic",
          flag: "🇩🇴",
          cities: ["Santo Domingo", "Puerto Plata"],
          contact: {
            phone: "+1 809 555-0100",
            email: "dominicanrep@anchorglobal.com"
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
          cities: ["Santos", "Rio de Janeiro", "Vitória", "Salvador", "Recife", "Manaus"],
          contact: {
            phone: "+55 21 3614-0168",
            email: "brasil@anchorglobal.com"
          }
        },
        {
          name: "Colombia",
          flag: "🇨🇴",
          cities: ["Cartagena", "Barranquilla", "Buenaventura"],
          contact: {
            phone: "+57 555-0100",
            email: "colombia@anchorglobal.com"
          }
        },
        {
          name: "Venezuela",
          flag: "🇻🇪",
          cities: ["La Guaira", "Maracaibo", "Puerto Cabello"],
          contact: {
            phone: "+58 555-0100",
            email: "venezuela@anchorglobal.com"
          }
        },
        {
          name: "Guyana",
          flag: "🇬🇾",
          cities: ["Georgetown", "New Amsterdam"],
          contact: {
            phone: "+592 555-0100",
            email: "guyana@anchorglobal.com"
          }
        },
        {
          name: "Argentina",
          flag: "🇦🇷",
          cities: ["Buenos Aires", "Rosario", "Bahía Blanca"],
          contact: {
            phone: "+54 555-0100",
            email: "argentina@anchorglobal.com"
          }
        },
        {
          name: "Chile",
          flag: "🇨🇱",
          cities: ["Valparaíso", "San Antonio", "Iquique"],
          contact: {
            phone: "+56 555-0100",
            email: "chile@anchorglobal.com"
          }
        },
        {
          name: "Peru",
          flag: "🇵🇪",
          cities: ["Callao", "Paita", "Matarani"],
          contact: {
            phone: "+51 555-0100",
            email: "peru@anchorglobal.com"
          }
        },
        {
          name: "Ecuador",
          flag: "🇪🇨",
          cities: ["Guayaquil", "Manta", "Puerto Bolívar"],
          contact: {
            phone: "+593 555-0100",
            email: "ecuador@anchorglobal.com"
          }
        }
      ]
    }
  ];

  return (
    <section id="network" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-4 py-2">
            Global Presence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            Our Americas-Wide Network
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive maritime services for vessels worldwide. 
            With operations in 15+ countries and 75+ major ports, Anchor Global delivers seamless support wherever your operations take you.
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="mb-20">
          <InteractiveWorldMap />
        </div>
      </div>
    </section>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { InteractiveWorldMap } from "@/components/InteractiveWorldMap";
import { useLanguage } from "@/contexts/LanguageContext";

export function GlobalNetworkSection() {
  const { t } = useLanguage();

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

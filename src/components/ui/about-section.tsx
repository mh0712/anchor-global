"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Globe, 
  Clock, 
  Shield,
  CheckCircle,
  Target,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t.about.features.experience.title.split(' ')[0], // "25+"
      description: t.about.features.experience.description
    },
    {
      icon: Shield,
      title: t.about.features.reliability.title,
      description: t.about.features.reliability.description
    },
    {
      icon: Globe,
      title: t.about.features.network.title,
      description: t.about.features.network.description
    },
    {
      icon: Clock,
      title: t.about.features.support.title,
      description: t.about.features.support.description
    }
  ];

  const achievements = [
    t.about.stats.experience,
    t.about.achievements[0],
    t.about.achievements[1],
    t.about.achievements[2],
    t.about.achievements[3],
    t.about.achievements[4]
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/src2.jpg" 
          alt="Port operations background" 
          fill 
          className="object-cover" 
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-slate-50/60 to-white/80" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Left Column - Content */}
          <div className="space-y-4">
            <div className="animate-fade-in-up">
              <Badge className="mb-2 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-2 py-1 text-xs">
                {t.about.badge}
              </Badge>
              <h2 className="text-xl md:text-2xl font-bold text-[#003366] mb-3 leading-tight">
                {t.about.title}
              </h2>
              <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                {t.about.description} 
                husbanding services worldwide. From the northern ports of Canada to the southern coasts of Argentina, and across major maritime hubs in Europe and the Middle East, our extensive experience in the maritime industry—combined with our commitment to quality and efficiency—makes us the trusted partner for vessel operators around the globe.
              </p>
              
              <p className="text-xs text-slate-600 mb-4">
                {t.about.qualityDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
              {/* Value Cards Vertical Stack - Smaller */}
              <div className="flex flex-col gap-2">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-2 p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                    style={{animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`, opacity: 0}}
                  >
                    <div className="w-6 h-6 bg-[rgb(252,251,248)]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(252,251,248)]/30 transition-colors duration-300 mt-0.5">
                      <value.icon className="w-3 h-3 text-[#003366]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#003366] mb-0.5 text-[11px]">{value.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Key Achievements Card - Smaller and Top Aligned */}
              <Card className="bg-white shadow-lg animate-fade-in-up overflow-hidden h-full flex flex-col justify-start">
                <CardContent className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-bold text-[#003366] mb-2 flex items-center">
                    <Award className="w-4 h-4 text-[rgb(252,251,248)] mr-2" />
                    Key Achievements
                  </h3>
                  <div className="space-y-1.5">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-3 h-3 text-[rgb(252,251,248)] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-[11px] md:text-xs leading-snug">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button className="bg-[#003366] hover:bg-[#002244] text-white px-4 py-3 text-xs font-semibold shadow-lg transition-all duration-300 hover:scale-105 group">
              <span className="flex items-center">
                {t.about.learnMoreButton}
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-3">
            {/* Featured Image */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl group animate-scale-in">
              <Image 
                src="/src3.jpg" 
                alt="Maritime port operations" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional Maritime Services
                </h3>
                <p className="text-white/90 text-sm">
                  Supporting all vessel types across the Americas, Europe, and Middle East
                </p>
              </div>
            </div>
            {/* Stats Grid Only */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: "22+", label: t.hero.stats.years, color: "bg-[#003366]" },
                { value: "15+", label: t.hero.stats.countries, color: "bg-[rgb(252,251,248)]" },
                { value: "75+", label: t.hero.stats.majorPorts, color: "bg-[#003366]" },
                { value: "24/7", label: t.hero.stats.support, color: "bg-[rgb(252,251,248)]" }
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className={`text-center p-6 ${stat.color} border-0 hover:scale-105 transition-transform duration-300`}
                  style={{animation: `scaleIn 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0}}
                >
                  <CardContent className="p-0">
                    <div className={`text-4xl font-bold mb-2 ${stat.color === 'bg-[#003366]' ? 'text-white' : 'text-[#003366]'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium ${stat.color === 'bg-[#003366]' ? 'text-white/80' : 'text-[#003366]/80'}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

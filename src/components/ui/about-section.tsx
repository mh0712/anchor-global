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

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering the highest quality services with attention to every detail"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable service you can count on 24/7"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Extensive network across 15+ countries and 75+ ports worldwide"
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Quick turnaround times with streamlined processes"
    }
  ];

  const achievements = [
    "22+ years of maritime industry experience",
    "Serving 15+ countries across the globe",
    "75+ major ports worldwide",
    "Military vessel security clearances",
    "24/7 emergency response capability",
    "ISO-certified quality management"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-[rgb(252,251,248)] text-[#003366] hover:bg-[rgb(242,241,238)] font-semibold px-4 py-2 text-sm">
                About Anchor Global
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 leading-tight">
                22 Years of Maritime Excellence
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                At Anchor Global, we have built our reputation on delivering exceptional 
                husbanding services worldwide. From the northern ports of Canada to the southern coasts of Argentina, and across major maritime hubs in Europe and the Middle East, our extensive experience in the maritime industry—combined with our commitment to quality and efficiency—makes us the trusted partner for vessel operators around the globe.
              </p>
              
              <p className="text-base text-slate-600 mb-8">
                We work with carefully selected teams and products, ensuring that every service 
                we provide meets the highest standards. Our comprehensive approach covers everything 
                from port agency services to complete ship supply solutions, all backed by our 
                deep understanding of local regulations and international maritime standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                  style={{animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`, opacity: 0}}
                >
                  <div className="w-12 h-12 bg-[rgb(252,251,248)]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(252,251,248)]/30 transition-colors duration-300 mt-1">
                    <value.icon className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#003366] mb-3 text-base">{value.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 group">
              <span className="flex items-center">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group animate-scale-in">
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

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "22+", label: "Years Experience", color: "bg-[#003366]" },
                { value: "15+", label: "Countries", color: "bg-[rgb(252,251,248)]" },
                { value: "75+", label: "Major Ports", color: "bg-[#003366]" },
                { value: "24/7", label: "Support", color: "bg-[rgb(252,251,248)]" }
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

            {/* Achievements */}
            <Card className="bg-white shadow-lg animate-fade-in-up overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#003366] mb-6 flex items-center">
                  <Award className="w-6 h-6 text-[rgb(252,251,248)] mr-3" />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[rgb(252,251,248)] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

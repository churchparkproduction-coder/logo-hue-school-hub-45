import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SCHOOL_CONFIG } from "@/lib/config";

const logoImage = "/lovable-uploads/e4c0b133-5288-42ac-a554-48584cdcec13.png";

const Hero = () => {
  return (
    <section id="home" className="section-hero relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-bronze/20"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Where Excellence
                <span className="block text-gradient">Meets Education</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                {SCHOOL_CONFIG.description} 
                Join our community where every child learns, plays, and grows to their full potential.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-2 mx-auto">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-primary">{SCHOOL_CONFIG.stats.students}</p>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-2 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-primary">{SCHOOL_CONFIG.stats.teachers}</p>
                <p className="text-sm text-muted-foreground">Teachers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-2 mx-auto">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-primary">{SCHOOL_CONFIG.stats.yearsOfService}</p>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-golden group" asChild>
                <Link to="/admissions">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/schedule-visit">
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </div>

          {/* Logo Display */}
          <div className="flex items-center justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-3xl opacity-20 scale-110"></div>
              
              {/* Main logo */}
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-golden border border-gold/20">
                <img 
                  src={logoImage} 
                  alt={`${SCHOOL_CONFIG.name} - ${SCHOOL_CONFIG.tagline}`} 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain animate-golden-glow"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-bronze rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
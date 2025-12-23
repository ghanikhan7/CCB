import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, GraduationCap, School } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--secondary)) 0%, transparent 50%)`,
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-muted border border-secondary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-subtle" />
            <span className="text-sm font-medium text-secondary">India's First Company-Driven Skill Campus</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Where Companies Train
            <br />
            <span className="text-gradient-primary">Their Future Workforce</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            CCB bridges colleges, students, and companies through company-led training before hiring. 
            Real engineers. Real skills. Real jobs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <a href="#contact" className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Partner as a Company
              </a>
            </Button>
            <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
              <a href="#contact" className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Join as a Student
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
              <a href="#contact" className="flex items-center gap-2">
                <School className="w-5 h-5" />
                Collaborate as a College
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-6">Bridging the gap between academia and industry</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="stat-number text-primary">65%</div>
                <p className="text-sm text-muted-foreground mt-1">Graduates not job-ready</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="stat-number text-primary">6-12</div>
                <p className="text-sm text-muted-foreground mt-1">Months to retrain freshers</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="stat-number text-secondary">03-09</div>
                <p className="text-sm text-muted-foreground mt-1">Month with CCB training</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

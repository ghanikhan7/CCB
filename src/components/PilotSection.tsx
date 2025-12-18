import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Rocket, Gift, ArrowRight } from "lucide-react";

const pilotDetails = [
  {
    icon: Users,
    title: "30-40 Students",
    description: "Per pilot batch—focused, manageable cohorts",
  },
  {
    icon: Calendar,
    title: "8-12 Weeks",
    description: "Intensive training duration",
  },
  {
    icon: Gift,
    title: "TOP Students Free Seats",
    description: "Per pilot for social impact",
  },
  {
    icon: Rocket,
    title: "Quick Start",
    description: "Launch within 4 weeks of partnership",
  },
];

const PilotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pilot" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container-narrow mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Pilot Program</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Start Small, Scale Fast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in proving value first. Our pilot program lets you experience the CCB model with minimal commitment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - How it works */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">How the Pilot Works</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Company Provides Engineers</h4>
                  <p className="text-muted-foreground">Your engineers define curriculum and conduct training sessions.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">CCB Provides Everything Else</h4>
                  <p className="text-muted-foreground">We handle venue, students, coordination, and operations.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hire the Best Performers</h4>
                  <p className="text-muted-foreground">After training, hire students who meet your standards.</p>
                </div>
              </div>
            </div>

            <Button variant="cta" size="lg" className="mt-8 w-full sm:w-auto" asChild>
              <a href="#contact">
                Start a Pilot with CCB
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {pilotDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="card-elevated p-5 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-muted text-secondary flex items-center justify-center mx-auto mb-4">
                  <detail.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{detail.title}</h4>
                <p className="text-sm text-muted-foreground">{detail.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-secondary-muted border border-secondary/20 text-center"
        >
          <p className="text-lg text-foreground">
            <span className="font-semibold">Zero risk, proven results.</span>{" "}
            <span className="text-muted-foreground">If you're not satisfied with the pilot, there's no obligation to continue.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, School, ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--secondary)) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary-foreground)) 0%, transparent 50%)`,
        }}
      />

      <div className="container-narrow mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Bridge the Gap?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you're a company, student, or college—CCB has a path for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
          >
            <Building2 className="w-10 h-10 mb-4 text-primary-foreground" />
            <h3 className="text-xl font-bold mb-2">Companies</h3>
            <p className="text-primary-foreground/80 mb-6">
              Looking to hire better freshers without months of training?
            </p>
            <Button variant="heroOutline" className="w-full" asChild>
              <a href="#contact">
                Partner with CCB
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-secondary text-secondary-foreground"
          >
            <GraduationCap className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Students</h3>
            <p className="text-secondary-foreground/80 mb-6">
              Want to learn real skills from working engineers?
            </p>
            <Button variant="outline" className="w-full bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 border-0" asChild>
              <a href="#contact">
                Join as a Student
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
          >
            <School className="w-10 h-10 mb-4 text-primary-foreground" />
            <h3 className="text-xl font-bold mb-2">Colleges</h3>
            <p className="text-primary-foreground/80 mb-6">
              Looking to improve placements and industry connections?
            </p>
            <Button variant="heroOutline" className="w-full" asChild>
              <a href="#contact">
                Collaborate with Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

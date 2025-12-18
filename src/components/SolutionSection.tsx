import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Wrench, Briefcase, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Companies Define Skills",
    description: "Partner companies identify the exact technical and soft skills they need in freshers. No generic curriculum—real requirements.",
  },
  {
    number: "02",
    icon: Users,
    title: "Engineers Train Students",
    description: "Working engineers from partner companies come to CCB campus and train students directly. Real-world expertise, not textbook theory.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Students Work on Real Tools",
    description: "Students learn the actual tools, workflows, and processes used at companies. They build projects that mirror real work.",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Companies Hire Pre-Trained Talent",
    description: "Companies hire students who already know their systems. Onboarding time drops from months to days.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            How CCB Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, effective model that benefits everyone. Training happens <span className="text-secondary font-semibold">before</span> hiring—not after.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-elevated p-6 h-full flex flex-col">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-primary/10 font-heading">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-primary-muted flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-2 top-24 z-10">
                      <ArrowRight className="w-4 h-4 text-primary/40" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-primary text-primary-foreground text-center"
        >
          <p className="text-lg md:text-xl font-medium">
            The key insight: <span className="font-bold">Training happens before hiring.</span>
          </p>
          <p className="text-primary-foreground/80 mt-2">
            Companies get job-ready freshers. Students get relevant skills. Colleges get better placements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Clock, Wallet } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    stat: "65%",
    title: "Graduates Not Job-Ready",
    description: "Most engineering graduates lack the practical skills companies actually need. Academic curricula don't match industry requirements.",
    color: "primary",
  },
  {
    icon: Clock,
    stat: "6-12 Mo",
    title: "Retraining Fresh Hires",
    description: "Companies spend 6-12 months training freshers on basic workplace tools and workflows. This is costly and inefficient.",
    color: "destructive",
  },
  {
    icon: Wallet,
    stat: "₹ Lakhs",
    title: "Wasted on Degrees",
    description: "Students invest lakhs in degrees but graduate without real skills. They struggle to find jobs that match their education investment.",
    color: "primary",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            The Skills Gap Crisis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            India produces millions of engineering graduates every year, but most aren't ready for the workplace. 
            Here's why this matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 lg:p-8 group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                problem.color === "destructive" 
                  ? "bg-destructive/10 text-destructive" 
                  : "bg-primary-muted text-primary"
              }`}>
                <problem.icon className="w-7 h-7" />
              </div>
              
              <div className={`stat-number mb-2 ${
                problem.color === "destructive" ? "text-destructive" : "text-primary"
              }`}>
                {problem.stat}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            The result? <span className="text-primary">Companies struggle to find talent.</span>{" "}
            <span className="text-secondary">Students struggle to find jobs.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

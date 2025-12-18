import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, BookOpen, CreditCard, Building, XCircle } from "lucide-react";

const differentiators = [
  {
    icon: UserCheck,
    title: "Engineers Teach",
    description: "Not career trainers—actual working engineers from partner companies share real-world knowledge.",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Company-Driven Curriculum",
    description: "Training content is designed by companies based on their actual requirements, not generic syllabi.",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Pay-After-Success Mindset",
    description: "We believe in outcome-based models. Students don't bear heavy upfront costs.",
    highlight: false,
  },
  {
    icon: Building,
    title: "Campus-to-Company Bridge",
    description: "We're not replacing colleges—we're bridging them to companies through practical skill training.",
    highlight: true,
  },
];

const WhyDifferentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why CCB</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not another coaching institute. CCB is a workforce innovation company built on transparency and results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl border ${
                item.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card border-border"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                item.highlight 
                  ? "bg-primary-foreground/20 text-primary-foreground" 
                  : "bg-primary-muted text-primary"
              }`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                item.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {item.title}
              </h3>
              <p className={item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Not a coaching center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-destructive/5 border border-destructive/20"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">We Are NOT a Coaching Center</h4>
              <p className="text-muted-foreground">
                CCB doesn't promise "100% placements" or sell courses. We facilitate direct company-student connections through practical training. 
                Our model is transparent, pilot-based, and company-first.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;

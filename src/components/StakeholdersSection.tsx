import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, GraduationCap, School, Check } from "lucide-react";

const stakeholders = {
  companies: {
    icon: Building2,
    title: "For Companies",
    description: "Get job-ready freshers without months of training investment.",
    benefits: [
      "Hire pre-trained talent familiar with your tools",
      "Reduce onboarding time from months to days",
      "Lower training costs significantly",
      "CSR-friendly skill development initiative",
      "Access to motivated, screened candidates",
      "Shape curriculum to your exact needs",
    ],
    color: "primary",
  },
  students: {
    icon: GraduationCap,
    title: "For Students",
    description: "Learn real skills from working engineers, not just theory.",
    benefits: [
      "Learn from actual company engineers",
      "No heavy upfront fees—pay after success",
      "Work on real projects and tools",
      "Get interview preparation",
      "Direct pathway to job opportunities",
      "Industry-recognized skill certification",
    ],
    color: "secondary",
  },
  colleges: {
    icon: School,
    title: "For Colleges",
    description: "Improve placements and build industry connections.",
    benefits: [
      "Better placement statistics",
      "Direct industry exposure for students",
      "Skill labs and seminars on campus",
      "Enhanced institutional reputation",
      "Partnership with leading companies",
      "Modern curriculum alignment",
    ],
    color: "primary",
  },
};

type StakeholderKey = keyof typeof stakeholders;

const StakeholdersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<StakeholderKey>("companies");

  const active = stakeholders[activeTab];
  const Icon = active.icon;

  return (
    <section id="stakeholders" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Everyone Wins with CCB
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our model creates value for all stakeholders in the education-to-employment journey.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {(Object.keys(stakeholders) as StakeholderKey[]).map((key) => {
            const stakeholder = stakeholders[key];
            const TabIcon = stakeholder.icon;
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? stakeholder.color === "secondary"
                      ? "bg-secondary text-secondary-foreground shadow-md"
                      : "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-accent border border-border"
                }`}
              >
                <TabIcon className="w-5 h-5" />
                {stakeholder.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card-elevated p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Title and description */}
            <div className="md:w-1/3">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                active.color === "secondary" 
                  ? "bg-secondary-muted text-secondary" 
                  : "bg-primary-muted text-primary"
              }`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {active.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {active.description}
              </p>
            </div>

            {/* Right side - Benefits */}
            <div className="md:w-2/3">
              <div className="grid sm:grid-cols-2 gap-4">
                {active.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-accent/50"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      active.color === "secondary" 
                        ? "bg-secondary text-secondary-foreground" 
                        : "bg-primary text-primary-foreground"
                    }`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakeholdersSection;

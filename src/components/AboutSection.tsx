import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Target, Linkedin } from "lucide-react";
const founders = [{
  name: "MOHAMMED ABDUL GHANI ALI KHAN",
  role: "Founder",
  description: "Passionate about bridging the industry-academia gap through innovative workforce solutions."
}, {
  name: "SUMMAIYA UNNISA BEGUM",
  role: "Founder",
  description: "Committed to creating meaningful employment opportunities for engineering graduates."
}];
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - About CCB */}
          <motion.div ref={ref} initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.5
        }}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
              Company Champs Bridge
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                CCB (Company Champs Bridge Pvt. Ltd.) is India's First Company-Driven Skill Campus. 
                We're building the bridge between academia and industry that India desperately needs.
              </p>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-accent">
                <div className="w-10 h-10 rounded-lg bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Mission</h4>
                  <p className="text-muted-foreground">
                    Make students industry-ready before they apply for jobs—not after they're hired.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-accent">
                <div className="w-10 h-10 rounded-lg bg-secondary-muted text-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Headquartered in Hyderabad, Telangana—the heart of India's tech ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Founders */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Leadership</span>
            <h3 className="text-2xl font-bold text-foreground mt-4 mb-6">
              Meet the Founders
            </h3>
            
            <div className="space-y-4">
              {founders.map((founder, index) => <motion.div key={founder.name} initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }} className="card-elevated p-6">
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{founder.name}</h4>
                        <p className="font-medium text-base text-ring">{founder.role}</p>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-accent transition-colors" aria-label="LinkedIn profile">
                        <Linkedin className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">{founder.description}</p>
                  </div>
                </motion.div>)}
            </div>

            <p className="mt-6 text-sm text-muted-foreground italic">
              "We started CCB because we saw the same problem from both sides—as engineers who trained freshers, 
              and as job seekers who struggled despite good degrees."
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
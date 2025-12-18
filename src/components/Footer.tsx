import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/ccd logo.jpeg" 
                alt="CCB Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <span className="font-heading font-bold text-lg">CCB</span>
              </div>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Company Champs Bridge Pvt. Ltd.
              <br />
              India's First Company-Driven Skill Campus
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/company-champs-bridge-ccb-313062395" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/companychampsB" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:companychampsbridge@gmail.com" 
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#problem" className="text-background/70 hover:text-background transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-background/70 hover:text-background transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#pilot" className="text-background/70 hover:text-background transition-colors">
                  Pilot Program
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>Hyderabad, Telangana</li>
              <li>
                <a href="mailto:companychampsbridge@gmail.com" className="hover:text-background transition-colors">
                  companychampsbridge@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Company Champs Bridge Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

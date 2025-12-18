import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StakeholdersSection from "@/components/StakeholdersSection";
import PilotSection from "@/components/PilotSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CCB - India's First Company-Driven Skill Campus | Company Champs Bridge</title>
        <meta 
          name="description" 
          content="CCB bridges colleges, students, and companies through company-led training before hiring. Get job-ready freshers trained by real engineers. Partner with CCB today." 
        />
        <meta name="keywords" content="skill campus, company training, job ready freshers, engineering placements, industry training, Hyderabad, workforce development" />
        <link rel="canonical" href="https://ccb.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CCB - Where Companies Train Their Future Workforce" />
        <meta property="og:description" content="India's First Company-Driven Skill Campus. Bridge the gap between education and employment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ccb.in" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CCB - Company Champs Bridge" />
        <meta name="twitter:description" content="Where companies train their future workforce. Real engineers. Real skills. Real jobs." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <StakeholdersSection />
          <PilotSection />
          <WhyDifferentSection />
          <AboutSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

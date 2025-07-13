import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import headerImg from "../assets/images/about-header.png";
import WhiteSection from "../components/common/WhiteSection";
import MdPadding from "../components/common/MdPadding";
import AboutTextSection from "../sections/about/AboutTextSection";
import FeaturesSection from "../sections/common/FeaturesSection";
import OurTeam from "../sections/about/OurTeam";
import { Button } from "@/components/ui/button";
import { platformUrl } from "../constants";

// --- HELPER COMPONENTS ---

const GradientIcon = ({ id }) => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "rgba(59, 131, 246, 1)" }} />
        <stop offset="100%" style={{ stopColor: "rgba(168, 85, 247, 1)" }} />
      </linearGradient>
    </defs>
  </svg>
);
const About = () => {
  const { t } = useTranslation('about');
  
  const quickActions = [
    { text: t('quickActions.aiTechnology'), icon: Brain, href: "#ai-features" },
    { text: t('quickActions.companyStory'), icon: Zap, href: "#about-text" },
    { text: t('quickActions.startTrading'), icon: Users, href: platformUrl },
  ];

  return (
    <DefaultLayout>
      <GradientIcon id="about-icon-gradient" />
      <style>
        {`
          @keyframes gradientText { 
            0% { background-position: 0% 50%; } 
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; } 
          }
          .animate-gradient-text { 
            background-size: 200% 200%; 
            animation: gradientText 4s ease infinite; 
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(to right, #3B82F6, #A855F7);
          }
        `}
      </style>

      {/* Main container with static background gradient */}
      <div className="relative pt-8 md:pt-12">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 -z-10" 
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 131, 246, 0.1) 0%, transparent 70%)"}}
        />

        <PageHeader
          img={headerImg}
          title={
            <>
              <span className="animate-gradient-text">{t('pageHeader.titleHighlight')}</span> {t('pageHeader.title').replace('{highlight}', '')}
            </>
          }
          align="center"
          description={t('pageHeader.description')}
        >
          {quickActions.map((action) => (
            <motion.a
              key={action.text}
              href={action.href}
              className="no-underline"
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button variant="outline" className="mb-2 bg-slate-800/50 border-white/20 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors duration-300">
                <action.icon className="h-5 w-5 mr-2" style={{ stroke: "url(#about-icon-gradient)" }} />
                {action.text}
              </Button>
            </motion.a>
          ))}
        </PageHeader>
      </div>
      <MdPadding />
      <AboutTextSection />
      <MdPadding />
        <FeaturesSection
   
        />
        <MdPadding />
        <OurTeam />
    </DefaultLayout>
  );
};

export default About;

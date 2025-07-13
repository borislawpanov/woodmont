"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

// Reusing the GradientIcon component for consistency
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

const InteractiveCtaSection = () => {
  const { t } = useTranslation('cta');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="container mx-auto px-4 py-20 lg:py-24">
      <GradientIcon id="cta-icon-gradient" />
      
      {/* The main interactive card container */}
      <motion.div
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-lg"
        onMouseMove={handleMouseMove}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{
          // Spotlight effect
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 131, 246, 0.15), transparent 80%)`,
        }}
      >
        {/* Decorative background grid */}
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-repeat opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left side: Text content */}
          <div className="text-center md:text-left">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              {t('mainTitle')}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-text">
                {t('mainTitleHighlight')}
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-md mx-auto md:mx-0 mt-4 text-lg text-slate-300"
            >
              {t('description')}
            </motion.p>
          </div>

          {/* Right side: Interactive "Get Started" panel */}
          <motion.a
            href="/signup"
            variants={itemVariants}
            whileHover="hover"
            className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 min-h-[220px] cursor-pointer"
          >
            <div>
              <motion.h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                {t('getStarted.title')}
                <motion.div
                  variants={{ hover: { x: 5 } }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowRight className="ml-2 h-6 w-6" />
                </motion.div>
              </motion.h3>
              
              <ul className="space-y-2">
                <motion.li whileHover={{x: 4}} className="flex items-center text-slate-300">
                    <Zap className="w-5 h-5 mr-3 flex-shrink-0" style={{ stroke: "url(#cta-icon-gradient)" }} />
                    {t('getStarted.features.instantAccess')}
                </motion.li>
                <motion.li whileHover={{x: 4}} className="flex items-center text-slate-300">
                    <ShieldCheck className="w-5 h-5 mr-3 flex-shrink-0" style={{ stroke: "url(#cta-icon-gradient)" }} />
                    {t('getStarted.features.securePlatform')}
                </motion.li>
              </ul>
            </div>
            
            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
              {t('getStarted.footer')}
            </p>

          </motion.a>
        </div>
      </motion.div>
      
      {/* CSS needed for the animated gradient text */}
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
          }
        `}
      </style>
    </section>
  );
};

export default InteractiveCtaSection;
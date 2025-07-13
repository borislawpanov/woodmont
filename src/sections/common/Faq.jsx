"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, Shield, TrendingUp, BarChart, Bot, ChartArea, Bitcoin } from "lucide-react";
import { useTranslation } from "react-i18next";

// --- HELPER COMPONENT (GradientIcon is kept for styling) ---

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

// --- MAIN COMPONENT ---

const FaqSection = () => {
  const { t } = useTranslation('faq-section');
  
  // --- Data and Animation Variants ---
  const faqData = [
    {
      key: "aiSignals",
      icon: Cpu,
    },
    {
      key: "investmentSafety",
      icon: Shield,
    },
    {
      key: "automatedTrading",
      icon: Bitcoin,
    },
    {
      key: "aiAccuracy",
      icon: ChartArea,
    },
    {
      key: "availableMarkets",
      icon: TrendingUp,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative container mx-auto px-4 py-20 lg:py-24 overflow-hidden">
      {/* --- Background Visuals --- */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none animate-gradient-bg"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 131, 246, 0.1) 0%, transparent 70%)" }}
      />
      <GradientIcon id="faq-icon-gradient" />

      {/* --- Section Header --- */}
      <motion.div
        className="mb-12 text-center flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-text">
            {t('sectionTitle')}
          </span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-slate-300 max-w-2xl mx-auto mt-4 text-center">
          {t('sectionDescription')}
        </motion.p>
      </motion.div>

      {/* --- Accordion --- */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl bg-slate-900/40 border border-white/10 shadow-xl backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:shadow-blue-500/10"
              >
                <AccordionItem value={`item-${index}`} className="border-none px-6 py-2">
                  <AccordionTrigger className="flex items-center w-full text-left hover:no-underline py-4">
                    <div className="flex items-center gap-5">
                      <Icon className="h-8 w-8 flex-shrink-0" style={{ stroke: "url(#faq-icon-gradient)" }} />
                      <h4 className="text-lg font-semibold text-white">{t(`questions.${item.key}.question`)}</h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 text-slate-300 text-base pl-13">
                    {t(`questions.${item.key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </motion.div>
      
      {/* --- CSS Keyframes (Twinkle animation removed) --- */}
      <style>
        {`
          .pl-13 { padding-left: 3.25rem; } /* 13 * 0.25rem = 52px, aligns content with text */
          .accordion-content[data-state='open'] { animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1); }
          .accordion-content[data-state='closed'] { animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1); }
          @keyframes slideDown { from { height: 0; } to { height: var(--radix-accordion-content-height); } }
          @keyframes slideUp { from { height: var(--radix-accordion-content-height); } to { height: 0; } }
          @keyframes gradientText { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .animate-gradient-text { background-size: 200% 200%; animation: gradientText 4s ease infinite; }
          @keyframes gradientBg { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-10px, 10px) scale(1.05); } 100% { transform: translate(0, 0) scale(1); } }
          .animate-gradient-bg { animation: gradientBg 10s ease infinite; }
        `}
      </style>
    </section>
  );
};

export default FaqSection;
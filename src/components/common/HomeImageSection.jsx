"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Shield, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

// --- HELPER COMPONENTS from the new style ---

const Sparkle = ({ style }) => (
  <div
    className="absolute bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
    style={style}
  />
);

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

const TradeSignalSection = () => {
  const { t } = useTranslation('image-section');
  
  // --- State and Data from the original component ---
  const [activeIndex, setActiveIndex] = useState(2); // Start with the highest potential trade

  const tradeSignals = [
    { asset: "BTC/USD", potentialProfit: 4530, confidence: 88, riskLevel: "Medium", barValue: 75 },
    { asset: "ETH/USD", potentialProfit: 6210, confidence: 92, riskLevel: "Low", barValue: 90 },
    { asset: "SOL/USD", potentialProfit: 7820, confidence: 95, riskLevel: "Low", barValue: 100 },
    { asset: "ADA/USD", potentialProfit: 2150, confidence: 75, riskLevel: "High", barValue: 45 },
    { asset: "XRP/USD", potentialProfit: 3300, confidence: 82, riskLevel: "Medium", barValue: 60 },
  ];

  const activeSignal = tradeSignals[activeIndex];

  // --- Style Maps (adjusted for the new theme) ---
  const riskColorMap = {
    Low: "bg-blue-500/70 hover:bg-blue-500",
    Medium: "bg-purple-500/70 hover:bg-purple-500",
    High: "bg-rose-500/70 hover:bg-rose-500",
  };
  const riskTextColorMap = {
    Low: "text-blue-400",
    Medium: "text-purple-400",
    High: "text-rose-400",
  };

  // --- Animation Variants (largely unchanged, they are solid) ---
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const innerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const barVariants = {
    hidden: { height: "0%" },
    visible: (i) => ({ height: `${i}%`, transition: { duration: 1, ease: "circOut", delay: 0.2 } }),
  };
  const tooltipVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  };
  
  // --- Hooks and Logic for Sparkles from the new style ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sparkles = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      id: `sparkle-${i}`,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
      },
      depth: Math.random() * 0.2 + 0.05,
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => setMousePosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative container mx-auto px-4 overflow-hidden py-20 lg:py-24">
      {/* --- Visuals from new style --- */}
      {sparkles.map((sparkle) => {
        const parallaxX = (mousePosition.x - window.innerWidth / 2) * sparkle.depth * 0.08;
        const parallaxY = (mousePosition.y - window.innerHeight / 2) * sparkle.depth * 0.08;
        return <Sparkle key={sparkle.id} style={{ ...sparkle.style, transform: `translate(${parallaxX}px, ${parallaxY}px)`, transition: "transform 0.2s ease-out" }} />;
      })}
      <div
        className="absolute inset-0 -z-10 pointer-events-none animate-gradient-bg"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 131, 246, 0.15) 0%, transparent 70%)" }}
      />
      <GradientIcon id="feature-icon-gradient" />
      
      {/* --- Main Layout --- */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* The Interactive Chart Card (RESTYLED) */}
        <motion.div
          className="flex-[7] w-full order-2 lg:order-1"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="w-full max-w-lg mx-auto rounded-2xl bg-slate-900/40 border border-white/10 shadow-2xl backdrop-blur-lg p-6">
            
            {/* Card Header */}
            <motion.div variants={innerVariants} className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-slate-400">{t('aiTradeSignalAnalysis')}</p>
                <AnimatePresence mode="wait">
                  <motion.h3 key={activeIndex} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="text-3xl font-bold text-white">
                    {activeSignal.asset}
                  </motion.h3>
                </AnimatePresence>
              </div>
              <div className="text-right">
                  <p className="text-sm text-slate-400">{t('potentialProfit')}</p>
                  <AnimatePresence mode="wait">
                    <motion.p key={activeIndex} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-text">
                      ${activeSignal.potentialProfit.toLocaleString()}
                    </motion.p>
                  </AnimatePresence>
              </div>
            </motion.div>
            
            {/* Chart Area */}
            <motion.div variants={innerVariants} className="flex items-end justify-between w-full h-52 gap-3">
              {tradeSignals.map((signal, index) => (
                <motion.div key={signal.asset} className="relative w-full h-full flex flex-col items-center justify-end" onMouseEnter={() => setActiveIndex(index)} initial="hidden" whileHover="visible">
                  <motion.div variants={tooltipVariants} className="absolute -top-8 mb-2 px-3 py-1 bg-slate-700 text-white text-sm font-semibold rounded-md shadow-lg pointer-events-none">
                    {signal.asset}
                  </motion.div>
                  <motion.div custom={signal.barValue} variants={barVariants} whileInView="visible" viewport={{ once: true }} className={`w-full cursor-pointer rounded-t-lg transition-all duration-300 ${riskColorMap[signal.riskLevel]} ${activeIndex === index ? 'scale-y-105' : 'opacity-60'}`} />
                  <span className={`text-xs mt-2 transition-colors ${activeIndex === index ? 'text-white font-semibold' : 'text-slate-400'}`}>{signal.asset.split('/')[0]}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Metrics section */}
            <motion.div variants={innerVariants} className="mt-6 pt-4 border-t border-white/10">
                <AnimatePresence mode="wait">
                    <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }} exit={{ opacity: 0 }} className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-3">
                            <Cpu className="w-8 h-8 flex-shrink-0" style={{ stroke: "url(#feature-icon-gradient)" }} />
                            <div>
                                <p className="text-slate-400">{t('metrics.aiConfidence')}</p>
                                <p className="font-bold text-white text-base">{activeSignal.confidence}%</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className={`w-8 h-8 flex-shrink-0 ${riskTextColorMap[activeSignal.riskLevel]}`} />
                            <div>
                                <p className="text-slate-400">{t('metrics.riskLevel')}</p>
                                <p className={`font-bold text-base ${riskTextColorMap[activeSignal.riskLevel]}`}>{t(`riskLevels.${activeSignal.riskLevel}`)}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

          </div>
        </motion.div>

        {/* The Text Content (RESTYLED) */}
        <motion.div
          className="flex-[5] w-full order-1 lg:order-2 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
        >
          <motion.h2 variants={innerVariants} className="text-4xl md:text-5xl font-bold leading-tight text-white">
            {t('mainTitle')} <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-text">
              {t('mainTitleHighlight')}
            </span>
          </motion.h2>
          <motion.p variants={innerVariants} className="text-slate-300 text-lg max-w-lg mt-4 mx-auto lg:mx-0">
            {t('description')}
          </motion.p>
          <motion.div variants={innerVariants} className="mt-8 space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-4">
                  <TrendingUp className="w-7 h-7 flex-shrink-0" style={{ stroke: "url(#feature-icon-gradient)" }} />
                  <p className="text-slate-300"><strong className="text-white">{t('features.highPotentialTrades.title')}</strong> {t('features.highPotentialTrades.description')}</p>
              </div>
              <div className="flex items-center gap-4">
                  <Shield className="w-7 h-7 flex-shrink-0" style={{ stroke: "url(#feature-icon-gradient)" }} />
                  <p className="text-slate-300"><strong className="text-white">{t('features.quantifyRisk.title')}</strong> {t('features.quantifyRisk.description')}</p>
              </div>
              <div className="flex items-center gap-4">
                  <Cpu className="w-7 h-7 flex-shrink-0" style={{ stroke: "url(#feature-icon-gradient)" }} />
                  <p className="text-slate-300"><strong className="text-white">{t('features.actOnConfidence.title')}</strong> {t('features.actOnConfidence.description')}</p>
              </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- CSS Keyframes from new style --- */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 0.8; transform: scale(1); }
          }
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradientText 4s ease infinite;
          }
          @keyframes gradientBg {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(10px, -10px) scale(1.05); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-gradient-bg {
            animation: gradientBg 10s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TradeSignalSection;
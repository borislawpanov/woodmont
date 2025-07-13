import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Rocket, Shield, BarChart2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { platformUrl } from "../../constants.js";

const RedesignedFeaturesSection = () => {
  const { t } = useTranslation('features');
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      key: "aiInsights"
    },
    {
      icon: Rocket,
      key: "rapidExecution"
    },
    {
      icon: Shield,
      key: "topTierSecurity"
    },
    {
      icon: BarChart2,
      key: "smartReturns"
    },
  ];

  const activeFeature = features[activeIndex];

  const handleCallToAction = (index) => {
    if (index === 2) { // Top-Tier Security
      window.location.href = '/about';
    } else {
      window.location.href = platformUrl;
    }
  };

  return (
    <section className="relative container mx-auto px-4 py-24 sm:py-32 text-white overflow-hidden">
      <div className="text-center mb-16 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 12 }}
        >
          {t('sectionTitle')}
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mt-4 text-lg text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120, damping: 12 }}
        >
          {t('sectionDescription')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={feature.key}
                onClick={() => setActiveIndex(index)}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 150, damping: 15 } },
                }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                  isActive ? "bg-blue-500/10" : "hover:bg-gray-800/60"
                }`}
              >
                <feature.icon className={`h-7 w-7 transition-colors ${isActive ? "text-blue-400" : "text-gray-500"}`} />
                <h3 className={`text-lg font-semibold transition-colors ${isActive ? "text-white" : "text-gray-400"}`}>
                  {t(`features.${feature.key}.title`)}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="lg:col-span-2 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 p-8 rounded-2xl bg-gray-800/50 border border-gray-700"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <motion.div
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <div className="p-3 rounded-full bg-blue-500/20">
                      <activeFeature.icon className="h-8 w-8 text-blue-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{t(`features.${activeFeature.key}.title`)}</h2>
                  </motion.div>
                  <motion.p
                    className="text-gray-300 text-base leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    {t(`features.${activeFeature.key}.description`)}
                  </motion.p>
                </div>
                <motion.button
                  className="mt-6 self-start px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md hover:opacity-90 transition-opacity duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCallToAction(activeIndex)}
                >
                  {t(`features.${activeFeature.key}.callToAction`)}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RedesignedFeaturesSection;
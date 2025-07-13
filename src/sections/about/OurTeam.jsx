"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Members from "../../components/common/Members";
import JoinUs from "../../components/common/JoinUs";

const OurTeam = () => {
  const { t } = useTranslation('our-team');
  
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full flex flex-col items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          {t('sectionTitle')}
        </motion.h2>
        <Members />
        <JoinUs />
      </div>
    </section>
  );
};

export default OurTeam;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { goToPlatform } from "../../constants";

const JoinUs = () => {
  const { t } = useTranslation('our-team');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <motion.div
      className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex-1" variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {t('joinUs.title')}
        </h2>
      </motion.div>
      <motion.div className="flex-1" variants={itemVariants}>
        <SpotlightCard className="p-6 bg-card border border-border shadow-xl rounded-xl">
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={itemVariants}
          >
            <Users className="h-6 w-6 text-primary" />
            <h6 className="text-lg font-semibold text-foreground">
              {t('joinUs.cardTitle')}
            </h6>
          </motion.div>
          <motion.p
            className="text-muted-foreground text-base mb-6"
            variants={itemVariants}
          >
            {t('joinUs.description')}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              onClick={goToPlatform}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t('joinUs.buttonText')}
            </Button>
          </motion.div>
        </SpotlightCard>
      </motion.div>
    </motion.div>
  );
};

export default JoinUs;

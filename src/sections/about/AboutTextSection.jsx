import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ceoPhoto from "../../assets/images/ceo-photo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutTextSection = () => {
  const { t } = useTranslation('about');
  
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 relative"
      >
        {/* --- First Row: Mission Statement --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 md:mb-24">
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold sticky top-24">
              {t('aboutTextSection.aiPoweredTitle')}
            </h2>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <h6 className="text-xl font-semibold text-foreground">
              {t('aboutTextSection.missionSubtitle')}
            </h6>
            <p className="text-muted-foreground">
              {t('aboutTextSection.missionDescription')}
            </p>
          </motion.div>
        </div>

        {/* --- Second Row: Founder's Quote --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 lg:sticky top-24  z-10"
          >
            <div className="flex items-center gap-4 bg-background/95 backdrop-blur-sm rounded-lg">
              <img
                src={ceoPhoto}
                width={50}
                height={50}
                alt="Brandon Shaw, Founder & CEO"
                className="rounded-full"
              />
              <div>
                <p className="font-bold">{t('aboutTextSection.founder.name')}</p>
                <small className="text-muted-foreground">{t('aboutTextSection.founder.title')}</small>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight text-foreground/90">
              "{t('aboutTextSection.founder.quote')}"
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutTextSection;

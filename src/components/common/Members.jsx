"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Member from "./Member";
import alexandraRodriguez from "../../assets/images/alexandra-rodriguez.png";
import marcusThompson from "../../assets/images/marcus-thompson.png";
import isabellaChen from "../../assets/images/isabella-chen.png";
import jamesMitchell from "../../assets/images/james-mitchell.png";
import marekNowak from "../../assets/images/marek-nowak.png";

const memberData = [
  {
    photo: jamesMitchell,            // Male photo for Niklas Krieger (CEO, male)
    key: "alexandraRodriguez"
  },
  {
    photo: marcusThompson,           // Keep Marcus Thompson with his own photo
    key: "marcusThompson"
  },
  {
    photo: alexandraRodriguez,       // Female photo for Clara Weissmann (CFO, female)
    key: "isabellaChen"
  },
  {
    photo: marekNowak,              // Marek Nowak's own photo for Marek Nowak (CTO, male)
    key: "jamesMitchell"
  },
];

const Members = () => {
  const { t } = useTranslation('our-team');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {memberData.map((member, index) => (
        <Member
          key={index}
          photo={member.photo}
          name={t(`members.${member.key}.name`)}
          title={t(`members.${member.key}.title`)}
        />
      ))}
    </motion.div>
  );
};

export default Members;

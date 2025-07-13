"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";

const Member = ({ photo, name, title }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const innerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
    >
      <SpotlightCard className="p-6 bg-card border border-border shadow-xl rounded-xl flex flex-col items-center text-center">
        <motion.img
          src={photo}
          alt={name}
          width={280}
          style={{ objectFit: "contain", borderRadius: "16px" }}
          className="mb-4"
          variants={innerVariants}
        />
        <motion.h6
          className="text-lg font-semibold text-foreground mb-1"
          variants={innerVariants}
        >
          {name}
        </motion.h6>
        <motion.span
          className="text-sm text-muted-foreground"
          variants={innerVariants}
        >
          {title}
        </motion.span>
      </SpotlightCard>
    </motion.div>
  );
};

export default Member;
import React from "react";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// Add the 'children' prop to render content like buttons
const PageHeader = ({ img, title, description, align = 'start', children }) => {
  
  const alignmentClasses = align === 'center'
    ? 'flex-col text-center items-center'
    : 'flex-col md:flex-row items-center text-center md:text-left';

  return (
    <section className="container mx-auto px-4 my-12 md:my-16 overflow-hidden">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`page-header-text flex ${alignmentClasses} gap-6 lg:gap-10`}
      >
        <div className="flex-1">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
          
          {children && (
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-4">
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>

      {img && (
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 md:mt-12 rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src={img}
            className="w-full object-cover min-h-[200px] max-h-[550px]"
            alt={typeof title === 'string' ? title : "Page Header"}
          />
        </motion.div>
      )}
    </section>
  );
};

export default PageHeader;
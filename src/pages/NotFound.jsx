import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { Link } from "react-router-dom";

const NotFound = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const innerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <section className="container mx-auto px-4 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          404 - Page Not Found
        </motion.h1>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full max-w-md"
        >
          <SpotlightCard className="p-6 flex flex-col items-center bg-card border border-border shadow-xl">
            <motion.div
              variants={innerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="flex items-center gap-3 mb-4"
            >
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="font-semibold text-card-foreground">
                Error Detected
              </h4>
            </motion.div>
            <motion.p
              variants={innerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="text-muted-foreground mb-6"
            >
              AI suggests returning to the homepage for optimal navigation.
            </motion.p>
            <Link to="/">
              <Button
                variant="default"
                size="lg"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;

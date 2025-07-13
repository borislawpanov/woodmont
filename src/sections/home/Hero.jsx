import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, ChartArea, Cpu, LineChart, SparkleIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { goToPlatform, platformUrl } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sparkle = ({ style }) => {
  return (
    <div
      className="absolute bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
      style={style}
    />
  );
};

// Reusable Gradient Icon Component
const GradientIcon = ({ id }) => {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "rgba(59, 131, 246, 1)", stopOpacity: 1 }}
          />
          <stop
            offset="55%"
            style={{ stopColor: "rgba(59, 131, 246, 1)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(168, 85, 247, 1)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('home-hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate sparkles' initial state only once using useMemo
  const sparkles = useMemo(() => {
    return [...Array(40)].map((_, i) => {
      const position = i < 20 ? "left" : "right";
      return {
        id: `sparkle-${i}`,
        style: {
          top: `${Math.random() * 100}%`,
          [position]: `${15 + Math.random() * 20}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
        },
        depth: Math.random() * 0.2 + 0.05,
      };
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative container mx-auto px-4 overflow-hidden">
      {/* Sparkles with memoized positions and smoother parallax */}
      {sparkles.map((sparkle) => {
        // Multiplier increased to make the parallax effect noticeable
        const parallaxX =
          (mousePosition.x - window.innerWidth / 2) * sparkle.depth * 0.08;
        const parallaxY =
          (mousePosition.y - window.innerHeight / 2) * sparkle.depth * 0.08;

        const styleWithParallax = {
          ...sparkle.style,
          transform: `translate(${parallaxX}px, ${parallaxY}px)`,
          transition: "transform 0.2s ease-out",
        };

        return <Sparkle key={sparkle.id} style={styleWithParallax} />;
      })}


      {/* glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none animate-gradient-bg"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at center, rgba(59, 131, 246, 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="flex flex-col items-center text-center py-24 lg:py-32 relative z-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          
          // --- ✨ INTERACTIVE BADGE PROPS ✨ ---
          whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 4px 20px rgba(59, 131, 246, 0.05)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}

          className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-1 text-sm font-medium text-primary shadow-sm ring-1 ring-primary/20 backdrop-blur-sm cursor-pointer"
        >
          <Award className="h-4 w-4 mr-2 text-primary" />
          {t('badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mt-6"
        >
          {t('title')}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 animate-gradient-text">
            {t('titleHighlight')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg max-w-xl mt-6"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button variant="default" size="lg" onClick={goToPlatform}>
            {t('startTradingButton')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="flex items-center"
            onClick={() => navigate(platformUrl)}
          >
            {t('exploreMarketsButton')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-8 mt-16 text-left"
        >
          <div className="flex gap-3 items-center">
            <GradientIcon id="proactive-icon" />
            <SparkleIcon
              className="h-10 w-10"
              style={{ stroke: "url(#proactive-icon)" }}
              aria-hidden="true"
            />
            <div>
              <h6 className="font-semibold">{t('aiTradingTitle')}</h6>
              <small className="text-muted-foreground">
                {t('aiTradingDescription')}
              </small>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <GradientIcon id="compounding-icon" />
            <ChartArea
              className="h-10 w-10"
              style={{ stroke: "url(#compounding-icon)" }}
              aria-hidden="true"
            />
            <div>
              <h6 className="font-semibold">{t('cfdTradingTitle')}</h6>
              <small className="text-muted-foreground">
                {t('cfdTradingDescription')}
              </small>
            </div>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.7; }
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
            50% { transform: translate(10px, 10px) scale(1.02); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-gradient-bg {
            animation: gradientBg 8s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
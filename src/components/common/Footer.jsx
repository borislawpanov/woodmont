import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { Logo } from "./logo";
import { Link } from "react-router-dom";
import { contactPhone, contactEmail, contactAddress } from "../../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('footer');

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

  const navLinks = [
    { name: t('navigation.home'), path: "/" },
    { name: t('navigation.faq'), path: "/learning/faq" },
    { name: t('navigation.plans'), path: "/plans" },
    { name: t('navigation.about'), path: "/about" },
    { name: t('navigation.imprint'), path: "/imprint" },
    { name: t('navigation.contact'), path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t border-border/20 overflow-hidden">
      {/* Background glow effect similar to Hero */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none animate-gradient-bg"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at center, rgba(59, 131, 246, 0.08) 0%, transparent 70%)",
        }}
      />
      
      <section className="container mx-auto px-4 py-12 relative z-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="flex flex-col max-w-md"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="mb-4"
              variants={innerVariants}
            >
              <Logo />
            </motion.div>
            <motion.p
              className="text-muted-foreground text-base leading-relaxed"
              variants={innerVariants}
            >
              {t('brand.description').split('{aiPlatform}')[0]}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {t('brand.aiPlatform')}
              </span>
              {t('brand.description').split('{aiPlatform}')[1]}
            </motion.p>
          </motion.div>

          {/* Navigation and Contact Section */}
          <div className="lg:ml-auto flex flex-col sm:flex-row gap-8">
            {/* Pages */}
            <motion.div
              className="flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SpotlightCard className="p-6 bg-background/50 border border-primary/5 shadow-xl rounded-xl backdrop-blur-sm ring-1 ring-primary/10">
                <motion.h5
                  className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary mb-4"
                  variants={innerVariants}
                >
                  {t('sections.navigationTitle')}
                </motion.h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-muted-foreground text-sm">
                  {navLinks.map((link, index) => (
                    <Link
                      to={link.path}
                      key={index}
                      onClick={scrollToTop}
                      passHref
                    >
                      <motion.p
                        className="flex items-center gap-2 hover:text-primary cursor-pointer transition-all duration-200 hover:translate-x-1"
                        variants={innerVariants}
                        whileHover={{ 
                          x: 5,
                          color: "rgba(59, 131, 246, 1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                        {link.name}
                      </motion.p>
                    </Link>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <SpotlightCard className="p-6 bg-background/50 border border-primary/5 shadow-xl rounded-xl backdrop-blur-sm ring-1 ring-primary/10">
                <motion.h5
                  className="text-xl font-semibold from-foreground to-primary mb-4"
                  variants={innerVariants}
                >
                  {t('sections.contactTitle')}
                </motion.h5>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <motion.p
                    className="flex items-center gap-3"
                    variants={innerVariants}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="mailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(59, 131, 246)" />
                          <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                        </linearGradient>
                      </defs>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="url(#mailGradient)" strokeWidth="2" fill="none"/>
                      <polyline points="22,6 12,13 2,6" stroke="url(#mailGradient)" strokeWidth="2" fill="none"/>
                    </svg>
                    {contactEmail}
                  </motion.p>
                  <motion.p
                    className="flex items-center gap-3"
                    variants={innerVariants}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(59, 131, 246)" />
                          <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                        </linearGradient>
                      </defs>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="url(#phoneGradient)" strokeWidth="2" fill="none"/>
                    </svg>
                    {contactPhone}
                  </motion.p>
                  <motion.p
                    className="flex items-center gap-3"
                    variants={innerVariants}
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(59, 131, 246)" />
                          <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                        </linearGradient>
                      </defs>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="url(#mapGradient)" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="10" r="3" stroke="url(#mapGradient)" strokeWidth="2" fill="none"/>
                    </svg>
                    {contactAddress}
                  </motion.p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('copyright.text')}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 font-medium">
            {t('companyName')}
          </span>
          {t('copyright.allRightsReserved')}
        </motion.p>
      </section>

      <style>
        {`
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
    </footer>
  );
};

export default Footer;

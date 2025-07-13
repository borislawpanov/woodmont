"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Headphones,
  ShieldCheck,
  Send,
  Users,
  HelpCircle,
  Calendar,
} from "lucide-react";

// Component Imports
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { platformUrl, contactPhone, contactEmail, contactAddress } from "../constants";
import SmPadding from "../components/common/SmPadding";

// --- HELPER COMPONENTS ---

const GradientIcon = ({ id }) => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "rgba(59, 131, 246, 1)" }} />
        <stop offset="100%" style={{ stopColor: "rgba(168, 85, 247, 1)" }} />
      </linearGradient>
    </defs>
  </svg>
);

const TrustCard = ({ icon, headline, description }) => {
  const Icon = icon;
  return (
    <div className="rounded-2xl bg-slate-900/50 p-8 border border-white/10 shadow-xl flex flex-col h-full text-center items-center backdrop-blur-lg hover:border-white/20 transition-all duration-300">
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-full mb-6">
        <Icon className="h-10 w-10" style={{ stroke: "url(#contact-icon-gradient)" }} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{headline}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

const ContactMethod = ({ icon, title, value }) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-4 rounded-lg bg-slate-800/40 p-4 border border-white/10 hover:bg-slate-800/60 hover:border-white/20 transition-all duration-300">
      <div className="bg-slate-900 p-3 rounded-full">
        <Icon className="h-6 w-6" style={{ stroke: "url(#contact-icon-gradient)" }} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-slate-400">{value}</p>
      </div>
    </div>
  );
};

// Main Contact Component
const Contact = () => {
  const { t } = useTranslation('contact');
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage(t('contactForm.errors.allFieldsRequired'));
      setFormStatus("error");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      if (isSuccess) {
        setFormStatus("success");
        setTimeout(() => {
          setFormStatus(null);
          setFormData({ fullName: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        setErrorMessage(t('contactForm.errors.somethingWrong'));
        setFormStatus("error");
      }
      setIsSubmitting(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const quickActions = [
    { text: t('quickActions.askQuestion'), icon: HelpCircle, href: "#contact-form" },
    { text: t('quickActions.seePlans'), icon: Calendar, href: "/plans" },
    { text: t('quickActions.startTrading'), icon: Users, href: platformUrl },
  ];

  return (
    <DefaultLayout>
      <GradientIcon id="contact-icon-gradient" />
      <style>
        {`
          @keyframes gradientText { 
            0% { background-position: 0% 50%; } 
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; } 
          }
          .animate-gradient-text { 
            background-size: 200% 200%; 
            animation: gradientText 4s ease infinite; 
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(to right, #3B82F6, #A855F7);
          }
        `}
      </style>

      {/* Main container with static background gradient */}
      <div className="relative pt-8 md:pt-12">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 -z-10" 
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 131, 246, 0.1) 0%, transparent 70%)"}}
        />

        <PageHeader
          align="center"
          title={
            <>
              {t('pageHeader.title').split('{lineBreak}')[0]}
              <br />
              <span className="animate-gradient-text">{t('pageHeader.titleHighlight')}</span>
            </>
          }
          description={t('pageHeader.description')}
        >
          {quickActions.map((action) => (
            <motion.a
              key={action.text}
              href={action.href}
              className="no-underline"
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button variant="outline" className="mb-2 bg-slate-800/50 border-white/20 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors duration-300">
                <action.icon className="h-5 w-5 mr-2" style={{ stroke: "url(#contact-icon-gradient)" }} />
                {action.text}
              </Button>
            </motion.a>
          ))}
        </PageHeader>
          <SmPadding />
        <div className="container mx-auto px-4">
          <motion.div
            id="contact-form"
            className="relative rounded-2xl p-8 md:p-12 bg-slate-900/60 border border-white/10 backdrop-blur-lg mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-repeat opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">{t('contactForm.title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input id="fullName" name="fullName" type="text" placeholder={t('contactForm.fields.fullName.placeholder')} value={formData.fullName} onChange={handleChange} required className="bg-slate-800/70 border-white/10 text-white focus:ring-blue-500 focus:border-blue-500" />
                  <Input id="email" name="email" type="email" placeholder={t('contactForm.fields.email.placeholder')} value={formData.email} onChange={handleChange} required className="bg-slate-800/70 border-white/10 text-white focus:ring-blue-500 focus:border-blue-500" />
                  <Input id="subject" name="subject" type="text" placeholder={t('contactForm.fields.subject.placeholder')} value={formData.subject} onChange={handleChange} required className="bg-slate-800/70 border-white/10 text-white focus:ring-blue-500 focus:border-blue-500" />
                  <Textarea id="message" name="message" rows={4} placeholder={t('contactForm.fields.message.placeholder')} value={formData.message} onChange={handleChange} required className="bg-slate-800/70 border-white/10 text-white focus:ring-blue-500 focus:border-blue-500" />
                  {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-105" disabled={isSubmitting || formStatus === "success"}>
                    {isSubmitting ? t('contactForm.button.sending') : formStatus === "success" ? t('contactForm.button.sent') : (<>{t('contactForm.button.send')} <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></>)}
                  </Button>
                </form>
              </motion.div>
              <motion.div className="space-y-6" variants={itemVariants}>
                <ContactMethod icon={Mail} title={t('contactMethods.email.title')} value={contactEmail} />
                <ContactMethod icon={Phone} title={t('contactMethods.phone.title')} value={contactPhone} />
                <ContactMethod icon={Clock} title={t('contactMethods.hours.title')} value={t('contactMethods.hours.value')} />
                <ContactMethod icon={MapPin} title={t('contactMethods.address.title')} value={contactAddress}/>
              </motion.div>
            </div>
          </motion.div>

          <div className="py-24">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{t('supportSection.title')}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">{t('supportSection.description')}</p>
            </motion.div>
            <motion.div className="grid lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <motion.div variants={itemVariants}>
                <TrustCard icon={Headphones} headline={t('supportSection.cards.expertSupport.headline')} description={t('supportSection.cards.expertSupport.description')} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <TrustCard icon={ShieldCheck} headline={t('supportSection.cards.privacy.headline')} description={t('supportSection.cards.privacy.description')} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <TrustCard icon={Users} headline={t('supportSection.cards.community.headline')} description={t('supportSection.cards.community.description')} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
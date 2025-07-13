"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  BarChart3,
  Bot,
  ShieldCheck,
  Zap,
  TrendingUp,
  User,
  BookOpen,
  DollarSign,
  Briefcase,
  Star,
  Award,
  PieChart,
  Lock,
  Settings,
  Target,
  Calendar,
  Coins,
  University,
  AlarmCheck,
  ChartArea,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { goToPlatform } from "../../constants";

// --- HELPER COMPONENT (for consistent icon styling) ---

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

// --- DATA STRUCTURES (Icon data is simplified) ---

const categories = ["standard", "advanced", "savings"];

const allOffers = {
  realTimeData: { key: "marketReport", icon: ChartArea },
  aiSignals: { key: "aiTradingTestSession", icon: Bot },
  aiSignalsGold: { key: "aiTradingTwoSessions", icon: Bot },
  aiSignalsPlatinum: { key: "aiTradingFiveSessions", icon: Bot },
  aiSignalsDiamond: { key: "aiTradingEightSessions", icon: Bot },
  aiSignalsVIP: { key: "aiTradingUnlimited", icon: Bot },
  tradingSignal: { key: "tradingSignal", icon: AlarmCheck },
  portfolioTracking: { key: "portfolioAnalysis", icon: PieChart },
  secureWallet: { key: "insuredPositions", icon: ShieldCheck },
  fastExecution: { key: "fastTradeExecution", icon: Zap },
  basicSupport: { key: "basicCustomerSupport", icon: User },
  educational: { key: "educationalResources", icon: BookOpen },
  lowFees: { key: "spreadAndSwaps", icon: DollarSign },
  riskManagement: { key: "riskManagement", icon: ShieldCheck },
  creditAllocation: { key: "creditAllocation", icon: PieChart },
  managementAccess: { key: "directAccessHigherManagement", icon: Briefcase },
  exclusiveEvents: { key: "accessTradeExclusiveEvents", icon: Star },
  limitedExpertAccess: { key: "limitedAccessFinancialExpert", icon: User },
  leverage: { key: "leverage1to10", icon: TrendingUp },
  leverageBronze: { key: "leverage1to5", icon: TrendingUp },
  leverageGold: { key: "leverage1to20", icon: TrendingUp },
  leveragePlatinum: { key: "leverage1to50", icon: TrendingUp },
  leverageDiamond: { key: "leverage1to300", icon: TrendingUp },
  projectManagement: { key: "projectManagement", icon: Settings },
  fullExpertAccess: { key: "fullAccessFinancialExpert", icon: User },
  multipleSignalsDaily: { key: "multipleTradingSignalsDaily", icon: Target },
  freePortfolioAnalysis: { key: "freeFundamentalTechnicalAnalysis", icon: PieChart },
  noCustodyFees: { key: "noCustodyFees", icon: DollarSign },
  seniorAnalyst: { key: "experiencedSeniorAnalyst", icon: User },
  leverageX500: { key: "leverage1to500", icon: TrendingUp },
  investmentUpdates: { key: "updatesInvestmentOpportunities", icon: BarChart },
  securedTradingSignals: { key: "securedTradingSignals", icon: ShieldCheck },
  dividendDistribution: { key: "allocationDividendDistribution", icon: PieChart },
  freeFundamentalTechnical: { key: "freeFundamentalTechnicalStock", icon: BarChart },
  insuredProfits: { key: "insuredProfits", icon: ShieldCheck },
  directAccessHigherLevel: { key: "directAccessHigherLevel", icon: Briefcase },
  estimatedRewards4to8: { key: "estimatedRewards4to8", icon: Award },
  monthlyRewards: { key: "monthlyRewards", icon: Calendar },
  noDirectAccessHigherLevel: { key: "noDirectAccessHigherLevel", icon: Briefcase },
  estimatedRewards10to14: { key: "estimatedRewards10to14", icon: Award },
  weeklyRewards: { key: "weeklyRewards", icon: Calendar },
  coinsTokensRewards: { key: "coinsTokensRewards", icon: Coins },
  vipSignals: { key: "vipTradingSignals", icon: Star },
  tradingSessions: { key: "tradingSessions", icon: Zap },
  dividendAllocation: { key: "dividendAllocation", icon: PieChart },
  autoStaking: { key: "autoStaking", icon: Lock },
};

const cardsData = [
  {
    category: "standard",
    cards: [
      {
        headerKey: "membershipFee",
        minDeposit: "€250",
        offers: [
          { ...allOffers.limitedExpertAccess, active: true },
          { ...allOffers.tradingSignal, active: false },
          { ...allOffers.leverage, active: false },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: false },
          { ...allOffers.aiSignals, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.creditAllocation, active: false },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.managementAccess, active: false },
          { ...allOffers.exclusiveEvents, active: false },
        ],
        popular: false,
      },
      {
        headerKey: "bronze",
        minDeposit: "€5,000",
        offers: [
          { ...allOffers.limitedExpertAccess, active: true },
          { ...allOffers.tradingSignal, active: true },
          { ...allOffers.leverageBronze, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: false },
          { ...allOffers.aiSignals, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.creditAllocation, active: false },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.managementAccess, active: false },
          { ...allOffers.exclusiveEvents, active: false },
        ],
        popular: false,
      },
      {
        headerKey: "silver",
        minDeposit: "€10,000",
        offers: [
          { ...allOffers.limitedExpertAccess, active: true },
          { ...allOffers.tradingSignal, active: true },
          { ...allOffers.leverage, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: false },
          { ...allOffers.aiSignals, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.creditAllocation, active: false },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.managementAccess, active: false },
          { ...allOffers.exclusiveEvents, active: false },
        ],
        popular: true,
      },
    ],
  },
  {
    category: "advanced",
    cards: [
      {
        headerKey: "gold",
        minDeposit: "€25,000",
        offers: [
          { ...allOffers.limitedExpertAccess, active: true },
          { ...allOffers.tradingSignal, active: true },
          { ...allOffers.leverageGold, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: true },
          { ...allOffers.aiSignalsGold, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.creditAllocation, active: true },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.managementAccess, active: false },
          { ...allOffers.exclusiveEvents, active: true },
        ],
        popular: false,
      },
      {
        headerKey: "platinum",
        minDeposit: "€50,000",
        offers: [
          { ...allOffers.limitedExpertAccess, active: true },
          { ...allOffers.tradingSignal, active: true },
          { ...allOffers.leveragePlatinum, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: true },
          { ...allOffers.aiSignalsPlatinum, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.creditAllocation, active: true },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.managementAccess, active: false },
          { ...allOffers.exclusiveEvents, active: true },
        ],
        popular: false,
      },
      {
        headerKey: "diamond",
        minDeposit: "€100,000",
        offers: [
          { ...allOffers.limitedExpertAccess, active: true },
          { ...allOffers.tradingSignal, active: true },
          { ...allOffers.leverageDiamond, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: true },
          { ...allOffers.aiSignalsDiamond, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.creditAllocation, active: true },
          { ...allOffers.secureWallet, active: true },
          { ...allOffers.managementAccess, active: true },
          { ...allOffers.exclusiveEvents, active: true },
        ],
        popular: true,
      },
    ],
  },
  {
    category: "savings",
    cards: [
      {
        headerKey: "premiumSavings",
        minDeposit: "€100,000",
        offers: [
          { ...allOffers.estimatedRewards10to14, active: true },
          { ...allOffers.weeklyRewards, active: true },
          { ...allOffers.autoStaking, active: true },
          { ...allOffers.noCustodyFees, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: true },
          { ...allOffers.coinsTokensRewards, active: true },
          { ...allOffers.creditAllocation, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.insuredProfits, active: true },
          { ...allOffers.directAccessHigherLevel, active: true },
          { ...allOffers.exclusiveEvents, active: true },
        ],
        popular: true,
      },
      {
        headerKey: "ethereumSavings",
        minDeposit: "",
        offers: [
          { ...allOffers.estimatedRewards4to8, active: true },
          { ...allOffers.monthlyRewards, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: true },
          { ...allOffers.creditAllocation, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.noDirectAccessHigherLevel, active: false },
          { ...allOffers.exclusiveEvents, active: true },
        ],
        popular: false,
      },
      {
        headerKey: "btcSavings",
        minDeposit: "",
        offers: [
          { ...allOffers.estimatedRewards10to14, active: true },
          { ...allOffers.weeklyRewards, active: true },
          { ...allOffers.autoStaking, active: true },
          { ...allOffers.realTimeData, active: true },
          { ...allOffers.riskManagement, active: true },
          { ...allOffers.coinsTokensRewards, active: true },
          { ...allOffers.creditAllocation, active: true },
          { ...allOffers.lowFees, active: true },
          { ...allOffers.secureWallet, active: false },
          { ...allOffers.noDirectAccessHigherLevel, active: false },
          { ...allOffers.exclusiveEvents, active: true },
        ],
        popular: false,
      },
    ],
  },
];

const PricingSection = () => {
  const { t } = useTranslation('offers');
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeCards =
    cardsData.find((item) => item.category === activeCategory)?.cards || [];
    
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };


  return (
    <div className="container mx-auto px-4 py-20 lg:py-24">
      <GradientIcon id="pricing-icon-gradient" />
      
      {/* --- Section Header --- */}
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-text">
                {t('sectionTitle')}
            </span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
          {t('sectionDescription')}
        </motion.p>
      </motion.div>

      {/* --- Category Buttons --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
        className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-base font-semibold transition-all duration-300 rounded-full
              ${activeCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent'
                : 'text-slate-300 bg-slate-800/50 border-slate-700 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            {t(`categories.${category}`)}
          </Button>
        ))}
      </motion.div>

      {/* --- Pricing Cards Grid --- */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {activeCards.map((card, index) => {
          const Icon = card.icon;
          return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`h-full rounded-2xl p-0.5 transition-all duration-300 ${card.popular ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-slate-800'}`}
          >
            <div className="relative h-full flex flex-col bg-slate-900 rounded-[15px] p-6 text-center backdrop-blur-xl">
              {card.popular && (
                <Badge className="absolute -top-3 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold border-0">
                  {t('common.mostPopular')}
                </Badge>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{t(`plans.${card.headerKey}.header`)}</h3>
                <p className="text-slate-400 text-sm mb-6 h-10">{t(`plans.${card.headerKey}.description`)}</p>
                {card.minDeposit && (
                  <div className="mb-6">
                      <p className="text-slate-400 text-sm">{t('common.minimumDeposit')}</p>
                      <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-text">
                          {card.minDeposit}
                      </p>
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 text-left mb-8 flex-grow">
                {card.offers.map((offer, offerIndex) => {
                    const OfferIcon = offer.icon;
                    return(
                  <li key={offerIndex} className="flex items-center">
                    <OfferIcon className="w-5 h-5 mr-3 flex-shrink-0" style={{ stroke: "url(#pricing-icon-gradient)" }} />
                    <span className={`${offer.active ? 'text-slate-300' : 'text-slate-500 line-through'}`}>{t(`features.${offer.key}`)}</span>
                  </li>
                )})}
              </ul>

              <Button
                onClick={goToPlatform}
                size="lg"
                className="w-full font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              >
                {t('common.getStarted')}
              </Button>
            </div>
            </motion.div>
          )
        })}
      </motion.div>
      
      {/* --- CSS for animations (only gradient text is needed) --- */}
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
          }
        `}
      </style>
    </div>
  );
};

export default PricingSection;
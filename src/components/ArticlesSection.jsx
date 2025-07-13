import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Don't forget to import useNavigate
import { useTranslation } from "react-i18next";

// Import your Lucide icons
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Scale,
  DollarSign,
  Cpu,
  Feather,
  GraduationCap,
  PenTool,
} from "lucide-react";
import { useArticlesData } from "../articlesDataI18n";


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.03,
    transition: { duration: 0.2 },
  },
};

const ArticleCard = ({ article, index }) => {
  const { t } = useTranslation('articles');
  const IconComponent = article.icon;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleReadMoreClick = () => {
    navigate(`/learning/articles/${article.slug}`); // Navigate to the article slug
  };

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-card border border-border rounded-lg p-6 flex flex-col shadow-lg h-full cursor-pointer"
      onClick={handleReadMoreClick} // Make the whole card clickable
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}{" "}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground">
          {article.title}
        </h3>
      </div>
      <p className="text-muted-foreground flex-grow mb-6">
        {article.description}
      </p>
      <button
        onClick={handleReadMoreClick}
        className="mt-auto inline-flex items-center text-primary font-semibold hover:text-primary/90 transition-colors bg-transparent border-none p-0 cursor-pointer self-start"
      >
        {t('articleCard.readArticle')}
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </motion.div>
  );
};

const Articles = () => {
  const { t } = useTranslation('articles');
  const articlesData = useArticlesData();

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      ></motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articlesData.map((article, index) => (
          <ArticleCard key={index} article={article} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Articles;

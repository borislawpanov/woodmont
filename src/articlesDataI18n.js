import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Lightbulb,
  Scale,
  DollarSign,
  Feather,
} from "lucide-react";

// Hook to get internationalized articles data
export const useArticlesData = () => {
  const { t } = useTranslation('articles');
  const articlesData = t('articlesData', { returnObjects: true });

  // Icon mapping
  const iconMap = {
    0: BookOpen,
    1: Lightbulb, 
    2: Scale,
    3: DollarSign,
    4: Feather,
  };

  // YouTube URLs
  const youtubeUrls = [
    "https://www.youtube.com/embed/jRNy7rTJK-A",
    "https://www.youtube.com/embed/EuYE4EB5wGE", 
    "https://www.youtube.com/embed/DW9zQ8Hz6gQ",
    "https://www.youtube.com/embed/Rdpm7PZOtwE",
    "https://www.youtube.com/embed/rD5nQzbm0iI",
  ];

  // Combine translations with icons and YouTube URLs
  return articlesData.map((article, index) => ({
    ...article,
    icon: iconMap[index],
    youtubeUrl: youtubeUrls[index],
  }));
};

// Legacy export for backwards compatibility (if needed)
export const articlesData = [
  {
    title: "Trading for Dummies - Learn the basics",
    description: "The first step to learning trading is understanding the basics. This guide lays the foundations for a structured approach with realistic goals.",
    icon: BookOpen,
    slug: "trading-for-dummies",
    youtubeUrl: "https://www.youtube.com/embed/jRNy7rTJK-A",
  },
  {
    title: "Tips for becoming a good trader",
    description: "Unsuccessful with trading? Take advantage of advice from more experienced traders. Experience is often what makes the difference.",
    icon: Lightbulb,
    slug: "tips-for-becoming-a-good-trader",
    youtubeUrl: "https://www.youtube.com/embed/EuYE4EB5wGE",
  },
  {
    title: "Find your own trading strategy",
    description: "Without a trading strategy, it is impossible to win. This section introduces several strategies and helps you build your own.",
    icon: Scale,
    slug: "find-your-own-trading-strategy",
    youtubeUrl: "https://www.youtube.com/embed/DW9zQ8Hz6gQ",
  },
  {
    title: "Money management in trading",
    description: "Money management is as important as your strategy. If you can't manage your risk, you can't be a winner in your trading.",
    icon: DollarSign,
    slug: "money-management-in-trading",
    youtubeUrl: "https://www.youtube.com/embed/Rdpm7PZOtwE",
  },
  {
    title: "Psychology in Trading",
    description: "Learning to trade is learning to manage your emotions. From the moment money is at stake, your emotions are multiplied.",
    icon: Feather,
    slug: "psychology-in-trading",
    youtubeUrl: "https://www.youtube.com/embed/rD5nQzbm0iI",
  },
];

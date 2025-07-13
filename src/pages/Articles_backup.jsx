import const Articles = () => {
  const { t } = useTranslation('articles');
  
  return (
    <DefaultLayout>
      <PageHeader
        align="center"
        title={t('pageHeader.title')}
        description={t('pageHeader.description')}
      />
      <ArticlesSection />
    </DefaultLayout>
  );eact";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import PageHeader from "../sections/common/PageHeader";
import ArticlesSection from "../components/ArticlesSection";

const Articles = () => {
  return (
    <DefaultLayout>
      <PageHeader
      align="center"
        title={"Learning Trading: A Beginner’s guide to trading"}
        description={
          "Learning trading doesn't happen overnight. If you don't have the time or motivation to train yourself well in trading, then it's better not to trade at all. There is no miracle recipe, to achieve a winning trading system in the long term requires a lot of work and effort. This guide to learning trading is an accelerator for your training and gives you all the essential elements to make you a good trader."
        }
      />
      <ArticlesSection />
    </DefaultLayout>
  );
};

export default Articles;

import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import PageHeader from "../sections/common/PageHeader";
import ArticlesSection from "../components/ArticlesSection";

const Articles = () => {
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
  );
};

export default Articles;

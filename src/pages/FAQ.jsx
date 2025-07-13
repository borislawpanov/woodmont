import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import PageHeader from "../sections/common/PageHeader";
import FAQSection from "../components/FAQSection";

const FAQPage = () => {
  const { t } = useTranslation('faq-page');
  
  return (
    <DefaultLayout>
      <PageHeader
        align="center"
        title={t('pageHeader.title')}
        description={t('pageHeader.description')}
      />
      <FAQSection />
    </DefaultLayout>
  );
};

export default FAQPage;

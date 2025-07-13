import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import ForexMarketOverview from "../components/ForexMarketOverview";

const Forex = () => {
  const { t } = useTranslation('markets');
  
  return (
    <DefaultLayout>
      <PageHeader
        title={t('forex.pageHeader.title')}
        description={t('forex.pageHeader.description')}
      />
      <ForexMarketOverview />
    </DefaultLayout>
  );
};

export default Forex;
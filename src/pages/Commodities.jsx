import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import CommoditiesMarketOverview from "../components/CommoditiesMarketOverview";

const Commodities = () => {
  const { t } = useTranslation('markets');
  
  return (
    <DefaultLayout>
      <PageHeader
        title={t('commodities.pageHeader.title')}
        description={t('commodities.pageHeader.description')}
      />
      <CommoditiesMarketOverview />
    </DefaultLayout>
  );
};

export default Commodities;
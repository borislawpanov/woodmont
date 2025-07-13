import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import CryptoMarketOverview from "../components/CryptoMarketOverview";

const Crypto = () => {
  const { t } = useTranslation('markets');
  
  return (
    <DefaultLayout>
      <PageHeader
        title={t('crypto.pageHeader.title')}
        description={t('crypto.pageHeader.description')}
      />
      <CryptoMarketOverview />
    </DefaultLayout>
  );
};

export default Crypto;
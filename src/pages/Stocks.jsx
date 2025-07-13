import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import headerImg from "../assets/images/about-header.png";
import WhiteSection from "../components/common/WhiteSection";
import MdPadding from "../components/common/MdPadding";
import OurTeam from "../sections/about/OurTeam";
import StockMarketOverview from "../components/StockMarketOverview";
const Stocks = () => {
  const { t } = useTranslation('markets');
  
  return (
    <DefaultLayout>
      <PageHeader
        title={t('stocks.pageHeader.title')}
        align="center"
        description={t('stocks.pageHeader.description')}
      />
      <StockMarketOverview />
    </DefaultLayout>
  );
};

export default Stocks;
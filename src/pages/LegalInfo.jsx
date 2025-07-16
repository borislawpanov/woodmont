import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import ImprintSection from "../sections/ImprintSection";

const LegalInfoPage = () => {
  const { t } = useTranslation("imprint");

  return (
    <DefaultLayout>
      <PageHeader
        title={t("header.title")}
        align="center"
        description={t("header.description")}
      />
      <ImprintSection />
    </DefaultLayout>
  );
};
export default LegalInfoPage;

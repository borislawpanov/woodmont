import React from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import { domain, contactPhone, contactAddress } from "../constants";

export const ImprintPage = () => {
  const { t } = useTranslation("imprint-page");

  return (
    <DefaultLayout>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto text-foreground">
          
          <div className="mb-12 pb-8 border-b border-border">
            <h1 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
              {t("mainTitle")}
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.companyInfo.title")}
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="font-medium text-foreground">{t("sections.companyInfo.companyName")}</span> {t("sections.companyInfo.companyNameValue")}</p>
              <p><span className="font-medium text-foreground">{t("sections.companyInfo.legalForm")}</span> {t("sections.companyInfo.legalFormValue")}</p>
              <p><span className="font-medium text-foreground">{t("sections.companyInfo.crdNumber")}</span> {t("sections.companyInfo.crdNumberValue")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.headOffice.title")}
            </h3>
            <div className="space-y-1 text-muted-foreground">
              <p>{t("sections.headOffice.companyName")}</p>
              <p>{contactAddress}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.contactInfo.title")}
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="font-medium text-foreground">{t("sections.contactInfo.phone")}</span> {contactPhone}</p>
              <p><span className="font-medium text-foreground">{t("sections.contactInfo.email")}</span> info@{domain}</p>
              <p><span className="font-medium text-foreground">{t("sections.contactInfo.website")}</span> {domain}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.executiveTeam.title")}
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p><span className="font-medium text-foreground">{t("sections.executiveTeam.ceo")}</span> {t("sections.executiveTeam.ceoName")}</p>
                <p className="text-sm">{t("sections.executiveTeam.ceoCrd")}</p>
              </div>
              <div>
                <p><span className="font-medium text-foreground">{t("sections.executiveTeam.cfo")}</span> {t("sections.executiveTeam.cfoName")}</p>
                <p className="text-sm">{t("sections.executiveTeam.cfoCrd")}</p>
              </div>
              <div>
                <p><span className="font-medium text-foreground">{t("sections.executiveTeam.cto")}</span> {t("sections.executiveTeam.ctoName")}</p>
                <p className="text-sm">{t("sections.executiveTeam.ctoCrd")}</p>
              </div>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.taxId.title")}
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="font-medium text-foreground">{t("sections.taxId.vatNumber")}</span> {t("sections.taxId.vatNumberValue")}</p>
              <p><span className="font-medium text-foreground">{t("sections.taxId.exciseNumber")}</span> {t("sections.taxId.exciseNumberValue")}</p>
              <p><span className="font-medium text-foreground">{t("sections.taxId.incomeNumber")}</span> {t("sections.taxId.incomeNumberValue")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.regulatedActivities.title")}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t("sections.regulatedActivities.intro")}</p>
              
              <div className="space-y-3 ml-4">
                <p><span className="font-medium text-foreground">{t("sections.regulatedActivities.insuranceBroker")}</span> {t("sections.regulatedActivities.insuranceBrokerDesc")}</p>
                
                <p><span className="font-medium text-foreground">{t("sections.regulatedActivities.investmentBroker")}</span> {t("sections.regulatedActivities.investmentBrokerDesc")}</p>
                
                <p><span className="font-medium text-foreground">{t("sections.regulatedActivities.wealthAdvisor")}</span> {t("sections.regulatedActivities.wealthAdvisorDesc")}</p>
              </div>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.professionalRegulations.title")}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t("sections.professionalRegulations.intro")}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t("sections.professionalRegulations.regulations", { returnObjects: true }).map((regulation, index) => (
                  <li key={index}>{regulation}</li>
                ))}
              </ul>
              <p>{t("sections.professionalRegulations.outro")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.sustainability.title")}
            </h3>
            <div className="text-muted-foreground">
              <p>{t("sections.sustainability.content")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.ownershipStructure.title")}
            </h3>
            <div className="text-muted-foreground">
              <p>{t("sections.ownershipStructure.content")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.liabilityInsurance.title")}
            </h3>
            <div className="text-muted-foreground">
              <p>{t("sections.liabilityInsurance.content")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.disputeResolution.title")}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t("sections.disputeResolution.intro")}</p>
              <p>{t("sections.disputeResolution.outro")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.legalNotice.title")}
            </h3>
            <div className="text-muted-foreground">
              <p>{t("sections.legalNotice.content")}</p>
            </div>
          </section>

          <section className="mb-10 pb-6 border-b border-border/50">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.disclaimer.title")}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>{t("sections.disclaimer.accuracy")}</p>
              <p>{t("sections.disclaimer.liability")}</p>
              <p>{t("sections.disclaimer.copyright")}</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              {t("sections.commitment.title")}
            </h3>
            <div className="text-muted-foreground">
              <p>{t("sections.commitment.content")}</p>
            </div>
          </section>

        </div>
      </div>
    </DefaultLayout>
  );
};


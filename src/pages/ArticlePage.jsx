import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../layouts/DefaultLayout";
import PageHeader from "../sections/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useArticlesData } from "../articlesDataI18n";

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation('articles');
  const articlesData = useArticlesData();
  
  const article = articlesData.find((a) => a.slug === slug);
  const currentIndex = articlesData.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articlesData.length - 1
      ? articlesData[currentIndex + 1]
      : null;

  if (!article) {
    return (
      <DefaultLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PageHeader
            title={t('articlePage.notFound.title')}
            align="center"
            description={t('articlePage.notFound.description')}
          />
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              {t('articlePage.notFound.message')}{" "}
              <button
                onClick={() => navigate("/articles")}
                className="text-blue-600 hover:underline"
              >
                {t('articlePage.notFound.linkText')}
              </button>
              .
            </p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <PageHeader title={article.title} align="center" description={article.description} />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="mt-6">
            <iframe
              width="100%"
              height="515"
              src={article.youtubeUrl}
              title={article.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <Card
            className="text-center hover:bg-muted cursor-pointer"
            onClick={() =>
              prevArticle && navigate(`/learning/articles/${prevArticle.slug}`)
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <ArrowLeft className="mr-2 h-5 w-5" /> {t('articlePage.navigation.previous')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-bold mb-2">
                {prevArticle ? prevArticle.title : t('articlePage.navigation.firstArticle')}
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center hover:bg-muted cursor-pointer"
            onClick={() =>
              nextArticle && navigate(`/learning/articles/${nextArticle.slug}`)
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                {t('articlePage.navigation.next')} <ArrowRight className="ml-2 h-5 w-5" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-bold mb-4">
                {nextArticle ? nextArticle.title : t('articlePage.navigation.lastArticle')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ArticlePage;

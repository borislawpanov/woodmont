import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Languages } from "lucide-react";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { goToPlatform } from "../../constants";
import { useTranslation } from "react-i18next";
import { langDisplayMap } from "../../i18n";
import { Logo } from "./logo";

const languageItems = [
  { title: "English", code: "en" },
  { title: "Spanish", code: "es" },
  { title: "French", code: "fr" },
  { title: "German", code: "de" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const [isMarketOpen, setIsMarketOpen] = useState(false);
  const [isLearningOpen, setIsLearningOpen] = useState(false);
  const { i18n, t } = useTranslation("navigation");

  const marketOverviewItems = [
    {
      title: t("marketOverview.stocks.title"),
      href: "/market/stocks",
      description: t("marketOverview.stocks.description"),
    },
    {
      title: t("marketOverview.crypto.title"),
      href: "/market/crypto",
      description: t("marketOverview.crypto.description"),
    },
    {
      title: t("marketOverview.forex.title"),
      href: "/market/forex",
      description: t("marketOverview.forex.description"),
    },
    {
      title: t("marketOverview.commodities.title"),
      href: "/market/commodities",
      description: t("marketOverview.commodities.description"),
    },
  ];

  const learningMaterialItems = [
    {
      title: t("learningMaterial.articles.title"),
      href: "/learning/articles",
      description: t("learningMaterial.articles.description"),
    },
    {
      title: t("learningMaterial.faq.title"),
      href: "/learning/faq",
      description: t("learningMaterial.faq.description"),
    },
  ];

  const ListItem = ({ title, href, description }) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
          onClick={(e) => {
            e.preventDefault();
            navigate(href);
          }}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );

  const MobileListItem = ({ title, href, description }) => (
    <a
      href={href}
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {description}
      </p>
    </a>
  );

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <nav className="border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between py-4 " >
      <Logo />

        <div className="flex items-center gap-4">
          <div className="xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {i18n.options.supportedLngs
                  .filter((lng) => lng !== "cimode")
                  .map((lng) => (
                    <DropdownMenuItem
                      key={lng}
                      onClick={() => handleLanguageChange(lng)}
                    >
                      {langDisplayMap[lng] || lng}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden sm:flex xl:hidden gap-4">
            <Button
              variant="outline"
              onClick={goToPlatform}
              className="btn-outline-secondary"
            >
              {t("menu.signup")}
            </Button>
            <Button variant="default" onClick={goToPlatform}>
              {t("menu.login")}
            </Button>
          </div>

          <Sheet>
            <SheetTrigger className="xl:hidden">
              <Menu className="h-6 w-6 text-foreground" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] p-4 bg-card text-card-foreground"
            >
              <div className="flex flex-col gap-6 mt-6">
                <Button variant="link" onClick={() => navigate("/about")}>
                  {t("menu.aboutUs")}
                </Button>

                <Button
                  variant="link"
                  className="flex items-center gap-2"
                  onClick={() => setIsMarketOpen(!isMarketOpen)}
                >
                  {t("menu.marketOverview")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isMarketOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {isMarketOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {marketOverviewItems.map((item) => (
                      <MobileListItem key={item.title} {...item} />
                    ))}
                  </div>
                )}

                <Button
                  variant="link"
                  className="flex items-center gap-2"
                  onClick={() => setIsLearningOpen(!isLearningOpen)}
                >
                  {t("menu.learningMaterial")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isLearningOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {isLearningOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {learningMaterialItems.map((item) => (
                      <MobileListItem key={item.title} {...item} />
                    ))}
                  </div>
                )}

                <Button variant="link" onClick={() => navigate("/contact")}>
                  {t("menu.contactUs")}
                </Button>
                <Button variant="link" onClick={() => navigate("/plans")}>
                  {t("menu.plans")}
                </Button>
                <Button variant="link" onClick={() => navigate("/team")}>
                  {t("menu.ourTeam")}
                </Button>

                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    onClick={goToPlatform}
                    className="btn-outline-secondary"
                  >
                    {t("menu.signup")}
                  </Button>
                  <Button className="btn-primary" onClick={goToPlatform}>
                    {t("menu.login")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden xl:flex items-center">
          <Button variant="link" onClick={() => navigate("/about")}>
            {t("menu.aboutUs")}
          </Button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("menu.marketOverview")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 xl:w-[600px]">
                    {marketOverviewItems.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("menu.learningMaterial")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 xl:w-[600px]">
                    {learningMaterialItems.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="link" onClick={() => navigate("/contact")}>
            {t("menu.contact")}
          </Button>
          <Button variant="link" onClick={() => navigate("/plans")}>
            {t("menu.plans")}
          </Button>
          <Button variant="link" onClick={() => navigate("/team")}>
            {t("menu.ourTeam")}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="mr-2">
                <Languages className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {i18n.options.supportedLngs
                .filter((lng) => lng !== "cimode")
                .map((lng) => (
                  <DropdownMenuItem
                    key={lng}
                    onClick={() => handleLanguageChange(lng)}
                  >
                    {langDisplayMap[lng] || lng}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={goToPlatform}
              className="btn-outline-secondary"
            >
              {t("menu.signup")}
            </Button>
            <Button variant="default" onClick={goToPlatform}>
              {t("menu.login")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

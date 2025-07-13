import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Imprint = () => {
  const { t } = useTranslation("imprint");
  const [activeId, setActiveId] = React.useState(null);
  const imprintData = t("sections", { returnObjects: true });
  const imprintRefs = useRef(imprintData.map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    imprintRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      imprintRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (index) => {
    imprintRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
    setActiveId(`imprint-${index}`);
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-12">
      {/* Fixed Contents Sidebar */}
      <div className="md:w-1/4 sticky top-20 self-start hidden md:block">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {t("tableOfContents.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {imprintData.map((section, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className={`p-0 text-left text-sm hover:text-primary h-auto leading-tight whitespace-normal ${
                      activeId === `imprint-${index}`
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => scrollToSection(index)}
                  >
                    {section.title}
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Article Content */}
      <article className="md:w-3/4 lg:w-2/3">
        <section className="space-y-12">
          {imprintData.map((section, index) => (
            <div
              key={index}
              id={`imprint-${index}`}
              ref={imprintRefs.current[index]}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                {section.content}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold mb-4">
            {t("footer.title")}
          </h3>
          <p className="text-lg text-muted-foreground max-w-prose">
            {t("footer.content")}
          </p>
        </footer>
      </article>
    </div>
  );
};

export default Imprint;

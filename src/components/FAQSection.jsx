import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "Can trading replace my day job?",
    answer: `Yes. Well… maybe. The main reason most people start trading is to earn money, often to supplement income. Few trade professionally. To replace a $60,000 annual pre-tax income with trading, you'd need $631,578 at a 9.5% annual return (S&P 500 average) or $133,332 at a 45% return, assuming no reinvestment. Consistency is key—high returns require high risks, making long-term downside control tough. Trading demands dedication, discipline, and deep market knowledge. Most realistically, build a trading account with small contributions to supplement income. Think twice before quitting your job.`,
  },
  {
    question: "Is trading the same as gambling?",
    answer: `No, but it can feel like it if mishandled. Trading isn't gambling if approached with a methodology and plan. Gambling behavior, like myopic loss aversion (taking bigger risks when avoiding outcomes), can creep in. Recognize it, evaluate mistakes, and stick to due diligence. Understanding your risk propensity is as crucial as market knowledge. You decide if trading is a profession or a game of chance.`,
  },
  {
    question: "How much money should I start trading with?",
    answer: `Depends on goals. For learning, small amounts are fine, but as experience grows, it should be worth your time. Trading small changes risk perception—losing $1,000 feels different than $10,000. Paper trading helps learn navigation but can breed overconfidence. Eventually, trade enough capital to matter—$50/month may suffice for some, not others. With limited capital, reinvest gains to compound returns. You can start a diversified portfolio with less than $10.`,
  },
  {
    question: "Does technical analysis work?",
    answer: `Not consistently or predictably. Technical analysis suffers from confirmation and hindsight bias, making patterns seem obvious after the fact. Historically, "chartists" plotted prices to find patterns, but predictable patterns get exploited quickly. Some argue it works because many act on it, creating self-fulfilling price action. Behavioral finance supports it—humans favor round numbers, forming price consolidation. Still, it’s more useful for chart interpretation than reliable decision-making.`,
  },
  {
    question: "How is investing different from trading?",
    answer: `Investing and trading both expect asset value growth, but differ in time horizon. Investing means holding stocks for years, often months at minimum. Trading involves shorter horizons, with frequent transactions. Passive investors believe in long-term growth and market timing difficulty, backed by academics claiming consistent outperformance is rare. Traders argue they can beat the market, especially in downturns. The choice depends on your perception and risk tolerance.`,
  },
  {
    question: "How do I get started trading?",
    answer: `Start by understanding your risk tolerance and financial goals. Decide on aggressive or passive strategies and capital allocation. Always have a plan and stick to it. Keep a trading journal to document ideas, research, expectations, and outcomes. For example, if you buy a stock expecting a price rise due to a drug trial, note why, track results, and reflect on what drove the outcome. Experience is built through documented observations of price movements.`,
  },
  {
    question: "Will computers replace traders on Wall Street?",
    answer: `Not yet. Computers excel at number-crunching and optimal execution but are limited by human-designed strategies. AI can adapt within its logic but can’t make complex discretionary choices. Computers shine in relative-arbitrage and large-order execution, yet traders still negotiate big orders manually. Human interpretation of algorithms remains critical, and full replacement is far off.`,
  },
  {
    question: "Is the stock market random?",
    answer: `Not perfectly. The market isn’t fully predictable, but it’s not purely random either. The Efficient Market Hypothesis suggests prices move unpredictably with perfect information, but real-world markets show weak predictability. Patterns exist, like pre-market trends, but profound predictability fades as the market reacts. For practical purposes, it’s close to random.`,
  },
  {
    question: "How do you know when to buy a stock?",
    answer: `No universal method guarantees success. Fundamental analysis, like evaluating P/E ratios, is common for finding undervalued stocks. P/E compares stock price to earnings per share, showing what investors pay for earnings. Similar companies often have close P/E ratios—undervalued ones may be buys, overvalued ones shorts. Diversify holdings but specialize in a niche for an edge. Research extensively to match your goals.`,
  },
];

const FAQArticle = () => {
  const { t } = useTranslation('faq-page');
  const faqData = t('faqs', { returnObjects: true });
  
  const [activeId, setActiveId] = React.useState(null);
  const faqRefs = useRef(faqData.map(() => React.createRef()));

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

    faqRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      faqRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToFAQ = (index) => {
    faqRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
    setActiveId(`faq-${index}`);
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-12">
      {/* Fixed Contents Sidebar */}
      <div className="md:w-1/4 sticky top-20 self-start hidden md:block">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{t('tableOfContents.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {faqData.map((faq, index) => (
                <li key={index}>
                  <Button
                    variant="link"
                    className={`p-0 text-left text-sm hover:text-primary h-auto leading-tight whitespace-normal ${
                      activeId === `faq-${index}` ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                    onClick={() => scrollToFAQ(index)}
                  >
                    {faq.question}
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Article Content */}
      <article className="md:w-3/4 **lg:w-2/3**"> {/* Added lg:w-2/3 for narrower text on larger screens */}
        <section className="space-y-12">
          {faqData.map((faq, index) => (
            <div key={index} id={`faq-${index}`} ref={faqRefs.current[index]} className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-4">{faq.question}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-prose"> {/* Added max-w-prose */}
                {faq.answer}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold mb-4">{t('footer.title')}</h3>
          <p className="text-muted-foreground max-w-prose"> {/* Added max-w-prose */}
            {t('footer.description')}
          </p>
        </footer>
      </article>
    </div>
  );
};

export default FAQArticle;
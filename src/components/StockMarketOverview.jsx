import React, { useEffect, useRef, memo } from 'react';
import { motion } from "framer-motion";
import { CandlestickChart, Gauge, Newspaper, Building, BookOpen } from 'lucide-react';

const TradingViewWidget = memo(({ widgetOptions, widgetType }) => {
  const container = useRef();
  const uniqueId = `tradingview-widget-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    if (container.current && !container.current.hasChildNodes()) {
      const script = document.createElement("script");
      let scriptSrc = '';

      switch (widgetType) {
        case 'symbol-overview':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
          break;
        case 'technical-analysis':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
          break;
        case 'top-stories':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
          break;
        case 'fundamental-data':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
          break;
        case 'company-profile':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
          break;
        case 'ticker-tape':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
          break;
        default:
          return;
      }

      script.src = scriptSrc;
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify(widgetOptions);
      container.current.appendChild(script);
    }
  }, [widgetOptions, widgetType]);

  return <div id={uniqueId} className="tradingview-widget-container" ref={container} style={{ height: '100%', width: '100%' }}></div>;
});

const WidgetCard = ({ title, icon, custom, children, className = "" }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
  };

  const widgetContainerClass = `bg-card border border-border rounded-lg shadow-md p-4 flex flex-col h-full ${className}`;

  return (
    <motion.div custom={custom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants} className={widgetContainerClass}>
      <h2 className="text-lg font-bold mb-4 text-primary-foreground flex items-center">
        {icon}
        {title}
      </h2>
      <div className="flex-grow">
        {children}
      </div>
    </motion.div>
  );
};

const StockMarketOverview = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-foreground">
      {/* --- Ticker Tape Widget --- */}
      <div className="mb-12">
        <TradingViewWidget
          widgetType="ticker-tape"
          widgetOptions={{
            "symbols": [
              { "proName": "NASDAQ:AAPL", "title": "Apple" },
              { "proName": "NASDAQ:GOOGL", "title": "Google" },
              { "proName": "NASDAQ:MSFT", "title": "Microsoft" },
              { "proName": "NASDAQ:TSLA", "title": "Tesla" },
              { "proName": "NASDAQ:AMZN", "title": "Amazon" },
              { "proName": "NASDAQ:NVDA", "title": "NVIDIA" },
              { "proName": "NASDAQ:META", "title": "Meta" },
              { "proName": "NYSE:JPM", "title": "JPMorgan" },
              { "proName": "NYSE:WMT", "title": "Walmart" },
              { "proName": "NYSE:V", "title": "Visa" },
              { "proName": "NASDAQ:AMD", "title": "AMD" },
              { "proName": "NYSE:DIS", "title": "Disney" }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "en"
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- Main Content Area --- */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Apple Section */}
          <WidgetCard title="Apple Inc. (AAPL) Profile" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={1} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="company-profile"
              widgetOptions={{
                "symbol": "NASDAQ:AAPL",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Apple Technical Analysis" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={2} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "NASDAQ:AAPL",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Apple Inc. Financials" icon={<BookOpen className="mr-2 h-5 w-5 text-primary" />} custom={3} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="fundamental-data"
              widgetOptions={{
                "symbol": "NASDAQ:AAPL",
                "colorTheme": "dark",
                "isTransparent": true,
                "displayMode": "default",
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Microsoft Section */}
          <WidgetCard title="Microsoft Corp. (MSFT) Profile" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={4} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="company-profile"
              widgetOptions={{
                "symbol": "NASDAQ:MSFT",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Microsoft Technical Analysis" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={5} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "NASDAQ:MSFT",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Microsoft Financials" icon={<BookOpen className="mr-2 h-5 w-5 text-primary" />} custom={6} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="fundamental-data"
              widgetOptions={{
                "symbol": "NASDAQ:MSFT",
                "colorTheme": "dark",
                "isTransparent": true,
                "displayMode": "default",
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Meta Section */}
          <WidgetCard title="Meta Platforms (META) Profile" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={7} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="company-profile"
              widgetOptions={{
                "symbol": "NASDAQ:META",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Consolidated News Widget */}
          <WidgetCard title="Market News" icon={<Newspaper className="mr-2 h-5 w-5 text-primary" />} custom={8}>
            <TradingViewWidget
              widgetType="top-stories"
              widgetOptions={{
                "isTransparent": true,
                "displayMode": "compact",
                "width": "100%",
                "height": 400,
                "colorTheme": "dark",
                "locale": "en",
                "symbols": ["NASDAQ:AAPL", "NASDAQ:MSFT", "NASDAQ:META", "NASDAQ:GOOGL", "NASDAQ:TSLA", "NASDAQ:AMZN", "NASDAQ:NVDA", "NYSE:JPM", "NYSE:WMT", "NYSE:V", "NASDAQ:AMD", "NYSE:DIS"]
              }}
            />
          </WidgetCard>
        </div>

        {/* --- Right Sidebar with Mini Charts --- */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <WidgetCard title="Google" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={9}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Google", "GOOGL"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Tesla" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={10}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Tesla", "TSLA"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Microsoft" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={11}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Microsoft", "MSFT"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Amazon" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={12}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Amazon", "AMZN"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="NVIDIA" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={13}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["NVIDIA", "NVDA"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Meta" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={14}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Meta", "META"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="JPMorgan" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={15}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["JPMorgan", "JPM"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Walmart" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={16}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Walmart", "WMT"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Visa" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={17}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Visa", "V"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="AMD" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={18}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["AMD", "AMD"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Disney" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={19}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["Disney", "DIS"]],
                "chartOnly": true,
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
                "hideSymbolLogo": true,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "Inter, sans-serif",
                "fontSize": "10",
                "noTimeScale": true,
                "valuesTracking": "1",
                "changeMode": "price-and-percent",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>
        </div>
      </div>
    </section>
  );
};

export default StockMarketOverview;
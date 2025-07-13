import React, { useEffect, useRef, memo } from 'react';
import { motion } from "framer-motion";
import { CandlestickChart, Gauge, Newspaper, Building } from 'lucide-react';

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
        case 'symbol-info':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
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

const ForexMarketOverview = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-foreground">
      {/* --- Ticker Tape Widget --- */}
      <div className="mb-12">
        <TradingViewWidget
          widgetType="ticker-tape"
          widgetOptions={{
            "symbols": [
              { "proName": "FX:EURUSD", "title": "EUR/USD" },
              { "proName": "FX:USDJPY", "title": "USD/JPY" },
              { "proName": "FX:GBPUSD", "title": "GBP/USD" },
              { "proName": "FX:USDCHF", "title": "USD/CHF" },
              { "proName": "FX:AUDUSD", "title": "AUD/USD" },
              { "proName": "FX:USDCAD", "title": "USD/CAD" },
              { "proName": "FX:NZDUSD", "title": "NZD/USD" }
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
          {/* EUR/USD Section */}
          <WidgetCard title="EUR/USD Info" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={1} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                "symbol": "FX:EURUSD",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="EUR/USD Technical Analysis" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={2} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "FX:EURUSD",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* USD/JPY Section */}
          <WidgetCard title="USD/JPY Info" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={3} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                "symbol": "FX:USDJPY",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="USD/JPY Technical Analysis" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={4} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "FX:USDJPY",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* GBP/USD Section */}
          <WidgetCard title="GBP/USD Info" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={5} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                "symbol": "FX:GBPUSD",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Consolidated News Widget */}
          <WidgetCard title="Forex Market News" icon={<Newspaper className="mr-2 h-5 w-5 text-primary" />} custom={6}>
            <TradingViewWidget
              widgetType="top-stories"
              widgetOptions={{
                "isTransparent": true,
                "displayMode": "compact",
                "width": "100%",
                "height": 400,
                "colorTheme": "dark",
                "locale": "en",
                "symbols": [
                  "FX:EURUSD",
                  "FX:USDJPY",
                  "FX:GBPUSD",
                  "FX:USDCHF",
                  "FX:AUDUSD",
                  "FX:USDCAD",
                  "FX:NZDUSD"
                ]
              }}
            />
          </WidgetCard>
        </div>

        {/* --- Right Sidebar with Mini Charts --- */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <WidgetCard title="USD/JPY" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={7}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["USD/JPY", "FX:USDJPY"]],
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

          <WidgetCard title="GBP/USD" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={8}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["GBP/USD", "FX:GBPUSD"]],
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

          <WidgetCard title="USD/CHF" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={9}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["USD/CHF", "FX:USDCHF"]],
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

          <WidgetCard title="AUD/USD" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={10}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["AUD/USD", "FX:AUDUSD"]],
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

          <WidgetCard title="USD/CAD" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={11}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["USD/CAD", "FX:USDCAD"]],
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

          <WidgetCard title="NZD/USD" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={12}>
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": [["NZD/USD", "FX:NZDUSD"]],
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

export default ForexMarketOverview;
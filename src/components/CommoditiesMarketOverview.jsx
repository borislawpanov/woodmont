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
        case 'mini-symbol-overview':
          scriptSrc = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
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

const CommoditiesMarketOverview = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-foreground">
      {/* --- Ticker Tape Widget --- */}
      <div className="mb-12">
        <TradingViewWidget
          widgetType="ticker-tape"
          widgetOptions={{
            "symbols": [
              { "proName": "TVC:GOLD", "title": "Gold" },
              { "proName": "TVC:SILVER", "title": "Silver" },
              { "proName": "USOIL", "title": "Crude Oil" },
              { "proName": "Wheat", "title": "Wheat" },
              { "proName": "Nickel", "title": "Nickel" }
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
          {/* Gold Section */}
          <WidgetCard title="Gold Info" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={1} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                "symbol": "TVC:GOLD",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Gold Technical Analysis" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={2} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "TVC:GOLD",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Silver Section */}
          <WidgetCard title="Silver Info" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={3} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                "symbol": "TVC:SILVER",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          <WidgetCard title="Silver Technical Analysis" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={4} className="min-h-[500px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "TVC:SILVER",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Crude Oil Section */}
          <WidgetCard title="Crude Oil Info" icon={<Building className="mr-2 h-5 w-5 text-primary" />} custom={5} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                "symbol": "USOIL",
                "colorTheme": "dark",
                "isTransparent": true,
                "width": "100%",
                "height": "100%",
                "locale": "en"
              }}
            />
          </WidgetCard>

          {/* Consolidated News Widget */}
          <WidgetCard title="Commodities Market News" icon={<Newspaper className="mr-2 h-5 w-5 text-primary" />} custom={6}>
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
                  "TVC:GOLD",
                  "TVC:SILVER",
                  "USOIL",
                  "NYMEX:NG1!",
                  "TVC:ALUMINUM"
                ]
              }}
            />
          </WidgetCard>
        </div>

        {/* --- Right Sidebar with Mixed Widgets --- */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          {/* Silver - Symbol Overview */}
          <WidgetCard title="Silver" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={7} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": ["TVC:SILVER"],
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "gridLineColor": "rgba(240, 243, 250, 0.1)",
                "trendLineColor": "#2962FF",
                "fontColor": "#787B86",
                "underLineColor": "rgba(41, 98, 255, 0.1)",
                "chartType": "area",
                "backgroundColor": "rgba(0,0,0,0)"
              }}
            />
          </WidgetCard>

          {/* Crude Oil - Mini Symbol Overview */}
          <WidgetCard title="Crude Oil" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={8}>
            <TradingViewWidget
              widgetType="mini-symbol-overview"
              widgetOptions={{
                "symbol": "USOIL",
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "showVolume": false,
                "hideDateRanges": true,
                "hideMarketStatus": true,
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

          {/* Natural Gas - Technical Analysis */}
          <WidgetCard title="Natural Gas" icon={<Gauge className="mr-2 h-5 w-5 text-primary" />} custom={9} className="min-h-[400px]">
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                "symbol": "NYMEX:NG1!",
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "interval": "1D",
                "autosize": true
              }}
            />
          </WidgetCard>

          {/* Aluminum - Symbol Overview */}
          <WidgetCard title="Nickel" icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />} custom={10} className="min-h-[300px]">
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                "symbols": ["NICKEL"],
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "colorTheme": "dark",
                "isTransparent": true,
                "autosize": true,
                "gridLineColor": "rgba(240, 243, 250, 0.1)",
                "trendLineColor": "#2962FF",
                "fontColor": "#787B86",
                "underLineColor": "rgba(41, 98, 255, 0.1)",
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

export default CommoditiesMarketOverview;
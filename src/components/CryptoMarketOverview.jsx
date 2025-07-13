import React, { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import {
  CandlestickChart,
  Gauge,
  Newspaper,
  Building,
  BookOpen,
} from "lucide-react";

const TradingViewWidget = memo(({ widgetOptions, widgetType }) => {
  const container = useRef();
  const uniqueId = `tradingview-widget-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  useEffect(() => {
    if (container.current && !container.current.hasChildNodes()) {
      const script = document.createElement("script");
      let scriptSrc = "";

      switch (widgetType) {
        case "symbol-overview":
          scriptSrc =
            "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
          break;
        case "technical-analysis":
          scriptSrc =
            "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
          break;
        case "top-stories":
          scriptSrc =
            "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
          break;
        case "fundamental-data":
          scriptSrc =
            "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
          break;
        case "symbol-info":
          scriptSrc =
            "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
          break;
        case "ticker-tape":
          scriptSrc =
            "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
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

  return (
    <div
      id={uniqueId}
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
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
        ease: "easeOut",
      },
    }),
  };

  const widgetContainerClass = `bg-card border border-border rounded-lg shadow-md p-4 flex flex-col h-full ${className}`;

  return (
    <motion.div
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className={widgetContainerClass}
    >
      <h2 className="text-lg font-bold mb-4 text-primary flex items-center">
        {icon}
        {title}
      </h2>
      <div className="flex-grow">{children}</div>
    </motion.div>
  );
};

const CryptoMarketOverview = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-foreground">
      {/* --- Ticker Tape Widget --- */}
      <div className="mb-12">
        <TradingViewWidget
          widgetType="ticker-tape"
          widgetOptions={{
            symbols: [
              { proName: "BINANCE:BTCUSDT", title: "Bitcoin" },
              { proName: "BINANCE:ETHUSDT", title: "Ethereum" },
              { proName: "BINANCE:SOLUSDT", title: "Solana" },
              { proName: "BINANCE:ADAUSDT", title: "Cardano" },
              { proName: "BINANCE:XRPUSDT", title: "XRP" },
              { proName: "BINANCE:BNBUSDT", title: "Binance Coin" },
              { proName: "BINANCE:DOTUSDT", title: "Polkadot" },
              { proName: "BINANCE:DOGEUSDT", title: "Dogecoin" },
              { proName: "BINANCE:AVAXUSDT", title: "Avalanche" },
              { proName: "BINANCE:SHIBUSDT", title: "Shiba Inu" },
            ],
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: true,
            displayMode: "adaptive",
            locale: "en",
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- Main Content Area --- */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Bitcoin Section */}
          <WidgetCard
            title="Bitcoin (BTC) Info"
            icon={<Building className="mr-2 h-5 w-5 text-primary" />}
            custom={1}
            className="min-h-[300px]"
          >
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                symbol: "BINANCE:BTCUSDT",
                colorTheme: "dark",
                isTransparent: true,
                width: "100%",
                height: "100%",
                locale: "en",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Bitcoin Technical Analysis"
            icon={<Gauge className="mr-2 h-5 w-5 text-primary" />}
            custom={2}
            className="min-h-[500px]"
          >
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                symbol: "BINANCE:BTCUSDT",
                colorTheme: "dark",
                isTransparent: true,
                width: "100%",
                height: "100%",
                locale: "en",
              }}
            />
          </WidgetCard>

          {/* Ethereum Section */}
          <WidgetCard
            title="Ethereum (ETH) Info"
            icon={<Building className="mr-2 h-5 w-5 text-primary" />}
            custom={3}
            className="min-h-[300px]"
          >
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                symbol: "BINANCE:ETHUSDT",
                colorTheme: "dark",
                isTransparent: true,
                width: "100%",
                height: "100%",
                locale: "en",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Ethereum Technical Analysis"
            icon={<Gauge className="mr-2 h-5 w-5 text-primary" />}
            custom={4}
            className="min-h-[500px]"
          >
            <TradingViewWidget
              widgetType="technical-analysis"
              widgetOptions={{
                symbol: "BINANCE:ETHUSDT",
                colorTheme: "dark",
                isTransparent: true,
                width: "100%",
                height: "100%",
                locale: "en",
              }}
            />
          </WidgetCard>

          {/* Solana Section */}
          <WidgetCard
            title="Solana (SOL) Info"
            icon={<Building className="mr-2 h-5 w-5 text-primary" />}
            custom={5}
            className="min-h-[300px]"
          >
            <TradingViewWidget
              widgetType="symbol-info"
              widgetOptions={{
                symbol: "BINANCE:SOLUSDT",
                colorTheme: "dark",
                isTransparent: true,
                width: "100%",
                height: "100%",
                locale: "en",
              }}
            />
          </WidgetCard>

          {/* Consolidated News Widget */}
          <WidgetCard
            title="Crypto Market News"
            icon={<Newspaper className="mr-2 h-5 w-5 text-primary" />}
            custom={6}
          >
            <TradingViewWidget
              widgetType="top-stories"
              widgetOptions={{
                isTransparent: true,
                displayMode: "compact",
                width: "100%",
                height: 400,
                colorTheme: "dark",
                locale: "en",
                symbols: [
                  "BINANCE:BTCUSDT",
                  "BINANCE:ETHUSDT",
                  "BINANCE:SOLUSDT",
                  "BINANCE:ADAUSDT",
                  "BINANCE:XRPUSDT",
                  "BINANCE:BNBUSDT",
                  "BINANCE:DOTUSDT",
                  "BINANCE:DOGEUSDT",
                  "BINANCE:AVAXUSDT",
                  "BINANCE:SHIBUSDT",
                ],
              }}
            />
          </WidgetCard>
        </div>

        {/* --- Right Sidebar with Mini Charts --- */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <WidgetCard
            title="Ethereum"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={7}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Ethereum", "BINANCE:ETHUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Solana"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={8}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Solana", "BINANCE:SOLUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Cardano"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={9}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Cardano", "BINANCE:ADAUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="XRP"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={10}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["XRP", "BINANCE:XRPUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Binance Coin"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={11}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Binance Coin", "BINANCE:BNBUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Polkadot"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={12}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Polkadot", "BINANCE:DOTUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Dogecoin"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={13}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Dogecoin", "BINANCE:DOGEUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Avalanche"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={14}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Avalanche", "BINANCE:AVAXUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>

          <WidgetCard
            title="Shiba Inu"
            icon={<CandlestickChart className="mr-2 h-5 w-5 text-primary" />}
            custom={15}
          >
            <TradingViewWidget
              widgetType="symbol-overview"
              widgetOptions={{
                symbols: [["Shiba Inu", "BINANCE:SHIBUSDT"]],
                chartOnly: true,
                width: "100%",
                height: "100%",
                locale: "en",
                colorTheme: "dark",
                isTransparent: true,
                autosize: true,
                showVolume: false,
                hideDateRanges: true,
                hideMarketStatus: true,
                hideSymbolLogo: true,
                scalePosition: "no",
                scaleMode: "Normal",
                fontFamily: "Inter, sans-serif",
                fontSize: "10",
                noTimeScale: true,
                valuesTracking: "1",
                changeMode: "price-and-percent",
                chartType: "area",
                backgroundColor: "rgba(0,0,0,0)",
              }}
            />
          </WidgetCard>
        </div>
      </div>
    </section>
  );
};

export default CryptoMarketOverview;

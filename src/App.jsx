import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import OurTeam from "./pages/OurTeamPage";
import Stocks from "./pages/Stocks";
import Crypto from "./pages/Crypto";
import Forex from "./pages/Forex";
import Commodities from "./pages/Commodities";
import FAQPage from "./pages/FAQ";
import ImprintPage from "./pages/Imprint";
import NotFound from "./pages/NotFound"; // Import the 404 component
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/market/stocks" element={<Stocks />} />
        <Route path="/market/crypto" element={<Crypto />} />
        <Route path="/market/commodities" element={<Commodities />} />
        <Route path="/market/forex" element={<Forex />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="/learning/faq" element={<FAQPage />} />
        <Route path="/learning/articles" element={<Articles />} />
        <Route path="/learning/articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
}

export default App;

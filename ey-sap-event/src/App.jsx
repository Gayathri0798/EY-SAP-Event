import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomeCarousel from "./components/HomeCarousel";
import AgentLibrary from "./pages/AgentLibrary";
import AgentLanding from "./pages/AgentLanding";
import SapAI from "./pages/SapAI";
import ExploreNexus from "./pages/ExploreNexus";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import Insights from "./pages/Insights";
import TalkToExperts from "./pages/TalkToExperts";
import AiMarketPlace from "./pages/AiMarketPlace";
import SkillsGrid from "./pages/SkillSet";
import SAPEcoSystem from "./pages/ecoSystem";
import JouleAiSystem from "./pages/jouleAI";
import SapAiSolution from "./pages/aiSolution";
import Procuresense from "./pages/procuresense";
import BASample from "./pages/BASample";
import A2Rrecon from "./pages/a2rrecon";
import WorkingCapital from "./pages/workingCapital";
import PriceWise from "./pages/priceWise";
import ChatbotIcon from "./components/ChatbotIcon";
import DataGenie from "./pages/DataGenie";
import AutonomousSupplyChain from "./pages/AutonomousSC";
import DocumentAnalyser from "./pages/DocumentAnalyser"
import DigiGST from "./pages/DigiGST";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        
key={location.pathname}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.2 }}
  style={{ minHeight: "100vh" }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/marketplace" element={<AgentLibrary />} />
          <Route path="/studio" element={<AgentLanding />} />
          <Route path="/sap-ai" element={<SapAI />} />
          <Route path="/explore-nexus" element={<ExploreNexus />} />
          <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/talk-to-experts" element={<TalkToExperts />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/aiMarketPlace" element={<AiMarketPlace />} />
          <Route path="/skillCard" element={<SkillsGrid />} />
          <Route path="/sapEcoSystem" element={<SAPEcoSystem />} />
          <Route path="/sapJouleSystem" element={<JouleAiSystem />} />
          <Route path="/aiSolution" element={<SapAiSolution />} />
          <Route path="/procuresense" element={<Procuresense />} />
          <Route path="/BASample" element={<BASample />} />
          <Route path="/a2rrecon" element={<A2Rrecon />} />
          <Route path="/workingCapital" element={<WorkingCapital />} />
          <Route path="/priceWise" element={<PriceWise />} />
          <Route path="/datagenie" element={<DataGenie />} />
          <Route path="/autonomous" element={<AutonomousSupplyChain/>} />
          <Route path="/dataAnalyser" element={<DocumentAnalyser/>} />
          <Route path="/digigst" element={<DigiGST />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <ScrollToTop /> {/* scroll always reset */}

      <AnimatedRoutes /> {/* animated navigation */}
       <ChatbotIcon />
      <Footer />
    </div>
  );
}

export default App;

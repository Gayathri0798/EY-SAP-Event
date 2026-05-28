
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import Footer from "./components/Footer";
import AgentLibrary from "./pages/AgentLibrary";
import AgentLanding from "./pages/AgentLanding";
import SapAI from "./pages/SapAI";
import ExploreNexus from "./pages/ExploreNexus";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import Insights from "./pages/Insights";
import TalkToExperts from "./pages/TalkToExperts";
function App() {
  return (
    <div className="page-wrapper">
          <Navbar />
          
<Routes>
        <Route path="/" element={<HomeCarousel />} />
        <Route path="/marketplace" element={<AgentLibrary />} />
        <Route path="/studio" element={<AgentLanding />} />
        <Route path="/sap-ai" element={<SapAI />} />
        <Route path="/explore-nexus" element={<ExploreNexus />} />
        <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
        <Route path="/talk-to-experts" element={<TalkToExperts />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
          <Footer />
          </div>
  );
}

export default App;

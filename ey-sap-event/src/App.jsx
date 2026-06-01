
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
import AiMarketPlace from "./pages/AiMarketPlace";
import SkillsGrid from "./pages/SkillSet";
import SAPEcoSystem from "./pages/ecoSystem";
import JouleAiSystem from "./pages/jouleAI";
import SapAiSolution from "./pages/aiSolution";
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
        <Route path ='/aiMarketPlace' element={<AiMarketPlace/>}/>
        <Route path ="/skillCard" element = {<SkillsGrid/>}/>
        <Route path ="/sapEcoSystem" element={<SAPEcoSystem/>}/>
        <Route path ="/sapJouleSystem" element={<JouleAiSystem/>}/>
        <Route path ="/aiSolution" element={<SapAiSolution/>}/>
      </Routes>
          <Footer />
          </div>
  );
}

export default App;


import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import Footer from "./components/Footer";
import AgentLibrary from "./pages/AgentLibrary";
import AgentLanding from "./pages/AgentLanding";
import SapNow from "./pages/SapNow";
import ExploreNexus from "./pages/ExploreNexus";

function App() {
  return (
    <div className="page-wrapper">
          <Navbar />
          
<Routes>
        <Route path="/" element={<HomeCarousel />} />
        <Route path="/marketplace" element={<AgentLibrary />} />
        <Route path="/studio" element={<AgentLanding />} />
        <Route path="/sap-now" element={<SapNow />} />
        <Route path="/explore-nexus" element={<ExploreNexus />} />
      </Routes>

          <Footer />
          </div>
  );
}

export default App;

import { useState } from "react";
import AiMarketPlace from "./AiMarketPlace";
import Footer from "../components/Footer";
import SkillsGrid from "./SkillSet";
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";
function AgentLibrary() {
  const [view] = useState("home");
  // const [loadingAI, setLoadingAI] = useState(false);
  const navigate = useNavigate();
 
  return (
 
 
    <div className="homeWrap">
 
      {/* {loadingAI && (
        <div className="aiLoader">
          <div className="aiContent">
            <div className="aiBrain"></div>
            <h2 className="aiText">Analyzing Skills...</h2>
            <p className="aiSubText">Initializing AI Engine</p>
          </div>
        </div>
      )} */}
 
 
      {/*   HOME VIEW */}
      {view === "home" && (
        <>
          {/*   HERO */}
          <div className="homeHero">
            <div className="homeHeroContent">
              <h1>
                Discover ready-to-use agents and reusable skills<br />
              </h1>
              <p>
                Accelerate AI adoption with a curated marketplace of enterprise-ready capabilities.Explore pre-built agents for common business scenarios or combine reusable skills to build new solutions faster.
              </p>
            </div>
          </div>
 
          {/*   SECTION */}

          <div className="content-section">

    <div className="tiles">
        {/* TILE 1 */}
        <div className="tile">

            <h2>Agent Library</h2>
            <p className="tile-subtitle">20+ enterprise agents, ready to explore</p>

            <p className="desc">
              Your agent may already be built. Browse our library of pre-built agents designed to support common business processes, improve productivity, and accelerate deployment.
            </p>

            <button className="cta" onClick={() => navigate("/aiMarketPlace")}>Explore Agent Library</button>
          
        </div>

        {/* TILE 2 */}
        <div className="tile">

            <h2>Skills Library</h2>
            <p className="tile-subtitle">90+ reusable skills to power your agents</p>

            <p className="desc">
              Build faster with modular skills designed for extraction, analysis, orchestration, workflow automation, risk checks, and enterprise integrations.
            </p>

            <button className="cta" onClick={() => navigate("/skillCard")}>
              Explore Skill Library
            </button>
        </div>


        <div className="tile">

            <h2>BPA Library</h2>
            <p className="tile-subtitle">24+ pre-configured & tested automation templates</p>

            <p className="desc">
              Accelerate enterprise automation with reusable, SAP-delivered business content across Finance, Procurement, HR, Sales, and IT.</p>

            <button className="cta" onClick={() => navigate("/skillCard")}>
              Explore BPA Library
            </button>
        </div>
    </div>

  </div>
        </>
      )}
 
      {/*   MARKETPLACE */}
      {view === "marketplace" && (
        <>
          <AiMarketPlace />
 
          {/* <div className="homeBack">
            <button
              onClick={() => setView("home")}
              className="homeBtn"
            >
              ← Back
            </button>
          </div> */}
        </>
      )}
 
      {/*   SKILLS */}
      {view === "skills" && (
        <>
          <SkillsGrid />
 
          {/* <div className="homeBack">
            <button
              onClick={() => setView("home")}
              className="homeBtn"
            >
              ← Back
            </button>
          </div> */}
        </>
      )}
 
      <Footer />
    </div>
  );
}
 
export default AgentLibrary;
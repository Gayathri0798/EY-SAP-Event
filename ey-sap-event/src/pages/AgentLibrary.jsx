import { useState } from "react";
import AiMarketPlace from "./AiMarketPlace";
import Footer from "../components/Footer";
import SkillsGrid from "./SkillSet";
import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
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
 
 
      {/* ✅ HOME VIEW */}
      {view === "home" && (
        <>
          {/* ✅ HERO */}
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
 
          {/* ✅ SECTION */}
          <div className="homeSection">
            <div className="homeTiles">
 
              {/* ✅ MARKETPLACE TILE */}
              <div className="homeTile">
                <div className="homeTileInner">
 
                  <span className="homeTag">Agent Library </span>
 
                  <h3>20+ enterprise agents, ready to explore</h3>
 
                  <p className="homeDesc">
                    Your agent may already be built. Browse our library of pre-built agents designed to support common business processes, improve productivity, and accelerate deployment.
                  </p>
 
                  <button
                    className="homeBtn"
                    onClick={() => navigate("/aiMarketPlace")}
                  >
                    Explore Agent Library
                  </button>
 
                </div>
              </div>
 
              {/* ✅ SKILLS TILE */}
              <div className="homeTile">
                <div className="homeTileInner">
 
                  <span className="homeTag">Skill Library</span>
 
                  <h3>90+ reusable skills to power your agents</h3>
 
                  <p className="homeDesc">
                    Build faster with modular skills designed for extraction, analysis, orchestration, workflow automation, risk checks, and enterprise integrations.
                  </p>
 
                  <button
                    className="homeBtnAlt"
                    onClick={() => navigate("/skillCard")}
                  >
                    Explore Skill Library
                  </button>
 
                </div>
              </div>
 
            </div>
          </div>
        </>
      )}
 
      {/* ✅ MARKETPLACE */}
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
 
      {/* ✅ SKILLS */}
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
 
export default HomePage;
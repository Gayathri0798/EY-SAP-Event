import "../styles/agent-landing.css";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

export default function AgentLanding() {
  const navigate = useNavigate();
  const handleExternalRedirect = () => {
    window.open(
      "https://ey-nexus-approuter.cfapps.eu10-004.hana.ondemand.com/",
      "_blank",
    );
  };

  return (
    <div className="agent-page">

  {/* ✅ FULL WIDTH BANNER */}
  <div className="banner-section">
    <Banner
      title="Build Enterprise AI Agents at Scale"
      subtitle="Create, orchestrate and govern intelligent agents powered by EY Nexus."
      buttonText="Learn more"
      image="/images/lego.jpeg"
    />
  </div>

  {/* ✅ CONTENT SECTION (WITH PADDING) */}
  <div className="content-section">

    <div className="tiles">
        {/* TILE 1 */}
        <div className="tile">
          <div className="tile-inner">
            <span className="tag">Platform</span>

            <h2>EY Nexus</h2>
            <p className="tile-subtitle">Enterprise Agent Platform</p>

            <p className="desc">
              Governed enterprise platform for building, deploying and managing
              AI agents integrated with SAP ecosystems.
            </p>

            <button className="cta" onClick={() => navigate("/explore-nexus")}>Explore Nexus →</button>
          </div>
        </div>

        {/* TILE 2 */}
        <div className="tile">
          <div className="tile-inner">
            <span className="tag">Builder</span>

            <h2>Build Your Agent</h2>
            <p className="tile-subtitle">No-Code Agent Builder</p>

            <p className="desc">
              Create custom enterprise agents using workflows, prompts,
              constraints and SAP-connected data.
            </p>

            <button className="cta" onClick={handleExternalRedirect}>
              Create Agent →
            </button>
          </div>
        </div>
    </div>

  </div>

</div>
  );
}

import "../styles/agent-landing.css";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

export default function EnterpriseSolutions() {
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
            {/* <span className="tag">Platform</span> */}

            <h2>Autonomous Procurement Intelligence</h2>
            {/* <p className="tile-subtitle">Enterprise Agent Platform</p> */}

            <p className="desc">
              Transform sourcing, supplier management and procurement operations using AI-powered enterprise agents.
            </p>

            <button className="cta" onClick={() => navigate("/explore-nexus")}>Explore More →</button>
          </div>
        </div>

        {/* TILE 2 */}
        <div className="tile">
          <div className="tile-inner">
            {/* <span className="tag">Builder</span> */}

            <h2>AI for Intelligent Finance Operations</h2>
            {/* <p className="tile-subtitle">No-Code Agent Builder</p> */}

            <p className="desc">
              Create custom enterprise agents using workflows, prompts,
              constraints and SAP-connected data.
            </p>

            <button className="cta" onClick={handleExternalRedirect}>
              Explore More →
            </button>
          </div>
        </div>
        {/* TILE 3 */}

        <div className="tile">
          <div className="tile-inner">
            {/* <span className="tag">Builder</span> */}

            <h2>Intelligent Customer Experience</h2>
            {/* <p className="tile-subtitle">No-Code Agent Builder</p> */}

            <p className="desc">
              Create custom enterprise agents using workflows, prompts,
              constraints and SAP-connected data.
            </p>

            <button className="cta" onClick={handleExternalRedirect}>
              Explore More →
            </button>
          </div>
        </div>

        {/* TILE 4 */}
        <div className="tile">
          <div className="tile-inner">
            {/* <span className="tag">Builder</span> */}

            <h2>AI for Intelligent Workforce Management (HR)</h2>
            {/* <p className="tile-subtitle">No-Code Agent Builder</p> */}

            <p className="desc">
              Create custom enterprise agents using workflows, prompts,
              constraints and SAP-connected data.
            </p>

            <button className="cta" onClick={handleExternalRedirect}>
              Explore More →
            </button>
          </div>
        </div>
    </div>

  </div>

</div>
  );
}

import "../styles/procuresense.css";
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function FinancePlan() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Smart Financial Planning Automation"
          subtitle="Financial Plan Automation leverages SAP® Business Data Cloud (BDC) as a trusted, harmonized foundation for financial data, combined with SAP® Analytics Cloud (SAC) for integrated planning, budgeting, and analytics. The solution is augmented with AI to automate forecasting, scenario modeling, and anomaly detection. AI‑driven insights continuously analyze historical and real‑time financial data to identify trends, deviations, and risks, while SAC enables intuitive planning workflows and what‑if simulations. This integrated approach enables finance teams to move from manual, backward‑looking processes to intelligent, forward‑looking financial planning."
          // buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What Financial Plan Automation Delivers</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <p>Faster financial planning and forecasting cycles.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <p>Improved forecast accuracy through AI-driven insights.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <p>Early detection of anomalies and financial risks.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <p>Enhanced, data-driven decision-making for finance and business leaders.</p>
    </div>

  </div>
</div>

<div className="video-section">

      <h2 className="video-title">See Smart Financial Planning in Action</h2>
      <p className="video-subtitle">
        Detect financial data anomalies early to improve planning accuracy and confidence.
    </p>
      <div className="video-thumbnail-wrapper">
  
  {/* THUMBNAIL IMAGE */}
  <img
    src="/images/finance.jpeg"   // ✅ replace with your image
    alt="Video Thumbnail"
    className="video-thumbnail"
  />

  {/* PLAY BUTTON */}
  <button
    className="play-overlay-btn"
    onClick={() =>
      window.open(
        "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQBFF1xEopNRRY_dgi091B_VAebScEb9LSLoU1gHJzAOVfc?e=0AYpil",
        "_blank"
      )
    }
  >
    ▶
  </button>

</div>
    </div>

</>
  );
}
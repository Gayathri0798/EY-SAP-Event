import "../styles/procuresense.css";
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function SmartGL() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Smart GL Account Reconciliation"
          subtitle="Smart GL Account Reconciliation is an AI based reconciliation capability built on SAP® BTP and powered by AI models in SAP® AI Core. Using agentic AI patterns, Large Language Models, and pattern recognition, the solution ingests and reconciles data from multiple sources—even in the absence of predefined data models."
          // buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What Smart GL Account Recon Delivers</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <p>Automated, scalable GL and sub ledger reconciliations</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <p>Faster identification and resolution of discrepancies</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <p>Reduced manual effort and dependency on rigid rules.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <p>Improved close cycle efficiency and audit readiness.</p>
    </div>

  </div>
</div>

<div className="video-section">

      <h2 className="video-title">See Smart GL Account Reconciliation in Action</h2>
      <p className="video-subtitle">
        See agents match patterns, segregate data, and surface unmatched items for faster reconciliation.
    </p>
      <div className="video-thumbnail-wrapper">
  
  {/* THUMBNAIL IMAGE */}
  <img
    src="/images/aiworks.jpeg"   // ✅ replace with your image
    alt="Video Thumbnail"
    className="video-thumbnail"
  />

  {/* PLAY BUTTON */}
  <button
    className="play-overlay-btn"
    onClick={() =>
      window.open(
        "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQB7GKN4XQk8T59-JvRdZD9gAZ8wdj53qxKs_ssSx_mWE7k?e=Jun69L",
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
import "../styles/procuresense.css";
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function CustomerCorres() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="AI Powered Return Reason Classification & Root Cause Analysis"
          subtitle="Smart GL Account Reconciliation is an AI based reconciliation capability built on SAP® BTP and powered by AI models in SAP® AI Core."
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What Customer Correspondence Delivers</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <p>Faster and more accurate returns processing.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
       <p>Improved root cause visibility and corrective actions.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <p>Reduced operational costs and rework.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <p>Enhanced customer satisfaction and experience.</p>
    </div>

  </div>
</div>

<div className="video-section">

      <h2 className="video-title">See Returns Intelligence in Action</h2>
      <p className="video-subtitle">
        Automate return assistance, approvals, root cause analysis, and customer scoring.
      </p>

      <div className="video-thumbnail-wrapper">
  
  {/* THUMBNAIL IMAGE */}
  <img
    src="/images/workcentric.jpeg"   // ✅ replace with your image
    alt="Video Thumbnail"
    className="video-thumbnail"
  />

  {/* PLAY BUTTON */}
  <button
    className="play-overlay-btn"
    onClick={() =>
      window.open(
        "https://eyindia.sharepoint.com/:f:/s/SAPAITeam159/IgC7YMo1CO1hQ4WocIjISyt8Ab6cS6P9TlMNQV5UB7M49Zs?e=pRBgCp",
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
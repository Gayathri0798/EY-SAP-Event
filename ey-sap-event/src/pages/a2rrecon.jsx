import "../styles/procuresense.css";
import IntelligentReconciliationFlow from './IntelligentReconciliationFlow';
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function A2Rrecon() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Intelligent Reconciliation"
          subtitle="This solution enables automated, policy-aware review of accounting data by loading source records, validating them, and generating correction proposals with clear rationale. It gives users a guided workflow to inspect validation outcomes, compare before/after quality, and apply corrections with confidence. It also improves auditability by making decisions and correction logic transparent and traceable end to end."
          buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What Intelligen Reconciliation Delivers</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Accelerated Reconciliation</h3>
      <p>Automates data loading, validation, and correction drafting to reduce manual close effort.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>Actionable Validation Insights</h3>
      <p>Provides structured failure codes, targeted accounts, and rationale for faster reviewer action.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Enhanced Financial Control Visibility</h3>
      <p>Gives clear before/after validation visibility to understand risk and correction impact before posting.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Aligned Policy-Driven Decisioning</h3>
      <p>Aligns correction proposals with accounting policy references and business rules for consistent outcomes.</p>
    </div>

  </div>
</div>

   {/* canvas how ey works */}
   <div className="canvas-wrapper">
   <div className="canvas">
  <div className="grid-bg" />
  {/* HEADER */}
  <div className="header">
    {/* <h1>
      <span>Intelligent</span> Reconciliation
    </h1> */}
    <p>
      Solution integrates financial data from enterprise systems such as SAP and non-SAP sources into a unified reconciliation workflow. Its orchestration and validation engines process this data across accounting, policy, and control dimensions to identify breaks, generate correction proposals, and provide explainable rationale through an intuitive review dashboard. This enables faster, policy-aligned decisions with clear audit traceability before posting.
    </p>
  </div>
  <div className="htmlViewer">
 <IntelligentReconciliationFlow/>
  </div>
 
</div>
</div>

<div className="video-section">

      <h2 className="video-title">See Intelligent Reconciliation  in Action</h2>
      <p className="video-subtitle">
        Streamlines reconciliation workflows, improves correction accuracy, and enables data-driven, policy-aligned decisions to support stronger financial control, audit readiness, and operational alignment.
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
        "https://eyindia-my.sharepoint.com/:v:/r/personal/soumya_grover_in_ey_com/Documents/SAP%20NOW%202026/Videos/IntelliReco.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=PDslOQ",
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
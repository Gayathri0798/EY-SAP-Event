import "../styles/procuresense.css";
import Banner from "../components/Banner";
import ProcureSenseArchitecture from "../components/ProcureSenseArchitecture";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function ProcureSense() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Smarter Vendor Evaluation with AI"
          subtitle="ProcureSense helps procurement teams move beyond manual vendor comparison by using AI to analyze vendor pricing, performance, risk, and negotiation factors. It enables faster, more confident sourcing decisions while helping teams maximize savings and reduce supplier-related risks."
          // buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What ProcureSense Enables</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Faster Vendor Evaluation</h3>
      <p>Reduces manual effort and speeds up shortlisting.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>Better Risk Visibility</h3>
      <p>Helps identify supplier risks before contract signing.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Improved Savings Potential</h3>
      <p>Highlights pricing gaps and negotiation opportunities.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Shorter Turnaround Time</h3>
      <p>Accelerates procurement decisions and contract closure.</p>
    </div>

  </div>
</div>

   {/* canvas how ey works */}
   <ProcureSenseArchitecture />

<div className="video-section">

      <h2 className="video-title">See ProcureSense in Action</h2>
      <p className="video-subtitle">
        Watch how AI analyzes suppliers, identifies risks, and recommends savings opportunities in real time.
      </p>

      <div className="video-thumbnail-wrapper">
  
  {/* THUMBNAIL IMAGE */}
  <img
    src="/images/stock.jpeg"   // ✅ replace with your image
    alt="Video Thumbnail"
    className="video-thumbnail"
  />

  {/* PLAY BUTTON */}
  <button
    className="play-overlay-btn"
    onClick={() =>
      window.open(
        "https://eyindia-my.sharepoint.com/:v:/r/personal/soumya_grover_in_ey_com/Documents/SAP%20NOW%202026/Videos/ProcureSense.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=iZTiur",
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
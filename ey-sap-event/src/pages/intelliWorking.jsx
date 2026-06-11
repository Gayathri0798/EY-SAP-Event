import "../styles/procuresense.css";
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function IntelliWorkingCapital() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Smart Working Capital Intelligence"
          subtitle="The Intelligent Working Capital solution is an autonomous, AI led framework that continuously analyzes customer behavior, payment patterns, and outstanding balances. Goal oriented AI agents prioritize follow ups, recommend actions, and drive collections efficiency to optimize working capital."
          buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What EY intelligent Working Capital Delivers</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <p>Reduced Days Sales Outstanding (DSO)</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <p>Improved collections effectiveness and customer engagement.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <p>Lower risk of bad debt and overdue payments.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <p>Enhanced visibility into receivables performance.</p>
    </div>

  </div>
</div>

<div className="video-section">

      <h2 className="video-title">See Working Capital Intelligence in Action</h2>
      <p className="video-subtitle">
        Analyze customers, optimize dues, and prioritize receivables follow-ups with AI agents.
    </p>
      <div className="video-thumbnail-wrapper">
  
  {/* THUMBNAIL IMAGE */}
  <img
    src="/images/datachip.jpeg"   // ✅ replace with your image
    alt="Video Thumbnail"
    className="video-thumbnail"
  />

  {/* PLAY BUTTON */}
  <button
    className="play-overlay-btn"
    onClick={() =>
      window.open(
        "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQCTiOgO-IpfQbqT6EBt_Xq7ASjzrrAUNX-XqCyfXjzcolA?e=qtdCDG",
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
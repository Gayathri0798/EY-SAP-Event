import "../styles/procuresense.css";
import DataGeniePipeline from "../components/dataGenieArch";
import Banner from "../components/Banner";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import "../styles/video-section.css"

export default function DataGenie() {
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Unlock the Full Value of Your Data with DataGenie"
          subtitle="DataGenie transforms enterprise data into actionable intelligence through AI-powered conversational analytics. By automatically generating queries, visualizations, summaries, and business insights, it enables organizations to make faster, smarter, and more confident decisions without requiring SQL expertise or manual reporting."
          buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What DataGenie Enables</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Faster Data Analysis</h3>
      <p>Transform hours of manual analysis into seconds of AI-driven exploration.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>AI-Powered Insights</h3>
      <p>Identify business opportunities, risks, and performance drivers before they impact results.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Conversational Analytics</h3>
      <p>Interact with your data using plain English, no SQL or technical expertise required.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Automated Reporting</h3>
      <p>Deliver executive-ready summaries, visualizations, and recommendations instantly.</p>
    </div>

  </div>
</div>

   {/* canvas how ey works */}
   <div className="canvas-wrapper">
   <div className="canvas">
  <div className="grid-bg" />
  {/* HEADER */}
  {/* <div className="header">
    <h1>
      How <span> DataGenie </span> Works
    </h1>
    <p>
      DataGenie integrates with enterprise data ecosystems, bringing together information from multiple systems and sources. It transforms raw data into actionable intelligence using AI-powered analytics, interactive visualizations, and conversational insights.
    </p>
  </div> */}
  {/* SVG CONNECTORS — drawn on top of everything, z-index managed */}
  <div className="htmlViewer">
   <DataGeniePipeline/>
    </div>
</div>
</div>

<div className="video-section">

      <h2 className="video-title">DataGenie in Action</h2>
      <p className="video-subtitle">
       Watch how DataGenie transforms raw business data into actionable insights through AI-powered analytics.
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
        "https://eyindia-my.sharepoint.com/:v:/r/personal/soumya_grover_in_ey_com/Documents/SAP%20NOW%202026/Videos/Data%20Genie.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=44FEl8",
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
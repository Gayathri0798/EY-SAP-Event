import "../styles/procuresense.css";
import Banner from "../components/Banner";
import DocumentAnalyserPipeline from "../components/DocumentAnalyserPipeline";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import "../styles/video-section.css"

export default function DataAnalyser() {
  
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Unlock the Full Value of Your Documents with Document Analyser"
          subtitle="Document Analyser is a no-code AI solution that transforms enterprise documents into actionable insights, helping organizations accelerate decision-making, improve efficiency, and reduce manual effort."
          buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What Document Analyser Enables</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Intelligent Document Processing</h3>
      <p>Automatically ingest, extract, and process information from scanned and digital documents.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>Conversational Document Intelligence</h3>
      <p>Interact with documents using natural language to retrieve answers, insights, and contextual information.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Document Automation Workflows</h3>
      <p>Configure and execute AI-powered document processing pipelines without complex development effort.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Trust & Compliance Validation</h3>
      <p>Detect digital and handwritten signatures to support verification, audit, and compliance processes across critical business documents.</p>
    </div>

  </div>
</div>

   {/* canvas how ey works */}
   <DocumentAnalyserPipeline />

<div className="video-section">

      <h2 className="video-title">Document Analyser in Action</h2>
      <p className="video-subtitle">
        Watch how Document Analyser  transforms raw business data into actionable insights through AI-powered analytics.
      </p>

      <div className="video-thumbnail-wrapper">
  
  {/* THUMBNAIL IMAGE */}
  <img
    src="/images/cloudnetwork.jpeg"   // ✅ replace with your image
    alt="Video Thumbnail"
    className="video-thumbnail"
  />

  {/* PLAY BUTTON */}
  <button
    className="play-overlay-btn"
    onClick={() =>
      window.open(
        "https://eyindia-my.sharepoint.com/personal/soumya_grover_in_ey_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsoumya_grover_in_ey_com%2FDocuments%2FSAP+NOW+2026%2FVideos%2FIntelliReco.mp4",
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
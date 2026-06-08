import "../styles/procuresense.css";
import IntelligentReconciliationFlow from './IntelligentReconciliationFlow';
import Banner from "../components/Banner";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { useRef, useState } from "react";

export default function A2Rrecon() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const newTime = (clickX / width) * video.duration;
    video.currentTime = newTime;
  };
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

      <div className="video-floating">
        

        {/* VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/videos/IntelliReco.mp4" type="video/mp4" />
        </video>

        {/* PLAY / PAUSE BUTTON */}
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        {/* PROGRESS BAR */}
        <div className="progress-bar" onClick={handleSeek}>
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>
    </div>

</>
  );
}
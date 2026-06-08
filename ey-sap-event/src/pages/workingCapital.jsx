import "../styles/procuresense.css";
import CashPilotFlowLayout from './cashflow';
import Banner from "../components/Banner";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { useRef, useState } from "react";

export default function WorkingCapital() {
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
          title="Smarter Working Capital with AI"
          subtitle="CashPilot helps finance teams move beyond manual receivables, payables, and inventory tracking by using AI to detect cash leakage, resolve exceptions, and act autonomously across DSO, DPO, and DIO. It enables faster cash release, fewer manual touchpoints, and continuously improving working capital performance."
          buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What CashPilot Enables</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Faster Cash Release</h3>
      <p>Detects and resolves overdue invoices and exceptions before they age.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>Fewer Manual Touchpoints</h3>
      <p>Automates reconciliation, dispute, and follow-up actions end to end.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Optimised Cash Position</h3>
      <p>Balances DSO, DPO, and DIO levers to free up trapped working capital.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Continuous Improvement</h3>
      <p>Signavio feedback loop tunes detection so issues are caught earlier each cycle.</p>
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
      How <span> CashPilot </span> Works
    </h1> */}
    <p>
      CashPilot connects enterprise finance data from SAP, non-SAP, and banking systems, processes it through an AI-driven intelligence layer orchestrated via SAP Joule, and delivers actionable working capital insights through dashboards and a conversational chatbot.
    </p>
  </div>
  {/* SVG CONNECTORS — drawn on top of everything, z-index managed */}
  <div className="htmlViewer">
   <CashPilotFlowLayout/>
    </div>
</div>
</div>

<div className="video-section">

      <h2 className="video-title">See CashPilot in Action</h2>
      <p className="video-subtitle">
        Watch how CashPilot detects overdue invoices, resolves short-payments and disputes, reconciles automatically, and accelerates cash release across receivables, payables, and inventory through an AI-powered workflow.
      </p>

      <div className="video-floating">

        {/* VIDEO */}
        {/* <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/videos/Procuresense.mp4" type="video/mp4" />
        </video> */}

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
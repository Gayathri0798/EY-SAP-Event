import "../styles/procuresense.css";
import Banner from "../components/Banner";
import DocumentAnalyserPipeline from "../components/DocumentAnalyserPipeline";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { useRef, useState } from "react";

export default function DataAnalyser() {
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

      <div className="video-floating">

        {/* VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/videos/Procuresense.mp4" type="video/mp4" />
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
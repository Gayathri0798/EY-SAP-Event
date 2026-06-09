import "../styles/procuresense.css";
import DataGeniePipeline from "../components/dataGenieArch";
import Banner from "../components/Banner";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function DataGenie() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
useEffect(() => {
  if (videoRef.current) {
    setIsPlaying(!videoRef.current.paused);
  }
}, []);
  // const handleTimeUpdate = () => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   const percent = (video.currentTime / video.duration) * 100;
  //   setProgress(percent);
  // };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const newTime = (clickX / width) * video.duration;
    video.currentTime = newTime;
  };
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  };
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

      <div className="video-floating">

        {/* VIDEO */}
        <video
          ref={videoRef}
          loop
          playsInline
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/videos/Datagenie.mp4" type="video/mp4" />
        </video>

        {/* PLAY / PAUSE BUTTON */}
        
{!isPlaying && (
    <div className="video-overlay" onClick={togglePlay}>
      <div className="play-circle">▶</div>
    </div>
  )}

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
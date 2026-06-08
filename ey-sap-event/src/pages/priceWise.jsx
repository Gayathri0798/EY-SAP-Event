import "../styles/procuresense.css";
import DataArchitecturePipeline from './DataArchitecturePipeline';
import Banner from "../components/Banner";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { useRef, useState } from "react";

export default function PriceWise() {
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
          title="Intelligent Pricing Made Simple"
          subtitle="Pricewise enables organizations to make informed pricing decisions by consolidating data from across the enterprise. By leveraging real-time inputs, it supports accurate price recommendations and enhances alignment between sales and operations."
          buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What Pricewise Delivers</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Accelerated Pricing</h3>
      <p>Generates instant pricing for RFQs, reducing manual effort.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>Actionable Deal Insights</h3>
      <p>Provides structured insights to support informed decision-making.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Enhanced Profitability Visibility</h3>
      <p>Offers clear visibility into margin impact before execution.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Aligned Business Planning</h3>
      <p>Aligns pricing decisions with demand and supply conditions.</p>
    </div>

  </div>
</div>

   {/* canvas how ey works */}
   <div className="canvas-wrapper">
   <div className="canvas">
  <div className="grid-bg" />
  {/* HEADER */}
  <div className="header">
    <h1>
     How <span> Pricewise </span> Works
    </h1>
    <p>
      Pricewise integrates data from enterprise systems such as SAP and Non SAP entites, CRM platforms, supply chain applications, and market data sources into a unified environment. Its core Pricing Engine processes this data in real time, combining inputs across customer, sales, operations, and financial dimensions to generate pricing recommendations and business insights through an intuitive dashboard.
    </p>
  </div>
  <div className="htmlViewer">
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
          <source src="/videos/Pricewise.mp4" type="video/mp4" />
        </video>

        {/* PLAY / PAUSE BUTTON */}
        {/* <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button> */}

        {/* PROGRESS BAR */}
        <div className="progress-bar" onClick={handleSeek}>
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>
 {/* <DataArchitecturePipeline/> */}
  </div>
 
</div>
</div>

<div className="video-section">

      <h2 className="video-title">See Pricewise in Action</h2>
      <p className="video-subtitle">
        Discover how Pricewise streamlines RFQ responses, improves pricing accuracy, and enables data-driven decision-making to support sustainable revenue growth and operational alignment.
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
          <source src="/videos/Pricewise.mp4" type="video/mp4" />
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
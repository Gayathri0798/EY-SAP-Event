import "../styles/procuresense.css";
import Banner from "../components/Banner";
import ProcureSenseArchitecture from "../components/ProcureSenseArchitecture";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { useRef, useState } from "react";

export default function ProcureSense() {
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
          title="Smarter Vendor Evaluation with AI"
          subtitle="ProcureSense helps procurement teams move beyond manual vendor comparison by using AI to analyze vendor pricing, performance, risk, and negotiation factors. It enables faster, more confident sourcing decisions while helping teams maximize savings and reduce supplier-related risks."
          buttonText="Learn more"
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
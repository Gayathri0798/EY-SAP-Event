import "../styles/procuresense.css";
import Banner from "../components/Banner";
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
   <div className="canvas-wrapper">
   <div className="canvas">
  <div className="grid-bg" />
  {/* HEADER */}
  <div className="header">
    <h1>
      How <span>ProcureSense</span> Works
    </h1>
    <p>
      AI-powered procurement and negotiation intelligence for data-backed
      supplier decisions
    </p>
  </div>
  {/* SVG CONNECTORS — drawn on top of everything, z-index managed */}
  <svg
    className="connectors-svg"
    id="connectors"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Gradient for left connectors */}
      <linearGradient id="lgLeft1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#00d4e8", stopOpacity: 0 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#00d4e8", stopOpacity: "0.6" }}
        />
      </linearGradient>
      <linearGradient id="lgLeft2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#f5c842", stopOpacity: 0 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#f5c842", stopOpacity: "0.5" }}
        />
      </linearGradient>
      {/* Gradient for right connectors */}
      <linearGradient id="lgRight1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "#00d4e8", stopOpacity: "0.6" }}
        />
        <stop offset="100%" style={{ stopColor: "#00d4e8", stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="lgRight2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "#f5c842", stopOpacity: "0.4" }}
        />
        <stop offset="100%" style={{ stopColor: "#f5c842", stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="lgRight3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "#8b5cf6", stopOpacity: "0.4" }}
        />
        <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="lgRight4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "#22c55e", stopOpacity: "0.35" }}
        />
        <stop offset="100%" style={{ stopColor: "#22c55e", stopOpacity: 0 }} />
      </linearGradient>
      <linearGradient id="lgRight5" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{ stopColor: "#3b82f6", stopOpacity: "0.35" }}
        />
        <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    {/* 
Layout reference (all y values are relative to canvas top, including 48px padding + 36px header + 36px gap ≈ 120px to layout start):

Left column right edge x = 60 + 330 = 390
Center card left edge x = 60 + 330 + 60 = 450
Center card right edge x = 60 + 330 + 60 + 540 = 990
Right column left edge x = 60 + 330 + 60 + 540 + 60 = 1050

Layout top y ≈ 160px (48px padding + 10px header area approx)
Enterprise systems group midpoint y ≈ 245
Procurement data group midpoint y ≈ 470

Center card top y ≈ 160, height ~560
Center card vertical mid ≈ 440
    */}
    {/* LEFT → CENTER: Enterprise Systems bundle (2 lines) */}
    <path
      d="M 390 245 C 420 245, 430 300, 450 300"
      stroke="url(#lgLeft1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M 390 265 C 422 265, 432 320, 450 320"
      stroke="url(#lgLeft2)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    {/* LEFT → CENTER: Procurement Data bundle (3 lines) */}
    <path
      d="M 390 430 C 420 430, 430 400, 450 400"
      stroke="url(#lgLeft1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.7"
    />
    <path
      d="M 390 455 C 420 455, 432 420, 450 420"
      stroke="url(#lgLeft2)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M 390 480 C 420 480, 432 440, 450 440"
      stroke="url(#lgLeft1)"
      strokeWidth={1}
      fill="none"
      opacity="0.4"
    />
    {/* CENTER → RIGHT: Fan of connector lines */}
    {/* Output 1 - Vendor Shortlists (top) */}
    <path
      d="M 990 290 C 1020 290, 1030 215, 1050 215"
      stroke="url(#lgRight1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.8"
    />
    {/* Output 2 - Vendor Comparisons */}
    <path
      d="M 990 320 C 1020 320, 1030 270, 1050 270"
      stroke="url(#lgRight2)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.7"
    />
    {/* Output 3 - KPI Dashboard */}
    <path
      d="M 990 350 C 1020 350, 1030 330, 1050 330"
      stroke="url(#lgRight3)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.7"
    />
    {/* Output 4 - Negotiation Summary */}
    <path
      d="M 990 380 C 1018 380, 1030 390, 1050 390"
      stroke="url(#lgRight2)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.7"
    />
    {/* Output 5 - Savings */}
    <path
      d="M 990 410 C 1018 410, 1030 450, 1050 450"
      stroke="url(#lgRight4)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.7"
    />
    {/* Output 6 - Risk & Delivery */}
    <path
      d="M 990 440 C 1018 440, 1030 510, 1050 510"
      stroke="url(#lgRight1)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    {/* Output 7 - Chatbot */}
    <path
      d="M 990 470 C 1018 470, 1030 570, 1050 570"
      stroke="url(#lgRight5)"
      strokeWidth={1}
      fill="none"
      opacity="0.5"
    />
  </svg>
  {/* THREE-COLUMN LAYOUT */}
  <div className="layout">
    {/* ═══ LEFT COLUMN ═══ */}
    <div className="left-col">
      {/* Enterprise Systems */}
      <div className="input-group">
        <div className="group-label">Enterprise Systems</div>
        <div className="system-item">
          <div className="sys-icon sap-ariba">SAP</div>
          <span className="sys-name">SAP Ariba</span>
          <span className="dot cyan" />
        </div>
        <div className="system-item">
          <div className="sys-icon sap-s4">S/4</div>
          <span className="sys-name">SAP S/4HANA</span>
          <span className="dot yellow" />
        </div>
        <div className="system-item">
          <div className="sys-icon erp">
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
              <rect
                x={1}
                y={1}
                width={12}
                height={12}
                rx={2}
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M4 7h6M7 4v6" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="sys-name">Non-SAP ERP Systems</span>
          <span className="dot blue" />
        </div>
        <div className="system-item">
          <div className="sys-icon tool">
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
              <circle
                cx={7}
                cy={7}
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <span className="sys-name">Third-Party Tool</span>
          <span className="dot teal" />
        </div>
      </div>
      {/* Procurement Data */}
      <div className="input-group">
        <div className="group-label">Procurement Data</div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <circle cx={9} cy={6} r={3} stroke="#8899b0" strokeWidth="1.4" />
            <path
              d="M3 15c0-3 2.7-5 6-5s6 2 6 5"
              stroke="#8899b0"
              strokeWidth="1.4"
            />
          </svg>
          <span className="data-name">Supplier Master Data</span>
          <span className="dot cyan" style={{ marginLeft: "auto" }} />
        </div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <rect
              x={2}
              y={2}
              width={14}
              height={14}
              rx={2}
              stroke="#8899b0"
              strokeWidth="1.4"
            />
            <path d="M5 6h8M5 9h6M5 12h4" stroke="#8899b0" strokeWidth="1.2" />
          </svg>
          <span className="data-name">PO &amp; Invoice Data</span>
          <span className="dot yellow" style={{ marginLeft: "auto" }} />
        </div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 13 L6 8 L10 10 L14 5 L16 7"
              stroke="#8899b0"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
          <span className="data-name">Pricing &amp; Discount History</span>
          <span className="dot blue" style={{ marginLeft: "auto" }} />
        </div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <rect
              x={2}
              y={3}
              width={14}
              height={12}
              rx={2}
              stroke="#8899b0"
              strokeWidth="1.4"
            />
            <path d="M6 3V2M12 3V2M2 8h14" stroke="#8899b0" strokeWidth="1.2" />
          </svg>
          <span className="data-name">Contract &amp; Payment Terms</span>
          <span className="dot green" style={{ marginLeft: "auto" }} />
        </div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <rect
              x={2}
              y={2}
              width={14}
              height={14}
              rx={2}
              stroke="#8899b0"
              strokeWidth="1.4"
            />
            <path d="M9 5v4l3 2" stroke="#8899b0" strokeWidth="1.2" />
          </svg>
          <span className="data-name">Delivery Performance Data</span>
          <span className="dot teal" style={{ marginLeft: "auto" }} />
        </div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <circle cx={9} cy={9} r={6} stroke="#8899b0" strokeWidth="1.4" />
            <path d="M9 6v3l2 2" stroke="#8899b0" strokeWidth="1.2" />
          </svg>
          <span className="data-name">External Risk / Market Data</span>
          <span
            className="dot"
            style={{ marginLeft: "auto", background: "var(--orange)" }}
          />
        </div>
        <div className="data-item">
          <svg className="data-icon" viewBox="0 0 18 18" fill="none">
            <circle
              cx={9}
              cy={9}
              r={6}
              stroke="#8899b0"
              strokeWidth="1.4"
              strokeDasharray="3 2"
            />
          </svg>
          <span className="data-name">Other Relevant Data</span>
          <span
            className="dot"
            style={{ marginLeft: "auto", background: "var(--purple)" }}
          />
        </div>
      </div>
    </div>
    {/* ═══ CENTER CARD ═══ */}
    <div className="center-card">
      {/* Header pill */}
      <div className="center-card-header">
        <div className="ps-pill">
          <div className="ps-pill-dot" />
          <span className="ps-pill-text">ProcureSense AI</span>
        </div>
        <div className="ps-subtitle">Procurement Intelligence Agent</div>
      </div>
      {/* Agent Crew Label */}
      <div className="crew-label">Procurement Agent Crew</div>
      {/* Agent Crew Area */}
      <div className="crew-area">
        {/* Orbit rings */}
        <div className="orbit-halo-outer" />
        <div className="orbit-halo" />
        {/* Central AI Node */}
        <div className="ai-node">
          <div className="ai-node-text">AI</div>
          <div className="ai-node-sub">
            Procure
            <br />
            Sense
          </div>
        </div>
        {/* Agent Nodes */}
        <div className="agent-node cyan agent-vendor-comparison">
          Vendor
          <br />
          Comparison
        </div>
        <div className="agent-node teal agent-vendor-shortlisting">
          Vendor
          <br />
          Shortlisting
        </div>
        <div className="agent-node blue agent-kpi">
          KPI
          <br />
          Insights
        </div>
        <div className="agent-node orange agent-risk">
          Risk &amp;
          <br />
          Delivery
        </div>
        <div className="agent-node green agent-savings">
          Savings
          <br />
          Opportunity
        </div>
        <div className="agent-node purple agent-negotiation">
          Negotiation
          <br />
          Summary
        </div>
      </div>
      {/* Bottom Tiles */}
      <div className="bottom-tiles">
        <div className="bottom-tile">
          <span className="tile-icon">🧠</span>
          <div className="tile-name">Procurement Memory</div>
          <div className="tile-desc">
            Supplier, spend &amp; negotiation context
          </div>
        </div>
        <div className="bottom-tile">
          <span className="tile-icon">⚡</span>
          <div className="tile-name">Negotiation Skills</div>
          <div className="tile-desc">Commercial levers &amp; tactics</div>
        </div>
        <div className="bottom-tile">
          <span className="tile-icon">🛡️</span>
          <div className="tile-name">Data Guardrails</div>
          <div className="tile-desc">Grounded, masked &amp; policy-aware</div>
        </div>
      </div>
    </div>
    {/* ═══ RIGHT COLUMN ═══ */}
    <div className="right-col">
      <div className="outputs-label">Procurement Intelligence Outputs</div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--yellow)" }} />
        <div>
          <div className="output-title">Vendor Shortlists</div>
          <div className="output-desc">
            Ranked vendors based on savings, risk, PO value, delivery terms, and
            commercial fit.
          </div>
        </div>
      </div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--cyan)" }} />
        <div>
          <div className="output-title">Vendor Comparisons</div>
          <div className="output-desc">
            Side-by-side comparison of pricing, payment terms, delivery,
            discounts, and risk.
          </div>
        </div>
      </div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--blue)" }} />
        <div>
          <div className="output-title">Vendor KPI Dashboard</div>
          <div className="output-desc">
            Annual spend, invoice values, average price per unit, discounts, and
            supplier metrics.
          </div>
        </div>
      </div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--orange)" }} />
        <div>
          <div className="output-title">Overall Negotiation Summary</div>
          <div className="output-desc">
            Summarized negotiation position, supplier context, key risks,
            savings opportunities, and recommended talking points.
          </div>
        </div>
      </div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--green)" }} />
        <div>
          <div className="output-title">Savings Opportunities</div>
          <div className="output-desc">
            Price-above-average gaps, discount leakage, and supplier
            consolidation opportunities.
          </div>
        </div>
      </div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--teal)" }} />
        <div>
          <div className="output-title">Risk &amp; Delivery Insights</div>
          <div className="output-desc">
            Supplier risk signals, delivery performance trends, and reliability
            indicators.
          </div>
        </div>
      </div>
      <div className="output-card">
        <div className="output-dot" style={{ background: "var(--purple)" }} />
        <div>
          <div className="output-title">Conversational Chatbot</div>
          <div className="output-desc">
            Role-based procurement intelligence through an interactive chatbot.
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end .layout */}
</div>
</div>

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
          muted
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
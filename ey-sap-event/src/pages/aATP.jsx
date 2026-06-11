import "../styles/procuresense.css";
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function ProductAvailability() {
  return (
      <>
      <div className="banner-section">
          <Banner
            title="Smart Product Availability & Allocation"
            subtitle="The AI Powered aATP solution replaces static ATP logic with an intelligent decision engine that evaluates demand, customer priority, historical behavior, and live inventory signals to optimize fulfillment and allocation decisions."
            image="/images/lego.jpeg"
          />
        </div>
    {/* cards section */}
  
  <div className="ps-benefits">
    <h2>What SMART FULFILLMENT Delivers</h2>
  
    <div className="benefits-grid">
  
      <div className="benefit-card">
        <div className="icon-box icon-yellow">
          <Zap size={20} />
        </div>
        <p>Improved order fulfillment and service levels.</p>
      </div>
  
      <div className="benefit-card highlight">
        <div className="icon-box icon-cyan">
          <ShieldCheck size={20} />
        </div>
         <p>Smarter backorder management and allocation.</p>
      </div>
  
      <div className="benefit-card">
        <div className="icon-box icon-green">
          <DollarSign size={20} />
        </div>
        <p>Better alignment with strategic customers and demand priorities.</p>
      </div>
  
      <div className="benefit-card">
        <div className="icon-box icon-blue">
          <Clock size={20} />
        </div>
        <p>Increased supply chain agility and resilience.</p>
      </div>
  
    </div>
  </div>
  
  <div className="video-section">
  
        <h2 className="video-title">See Smart Fulfillment in Action</h2>
        <p className="video-subtitle">
         Recommend products, process orders, score customers, and forecast demand with AI agents.
        </p>
  
        <div className="video-thumbnail-wrapper">
    
    {/* THUMBNAIL IMAGE */}
    <img
      src="/images/aiworks.jpeg"   // ✅ replace with your image
      alt="Video Thumbnail"
      className="video-thumbnail"
    />
  
    {/* PLAY BUTTON */}
    <button
      className="play-overlay-btn"
      onClick={() =>
        window.open(
          "https://eyindia.sharepoint.com/:f:/s/SAPAITeam159/IgAP1WfCUZLlSpcAZROzjKhiAZvry4USE4YxrrHXBX93iyc?e=sbf1fD",
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
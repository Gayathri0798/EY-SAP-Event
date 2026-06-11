import "../styles/procuresense.css";
import Banner from "../components/Banner";
import "../styles/video-section.css"
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function DeliveryInsights() {
  return (
      <>
      <div className="banner-section">
          <Banner
            title="Smart Delivery Risk Insights"
            subtitle="The solution builds upon the standard SAP® Predicted Delivery Delay application, extending it with transportation data and AI‑driven predictions of transit duration to provide a more accurate and dynamic estimation of delivery timelines. Each sales order item’s confirmed delivery date is evaluated with a probability score and associated risk factors, enabling proactive identification of potential delays."
            image="/images/lego.jpeg"
          />
        </div>
    {/* cards section */}
  
  <div className="ps-benefits">
    <h2>What EY Delivery Intelligence Delivers</h2>
  
    <div className="benefits-grid">
  
      <div className="benefit-card">
        <div className="icon-box icon-yellow">
          <Zap size={20} />
        </div>
        <p>Improved delivery date accuracy through predictive and probabilistic insights</p>
      </div>
  
      <div className="benefit-card highlight">
        <div className="icon-box icon-cyan">
          <ShieldCheck size={20} />
        </div>
         <p>Enhanced DIFOT (Delivery In Full On Time) performance.</p>
      </div>
  
      <div className="benefit-card">
        <div className="icon-box icon-green">
          <DollarSign size={20} />
        </div>
        <p>Early identification of high‑risk orders and potential delays.</p>
      </div>
  
      <div className="benefit-card">
        <div className="icon-box icon-blue">
          <Clock size={20} />
        </div>
        <p>Reduced supply chain disruptions through proactive intervention.</p>
      </div>
  
    </div>
  </div>
  
  <div className="video-section">
  
        <h2 className="video-title">See Delivery Risk Insights in Action</h2>
        <p className="video-subtitle">
          Predict delivery delays and act before disruptions.
          </p>
  
        <div className="video-thumbnail-wrapper">
    
    {/* THUMBNAIL IMAGE */}
    <img
      src="/images/stock.jpeg"   // ✅ replace with your image
      alt="Video Thumbnail"
      className="video-thumbnail"
    />
  
    {/* PLAY BUTTON */}
    <button
      className="play-overlay-btn"
      onClick={() =>
        window.open(
          "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQAyeqrDMNJpQ4NgM3qwI4UqAflvajlLAmBxPyTlw_h_FTw?e=FCvjeP",
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
import { useState, useEffect } from "react";
import "../styles/jouleAI.css";
 
import trueCost from "../video/true-cost.mp4";
import p2p from "../video/P2PAgent.mp4";
import fsmAgent from "../video/fsmAgent.mp4";
import aiPowered from "../video/AiPoweredCircularityAdvisorAgent.mp4";
import loadOptimizerAgent from "../video/loadOptimizeAgent.mp4";
import fmiAgent from "../video/fmiAgent.mp4";
import masterData from "../video/masterDataAgent.mp4";
import quickOrderAgent from "../video/quickOrderAgent.mov";
import resourceCoordinator from "../video/resourceCoordinator_jouleAgent.mp4";
import employeeAgent from "../video/employeeTravelAgent.mp4";
 
 
const tabsData = [
  {
    id: 1,
    title: "EY True Cost Agent",
    video: trueCost,
    content:
      "Identifies hidden costs like returns, rework, and late shipments that distort profitability."
  },
  {
    id: 2,
    title: "EY Smart P2P Agent",
    video: p2p,
    content:
      "Automates invoice processing to eliminate manual errors and delays."
  },
  {
    id: 3,
    title: "EY FSM Agent",
    video: fsmAgent,
    content:
      "Provides field engineers real-time access to asset data and repair instructions."
  },
  {
    id: 4,
    title: "EY AI Circularity Advisor",
    video: aiPowered,
    content:
      "Helps teams choose eco-friendly and compliant materials."
  },
  {
    id: 5,
    title: "EY Load Optimizer Agent",
    video: loadOptimizerAgent,
    content:
      "Maximizes container efficiency and reduces shipping cost."
  },
  {
    id: 6,
    title: "EY Finance Manager Invoicing Agent",
    video: fmiAgent,
    content:
      "Ensures timely invoicing with proforma previews."
  },
  {
    id: 7,
    title: "EY Master Data Agent",
    video: masterData,
    content:
      "Improves data quality for accurate business information."
  },
  {
    id: 8,
    title: "EY Quick Order Agent",
    video: quickOrderAgent,
    content:
      "AI chatbot to place orders using simple text input."
  },
  {
    id: 9,
    title: "EY Resource Coordinator",
    video: resourceCoordinator,
    content:
      "Optimizes workforce scheduling and planning."
  },
  {
    id: 10,
    title: "EY Employee Travel Agent",
    video: employeeAgent,
    content:
      "Simplifies travel planning with AI recommendations."
  }
];
 
 
export default function JouleAiSystem() {
  const [activeTab, setActiveTab] = useState(1);
  const [animate, setAnimate] = useState(true);
 
  const activeData = tabsData.find((tab) => tab.id === activeTab);
 
useEffect(() => {
  const timeout = setTimeout(() => {
    setAnimate(true);
  }, 50);

  return () => clearTimeout(timeout);
}, [activeTab]);

 
  return (
    <div className="tabs-container">
 
      <div className="tabs-header">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
 
     
      <div className={`hero-section ${animate ? "fade-in" : ""}`}>
 
       
        <h1 className="hero-title slide-up">
          {activeData.title}
        </h1>
 
     
        <p className="hero-subtitle slide-up delay">
          {activeData.content}
        </p>
 
       
        <div className="video-wrapper zoom-in">
          <video
            key={activeData.video}
            src={activeData.video}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          />
        </div>
 
      </div>
    </div>
  );
}

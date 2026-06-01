import { useState } from "react";
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
    content: "GIdentifies hidden costs like returns, rework, and late shipments that distort profitability. Links these costs to financial outcomes for better decisions on product design, vendor selection, and packaging."
  },
  {
    id: 2,
    title: "EY Smart P2P Agent",
    video: p2p,
    content: "Automates invoice processing to eliminate manual errors and delays. Improves accuracy, speeds up approvals, and reduces operational costs in Accounts Payable"
  },
  {
    id: 3,
    title: "EY FSM Agent",
    video: fsmAgent,
    content: "AI assistant integrated with SAP and Joule app gives field engineers real-time, hands-free access to asset data, repair instructions, and safety guidelines—boosting efficiency and reliability. "
  },
  {
    id: 4,
    title: "EY AI-Powered Circularity Advisor Agent",
    video: aiPowered,
    content: "Helps teams choose compliant, eco-friendly materials with visibility into recyclability, fees, and regional regulations—reducing environmental impact and costs. "
  }
  ,
  {
    id: 5,
    title: "EY Load Optimizer agent",
    video: loadOptimizerAgent,
    content: "Maximizes container load efficiency to cut shipping costs, carbon footprint, and handling charges—optimizing logistics and sustainability. "
  },
  {
    id: 6,
    title: "EY Finance Manager Invoicing agent",
    video: fmiAgent,
    content: "Ensures timely invoicing with proforma previews, improving cash flow and customer experience."
  },
  {
    id: 7,
    title: "EY Master Data Agent",
    video: masterData,
    content: "Improves data quality and supports Master Data Management processes for accurate, consistent business information."
  },
 
  {
    id: 8,
    title: "EY Quick Order Agent",
    video: quickOrderAgent,
    content: "AI-powered chatbot that enables store staff to place orders for goods not for resale (GNFR) via simple text interaction. The agent automatically creates order requests based on catalogue items."
  },
  {
    id: 9,
    title: "EY resource Coordinator agent",
    video: resourceCoordinator,
    content: " "
  },
  {
    id: 10,
    title: "EY Employee Travel Agent",
    video:employeeAgent,
    content: " "
  },
 
];

export default function JouleAiSystem() {
  const [activeTab, setActiveTab] = useState(1);

  const activeData = tabsData.find(tab => tab.id === activeTab);

  return (
    <div className="tabs-container">

      {/* TABS */}
      <div className="tabs-header">
        {tabsData.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="tabs-content">

        {/* VIDEO SECTION */}
        <div className="video-box">
            <video
              key={activeData.video}
              src={activeData.video}
              controls
              autoPlay
              loop
              className="video"
            />
          

        </div>

        {/* TEXT SECTION */}
        <div className="text-box">
          <h2>{activeData.title}</h2>
          <p>{activeData.content}</p>
        </div>

      </div>
    </div>
  );
}



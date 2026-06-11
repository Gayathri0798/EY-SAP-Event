import { useState, useEffect } from "react";
import "../styles/jouleAI.css";
// import trueCost from "../video/true-cost.mp4";
// import p2p from "../video/P2PAgent.mp4";
// import fsmAgent from "../video/fsmAgent.mp4";
// import aiPowered from "../video/AiPoweredCircularityAdvisorAgent.mp4";
// import loadOptimizerAgent from "../video/loadOptimizeAgent.mp4";
// import fmiAgent from "../video/fmiAgent.mp4";
// import masterData from "../video/masterDataAgent.mp4";
// import quickOrderAgent from "../video/quickOrderAgent.mov";
// import resourceCoordinator from "../video/resourceCoordinator_jouleAgent.mp4";
// import employeeAgent from "../video/employeeTravelAgent.mp4";


const tabsData = [
  {
    id: 1,
    title: "EY True Cost Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20True%20Cost%20Agent.mp4?csf=1&web=1&e=jERc9J",
    content:
      "Identifies hidden costs like returns, rework, and late shipments that distort profitability.",
    thumbnail: "/images/legoscreen.jpeg"

  },
  {
    id: 2,
    title: "EY Smart P2P Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20Smart%20P2P%20Agent.mp4?csf=1&web=1&e=gbOq08",
    content:
      "Automates invoice processing to eliminate manual errors and delays.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 3,
    title: "EY FSM Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20Field%20Service%20Management%20Agent.mp4?csf=1&web=1&e=bZOkmr",
    content:"Provides field engineers real-time access to asset data and repair instructions.",
    thumbnail:"/images/legoscreen.jpeg"
  },
  {
    id: 4,
    title: "EY AI Circularity Advisor",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20AI-Powered%20Circularity%20Advisor%20Agent.mp4?csf=1&web=1&e=pxKDc7",
    content:
      "Helps teams choose eco-friendly and compliant materials.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 5,
    title: "EY Load Optimizer Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20Load%20Optimizer%20Agent.mp4?csf=1&web=1&e=VUcXbh",
    content:
      "Maximizes container efficiency and reduces shipping cost.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 6,
    title: "EY Finance Manager Invoicing Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20Finance%20Manager%20Invoicing%20Agent.mp4?csf=1&web=1&e=fz1IuR",
    content:
      "Ensures timely invoicing with proforma previews.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 7,
    title: "EY Master Data Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20Master%20Data%20Agent.mp4?csf=1&web=1&e=cqIvEi",
    content:
      "Improves data quality for accurate business information.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 8,
    title: "EY Quick Order Agent",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/EY%20Master%20Data%20Agent.mp4?csf=1&web=1&e=cqIvEi",
    content:
      "AI chatbot to place orders using simple text input.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 9,
    title: "EY Resource Coordinator",
    video: "https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared%20Documents/SAP%20AI/Recordings%20%26%20Demos/Joule/joule%20agents/Resource%20Coordinator_Joule%20Agent.mp4?csf=1&web=1&e=Kgp9mF",
    content:
      "Optimizes workforce scheduling and planning.",
      thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 10,
    title: "EY Employee Travel Agent",
    video: "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQCAJNubbpdlT7ywS9MrfjoZAY2pwFheq2fJ_68HS472QaQ?e=tKoYII",
    content:
      "Simplifies travel planning with AI recommendations.",
      thumbnail: "/images/legoscreen.jpeg"
  }, {
    id: 11,
    title: "Intelligent Invoice Matching",
    vide: "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQBtaUtLPZMbSKfJvEpzFBy3AbXcqLiXh5ddNRZORBWuLzQ?e=h1Lvem",
    content: "EY Intelligent Invoice Matching leverages AI to automate invoice data extraction, validation, and matching against purchase orders and goods receipts. The intelligent agent orchestrates end to end invoice processing workflows, accelerating approvals while ensuring data accuracy and compliance.",
    thumbnail: "/images/legoscreen.jpeg"
  }, {
    id: 12,
    title: "EY shadow Cost Agent",
    video: "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQBCaRGroXW4R6803Fe0NS4SAUClT3lDZJ8JWQLFsKVn94E?e=NlR5Fn",
    content: "The EY Shadow Cost Agent uses AI to continuously scan operational and financial processes to detect inefficiencies, cost leakages, and compliance deviations that are not immediately visible in standard reporting.",
    thumbnail: "/images/legoscreen.jpeg"
  }, {
    id: 13,
    title: "Risk Assessment Predictive & Preventive Work Orders",
    vidoe: "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQDFm0yrmlrwSakev03zbTeOAUsLn7hS1wXzioaeMPCo0ac?e=xABoJs",
    content: "AI‑Driven Alerts in SAP® Plant Maintenance enhance standard SAP® PM capabilities by integrating IoT data, machine learning models, and real‑time analytics to continuously monitor asset conditions. The solution automatically detects anomalies, deviations, and early indicators of potential failures. Intelligent alerts are generated and triggered directly within SAP® PM, enabling maintenance teams to take timely action based on predictive insights rather than reactive signals. These alerts can be configured based on asset criticality, operational thresholds, and business rules—ensuring relevant, actionable notifications reach the right users at the right time.",
    thumbnail: "/images/legoscreen.jpeg"
  },
  {
    id: 14,
    title: "Automated Purchase Requisition Creation",
    video: "https://eyindia.sharepoint.com/sites/SAPAITeam159/Shared Documents/SAP AI/SAP NOW/../../../../../:f:/s/SAPAITeam159/IgBaQp28fBzHRIwLQQBR7UcWAVnAbj_hvNzGQqygnFFbul8?e=t4eLHj",
    content: "The Automated Purchase Requisition solution leverages SAP® Joule Studio and the orchestration capabilities of Joule Agents to enable end‑to‑end PR creation through a single natural‑language prompt. Once deployed, an authorized user can simply describe their purchase requirement in conversational language. The Joule Agent interprets the request, orchestrates the required SAP® processes, validates key inputs, and automatically creates the Purchase Requisition in SAP®—without the user needing any SAP® transaction knowledge. The solution supports both direct and indirect materials, applies predefined business rules and approvals, and ensures consistency with procurement and compliance policies.",
    thumbnail: "/images/legoscreen.jpeg"

  }, {
    id: 15,
    title: "Purchase Order Agent",
    video: "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQBcLLMjucYTR4XFh1zhZPrIAbIDJAs_DNNgT9J_MglUyJU?e=1Yhnq2",
    content: "The AI‑Powered Conversational Procurement Agent integrates seamlessly with SAP S/4HANA® to provide a natural language interface for procurement activities. Users can interact with the system conversationally to retrieve real‑time procurement data, ask follow‑up questions for deeper insights, and execute transactions such as purchase requisition creation. Leveraging advanced AI and contextual understanding, the agent interprets user intent, retrieves relevant data, and orchestrates backend SAP® processes. It supports end‑to‑end procurement interactions—from inquiry to action—within a single, intuitive conversational experience, significantly simplifying system usage",
    thumbnail: "/images/legoscreen.jpeg"
  }, {
    id: 16,
    title: "Maintenance Insight Agent",
    video: "https://eyindia.sharepoint.com/:v:/s/SAPAITeam159/IQB3ViV7vnwJTJ_FiaqhadwXAVMCu_TQTacJ7NrgPBou2Ws?e=tVtuyN",
    content: "This agent provides quick insights to your assets, maintenance activities, maintenance spend, asset type, and asset classes so one can identify recommendations/hotspots to optimize maintenance strategies. ",
    thumbnail: "/images/legoscreen.jpeg"
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


        {/* <div className="video-wrapper zoom-in">
          <div
            className="video-inner"
          >
            <video
              key={activeData.video}
              src={activeData.video}
              poster={activeData.thumbnail}
             
              muted
             
              playsInline
              preload="metadata"
              className="hero-video"
            />

           
            <button
              className="ai-play-btn"
              onClick={() => window.open(activeData.video, "_blank")}
              type="button"
            >
              ▶
            </button>
          </div>



        </div> */}
        <div className="video-wrapper">
          <div className="video-inner">

            <img
              src={activeData.thumbnail}
              alt="Video preview"
              className="hero-video"
            />

            <button
              className="ai-play-btn"
              onClick={() => window.open(activeData.video, "_blank")}
            >
              ▶
            </button>

          </div>
        </div>


      </div>
    </div>
  );
}

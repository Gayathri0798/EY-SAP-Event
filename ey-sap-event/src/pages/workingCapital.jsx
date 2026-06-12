import "../styles/procuresense.css";
import CashPilotFlowLayout from './cashflow';
import Banner from "../components/Banner";
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Clock
} from "lucide-react";

export default function WorkingCapital() {
  
  return (
    <>
    <div className="banner-section">
        <Banner
          title="Smarter Working Capital with AI"
          subtitle="CashPilot helps finance teams move beyond manual receivables, payables, and inventory tracking by using AI to detect cash leakage, resolve exceptions, and act autonomously across DSO, DPO, and DIO. It enables faster cash release, fewer manual touchpoints, and continuously improving working capital performance."
          // buttonText="Learn more"
          image="/images/lego.jpeg"
        />
      </div>
  {/* cards section */}

<div className="ps-benefits">
  <h2>What CashPilot Enables</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="icon-box icon-yellow">
        <Zap size={20} />
      </div>
      <h3>Faster Cash Release</h3>
      <p>Detects and resolves overdue invoices and exceptions before they age.</p>
    </div>

    <div className="benefit-card highlight">
      <div className="icon-box icon-cyan">
        <ShieldCheck size={20} />
      </div>
      <h3>Fewer Manual Touchpoints</h3>
      <p>Automates reconciliation, dispute, and follow-up actions end to end.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-green">
        <DollarSign size={20} />
      </div>
      <h3>Optimised Cash Position</h3>
      <p>Balances DSO, DPO, and DIO levers to free up trapped working capital.</p>
    </div>

    <div className="benefit-card">
      <div className="icon-box icon-blue">
        <Clock size={20} />
      </div>
      <h3>Continuous Improvement</h3>
      <p>Signavio feedback loop tunes detection so issues are caught earlier each cycle.</p>
    </div>

  </div>
</div>

   {/* canvas how ey works */}
   <div className="canvas-wrapper">
   <div className="canvas">
  <div className="grid-bg" />
  {/* HEADER */}
  <div className="header">
    {/* <h1>
      How <span> CashPilot </span> Works
    </h1> */}
    <p>
      CashPilot connects enterprise finance data from SAP, non-SAP, and banking systems, processes it through an AI-driven intelligence layer orchestrated via SAP Joule, and delivers actionable working capital insights through dashboards and a conversational chatbot.
    </p>
  </div>
  {/* SVG CONNECTORS — drawn on top of everything, z-index managed */}
  <div className="htmlViewer">
   <CashPilotFlowLayout/>
    </div>
</div>
</div>

</>
  );
}
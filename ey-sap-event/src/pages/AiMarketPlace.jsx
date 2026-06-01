import "../styles/card.css";

export default function AiMarketPlace() {
  const cards = [
  {
    "header": "Document Intelligence Agent",
    "text": "Understands, extracts, summarizes, compares, and answers questions across enterprise documents and unstructured content."
  },
  {
    "header": "Invoice Processing Agent",
    "text": "Automates invoice extraction, validation, matching, and routing to streamline accounts payable workflows."
  },
  {
    "header": "Purchase Requisition Advisor Agent",
    "text": "Guides employees through compliant purchase requisition creation with intelligent recommendations and approval-ready workflows."
  },
  {
    "header": "Supplier Risk Monitoring Agent",
    "text": "Continuously monitors supplier risk, performance, compliance, and mitigation activities to enable proactive decision-making."
  },
  {
    "header": "Employee Onboarding Agent",
    "text": "Orchestrates onboarding journeys by managing tasks, documents, access provisioning, learning, and employee support."
  },
  {
    "header": "Employee Experience Agent",
    "text": "Improves employee support with personalized assistance, sentiment-aware interactions, and faster service resolution across HR touchpoints."
  },
  {
    "header": "Payroll Anomaly Detection Agent",
    "text": "Identifies payroll anomalies, fraud indicators, and compliance risks before payment processing."
  },
  {
    "header": "Attrition Risk Prediction Agent",
    "text": "Predicts employee attrition risk, highlights key drivers, and recommends targeted retention actions."
  },
  {
    "header": "GL Anomaly Detection Agent",
    "text": "Detects unusual journal entries, account movements, and potential control breaches within the general ledger."
  },
  {
    "header": "Working Capital Optimization Agent",
    "text": "Identifies opportunities to improve cash flow across receivables, payables, and inventory operations."
  },
  {
    "header": "Customer 360 Insight Agent",
    "text": "Unifies customer data into actionable insights, intelligent summaries, and next-best-action recommendations."
  },
  {
    "header": "Dispute Resolution Agent",
    "text": "Classifies disputes, gathers supporting evidence, recommends resolutions, and tracks aging and escalation status."
  },
  {
    "header": "Demand Sensing Agent",
    "text": "Analyzes near-real-time demand signals to improve forecasting accuracy and optimize planning decisions."
  },
  {
    "header": "DataGenie",
    "text": "Enables natural-language interaction with enterprise data to help users discover insights, validate information, and answer business questions instantly."
  },
  {
    "header": "TrueCost Agent",
    "text": "Identifies hidden costs like returns, rework, and late shipments that distort profitability. Links these costs to financial outcomes for better decisions on product design, vendor selection, and packaging."
  },
  {
    "header": "Smart P2P Agent",
    "text": "Automates invoice processing to eliminate manual errors and delays. Improves accuracy, speeds up approvals, and reduces operational costs in Accounts Payable."
  },
  {
    "header": "FSM Agent",
    "text": "AI assistant integrated with SAP and Joule app gives field engineers real-time, hands-free access to asset data, repair instructions, and safety guidelines—boosting efficiency and reliability."
  },
  {
    "header": "AI-Powered Circularity Advisor Agent",
    "text": "Helps teams choose compliant, eco-friendly materials with visibility into recyclability, fees, and regional regulations—reducing environmental impact and costs."
  },
  {
    "header": "Load Optimizer Agent",
    "text": "Maximizes container load efficiency to cut shipping costs, carbon footprint, and handling charges—optimizing logistics and sustainability."
  },
  {
    "header": "Finance Manager Invoicing Agent",
    "text": "Ensures timely invoicing with proforma previews, improving cash flow and customer experience."
  },
  {
    "header": "Master Data Agent",
    "text": "Improves data quality and supports Master Data Management processes for accurate, consistent business information."
  },
  {
    "header": "Quick Order Agent",
    "text": "AI-powered chatbot that enables store staff to place orders for goods not for resale via simple text interaction. Automatically creates order requests based on catalogue items."
  }
];

  return (
    <div className="mainclass">
      
      {/* ===== HEADER ===== */}
      <div className="headingWrapper">
        <h1>
          Before you build, browse <br />
          our <span className="yellowText">agent library</span>
        </h1>

        <p>
          Accelerate development with a curated collection of pre-built agents designed for common enterprise use cases. Reuse proven capabilities, reduce implementation effort, and scale faster across teams. 
        </p>

        {/* <div className="btnGroup">
          <button className="primaryBtn">Start Browsing</button>
          <button className="secondaryBtn">Documentation</button>
        </div> */}
      </div>

      {/* ===== GRID CARDS ===== */}
      <div className="sliderWrapper">

  {/* ===== ROW 1 → RIGHT ===== */}
  <div className="slider">
    <div className="track moveRight">
      {[...cards, ...cards].map((card, i) => (
        <div className="cardNew" key={i}>
          <div className="icon">▣</div>
          <h3>{card.header}</h3>
          <p>{card.text}</p>

          {/* <div className="cardFooter">
            <span className="tag">AI</span>
            <button className="deployBtn">Deploy →</button>
          </div> */}
        </div>
      ))}
    </div>
  </div>

  {/* ===== ROW 2 → LEFT ===== */}
  <div className="slider">
    <div className="track moveLeft">
      {[...cards, ...cards].map((card, i) => (
        <div className="cardNew" key={i}>
          <div className="icon">▣</div>
          <h3>{card.header}</h3>
          <p>{card.text}</p>

          {/* <div className="cardFooter">
            <span className="tag">AI</span>
            <button className="deployBtn">Deploy →</button>
          </div> */}
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}
import "../styles/card.css";

export default function AiMarketPlace() {
  const cards = [
  {
    "header": "Document Intelligence Agent",
    "text": "Understands, extracts, summarizes, compares, and answers questions across enterprise documents and unstructured content.",
    "url":''
  },
  {
    "header": "Invoice Processing Agent",
    "text": "Automates invoice extraction, validation, matching, and routing to streamline accounts payable workflows.",
    "url":''
  },
  {
    "header": "Purchase Requisition Advisor Agent",
    "text": "Guides employees through compliant purchase requisition creation with intelligent recommendations and approval-ready workflows.",
    "url":''
  },
  {
    "header": "Supplier Risk Monitoring Agent",
    "text": "Continuously monitors supplier risk, performance, compliance, and mitigation activities to enable proactive decision-making.",
    "url":''
  },
  {
    "header": "Employee Onboarding Agent",
    "text": "Orchestrates onboarding journeys by managing tasks, documents, access provisioning, learning, and employee support.",
    "url":''
  },
  {
    "header": "Employee Experience Agent",
    "text": "Improves employee support with personalized assistance, sentiment-aware interactions, and faster service resolution across HR touchpoints.",
    "url":''
  },
  {
    "header": "Payroll Anomaly Detection Agent",
    "text": "Identifies payroll anomalies, fraud indicators, and compliance risks before payment processing.",
    "url":''
  },
  {
    "header": "Attrition Risk Prediction Agent",
    "text": "Predicts employee attrition risk, highlights key drivers, and recommends targeted retention actions.",
    "url":''
  },
  {
    "header": "GL Anomaly Detection Agent",
    "text": "Detects unusual journal entries, account movements, and potential control breaches within the general ledger.",
    "url":''
  },
  {
    "header": "Working Capital Optimization Agent",
    "text": "Identifies opportunities to improve cash flow across receivables, payables, and inventory operations.",
    "url":''
  },
  {
    "header": "Customer 360 Insight Agent",
    "text": "Unifies customer data into actionable insights, intelligent summaries, and next-best-action recommendations.",
    "url":''
  },
  {
    "header": "Dispute Resolution Agent",
    "text": "Classifies disputes, gathers supporting evidence, recommends resolutions, and tracks aging and escalation status.",
    "url":''
  },
  {
    "header": "Demand Sensing Agent",
    "text": "Analyzes near-real-time demand signals to improve forecasting accuracy and optimize planning decisions.",
    "url":''
  },
  {
    "header": "DataGenie",
    "text": "Enables natural-language interaction with enterprise data to help users discover insights, validate information, and answer business questions instantly.",
    "url":''
  },
  {
    "header": "TrueCost Agent",
    "text": "Identifies hidden costs like returns, rework, and late shipments that distort profitability. Links these costs to financial outcomes for better decisions on product design, vendor selection, and packaging.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY True Cost Agent.mp4?csf=1&web=1&e=arGN2D'
  },
  {
    "header": "Smart P2P Agent",
    "text": "Automates invoice processing to eliminate manual errors and delays. Improves accuracy, speeds up approvals, and reduces operational costs in Accounts Payable.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY Smart P2P Agent.mp4?csf=1&web=1&e=NCTQxq'
  },
  {
    "header": "FSM Agent",
    "text": "AI assistant integrated with SAP and Joule app gives field engineers real-time, hands-free access to asset data, repair instructions, and safety guidelines—boosting efficiency and reliability.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY Field Service Management Agent.mp4?csf=1&web=1&e=AczKjW'
  },
  {
    "header": "AI-Powered Circularity Advisor Agent",
    "text": "Helps teams choose compliant, eco-friendly materials with visibility into recyclability, fees, and regional regulations—reducing environmental impact and costs.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY AI-Powered Circularity Advisor Agent.mp4?csf=1&web=1&e=kQc6Ul'
  },
  {
    "header": "Load Optimizer Agent",
    "text": "Maximizes container load efficiency to cut shipping costs, carbon footprint, and handling charges—optimizing logistics and sustainability.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY Load Optimizer Agent.mp4?csf=1&web=1&e=a145y8'
  },
  {
    "header": "Finance Manager Invoicing Agent",
    "text": "Ensures timely invoicing with proforma previews, improving cash flow and customer experience.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY Finance Manager Invoicing Agent.mp4?csf=1&web=1&e=dGgvLS'
  },
  {
    "header": "Master Data Agent",
    "text": "Improves data quality and supports Master Data Management processes for accurate, consistent business information.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY Master Data Agent.mp4?csf=1&web=1&e=MoegFw'
  },
  {
    "header": "Quick Order Agent",
    "text": "AI-powered chatbot that enables store staff to place orders for goods not for resale via simple text interaction. Automatically creates order requests based on catalogue items.",
    "url":'https://eyindia.sharepoint.com/:v:/r/sites/SAPAITeam159/Shared Documents/SAP AI/Recordings %26 Demos/Joule/joule agents/EY QuickOrder Agent.mov?csf=1&web=1&e=5sLKkl'
  }
];

  return (
    <div className="mainclass">
      
      {/* ===== HEADER ===== */}
      <section className="agents-hero">
        <div className="agents-overlay"></div>

        <div className="agents-content-hero">
          <h1>
            Before you build, browse <br /> our 
         Agent Library
          </h1>

          <p>
            Accelerate development with a curated collection of pre-built agents designed for common enterprise use cases. Reuse proven capabilities, reduce implementation effort, and scale faster across teams. 
          </p>
        </div>
      </section>

      {/* ===== GRID CARDS ===== */}
      <div className="sliderWrapper">

  {/* ===== ROW 1 → RIGHT ===== */}
  <div className="slider">
    <div className="track moveRight">
      {[...cards, ...cards].map((card, i) => (
        <div className="cardNew" key={i}>
          <div className="icon">⚜️</div>
          <h3>{card.header}</h3>
          <p>{card.text}</p>

          {card.url && (
            <a href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="agent-hyperlink"> Learn more </a>
          )}

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
          <div className="icon">⚜️</div>
          <h3>{card.header}</h3>
          <p>{card.text}</p>
 {card.url && (
            <a href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="agent-hyperlink"> Learn more </a>
          )}
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
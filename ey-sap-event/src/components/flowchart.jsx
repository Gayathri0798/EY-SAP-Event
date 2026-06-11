import "../styles/flow.css";

export default function FlowChart() {

  const stages = [
    {
      title: "DISCOVER",
      items: [
        { title: "AI Opportunity Scan", desc: "Identify high-value SAP AI opportunities across Finance, Supply Chain, HR" },
        { title: "SAP AI Readiness Assessment", desc: "Assess data quality and process maturity" },
        { title: "Use Case Prioritisation", desc: "Value vs effort prioritisation" },
        { title: "Business Case Development", desc: "ROI modelling and planning" }
      ]
    },
    {
      title: "CREATE",
      items: [
        { title: "Joule Agent Design & Build", desc: "Design business-aligned Joule agents and workflows" },
        { title: "Joule Studio Accelerators", desc: "Reusable templates for Finance and Procurement" },
        { title: "SAP BTP Extensions", desc: "Build extensions using SAP BTP and GenAI" },
        { title: "Data Cloud Enablement", desc: "Enable SAP Business Data Cloud" }
      ]
    },
    {
      title: "TRANSFORM",
      items: [
        { title: "Transformation", desc: "Coordinate AI use cases across programmes" },
        { title: "Process Redesign", desc: "Re-engineer workflows" },
        { title: "Testing & Migration", desc: "AI-assisted testing and migration" },
        { title: "AI-enabled Operating Model", desc: "Human workflows and KPIs" }
      ]
    },
    {
      title: "SCALE",
      items: [
        { title: "AI Governance Framework", desc: "Policy design and lifecycle governance" },
        { title: "Security & Compliance", desc: "Ensure data security" },
        { title: "Monitoring & Observability", desc: "Dashboards and model tracking" },
        { title: "Responsible AI at Scale", desc: "Ethics and governance" }
      ]
    }
  ];

  return (
       <div className="offering-container">
    <div className="offering-grid">
      {stages.map((stage, i) => (
        <div className={`offering-card stage-theme-${i}`} key={i}>
          
          {/* OVERHAULED: High-contrast premium layout header */}
          <div className="offering-header">
            <div className="icon-plate">
              <img 
                src={
                  i === 0 ? "https://img.icons8.com/fluent-systems-filled/48/60a5fa/search.png" : // Discover (Blue)
                  i === 1 ? "https://img.icons8.com/fluent-systems-filled/48/3b82f6/flash-on.png" :  // Create (Vibrant Blue)
                  i === 2 ? "https://img.icons8.com/fluent-systems-filled/48/10b981/synchronize.png" : // Transform (Emerald)
                            "https://img.icons8.com/fluent-systems-filled/48/8b5cf6/rocket.png"       // Scale (Purple)
                } 
                alt={`${stage.title} icon`}
                className="offering-icon-img"
              />
            </div>
            <div className="header-text-block">
              {/* <span className="phase-badge">Phase 0{i + 1}</span> */}
              <h3>{stage.title}</h3>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="capabilities-list">
            {stage.items.map((item, j) => (
              <div className="capability-item" key={j}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  </div>


  );
}

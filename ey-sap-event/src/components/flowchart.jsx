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
    <div className="timeline-container">

      {/*   HEADER WITH ARROWS */}
      <div className="timeline-header">
  {stages.map((stage, i) => (
    <div key={i} className="header-item">
      {stage.title}

    </div>
  ))}
</div>


      {/*   TIMELINE GRID */}
      <div className="timeline-grid">

        {stages.map((stage, i) => (
          <div key={i} className={`stage-card stage-${i}`}>

            {stage.items.map((item, j) => (
              <div key={j} className="pill">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  );
}

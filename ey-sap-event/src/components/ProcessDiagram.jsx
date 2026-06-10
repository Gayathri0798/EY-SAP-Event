import "../styles/ProcessDiagram.css";

const Section = ({ number, title, items }) => {
  return (
    <div className="sap-bottom-section">
      <div className="sap-bottom-section-left">
        <div className="sap-bottom-section-number">{number}</div>
        <div className="sap-bottom-section-title">{title}</div>
      </div>

      <div className="sap-bottom-section-right">
        {items.map((row, index) => (
          <div key={index} className="sap-bottom-section-row">
            {row.map((item, i) => (
              <div
                key={i}
                className={`sap-bottom-section-pill ${item.type || "outline"}`}
              >
                {item.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProcessDiagram = () => {
  return (
    <>
    
<section className="enterprise-banner">
      
      <div className="banner-header">
        <h2>AI Opportunity Themes Across the Enterprise</h2>
      </div>

      <div className="banner-body">
        <p>
          SAP AI creates value across decision-making, workforce productivity,
          operational performance and intelligent automation. Explore key
          opportunity areas where organizations are transforming business
          processes through embedded AI and agentic capabilities.
        </p>
      </div>

    </section>

    <div className="sap-bottom-section-container">
      
      <Section
        number="01"
        title="Decision Intelligence"
        items={[
          [
            { text: "Predictive Model" },
            { text: "Scenario Simulation" },
            { text: "Customer satisfaction trend analysis" },
            { text: "Demand Forecasting" }
          ],
          [
            { text: "Sales Planning" },
            { text: "Margin Optimization" },
            { text: "Price sensitivity & margin impact analysis" },
            { text: "Customer Engagement Insights" }
          ]
        ]}
      />

      <Section
        number="02"
        title={`Cognitive insights &\nVirtual assistants`}
        items={[
          [
            { text: "Executive & Leadership Copilots" },
            { text: "Function specific assistants" },
            { text: "Domain knowledge assistance" },
            { text: "Analyst & planner assistants" }
          ],
          [
            { text: "Customer engagement assistants" },
            { text: "Operational support assistants" }
          ]
        ]}
      />

      <Section
        number="03"
        title="Intelligent process performance management"
        items={[
          [
            { text: "KPI monitoring & early warning" },
            { text: "Process cycle time & bottleneck analytics" },
            { text: "Supplier, partner performance" },
            { text: "Operational efficiency & asset performance" }
          ],
          [
            { text: "Inventory fulfillment performance" },
            { text: "Employee performance" },
            { text: "Sustainability & ESG KPI tracking" },
            { text: "Procurement Analytics" }
          ]
        ]}
      />

      <Section
        number="04"
        title="Intelligent Process Automation & Decisioning"
        items={[
          [
            { text: "AI assisted Document support" },
            { text: "Intelligent workflows" },
            { text: "Transaction creation & posting automation" },
            { text: "Operational & resource optimization" }
          ],
          [
            { text: "Classification & coding" },
            { text: "Vendor & invoice management" },
            { text: "Matching & reconciliation" },
            { text: "Collections & receivables" }
          ]
        ]}
      />

    </div>
    </>
  );
};

export default ProcessDiagram;
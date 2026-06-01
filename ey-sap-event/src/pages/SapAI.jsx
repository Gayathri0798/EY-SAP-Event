import { useState } from "react";
import "../styles/eySap.css";

export default function SapAI() {
  const [active, setActive] = useState(null);

  const data = [
    {
      title: "Identify the right AI opportunities",
      content:
        "Prioritize SAP AI use cases that can improve productivity, decision-making and business outcomes.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Build on a trusted SAP foundation",
      content:
        "Use SAP BTP, SAP Business AI, Joule, data and integration capabilities to embed AI into enterprise workflows.",
      img: "https://images.unsplash.com/photo-1581093588401-16ec1c1a3c7b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Scale with confidence",
      content:
        "Apply EY’s experience in governance, security, change management and value realization to make AI adoption sustainable.",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-banner">
        <div className="overlay"></div>
        <div className="content">
          <p className="font-ey">
            Unlock the power of SAP Business AI with EY’s industry knowledge,
            transformation experience and responsible AI approach.
          </p>
        </div>
      </section>

      {/* SECTION 2 - ACCORDION */}
      <section className="sap-section">
        <div className="sap-container">
          <h2 className="font-ey">How EY helps bring SAP AI to life</h2>

          <p className="sap-desc font-ey">
            EY helps organizations design, build and scale SAP AI capabilities
            by connecting business processes, enterprise data, SAP technology
            and responsible AI governance.
          </p>

          <div className="accordion">
            {data.map((item, index) => (
              <div
                key={index}
                className="accordion-item"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
              >
                <h3 className={active === index ? "active" : "" + " font-ey"}>
                  {item.title}
                </h3>

                {active === index && (
                  <div className="accordion-content">
                    <div className="content-row">
                      {/* TEXT */}
                      <div className="text">
                        <p className="font-ey">{item.content}</p>
                      </div>

                      {/* ✅ FIXED: PROPER IMAGE TAG */}
                      <div className="image">
                        <img src={item.img} alt="ai visual" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - CARDS */}
      <div className="maturity-grid">
        {/* SALES */}
        <div className="card">
          <div className="card-header blue">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <h3 className="font-ey">Sales</h3>
          <h4 className="font-ey">Smarter selling with AI</h4>

          <p className="font-ey">
            Assess the readiness of your organization to apply SAP AI across
            customer insights, forecasting, lead-to-cash automation and
            personalized engagement.
          </p>

          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-cx"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment →
          </a>
        </div>

        {/* FINANCE */}
        <div className="card">
          <div className="card-header purple">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <h3 className="font-ey">Finance</h3>
          <h4 className="font-ey">Intelligent finance operations</h4>

          <p className="font-ey">
            Assess the readiness of your organisation to apply SAP AI across
            planning, financial close, reporting, controls, cash visibility and
            decision support.
          </p>

          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-finance"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment →
          </a>
        </div>

        {/* PROCUREMENT */}
        <div className="card">
          <div className="card-header green">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <h3 className="font-ey">Procurement</h3>
          <h4 className="font-ey">Intelligent spend management</h4>

          <p className="font-ey">
            Assess the readiness of your organization to apply SAP AI across
            sourcing, supplier insights, spend analysis, contract compliance and
            process efficiency.
          </p>

          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-procurement"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment →
          </a>
        </div>

        {/* HR */}
        <div className="card">
          <div className="card-header orange">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <h3 className="font-ey">Human Resources</h3>
          <h4 className="font-ey">AI-enabled workforce experiences</h4>

          <p className="font-ey">
            Assess the readiness of your organization to apply SAP AI across
            employee experience, service delivery, skills planning, talent
            processes and workforce insights.
          </p>

          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-hr"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment →
          </a>
        </div>
      </div>
    </>
  );
}

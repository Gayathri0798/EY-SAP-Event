import { useState } from "react";
import "../styles/eySap.css";

export default function SapAI() {
  const [active, setActive] = useState(null);

  const data = [
    {
      title: "Identify the right AI opportunities",
      content:
        "Prioritize SAP AI use cases that can improve productivity, decision-making and business outcomes.",
      img: "/images/sap1.png",
    },
    {
      title: "Build on a trusted SAP foundation",
      content:
        "Use SAP BTP, SAP Business AI, Joule, data and integration capabilities to embed AI into enterprise workflows.",
      img: "/images/sap2.png",
    },
    {
      title: "Scale with confidence",
      content:
        "Apply EY’s experience in governance, security, change management and value realization to make AI adoption sustainable.",
      img: "/images/sap3.png",
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
          <p className="sapai-title-heading">How EY helps bring SAP AI to life</p>

          <p className="sap-desc font-ey">
            EY helps organizations design, build and scale SAP AI capabilities
            by connecting business processes, enterprise data, SAP technology
            and responsible AI governance.
          </p>

          <div className="accordion">
  {data.map((item, index) => (
    <div
      key={index}
      className={`accordion-item ${active === index ? "active" : ""}`}
      onClick={() =>
        setActive(active === index ? null : index)   /*   toggle */
      }
    >
      {/* HEADER */}
      <div className="accordion-header">
        <h3 className={`${active === index ? "active" : ""}`}>
          {item.title}
        </h3>

        {/*   CARET ICON */}
        <span className={`caret ${active === index ? "open" : ""}`}>
          ▾
        </span>
      </div>

      {/* CONTENT */}
      {active === index && (
        <div className="accordion-content">
          {/* <div className="content-row"> */}

            <div className="text">
              <p>{item.content}</p>
            </div>

            <div className="image">
              <img src={item.img} alt="ai visual" />
            </div>

          {/* </div> */}
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

          <p className="font-ey btm-card-title">Sales</p>
          <p className="font-ey btm-card-desc">Smarter selling with AI</p>

         <div className="btm-card-ddesc">
          <p className="font-ey">
            Assess the readiness of your organization to apply SAP AI across
            customer insights, forecasting, lead-to-cash automation and
            personalized engagement.
          </p>
</div>
<div className="btm-anchor">
          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-cx"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment<pre></pre> ➤
          </a></div>
        </div>

        {/* FINANCE */}
        <div className="card">
          <div className="card-header purple">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <p className="font-ey btm-card-title">Finance</p>
          <p className="font-ey btm-card-desc">Intelligent finance operations</p>
 <div className="btm-card-ddesc">
          <p className="font-ey">
            Assess the readiness of your organisation to apply SAP AI across
            planning, financial close, reporting, controls, cash visibility and
            decision support.
          </p></div>
<div className="btm-anchor">
          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-finance"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment<pre></pre> ➤
          </a>
        </div></div>

        {/* PROCUREMENT */}
        <div className="card">
          <div className="card-header green">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <p className="font-ey btm-card-title">Procurement</p>
          <p className="font-ey btm-card-desc">Intelligent spend management</p>
 <div className="btm-card-ddesc">
          <p className="font-ey btm-card-ddesc">
            Assess the readiness of your organization to apply SAP AI across
            sourcing, supplier insights, spend analysis, contract compliance and
            process efficiency.
          </p>
</div>
     <div className="btm-anchor">
          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-procurement"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment<pre></pre> ➤
          </a>
        </div>
</div>
        {/* HR */}
        <div className="card">
          <div className="card-header orange">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
              alt="SAP"
            />
          </div>

          <p className="font-ey btm-card-title">Human Resources</p>
          <p className="font-ey btm-card-desc">AI-enabled workforce experiences</p>
 <div className="btm-card-ddesc">
          <p className="font-ey btm-card-ddesc">
            Assess the readiness of your organization to apply SAP AI across
            employee experience, service delivery, skills planning, talent
            processes and workforce insights.
          </p></div>
<div className="btm-anchor">
          <a
            href="https://discovery-center.cloud.sap/maturity-assessment/?type=ai-hr"
            target="_blank"
            rel="noreferrer"
          >
            Start Assessment<pre></pre> ➤
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

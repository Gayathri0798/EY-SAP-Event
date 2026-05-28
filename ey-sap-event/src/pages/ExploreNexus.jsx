import "../styles/explore-nexus.css";
import Banner from "../components/Banner";
import EnterpriseCTA from "../components/EnterpriseCTA";
import { useState, useEffect } from "react";


export default function ExploreNexus() {
    const [active, setActive] = useState(0);

  const sections = [
    {
      title: "Pre-Built Enterprise Agents",
      desc: "Start with ready-to-use agents for procurement, finance and enterprise operations.",
      image: "/images/enterprise.jpeg",
    },
    {
      title: "No-Code Agent Builder",
      desc: "Configure intelligent agents without heavy engineering.",
      image: "/images/no-code.jpeg",
    },
    {
      title: "SAP Integration Fabric",
      desc: "Connect directly to SAP S/4HANA, CDS views, APIs and enterprise systems.",
      image: "/images/sap4hana.jpg",
    },
    {
      title: "Governance & Orchestration",
      desc: "Monitor workflows, approvals, explainability and multi-agent operations.",
      image: "/images/workflow.jpg",
    },
  ];

  
 // ✅ AUTO LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % sections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="explore-dark">
        <Banner
              title="EY SAP Nexus"
              heading="The Enterprise Control Plane for AI Agents"
              subtitle="Build, orchestrate and govern AI agents integrated directly with SAP and enterprise systems."
              image="/images/lego.jpeg"
              buttonText="Learn more"
            />

<div className="auto-showcase">

      {/* ✅ MAIN DISPLAY */}
      <div className="showcase-content">

        <div className="showcase-image">
          <img src={sections[active].image} />
        </div>

        <div className="showcase-text">
          <h2>{sections[active].title}</h2>
          <p>{sections[active].desc}</p>
        </div>

      </div>

      {/* ✅ PROGRESS INDICATORS */}
      <div className="progress-dots">
        {sections.map((_, i) => (
          <span
            key={i}
            className={i === active ? "dot active" : "dot"}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

    </div>
      <EnterpriseCTA />
    </div>
  );
}

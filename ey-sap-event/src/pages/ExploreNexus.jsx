import "../styles/explore-nexus.css";
import Banner from "../components/Banner";
import EnterpriseCTA from "../components/EnterpriseCTA";
import { useState, useEffect } from "react";


export default function ExploreNexus() {
    const [active, setActive] = useState(0);

  const sections = [
    {
      title: "Accelerate Time-to-Value",
      desc: "Move from idea to production-ready AI agents faster using reusable capabilities, pre-built assets, and enterprise-ready frameworks without extensive technical dependency.",
      image: "/images/enterprise.jpeg",
    },
    {
      title: "Reuse AI Across the Enterprise",
      desc: "Avoid rebuilding the same AI capabilities for every use case. Nexus enables organizations to create once and reuse across multiple business processes, datasets, and teams.",
      image: "/images/no-code.jpeg",
    },
    {
      title: "Integrate AI into Core Operations",
      desc: "Connect AI agents directly to SAP and enterprise systems via CDS view, APIs so they can act on trusted business data and workflows..",
      image: "/images/sap4hana.jpg",
    },
    {
      title: "Govern AI with Confidence",
      desc: "Establish enterprise-wide controls for monitoring, approvals, explainability, and compliance—ensuring AI operates within organizational guardrails.",
      image: "/images/workflow.jpg",
    },
    {
      title: "Scale Beyond Individual Use Cases",
      desc: "Create a growing ecosystem of AI agents and capabilities that can be orchestrated across functions, processes, and business domains.",
      image: "/images/aiface.jpg",
    },
  ];

  
 //   AUTO LOOP
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
              
subtitle={
  
 <div className="subtitle-block">
    <p>
      AI platform that enables organizations to build, govern, and scale AI agents across business functions and systems.
      By combining enterprise-grade governance, orchestration, and deep SAP integration, Nexus helps organizations accelerate AI adoption while maintaining control, security, and compliance.
    </p>
    {/* <p>
      By combining enterprise-grade governance, orchestration, and deep SAP integration, Nexus helps organizations accelerate AI adoption while maintaining control, security, and compliance.
    </p> */}
  </div>

}
              image="/images/lego.jpeg"
              
   buttonText="Explore EY Nexus"
  onButtonClick={() => window.open("https://ey-nexus-approuter.cfapps.eu10-004.hana.ondemand.com/", "_blank")} 
            />

<div className="auto-showcase">

      {/*   MAIN DISPLAY */}
      <div className="showcase-content">

        <div className="showcase-image">
          <img src={sections[active].image} />
        </div>

        <div className="showcase-text">
          <h2>{sections[active].title}</h2>
          <p>{sections[active].desc}</p>
        </div>

      </div>

      {/*   PROGRESS INDICATORS */}
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

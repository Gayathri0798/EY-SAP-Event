import "../styles/explore-nexus.css";
import Banner from "../components/Banner";
import EnterpriseCTA from "../components/EnterpriseCTA";
import { useEffect, useState } from "react";

export default function ExploreNexus() {
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

const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.floor(window.scrollY / 400);
      setActive(Math.min(index, sections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            
<div className="scroll-wrapper">

      {/* FIXED IMAGE */}
      <div className="fixed-image">
        {sections[active].image}
      </div>

      {/* TEXT STACK */}
      <div className="scroll-content">
        {sections.map((item, i) => (
          <div key={i} className="scroll-block">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`section ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          {/* IMAGE CARD */}
          <div className="image-card">
            <img src={section.image} alt={section.title} />
          </div>

          {/* TEXT */}
          <div className="text-content">
            <h2>{section.title}</h2>
            <p>{section.desc}</p>

            {/* <a href="#" className="explore-link">
              Explore {section.title} →
            </a> */}
          </div>
        </div>
      )
      )}
      <EnterpriseCTA />
    </div>
  );
}

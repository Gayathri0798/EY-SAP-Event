import "../styles/explore-nexus.css";

export default function ExploreNexus() {
  const sections = [
    {
      title: "Financial Closing Assistant",
      desc: "The Financial Closing Assistant orchestrates the agentic team managing the financial-period close. Control each agent’s level of autonomy so they can selectively perform journal posting, clearing, and analysis tasks.",
      image: "/images/finance.png",
    },
    {
      title: "Procurement Assistant",
      desc: "Automate procurement workflows, supplier interactions, and approvals with AI-powered agents integrated into enterprise systems.",
      image: "/images/procurement.png",
    },
    {
      title: "HR Assistant",
      desc: "Streamline HR operations including onboarding and employee lifecycle management.",
      image: "/images/hr.png",
    },
    {
      title: "Analytics Assistant",
      desc: "Generate insights and monitor performance using AI-powered analytics.",
      image: "/images/analytics.png",
    },
  ];

  return (
    <div className="explore-dark">
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

            <a href="#" className="explore-link">
              Explore {section.title} →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

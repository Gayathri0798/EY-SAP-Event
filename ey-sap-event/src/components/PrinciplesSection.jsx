import "../styles/principles-section.css";


const principles = [
  {
    id: "PRINCIPLE 1",
    title: "Building Confidence in AI",
    description:
      "Establish trusted AI foundations with governance, explainability and enterprise-grade controls built into every workflow.",
    highlights: [
      "Responsible AI governance",
      "Enterprise security and compliance",
      "SAP-integrated AI operations",
      "Policy-driven orchestration"
    ],
  },
  {
    id: "PRINCIPLE 2",
    title: "Creating Exponential Value Through AI",
    description:
      "Move beyond isolated pilots to scalable enterprise AI ecosystems that transform operations, decision-making and business performance.",
    highlights: [
      "Multi-agent enterprise workflows",
      "Reusable AI assets",
      "SAP-native integrations",
      "Scalable AI operating model"
    ],
  },
  {
    id: "PRINCIPLE 3",
    title: "Augmenting People to Drive Extraordinary Outcomes",
    description:
      "Empower business teams with intelligent AI copilots and no-code agent experiences designed to enhance productivity and innovation.",
    highlights: [
      "Human-centered AI experiences",
      "Business-configurable agents",
      "Intelligent workflow automation",
      "Workforce enablement through AI",
    ],
  },
];

export default function PrinciplesGrid() {
  return (
    <section className="principles-grid-section">
        {/* ✅ NEW EY INTRO BLOCK */}
  <div className="principles-intro">

<h1 className="ey-heading">
  <span className="quote-inline">“</span>
  How EY Helps Enterprises Scale AI
  <span className="quote-inline">”</span>
</h1>
 <div className="ey-divider"></div>

    <p className="ey-subtext">
      A responsible, scalable and human-centered approach to enterprise AI transformation.
    </p>

  </div>

  <h2 className="main-title">Our Principles</h2>

  <div className="grid-container">
    {principles.map((item, index) => (
      <div className="grid-item" key={index}>
        
        <span className="principle-id">{item.id}</span>

        <h3 className="title">{item.title}</h3>

        <div className="underline"></div>

        <p className="description">{item.description}</p>

        <div className="highlights">
          <h4>Key Highlights</h4>
          <ul>
            {item.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

      </div>
    ))}
  </div>
</section>
  );
}
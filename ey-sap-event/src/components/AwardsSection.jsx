import "../styles/awards-section.css";

const awards = [
  {
    image: "/images/ai-awards.webp",
    title: "Best AI for Sustainable Development",
    description: 'EY ESG Materiality Manager',
  },
  {
    image: "/images/awards.webp",
    title: "Best AI Usage in Finance",
    description: 'EY Finance Data Hub',
  },
  {
    image: "/images/winner.webp",
    title: "SAP Hack2Build on AI using Joule Skills",
    
  },
  {
    image: "/images/dataiq.webp",
    title: "Best AI Solution Award",
    description: 'Award for Sustainable Development category',
  },
  {
    image: "/images/stratus-award.webp",
    title: "2024 BI Stratus Award",
    description: 'EY.ai EYQ won in "Artificial Intelligence" category',
  },
  {
    image: "/images/awards.webp",
    title: "SAP Pinnacle Award for SAP Business Technology Platform",
    description: 'Extensibility and Clean Core',
  },
];

export default function AwardsSection() {
  return (
    <section className="awards-section">

      <h2 className="awards-title">
        Recognized by industry leaders for our AI solutions and capabilities
      </h2>

      <div className="awards-grid">
        {awards.map((award, index) => (
          <div className="award-item" key={index}>

            {/* ✅ Image */}
            <div className="award-image">
              <img src={award.image} alt={award.title} />
            </div>

            {/* ✅ Title */}
            <h5>{award.title}</h5>

            {/* ✅ Description */}
            <p>{award.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

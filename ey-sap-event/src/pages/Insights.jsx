import "../styles/insights.css";

export default function Insights() {
  const insights = [
  {
    image: "/images/multiagent.webp",
    title: "Agentic SOC: Multi-agent orchestration for next-gen security operations",
    desc: "Agentic SOC redefines cybersecurity using multi-agent AI...",
    meta: "13 Apr 2026 | Shivaprasath Abburu",
    link: "https://www.ey.com/en_in/insights/ai/agentic-soc-multi-agent-orchestration-for-next-gen-security-operations"
  },
  {
    image: "/images/op-models.webp",
    title: "How are Agentic AI GCCs shaping enterprise operating models",
    desc: "Learn how agentic AI is redefining Global Capability Centers...",
    meta: "21 Mar 2026 | Arindam Sen",
    link: "https://www.ey.com/en_in/insights/technology/why-india-is-winning-the-cloud-investment-race"
  },
  {
    image: "/images/server-room.webp",
    title: "Why India is winning the cloud investment race",
    desc: "Discover how India is rapidly emerging...",
    meta: "30 Mar 2026 | Abhinav Johri",
    link: "https://www.ey.com/en_in/media/podcasts/ai/2026/01/season-2-episode-2-how-agentic-ai-is-redefining-hr-and-workforce-strategies"
  },
  {
    image: "/images/tax.webp",
    title: "Tax compliance reimagined",
    desc: "AI is embedded into operations...",
    meta: "24 Mar 2026 | Divyesh Lapsiwala",
    link: "https://www.ey.com/en_in/media/podcasts/ai/2026/01/season-2-episode-1-how-agentic-ai-redefines-customer-experience-in-the-digital-age"
  },
  {
    image: "/images/ai-led.webp",
    title: "How AI-led compliance powers exports",
    desc: "AI-driven trade automation helps businesses...",
    meta: "24 Mar 2026 | Sagar Shah",
    link: "https://www.ey.com/en_in/insights/supply-chain/how-intelligent-order-management-strengthens-consumer-goods-supply-chains"
  },
  {
    image: "/images/universities.webp",
    title: "Building responsible universities",
    desc: "Universities adopting AI responsibly...",
    meta: "10 Mar 2026 | Dr. Avantika Tomar",
    link: "https://www.ey.com/en_in/insights/ai/human-centered-approach-to-ai-paving-the-way-for-ethical-and-sustainable-growth"
  }
];

  return (
    <div className="insights-page">

      <h1 className="page-title">Our Insights</h1>

      <div className="insights-grid">

        {insights.map((item, index) => (
          <div
  className="insight-card"
  key={index}
  onClick={() => window.open(item.link, "_blank")}
>
  <div className="card-image">
    <img src={item.image} alt="" />
  </div>

  <div className="card-content">
    <h3>{item.title}</h3>
    <p className="desc">{item.desc}</p>
    <span className="meta">{item.meta}</span>
  </div>
</div>

        ))}

      </div>
    </div>
  );
}

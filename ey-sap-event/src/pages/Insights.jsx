import "../styles/insights.css";

export default function Insights() {
  const insights = [
  {
    image: "/images/news.png",
    title: "New Joule Studio: Enterprise-Scale Agentic Development",
    desc: "Discover how Joule Studio empowers organizations to build, orchestrate, and scale AI agents grounded in business processes and enterprise data.",
    meta: "13 Apr 2026 | Shivaprasath Abburu",
    link: "https://www.ey.com/en_in/insights/ai/agentic-soc-multi-agent-orchestration-for-next-gen-security-operations"
  },
  {
    image: "/images/ariba.png",
    title: "Next-Gen SAP Ariba: The Foundation for Intelligent Procurement",
    desc: "Explore how AI-native procurement on SAP BTP enables smarter sourcing, connected processes, and data-driven decision-making at scale.",
    meta: "13 Apr 2026 | Shivaprasath Abburu",
    link: "https://www.ey.com/en_in/insights/ai/agentic-soc-multi-agent-orchestration-for-next-gen-security-operations"
  },
  {
    image: "/images/partners.png",
    title: "How SAP & Partners Are Driving Customer Success with Business AI",
    desc: "Learn how SAP and its ecosystem help organizations accelerate innovation, improve efficiency, and realize measurable value from Business AI initiatives.",
    meta: "13 Apr 2026 | Arindam Sen",
    link: "https://www.ey.com/en_in/insights/ai/agentic-soc-multi-agent-orchestration-for-next-gen-security-operations"
  },
  {
    image: "/images/successfactor.png",
    title: "SAP SuccessFactors 1H 2026 Release: Smarter HR with AI",
    desc: "See how the latest SuccessFactors innovations enhance employee experiences, streamline HR operations, and unlock new workforce insights with AI-powered capabilities.",
    meta: "13 Apr 2026 | Divyesh Lapsiwala",
    link: "https://www.ey.com/en_in/insights/ai/agentic-soc-multi-agent-orchestration-for-next-gen-security-operations"
  },
  {
    image: "/images/multiagent.webp",
    title: "Agentic SOC: Multi-agent orchestration for next-gen security operations",
    desc: "Agentic SOC redefines cybersecurity by using multi-agent AI for faster threat detection, smarter triage and coordinated response while keeping humans at the center.",
    meta: "13 Apr 2026 | Shivaprasath Abburu",
    link: "https://www.ey.com/en_in/insights/ai/agentic-soc-multi-agent-orchestration-for-next-gen-security-operations"
  },
  {
    image: "/images/op-models.webp",
    title: "How are Agentic AI GCCs shaping enterprise operating models",
    desc: "Learn how agentic AI is redefining Global Capability Centers as enterprise intelligence hubs, shifting from cost efficiency to AI-first autonomous models.",
    meta: "21 Mar 2026 | Arindam Sen",
    link: "https://www.ey.com/en_in/insights/technology/why-india-is-winning-the-cloud-investment-race"
  },
  {
    image: "/images/server-room.webp",
    title: "Why India is winning the cloud investment race",
    desc: "Discover how India is rapidly emerging as a pivotal hub for cloud-driven innovation, fueled by rising AI adoption, regulatory clarity and deep digital talent.",
    meta: "30 Mar 2026 | Abhinav Johri",
    link: "https://www.ey.com/en_in/media/podcasts/ai/2026/01/season-2-episode-2-how-agentic-ai-is-redefining-hr-and-workforce-strategies"
  },
  {
    image: "/images/tax.webp",
    title: "Tax compliance reimagined: AI, data integrity and intelligent reporting",
    desc: "Tax compliance is evolving toward intelligence embedded in operations, leveraging AI and data for real-time insights and regulatory trust.",
    meta: "24 Mar 2026 | Divyesh Lapsiwala",
    link: "https://www.ey.com/en_in/media/podcasts/ai/2026/01/season-2-episode-1-how-agentic-ai-redefines-customer-experience-in-the-digital-age"
  },
  {
    image: "/images/ai-led.webp",
    title: "How AI-led compliance can power India’s export boom",
    desc: "India’s expanding FTA network supports AI-enabled trade automation, helping businesses manage compliance, unlock FTA benefits and scale cross-border operations.",
    meta: "24 Mar 2026 | Sagar Shah",
    link: "https://www.ey.com/en_in/insights/supply-chain/how-intelligent-order-management-strengthens-consumer-goods-supply-chains"
  },
  {
    image: "/images/universities.webp",
    title: "Building responsible universities in the age of AI",
    desc: " Learn how universities can adopt responsible AI through governance, assessment redesign, multi-stakeholder collaboration and strong data protection under India’s DPDP Act.",
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

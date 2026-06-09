import "../styles/aiSolution.css";

export default function SapAiSolution(){
const solutions = [
  {
    name: "FinOps",
    tagline: "Cloud financial operations",
    desc: "Optimize cloud spend and cost transparency.",
    img: "https://img.icons8.com/fluency/96/money.png",
    url: "https://finance-demo.wonderfulbush-ae06f75b.southindia.azurecontainerapps.io/",
  },
  {
    name: "EY Jumpstart",
    tagline: "AI-powered automation",
    desc: "AI-powered consulting delivery platform embedding agentic AI across the full SDLC—from discovery and design through build, test, deployment, and support.",
    img: "https://img.icons8.com/fluency/96/synchronize.png",
    url: "https://jumpstart.centralindia.azure.uat.eycosmos.com/"
  },
  {
    name: "A2R Reconciliation",
    tagline: "AI-powered automation",
    desc: "Detect errors and automate reconciliation processes.",
    img: "https://img.icons8.com/fluency/96/ledger.png",
    url: "/a2rrecon"
  },
  {
    name: "PriceWise",
    tagline: "Pricing intelligence",
    desc: "Optimize pricing strategies with predictive analytics.",
    img: "https://img.icons8.com/fluency/96/combo-chart.png",
    url:"/priceWise"
  },
  {
    name: "ProcureSense",
    tagline: "AI-powered vendor intelligence",
    desc: "Maximize savings and minimize supplier risks.",
    img: "https://img.icons8.com/fluency/96/shopping-cart.png",
    url: "/procuresense",
  },
  {
    name: "Cash Pilot",
    tagline: "Cash flow optimization",
    desc: "Improve liquidity using DPO, DSO and DIO optimization.",
    img: "https://img.icons8.com/fluency/96/wallet.png",
    url: "/workingCapital"
  },
  {
    name: "Data Genie",
    tagline: "Smart data insights",
    desc: "Transform enterprise data into actionable intelligence.",
    img: "https://img.icons8.com/fluency/96/database.png",
    url: "/datagenie"
  },
  {
    name: "Document Analyser",
    tagline: "AI document processing",
    desc: "Extract and validate documents using AI models.",
    img: "https://img.icons8.com/fluency/96/document.png"
  },
  {
    name: "Autonomous Supply Chain",
    tagline: "AI-driven supply chain",
    desc: "Automate supply chain decisions intelligently.",
    img: "https://img.icons8.com/fluency/96/delivery.png"
  },
  {
    name: "Agentic Finance Transformation",
    tagline: "AI-powered transformation",
    desc: "Reimagining Core Finance Processes with AI-Powered Agents.",
    img: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
    url: "/BASample",
  },
];

  return (
    <section className="solutions-container">
      <div className="solutions-header">
        <h1>Enterprise AI Solutions</h1>
        <p>
          Turn ideas into enterprise impact with intelligent apps and automation.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((item, index) => (
           <a href={item.url || "#"}
            target = "_blank"
            rel="noopener noreferrer"
            key={index}
            style={{ textDecoration: 'none', color:'inherit'}}
            >
          <div className="solution-card">
            <img src={item.img} alt={item.name} className="card-image-ai" />
            <h3>{item.name}</h3>
            <h5>{item.tagline}</h5>
            <p>{item.desc}</p>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
}











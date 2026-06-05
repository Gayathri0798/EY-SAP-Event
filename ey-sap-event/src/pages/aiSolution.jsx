import "../styles/aiSolution.css";

export default function SapAiSolution(){
const solutions = [
  {
    name: "FinOps",
    tagline: "Cloud financial operations",
    desc: "Optimize cloud spend and cost transparency.",
    img: "https://cdn-icons-png.flaticon.com/512/1904/1904425.png",
    url: "https://finance-demo.wonderfulbush-ae06f75b.southindia.azurecontainerapps.io/",
  },
  {
    name: "A2R Reconciliation",
    tagline: "AI-powered automation",
    desc: "Detect errors and automate reconciliation processes.",
    img: "https://cdn-icons-png.flaticon.com/512/4149/4149680.png"
  },
  {
    name: "PriceWise",
    tagline: "Pricing intelligence",
    desc: "Optimize pricing strategies with predictive analytics.",
    img: "https://cdn-icons-png.flaticon.com/512/2331/2331712.png"
  },
  {
    name: "ProcureSense",
    tagline: "AI-powered vendor intelligence",
    desc: "Maximize savings, minimize supplier risks and accelerate sourcing cycles.",
    img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
    url:"/procuresense",
  },
  {
    name: "BA Draft",
    tagline: "BA Draft Test",
    desc: "Enable suppliers to submit and track grievances directly.",
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    url:"/BASample",
  },
  {
    name: "Data Genie",
    tagline: "Smart data insights",
    desc: "Transform enterprise data into actionable intelligence.",
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
  },
  {
    name: "Document Analyser",
    tagline: "AI document processing",
    desc: "Extract and validate documents using AI models.",
    img: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png"
  },
  {
    name: "Working Capital",
    tagline: "Cash flow optimization",
    desc: "Improve liquidity using DPO, DSO and DIO optimization.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png"
  },
  {
    name: "Autonomous Supply Chain",
    tagline: "AI-driven supply chain",
    desc: "Automate supply chain decisions intelligently.",
    img: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png"
  }
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











import { useState } from "react";
import "../styles/aiSolution.css";
// import Intelligent from "../video/InvoiceMatching.mp4";
// import FinanceDataVideo from "../video/FinanceDataHub.mp4";
// import OutstandingVideo from "../video/Outstanding.mp4";
// import SmartAtpVideo from "../video/SmartaATP.mp4";
// import TrueAgent from "../video/TrueCostAgent.mp4";

export default function SapAiSolution() {

  const solutionData = {


    "Record-to-Report": [
      {
        name: "A2R Reconciliation",
        tagline: "AI-powered automation",
        desc: "Detect errors and automate reconciliation processes.",
        img: "https://img.icons8.com/fluency/96/ledger.png",
        url: "/a2rrecon",
      },
      {
        name: "Smart GL Account Reconciliation",
        tagline: "Smart finance",
        desc: "Automated GL reconciliation with AI insights.",
        img: "https://img.icons8.com/fluency/96/accounting.png",
        url:'/smartgl'
      },
      {
        name: "EY intelligent Working Capital Dashboard",
        tagline: "OUTSTANDING RECEIVABLES",
        desc: "AI-driven collections and working capital optimization.",
        img: "https://img.icons8.com/fluency/96/bar-chart.png",
         url:'/intelliworking'
      },
      {
        name: "Financial Plan Automation",
        tagline: "SMART PLANNING",
        desc: "AI-powered planning, forecasting, and scenario insights.",
        img: "https://img.icons8.com/fluency/96/calculator.png",
         url:'/financeplan'
      },
    ],

    "Order-to-Cash": [
      {
        name: "PriceWise",
        tagline: "Pricing intelligence",
        desc: "Optimize pricing strategies with predictive analytics.",
        img: "https://img.icons8.com/fluency/96/combo-chart.png",
        url: "/priceWise",
      },
      {
        name: "CashPilot",
        tagline: "Cash flow optimization",
        desc: "Improve liquidity using DPO, DSO and DIO optimization.",
        img: "https://img.icons8.com/fluency/96/wallet.png",
        url: "/workingCapital",
      },
      {
        name: "Customer Correspondence",
        tagline: "Outstanding receivables",
        desc: "AI-driven customer communication and collections.",
        img: "https://img.icons8.com/fluency/96/customer-support.png",
         url:'/customer'
      },
      {
        name: "aATP - Product Availability, Back Order Processing, Product Allocation",
        tagline: "Smart Fullfillment",
        desc: "AI-optimized product availability and allocation decisions.",
        img: "https://img.icons8.com/fluency/96/package.png",
         url:'/aATP'
      },
      {
        name: "EY Delivery Insights",
        tagline: "DELIVERY INTELLIGENCE",
        desc: "Predictive delivery risk and delay insights.",
        img: "https://img.icons8.com/fluency/96/truck.png",
         url:'/deliveryinsights'
      },
    ],

    "Procure-to-Pay": [
      {
        name: "ProcureSense",
        tagline: "AI-powered vendor intelligence",
        desc: "Maximize savings and minimize supplier risks.",
        img: "https://img.icons8.com/fluency/96/shopping-cart.png",
        url: "/procuresense",
      },
      {
        name: "Document Analyser",
        tagline: "AI document processing",
        desc: "Extract and validate documents using AI models.",
        img: "https://img.icons8.com/fluency/96/document.png",
        url: "/dataAnalyser"
      },
      {
        name: "Autonomous Supply Chain",
        tagline: "AI-driven supply chain",
        desc: "Automate supply chain decisions intelligently.",
        img: "https://img.icons8.com/fluency/96/delivery.png",
        url: '/autonomous'
      },
    ],

    "Enterprise Solutions": [
      {
        name: "EY Nexus",
        tagline: "Enterprise platform",
        desc: "Unified enterprise intelligence platform.",
        img: "https://img.icons8.com/fluency/96/network.png",
        url:'https://ey-nexus-approuter.cfapps.eu10-004.hana.ondemand.com/'
      },
      {
        name: "EY Jumpstart",
        tagline: "AI-powered automation",
        desc: "AI-powered consulting delivery platform embedding agentic AI across the full SDLC—from discovery and design through build, test, deployment, and support.",
        img: "https://img.icons8.com/fluency/96/synchronize.png",
        url: "https://jumpstart.centralindia.azure.uat.eycosmos.com/"
      },
      {
        name: "FinOps",
        tagline: "Cloud financial operations",
        desc: "Optimize cloud spend and cost transparency.",
        img: "https://img.icons8.com/fluency/96/money.png",
        url: "https://finance-demo.wonderfulbush-ae06f75b.southindia.azurecontainerapps.io/",
      },
      {
        name: "Data Genie",
        tagline: "Smart data insights",
        desc: "Transform enterprise data into actionable intelligence.",
        img: "https://img.icons8.com/fluency/96/database.png",
        url: "/datagenie"
      },
      {
        name: "DigiGST",
        tagline: "Digi GST",
        desc: "Integrated Solution for E-Invoicing, E-Way Bills and GST Returns Compliance",
        img: "https://img.icons8.com/fluency/96/layers.png",
        url: "/digigst",
      },
      {
        name: "Transformation Realized for SAP",
        tagline: "TRANSFORMATION ORCHESTRATION PLATFORM",
        desc: "Connect strategy, technology, alliances, and execution to accelerate enterprise transformation and deliver measurable business outcomes.",
        img: "https://img.icons8.com/fluency/96/workflow.png",
        url: "https://deliveryplatform.launchpad.cfapps.eu10.hana.ondemand.com/9ad1a292-5498-478e-828b-d2aeaa209249.TrsPlatformMA.TrsPlatformMN-1.0.0/index.html#/"
      },
    ],

    "Sapphire 2026": [
      // {
      //   name: "Marketing Videos",
      //   tagline: "Innovation Zone",
      //   desc: "SAPPHIRE 2026 marketing demos and videos.",
      //   img: "https://img.icons8.com/fluency/96/video.png",
      //   url: "https://sites.ey.com/sites/eysapinnovationcoe/Innovation%20P/Forms/AllItems.aspx?id=%2Fsites%2Feysapinnovationcoe%2FInnovation%20P%2FSAPPHIRE%202026%2FInternal%20%2D%20Prep%20for%20Live%20Demos%2FMarketing%20Videos&p=true&ga=1",
      // },


      {
        name: "Intelligent Invoice Matching",
        tagline: "Intelligent Invoice Matching",
        desc: " ",
        url:"https://sites.ey.com/:v:/r/sites/eysapinnovationcoe/Innovation%20P/SAPPHIRE%202026/Internal%20-%20Prep%20for%20Live%20Demos/Marketing%20Videos/Intro%20to%20EY%20Intelligent%20Invoice%20Matching%20(Sapphire).mp4?csf=1&web=1&e=Ovy8Kl"
      },
      {
        name: "Finance Data Hub (Sapphire)",
        tagline: "SCM",
        desc: "",
        url:"https://sites.ey.com/:v:/r/sites/eysapinnovationcoe/Innovation%20P/SAPPHIRE%202026/Internal%20-%20Prep%20for%20Live%20Demos/Marketing%20Videos/Intro%20to%20EY%20Finance%20Data%20Hub%20(Sapphire).mp4?csf=1&web=1&e=ehIctC",
      },


      {
        name: "Follow up on Outstanding Receivables (Sapphire)",
        tagline: "Innovation Lab",
        desc: "AI use cases.",
        url: "https://sites.ey.com/:v:/r/sites/eysapinnovationcoe/Innovation%20P/SAPPHIRE%202026/Internal%20-%20Prep%20for%20Live%20Demos/Marketing%20Videos/Intro%20to%20EY%20Follow%20up%20on%20Outstanding%20Receivables%20(Sapphire).mp4?csf=1&web=1&e=5kjEHt"
      },
      {
        name: "Smart aATP (Sapphire)",
        tagline: "CX",
        desc: "CX demos.",
        url: "https://sites.ey.com/:v:/r/sites/eysapinnovationcoe/Innovation%20P/SAPPHIRE%202026/Internal%20-%20Prep%20for%20Live%20Demos/Marketing%20Videos/Intro%20to%20EY%20Smart%20aATP%20(Sapphire).mp4?csf=1&web=1&e=FhISpC"
      },
      {
        name: "TrueCost Agent (Sapphire)",
        tagline: "CX",
        desc: "CX demos.",
        url:"https://sites.ey.com/:v:/r/sites/eysapinnovationcoe/Innovation%20P/SAPPHIRE%202026/Internal%20-%20Prep%20for%20Live%20Demos/Marketing%20Videos/Intro%20to%20EY%20TrueCost%20Agent%20(Sapphire).mp4?csf=1&web=1&e=qf3lnI"
      }


    ],
     "Gen AI Solutions": [
      {
        name: "Marketing Videos",
        tagline: "Innovation Zone",
        desc: "SAPPHIRE 2026 marketing demos and videos.",
        img: "https://img.icons8.com/fluency/96/pdf.png",
        url: "/videos/EYSAPAIUseCasesBriefing.pdf"
      },
    ],
  };


  const [activeTab, setActiveTab] = useState("Order-to-Cash");
  // const navigate = useNavigate();

  return (
    <section className="solutions-container">

      <div className="solutions-header">
        <h1>Enterprise AI Solutions</h1>

        <p>
          Turn ideas into enterprise impact with intelligent apps and automation.
        </p>
      </div>

      {/* TOP TABS */}

      <div className="solution-tabs">

        {Object.keys(solutionData).map((tab, index) => (
          <button
            key={index}
            className={`solution-tab ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* CARDS */}

      {/* <div className="solutions-grid">

        {solutionData[activeTab].map((item, index) => (

          // <a
          //   href={item.url || "#"}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   key={index}
          //   style={{ textDecoration: "none", color: "inherit" }}
          // >


          <a
            href={item.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >


            <div className="solution-card">

              <img
                src={item.img}
                alt={item.name}
                className="card-image-ai"
              />

              <h3>{item.name}</h3>

              <h5>{item.tagline}</h5>

              <p>{item.desc}</p>

            </div>

          </a>

        ))}

      </div> */}

      <div className="solutions-grid">

        {solutionData[activeTab].map((item, index) => (

          activeTab === "Sapphire 2026" ? (

            <a
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ textDecoration: "none" }}
            >

              <div className="video-card-ui">

                <video
                  className="video-element-ui"
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="video-play">▶</div>

                <div className="video-footer-ui">
                  {item.name}
                </div>

              </div>

            </a>

          ) : (

            <a
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >

              <div className="solution-card">

                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-image-ai"
                  />
                )}

                <h3>{item.name}</h3>
                <h5>{item.tagline}</h5>
                <p>{item.desc}</p>

              </div>

            </a>

          )

        ))}

      </div>


    </section>
  );
}





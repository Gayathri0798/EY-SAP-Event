import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/aiSolution.css";

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
        name: "Agentic Finance Transformation",
        tagline: "AI-powered transformation",
        desc: "Reimagining Core Finance Processes with AI-Powered Agents.",
        img: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
        url: "/BASample",
      },
      {
        name: "Smart GL Account Reconciliation",
        tagline: "Smart finance",
        desc: "Automated GL reconciliation with AI insights.",
        img: "https://img.icons8.com/fluency/96/accounting.png",
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
        name: "Working Capital",
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
      },
      {
        name: "Autonomous Supply Chain",
        tagline: "AI-driven supply chain",
        desc: "Automate supply chain decisions intelligently.",
        img: "https://img.icons8.com/fluency/96/delivery.png",
      },
      {
        name: "Invoice Matching",
        tagline: "Invoice automation",
        desc: "Smart invoice validation and matching solution.",
        img: "https://img.icons8.com/fluency/96/receipt.png",
      },
      {
        name: "Requisition to Order",
        tagline: "Requisition to Order",
        desc: "",
        img: ""
      },
      {
        name: "PR Creation & PO Conversion",
        tagline: "PR Creation & PO Conversion",
        desc: "",
        img: ""
      },
      {
        name: "Stock Check & PR Creation",
        tagline: "Stock Check & PR Creation",
        desc: "",
        img: ""
      }, {
        name: "Raw Material Forecast",
        tagline: "Raw Material Forecast",
        desc: "",
        img: "",
      }, {
        name: "Invoice & Exception Management",
        tagline: "Invoice & Exception Management",
        desc: "",
        img: ""
      }
    ],

    "Enterprise Solutions": [
      {
        name: "EY Nexus",
        tagline: "Enterprise platform",
        desc: "Unified enterprise intelligence platform.",
        img: "https://img.icons8.com/fluency/96/network.png",
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
      },
      {
        name: "DigiGST",
        tagline: "DigiGST",
        desc: "",
        img: "",
        url: "/digigst",
      }
    ],

    "Sapphire 2026": [
      {
        name: "Marketing Videos",
        tagline: "Innovation Zone",
        desc: "SAPPHIRE 2026 marketing demos and videos.",
        img: "https://img.icons8.com/fluency/96/video.png",
        url: "https://sites.ey.com/sites/eysapinnovationcoe/Innovation%20P/Forms/AllItems.aspx?id=%2Fsites%2Feysapinnovationcoe%2FInnovation%20P%2FSAPPHIRE%202026%2FInternal%20%2D%20Prep%20for%20Live%20Demos%2FMarketing%20Videos&p=true&ga=1",
      },
    ],
  };


  const [activeTab, setActiveTab] = useState("Order-to-Cash");
  const navigate = useNavigate();

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

      <div className="solutions-grid">

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

      </div>

    </section>
  );
}





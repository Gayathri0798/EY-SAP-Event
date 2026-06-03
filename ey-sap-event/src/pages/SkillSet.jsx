import { useState } from "react";
import "../styles/skillSet.css";

export default function SkillsGrid() {
  const [selectedBucket, setSelectedBucket] = useState("All");

  const data = {
    "Core Agent Foundations": [
    {
      skill: "Agent Router & Skill Orchestrator",
      desc: "Routes a user request or process event to the right agent, decomposes the goal and invokes reusable skills in the correct sequence."
    },
    {
      skill: "Use Case Configuration Manager",
      desc: "Stores configurable rules, schemas, thresholds, prompts and workflow variants so the same skills can run in different business scenarios."
    },
    {
      skill: "Prompt & Policy Template Manager",
      desc: "Maintains reusable prompt, response and policy templates for summaries, recommendations, approvals and exception messages."
    }
  ],
 
  "Security, Trust & Governance": [
    {
      skill: "Identity, Role & Entitlement Check",
      desc: "Validates whether the user has access rights to perform the requested action."
    },
    {
      skill: "PII Masking & Sensitive Data Guard",
      desc: "Detects and masks personal, payroll, bank, tax or confidential data in inputs, prompts, retrieved context and outputs. "
    },
    {
      skill: "Confidence Scoring & Human Escalation",
      desc: "Scores output confidence and routes low-confidence or sensitive cases to a human reviewer."
    },
    {
      skill: "Audit Trail & Explainability Logger",
      desc: "Logs evidence, source references, data lineage, prompt/version, model decision rationale and user actions for auditability."
    }
  ],
 
  "Workflow & Human-in-the-Loop": [
    {
      skill: "Notification & Task Creation",
      desc: "Creates alerts, reminders, tasks and collaboration messages from agent findings and process triggers."
    },
    {
      skill: "Workflow & Approval Integration",
      desc: "Starts, updates, or completes approval workflows based on agent recommendations."
    },
    {
      skill: "Evaluation, Feedback & Learning Loop",
      desc: "Captures corrections and feedback to improve agent outputs and workflows."
    }
  ],
 
  "Document Intelligence & Knowledge": [
    {
      skill: "Multi-Source Document Ingestion",
      desc: "Ingests PDFs, scans, emails, Office files, and enterprise repositories for downstream processing."
    },
    {
      skill: "OCR & Layout Understanding",
      desc: "Extracts text from scanned files and understands tables, forms, and document layouts."
    },
    {
      skill: "Document Type Classification",
      desc: "Classifies documents such as invoices, POs, contracts, HR forms, and service records."
    },
    {
      skill: "Key-Value and Table Extraction",
      desc: "Extracts structured fields, line items, tables and checkboxes into reusable schemas with confidence scores."
    }
    ,{
      skill:"Clause, Obligation & Policy Extraction",
      desc:"Extracts clauses, obligations, dates, renewal terms, risks and policy requirements from contracts/policies."
    },{
      skill:"Entity Normalization & Field Validation",
      desc:"Normalizes extracted names, dates, currencies, addresses, tax IDs and IDs against master data and business formats."
    },{
      skill:"Citation-Backed Semantic Q&A",
      desc:"Answers questions using indexed documents and returns exact source references for validation and review."
    },{
      skill:"Document Comparison & Version Diff",
      desc:"Compares document versions and highlights changes, gaps, risks, and inconsistencies."
    },{
      skill:"Business Summary Generation",
      desc:"Generates executive, role-based and section-wise summaries tailored to finance, procurement, HR, supply chain or customer teams."
    },
    {
      skill:"Template Generation & Auto-Drafting",
      desc:"Creates controlled drafts such as emails, review notes, approval narratives, dispute responses and exception reports."
    }
  ],
 
  "SAP & Enterprise Integration": [
    {
      skill: "SAP Business Object Connector",
      desc: "Reads and writes authorized SAP business objects through APIs, CDS views, OData services or replicated data products."
    },
    {
      skill: "Event Mesh Trigger Handler",
      desc: "Consumes SAP events such as invoice posted, PR created, supplier blocked, dispute opened or forecast changed to start an agent workflow."
    },
    {
      skill: "Reusable Feature View Builder",
      desc: "Builds reusable analytical feature views from SAP transactional and master data for scoring, insights and forecasting."
    },{
      skill:"Master Data Quality & Duplicate Detection",
      desc:"Detects incomplete, duplicated or inconsistent customer, vendor, material, GL, cost center and employee master records."
    },{
      skill:"Business Object Relationship Mapper",
      desc:"Traces relationships across PR, PO, GR, invoice, delivery, billing, payment, dispute, customer and supplier objects."
    },{
      skill:"Authorization-Aware Data Retrieval",
      desc:"Retrieves only data the user and agent are authorized to use across SAP and non-SAP sources."
    },{
        skill:"HANA Vector/RAG Indexing ",
        desc:"Chunks, embeds and indexes documents, policies, notes and business context for retrieval-augmented generation."
    },{
      skill:"Integration Suite API Mediation",
      desc:"Standardizes API access, security, throttling, mapping and monitoring for SAP and external systems."
    },
    {
      skill:"Data Lineage & Source Mapping",
      desc:"Maps outputs back to source tables, APIs, document pages and rules so business users can verify recommendations."
    },
    {
      skill:"Fiori Action Adapter",
      desc:"Creates or updates Fiori deep links and action cards for users to approve, review or correct data directly in SAP."
    },{
      skill:"Task Center / Workflow Adapter",
      desc:"Connects agent escalations and approvals into SAP Task Center and workflow inboxes."
    },{
      skill:"Process Mining / Process Insights Connector",
      desc:"Reads process variants, bottlenecks and exception hotspots to prioritize where agents should intervene.",
    }
    
  ],
 
  "Intelligent Finance Operations": [
    {
      skill: "Invoice Header & Line Extraction",
      desc: "Extracts invoice details into schema."
    },
    {
      skill: "2-Way / 3-Way Match Validation",
      desc: "Matches invoice with PO and receipt."
    },
    {
      skill: "Duplicate Invoice Detection",
      desc: "Detects duplicate invoices using matching."
    }
  ],
 
  "Intelligent Procurement & Risk Management": [
    {
      skill: "PR Policy Compliance Check",
      desc: "Validates purchase requisitions against policy."
    },
    {
      skill: "Supplier Recommendation",
      desc: "Suggests suppliers based on multiple factors."
    }
  ],
 
  "Intelligent Workforce & HR Operations": [
    {
      skill: "Employee Master Data Validator",
      desc: "Validates employee records."
    },
    {
      skill: "Onboarding Journey Planner",
      desc: "Creates onboarding plans."
    }
  ],
 
  "Customer & Revenue Intelligence": [
    {
      skill: "Customer 360 Profile Builder",
      desc: "Creates unified profile of customer."
    }
  ],
 
  "Supply Chain Planning Intelligence": [
    {
      skill: "Demand Signal Ingestion",
      desc: "Ingests demand data into planning layer."
    }
  ],
 
  "Advanced Analytics & AI Governance": [
    {
      skill: "Anomaly Feature Engineering",
      desc: "Builds anomaly detection features."
    },
    {
      skill: "Model Drift & Performance Monitoring",
      desc: "Tracks model accuracy over time."
    }
  ]
  };

  // ✅ Flatten data
  const allCards = Object.keys(data).flatMap(bucket =>
    data[bucket].map(item => ({
      ...item,
      bucket
    }))
  );

  // ✅ Filter
  const filteredCards =
    selectedBucket === "All"
      ? allCards
      : allCards.filter(card => card.bucket === selectedBucket);

  return (
    <div className="skillsPage animatePage">

      <section className="skills-hero">
        <div className="skills-overlay"></div>

        <div className="skills-content-hero">
          <h1>
            Build faster with ready-to-use skills <br />
          Skill Library
          </h1>

          <p>
            Discover reusable skills designed to power enterprise agents.
          </p>
        </div>
      </section>

      <div className="layout">

        {/* ✅ SIDEBAR */}
        <div className="sidebar">
          <h3>Quick Filters</h3>

          <div
            className={`filterItem ${
              selectedBucket === "All" ? "active" : ""
            }`}
            onClick={() => setSelectedBucket("All")}
          >
            All
          </div>

          {Object.keys(data).map(bucket => (
            <div
              key={bucket}
              className={`filterItem ${
                selectedBucket === bucket ? "active" : ""
              }`}
              onClick={() => setSelectedBucket(bucket)}
            >
              {bucket}
            </div>
          ))}
        </div>

        {/* ✅ CONTENT */}
        <div className="skills-content">
          <div className="grid">
            {filteredCards.map((item, i) => (
              <div
                className="skillCard animateCard"
                key={i}
                style={{ animationDelay: `${i * 0.07}s` }}

                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const rotateX = -(y - rect.height / 2) / 15;
                  const rotateY = (x - rect.width / 2) / 15;

                  e.currentTarget.style.transform =
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <div className="bucket">{item.bucket}</div>
                <div className="title">{item.skill}</div>
                <div className="desc-text">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
import { useState } from "react";
import AreaChart from "../components/AreaChart";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";

export default function AgentLibrary() {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const colors = [
    "#4e7cff",
    "#7c5cff",
    "#00c2a8",
    "#ff8c42",
    "#ff5f7e",
    "#5bc0de",
    "#a5ff8f",
  ];

  const filteredProjects = projects.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>

      <div className="library-page">
        {/* Header */}
        <div className="library-header">
          <h2>Agent Library</h2>

          <div className="library-search">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="divider"></div>
            <span>Filter</span>
          </div>
        </div>

        <div className="library-content">
          {/* LEFT SIDE */}
          <div className="project-list">
            {filteredProjects.map((item, i) => (
              <div
                className="project-card"
                key={i}
                onClick={() => setSelectedProject(item)}
              >
                <div
                  className="project-code"
                  style={{
                    background: `linear-gradient(
      135deg,
      ${colors[i % colors.length]},
      ${colors[i % colors.length]}cc
    )`,
                  }}
                >
                  {item.code}
                </div>

                <div className="project-title">{item.title}</div>

                <div className="project-field">
                  <span>Area</span>
                  <p>{item.area}</p>
                </div>

                <div className="project-field">
                  <span>Serviceline</span>
                  <p>{item.service}</p>
                </div>

                <div className="project-field">
                  <span>Status</span>
                  <p className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </p>
                </div>

                <div className="project-field">
                  <span>Sprint Lead</span>
                  <p>{item.lead}</p>
                </div>

                <div className="arrow">›</div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="side-panel">
            <div className="panel-card">
              <h3>Projects by Area</h3>

              <AreaChart />

              <ul className="area-list">
                <li>
                  <span className="dot global"></span> Global <span>25</span>
                </li>
                <li>
                  <span className="dot americas"></span> Americas <span>9</span>
                </li>
                <li>
                  <span className="dot emeia"></span> EMEIA <span>3</span>
                </li>
                <li>
                  <span className="dot apac"></span> APAC <span>0</span>
                </li>
              </ul>
            </div>
            <div className="panel-card">
              <h3>Projects by Technology Trends</h3>

              <div className="trend-list">
                <div className="trend-item">
                  <span>Thinking Machines & Artificial Intelligence</span>
                  <span>22</span>
                </div>

                <div className="trend-item">
                  <span>Digital Transformation</span>
                  <span>9</span>
                </div>

                <div className="trend-item">
                  <span>Conversational User Interface</span>
                  <span>2</span>
                </div>

                <div className="trend-item">
                  <span>Future of work</span>
                  <span>1</span>
                </div>

                <div className="trend-item">
                  <span>Next Wave Agentic AI</span>
                  <span>1</span>
                </div>
                <div className="trend-item">
                  <span>Future of work</span>
                  <span>1</span>
                </div>

                <div className="trend-item">
                  <span>Next Wave Agentic AI</span>
                  <span>1</span>
                </div>
                <div className="trend-item">
                  <span>Future of work</span>
                  <span>1</span>
                </div>

                <div className="trend-item">
                  <span>Next Wave Agentic AI</span>
                  <span>1</span>
                </div>
                <div className="trend-item">
                  <span>Future of work</span>
                  <span>1</span>
                </div>

                <div className="trend-item">
                  <span>Next Wave Agentic AI</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="panel-card">
              <h3>Projects by Serviceline</h3>

              <div className="service-list">
                <div className="service-item">
                  <div className="service-label">
                    <span>Cross Serviceline</span>
                    <span>15</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: "70%" }}></div>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-label">
                    <span>Consulting</span>
                    <span>8</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: "40%" }}></div>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-label">
                    <span>CBS</span>
                    <span>7</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: "35%" }}></div>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-label">
                    <span>Cross Serviceline</span>
                    <span>15</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: "70%" }}></div>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-label">
                    <span>Consulting</span>
                    <span>8</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: "40%" }}></div>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service-label">
                    <span>CBS</span>
                    <span>7</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: "35%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </>
  );
}
const existingProjects = [
  {
    code: "AAM",
    title: "Agentic AI Market Assessment",
    area: "Americas",
    service: "Consulting",
    status: "Active",
    lead: "Sumanta Mukherjee",
  },
  {
    code: "EEF",
    title: "EY Experience.AI for Customer: Competitor Scan",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Sumanta Mukherjee",
  },
  {
    code: "LAL",
    title: "Learning AI (LxP-Content Builder Lite)",
    area: "Global",
    service: "Consulting",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "ARU",
    title: "Agent Runtime Platform",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "FNE",
    title: "Fabric Next AI Integration",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "DOT",
    title: "Data Office – Transformation Agents",
    area: "Global",
    service: "Cross Serviceline",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "ESA",
    title: "Enterprise Semantic AI Stack & Ontology Engine",
    area: "EMEIA",
    service: "Client Technology",
    status: "Active",
    lead: "Sumanta Mukherjee",
  },
  {
    code: "SAP",
    title: "SAP Joule AI Integration Framework",
    area: "Global",
    service: "Consulting",
    status: "Active",
    lead: "Bhavana Rao",
  },
  {
    code: "OCR",
    title: "AI OCR Document Processing Engine",
    area: "APAC",
    service: "Client Technology",
    status: "Active",
    lead: "Aishwarya Menon",
  },
  {
    code: "DGE",
    title: "Data Genie – AI Data Assistant",
    area: "Americas",
    service: "Consulting",
    status: "Active",
    lead: "Shivendra Singh",
  },
  {
    code: "SML",
    title: "Smart ML Pipeline Orchestrator",
    area: "EMEIA",
    service: "Consulting",
    status: "Inactive",
    lead: "Rohit Sharma",
  },
  {
    code: "NLP",
    title: "Enterprise NLP Analytics Platform",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Neha Kapoor",
  },
  {
    code: "CVS",
    title: "Computer Vision Surveillance System",
    area: "APAC",
    service: "Consulting",
    status: "Active",
    lead: "Arjun Verma",
  },
  {
    code: "TRC",
    title: "TrueCost AI Optimization Agent",
    area: "Americas",
    service: "Consulting",
    status: "Active",
    lead: "Karthik Iyer",
  },
  {
    code: "RPA",
    title: "AI Driven RPA Automation Suite",
    area: "EMEIA",
    service: "Cross Serviceline",
    status: "Inactive",
    lead: "Priya Nair",
  },
  {
    code: "AAM",
    title: "Agentic AI Market Assessment",
    area: "Americas",
    service: "Consulting",
    status: "Active",
    lead: "Sumanta Mukherjee",
  },
  {
    code: "EEF",
    title: "EY Experience.AI for Customer: Competitor Scan",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Sumanta Mukherjee",
  },
  {
    code: "LAL",
    title: "Learning AI (LxP-Content Builder Lite)",
    area: "Global",
    service: "Consulting",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "ARU",
    title: "Agent Runtime Platform",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "FNE",
    title: "Fabric Next AI Integration",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "DOT",
    title: "Data Office – Transformation Agents",
    area: "Global",
    service: "Cross Serviceline",
    status: "Active",
    lead: "Sergii Trotskyi",
  },
  {
    code: "ESA",
    title: "Enterprise Semantic AI Stack & Ontology Engine",
    area: "EMEIA",
    service: "Client Technology",
    status: "Active",
    lead: "Sumanta Mukherjee",
  },
  {
    code: "SAP",
    title: "SAP Joule AI Integration Framework",
    area: "Global",
    service: "Consulting",
    status: "Active",
    lead: "Bhavana Rao",
  },
  {
    code: "OCR",
    title: "AI OCR Document Processing Engine",
    area: "APAC",
    service: "Client Technology",
    status: "Active",
    lead: "Aishwarya Menon",
  },
  {
    code: "DGE",
    title: "Data Genie – AI Data Assistant",
    area: "Americas",
    service: "Consulting",
    status: "Active",
    lead: "Shivendra Singh",
  },
  {
    code: "SML",
    title: "Smart ML Pipeline Orchestrator",
    area: "EMEIA",
    service: "Consulting",
    status: "Inactive",
    lead: "Rohit Sharma",
  },
  {
    code: "NLP",
    title: "Enterprise NLP Analytics Platform",
    area: "Global",
    service: "Client Technology",
    status: "Active",
    lead: "Neha Kapoor",
  },
  {
    code: "CVS",
    title: "Computer Vision Surveillance System",
    area: "APAC",
    service: "Consulting",
    status: "Active",
    lead: "Arjun Verma",
  },
  {
    code: "TRC",
    title: "TrueCost AI Optimization Agent",
    area: "Americas",
    service: "Consulting",
    status: "Active",
    lead: "Karthik Iyer",
  },
  {
    code: "RPA",
    title: "AI Driven RPA Automation Suite",
    area: "EMEIA",
    service: "Cross Serviceline",
    status: "Inactive",
    lead: "Priya Nair",
  },
];
const moreProjects = Array.from({ length: 20 }, (_, i) => ({
  code: "AI" + i,
  title: `AI Generated Project ${i}`,
  area: ["Global", "Americas", "EMEIA", "APAC"][i % 4],
  service: ["Consulting", "Client Technology"][i % 2],
  status: i % 3 === 0 ? "Inactive" : "Active",
  lead: "Auto Generated",
}));
const projects = [...existingProjects, ...moreProjects];

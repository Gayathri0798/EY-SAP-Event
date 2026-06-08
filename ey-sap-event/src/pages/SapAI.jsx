
import "../styles/eySap.css";
import FlowChart from "../components/flowchart";

export default function SapAI() {
  // const [active, setActive] = useState(null);

  // const data = [
  //   {
  //     title: "Identify the right AI opportunities",
  //     content:
  //       "Prioritize SAP AI use cases that can improve productivity, decision-making and business outcomes.",
  //     img: "/images/sap1.png",
  //   },
  //   {
  //     title: "Build on a trusted SAP foundation",
  //     content:
  //       "Use SAP BTP, SAP Business AI, Joule, data and integration capabilities to embed AI into enterprise workflows.",
  //     img: "/images/sap2.png",
  //   },
  //   {
  //     title: "Scale with confidence",
  //     content:
  //       "Apply EY’s experience in governance, security, change management and value realization to make AI adoption sustainable.",
  //     img: "/images/sap3.png",
  //   },
  // ];

  return (
    <>
      {/* HERO */}
      <section className="hero-banner">
        <div className="overlay"></div>
        <div className="content">
          <p className="font-ey">
            Unlock the power of SAP Business AI with EY’s industry knowledge,
            transformation experience and responsible AI approach.
          </p>
        </div>
      </section>

      {/* SECTION 2 - ACCORDION */}
      <FlowChart />

      
    </>
  );
}

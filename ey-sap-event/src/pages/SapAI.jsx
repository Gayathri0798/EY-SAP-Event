
import "../styles/eySap.css";
import FlowChart from "../components/flowchart";
import ProcessDiagram from "../components/ProcessDiagram";

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
      <h1 
        className="ba-heading" 
        style={{ 
          fontSize: '2rem', 
          fontWeight: '700', 
          color: '#ffffff', 
          marginBottom: '16px',
          letterSpacing: '-0.5px',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        EY’s SAP Business AI Architecture: From Joule to Enterprise Value
      </h1>
       <p 
        className="ba-subtitle" 
        style={{ 
          fontSize: '1.15rem', 
          color: '#94a3b8', 
          maxWidth: '800px', 
          margin: '0 auto 48px auto',
          lineHeight: '1.6',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        Where SAP’s AI Foundation Meets EY’s Industry Intelligence — Building, Governing, and Scaling Autonomous Agents Across the Enterprise
      </p>
      <div 
        className="ba-image-frame" 
        style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          padding: '0 40px', // Creates the signature side spacing mock-up look
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
         <img 
          src="/images/Business-architecture.png" 
          alt="BA Sample 3" 
          className="ba-img" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '12px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
            border: '1px solid #eaeaea',
            marginTop: '40px' 
          }}
        />
      </div>
      <ProcessDiagram />
    </>
  );
}

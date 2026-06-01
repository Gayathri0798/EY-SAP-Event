import "../styles/sapnow.css";
export default function SapNow() {
  return (
    <div className="sap-now">

      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/videos/sap-now.mov" type="video/mp4" />
      </video>

      <div className="sap-now-content">
        <h1>EY-SAP-EVENT</h1>

        <p className="subtitle">
          NextGen SAP AI, Agent Ecosystem and Innovation Platform
        </p>

        {/* Vertical Line */}
        <div className="horizontal-line"></div>

        <button>Learn More</button>
      </div>

    </div>
  );
}
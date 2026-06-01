export default function Hero() {
  return (
    <div className="hero">

      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/videos/ai-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
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
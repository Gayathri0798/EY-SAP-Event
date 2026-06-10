export default function AutonomousSupplyChain() {
  return (
    <div 
      className="ba-main" 
      style={{ 
        padding: '60px 20px', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        backgroundColor: '#111827',
        minHeight: '100vh'
      }}
    >
      <h1 
        className="ba-heading" 
        style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          color: '#ffffff', 
          marginBottom: '16px',
          letterSpacing: '-0.5px'
        }}
      >
        Factory Planner Intelligence Copilot
      </h1>
      
      <p 
        className="ba-subtitle" 
        style={{ 
          fontSize: '1.15rem', 
          color: '#94a3b8', 
          maxWidth: '800px', 
          margin: '0 auto 48px auto',
          lineHeight: '1.6'
        }}
      >
        AI-powered planning intelligence that transforms supply chain signals into actionable decisions and automated execution.AI-powered planning intelligence that transforms supply chain signals into actionable decisions and automated execution.
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
          src="/images/autonomous.jfif" 
          alt="BA Sample 1" 
          className="ba-img" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '12px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)',
            border: '1px solid #eaeaea'
          }}
        />

         <img 
          src="/images/autonomous1.jfif" 
          alt="BA Sample 2" 
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

        
         <img 
          src="/images/autonomous2.jfif" 
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
        <img 
          src="/images/autonomous3.jfif" 
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
    </div>
  );
}
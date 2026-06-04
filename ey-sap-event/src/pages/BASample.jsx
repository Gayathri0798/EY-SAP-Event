export default function BASample() {
  return (
    <div 
      className="ba-main" 
      style={{ 
        padding: '60px 20px', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}
    >
      <h1 
        className="ba-heading" 
        style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          color: '#2e2e2e', 
          marginBottom: '16px',
          letterSpacing: '-0.5px'
        }}
      >
        Bha Adv Draft
      </h1>
      
      <p 
        className="ba-subtitle" 
        style={{ 
          fontSize: '1.15rem', 
          color: '#666666', 
          maxWidth: '800px', 
          margin: '0 auto 48px auto',
          lineHeight: '1.6'
        }}
      >
        Bha Adv Draft Desc
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
          src="/images/ba1.jpg" 
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
          src="/images/ba2.jpg" 
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
      </div>
    </div>
  );
}
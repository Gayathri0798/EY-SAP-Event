
export default function ProcureSenseArchitecture() {
  return (
    <>
      <style>{`
        .procuresense-arch-wrapper {
          width: 100%;
          min-height: 100vh;
          background: #070B14;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        }

        .procuresense-arch-wrapper .architecture-shell {
          width: min(1240px, calc(100vw - 16px), calc((100vh - 16px) * 1280 / 660));
          margin: 0 auto;
          overflow: hidden;
        }

        .procuresense-arch-wrapper .architecture-svg {
          display: block;
          width: 100%;
          height: auto;
          max-height: calc(100vh - 16px);
        }

        @keyframes borderShimmer {
          0%   { opacity: 0.55; }
          50%  { opacity: 1;    }
          100% { opacity: 0.55; }
        }

        @keyframes aiPulse {
          0%   { opacity: 0.6;  r: 34px; }
          50%  { opacity: 1;    r: 36px; }
          100% { opacity: 0.6;  r: 34px; }
        }

        .procuresense-arch-wrapper .center-shimmer { 
          animation: borderShimmer 3.8s ease-in-out infinite; 
        }

        .procuresense-arch-wrapper .ai-pulse-ring  { 
          animation: aiPulse 2.6s ease-in-out infinite; 
        }
      `}</style>

      <div className="procuresense-arch-wrapper">
        <div className="architecture-shell">
          <svg 
            className="architecture-svg"
            viewBox="0 0 1280 660"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Grid System Background */}
              <pattern id="pg" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0L0 0 0 32" fill="none" stroke="rgba(148,163,184,0.042)" strokeWidth="0.5" />
              </pattern>

              {/* Background Glow Spheres */}
              <radialGradient id="glLeft" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glCenter" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.09" />
                <stop offset="55%" stopColor="#FFE600" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glRight" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
              </radialGradient>

              {/* Main Orchestration Fill */}
              <linearGradient id="ccGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B1828" />
                <stop offset="100%" stopColor="#070D1C" />
              </linearGradient>

              {/* Tight Boundary Panel Lighting */}
              <filter id="cardGlow" x="-6%" y="-6%" width="112%" height="112%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
                <feComposite in="SourceGraphic" in2="b" operator="over" />
              </filter>

              {/* AI Hub Core Radial Drop */}
              <filter id="aiHalo" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
                <feComposite in="SourceGraphic" in2="b" operator="over" />
              </filter>

              {/* Inbound Ecosystem Vector Fills */}
              <linearGradient id="lcGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0C1627" />
                <stop offset="100%" stopColor="#070D1A" />
              </linearGradient>

              {/* Deep Component Processing Gradients */}
              <linearGradient id="capMemory" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A1E35" />
                <stop offset="100%" stopColor="#071420" />
              </linearGradient>
              <linearGradient id="capSkill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#151A0E" />
                <stop offset="100%" stopColor="#0C1208" />
              </linearGradient>
              <linearGradient id="capGuard" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#160F2E" />
                <stop offset="100%" stopColor="#0C0A1C" />
              </linearGradient>

              {/* Shimmer Border Overlays */}
              <linearGradient id="topHL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                <stop offset="30%" stopColor="rgba(34,211,238,0.55)" />
                <stop offset="50%" stopColor="rgba(255,230,0,0.65)" />
                <stop offset="70%" stopColor="rgba(34,211,238,0.55)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0)" />
              </linearGradient>

              <radialGradient id="orbitGl" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="rgba(34,211,238,0)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.12)" />
              </radialGradient>

              <radialGradient id="aiCore" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#1A2A3A" />
                <stop offset="100%" stopColor="#060C18" />
              </radialGradient>
            </defs>

            {/* BACKGROUND CANVAS RENDERS */}
            <rect width="1280" height="660" fill="#070B14" />
            <rect width="1280" height="660" fill="url(#pg)" />

            <ellipse cx="199" cy="380" rx="190" ry="250" fill="url(#glLeft)" />
            <ellipse cx="640" cy="365" rx="255" ry="290" fill="url(#glCenter)" />
            <ellipse cx="1085" cy="380" rx="190" ry="250" fill="url(#glRight)" />

            {/* MASTER TYPOGRAPHY LAYER */}
            <text x="640" y="50" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="34" fontWeight="700" fill="#F5F7FA" letterSpacing="-0.4">
              How <tspan fill="#FFE600">ProcureSense</tspan> Works
            </text>
            <text x="640" y="72" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="12.5" fill="#8FA3BF" letterSpacing="0.15">
              AI-powered procurement and negotiation intelligence for data-backed supplier decisions
            </text>

            {/* COLUMN 1: LEFT-HAND DATA INTEGRATION SOURCES */}
            <rect x="44" y="96" width="312" height="216" rx="11" fill="url(#lcGrad)" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
            <rect x="44" y="108" width="3" height="44" rx="1.5" fill="#22D3EE" opacity="0.65" />
            <text x="62" y="117" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fontWeight="600" fill="#22D3EE" letterSpacing="1.5">ENTERPRISE SYSTEMS</text>

            {/* Row 1: SAP Ariba */}
            <g>
              <rect x="60" y="126" width="280" height="40" rx="7" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.09)" strokeWidth="1" />
              <rect x="70" y="135" width="28" height="16" rx="3" fill="#0055B3" />
              <text x="84" y="147" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="7" fontWeight="700" fill="#fff">SAP</text>
              <text x="108" y="143" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10.5" fontWeight="600" fill="#F5F7FA">SAP Ariba</text>
              <text x="108" y="156" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#7A93B0">Sourcing &amp; Procurement</text>
            </g>

            {/* Row 2: SAP S/4HANA */}
            <g>
              <rect x="60" y="172" width="280" height="40" rx="7" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.09)" strokeWidth="1" />
              <rect x="70" y="181" width="28" height="16" rx="3" fill="#0055B3" />
              <text x="84" y="193" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="7" fontWeight="700" fill="#fff">SAP</text>
              <text x="108" y="189" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10.5" fontWeight="600" fill="#F5F7FA">SAP S/4HANA</text>
              <text x="108" y="202" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#7A93B0">ERP &amp; Finance</text>
            </g>

            {/* Row 3: Non-SAP ERP */}
            <g>
              <rect x="60" y="218" width="280" height="40" rx="7" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.09)" strokeWidth="1" />
              <g transform="translate(70,227)">
                <rect width="28" height="16" rx="3" fill="rgba(96,165,250,0.13)" stroke="rgba(96,165,250,0.4)" strokeWidth="1" />
                <rect x="4" y="3" width="16" height="4" rx="1" fill="none" stroke="#60A5FA" strokeWidth="1" />
                <rect x="4" y="9" width="16" height="4" rx="1" fill="none" stroke="#60A5FA" strokeWidth="1" />
                <circle cx="18" cy="5" r="1" fill="#60A5FA" />
                <circle cx="18" cy="11" r="1" fill="#60A5FA" />
              </g>
              <text x="108" y="235" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10.5" fontWeight="600" fill="#F5F7FA">Non-SAP ERP Systems</text>
              <text x="108" y="248" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#7A93B0">Oracle, Microsoft, etc.</text>
            </g>

            {/* Row 4: Third-Party Tools */}
            <g>
              <rect x="60" y="264" width="280" height="40" rx="7" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.09)" strokeWidth="1" />
              <g transform="translate(70,273)">
                <rect width="28" height="16" rx="3" fill="rgba(74,222,128,0.11)" stroke="rgba(74,222,128,0.36)" strokeWidth="1" />
                <line x1="9" y1="3" x2="9" y2="7" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="13" y1="3" x2="13" y2="7" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M7 7h8v3a3 3 0 01-3 3H10a3 3 0 01-3-3V7z" fill="none" stroke="#4ADE80" strokeWidth="1" />
                <line x1="11" y1="13" x2="11" y2="15" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" />
              </g>
              <text x="108" y="281" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10.5" fontWeight="600" fill="#F5F7FA">Third-Party Tool</text>
              <text x="108" y="294" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#7A93B0">Coupa, Jaggaer, etc.</text>
            </g>

            {/* LOWER LEFT SUB-SYSTEM: GRANULAR LEDGER MATRICES */}
            <rect x="44" y="324" width="312" height="320" rx="11" fill="url(#lcGrad)" stroke="rgba(34,211,238,0.13)" strokeWidth="1" />
            <rect x="44" y="336" width="3" height="36" rx="1.5" fill="#22D3EE" opacity="0.45" />
            <text x="62" y="345" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fontWeight="600" fill="#22D3EE" letter-spacing="1.5">PROCUREMENT DATA</text>

            {/* D1: Supplier Master Profiles */}
            <g>
              <rect x="60" y="354" width="280" height="37" rx="6" fill="rgba(15,23,42,0.5)" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
              <g transform="translate(70,362)">
                <circle cx="9" cy="5" r="4" fill="none" stroke="#22D3EE" strokeWidth="1.2" />
                <path d="M1 21C1 16 17 16 17 21" fill="none" stroke="#22D3EE" strokeWidth="1.2" />
              </g>
              <text x="102" y="377" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="600" fill="#E8EFF8">Supplier Master Data</text>
            </g>

            {/* D2: Purchase Orders */}
            <g>
              <rect x="60" y="398" width="280" height="37" rx="6" fill="rgba(15,23,42,0.5)" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
              <g transform="translate(70,405)">
                <rect x="3" y="1" width="12" height="17" rx="2" fill="none" stroke="#60A5FA" strokeWidth="1.2" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="#60A5FA" strokeWidth="1" />
                <line x1="6" y1="10" x2="12" y2="10" stroke="#60A5FA" strokeWidth="1" />
                <line x1="6" y1="14" x2="10" y2="14" stroke="#60A5FA" strokeWidth="1" />
              </g>
              <text x="102" y="421" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="600" fill="#E8EFF8">PO &amp; Invoice Data</text>
            </g>

            {/* D3: Cost Delta Histories */}
            <g>
              <rect x="60" y="442" width="280" height="37" rx="6" fill="rgba(15,23,42,0.5)" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
              <g transform="translate(70,449)">
                <polyline points="1,17 5,11 9,14 15,5" fill="none" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12,5 15,5 15,8" fill="none" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" />
              </g>
              <text x="102" y="465" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="600" fill="#E8EFF8">Pricing &amp; Discount History</text>
            </g>

            {/* D4: Legal Contract Limits */}
            <g>
              <rect x="60" y="486" width="280" height="37" rx="6" fill="rgba(15,23,42,0.5)" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
              <g transform="translate(70,493)">
                <rect x="3" y="1" width="12" height="17" rx="2" fill="none" stroke="#A78BFA" strokeWidth="1.2" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="#A78BFA" strokeWidth="1" />
                <line x1="6" y1="10" x2="12" y2="10" stroke="#A78BFA" strokeWidth="1" />
                <path d="M6 14l2 2 4-4" fill="none" stroke="#A78BFA" strokeWidth="1.1" strokeLinecap="round" />
              </g>
              <text x="102" y="509" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="600" fill="#E8EFF8">Contract &amp; Payment Terms</text>
            </g>

            {/* D5: Logistics Track Performance */}
            <g>
              <rect x="60" y="530" width="280" height="37" rx="6" fill="rgba(15,23,42,0.5)" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
              <g transform="translate(70,537)">
                <rect x="1" y="6" width="12" height="9" rx="1" fill="none" stroke="#2DD4BF" strokeWidth="1.2" />
                <path d="M13 10h4l2 4v1h-6v-5z" fill="none" stroke="#2DD4BF" strokeWidth="1.2" />
                <circle cx="5" cy="16" r="2" fill="none" stroke="#2DD4BF" strokeWidth="1" />
                <circle cx="15" cy="16" r="2" fill="none" stroke="#2DD4BF" strokeWidth="1" />
              </g>
              <text x="102" y="553" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="600" fill="#E8EFF8">Delivery Performance Data</text>
            </g>

            {/* D6: Global Index Feeds */}
            <g>
              <rect x="60" y="574" width="280" height="37" rx="6" fill="rgba(15,23,42,0.5)" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
              <g transform="translate(70,581)">
                <path d="M9 1L17 4v7c0 5-8 9-8 9S1 16 1 11V4z" fill="none" stroke="#F59E0B" strokeWidth="1.2" />
                <line x1="9" y1="8" x2="9" y2="13" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="9" cy="6.5" r="1" fill="#F59E0B" />
              </g>
              <text x="102" y="597" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="600" fill="#E8EFF8">External Risk / Market Data</text>
            </g>

            {/* D7: Alternate Stream Vectors */}
            <g>
              <rect x="60" y="618" width="280" height="22" rx="5" fill="rgba(15,23,42,0.4)" stroke="rgba(148,163,184,0.06)" strokeWidth="1" />
              <g transform="translate(70,621)">
                <ellipse cx="8" cy="4" rx="7" ry="2.5" fill="none" stroke="#8FA3BF" strokeWidth="1" />
                <path d="M1 4v6c0 1.4 3 2.5 7 2.5S15 11.4 15 10V4" fill="none" stroke="#8FA3BF" strokeWidth="1" />
                <line x1="15" y1="9" x2="18" y2="9" stroke="#8FA3BF" strokeWidth="1.2" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="10.5" stroke="#8FA3BF" strokeWidth="1.2" />
              </g>
              <text x="102" y="633" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#8FA3BF">Other Relevant Data</text>
            </g>

            {/* PIPELINE CONNECTOR ARRAYS — INPUT FUNNEL */}
            <g>
              <path d="M356 204 C380 204 395 250 405 280" fill="none" stroke="rgba(34,211,238,0.28)" strokeWidth="1.2" />
              <circle cx="356" cy="204" r="2.5" fill="rgba(34,211,238,0.5)" />
              <circle cx="405" cy="280" r="2" fill="rgba(34,211,238,0.4)" />

              <path d="M356 484 C378 484 395 420 405 385" fill="none" stroke="rgba(34,211,238,0.22)" strokeWidth="1.2" />
              <circle cx="356" cy="484" r="2.5" fill="rgba(34,211,238,0.38)" />
              <circle cx="405" cy="385" r="2" fill="rgba(34,211,238,0.3)" />
            </g>

            {/* COLUMN 2: DEAD-CENTER AI INTEL MATRIX */}
            <g>
              {/* Outer Blur Base Layout Container */}
              <rect x="401" y="108" width="478" height="478" rx="20" fill="none" stroke="rgba(34,211,238,0.22)" strokeWidth="6" filter="url(#cardGlow)" className="center-shimmer" />
              <rect x="405" y="112" width="470" height="470" rx="16" fill="url(#ccGrad)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.2" />
              <rect x="411" y="118" width="458" height="458" rx="13" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
              
              {/* Neon Shimmer Top Border Edge */}
              <rect x="455" y="112" width="370" height="2" rx="1" fill="url(#topHL)" className="center-shimmer" />

              <ellipse cx="640" cy="345" rx="150" ry="130" fill="rgba(34,211,238,0.04)" />
              <ellipse cx="640" cy="345" rx="80" ry="70" fill="rgba(255,230,0,0.05)" />

              <rect x="520" y="126" width="240" height="30" rx="15" fill="rgba(255,230,0,0.1)" stroke="rgba(255,230,0,0.5)" strokeWidth="1.2" />
              <rect x="521" y="127" width="238" height="12" rx="12" fill="rgba(255,255,255,0.04)" />
              <text x="640" y="146" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#FFE600" letterSpacing="2.3">PROCURESENSE AI</text>

              <text x="640" y="170" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fill="#8BBDD4" letterSpacing="0.2">Procurement Intelligence Agent</text>
              <line x1="475" y1="182" x2="805" y2="182" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
              <text x="640" y="199" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fontWeight="600" fill="#8FA3BF" letterSpacing="2.2">PROCUREMENT AGENT CREW</text>

              {/* Central Dynamic Orbit Track */}
              <circle cx="640" cy="345" r="98" fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="1" strokeDasharray="5 8" />
            </g>

            {/* SATELLITE CORE PIPELINE PILOTS */}
            <g>
              {/* Vendor Matrix Comparison Block */}
              <g>
                <rect x="584" y="236" width="112" height="32" rx="16" fill="rgba(10,20,42,0.88)" stroke="rgba(34,211,238,0.5)" strokeWidth="1.1" />
                <text x="640" y="257" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Vendor Comparison</text>
              </g>

              {/* Evaluation Allocation Pilot */}
              <g>
                <rect x="462" y="288" width="114" height="32" rx="16" fill="rgba(10,20,42,0.88)" stroke="rgba(34,211,238,0.42)" strokeWidth="1.1" />
                <text x="519" y="303" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Vendor</text>
                <text x="519" y="315" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Shortlisting</text>
              </g>

              {/* Data Analytical Insights Pilot */}
              <g>
                <rect x="704" y="288" width="100" height="32" rx="16" fill="rgba(10,20,42,0.88)" stroke="rgba(167,139,250,0.48)" strokeWidth="1.1" />
                <text x="754" y="303" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">KPI</text>
                <text x="754" y="315" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Insights</text>
              </g>

              {/* Risk Mitigation Pilot */}
              <g>
                <rect x="462" y="374" width="114" height="32" rx="16" fill="rgba(10,20,42,0.88)" stroke="rgba(45,212,191,0.42)" strokeWidth="1.1" />
                <text x="519" y="389" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Risk &amp;</text>
                <text x="519" y="401" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Delivery</text>
              </g>

              {/* Tactical Negotiator Block */}
              <g>
                <rect x="700" y="374" width="114" height="32" rx="16" fill="rgba(10,20,42,0.88)" stroke="rgba(167,139,250,0.48)" strokeWidth="1.1" />
                <text x="757" y="389" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Negotiation</text>
                <text x="757" y="401" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Summary</text>
              </g>

              {/* Financial Capture Analyzer */}
              <g>
                <rect x="580" y="420" width="120" height="32" rx="16" fill="rgba(10,20,42,0.88)" stroke="rgba(74,222,128,0.45)" strokeWidth="1.1" />
                <text x="640" y="435" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Savings</text>
                <text x="640" y="447" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fontWeight="600" fill="#E8EFF8">Opportunity</text>
              </g>
            </g>

            {/* DEAD CENTER PRIMARY HUB CORE */}
            <g>
              <circle cx="640" cy="345" r="36" fill="rgba(34,211,238,0.06)" stroke="rgba(255,230,0,0.28)" strokeWidth="1.5" className="ai-pulse-ring" filter="url(#aiHalo)" />
              <circle cx="640" cy="345" r="28" fill="url(#aiCore)" stroke="rgba(255,230,0,0.55)" strokeWidth="1.5" />
              <circle cx="640" cy="345" r="22" fill="rgba(8,16,30,0.9)" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
              <text x="640" y="351" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="15" fontWeight="800" fill="#FFE600">AI</text>
            </g>

            <line x1="430" y1="470" x2="850" y2="470" stroke="rgba(148,163,184,0.09)" strokeWidth="1" />

            {/* BASE PLATFORM SUB-LAYERS: LOWER ENGINE MATRIX */}
            <g>
              {/* Card 1: Context Storage Memory */}
              <g>
                <rect x="424" y="478" width="132" height="98" rx="9" fill="url(#capMemory)" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
                <g transform="translate(482,488)">
                  <path d="M0 6 C0 2 4 0 7 2 C9 0 12 2 12 6 C12 9 10 11 7 12 C4 11 0 9 0 6z" fill="none" stroke="#22D3EE" strokeWidth="1.2" />
                  <line x1="7" y1="2" x2="7" y2="12" stroke="#22D3EE" strokeWidth="0.8" strokeDasharray="1.5 2" />
                  <line x1="0" y1="6" x2="12" y2="6" stroke="#22D3EE" strokeWidth="0.8" strokeDasharray="1.5 2" />
                </g>
                <text x="490" y="512" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="700" fill="#F5F7FA">Procurement Memory</text>
                <text x="490" y="526" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#AFC0D6">Supplier, spend &amp;</text>
                <text x="490" y="538" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#AFC0D6">negotiation context</text>
                <text x="490" y="568" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="6.5" fill="rgba(34,211,238,0.5)" letterSpacing="1.2">MEMORY</text>
              </g>

              {/* Card 2: Strategy Negotiation Blocks */}
              <g>
                <rect x="568" y="478" width="132" height="98" rx="9" fill="url(#capSkill)" stroke="rgba(255,230,0,0.22)" strokeWidth="1" />
                <g transform="translate(626,488)">
                  <path d="M8 0 L2 9 h5 L4 18 L14 7 H9 Z" fill="none" stroke="#FFE600" strokeWidth="1.3" strokeLinejoin="round" />
                </g>
                <text x="634" y="512" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="700" fill="#F5F7FA">Negotiation Skills</text>
                <text x="634" y="526" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#AFC0D6">Commercial levers</text>
                <text x="634" y="538" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#AFC0D6">&amp; tactics</text>
                <text x="634" y="568" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="6.5" fill="rgba(255,230,0,0.5)" letterSpacing="1.2">SKILLS</text>
              </g>

              {/* Card 3: Enterprise Policy Protection Guardrails */}
              <g>
                <rect x="712" y="478" width="132" height="98" rx="9" fill="url(#capGuard)" stroke="rgba(167,139,250,0.25)" strokeWidth="1" />
                <g transform="translate(770,488)">
                  <path d="M6 0 L12 2.5 v5.5 C12 11.5 6 14 6 14 S0 11.5 0 8V2.5z" fill="none" stroke="#A78BFA" strokeWidth="1.2" />
                  <path d="M2.5 8 L5 10.5 L9.5 6" fill="none" stroke="#A78BFA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <text x="778" y="512" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="10" fontWeight="700" fill="#F5F7FA">Data Guardrails</text>
                <text x="778" y="526" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#AFC0D6">Grounded, masked</text>
                <text x="778" y="538" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fill="#AFC0D6">&amp; policy-aware</text>
                <text x="778" y="568" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="6.5" fill="rgba(167,139,250,0.5)" letterSpacing="1.2">GUARDRAILS</text>
              </g>
            </g>

            {/* PIPELINE CONNECTOR ARRAYS — OUTBOUND DISTRIBUTION STREAM */}
            <g>
              <path d="M875 215 C902 215 914 146 930 146" fill="none" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
              <path d="M875 255 C900 255 914 218 930 218" fill="none" stroke="rgba(167,139,250,0.27)" strokeWidth="1" />
              <path d="M875 295 C898 295 914 290 930 290" fill="none" stroke="rgba(167,139,250,0.24)" strokeWidth="1" />
              <path d="M875 335 C900 335 914 362 930 362" fill="none" stroke="rgba(167,139,250,0.24)" strokeWidth="1" />
              <path d="M875 375 C898 375 914 434 930 434" fill="none" stroke="rgba(167,139,250,0.21)" strokeWidth="1" />
              <path d="M875 415 C897 415 914 506 930 506" fill="none" stroke="rgba(167,139,250,0.18)" strokeWidth="1" />
              <path d="M875 450 C896 450 914 578 930 578" fill="none" stroke="rgba(167,139,250,0.15)" strokeWidth="1" />

              <circle cx="875" cy="215" r="2" fill="rgba(167,139,250,0.5)" />
              <circle cx="875" cy="255" r="2" fill="rgba(167,139,250,0.44)" />
              <circle cx="875" cy="295" r="2" fill="rgba(167,139,250,0.38)" />
              <circle cx="875" cy="335" r="2" fill="rgba(167,139,250,0.38)" />
              <circle cx="875" cy="375" r="2" fill="rgba(167,139,250,0.32)" />
              <circle cx="875" cy="415" r="2" fill="rgba(167,139,250,0.28)" />
              <circle cx="875" cy="450" r="2" fill="rgba(167,139,250,0.24)" />

              <circle cx="930" cy="146" r="2" fill="rgba(167,139,250,0.5)" />
              <circle cx="930" cy="218" r="2" fill="rgba(167,139,250,0.44)" />
              <circle cx="930" cy="290" r="2" fill="rgba(167,139,250,0.38)" />
              <circle cx="930" cy="362" r="2" fill="rgba(167,139,250,0.38)" />
              <circle cx="930" cy="434" r="2" fill="rgba(167,139,250,0.32)" />
              <circle cx="930" cy="506" r="2" fill="rgba(167,139,250,0.28)" />
              <circle cx="930" cy="578" r="2" fill="rgba(167,139,250,0.24)" />
            </g>

            {/* COLUMN 3: RIGHT-HAND STRATEGIC PROCUREMENT ANALYTICS DELIVERABLES */}
            <text x="1088" y="104" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="8.5" fontWeight="600" fill="#A78BFA" letterSpacing="1.4">PROCUREMENT INTELLIGENCE OUTPUTS</text>

            {/* Outbound 1: Vendor Shortlists */}
            <g>
              <rect x="930" y="114" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(34,211,238,0.24)" strokeWidth="1" />
              <rect x="930" y="114" width="3" height="64" rx="1.5" fill="#22D3EE" opacity="0.65" />
              <rect x="940" y="125" width="20" height="20" rx="10" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
              <text x="950" y="139" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#22D3EE">1</text>
              <text x="970" y="135" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Vendor Shortlists</text>
              <text x="970" y="149" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Ranked vendor options by savings, risk, PO value,</text>
              <text x="970" y="161" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">delivery terms, and commercial fit.</text>
            </g>

            {/* Outbound 2: Cost Parameter Comparisons */}
            <g>
              <rect x="930" y="186" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(96,165,250,0.22)" strokeWidth="1" />
              <rect x="930" y="186" width="3" height="64" rx="1.5" fill="#60A5FA" opacity="0.65" />
              <rect x="940" y="197" width="20" height="20" rx="10" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.38)" strokeWidth="1" />
              <text x="950" y="211" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#60A5FA">2</text>
              <text x="970" y="207" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Vendor Comparisons</text>
              <text x="970" y="221" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Side-by-side comparison of pricing, payment terms,</text>
              <text x="970" y="233" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">delivery, discounts, and risk.</text>
            </g>

            {/* Outbound 3: Live Metric Dashboards */}
            <g>
              <rect x="930" y="258" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(74,222,128,0.2)" strokeWidth="1" />
              <rect x="930" y="258" width="3" height="64" rx="1.5" fill="#4ADE80" opacity="0.65" />
              <rect x="940" y="269" width="20" height="20" rx="10" fill="rgba(74,222,128,0.11)" stroke="rgba(74,222,128,0.36)" strokeWidth="1" />
              <text x="950" y="283" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#4ADE80">3</text>
              <text x="970" y="279" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Vendor KPI Dashboard</text>
              <text x="970" y="293" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Annual spend, invoice values, avg price per unit,</text>
              <text x="970" y="305" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">discounts, and supplier metrics.</text>
            </g>

            {/* Outbound 4: Negotiation Overviews */}
            <g>
              <rect x="930" y="330" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(255,230,0,0.2)" strokeWidth="1" />
              <rect x="930" y="330" width="3" height="64" rx="1.5" fill="#FFE600" opacity="0.65" />
              <rect x="940" y="341" width="20" height="20" rx="10" fill="rgba(255,230,0,0.1)" stroke="rgba(255,230,0,0.38)" strokeWidth="1" />
              <text x="950" y="355" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#FFE600">4</text>
              <text x="970" y="351" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Overall Negotiation Summary</text>
              <text x="970" y="365" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Supplier position, key risks, savings opportunities,</text>
              <text x="970" y="377" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">and recommended talking points.</text>
            </g>

            {/* Outbound 5: Target Saving Opportunities */}
            <g>
              <rect x="930" y="402" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(45,212,191,0.2)" strokeWidth="1" />
              <rect x="930" y="402" width="3" height="64" rx="1.5" fill="#2DD4BF" opacity="0.65" />
              <rect x="940" y="413" width="20" height="20" rx="10" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.36)" strokeWidth="1" />
              <text x="950" y="427" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#2DD4BF">5</text>
              <text x="970" y="423" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Savings Opportunities</text>
              <text x="970" y="437" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Price-above-average gaps, discount leakage,</text>
              <text x="970" y="449" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">and supplier consolidation opportunities.</text>
            </g>

            {/* Outbound 6: Supplier Risk Assessment */}
            <g>
              <rect x="930" y="474" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
              <rect x="930" y="474" width="3" height="64" rx="1.5" fill="#F59E0B" opacity="0.65" />
              <rect x="940" y="485" width="20" height="20" rx="10" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.36)" strokeWidth="1" />
              <text x="950" y="499" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#F59E0B">6</text>
              <text x="970" y="495" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Risk &amp; Delivery Insights</text>
              <text x="970" y="509" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Supplier risk signals, delivery performance trends,</text>
              <text x="970" y="521" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">and reliability indicators.</text>
            </g>

            {/* Outbound 7: Multi-Role Procurement Chatbot Interface */}
            <g>
              <rect x="930" y="546" width="316" height="64" rx="8" fill="rgba(13,21,42,0.88)" stroke="rgba(167,139,250,0.22)" strokeWidth="1" />
              <rect x="930" y="546" width="3" height="64" rx="1.5" fill="#A78BFA" opacity="0.65" />
              <rect x="940" y="557" width="20" height="20" rx="10" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.38)" strokeWidth="1" />
              <text x="950" y="571" textAnchor="middle" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9" fontWeight="700" fill="#A78BFA">7</text>
              <text x="970" y="567" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#F5F7FA">Conversational Chatbot</text>
              <text x="970" y="581" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">Role-based procurement intelligence through</text>
              <text x="970" y="593" fontFamily="'Segoe UI',-apple-system,sans-serif" fontSize="9.5" fill="#AFC0D6">an interactive chatbot interface.</text>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
import "../styles/procuresense.css";

export default function ProcureSense() {
  return (
    <div className="canvas">
  {/* ══════════════════════════════════════════
     GLOBAL CONNECTOR SVG PATHS
     Left groups → center, Center → right outputs
════════════════════════════════════════════ */}
  <svg
    className="conn-svg"
    viewBox="0 0 1440 810"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* glow filter for connectors */}
      <filter id="glow-c" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="2.8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="glow-s" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation={2} result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* LEFT group A gradient: blue → transparent at center entry */}
      <linearGradient id="lg-blue-in" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0} />
        <stop offset="55%" stopColor="#3B82F6" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.12" />
      </linearGradient>
      {/* LEFT group B gradient: teal */}
      <linearGradient id="lg-teal-in" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2ECFB8" stopOpacity={0} />
        <stop offset="55%" stopColor="#2ECFB8" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#2ECFB8" stopOpacity="0.12" />
      </linearGradient>
      {/* RIGHT output gradients */}
      <linearGradient id="lg-yel-out" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFE600" stopOpacity="0.12" />
        <stop offset="45%" stopColor="#FFE600" stopOpacity="0.60" />
        <stop offset="100%" stopColor="#FFE600" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="lg-cyn-out" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
        <stop offset="45%" stopColor="#00D4FF" stopOpacity="0.60" />
        <stop offset="100%" stopColor="#00D4FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="lg-tel-out" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2ECFB8" stopOpacity="0.12" />
        <stop offset="45%" stopColor="#2ECFB8" stopOpacity="0.60" />
        <stop offset="100%" stopColor="#2ECFB8" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="lg-pur-out" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
        <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.60" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="lg-blu-out" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
        <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="lg-grn-out" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22C55E" stopOpacity="0.12" />
        <stop offset="45%" stopColor="#22C55E" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
      </linearGradient>
    </defs>
    {/* ── GROUP A: Enterprise Systems (4 rows) → convergence ~ x:340, y:218 → center entry x:352, y:340 ── */}
    {/* SAP Ariba row y≈163 */}
    <path
      d="M312 163 C332 163 338 218 340 218"
      stroke="url(#lg-blue-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".85"
    />
    {/* SAP S/4HANA row y≈189 */}
    <path
      d="M312 189 C332 189 338 218 340 218"
      stroke="url(#lg-blue-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".75"
    />
    {/* Non-SAP row y≈215 */}
    <path
      d="M312 215 C328 215 338 218 340 218"
      stroke="url(#lg-blue-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".65"
    />
    {/* Third-Party row y≈241 */}
    <path
      d="M312 241 C328 241 338 218 340 218"
      stroke="url(#lg-blue-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".55"
    />
    {/* convergence A → center card left edge at y:340 */}
    <path
      d="M340 218 C352 218 352 280 352 340"
      stroke="#3B82F6"
      strokeWidth="1.8"
      fill="none"
      filter="url(#glow-c)"
      opacity=".6"
    />
    {/* convergence dot A */}
    <circle
      cx={340}
      cy={218}
      r={4}
      fill="#3B82F6"
      opacity=".8"
      filter="url(#glow-s)"
    />
    {/* ── GROUP B: Procurement Data (7 rows) → convergence ~ x:340, y:555 → center entry x:352, y:480 ── */}
    {/* Supplier y≈415 */}
    <path
      d="M312 415 C332 415 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".85"
    />
    {/* PO & Invoice y≈441 */}
    <path
      d="M312 441 C332 441 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".8"
    />
    {/* Pricing y≈467 */}
    <path
      d="M312 467 C332 467 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".72"
    />
    {/* Contract y≈493 */}
    <path
      d="M312 493 C332 493 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".65"
    />
    {/* Delivery y≈519 */}
    <path
      d="M312 519 C328 519 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".58"
    />
    {/* External Risk y≈545 */}
    <path
      d="M312 545 C328 545 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".52"
    />
    {/* Other Relevant y≈571 */}
    <path
      d="M312 571 C328 571 338 530 340 530"
      stroke="url(#lg-teal-in)"
      strokeWidth="1.4"
      fill="none"
      filter="url(#glow-s)"
      opacity=".46"
    />
    {/* convergence B → center card left edge at y:480 */}
    <path
      d="M340 530 C352 530 352 510 352 480"
      stroke="#2ECFB8"
      strokeWidth="1.8"
      fill="none"
      filter="url(#glow-c)"
      opacity=".6"
    />
    {/* convergence dot B */}
    <circle
      cx={340}
      cy={530}
      r={4}
      fill="#2ECFB8"
      opacity=".8"
      filter="url(#glow-s)"
    />
    {/*
    RIGHT OUTPUT CONNECTORS
    Center card right edge = x:862 (left:352 + width:510)
    Output fan-out origin ~ x:862, y:415 (vertical mid of center card)
    7 output cards right section starts at x:1090
    Output card centers (right side x:1090+272/2 = 1226, irrelevant — dots just reach left edge):
Right card left edge ≈ x:1090
Card mid-y values (top:100, spacing≈88px each with 7px margin, card height≈82px):
1. y ≈ 141
2. y ≈ 230
3. y ≈ 319
4. y ≈ 408
5. y ≈ 497
6. y ≈ 586
7. y ≈ 675
  */}
    {/* 1 Vendor Shortlists — yellow */}
    <path
      d="M862 340 C940 340 1010 141 1090 141"
      stroke="url(#lg-yel-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".88"
    />
    {/* 2 Vendor Comparisons — cyan */}
    <path
      d="M862 360 C940 360 1010 230 1090 230"
      stroke="url(#lg-cyn-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".82"
    />
    {/* 3 Vendor KPI Dashboard — teal */}
    <path
      d="M862 390 C940 390 1010 319 1090 319"
      stroke="url(#lg-tel-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".78"
    />
    {/* 4 Overall Negotiation Summary — purple */}
    <path
      d="M862 415 C940 415 1010 408 1090 408"
      stroke="url(#lg-pur-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".78"
    />
    {/* 5 Savings Opportunities — green */}
    <path
      d="M862 440 C940 440 1010 497 1090 497"
      stroke="url(#lg-grn-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".74"
    />
    {/* 6 Risk & Delivery Insights — blue */}
    <path
      d="M862 460 C940 460 1010 586 1090 586"
      stroke="url(#lg-blu-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".70"
    />
    {/* 7 Conversational Chatbot — yellow */}
    <path
      d="M862 480 C940 480 1010 675 1090 675"
      stroke="url(#lg-yel-out)"
      strokeWidth="1.6"
      fill="none"
      filter="url(#glow-s)"
      opacity=".62"
    />
    {/* center output dot */}
    <circle
      cx={862}
      cy={415}
      r={5}
      fill="#FFE600"
      opacity=".55"
      filter="url(#glow-s)"
    />
  </svg>
  {/* ══════════════════════════════════════════
     TITLE / SUBTITLE
════════════════════════════════════════════ */}
  <div className="title-block">
    <h1>
      How <span className="hl">ProcureSense</span> Works
    </h1>
    <p>
      AI-powered procurement and negotiation intelligence for data-backed
      supplier decisions
    </p>
  </div>
  {/* ══════════════════════════════════════════
     LEFT SECTION
     Enterprise Systems + Procurement Data
════════════════════════════════════════════ */}
  <div className="left-section">
    {/* Group A: Enterprise Systems */}
    <div className="input-group grp-a">
      <div className="group-label">Enterprise Systems</div>
      {/* SAP Ariba */}
      <div className="src-row">
        <div className="src-icon">
          {/* SAP-style badge */}
          <span className="sap-badge">
            <span className="sap-top">SAP</span>
            <span className="sap-bot">Ariba</span>
          </span>
        </div>
        <span className="src-title">SAP Ariba</span>
        <span className="src-dot" />
      </div>
      {/* SAP S/4HANA */}
      <div className="src-row">
        <div className="src-icon">
          <span className="sap-badge">
            <span className="sap-top">SAP</span>
            <span className="sap-bot">S/4HANA</span>
          </span>
        </div>
        <span className="src-title">SAP S/4HANA</span>
        <span className="src-dot" />
      </div>
      {/* Non-SAP ERP */}
      <div className="src-row">
        <div className="src-icon">
          {/* Server stack icon */}
          <svg
            width={26}
            height={24}
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={2}
              y={3}
              width={22}
              height={6}
              rx="2.5"
              fill="rgba(59,130,246,.15)"
              stroke="#3B82F6"
              strokeWidth="1.2"
            />
            <rect
              x={2}
              y="11.5"
              width={22}
              height={6}
              rx="2.5"
              fill="rgba(59,130,246,.10)"
              stroke="#3B82F6"
              strokeWidth={1}
              opacity=".7"
            />
            <circle cx={20} cy={6} r="1.5" fill="#3B82F6" opacity=".8" />
            <circle cx={20} cy="14.5" r="1.5" fill="#3B82F6" opacity=".55" />
          </svg>
        </div>
        <span className="src-title">Non-SAP ERP Systems</span>
        <span className="src-dot" />
      </div>
      {/* Third-Party Tool */}
      <div className="src-row">
        <div className="src-icon">
          {/* Plug/connector icon */}
          <svg
            width={26}
            height={24}
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={8}
              y={3}
              width={10}
              height={14}
              rx={3}
              fill="rgba(59,130,246,.12)"
              stroke="#3B82F6"
              strokeWidth="1.2"
            />
            <line
              x1={10}
              y1={17}
              x2={10}
              y2={21}
              stroke="#3B82F6"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1={16}
              y1={17}
              x2={16}
              y2={21}
              stroke="#3B82F6"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1={10}
              y1={7}
              x2={10}
              y2={3}
              stroke="#3B82F6"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <line
              x1={16}
              y1={7}
              x2={16}
              y2={3}
              stroke="#3B82F6"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="src-title">Third-Party Tool</span>
        <span className="src-dot" />
      </div>
    </div>
    {/* /grp-a */}
    {/* Group B: Procurement Data */}
    <div className="input-group grp-b" style={{ marginTop: 12 }}>
      <div className="group-label">Procurement Data</div>
      {/* Supplier Master Data */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <circle
              cx={13}
              cy={8}
              r={4}
              stroke="#2ECFB8"
              strokeWidth="1.3"
              fill="rgba(46,207,184,.12)"
            />
            <path
              d="M5 20c0-4 4-6 8-6s8 2 8 6"
              stroke="#2ECFB8"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <span className="src-title">Supplier Master Data</span>
        <span className="src-dot" />
      </div>
      {/* PO & Invoice Data */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <rect
              x={5}
              y={3}
              width={16}
              height={18}
              rx="2.5"
              fill="rgba(46,207,184,.1)"
              stroke="#2ECFB8"
              strokeWidth="1.3"
            />
            <line
              x1={9}
              y1={9}
              x2={17}
              y2={9}
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1={9}
              y1={13}
              x2={17}
              y2={13}
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1={9}
              y1={17}
              x2={13}
              y2={17}
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="src-title">PO &amp; Invoice Data</span>
        <span className="src-dot" />
      </div>
      {/* Pricing & Discount History */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <polyline
              points="4,18 9,11 13,14 18,7 22,10"
              stroke="#2ECFB8"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle
              cx={22}
              cy={10}
              r={2}
              fill="rgba(46,207,184,.2)"
              stroke="#2ECFB8"
              strokeWidth={1}
            />
          </svg>
        </div>
        <span className="src-title">Pricing &amp; Discount History</span>
        <span className="src-dot" />
      </div>
      {/* Contract & Payment Terms */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <path
              d="M7 3h12l2 3v15a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"
              fill="rgba(46,207,184,.1)"
              stroke="#2ECFB8"
              strokeWidth="1.3"
            />
            <path
              d="M10 10h6M10 14h4"
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M15 3v4h4"
              stroke="#2ECFB8"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <span className="src-title">Contract &amp; Payment Terms</span>
        <span className="src-dot" />
      </div>
      {/* Delivery Performance Data */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <rect
              x={2}
              y={9}
              width={14}
              height={9}
              rx={2}
              fill="rgba(46,207,184,.1)"
              stroke="#2ECFB8"
              strokeWidth="1.3"
            />
            <path
              d="M16 12h4l3 4v2h-7z"
              fill="rgba(46,207,184,.15)"
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <circle
              cx={7}
              cy={20}
              r={2}
              fill="rgba(46,207,184,.2)"
              stroke="#2ECFB8"
              strokeWidth="1.1"
            />
            <circle
              cx={20}
              cy={20}
              r={2}
              fill="rgba(46,207,184,.2)"
              stroke="#2ECFB8"
              strokeWidth="1.1"
            />
          </svg>
        </div>
        <span className="src-title">Delivery Performance Data</span>
        <span className="src-dot" />
      </div>
      {/* External Risk / Market Data */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <path
              d="M13 3l8 4.5v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7.5z"
              fill="rgba(46,207,184,.1)"
              stroke="#2ECFB8"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <line
              x1={13}
              y1={9}
              x2={13}
              y2={13}
              stroke="#2ECFB8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx={13} cy={16} r={1} fill="#2ECFB8" />
          </svg>
        </div>
        <span className="src-title">External Risk / Market Data</span>
        <span className="src-dot" />
      </div>
      {/* Other Relevant Data (NEW) */}
      <div className="src-row">
        <div className="src-icon">
          <svg width={26} height={24} viewBox="0 0 26 24" fill="none">
            <ellipse
              cx={13}
              cy={12}
              rx={8}
              ry={5}
              fill="rgba(46,207,184,.1)"
              stroke="#2ECFB8"
              strokeWidth="1.3"
            />
            <line
              x1={5}
              y1={12}
              x2={5}
              y2={17}
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1={21}
              y1={12}
              x2={21}
              y2={17}
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M5 17c0 2.8 3.6 5 8 5s8-2.2 8-5"
              stroke="#2ECFB8"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <span className="src-title">Other Relevant Data</span>
        <span className="src-dot" />
      </div>
    </div>
    {/* /grp-b */}
  </div>
  {/* /left-section */}
  {/* ══════════════════════════════════════════
     CENTER CARD — ProcureSense AI
════════════════════════════════════════════ */}
  <div className="center-card">
    {/* Header pill */}
    <div className="center-pill">ProcureSense AI</div>
    <div className="center-sub">Procurement Intelligence Agent</div>
    {/* Crew label */}
    <div className="crew-label">Procurement Agent Crew</div>
    {/* ── Agent orbit cluster (no connector lines) ── */}
    <div className="orbit-wrap">
      {/* Orbit rings (visual only, suggest connectivity) */}
      <div className="orbit-ring" />
      <div className="orbit-ring-inner" />
      {/* Central AI node */}
      <div className="ai-node">
        <span className="ai-label">AI</span>
        <span className="ai-sub">ProcureSense</span>
      </div>
      {/*
Six agent nodes in balanced orbit (no lines)
Positions calculated at orbit radius ~120px around center (180,155)
    */}
      {/* Upper-left: Vendor Shortlisting */}
      <div className="agent-node c-cyan an-ul">
        Vendor
        <br />
        Shortlisting
      </div>
      {/* Top-center: Vendor Comparison */}
      <div className="agent-node c-teal an-tc">
        Vendor
        <br />
        Comparison
      </div>
      {/* Upper-right: KPI Insights */}
      <div className="agent-node c-purple an-ur">
        KPI
        <br />
        Insights
      </div>
      {/* Right: Negotiation Summary */}
      <div className="agent-node c-blue an-rc">
        Negotiation
        <br />
        Summary
      </div>
      {/* Lower-right: Savings Opportunity */}
      <div className="agent-node c-green an-br">
        Savings
        <br />
        Opportunity
      </div>
      {/* Lower-left: Risk & Delivery */}
      <div className="agent-node c-yellow an-bl">
        Risk &amp;
        <br />
        Delivery
      </div>
    </div>
    {/* /orbit-wrap */}
    {/* Bottom capability tiles */}
    <div className="cap-tiles">
      <div className="cap-tile">
        <span className="cap-tile-icon">🧠</span>
        <div className="cap-tile-name">Procurement Memory</div>
        <div className="cap-tile-desc">
          Supplier, spend &amp; negotiation context
        </div>
      </div>
      <div className="cap-tile">
        <span className="cap-tile-icon">⚡</span>
        <div className="cap-tile-name">Negotiation Skills</div>
        <div className="cap-tile-desc">Commercial levers &amp; tactics</div>
      </div>
      <div className="cap-tile">
        <span className="cap-tile-icon">🛡️</span>
        <div className="cap-tile-name">Data Guardrails</div>
        <div className="cap-tile-desc">Grounded, masked &amp; policy-aware</div>
      </div>
    </div>
  </div>
  {/* /center-card */}
  {/* ══════════════════════════════════════════
     RIGHT SECTION — Procurement Intelligence Outputs
     7 output cards
════════════════════════════════════════════ */}
  <div className="right-section">
    <div className="right-label">Procurement Intelligence Outputs</div>
    {/* 1. Vendor Shortlists */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--yellow)", color: "var(--yellow)" }}
      />
      <div>
        <div className="out-title">Vendor Shortlists</div>
        <div className="out-desc">
          Ranked vendors based on savings, risk, PO value, delivery terms, and
          commercial fit.
        </div>
      </div>
    </div>
    {/* 2. Vendor Comparisons */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--cyan)", color: "var(--cyan)" }}
      />
      <div>
        <div className="out-title">Vendor Comparisons</div>
        <div className="out-desc">
          Side-by-side comparison of pricing, payment terms, delivery,
          discounts, and risk.
        </div>
      </div>
    </div>
    {/* 3. Vendor KPI Dashboard */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--teal)", color: "var(--teal)" }}
      />
      <div>
        <div className="out-title">Vendor KPI Dashboard</div>
        <div className="out-desc">
          Annual spend, invoice values, average price per unit, discounts, and
          supplier metrics.
        </div>
      </div>
    </div>
    {/* 4. Overall Negotiation Summary */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--purple)", color: "var(--purple)" }}
      />
      <div>
        <div className="out-title">Overall Negotiation Summary</div>
        <div className="out-desc">
          Summarized negotiation position, supplier context, key risks, savings
          opportunities, and recommended talking points.
        </div>
      </div>
    </div>
    {/* 5. Savings Opportunities */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--green)", color: "var(--green)" }}
      />
      <div>
        <div className="out-title">Savings Opportunities</div>
        <div className="out-desc">
          Price-above-average gaps, discount leakage, and supplier consolidation
          opportunities.
        </div>
      </div>
    </div>
    {/* 6. Risk & Delivery Insights */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--blue)", color: "var(--blue)" }}
      />
      <div>
        <div className="out-title">Risk &amp; Delivery Insights</div>
        <div className="out-desc">
          Supplier risk signals, delivery performance trends, and reliability
          indicators.
        </div>
      </div>
    </div>
    {/* 7. Conversational Chatbot */}
    <div className="out-card">
      <div
        className="out-dot"
        style={{ background: "var(--yellow)", color: "var(--yellow)" }}
      />
      <div>
        <div className="out-title">Conversational Chatbot</div>
        <div className="out-desc">
          Role-based procurement intelligence through an interactive chatbot.
        </div>
      </div>
    </div>
  </div>
  {/* /right-section */}
</div>
  );
}
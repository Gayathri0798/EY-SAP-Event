import React, { useEffect, useRef, useState, useCallback } from "react";
import "../styles/pricewise.css";
import {
  BadgeDollarSign,
  ShieldAlert,
  BarChart3,
  TrendingUp,
  ClipboardCheck,
  Coins,
  LineChart,
} from "lucide-react";

/* ─── DATA ─── */
const INPUTS = [
  { id:"in-0", label:"SAP S4/HANA",         icon:"💾", color:"#0EA5E9", targets:["Sales","Financials"]          },
  { id:"in-1", label:"SAP ARIBA",            icon:"📄", color:"#A855F7", targets:["Supply Chain","Operations"]   },
  { id:"in-2", label:"OTHER ERP SYSTEM",     icon:"🔗", color:"#10B981", targets:["Financials","Strategy"]       },
  { id:"in-3", label:"CRM SYSTEM",           icon:"👥", color:"#EC4899", targets:["Customer","Sales"]            },
  { id:"in-4", label:"POLICY & COMPLIANCE",  icon:"⚖️",  color:"#F43F5E", targets:["Operations","Strategy"]      },
  { id:"in-5", label:"MARKET DATA STREAM",   icon:"📈", color:"#F59E0B", targets:["Supply Chain","Customer"]     },
  { id:"in-6", label:"INVENTORY LOGS",       icon:"📦", color:"#06B6D4", targets:["Operations","Financials"]     },
];

const OUTPUTS = [
  {
    id: "out-0",
    label: "PRICING RECOMMENDATION",
    icon: BadgeDollarSign,
    abbr: "PR",
    color: "#0EA5E9",
    bg: "#0369a1",
    targets: ["Sales", "Financials"],
    explain:
      "Compiles commercial transactional pricing recommendations based on SKU costing ledgers and account histories.",
  },
  {
    id: "out-1",
    label: "DEAL RISK ASSESSMENT",
    icon: ShieldAlert,
    abbr: "DR",
    color: "#F43F5E",
    bg: "#be123c",
    targets: ["Operations", "Strategy"],
    explain:
      "Assesses contract compliance exposure flags and legal compliance rules to run diagnostic deal checks.",
  },
  {
    id: "out-2",
    label: "MARGIN ANALYSIS",
    icon: BarChart3,
    abbr: "MA",
    color: "#A855F7",
    bg: "#7e22ce",
    targets: ["Financials", "Strategy"],
    explain:
      "Evaluates gross margin thresholds across manufacturing and assembly units to track resource costs.",
  },
  {
    id: "out-3",
    label: "FORECAST",
    icon: TrendingUp,
    abbr: "FC",
    color: "#10B981",
    bg: "#065f46",
    targets: ["Sales", "Operations"],
    explain:
      "Generates predictive customer demand parameters by correlating system backlog metrics with sales velocities.",
  },
  {
    id: "out-4",
    label: "COMPLIANCE",
    icon: ClipboardCheck,
    abbr: "CO",
    color: "#94A3B8",
    bg: "#475569",
    targets: ["Financials", "Operations"],
    explain:
      "Runs automated rule checking loops to confirm procurement and regulatory framework alignments.",
  },
  {
    id: "out-5",
    label: "REVENUE OPTIMIZATION",
    icon: Coins,
    abbr: "RO",
    color: "#F59E0B",
    bg: "#92400e",
    targets: ["Sales", "Financials", "Strategy"],
    explain:
      "Pinpoints market arbitrage configurations and rate adjustments by processing commodity streams.",
  },
  {
    id: "out-6",
    label: "SEGMENT TRENDS",
    icon: LineChart,
    abbr: "ST",
    color: "#EC4899",
    bg: "#9d174d",
    targets: ["Customer", "Sales"],
    explain:
      "Identifies dynamic cyclical shift factors across consumer accounts using account history inputs.",
  },
];

/*
  Honeycomb layout — exact pixel positions matching the HTML reference:
  wrap: 420 × 360px,  each hex: 140 × 120px

  Center:        top:118  left:140
  Customer:      top: -5  left:140   (top-center)
  Financials:    top:238  left:140   (bottom-center)
  Strategy:      top: 57  left: 34   (upper-left)
  Operations:    top:177  left: 34   (lower-left)
  Sales:         top: 57  left:245   (upper-right)
  Supply Chain:  top:177  left:245   (lower-right)
*/
const NODES = [
  { label:"Customer",    color:"#EC4899", bg:"rgba(236,72,153,0.35)", icon:"👤", style:{ top: -5,  left:140 } },
  { label:"Strategy",    color:"#0EA5E9", bg:"rgba(14,165,233,0.35)", icon:"🧭", style:{ top: 57,  left: 34 } },
  { label:"Sales",       color:"#F43F5E", bg:"rgba(244,63,94,0.35)",  icon:"📊", style:{ top: 57,  left:245 } },
  { label:"Operations",  color:"#A855F7", bg:"rgba(168,85,247,0.35)", icon:"⚙️",  style:{ top:177,  left: 34 } },
  { label:"Supply Chain",color:"#F59E0B", bg:"rgba(245,158,11,0.35)", icon:"🚚", style:{ top:177,  left:245 } },
  { label:"Financials",  color:"#10B981", bg:"rgba(16,185,129,0.35)", icon:"💰", style:{ top:238,  left:140 } },
];

const SCENARIOS = [
  { title:"SAP S4/HANA",           inText:"Streaming historical transactional ledgers, actual material margins, and corporate billing profiles.",                outText:"Calculating base margin caps to update PRICING RECOMMENDATIONS and REVENUE OPTIMIZATION matrices." },
  { title:"SAP ARIBA",             inText:"Extracting wholesale procurement agreements, vendor sourcing profiles, and logistics contract tables.",               outText:"Evaluating contract coverage parameters inside Supply Chain nodes to mitigate raw index variances." },
  { title:"OTHER ERP SYSTEM",      inText:"Pulling immediate facility asset capacities, assembly line speeds, and material stocks.",                             outText:"Executing pipeline constraint simulations to inform MARGIN ANALYSIS and COMPLIANCE metrics logs." },
  { title:"CRM SYSTEM",            inText:"Capturing customer account pipeline health indexes and historical contract cycle speeds.",                            outText:"Injecting interaction variables into SEGMENT TRENDS and PRICING RECOMMENDATIONS to adjust regional rates." },
  { title:"POLICY & COMPLIANCE",   inText:"Ingesting regulatory policy books, framework rules, and compliance parameter files.",                                outText:"Running background auditing filters across COMPLIANCE and DEAL RISK ASSESSMENT nodes to flag exposure rules." },
  { title:"MARKET DATA STREAM",    inText:"Tracking external index commodity pricing cycles, competitive quotes, and cargo freight parameters.",                outText:"Identifying immediate spot pricing arbitrage sweet-spots across REVENUE OPTIMIZATION assets." },
  { title:"INVENTORY LOGS",        inText:"Parsing localized stock adjustments, warehouse turnaround delays, and procurement queues.",                          outText:"Feeding data into FORECAST and MARGIN ANALYSIS arrays to ensure manufacturing layout protection." },
];

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
export default function PriceWiseWorks() {
  const [activeInput,  setActiveInput]  = useState(null);
  const [activeOutput, setActiveOutput] = useState(null);
  const [activeNodes,  setActiveNodes]  = useState([]);
  const [infoText,     setInfoText]     = useState({
    input:  "Initializing system streams…",
    output: "Awaiting core inference cascade cycles…",
  });
  const [lines, setLines] = useState([]);
  const [simIdx, setSimIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const svgRef      = useRef(null);
  const engineRef   = useRef(null);
  const inputRefs   = useRef({});
  const outputRefs  = useRef({});
  const timerRef    = useRef(null);
  const hoveringRef = useRef(false);

  /* ── pre-create refs ── */
  useEffect(() => {
    INPUTS.forEach(i  => { if (!inputRefs.current[i.id])  inputRefs.current[i.id]  = React.createRef(); });
    OUTPUTS.forEach(o => { if (!outputRefs.current[o.id]) outputRefs.current[o.id] = React.createRef(); });
  }, []);

  /* ── compute wire lines ── */
  const computeLines = useCallback(() => {
    if (!svgRef.current || !engineRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const engRect = engineRef.current.getBoundingClientRect();
    const cx = engRect.left + engRect.width  / 2 - svgRect.left;
    const cy = engRect.top  + engRect.height / 2 - svgRect.top;
    const newLines = [];

    INPUTS.forEach(inp => {
      const el = inputRefs.current[inp.id];
      if (!el) return;
      const r = el.getBoundingClientRect();
      newLines.push({ id:inp.id, x1:r.right - svgRect.left, y1:r.top + r.height/2 - svgRect.top, x2:cx, y2:cy, color:inp.color, kind:"input" });
    });
    OUTPUTS.forEach(out => {
      const el = outputRefs.current[out.id];
      if (!el) return;
      const r = el.getBoundingClientRect();
      newLines.push({ id:out.id, x1:cx, y1:cy, x2:r.left - svgRect.left, y2:r.top + r.height/2 - svgRect.top, color:out.color, kind:"output" });
    });
    setLines(newLines);
  }, []);

  useEffect(() => {
    const timer = setTimeout(computeLines, 100);
    window.addEventListener("resize", computeLines);
    return () => { clearTimeout(timer); window.removeEventListener("resize", computeLines); };
  }, [computeLines]);

  /* ── apply scenario ── */
  const applySim = useCallback((idx) => {
    const inp = INPUTS[idx];
    const sc  = SCENARIOS[idx];
    setActiveInput(inp.id);
    setActiveOutput(null);
    setActiveNodes(inp.targets);
    setInfoText({
      input:  `<strong>${sc.title}</strong> maps context parameters into <strong>${inp.targets.join(" & ")}</strong> core nodes. ${sc.inText}`,
      output: `Processing real-time inference matrices to trigger <strong>${sc.outText}</strong>`,
    });
  }, []);

  /* ── auto sim ── */
  useEffect(() => {
    const timer = setTimeout(() => applySim(0), 0);
    return () => clearTimeout(timer);
  }, [applySim]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      if (hoveringRef.current) return;
      setSimIdx(prev => {
        const next = (prev + 1) % INPUTS.length;
        applySim(next);
        return next;
      });
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused, applySim]);

  /* ── hover ── */
  const onInputEnter = inp => {
    hoveringRef.current = true;
    clearInterval(timerRef.current);
    const idx = INPUTS.indexOf(inp);
    const sc  = SCENARIOS[idx];
    setActiveInput(inp.id); setActiveOutput(null); setActiveNodes(inp.targets);
    setInfoText({
      input:  `<strong>${sc.title}</strong> maps context parameters into <strong>${inp.targets.join(" & ")}</strong> core nodes. ${sc.inText}`,
      output: `Processing real-time inference matrices to trigger <strong>${sc.outText}</strong>`,
    });
  };
  const onInputLeave = () => {
    hoveringRef.current = false;
    if (!paused) timerRef.current = setInterval(() => {
      if (hoveringRef.current) return;
      setSimIdx(p => { const n=(p+1)%INPUTS.length; applySim(n); return n; });
    }, 4500);
  };
  const onOutputEnter = out => {
    hoveringRef.current = true;
    clearInterval(timerRef.current);
    const contributing = INPUTS.filter(i => i.targets.some(t => out.targets.includes(t))).map(i => i.label);
    setActiveOutput(out.id); setActiveInput(null); setActiveNodes(out.targets);
    setInfoText({
      input:  `<strong>${out.label}</strong> calculations are formulated by evaluating primary <strong>${contributing.join(", ")}</strong> datasets.`,
      output: `<strong>Business Outcome Logic:</strong> ${out.explain}`,
    });
  };
  const onOutputLeave = () => {
    hoveringRef.current = false;
    if (!paused) timerRef.current = setInterval(() => {
      if (hoveringRef.current) return;
      setSimIdx(p => { const n=(p+1)%INPUTS.length; applySim(n); return n; });
    }, 4500);
  };

  /* ── wire opacity ── */
  const wireOp = line => {
    if (!activeInput && !activeOutput) return 0.16;
    if (activeInput) {
      const inp = INPUTS.find(i => i.id === activeInput);
      if (!inp) return 0.04;
      if (line.id === activeInput) return 1;
      if (line.kind === "output") {
        const out = OUTPUTS.find(o => o.id === line.id);
        if (out?.targets.some(t => inp.targets.includes(t))) return 0.85;
      }
      return 0.04;
    }
    if (activeOutput) {
      const out = OUTPUTS.find(o => o.id === activeOutput);
      if (!out) return 0.04;
      if (line.id === activeOutput) return 1;
      if (line.kind === "input") {
        const inp = INPUTS.find(i => i.id === line.id);
        if (inp?.targets.some(t => out.targets.includes(t))) return 0.85;
      }
      return 0.04;
    }
    return 0.16;
  };

  const isInputActive  = id => activeInput === id || (activeOutput && OUTPUTS.find(o=>o.id===activeOutput)?.targets.some(t=>INPUTS.find(i=>i.id===id)?.targets.includes(t)));
  const isOutputActive = id => activeOutput === id || (activeInput && INPUTS.find(i=>i.id===activeInput)?.targets.some(t=>OUTPUTS.find(o=>o.id===id)?.targets.includes(t)));

  return (
    <div className="pw-works">

      {/* ══ SVG WIRE LAYER ══ */}
      <svg ref={svgRef} className="pw-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="superglow">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="rainbow-grad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#0EA5E9"/>
            <stop offset="25%"  stopColor="#A855F7"/>
            <stop offset="50%"  stopColor="#EC4899"/>
            <stop offset="75%"  stopColor="#F59E0B"/>
            <stop offset="100%" stopColor="#10B981"/>
          </linearGradient>
        </defs>

        {/* wires */}
        {lines.map(line => {
          const op = wireOp(line);
          const isActive = op > 0.5;
          const mx = (line.x1 + line.x2) / 2;
          const path = `M ${line.x1},${line.y1} C ${mx},${line.y1} ${mx},${line.y2} ${line.x2},${line.y2}`;
          return (
            <g key={line.id} style={{ opacity: op, transition: "opacity 0.4s ease" }}>
              {/* base static wire */}
              <path d={path} stroke={line.color} strokeWidth="1.2" fill="none" opacity="0.45"/>
              {/* animated pulse on active */}
              {isActive && (
                <path d={path} stroke={line.color} strokeWidth="2" fill="none"
                  strokeDasharray="45,180"
                  filter="url(#glow)"
                  style={{ animation:"flow 3s linear infinite" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* ══ LEFT: Input Ecosystem ══ */}
      <div className="pw-col pw-col-left">
        <div className="pw-col-header">
          <h2>Input Ecosystem</h2>
          <div className="pw-header-line"/>
        </div>
        <div className="pw-cards">
          {INPUTS.map(inp => (
            <div key={inp.id} ref={el => inputRefs.current[inp.id] = el}
              className={`pw-input-card pw-glass ${isInputActive(inp.id) ? "pw-card-active" : ""}`}
              style={{ borderLeftColor: inp.color }}
              onMouseEnter={() => onInputEnter(inp)}
              onMouseLeave={onInputLeave}
            >
              <span className="pw-card-icon">{inp.icon}</span>
              <span className="pw-card-label">{inp.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ CENTER: Engine + Ticker ══ */}
      <div className="pw-col pw-col-center">

        {/* Honeycomb engine */}
        <div className="pw-engine-wrap" ref={engineRef}>

          {/* Rainbow perimeter ring SVG */}
          <svg className="pw-ring-svg" viewBox="0 0 500 440" xmlns="http://www.w3.org/2000/svg" style={{pointerEvents:"none"}}>
            <defs>
              <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#0EA5E9"/>
                <stop offset="20%"  stopColor="#A855F7"/>
                <stop offset="40%"  stopColor="#EC4899"/>
                <stop offset="60%"  stopColor="#F59E0B"/>
                <stop offset="80%"  stopColor="#10B981"/>
                <stop offset="100%" stopColor="#0EA5E9"/>
              </linearGradient>
            </defs>
            <circle
              cx="250" cy="220" r="190"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="2"
              strokeDasharray="30,10"
              opacity="0.55"
              style={{ animation:"rainbow-rotate 12s linear infinite" }}
            />
            <circle
              cx="250" cy="220" r="190"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="1"
              opacity="0.2"
            />
          </svg>

          {/* ── CENTER: Pricing Engine ── */}
          <div className="pw-hex pw-hex-center" style={{ width:140, height:120, top:118, left:140 }}>
            {/* gold gradient shell */}
            <div className="hex-clip pw-hex-center-shell" style={{position:"absolute",inset:0}}>
              <div className="hex-clip pw-hex-center-inner">
                <div className="pw-scanner"/>
              </div>
            </div>
            <div className="pw-hex-content">
              <span className="pw-hex-main-icon">🧠</span>
              <span className="pw-hex-main-title">Pricing Engine</span>
            </div>
          </div>

          {/* ── SATELLITE NODES ── */}
          {NODES.map(node => {
            const active = activeNodes.includes(node.label);
            return (
              <div key={node.label}
                className={`pw-hex pw-hex-node ${active ? "pw-hex-node-active" : ""}`}
                style={{ width:140, height:120, position:"absolute", "--node-color": node.color, ...node.style }}
              >
                {/* colored shell */}
                <div className="hex-clip pw-hex-node-shell"
                  style={{ position:"absolute", inset:0, background: node.bg }}>
                  <div className="hex-clip pw-hex-node-inner">
                    <div className="pw-scanner"/>
                  </div>
                </div>
                <div className="pw-hex-content">
                  <span className="pw-hex-node-icon">{node.icon}</span>
                  <span className="pw-hex-node-label">{node.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info ticker */}
        <div className="pw-ticker">
          <div className="pw-ticker-header">
            <span className="pw-ticker-ping"/>
            <span className="pw-ticker-tag">Pipeline Context Engine</span>
          </div>
          <div className="pw-ticker-body">
            <div className="pw-ticker-col">
              <div className="pw-ticker-col-label">Ingested Context Stream</div>
              <p dangerouslySetInnerHTML={{ __html: infoText.input }}/>
            </div>
            <div className="pw-ticker-divider"/>
            <div className="pw-ticker-col">
              <div className="pw-ticker-col-label">Generated Insight Deliverable</div>
              <p dangerouslySetInnerHTML={{ __html: infoText.output }}/>
            </div>
          </div>
        </div>
      </div>

      {/* ══ RIGHT: Generated Insights ══ */}
      <div className="pw-col pw-col-right">
        <div className="pw-col-header pw-col-header-right">
          <h2>Generated Insights</h2>
          <div className="pw-header-line pw-header-line-right"/>
        </div>
        <div className="pw-cards pw-cards-right">
          {OUTPUTS.map((out) => {
            const IconComponent = out.icon;
            return (
              <div
                key={out.id}
                ref={(el) => { outputRefs.current[out.id] = el; }}
                className={`pw-output-card pw-glass ${isOutputActive(out.id) ? "pw-card-active" : ""}`}
                style={{ borderRightColor: out.color }}
                onMouseEnter={() => onOutputEnter(out)}
                onMouseLeave={onOutputLeave}
              >
                <span className="pw-card-label">{out.label}</span>
                <span className="pw-card-icon">
                  <IconComponent size={20} color={out.color} strokeWidth={2} />
                </span>
              </div>
            );
          })}
        </div>
 
      </div>

    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';

const PIPELINE_SCENARIOS = [
  { id: "in-0", title: "SAP S4/HANA", targets: ["Sales", "Financials"], color: "#0EA5E9", inText: "Streaming historical transactional ledgers, actual material margins, and corporate billing profiles.", outText: "Calculating base margin caps to update PRICING RECOMMENDATIONS and REVENUE OPTIMIZATION matrices." },
  { id: "in-1", title: "SAP ARIBA", targets: ["Supply Chain", "Operations"], color: "#A855F7", inText: "Extracting wholesale procurement agreements, vendor sourcing profiles, and logistics contract tables.", outText: "Evaluating contract coverage parameters inside Supply Chain nodes to mitigate raw index variances." },
  { id: "in-2", title: "OTHER ERP SYSTEM", targets: ["Financials", "Strategy"], color: "#10B981", inText: "Pulling immediate facility asset capacities, assembly line speeds, and material stocks.", outText: "Executing pipeline constraint simulations to inform MARGIN ANALYSIS and COMPLIANCE metrics logs." },
  { id: "in-3", title: "CRM SYSTEM", targets: ["Customer", "Sales"], color: "#EC4899", inText: "Capturing customer account pipeline health indexes and historical contract cycle speeds.", outText: "Injecting interaction variables into SEGMENT TRENDS and PRICING RECOMMENDATIONS to adjust regional rates." },
  { id: "in-4", title: "POLICY & COMPLIANCE", targets: ["Operations", "Strategy"], color: "#F43F5E", inText: "Ingesting regulatory policy books, framework rules, and compliance parameter files.", outText: "Running background auditing filters across COMPLIANCE and DEAL RISK ASSESSMENT nodes to flag exposure rules." },
  { id: "in-5", title: "MARKET DATA STREAM", targets: ["Supply Chain", "Customer"], color: "#F59E0B", inText: "Tracking external index commodity pricing cycles, competitive quotes, and cargo freight parameters.", outText: "Identifying immediate spot pricing arbitrage sweet-spots across REVENUE OPTIMIZATION assets." },
  { id: "in-6", title: "INVENTORY LOGS", targets: ["Operations", "Financials"], color: "#06B6D4", inText: "Parsing localized stock adjustments, warehouse turnaround delays, and procurement queues.", outText: "Feeding data into FORECAST and MARGIN ANALYSIS arrays to ensure manufacturing layout protection." }
];

const OUTPUT_CARDS = [
  { id: "out-0", targets: ["Sales", "Financials"], color: "#0EA5E9", label: "PRICING RECOMMENDATION", explain: "Compiles commercial transactional pricing recommendations based on SKU costing ledgers and account histories." },
  { id: "out-1", targets: ["Operations", "Strategy"], color: "#F43F5E", label: "DEAL RISK ASSESSMENT", explain: "Assesses contract compliance exposure flags and legal compliance rules to run diagnostic deal checks." },
  { id: "out-2", targets: ["Financials", "Strategy"], color: "#A855F7", label: "MARGIN ANALYSIS", explain: "Evaluates gross margin thresholds across manufacturing and assembly units to track resource costs." },
  { id: "out-3", targets: ["Sales", "Operations"], color: "#10B981", label: "FORECAST", explain: "Generates predictive customer demand parameters by correlating system backlog metrics with sales velocities." },
  { id: "out-4", targets: ["Financials", "Operations"], color: "#94A3B8", label: "COMPLIANCE", explain: "Runs automated rule checking loops to confirm procurement and regulatory framework alignments." },
  { id: "out-5", targets: ["Sales", "Financials", "Strategy"], color: "#F59E0B", label: "REVENUE OPTIMIZATION", explain: "Pinpoints market arbitrage configurations and rate adjustments by processing commodity streams." },
  { id: "out-6", targets: ["Customer", "Sales"], color: "#EC4899", label: "SEGMENT TRENDS", explain: "Identifies dynamic cyclical shift factors across consumer accounts using account history inputs." }
];

const ENGINE_SUB_BLOCKS = [
  { id: "sb-1", label: "Customer", color: "#EC4899", icon: "group", styleClass: "t-1", top: "-5px", left: "140px" },
  { id: "sb-2", label: "Financials", color: "#10B981", icon: "account_balance_wallet", styleClass: "t-2", top: "235px", left: "140px" },
  { id: "sb-3", label: "Strategy", color: "#0EA5E9", icon: "explore", styleClass: "t-3", top: "55px", left: "35px" },
  { id: "sb-4", label: "Operations", color: "#A855F7", icon: "settings_applications", styleClass: "t-4", top: "175px", left: "35px" },
  { id: "sb-5", label: "Sales", color: "#F43F5E", icon: "stacked_line_chart", styleClass: "t-5", top: "55px", left: "245px" },
  { id: "sb-6", label: "Supply Chain", color: "#F59E0B", icon: "local_shipping", styleClass: "t-6", top: "175px", left: "245px" }
];

export default function DataArchitecturePipeline() {
  const [simulationIndex, setSimulationIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const pipelineSvgRef = useRef(null);
  const wiresGroupRef = useRef(null);
  const spokesGroupRef = useRef(null);
  const perimeterRingRef = useRef(null);
  const rfqLineRef = useRef(null);
  const rfqNodeRef = useRef(null);
  const centerTriggerRef = useRef(null);
  const elementsRef = useRef({});

  const isUserHovering = hoveredItem !== null;
  const activeId = isUserHovering ? hoveredItem.id : (!isPaused ? `in-${simulationIndex}` : null);
  const isActiveInput = isUserHovering ? hoveredItem.type === 'input' : true;

  let currentActiveTargets = [];
  let currentActiveColor = '#ffffff';
  let inputExplanation = "Initializing system streams...";
  let outputExplanation = "Awaiting core inference cascade cycles...";

  if (activeId) {
    if (isActiveInput) {
      const matchedInput = PIPELINE_SCENARIOS.find(s => s.id === activeId);
      if (matchedInput) {
        currentActiveTargets = matchedInput.targets;
        currentActiveColor = matchedInput.color;
        inputExplanation = `<strong>${matchedInput.title}</strong> maps context parameters into <strong>${currentActiveTargets.join(' & ')}</strong> core nodes. ${matchedInput.inText}`;
        outputExplanation = `Processing real-time inference matrices to trigger <strong>${matchedInput.outText}</strong>`;
      }
    } else {
      const matchedOutput = OUTPUT_CARDS.find(o => o.id === activeId);
      if (matchedOutput) {
        currentActiveTargets = matchedOutput.targets;
        currentActiveColor = matchedOutput.color;
        const contributingInputs = PIPELINE_SCENARIOS
          .filter(inCard => inCard.targets.some(t => currentActiveTargets.includes(t)))
          .map(inCard => inCard.title);
        inputExplanation = `<strong>${matchedOutput.label}</strong> calculations are formulated by evaluating primary <strong>${contributingInputs.join(', ')}</strong> datasets.`;
        outputExplanation = `<strong>Business Outcome Logic:</strong> ${matchedOutput.explain}`;
      }
    }
  }

  useEffect(() => {
    if (isPaused || isUserHovering) return;
    const interval = setInterval(() => {
      setSimulationIndex((prev) => (prev + 1) % PIPELINE_SCENARIOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, isUserHovering]);

  const updatePipelineLayout = () => {
    const svg = pipelineSvgRef.current;
    const svgGroup = wiresGroupRef.current;
    const spokesGroup = spokesGroupRef.current;
    const ring = perimeterRingRef.current;
    const rfqLine = rfqLineRef.current;
    const rfqNode = rfqNodeRef.current;
    const centerHub = centerTriggerRef.current;
    const topTarget = elementsRef.current['sb-1'];

    if (!svg || !svgGroup || !spokesGroup || !ring || !rfqLine || !rfqNode || !centerHub || !topTarget) return;

    svgGroup.innerHTML = '';
    spokesGroup.innerHTML = '';
    
    const svgRect = svg.getBoundingClientRect();
    const centerRect = centerHub.getBoundingClientRect();
    const topRect = topTarget.getBoundingClientRect();

    const centerX = centerRect.left + (centerRect.width / 2) - svgRect.left;
    const centerY = centerRect.top + (centerRect.height / 2) - svgRect.top;
    const radius = 194;

    ring.setAttribute('cx', centerX);
    ring.setAttribute('cy', centerY);
    ring.setAttribute('r', radius);

    const engineCX = (topRect.left + topRect.width / 2) - svgRect.left;
    const engineT = topRect.top - svgRect.top;
    
    rfqLine.setAttribute('x1', engineCX);
    rfqLine.setAttribute('y1', 0);
    rfqLine.setAttribute('x2', engineCX);
    rfqLine.setAttribute('y2', engineT);
    rfqNode.setAttribute('cx', engineCX);
    rfqNode.setAttribute('cy', engineT);

    const inputBundleX = centerX - radius;
    const inputBundleY = centerY;
    const outputBundleX = centerX + radius;
    const outputBundleY = centerY;

    ENGINE_SUB_BLOCKS.forEach((block) => {
      const el = elementsRef.current[block.id];
      if (!el) return;

      const blockRect = el.getBoundingClientRect();
      const blockCX = blockRect.left + (blockRect.width / 2) - svgRect.left;
      const blockCY = blockRect.top + (blockRect.height / 2) - svgRect.top;

      const angle = Math.atan2(blockCY - centerY, blockCX - centerX);
      const circumferenceX = centerX + radius * Math.cos(angle);
      const circumferenceY = centerY + radius * Math.sin(angle);

      const isSpokeActive = activeId && currentActiveTargets.includes(block.label);
      const strokeColor = isSpokeActive ? currentActiveColor : block.color;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', circumferenceX);
      line.setAttribute('y1', circumferenceY);
      line.setAttribute('x2', centerX);
      line.setAttribute('y2', centerY);
      line.setAttribute('class', `internal-wire ${isSpokeActive ? 'internal-wire-active' : ''}`);
      line.setAttribute('stroke', strokeColor);
      line.style.opacity = activeId ? (isSpokeActive ? '0.9' : '0.05') : '0.18';
      
      spokesGroup.appendChild(line);
    });

    const createFunnelWire = (startX, startY, endX, endY, isInputSide, color, delay, id) => {
      const dx = Math.abs(endX - startX);
      const pathData = isInputSide ?
        `M ${startX} ${startY} C ${startX + dx * 0.45} ${startY}, ${endX - dx * 0.15} ${endY}, ${endX} ${endY}` :
        `M ${startX} ${startY} C ${startX + dx * 0.15} ${startY}, ${endX - dx * 0.45} ${endY}, ${endX} ${endY}`;
      
      let opacity = '1';
      if (activeId) {
        if (isActiveInput) {
          if (isInputSide) {
            opacity = (id === activeId) ? '1' : '0.05';
          } else {
            const matchedOut = OUTPUT_CARDS.find(o => o.id === id);
            opacity = matchedOut?.targets.some(t => currentActiveTargets.includes(t)) ? '1' : '0.05';
          }
        } else {
          if (isInputSide) {
            const matchedIn = PIPELINE_SCENARIOS.find(i => i.id === id);
            opacity = matchedIn?.targets.some(t => currentActiveTargets.includes(t)) ? '1' : '0.05';
          } else {
            opacity = (id === activeId) ? '1' : '0.05';
          }
        }
      }

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'wire-set transition-all duration-300');
      g.style.opacity = opacity;

      const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      base.setAttribute('d', pathData);
      base.setAttribute('class', 'data-wire');
      base.setAttribute('stroke', color);
      
      const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pulse.setAttribute('d', pathData);
      pulse.setAttribute('class', 'pulse-wire');
      pulse.setAttribute('stroke', color);
      pulse.setAttribute('filter', 'url(#glow)');
      pulse.style.animationDelay = `${delay}s`;
      
      g.appendChild(base);
      g.appendChild(pulse);
      svgGroup.appendChild(g);
    };

    PIPELINE_SCENARIOS.forEach((card, i) => {
      const el = elementsRef.current[card.id];
      if (!el) return;
      const cardRect = el.getBoundingClientRect();
      const startX = cardRect.right - svgRect.left;
      const startY = cardRect.top + (cardRect.height / 2) - svgRect.top;
      createFunnelWire(startX, startY, inputBundleX, inputBundleY, true, card.color, i * 0.18, card.id);
    });

    OUTPUT_CARDS.forEach((card, i) => {
      const el = elementsRef.current[card.id];
      if (!el) return;
      const cardRect = el.getBoundingClientRect();
      const endX = cardRect.left - svgRect.left;
      const endY = cardRect.top + (cardRect.height / 2) - svgRect.top;
      createFunnelWire(outputBundleX, outputBundleY, endX, endY, false, card.color, i * 0.22, card.id);
    });
  };

  useEffect(() => {
    updatePipelineLayout();
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updatePipelineLayout);
    });
    resizeObserver.observe(document.body);
    
    const observedKeys = [...PIPELINE_SCENARIOS, ...OUTPUT_CARDS, ...ENGINE_SUB_BLOCKS];
    observedKeys.forEach(item => {
      if (elementsRef.current[item.id]) resizeObserver.observe(elementsRef.current[item.id]);
    });
    if (centerTriggerRef.current) resizeObserver.observe(centerTriggerRef.current);

    return () => resizeObserver.disconnect();
  }, [activeId, currentActiveTargets, currentActiveColor]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100;300;400;600;700;900&display=swap');

        .pwise-pipeline-wrapper {
          --primary: #ffd165;
          --background: #121317;
          --on-surface: #e3e2e7;
          --on-surface-variant: #d3c5ac;
          
          background-color: var(--background);
          color: var(--on-surface);
          min-height: 100vh;
          font-family: "Geist", "Segoe UI", sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .pwise-pipeline-wrapper .font-data-label {
          font-family: "JetBrains Mono", monospace;
        }

        .pwise-pipeline-wrapper .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }

        .glass-mirror {
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 50%, rgba(0,0,0,0.3) 51%, rgba(0,0,0,0.6) 100%);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-mirror:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.2) 51%, rgba(0,0,0,0.5) 100%);
        }

        .hex-shape {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        
        .hex-3d-lift {
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.85)) drop-shadow(0 16px 32px rgba(0, 0, 0, 0.75));
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        
        .cell-mirror-bg {
          background: linear-gradient(180deg, #1f222c 0%, #111317 100%);
          box-shadow: inset 0 3px 6px rgba(255,255,255,0.12), inset 0 -6px 14px rgba(0,0,0,0.7);
        }
        
        .data-wire {
          stroke-width: 1.2;
          fill: none;
          opacity: 0.15;
          transition: opacity 0.4s ease, stroke 0.4s ease;
        }

        .pulse-wire {
          stroke-width: 1.8;
          fill: none;
          stroke-dasharray: 45, 180;
          animation: pwiseFlow 3.5s linear infinite;
          transition: opacity 0.4s ease, stroke 0.4s ease, filter 0.4s ease;
        }
        
        .internal-wire {
          stroke-width: 1.5;
          stroke-dasharray: 8, 12;
          fill: none;
          opacity: 0.15;
          transition: opacity 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease;
        }

        .internal-wire-active {
          opacity: 0.85;
          stroke-width: 2;
          animation: pwiseFlow 2s linear infinite;
        }

        @keyframes pwiseFlow {
          to { stroke-dashoffset: -225; }
        }
        
        .rainbow-animate {
          animation: rainbowSweep 6s linear infinite;
        }

        @keyframes rainbowSweep {
          0% { x1: 0%; y1: 0%; x2: 100%; y2: 0%; }
          100% { x1: 100%; y1: 0%; x2: 200%; y2: 0%; }
        }
        
        .cell-scanner {
          background: linear-gradient(to bottom, transparent, rgba(255, 209, 101, 0.2), transparent);
          height: 35px;
          width: 100%;
          position: absolute;
          left: 0;
          animation: individualScan 4s ease-in-out infinite;
          pointer-events: none;
        }
        
        .t-1 .cell-scanner { animation-delay: 0.3s; }
        .t-2 .cell-scanner { animation-delay: 0.7s; }
        .t-3 .cell-scanner { animation-delay: 1.1s; }
        .t-4 .cell-scanner { animation-delay: 1.5s; }
        .t-5 .cell-scanner { animation-delay: 1.9s; }
        .t-6 .cell-scanner { animation-delay: 2.3s; }

        @keyframes individualScan {
          0% { top: -100%; opacity: 0; }
          30% { opacity: 0.35; }
          70% { opacity: 0.35; }
          100% { top: 100%; opacity: 0; }
        }

        .pulse-green {
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        .sub-block-highlight {
          transform: translateY(-5px) scale(1.04);
          z-index: 35 !important;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.95));
        }

        .sub-block-highlight .outer-glow-border {
          opacity: 1 !important;
          filter: drop-shadow(0 0 15px currentColor);
        }

        .sub-block-highlight .cell-mirror-bg {
          background: #202430 !important;
        }

        .sub-block-highlight .icon-fill {
          font-variation-settings: 'FILL' 1;
        }

        .active-card-glow {
          border-color: rgba(255, 209, 101, 0.5) !important;
          background: rgba(255, 209, 101, 0.06) !important;
          box-shadow: 0 0 15px rgba(255, 209, 101, 0.1);
        }
      `}</style>

      <div className="pwise-pipeline-wrapper">
        <nav className="fixed top-0 w-full Ever-Z z-50 bg-[#121317]/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-10 h-16">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[#ffd165] tracking-tighter">Pricewise</span>
            <div className="h-4 w-[1px] bg-white/10 mx-2" />
            <span className="text-xs uppercase tracking-widest text-[#ffd165]/80">Data Architecture Pipeline</span>
          </div>
          
          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            <button 
              onClick={() => setIsPaused(!isPaused)} 
              className="flex items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
            >
              <span className="material-symbols-outlined text-sm text-[#ffd165] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isPaused ? 'play_arrow' : 'pause'}
              </span>
              <span className={`font-data-label text-[10px] uppercase font-bold tracking-widest transition-colors ${isPaused ? 'text-[#ffd165]' : 'text-slate-300 group-hover:text-[#ffd165]'}`}>
                {isPaused ? 'Simulation Paused' : 'Simulation Active'}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#d3c5ac] cursor-pointer hover:text-[#ffd165]">notifications</span>
            <span className="material-symbols-outlined text-[#d3c5ac] cursor-pointer hover:text-[#ffd165]">settings</span>
            <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPWrTy3tGsIev9bME9tTLnAEHqPYbpA9zNoviwXqNME08moJd1QzUYBfvfstjbWAnMTdp34jw8p0xq54mBpQZ_i30C8UiNw7_kcc8iz5gBMd83TXejmPVpRpPcWskRkuVLqoi3l51I9WsK7P5kgMkgF09ZseQQ-iWGizfCloIdBIb92OnrDw54swM63rLwnxMHMf66n3cuyuA3CJRdSm74uHeLwAVPbRo4GrYykluDV1SQzoXskCG-jfMp-DXXWD1NSFnJsDTe" alt="User profile icon" />
            </div>
          </div>
        </nav>

        <main className="relative min-h-[calc(100vh-4rem)] pt-16 w-full max-w-7xl mx-auto grid grid-cols-12 items-center px-4 z-20">
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" id="pipeline-svg" ref={pipelineSvgRef} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rainbow-ring-grad" x1="0%" y1="0%" x2="100%" y2="0%" className="rainbow-animate" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="25%" stopColor="#A855F7" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="rfq-grad" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#ffd165" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur result="coloredBlur" stdDeviation="2.5" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line id="rfq-line" ref={rfqLineRef} stroke="url(#rfq-grad)" strokeWidth="1.5" x1="0" x2="0" y1="0" y2="0" />
            <circle cx="0" cy="0" fill="#ffd165" id="rfq-node" ref={rfqNodeRef} r="4" filter="url(#glow)" />
            <circle id="perimeter-ring" ref={perimeterRingRef} fill="none" stroke="url(#rainbow-ring-grad)" strokeWidth="2.5" filter="url(#glow)" />
            <g id="internal-spokes-group" ref={spokesGroupRef} />
            <g id="wires-group" ref={wiresGroupRef} />
          </svg>

          {/* COLUMN 1: INPUTS */}
          <div className="col-span-3 flex flex-col gap-6 justify-center items-start w-full">
            <div className="space-y-1 w-full max-w-[288px]">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffd165]">Input Ecosystem</h2>
              <div className="h-px w-full bg-gradient-to-r from-[#ffd165]/40 to-transparent" />
            </div>
            
            <div className="space-y-3.5 flex flex-col items-start w-full">
              {PIPELINE_SCENARIOS.map((card) => {
                const isSelectedCard = activeId === card.id;
                const shouldDimCard = activeId && !isSelectedCard && (!isActiveInput || hoveredItem?.id !== card.id);
                return (
                  <div 
                    key={card.id}
                    ref={el => elementsRef.current[card.id] = el}
                    onMouseEnter={() => setHoveredItem({ type: 'input', id: card.id })}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`input-card glass-mirror p-3.5 flex items-center justify-between group cursor-default w-72 border-l-2 rounded-r-md gap-2 transition-all duration-300 ${isSelectedCard ? 'active-card-glow' : ''}`}
                    style={{ 
                      borderLeftColor: card.color,
                      opacity: shouldDimCard ? 0.35 : 1
                    }}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span className="material-symbols-outlined text-sm opacity-80 group-hover:scale-110 transition-transform" style={{ color: card.color }}>
                        {card.id === 'in-0' ? 'database' : card.id === 'in-1' ? 'description' : card.id === 'in-2' ? 'hub' : card.id === 'in-3' ? 'groups_3' : card.id === 'in-4' ? 'gavel' : card.id === 'in-5' ? 'trending_up' : 'inventory_2'}
                      </span>
                      <span className="font-data-label text-[11px] tracking-widest text-[#e3e2e7] truncate">{card.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: CENTER PIECE */}
          <div className="col-span-6 flex flex-col justify-center items-center h-full w-full relative gap-8">
            <div className="relative w-[420px] h-[350px] flex items-center justify-center">
              
              <div id="center-trigger" ref={centerTriggerRef} className="hex-3d-lift absolute w-[140px] h-[120px] z-30" style={{ top: '115px', left: '140px' }}>
                <div className="absolute inset-0 hex-shape bg-gradient-to-b from-[#ffd165] via-amber-500 to-yellow-600 p-[4px] drop-shadow-[0_0_15px_rgba(255,209,101,0.45)]">
                  <div className="w-full h-full bg-[#0d0f12] hex-shape relative overflow-hidden cell-mirror-bg">
                    <div className="cell-scanner" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 pointer-events-none">
                  <span className="material-symbols-outlined text-[#ffd165] text-2xl mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h1 className="text-[10px] font-black uppercase tracking-[0.12em] text-[#ffd165] leading-tight">Pricing Engine</h1>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <div className="w-0.5 h-0.5 rounded-full bg-emerald-500 pulse-green" />
                    <span className="font-data-label text-[6.5px] text-[#d3c5ac] tracking-wider uppercase opacity-70">4,821 tx/s</span>
                  </div>
                </div>
              </div>

              {ENGINE_SUB_BLOCKS.map((block) => {
                const isHighlighted = activeId && currentActiveTargets.includes(block.label);
                const shouldDimBlock = activeId && !isHighlighted;
                return (
                  <div 
                    key={block.id}
                    ref={el => elementsRef.current[block.id] = el}
                    className={`hex-3d-lift engine-sub-block absolute w-[140px] h-[120px] z-20 ${block.styleClass} ${isHighlighted ? 'sub-block-highlight' : ''}`} 
                    style={{ 
                      top: block.top, 
                      left: block.left,
                      opacity: shouldDimBlock ? 0.15 : 1
                    }}
                  >
                    <div 
                      className="outer-glow-border absolute inset-0 hex-shape p-[3.5px] transition-all duration-300 opacity-80"
                      style={{ 
                        backgroundColor: `${block.color}33`,
                        color: block.color,
                        border: `1px solid ${block.color}66`
                      }}
                    >
                      <div className="w-full h-full bg-[#15171d] hex-shape relative overflow-hidden cell-mirror-bg">
                        <div className="cell-scanner" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-2">
                      <span 
                        className="material-symbols-outlined text-lg mb-0.5 transition-all duration-300"
                        style={{ color: isHighlighted ? currentActiveColor : `${block.color}cc` }}
                      >
                        {block.icon}
                      </span>
                      <span className="text-[9.5px] font-bold uppercase tracking-widest text-slate-300">{block.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full max-w-xl bg-[#16181f]/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl relative mt-2 text-xs">
              <div className="absolute top-2 left-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                <span className="font-data-label text-[8px] text-yellow-400 font-bold uppercase tracking-widest">Pipeline Context Engine</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-2 pt-2 border-t border-white/5">
                <div className="border-r border-white/5 pr-3 space-y-1">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Ingested Context Stream</div>
                  <p className="text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: inputExplanation }} />
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Generated Insight Deliverable</div>
                  <p className="text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: outputExplanation }} />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: OUTPUTS */}
          <div className="col-span-3 flex flex-col gap-6 justify-center items-end w-full">
            <div className="space-y-1 w-full max-w-[288px] text-right">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffd165]">Generated Insights</h2>
              <div className="h-px w-full bg-gradient-to-l from-[#ffd165]/40 to-transparent" />
            </div>
            
            <div className="space-y-3.5 flex flex-col items-end w-full">
              {OUTPUT_CARDS.map((card) => {
                let isOutCardHighlighted = activeId === card.id;
                if (activeId && isActiveInput) {
                  isOutCardHighlighted = card.targets.some(t => currentActiveTargets.includes(t));
                }
                const shouldDimCard = activeId && !isOutCardHighlighted;
                return (
                  <div 
                    key={card.id}
                    ref={el => elementsRef.current[card.id] = el}
                    onMouseEnter={() => setHoveredItem({ type: 'output', id: card.id })}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`output-card glass-mirror p-3.5 flex items-center justify-between group cursor-default flex-row-reverse w-72 border-r-2 rounded-l-md transition-all duration-300 ${isOutCardHighlighted ? 'active-card-glow' : ''}`}
                    style={{ 
                      borderRightColor: isOutCardHighlighted && currentActiveColor !== '#ffffff' ? currentActiveColor : card.color,
                      opacity: shouldDimCard ? 0.35 : 1
                    }}
                  >
                    <span className="font-data-label text-[11px] tracking-widest text-[#e3e2e7] flex items-center gap-2">
                      {card.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
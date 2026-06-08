import React, { useEffect, useRef } from 'react';

export default function CashPilotFlowLayout() {
  const stageRef = useRef(null);
  const coreRef = useRef(null);
  const svgRef = useRef(null);
  const leftAnchorsRef = useRef([]);
  const rightAnchorsRef = useRef([]);
  const animationFramesRef = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;
    const core = coreRef.current;
    const svg = svgRef.current;
    if (!stage || !core || !svg) return;

    const NS = "http://www.w3.org/2000/svg";

    function build() {
      // Clear previous frames and paths cleanly
      animationFramesRef.current.forEach(id => cancelAnimationFrame(id));
      animationFramesRef.current = [];
      
      const pathsToClear = svg.querySelectorAll('.fpath, .fdot');
      pathsToClear.forEach(e => e.remove());

      const sb = stage.getBoundingClientRect();
      const cb = core.getBoundingClientRect();
      const coreL = cb.left - sb.left;
      const coreR = cb.right - sb.left;
      const coreY = cb.top - sb.top + cb.height * 0.42;

      function makePath(x1, y1, x2, y2, grad, dir, delay) {
        const mx = (x1 + x2) / 2;
        const d = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
        
        const p = document.createElementNS(NS, 'path');
        p.setAttribute('class', 'fpath');
        p.setAttribute('d', d);
        p.setAttribute('fill', 'none');
        p.setAttribute('stroke', `url(#${grad})`);
        p.setAttribute('stroke-width', '2');
        svg.appendChild(p);

        const len = p.getTotalLength();
        const dot = document.createElementNS(NS, 'circle');
        dot.setAttribute('class', 'fdot');
        dot.setAttribute('r', '3.4');
        dot.setAttribute('fill', dir === 'in' ? '#36D6E7' : '#FFD23F');
        dot.style.filter = 'drop-shadow(0 0 5px currentColor)';
        svg.appendChild(dot);

        const dur = 2400 + Math.random() * 900;
        let start = null;

        function step(ts) {
          if (start === null) start = ts + delay;
          let t = ((ts - start) % dur) / dur;
          if (t < 0) t = 0;
          
          try {
            const pt = p.getPointAtLength(len * t);
            dot.setAttribute('cx', pt.x);
            dot.setAttribute('cy', pt.y);
            dot.setAttribute('opacity', (t < 0.06 || t > 0.94) ? '0' : '0.95');
          } catch (e) {
            // Guard against edge-case layout recalculation drops
          }
          
          const frameId = requestAnimationFrame(step);
          animationFramesRef.current.push(frameId);
        }
        
        const initialFrameId = requestAnimationFrame(step);
        animationFramesRef.current.push(initialFrameId);
      }

      // Route Left Column Streams
      leftAnchorsRef.current.forEach((anchor, i) => {
        if (!anchor) return;
        const a = anchor.getBoundingClientRect();
        makePath(a.left - sb.left + a.width / 2, a.top - sb.top + a.height / 2, coreL, coreY, 'gIn', 'in', i * 220);
      });

      // Route Right Column Streams
      rightAnchorsRef.current.forEach((anchor, i) => {
        if (!anchor) return;
        const a = anchor.getBoundingClientRect();
        makePath(coreR, coreY, a.left - sb.left + a.width / 2, a.top - sb.top + a.height / 2, 'gOut', 'out', i * 220);
      });
    }

    // Initialize with a layout macro task buffer delay
    const loadTimeout = setTimeout(build, 80);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(build, 180);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(loadTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      animationFramesRef.current.forEach(id => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <>
      <style>{`
        .cashpilot-flow-wrapper {
          --bg: #070B1A; 
          --panel: #0E1730; 
          --panel2: #111C3A; 
          --border: #1E2C52;
          --gold: #FFD23F; 
          --gold-soft: #FFE680; 
          --cyan: #36D6E7; 
          --green: #3FE0A0;
          --violet: #8B7DF6; 
          --blue: #4D8DF0;
          --text: #EAF0FF; 
          --text-dim: #8FA0C8; 
          --text-faint: #5C6B92;
          --dso: #FFD23F; 
          --dpo: #36D6E7; 
          --dio: #3FE0A0;

          background:
            radial-gradient(800px 500px at 50% 42%, rgba(77,141,240,0.10), transparent 70%),
            radial-gradient(1100px 600px at 50% 50%, rgba(139,125,246,0.07), transparent 75%),
            var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 14px 22px 12px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .cashpilot-flow-wrapper *, 
        .cashpilot-flow-wrapper *::before, 
        .cashpilot-flow-wrapper *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .cashpilot-flow-wrapper .header { text-align: center; flex: 0 0 auto; margin-bottom: 6px; }
        .cashpilot-flow-wrapper .header h1 { font-family: 'Sora', sans-serif; font-size: clamp(22px, 2.6vw, 34px); font-weight: 800; letter-spacing: -0.02em; }
        .cashpilot-flow-wrapper .header h1 .accent { color: var(--gold); }
        .cashpilot-flow-wrapper .header p { color: var(--text-dim); font-size: clamp(11px, 1.1vw, 13px); margin-top: 3px; font-weight: 300; }

        .cashpilot-flow-wrapper .stage {
          flex: 1 1 auto; position: relative;
          display: grid; grid-template-columns: 1fr 1.3fr 1fr; gap: 0;
          align-items: center; min-height: 0;
        }

        .cashpilot-flow-wrapper #flow { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; overflow: visible; }

        .cashpilot-flow-wrapper .col { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; }
        .cashpilot-flow-wrapper .left { align-items: flex-start; }
        .cashpilot-flow-wrapper .right { align-items: flex-end; }
        .cashpilot-flow-wrapper .group { width: 235px; max-width: 235px; margin-bottom: 10px; }
        .cashpilot-flow-wrapper .left .group { margin-right: auto; }
        .cashpilot-flow-wrapper .right .col-label { width: 235px; text-align: right; padding-right: 2px; }
        .cashpilot-flow-wrapper .right .card { width: 235px; }
        .cashpilot-flow-wrapper .col-label { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 6px; }
        .cashpilot-flow-wrapper .left .col-label { padding-left: 2px; }

        .cashpilot-flow-wrapper .card {
          width: 235px; max-width: 235px;
          background: linear-gradient(145deg, var(--panel), var(--panel2));
          border: 1px solid var(--border); border-radius: 11px;
          padding: 7px 11px; margin-bottom: 6px;
          display: flex; align-items: center; gap: 9px; position: relative;
          transition: transform .25s, border-color .25s, box-shadow .25s;
        }
        .cashpilot-flow-wrapper .left .card:hover { transform: translateX(3px); border-color: var(--cyan); box-shadow: 0 0 18px rgba(54,214,231,0.2); }
        .cashpilot-flow-wrapper .right .card:hover { transform: translateX(-3px); border-color: var(--gold); box-shadow: 0 0 18px rgba(255,210,63,0.2); }
        
        .cashpilot-flow-wrapper .ic { width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; font-size: 13px; flex-shrink: 0; background: rgba(77,141,240,0.12); border: 1px solid rgba(77,141,240,0.25); }
        .cashpilot-flow-wrapper .tt { font-size: 11.5px; font-weight: 600; line-height: 1.15; }
        .cashpilot-flow-wrapper .ss { font-size: 9.5px; color: var(--text-faint); margin-top: 1px; line-height: 1.25; }

        .cashpilot-flow-wrapper .anchor { position: absolute; top: 50%; transform: translateY(-50%); width: 10px; height: 10px; border-radius: 50%; border: 2px solid var(--bg); z-index: 3; }
        .cashpilot-flow-wrapper .left .anchor { right: -18px; background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }
        .cashpilot-flow-wrapper .right .anchor { left: -18px; background: var(--gold); box-shadow: 0 0 8px var(--gold); }

        .cashpilot-flow-wrapper .core {
          position: relative; z-index: 2;
          background:
            radial-gradient(circle at 50% 40%, rgba(255,210,63,0.08), transparent 60%),
            linear-gradient(160deg, rgba(20,30,60,0.55), rgba(10,16,36,0.8));
          border: 1px solid var(--border); border-radius: 20px;
          margin: 0 6px; padding: 12px 14px 14px;
          display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;
        }
        .cashpilot-flow-wrapper .joule-band { display: inline-flex; align-items: center; gap: 7px; font-size: 10px; font-weight: 400; color: var(--text-dim); background: rgba(54,214,231,0.06); border: 1px solid rgba(54,214,231,0.22); border-radius: 30px; padding: 4px 13px; margin-bottom: 8px; }
        .cashpilot-flow-wrapper .joule-band strong { color: var(--cyan); font-weight: 700; }
        .cashpilot-flow-wrapper .joule-band .jt { font-size: 8.5px; color: var(--text-faint); }
        
        .cashpilot-flow-wrapper .jdot { width: 6px; height: 6px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 8px var(--cyan); animation: jp 2.4s infinite; }
        @keyframes jp { 0%,100% { opacity: .4; transform: scale(.85) } 50% { opacity: 1; transform: scale(1.15) } }

        .cashpilot-flow-wrapper .badge { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; color: #1A1408; background: linear-gradient(90deg, var(--gold), var(--gold-soft)); padding: 5px 18px; border-radius: 30px; box-shadow: 0 0 22px rgba(255,210,63,0.42); }
        .cashpilot-flow-wrapper .c-title { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 600; margin-top: 9px; }
        .cashpilot-flow-wrapper .c-sub { font-size: 9.5px; font-weight: 600; letter-spacing: 0.16em; color: var(--text-faint); text-transform: uppercase; margin-top: 3px; }

        .cashpilot-flow-wrapper .crew { position: relative; width: 100%; max-width: 400px; aspect-ratio: 1/0.82; margin: 8px auto 6px; }
        .cashpilot-flow-wrapper .spoke { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; }
        .cashpilot-flow-wrapper .spoke line { stroke: url(#sg); stroke-width: 1.3; stroke-dasharray: 3 5; opacity: .55; animation: dash 16s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -200 } }

        .cashpilot-flow-wrapper .ai { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 92px; height: 92px; border-radius: 50%; display: grid; place-items: center; text-align: center; background: radial-gradient(circle, #FFE680, #FFB000); box-shadow: 0 0 0 0 rgba(255,210,63,0.5), 0 0 44px rgba(255,176,0,0.6); animation: glow 3s ease-in-out infinite; z-index: 5; }
        .cashpilot-flow-wrapper .ai span { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 12px; color: #1A1408; line-height: 1.1; }
        .cashpilot-flow-wrapper .ai small { display: block; font-size: 7.5px; letter-spacing: 0.1em; font-weight: 600; margin-top: 1px; }
        @keyframes glow { 0%,100% { box-shadow: 0 0 0 0 rgba(255,210,63,0.45), 0 0 40px rgba(255,176,0,0.55) } 50% { box-shadow: 0 0 0 12px rgba(255,210,63,0), 0 0 58px rgba(255,176,0,0.75) } }

        .cashpilot-flow-wrapper .agent { position: absolute; width: 108px; transform: translate(-50%, -50%); background: linear-gradient(150deg, var(--panel), var(--panel2)); border: 1px solid var(--border); border-radius: 11px; padding: 8px 7px; text-align: center; z-index: 4; transition: transform .25s, border-color .25s, box-shadow .25s; }
        .cashpilot-flow-wrapper .agent:hover { border-color: var(--accent); box-shadow: 0 0 20px var(--glow); transform: translate(-50%, -50%) scale(1.06); }
        .cashpilot-flow-wrapper .agent .at { font-size: 10.5px; font-weight: 600; line-height: 1.2; }
        .cashpilot-flow-wrapper .agent .ag { font-size: 8px; font-weight: 700; letter-spacing: 0.07em; margin-top: 3px; text-transform: uppercase; }
        
        .cashpilot-flow-wrapper .pos1 { left: 22%; top: 16%; }
        .cashpilot-flow-wrapper .pos2 { left: 78%; top: 16%; }
        .cashpilot-flow-wrapper .pos3 { left: 7%; top: 50%; }
        .cashpilot-flow-wrapper .pos4 { left: 93%; top: 50%; }
        .cashpilot-flow-wrapper .pos5 { left: 24%; top: 85%; }
        .cashpilot-flow-wrapper .pos6 { left: 76%; top: 85%; }
        
        .cashpilot-flow-wrapper .tag-dso { color: var(--dso); }
        .cashpilot-flow-wrapper .tag-dpo { color: var(--dpo); }
        .cashpilot-flow-wrapper .tag-dio { color: var(--dio); }
        .cashpilot-flow-wrapper .tag-all { color: var(--violet); }
        .cashpilot-flow-wrapper .dso { --accent: var(--dso); --glow: rgba(255,210,63,0.3); }
        .cashpilot-flow-wrapper .dpo { --accent: var(--dpo); --glow: rgba(54,214,231,0.3); }
        .cashpilot-flow-wrapper .dio { --accent: var(--dio); --glow: rgba(63,224,160,0.3); }
        .cashpilot-flow-wrapper .all { --accent: var(--violet); --glow: rgba(139,125,246,0.3); }

        .cashpilot-flow-wrapper .found { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; width: 100%; margin-top: 4px; }
        .cashpilot-flow-wrapper .fc { background: linear-gradient(150deg, rgba(20,28,58,0.7), rgba(12,18,38,0.7)); border: 1px solid var(--border); border-radius: 10px; padding: 8px 7px; text-align: center; }
        .cashpilot-flow-wrapper .fc .fi { font-size: 13px; margin-bottom: 2px; }
        .cashpilot-flow-wrapper .fc .ft { font-size: 9.5px; font-weight: 600; }
        .cashpilot-flow-wrapper .fc .fs { font-size: 8px; color: var(--text-faint); margin-top: 1px; line-height: 1.25; }

        .cashpilot-flow-wrapper .legend { flex: 0 0 auto; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 10.5px; color: var(--text-dim); margin-top: 6px; }
        .cashpilot-flow-wrapper .legend span { display: inline-flex; align-items: center; gap: 6px; }
        .cashpilot-flow-wrapper .legend i { width: 10px; height: 10px; border-radius: 3px; display: inline-block; }
      `}</style>

      <div className="cashpilot-flow-wrapper">
        <header className="header">
          <h1>How <span className="accent">CashPilot</span> Works</h1>
          <p>AI-powered working capital intelligence across receivables, payables, and inventory — DSO · DPO · DIO</p>
        </header>

        <div className="stage" id="stage" ref={stageRef}>
          <svg id="flow" ref={svgRef}>
            <defs>
              <linearGradient id="gIn" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#36D6E7" stopOpacity="0.15" />
                <stop offset="1" stopColor="#4D8DF0" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="gOut" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#FFD23F" stopOpacity="0.85" />
                <stop offset="1" stopColor="#8B7DF6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* LEFT PANEL */}
          <aside className="col left" id="left">
            <div className="group">
              <div className="col-label">Enterprise Systems</div>
              <div className="card">
                <div className="ic">🟦</div>
                <div>
                  <div className="tt">SAP S/4HANA</div>
                  <div className="ss">Core finance &amp; logistics</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[0] = el} />
              </div>
              <div className="card">
                <div className="ic">🔷</div>
                <div>
                  <div className="tt">SAP Signavio</div>
                  <div className="ss">Process mining &amp; detection</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[1] = el} />
              </div>
              <div className="card">
                <div className="ic">🗄️</div>
                <div>
                  <div className="tt">Non-SAP ERP</div>
                  <div className="ss">Legacy &amp; third-party</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[2] = el} />
              </div>
              <div className="card">
                <div className="ic">🏦</div>
                <div>
                  <div className="tt">Banking Systems</div>
                  <div className="ss">Statements &amp; payments</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[3] = el} />
              </div>
            </div>

            <div className="group">
              <div className="col-label">CashPilot Data Sources</div>
              <div className="card">
                <div className="ic">📊</div>
                <div>
                  <div className="tt">AR / AP Open Items</div>
                  <div className="ss">Receivables &amp; payables</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[4] = el} />
              </div>
              <div className="card">
                <div className="ic">🧾</div>
                <div>
                  <div className="tt">Invoice &amp; Payment Data</div>
                  <div className="ss">Billing, clearing, remittances</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[5] = el} />
              </div>
              <div className="card">
                <div className="ic">📦</div>
                <div>
                  <div className="tt">Inventory &amp; Stock Data</div>
                  <div className="ss">Movement, ageing, valuation</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[6] = el} />
              </div>
              <div className="card">
                <div className="ic">📅</div>
                <div>
                  <div className="tt">Terms &amp; Master Data</div>
                  <div className="ss">Customer &amp; vendor terms</div>
                </div>
                <span className="anchor" ref={el => leftAnchorsRef.current[7] = el} />
              </div>
            </div>
          </aside>

          {/* CORE HUB ENGINE */}
          <section className="core" id="core" ref={coreRef}>
            <div className="joule-band">
              <span className="jdot" />
              Orchestrated via <strong>SAP Joule</strong>
              <span className="jt">orchestration layer</span>
            </div>
            <div className="badge">CASHPILOT</div>
            <div className="c-title">CashPilot Intelligence Agent</div>
            <div className="c-sub">CashPilot Agent Crew</div>

            <div className="crew">
              <svg className="spoke" viewBox="0 0 400 330" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFD23F" />
                    <stop offset="1" stopColor="#36D6E7" />
                  </linearGradient>
                </defs>
                <line x1="200" y1="165" x2="88" y2="53" />
                <line x1="200" y1="165" x2="312" y2="53" />
                <line x1="200" y1="165" x2="28" y2="165" />
                <line x1="200" y1="165" x2="372" y2="165" />
                <line x1="200" y1="165" x2="96" y2="280" />
                <line x1="200" y1="165" x2="304" y2="280" />
              </svg>
              <div className="ai">
                <span>CashPilot<small>AI CORE</small></span>
              </div>
              <div className="agent dso pos1">
                <div className="at">Overdue Invoice Resolver</div>
                <div className="ag tag-dso">DSO</div>
              </div>
              <div className="agent dso pos2">
                <div className="at">Short-Pay &amp; Deduction</div>
                <div className="ag tag-dso">DSO</div>
              </div>
              <div className="agent dso pos3">
                <div className="at">Auto-Reconciliation</div>
                <div className="ag tag-dso">DSO</div>
              </div>
              <div className="agent dpo pos4">
                <div className="at">Payment Timing Optimizer</div>
                <div className="ag tag-dpo">DPO</div>
              </div>
              <div className="agent dio pos5">
                <div className="at">Slow-Moving Stock</div>
                <div className="ag tag-dio">DIO</div>
              </div>
              <div className="agent all pos6">
                <div className="at">Cash Forecast &amp; KPI</div>
                <div className="ag tag-all">ALL</div>
              </div>
            </div>

            <div className="found">
              <div className="fc">
                <div className="fi">🧠</div>
                <div className="ft">CashPilot Memory</div>
                <div className="fs">Customer &amp; cash context</div>
              </div>
              <div className="fc">
                <div className="fi">⚡</div>
                <div className="ft">Finance Skills</div>
                <div className="fs">Reconciliation logic</div>
              </div>
              <div className="fc">
                <div className="fi">🛡️</div>
                <div className="ft">Data Guardrails</div>
                <div className="fs">Grounded &amp; policy-aware</div>
              </div>
            </div>
          </section>

          {/* RIGHT PANEL */}
          <aside className="col right" id="right">
            <div className="col-label">CashPilot Outputs</div>
            <div className="card">
              <span className="anchor" ref={el => rightAnchorsRef.current[0] = el} />
              <div className="ic" style={{ background: 'rgba(255,210,63,0.12)', borderColor: 'rgba(255,210,63,0.3)' }}>📈</div>
              <div>
                <div className="tt">DSO · DPO · DIO Dashboard</div>
                <div className="ss">Unified KPI view, all levers</div>
              </div>
            </div>
            <div className="card">
              <span className="anchor" ref={el => rightAnchorsRef.current[1] = el} />
              <div className="ic" style={{ background: 'rgba(255,210,63,0.12)', borderColor: 'rgba(255,210,63,0.3)' }}>🔔</div>
              <div>
                <div className="tt">Overdue &amp; Collection Alerts</div>
                <div className="ss">Real-time follow-up triggers</div>
              </div>
            </div>
            <div className="card">
              <span className="anchor" ref={el => rightAnchorsRef.current[2] = el} />
              <div className="ic" style={{ background: 'rgba(63,224,160,0.12)', borderColor: 'rgba(63,224,160,0.3)' }}>✓</div>
              <div>
                <div className="tt">Auto-Reconciliation Summary</div>
                <div className="ss">Cleared items, TDS/GST</div>
              </div>
            </div>
            <div className="card">
              <span className="anchor" ref={el => rightAnchorsRef.current[3] = el} />
              <div className="ic" style={{ background: 'rgba(54,214,231,0.12)', borderColor: 'rgba(54,214,231,0.3)' }}>⚖️</div>
              <div>
                <div className="tt">Dispute Resolution Tracker</div>
                <div className="ss">CN/DN issued, status &amp; ageing</div>
              </div>
            </div>
            <div className="card">
              <span className="anchor" ref={el => rightAnchorsRef.current[4] = el} />
              <div className="ic" style={{ background: 'rgba(139,125,246,0.12)', borderColor: 'rgba(139,125,246,0.3)' }}>💰</div>
              <div>
                <div className="tt">Cash Release Forecast</div>
                <div className="ss">Scenario cash unlock</div>
              </div>
            </div>
            <div className="card">
              <span className="anchor" ref={el => rightAnchorsRef.current[5] = el} />
              <div className="ic" style={{ background: 'rgba(255,210,63,0.12)', borderColor: 'rgba(255,210,63,0.3)' }}>💬</div>
              <div>
                <div className="tt">Conversational Chatbot</div>
                <div className="ss">Role-based queries</div>
              </div>
            </div>
          </aside>
        </div>

        {/* METRICS LEGEND BAR */}
        <footer className="legend">
          <span><i style={{ background: 'var(--dso)' }} /> DSO — Receivables</span>
          <span><i style={{ background: 'var(--dpo)' }} /> DPO — Payables</span>
          <span><i style={{ background: 'var(--dio)' }} /> DIO — Inventory</span>
          <span><i style={{ background: 'var(--violet)' }} /> Cross-lever intelligence</span>
        </footer>
      </div>
    </>
  );
}
import React, { useEffect, useRef } from 'react';

const COLORS = { 
  blue: '#5aadff', 
  teal: '#2de8c2', 
  gold: '#f5c842', 
  vio: '#a78bfa', 
  orange: '#ff8c42' 
};

export default function IntelligentReconciliationFlow() {
  const shellRef = useRef(null);
  const svgRef = useRef(null);
  const corePanelRef = useRef(null);
  const nodesRef = useRef({});

  useEffect(() => {
    function getRight(el, ref) {
      const a = el.getBoundingClientRect();
      const b = ref.getBoundingClientRect();
      return { x: a.right - b.left, y: a.top + a.height / 2 - b.top };
    }

    function getLeft(el, ref) {
      const a = el.getBoundingClientRect();
      const b = ref.getBoundingClientRect();
      return { x: a.left - b.left, y: a.top + a.height / 2 - b.top };
    }

    function addLine(svg, x1, y1, x2, y2, color, animClass, bend = 0) {
      const dx = x2 - x1;
      const c1x = x1 + dx * 0.18;
      const c2x = x1 + dx * 0.82;
      const dy = y2 - y1;
      const arc = dy * 0.56;
      const sway = bend * 1.4;
      const d = `M ${x1} ${y1} C ${c1x} ${y1 + arc + sway}, ${c2x} ${y2 - arc + sway}, ${x2} ${y2}`;

      ['stream', 'flow'].forEach(cls => {
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', d);
        p.setAttribute('class', cls + (cls === 'flow' ? ' ' + animClass : ''));
        p.setAttribute('stroke', color);
        svg.appendChild(p);
      });
    }

    function draw() {
      const svg = svgRef.current;
      const shell = shellRef.current;
      const core = corePanelRef.current;

      if (!svg || !shell || !core) return;

      svg.innerHTML = '';
      const sr = shell.getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${sr.width} ${sr.height}`);

      const coreR = core.getBoundingClientRect();
      const coreLeftX = coreR.left - sr.left;
      const coreRightX = coreR.right - sr.left;
      const coreMidY = coreR.top + coreR.height / 2 - sr.top;

      const leftNodes = [
        { id: 'lr1', color: 'blue', anim: '' },
        { id: 'lr2', color: 'blue', anim: 'slow' },
        { id: 'lr3', color: 'blue', anim: 'fast' },
        { id: 'lr4', color: 'blue', anim: '' },
        { id: 'lr5', color: 'teal', anim: 'slow' },
        { id: 'lr6', color: 'teal', anim: '' },
        { id: 'lr7', color: 'teal', anim: 'fast' },
        { id: 'lr8', color: 'teal', anim: '' },
        { id: 'lr9', color: 'teal', anim: 'slow' },
      ];

      leftNodes.forEach(({ id, color, anim }, idx) => {
        const el = nodesRef.current[id];
        if (!el) return;
        const from = getRight(el, shell);
        const toY = coreMidY + (from.y - coreMidY) * 0.3;
        const bend = (idx - 4) * 8;
        addLine(svg, from.x, from.y, coreLeftX, toY, COLORS[color], anim, bend);
      });

      const rightNodes = [
        { id: 'rl1', color: 'blue', anim: 'rev' },
        { id: 'rl2', color: 'teal', anim: 'rev slow' },
        { id: 'rl3', color: 'violet', anim: 'rev fast' },
        { id: 'rl4', color: 'teal', anim: 'rev' },
        { id: 'rl5', color: 'blue', anim: 'rev slow' },
        { id: 'rl6', color: 'gold', anim: 'rev' },
        { id: 'rl7', color: 'blue', anim: 'rev fast' },
      ];

      rightNodes.forEach(({ id, color, anim }, idx) => {
        const el = nodesRef.current[id];
        if (!el) return;
        const to = getLeft(el, shell);
        const fromY = coreMidY + (to.y - coreMidY) * 0.3;
        const bend = (idx - 3) * 8;
        addLine(svg, coreRightX, fromY, to.x, to.y, COLORS[color], anim, bend);
      });
    }

    // Trigger calculation cycles safely after painting completes
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(draw, 120);
    };

    const animationFrameId = requestAnimationFrame(() => {
      requestAnimationFrame(draw);
    });

    window.addEventListener('resize', handleResize);

    // Garbage collection listener routines on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg-deep:     #040810;
          --bg-mid:      #070d1a;
          --panel:       rgba(10,18,34,0.82);
          --panel-hard: rgba(14,24,44,0.94);
          --ink-0:      #e6f0ff;
          --ink-1:      #98b4d8;
          --gold:       #f5c842;
          --teal:       #2de8c2;
          --violet:     #a78bfa;
          --blue:       #5aadff;
          --orange:     #ff8c42;
          --border:     rgba(120,170,255,0.18);
        }
        
        .a2r-flow-wrapper {
          min-height: 100vh;
          font-family: "DM Sans", "Segoe UI", sans-serif;
          color: var(--ink-0);
          background:
            radial-gradient(ellipse 1200px 600px at 5% -10%,  rgba(90,173,255,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 900px 500px  at 95% 5%,   rgba(167,139,250,0.14) 0%, transparent 70%),
            radial-gradient(ellipse 700px 400px  at 50% 55%,  rgba(45,232,194,0.07) 0%, transparent 68%),
            radial-gradient(ellipse 500px 300px  at 20% 85%,  rgba(245,200,66,0.06) 0%, transparent 60%),
            linear-gradient(170deg, var(--bg-deep) 0%, var(--bg-mid) 100%);
          overflow-x: hidden;
          position: relative;
          padding: 1px 0;
        }

        .a2r-flow-wrapper::before {
          content: "";
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(80,130,210,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80,130,210,0.07) 1px, transparent 1px);
          background-size: 52px 52px;
          mask-image: radial-gradient(ellipse 120% 80% at 50% 20%, black 0%, transparent 90%);
        }

        .page {
          position: relative; z-index: 1;
          width:100%;
          max-width:1440px;
          padding: 0 20px;
          margin: 28px auto 24px;
        }

        .heading { text-align: center; margin-bottom: 22px; }
        .heading h1 {
          font-family: "Sora", sans-serif;
          font-size: clamp(26px, 3.6vw, 50px);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #eaf2ff;
          line-height: 1.1;
        }
        .heading h1 .accent { color: var(--gold); text-shadow: 0 0 30px rgba(245,200,66,0.5); }
        .heading p {
          margin-top: 10px;
          color: var(--ink-1);
          font-size: clamp(13px, 1.15vw, 16px);
          max-width: 820px;
          margin-left: auto; margin-right: auto;
        }

        .layout-shell { position: relative; }

        .connectors-svg {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 3;
          overflow: visible;
        }

        .layout {
          display: grid;
          grid-template-columns: 300px minmax(620px, 760px) 300px;
          gap: 0 44px;
          justify-content: center;
          align-items: stretch;
          position: relative;
          z-index: 2;
        }

        .panel {
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--panel);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .left-col { display: flex; flex-direction: column; gap: 12px; padding: 12px; }
        
        .data-card {
          border-radius: 14px;
          border: 1px solid rgba(90,173,255,0.24);
          background: var(--panel-hard);
          padding: 12px 12px 8px;
          display: flex;
          flex-direction: column;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, filter 220ms ease;
          will-change: transform;
        }
        
        .data-card.card-top { box-shadow: 0 0 0 1px rgba(90,173,255,0.16), 0 0 24px rgba(90,173,255,0.12); }
        
        .data-card.card-bot {
          margin-top: 64px;
          border-color: rgba(45,232,194,0.26);
          box-shadow: 0 0 0 1px rgba(45,232,194,0.14), 0 0 24px rgba(45,232,194,0.12);
        }
        
        .card-top .card-label { color: #8ab9f3; text-shadow: 0 0 10px rgba(90,173,255,0.24); }
        .card-bot .card-label { color: #71eecf; text-shadow: 0 0 10px rgba(45,232,194,0.24); }
        
        .card-label {
          font-family: "Sora", sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: #7a9ec8; margin-bottom: 6px;
        }
        
        .item { display: flex; align-items: center; gap: 9px; padding: 6px 0; border-top: 1px solid rgba(120,165,255,0.12); }
        .dot { flex-shrink:0; width:7px; height:7px; border-radius:50%; }
        .dot.blue   { background:var(--blue);   box-shadow:0 0 8px var(--blue),0 0 14px rgba(90,173,255,0.4); }
        .dot.teal   { background:var(--teal);   box-shadow:0 0 8px var(--teal),0 0 14px rgba(45,232,194,0.4); }
        .dot.gold   { background:var(--gold);   box-shadow:0 0 8px var(--gold),0 0 14px rgba(245,200,66,0.4); }
        .dot.vio    { background:var(--violet); box-shadow:0 0 8px var(--violet),0 0 14px rgba(167,139,250,0.4); }
        .dot.orange { background:var(--orange); box-shadow:0 0 8px var(--orange),0 0 14px rgba(255,140,66,0.4); }
        
        .item span { font-size:13px; font-weight:500; color:#cfe0ff; line-height:1.3; flex:1; }
        .card-top .item span { color: #d7e9ff; text-shadow: 0 0 10px rgba(90,173,255,0.25); }
        .card-bot .item span { color: #c9fff4; text-shadow: 0 0 10px rgba(45,232,194,0.28); }
        
        .rdot { flex-shrink:0; width:7px; height:7px; border-radius:50%; margin-left:auto; }
        .right-col { padding: 12px; }

        .output-card {
          height: 100%;
          border-radius: 14px;
          border: 1px solid rgba(167,139,250,0.26);
          background: var(--panel-hard);
          padding: 12px 12px 8px;
          display: flex; flex-direction: column;
          box-shadow: 0 0 0 1px rgba(167,139,250,0.14), 0 0 28px rgba(167,139,250,0.12);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, filter 220ms ease;
          will-change: transform;
        }
        
        .output-card .card-label { color:#b9a6ff; text-shadow:0 0 10px rgba(167,139,250,0.24); }
        .out-item { display:flex; align-items:flex-start; gap:10px; padding:7px 0; border-top:1px solid rgba(120,165,255,0.12); }
        .ldot { flex-shrink:0; width:7px; height:7px; border-radius:50%; margin-top:4px; }
        .out-item b { display:block; font-size:12.5px; font-weight:600; color:#dce9ff; }
        .out-item small { display:block; font-size:11px; color:#8daace; line-height:1.4; margin-top:1px; }
        
        .out-blue b { color:#d8e8ff; text-shadow:0 0 10px rgba(90,173,255,0.28); }
        .out-teal b { color:#d2fff6; text-shadow:0 0 10px rgba(45,232,194,0.28); }
        .out-vio b  { color:#e7dcff; text-shadow:0 0 10px rgba(167,139,250,0.28); }
        .out-gold b { color:#ffeeb8; text-shadow:0 0 10px rgba(245,200,66,0.3); }

        .core { display:flex; flex-direction:column; padding:16px 14px 12px; overflow:hidden; }
        .core-header { text-align:center; margin-bottom:12px; flex-shrink:0; }
        
        .engine-badge {
          display:inline-block; padding:6px 18px; border-radius:999px;
          border:1px solid rgba(245,200,66,0.5); color:var(--gold);
          background:rgba(245,200,66,0.1);
          font-family:"Sora",sans-serif; font-size:11px; font-weight:700;
          letter-spacing:0.1em; text-transform:uppercase;
          box-shadow:0 0 20px rgba(245,200,66,0.2);
        }
        
        .engine-sub { margin-top:7px; color:#8daace; font-size:13px; }
        .engine-grid { flex:1; position:relative; min-height:310px; }

        .center-orb {
          position:absolute;
          width:108px; height:108px;
          top:50%; left:50%; transform:translate(-50%,-50%);
          border-radius:50%;
          background: radial-gradient(circle at 35% 28%, #f5fff9, #97f1c8 45%, #1f8f63 82%);
          border:2px solid rgba(130,255,200,0.78);
          box-shadow:
            0 0 0 8px rgba(45,232,194,0.16),
            0 0 0 16px rgba(45,232,194,0.08),
            0 0 42px rgba(45,232,194,0.6),
            inset 0 0 30px rgba(225,255,242,0.46);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          text-align:center;
          font-family:"Sora",sans-serif; font-weight:700; font-size:11.5px;
          color:#0f3a2d; line-height:1.28; z-index:5;
          animation: orbPulse 2.8s ease-in-out infinite;
          transition: transform 220ms ease, filter 220ms ease;
          will-change: transform;
        }

        .center-orb::before {
          content:"";
          position:absolute;
          inset:-12px;
          border-radius:50%;
          border:1px solid rgba(130,255,200,0.56);
          box-shadow: 0 0 28px rgba(45,232,194,0.46), inset 0 0 18px rgba(115,250,194,0.2);
          animation: orbRing 2.8s ease-out infinite;
          pointer-events:none;
        }

        .center-orb::after {
          content:"";
          position:absolute;
          inset:-26px;
          border-radius:50%;
          border:1px solid rgba(130,255,200,0.24);
          filter: blur(0.4px);
          animation: orbHalo 2.8s ease-out infinite;
          pointer-events:none;
        }

        .node {
          --node-tx: 0px;
          --node-ty: 0px;
          --node-color: rgba(90,173,255,0.35);
          position:absolute;
          width:23%;
          border-radius:11px; padding:8px;
          text-align:center; font-size:11.5px; font-weight:600; line-height:1.3;
          color:#dcedff;
          background:
            linear-gradient(180deg, var(--node-color) 0%, rgba(18,30,54,0.95) 68%),
            rgba(18,30,54,0.93);
          border:1px solid rgba(130,175,255,0.3);
          box-shadow:0 6px 20px rgba(0,0,0,0.4);
          text-shadow: 0 0 10px rgba(90,173,255,0.22);
          transform: translate(var(--node-tx), var(--node-ty)) scale(1);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, filter 220ms ease;
          will-change: transform;
          z-index:4;
        }
        
        .node.n-top { --node-tx:-50%; --node-ty:0px; --node-color:rgba(90,173,255,0.26); top:3%;    left:50%; border-color:rgba(90,173,255,0.45);  box-shadow:0 0 0 1px rgba(90,173,255,0.25),0 0 18px rgba(90,173,255,0.24); }
        .node.n-tr  { --node-color:rgba(167,139,250,0.28); top:13%;   right:3%;                               border-color:rgba(167,139,250,0.4);  box-shadow:0 0 0 1px rgba(167,139,250,0.22),0 0 18px rgba(167,139,250,0.24); text-shadow:0 0 10px rgba(167,139,250,0.24); }
        .node.n-mr  { --node-tx:0px; --node-ty:-50%; --node-color:rgba(245,200,66,0.28); top:50%;    right:1%; border-color:rgba(245,200,66,0.4);   box-shadow:0 0 0 1px rgba(245,200,66,0.22),0 0 18px rgba(245,200,66,0.24); text-shadow:0 0 10px rgba(245,200,66,0.26); }
        .node.n-br  { --node-color:rgba(45,232,194,0.28); bottom:13%;right:3%;                               border-color:rgba(45,232,194,0.4);   box-shadow:0 0 0 1px rgba(45,232,194,0.22),0 0 18px rgba(45,232,194,0.24); text-shadow:0 0 10px rgba(45,232,194,0.24); }
        .node.n-bot { --node-tx:-50%; --node-ty:0px; --node-color:rgba(90,173,255,0.24); bottom:3%; left:50%; border-color:rgba(90,173,255,0.4);   box-shadow:0 0 0 1px rgba(90,173,255,0.22),0 0 18px rgba(90,173,255,0.24); }
        .node.n-bl  { --node-color:rgba(255,140,66,0.28); bottom:13%;left:3%;                                border-color:rgba(255,140,66,0.4);   box-shadow:0 0 0 1px rgba(255,140,66,0.22),0 0 18px rgba(255,140,66,0.24); text-shadow:0 0 10px rgba(255,140,66,0.25); }
        .node.n-ml  { --node-tx:0px; --node-ty:-50%; --node-color:rgba(45,232,194,0.28); top:50%;    left:1%;  border-color:rgba(45,232,194,0.4);   box-shadow:0 0 0 1px rgba(45,232,194,0.22),0 0 18px rgba(45,232,194,0.24); text-shadow:0 0 10px rgba(45,232,194,0.24); }
        .node.n-tl  { --node-color:rgba(246,153,203,0.28); top:13%;   left:3%;                                border-color:rgba(246,153,203,0.4);  box-shadow:0 0 0 1px rgba(246,153,203,0.22),0 0 18px rgba(246,153,203,0.24); text-shadow:0 0 10px rgba(246,153,203,0.24); }

        .cap-strip { margin-top:10px; display:grid; grid-template-columns:repeat(2,1fr); gap:10px; flex-shrink:0; }
        
        .cap {
          border-radius:12px; border:1px solid rgba(120,170,240,0.22);
          background:rgba(16,27,50,0.92);
          padding:10px 9px; text-align:center;
          display:flex; flex-direction:column; gap:4px;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, filter 220ms ease;
          will-change: transform;
        }
        
        .cap:nth-child(1) { border-color:rgba(90,173,255,0.3);  box-shadow:0 0 0 1px rgba(90,173,255,0.14),0 0 16px rgba(90,173,255,0.12); }
        .cap:nth-child(2) { border-color:rgba(167,139,250,0.3); box-shadow:0 0 0 1px rgba(167,139,250,0.14),0 0 16px rgba(167,139,250,0.12); }
        .cap strong { font-family:"Sora",sans-serif; font-size:12px; color:#d4e5ff; }
        .cap p { font-size:10.5px; color:#8daace; line-height:1.4; }
        .cap:nth-child(1) strong { color:#d5e8ff; text-shadow:0 0 9px rgba(90,173,255,0.25); }
        .cap:nth-child(2) strong { color:#ebdfff; text-shadow:0 0 9px rgba(167,139,250,0.25); }
        
        .cap.cap-val {
          border-color:rgba(167,139,250,0.3);
          box-shadow:0 0 0 1px rgba(167,139,250,0.14),0 0 16px rgba(167,139,250,0.12);
        }
        
        .cap.cap-post {
          border-color:rgba(45,232,194,0.3);
          box-shadow:0 0 0 1px rgba(45,232,194,0.14),0 0 16px rgba(45,232,194,0.12);
        }
        
        .cap.cap-val strong { color:#ebdfff; text-shadow:0 0 9px rgba(167,139,250,0.25); }
        .cap.cap-post strong { color:#cefff4; text-shadow:0 0 9px rgba(45,232,194,0.25); }

        .stream { fill:none; stroke-width:1.6; stroke-linecap:round; opacity:0.55; filter:drop-shadow(0 0 3px currentColor); }
        
        .flow {
          fill:none;
          stroke-width:6;
          stroke-linecap:round;
          stroke-dasharray:1 420;
          animation:flow 4s linear infinite;
          opacity:0.98;
          filter:drop-shadow(0 0 8px currentColor) drop-shadow(0 0 16px currentColor);
        }
        
        .flow.fast { animation-duration:2.6s; }
        .flow.slow { animation-duration:5.8s; }
        .flow.rev  { animation-direction:reverse; }
        
        @keyframes flow { to { stroke-dashoffset:-300; } }
        
        @keyframes orbPulse {
          0%, 100% {
            box-shadow:
              0 0 0 8px rgba(45,232,194,0.16),
              0 0 0 16px rgba(45,232,194,0.08),
              0 0 36px rgba(45,232,194,0.56),
              inset 0 0 28px rgba(225,255,242,0.45);
          }
          50% {
            box-shadow:
              0 0 0 12px rgba(45,232,194,0.22),
              0 0 0 24px rgba(45,232,194,0.11),
              0 0 60px rgba(45,232,194,0.82),
              inset 0 0 34px rgba(230,255,245,0.62);
          }
        }
        
        @keyframes orbRing {
          0%   { transform: scale(0.92); opacity: 0.7; }
          70%  { transform: scale(1.08); opacity: 0.18; }
          100% { transform: scale(1.16); opacity: 0; }
        }
        
        @keyframes orbHalo {
          0%   { transform: scale(0.9); opacity: 0.45; }
          75%  { transform: scale(1.14); opacity: 0.14; }
          100% { transform: scale(1.24); opacity: 0; }
        }

        .data-card:hover,
        .output-card:hover,
        .cap:hover {
          transform: translateY(-7px) scale(1.012);
          filter: brightness(1.04);
          box-shadow: 0 18px 34px rgba(0,0,0,0.44), 0 0 0 1px rgba(150,220,255,0.2), 0 0 28px rgba(120,190,255,0.18);
        }

        .node:hover {
          transform: translate(var(--node-tx), calc(var(--node-ty) - 7px)) scale(1.018);
          filter: brightness(1.06);
          box-shadow: 0 18px 30px rgba(0,0,0,0.44), 0 0 0 1px rgba(170,220,255,0.25), 0 0 24px rgba(120,190,255,0.22);
        }

        .center-orb:hover {
          transform: translate(-50%, -50%) scale(1.05);
          filter: brightness(1.08) saturate(1.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .data-card, .output-card, .cap, .node, .center-orb {
            transition: none;
          }
        }

          @media(max-width:1320px){
  .layout { grid-template-columns: 300px 450px 300px;  gap:40px; }
   
  .data-card.card-bot { margin-top: 0; } /* Cleans up alignment when stacked */
}
      `}</style>

      <div className="a2r-flow-wrapper">
        <main className="page">
          <header className="heading">
            <h1>
              <span className="accent">Intelligent Reconciliation</span>
            </h1>
            <p>AI-assisted accounting review pipeline for fast anomaly detection, explainable validation, and auditable correction posting.</p>
          </header>

          <div className="layout-shell" id="shell" ref={shellRef}>
            <svg className="connectors-svg" id="connSvg" ref={svgRef} aria-hidden="true" />

            <div className="layout">
              {/* LEFT COLUMN */}
              <aside className="panel left-col">
                <article className="data-card card-top">
                  <div className="card-label">Enterprise Sources</div>
                  <div className="item">
                    <div className="dot blue" />
                    <span>SAP ACDOCA Ledger Extract</span>
                    <div className="rdot dot blue" id="lr1" ref={el => nodesRef.current['lr1'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot blue" />
                    <span>BCF and Transaction Type Feeds</span>
                    <div className="rdot dot blue" id="lr2" ref={el => nodesRef.current['lr2'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot blue" />
                    <span>Master Data and Mapping Tables</span>
                    <div className="rdot dot blue" id="lr3" ref={el => nodesRef.current['lr3'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot blue" />
                    <span>Policy and Rule Configuration</span>
                    <div className="rdot dot blue" id="lr4" ref={el => nodesRef.current['lr4'] = el} />
                  </div>
                </article>

                <article className="data-card card-bot">
                  <div className="card-label">Accounting Context Inputs</div>
                  <div className="item">
                    <div className="dot teal" />
                    <span>Company Code and Fiscal Period</span>
                    <div className="rdot dot teal" id="lr5" ref={el => nodesRef.current['lr5'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot teal" />
                    <span>Provision Account Taxonomy</span>
                    <div className="rdot dot teal" id="lr6" ref={el => nodesRef.current['lr6'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot teal" />
                    <span>Historical Movements by MT Type</span>
                    <div className="rdot dot teal" id="lr7" ref={el => nodesRef.current['lr7'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot teal" />
                    <span>Tolerance &amp; Materiality Thresholds</span>
                    <div className="rdot dot teal" id="lr8" ref={el => nodesRef.current['lr8'] = el} />
                  </div>
                  <div className="item">
                    <div className="dot teal" />
                    <span>Human Review Preferences</span>
                    <div className="rdot dot teal" id="lr9" ref={el => nodesRef.current['lr9'] = el} />
                  </div>
                </article>
              </aside>

              {/* CENTRE COLUMN */}
              <section className="panel core" id="corePanel" ref={corePanelRef}>
                <header className="core-header">
                  <span className="engine-badge">Orchestration Layer</span>
                  <p className="engine-sub">Analyze, validate, explain, and generate balanced correction vouchers.</p>
                </header>
                
                <div className="engine-grid" id="engineGrid">
                  <div className="node n-top">Data Profiling<br />&amp; Normalization</div>
                  <div className="node n-tr">Rule Engine<br />Validation Checks</div>
                  <div className="node n-mr">Correction Draft<br />Generation</div>
                  <div className="node n-br">Audit Controls<br />&amp; Traceability</div>
                  <div className="node n-bot">Iteration Tracking<br />&amp; Re-Validation</div>
                  <div className="node n-bl">Policy-Aware<br />Reasoning</div>
                  <div className="node n-ml">Failure Code<br />Attribution</div>
                  <div className="node n-tl">Control Exception<br />Prioritization</div>
                  <div className="center-orb">Analyze<br />Validate<br />Correct</div>
                </div>

                <div className="cap-strip">
                  <article className="cap cap-val">
                    <strong>Validation Intelligence</strong>
                    <p>Maps each issue to checks, transaction drivers, and impacted accounting logic.</p>
                  </article>
                  <article className="cap cap-post">
                    <strong>Posting Guardrails</strong>
                    <p>Ensures debit-credit balance, policy consistency, and reviewer intervention points.</p>
                  </article>
                </div>
              </section>

              {/* RIGHT COLUMN */}
              <aside className="panel right-col">
                <article className="output-card">
                  <div className="card-label">Decision Outputs</div>
                  <div className="out-item out-blue">
                    <div className="ldot dot blue" id="rl1" ref={el => nodesRef.current['rl1'] = el} />
                    <div>
                      <b>Validation Status Grid</b>
                      <small>Pass, warning, and error state by account with check-level visibility.</small>
                    </div>
                  </div>
                  <div className="out-item out-teal">
                    <div className="ldot dot teal" id="rl2" ref={el => nodesRef.current['rl2'] = el} />
                    <div>
                      <b>Targeted Failure Breakdown</b>
                      <small>Clear reason codes, affected transaction types, and account-level impact.</small>
                    </div>
                  </div>
                  <div className="out-item out-vio">
                    <div className="ldot dot vio" id="rl3" ref={el => nodesRef.current['rl3'] = el} />
                    <div>
                      <b>Policy-Linked Rationale</b>
                      <small>Markdown-rendered explanation grounded in accounting rules and references.</small>
                    </div>
                  </div>
                  <div className="out-item out-teal">
                    <div className="ldot dot teal" id="rl4" ref={el => nodesRef.current['rl4'] = el} />
                    <div>
                      <b>Correction Voucher Proposals</b>
                      <small>Balanced debit-credit entries prepared for controlled posting flow.</small>
                    </div>
                  </div>
                  <div className="out-item out-blue">
                    <div className="ldot dot blue" id="rl5" ref={el => nodesRef.current['rl5'] = el} />
                    <div>
                      <b>Iteration Comparison</b>
                      <small>Before/after view showing quality improvement after each correction cycle.</small>
                    </div>
                  </div>
                  <div className="out-item out-gold">
                    <div className="ldot dot gold" id="rl6" ref={el => nodesRef.current['rl6'] = el} />
                    <div>
                      <b>Reviewer Workflow</b>
                      <small>Approve, reject, or refine corrections with human-in-the-loop governance.</small>
                    </div>
                  </div>
                  <div className="out-item out-blue">
                    <div className="ldot dot blue" id="rl7" ref={el => nodesRef.current['rl7'] = el} />
                    <div>
                      <b>Audit-Ready Trace</b>
                      <small>Full log of inputs, checks, rationale, edits, and posting decisions.</small>
                    </div>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
import React, { useState, useEffect, useRef } from 'react';

const INPUT_SOURCES = [
  { id: 'src0', title: 'PDF Files', sublabel: 'Digital, scanned or mixed', icon: '📄', iconClass: 'icon-pdf', tip: 'PDF Files|Upload single or multiple PDFs — DataGenie auto-detects type: digital, scanned, or mixed.', color: '#ff6b6b', speed: 'fast' },
  { id: 'src1', title: 'Word Documents', sublabel: '.docx text & structure', icon: '📝', iconClass: 'icon-word', tip: 'Word Documents|Upload .docx files — full text extracted for RAG and summarization.', color: '#4f8eff', speed: '' },
  { id: 'src2', title: 'Scanned Documents', sublabel: 'Image-based PDFs', icon: '🖨️', iconClass: 'icon-scan', tip: 'Scanned Documents|Scanned PDFs and image-based documents processed through Vision OCR agent.', color: '#ffe600', speed: 'mid' },
  { id: 'src3', title: 'Invoices & POs', sublabel: 'SAP supplier documents', icon: '🧾', iconClass: 'icon-img', tip: 'Invoices & POs|SAP supplier invoices, purchase orders — auto field extraction with custom schema.', color: '#3dd68c', speed: 'slow' },
  { id: 'src4', title: 'Contracts & Legal', sublabel: 'Clauses, parties & dates', icon: '📋', iconClass: 'icon-mixed', tip: 'Contracts & Legal|Legal contracts, agreements — extract clauses, parties, dates and key terms.', color: '#b47aff', speed: 'fast' },
  { id: 'src5', title: 'Multi-Doc Batches', sublabel: 'Merge & process together', icon: '🗂️', iconClass: 'icon-pdf', tip: 'Multi-Document Batches|Merge and process multiple PDFs simultaneously into a unified analysed output.', color: '#ff6b6b', speed: 'mid' }
];

const OUTPUT_CARDS = [
  { id: 'out0', title: 'Document Preview', desc: 'Type detection result — digital, scanned or mixed — with page count and filenames.', color: '#ff6b6b' },
  { id: 'out1', title: 'OCR Text Output', desc: 'Full extracted text from scanned pages via Azure Vision LLM, page by page.', color: '#ffe600' },
  { id: 'out2', title: 'RAG Q&A Answer', desc: 'Question answered from document with source page attribution via FAISS vectorstore.', color: '#3dd68c' },
  { id: 'out3', title: 'Extracted Fields (JSON)', desc: 'Structured fields extracted from any document using your custom JSON schema.', color: '#b47aff' },
  { id: 'out4', title: 'Page Summary', desc: 'Markdown summary of any specific page — key points, dates, and entities extracted.', color: '#4f8eff' },
  { id: 'out5', title: 'Signature Report', desc: 'Pages with digital AcroForm signatures and handwritten signatures detected by YOLO.', color: '#ffe600' },
  { id: 'out6', title: 'Searchable PDF', desc: 'OCR text embedded as a fully indexed, searchable PDF ready for archiving.', color: '#3dd68c' },
  { id: 'out7', title: 'Merged Document', desc: 'Multiple PDFs combined into a single unified document for processing or download.', color: '#ff6b6b' },
  { id: 'out8', title: 'Conversational Q&A', desc: 'Follow-up chat using the full LangGraph checkpoint state as grounded context.', color: '#4f8eff' }
];

const AGENTS_TOP = [
  { name: 'PDF\nIngestion', icon: '📄', desc: 'Type detection & text extract', styleClass: 'ac-red', tip: 'PDF Ingestion|Uploads PDFs and auto-detects document type: digital, scanned, or mixed. Extracts full text for downstream skills.' },
  { name: 'Word\nIngestion', icon: '📝', desc: '.docx text extraction', styleClass: 'ac-blue', tip: 'Word Ingestion|Uploads .docx files and extracts full text for RAG and summarization pipelines.' },
  { name: 'Vision\nOCR Agent', icon: '👁️', desc: 'Azure Vision LLM OCR', styleClass: 'ac-yel', tip: 'Vision OCR Agent|Converts scanned pages to images and extracts text via Azure Vision LLM — handles handwritten and printed text.' }
];

const AGENTS_BOTTOM = [
  { name: 'Page\nSummarizer', icon: '📑', desc: 'Per-page markdown summary', styleClass: 'ac-blue', tip: 'Page Summarizer|Extracts and summarizes a specific page from the document in clean markdown format.' },
  { name: 'Signature\nVerifier', icon: '✍️', desc: 'Digital & handwritten detect', styleClass: 'ac-green', tip: 'Signature Verifier|Detects AcroForm digital signatures and YOLO ONNX handwritten signatures across all PDF pages.' },
  { name: 'Searchable\nPDF Export', icon: '📁', desc: 'ReportLab indexed PDF', styleClass: 'ac-red', tip: 'Searchable PDF Generator|Converts OCR text into a fully searchable, indexed PDF via ReportLab — ready for archiving.' }
];

const CAPABILITIES = [
  { name: 'LangGraph\nMemory', icon: '🧠', desc: 'MemorySaver checkpointing', tip: 'LangGraph Memory|MemorySaver checkpointing — full AgentState persisted after every node so follow-up chat reads real computed data.' },
  { name: 'Flow\nBuilder', icon: '⚙️', desc: 'Custom skill pipelines', tip: 'Flow Builder|Users compose their own agent pipeline by chaining skills — prerequisite validation prevents invalid flows.' },
  { name: 'MCP\nPlug & Play', icon: '🔌', desc: 'Auto-discover skills', tip: 'MCP Plug & Play|Auto-discovers external skill servers via mcp_discovery.py — add new agents without changing core code.' }
];

const IDLE_MESSAGES = [
  'LangGraph engine ready · awaiting document',
  'Azure Vision OCR · connected',
  'FAISS vectorstore · standby',
  'MemorySaver checkpointing · active',
  'MCP plug-and-play · skill discovery ready',
  'LangGraph StateGraph · compiled & cached'
];

export default function DocumentAnalyserPipeline() {
  const [statusText, setStatusText] = useState('LangGraph engine ready · awaiting document');
  const [tooltip, setTooltip] = useState({ show: false, title: '', desc: '', x: 0, y: 0 });

  const layoutOuterRef = useRef(null);
  const arrowSvgRef = useRef(null);
  const engineBoxRef = useRef(null);
  const aiCoreRef = useRef(null);
  const elementsRef = useRef({});

  const drawArrows = () => {
    const svg = arrowSvgRef.current;
    const outer = layoutOuterRef.current;
    const engine = engineBoxRef.current;
    if (!svg || !outer || !engine) return;

    svg.innerHTML = '';
    const outerR = outer.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${outerR.width} ${outerR.height}`);

    const midY = (el) => el.getBoundingClientRect().top - outerR.top + el.getBoundingClientRect().height / 2;
    const rightX = (el) => el.getBoundingClientRect().right - outerR.left;
    const leftX = (el) => el.getBoundingClientRect().left - outerR.left;

    const engLeft = leftX(engine);
    const engRight = rightX(engine);
    const engTop = engine.getBoundingClientRect().top - outerR.top;
    const engH = engine.getBoundingClientRect().height;
    const engMidY = engTop + engH / 2;
    const spread = engH * 0.5;
    const entryStart = engMidY - spread / 2;

    // Build Left Channel Streams
    INPUT_SOURCES.forEach((src, i) => {
      const el = elementsRef.current[src.id];
      if (!el) return;
      const sx = rightX(el);
      const sy = midY(el);
      const ex = engLeft;
      const ey = entryStart + (i / (INPUT_SOURCES.length - 1)) * spread;

      const cp1x = sx + (ex - sx) * 0.45;
      const cp2x = sx + (ex - sx) * 0.65;
      const d = `M ${sx} ${sy} C ${cp1x} ${sy}, ${cp2x} ${ey}, ${ex} ${ey}`;

      const glow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      glow.setAttribute('d', d);
      glow.setAttribute('class', 'glow-path');
      glow.setAttribute('stroke', src.color);
      svg.appendChild(glow);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('class', `flow-path ${src.speed}`);
      path.setAttribute('stroke', src.color);
      path.style.animationDelay = `${i * 0.3}s`;
      svg.appendChild(path);
    });

    // Build Right Channel Streams
    OUTPUT_CARDS.forEach((card, i) => {
      const el = elementsRef.current[card.id];
      if (!el) return;
      const ex2 = leftX(el);
      const ey2 = midY(el);
      const sy2 = entryStart + (i / (OUTPUT_CARDS.length - 1)) * spread;

      const cp1x = engRight + (ex2 - engRight) * 0.35;
      const cp2x = engRight + (ex2 - engRight) * 0.6;
      const d = `M ${engRight} ${sy2} C ${cp1x} ${sy2}, ${cp2x} ${ey2}, ${ex2} ${ey2}`;
      const speeds = ['fast', 'mid', 'slow', 'fast', 'mid', 'slow', 'fast', 'mid', 'slow'];

      const glow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      glow.setAttribute('d', d);
      glow.setAttribute('class', 'glow-path');
      glow.setAttribute('stroke', card.color);
      svg.appendChild(glow);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('class', `flow-path ${speeds[i] || ''}`);
      path.setAttribute('stroke', card.color);
      path.style.animationDelay = `${i * 0.28}s`;
      svg.appendChild(path);
    });
  };

  useEffect(() => {
    const loadTimeout = setTimeout(drawArrows, 120);
    window.addEventListener('resize', drawArrows);

    let idleIdx = 0;
    const tickerInterval = setInterval(() => {
      setStatusText((current) => {
        const structuralTriggers = ['processed', 'Ingesting', 'orchestrating', 'activated'];
        if (structuralTriggers.some((t) => current.includes(t))) return current;
        idleIdx = (idleIdx + 1) % IDLE_MESSAGES.length;
        return IDLE_MESSAGES[idleIdx];
      });
    }, 3500);

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(tickerInterval);
      window.removeEventListener('resize', drawArrows);
    };
  }, []);

  // Structural Mouse Hover Actions
  const handleMouseEnter = (e, tipData) => {
    const [title, desc] = tipData.split('|');
    setTooltip({ show: true, title, desc, x: e.clientX + 14, y: e.clientY - 10 });
  };

  const handleMouseMove = (e) => {
    const x = e.clientX + 14;
    const y = e.clientY - 10;
    const tw = 240;
    const th = 80;

    const adjustedX = x + tw > window.innerWidth ? x - tw - 28 : x;
    const adjustedY = y + th > window.innerHeight ? y - th - 10 : y;

    setTooltip((prev) => ({ ...prev, x: adjustedX, y: adjustedY }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, show: false }));
  };

  // Node Iteration Triggers
  const flashCard = (id) => {
    const el = elementsRef.current[id];
    if (!el) return;
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 700);
  };

  const handleAgentClick = (id, label) => {
    flashCard(id);
    setStatusText(`Skill activated: ${label.replace('\n', ' ')}`);
  };

  const handleCoreClick = () => {
    const core = aiCoreRef.current;
    if (!core) return;
    core.style.borderColor = 'var(--accent2)';
    core.style.boxShadow = '0 0 28px rgba(255,230,0,0.25)';
    setTimeout(() => {
      core.style.borderColor = '';
      core.style.boxShadow = '';
    }, 800);
    setStatusText('LangGraph orchestrating · running skill nodes');
  };

  const handleSourceClick = (id, label) => {
    flashCard(id);
    setStatusText(`Ingesting ${label} · detecting document type`);
    setTimeout(() => handleCoreClick(), 400);
    setTimeout(() => setStatusText(`${label} processed · ready for skills`), 1400);
  };

  // Safe multi-line display mapper
  const formatName = (name) => {
    return name.split('\n').map((part, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {part}
      </React.Fragment>
    ));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .docanalyser-pipeline-wrapper {
          --bg: #0a0e1a;
          --surface: #0f1629;
          --surface2: #141c35;
          --border: rgba(99,160,255,0.12);
          --border-bright: rgba(99,160,255,0.3);
          --accent: #4f8eff;
          --accent2: #ffe600;
          --accent3: #3dd68c;
          --accent4: #ff6b6b;
          --accent5: #b47aff;
          --text: #e8eaf0;
          --text-muted: #7a86a8;
          --text-dim: #4a5370;

          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          font-family: 'Space Grotesk', sans-serif;
          position: relative;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .docanalyser-pipeline-wrapper *, 
        .docanalyser-pipeline-wrapper *::before, 
        .docanalyser-pipeline-wrapper *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .docanalyser-pipeline-wrapper::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(79,142,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,142,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .docanalyser-pipeline-wrapper .page {
          max-width: 1400px;
          margin: 0 auto;
          padding: 48px 32px 80px;
          position: relative;
          z-index: 1;
        }

        .docanalyser-pipeline-wrapper .header { text-align: center; margin-bottom: 56px; }
        .docanalyser-pipeline-wrapper .header h1 { font-size: clamp(28px,4vw,48px); font-weight: 700; letter-spacing: -0.5px; line-height: 1.1; }
        .docanalyser-pipeline-wrapper .header h1 span { color: var(--accent2); }
        .docanalyser-pipeline-wrapper .header p { margin-top: 12px; color: var(--text-muted); font-size: 15px; }

        .docanalyser-pipeline-wrapper .layout-outer { position: relative; }
        .docanalyser-pipeline-wrapper .layout { display: grid; grid-template-columns: 240px 1fr 280px; gap: 0; align-items: start; }
        
        .docanalyser-pipeline-wrapper #arrow-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; z-index: 0; }
        .docanalyser-pipeline-wrapper .left-col, .docanalyser-pipeline-wrapper .right-col, .docanalyser-pipeline-wrapper .center-col { position: relative; z-index: 1; }
        .docanalyser-pipeline-wrapper .left-col { padding-right: 32px; }
        .docanalyser-pipeline-wrapper .right-col { padding-left: 32px; }
        .docanalyser-pipeline-wrapper .center-col { padding: 0 8px; }

        .docanalyser-pipeline-wrapper .panel-title { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--text-dim); margin-bottom: 16px; padding-left: 4px; }
        .docanalyser-pipeline-wrapper .source-group { margin-bottom: 24px; }
        .docanalyser-pipeline-wrapper .source-group .group-label { font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--text-dim); margin-bottom: 10px; padding-left: 4px; }
        
        .docanalyser-pipeline-wrapper .source-item {
          display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: var(--surface); border: 0.5px solid var(--border); border-radius: 10px; margin-bottom: 8px; cursor: pointer; transition: border-color 0.2s, background 0.2s;
        }
        .docanalyser-pipeline-wrapper .source-item:hover, 
        .docanalyser-pipeline-wrapper .source-item.active { border-color: var(--border-bright); background: var(--surface2); }
        .docanalyser-pipeline-wrapper .source-item .icon { width: 32px; height: 32px; border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        
        .docanalyser-pipeline-wrapper .icon-pdf { background: rgba(255,107,107,0.15); }
        .docanalyser-pipeline-wrapper .icon-word { background: rgba(79,142,255,0.15); }
        .docanalyser-pipeline-wrapper .icon-scan { background: rgba(245,230,66,0.15); }
        .docanalyser-pipeline-wrapper .icon-img { background: rgba(61,214,140,0.15); }
        .docanalyser-pipeline-wrapper .icon-mixed { background: rgba(180,122,255,0.15); }
        
        .docanalyser-pipeline-wrapper .source-item .label { font-size: 13px; font-weight: 500; color: var(--text); }
        .docanalyser-pipeline-wrapper .source-item .sublabel { font-size: 11px; color: var(--text-muted); margin-top: 1px; }
        .docanalyser-pipeline-wrapper .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent3); margin-left: auto; flex-shrink: 0; box-shadow: 0 0 6px var(--accent3); }
        .docanalyser-pipeline-wrapper .dot-yellow { background: var(--accent2); box-shadow: 0 0 6px var(--accent2); }
        .docanalyser-pipeline-wrapper .dot-blue { background: var(--accent); box-shadow: 0 0 6px var(--accent); }
        .docanalyser-pipeline-wrapper .dot-pink { background: var(--accent4); box-shadow: 0 0 6px var(--accent4); }
        .docanalyser-pipeline-wrapper .dot-purple { background: var(--accent5); box-shadow: 0 0 6px var(--accent5); }

        .docanalyser-pipeline-wrapper .center-col { display: flex; flex-direction: column; align-items: center; }
        .docanalyser-pipeline-wrapper .engine-wrapper { background: var(--surface); border: 0.5px solid rgba(255,230,0,0.25); border-radius: 20px; padding: 28px 24px; width: 100%; position: relative; overflow: hidden; }
        .docanalyser-pipeline-wrapper .engine-wrapper::before { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 300px; height: 200px; background: radial-gradient(ellipse, rgba(255,230,0,0.05) 0%, transparent 70%); pointer-events: none; }
        .docanalyser-pipeline-wrapper .engine-label { text-align: center; margin-bottom: 20px; }
        .docanalyser-pipeline-wrapper .engine-badge { display: inline-block; background: rgba(255,230,0,0.1); border: 0.5px solid rgba(255,230,0,0.35); border-radius: 999px; padding: 5px 18px; font-size: 12px; font-weight: 600; letter-spacing: 1px; color: var(--accent2); text-transform: uppercase; margin-bottom: 8px; }
        .docanalyser-pipeline-wrapper .engine-subtitle { font-size: 12px; color: var(--text-muted); }
        .docanalyser-pipeline-wrapper .crew-label { font-size: 9px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--text-dim); text-align: center; margin-bottom: 12px; }
        
        .docanalyser-pipeline-wrapper .agents-top { display: flex; gap: 10px; justify-content: center; margin-bottom: 16px; }
        .docanalyser-pipeline-wrapper .ai-core-row { display: flex; gap: 10px; justify-content: center; align-items: center; margin-bottom: 16px; }
        .docanalyser-pipeline-wrapper .agents-bottom { display: flex; gap: 10px; justify-content: center; }

        .docanalyser-pipeline-wrapper .agent-card { background: var(--surface2); border: 0.5px solid var(--border); border-radius: 12px; padding: 12px 14px; text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s, transform 0.15s; min-width: 110px; flex: 1; max-width: 150px; z-index: 10; }
        .docanalyser-pipeline-wrapper .agent-card:hover { border-color: rgba(255,230,0,0.3); background: #1a2440; transform: translateY(-2px); }
        .docanalyser-pipeline-wrapper .agent-card .agent-icon { font-size: 18px; margin-bottom: 6px; }
        .docanalyser-pipeline-wrapper .agent-card .agent-name { font-size: 12px; font-weight: 600; color: var(--text); line-height: 1.3; }
        .docanalyser-pipeline-wrapper .agent-card .agent-desc { font-size: 10px; color: var(--text-muted); margin-top: 4px; line-height: 1.4; }
        
        .docanalyser-pipeline-wrapper .ac-red { border-color: rgba(255,107,107,0.25); }
        .docanalyser-pipeline-wrapper .ac-blue { border-color: rgba(79,142,255,0.25); }
        .docanalyser-pipeline-wrapper .ac-green { border-color: rgba(61,214,140,0.2); }
        .docanalyser-pipeline-wrapper .ac-yel { border-color: rgba(255,230,0,0.2); }
        .docanalyser-pipeline-wrapper .ac-purp { border-color: rgba(180,122,255,0.2); }

        .docanalyser-pipeline-wrapper .ai-core { width: 100px; height: 100px; border-radius: 50%; border: 1.5px solid rgba(255,230,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; position: relative; background: var(--surface2); flex-shrink: 0; transition: transform 0.2s; z-index: 10; }
        .docanalyser-pipeline-wrapper .ai-core:hover { transform: scale(1.05); }
        .docanalyser-pipeline-wrapper .ai-core::before { content: ''; position: absolute; inset: -6px; border-radius: 50%; border: 0.5px solid rgba(255,230,0,0.2); animation: pulse-ring 2.5s ease-out infinite; }
        .docanalyser-pipeline-wrapper .ai-core::after { content: ''; position: absolute; inset: -14px; border-radius: 50%; border: 0.5px solid rgba(255,230,0,0.08); animation: pulse-ring 2.5s ease-out infinite 0.8s; }
        
        @keyframes pulse-ring { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(1.15); } }
        .docanalyser-pipeline-wrapper .ai-core .ai-emoji { font-size: 24px; }
        .docanalyser-pipeline-wrapper .ai-core .ai-name { font-size: 10px; font-weight: 700; color: var(--accent2); letter-spacing: 1px; margin-top: 4px; }

        .docanalyser-pipeline-wrapper .capabilities { display: flex; gap: 8px; margin-top: 20px; padding-top: 18px; border-top: 0.5px solid var(--border); }
        .docanalyser-pipeline-wrapper .cap-card { flex: 1; background: rgba(10,14,26,0.6); border: 0.5px solid var(--border); border-radius: 10px; padding: 10px 8px; text-align: center; cursor: pointer; transition: border-color 0.2s; }
        .docanalyser-pipeline-wrapper .cap-card:hover { border-color: rgba(255,230,0,0.25); }
        .docanalyser-pipeline-wrapper .cap-card .cap-icon { font-size: 16px; margin-bottom: 5px; }
        .docanalyser-pipeline-wrapper .cap-card .cap-name { font-size: 11px; font-weight: 600; color: var(--text); line-height: 1.3; }
        .docanalyser-pipeline-wrapper .cap-card .cap-desc { font-size: 10px; color: var(--text-muted); margin-top: 2px; line-height: 1.4; }

        .docanalyser-pipeline-wrapper .status-bar { margin-top: 16px; background: var(--surface); border: 0.5px solid var(--border); border-radius: 10px; padding: 10px 16px; display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace; }
        .docanalyser-pipeline-wrapper .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent2); box-shadow: 0 0 6px var(--accent2); animation: blink 2s ease-in-out infinite; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        .docanalyser-pipeline-wrapper .status-text { color: var(--accent2); }

        .docanalyser-pipeline-wrapper .output-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; background: var(--surface); border: 0.5px solid var(--border); border-radius: 10px; margin-bottom: 10px; cursor: pointer; transition: border-color 0.2s, background 0.2s; }
        .docanalyser-pipeline-wrapper .output-item:hover, 
        .docanalyser-pipeline-wrapper .output-item.active { border-color: var(--border-bright); background: var(--surface2); }
        .docanalyser-pipeline-wrapper .output-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 4px; flex-shrink: 0; }
        .docanalyser-pipeline-wrapper .out-title { font-size: 13px; font-weight: 600; color: var(--text); }
        .docanalyser-pipeline-wrapper .out-desc { font-size: 11px; color: var(--text-muted); margin-top: 3px; line-height: 1.5; }

        .docanalyser-pipeline-wrapper .tooltip { position: fixed; background: var(--surface2); border: 0.5px solid rgba(255,230,0,0.25); border-radius: 10px; padding: 12px 16px; font-size: 12px; color: var(--text); max-width: 240px; pointer-events: none; opacity: 0; transition: opacity 0.15s; z-index: 999; line-height: 1.6; }
        .docanalyser-pipeline-wrapper .tooltip.show { opacity: 1; }
        .docanalyser-pipeline-wrapper .tooltip strong { color: var(--accent2); display: block; margin-bottom: 4px; font-size: 13px; }

        @keyframes highlight-flash { 0% { box-shadow: 0 0 0 0 rgba(255,230,0,0.35); } 70% { box-shadow: 0 0 0 8px rgba(255,230,0,0); } 100% { box-shadow: 0 0 0 0 rgba(255,230,0,0); } }
        .docanalyser-pipeline-wrapper .flash { animation: highlight-flash 0.6s ease-out; }

        @keyframes dash-flow { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } }
        .docanalyser-pipeline-wrapper .flow-path { fill: none; stroke-width: 1.5; stroke-dasharray: 6 5; opacity: 0.55; animation: dash-flow 3s linear infinite; }
        .docanalyser-pipeline-wrapper .flow-path.fast { animation-duration: 2s; }
        .docanalyser-pipeline-wrapper .flow-path.slow { animation-duration: 4.5s; }
        .docanalyser-pipeline-wrapper .flow-path.mid { animation-duration: 3.5s; }
        .docanalyser-pipeline-wrapper .glow-path { fill: none; stroke-width: 1; opacity: 0.12; }
      `}</style>

      <div className="docanalyser-pipeline-wrapper">
        <div className="page">
          <header className="header">
            <h1>How <span>Document Analyser</span> Works</h1>
            <p>AI-powered document intelligence — ingest any document and extract insights, OCR, fields &amp; answers</p>
          </header>

          <div className="layout-outer" id="layoutOuter" ref={layoutOuterRef}>
            <svg id="arrow-svg" ref={arrowSvgRef} aria-hidden="true" />

            <div className="layout" id="mainLayout">
              {/* LEFT BLOCK: INBOUND CHANNELS */}
              <aside className="left-col" id="leftCol">
                <div className="panel-title">Document Inputs</div>

                <div className="source-group">
                  <div className="group-label">Native Documents</div>
                  {INPUT_SOURCES.slice(0, 3).map((src) => (
                    <div
                      key={src.id}
                      id={src.id}
                      ref={(el) => (elementsRef.current[src.id] = el)}
                      data-tip={src.tip}
                      onMouseEnter={(e) => handleMouseEnter(e, src.tip)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSourceClick(src.id, src.title)}
                      className="source-item"
                    >
                      <div className={`icon ${src.iconClass}`}>{src.icon}</div>
                      <div>
                        <div className="label">{src.title}</div>
                        <div className="sublabel">{src.sublabel}</div>
                      </div>
                      <div className={`dot ${src.id === 'src0' ? 'dot-pink' : src.id === 'src1' ? 'dot-blue' : 'dot-yellow'}`} />
                    </div>
                  ))}
                </div>

                <div className="source-group">
                  <div className="group-label">Document Types</div>
                  {INPUT_SOURCES.slice(3).map((src) => (
                    <div
                      key={src.id}
                      id={src.id}
                      ref={(el) => (elementsRef.current[src.id] = el)}
                      data-tip={src.tip}
                      onMouseEnter={(e) => handleMouseEnter(e, src.tip)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSourceClick(src.id, src.title)}
                      className="source-item"
                    >
                      <div className={`icon ${src.iconClass}`}>{src.icon}</div>
                      <div>
                        <div className="label">{src.title}</div>
                        <div className="sublabel">{src.sublabel}</div>
                      </div>
                      <div className={`dot ${src.id === 'src4' ? 'dot-purple' : src.id === 'src5' ? 'dot-pink' : ''}`} />
                    </div>
                  ))}
                </div>
              </aside>

              {/* CENTER BLOCK: MULTI-SKILL GRAPH ORCHESTRATOR */}
              <section className="center-col">
                <div className="panel-title" style={{ textAlign: 'center' }}>Intelligence Engine</div>
                <div className="engine-wrapper" id="engineBox" ref={engineBoxRef}>
                  <div className="engine-label">
                    <div className="engine-badge">Document Analyser AI</div>
                    <div className="engine-subtitle">LangGraph Multi-Skill Agent</div>
                  </div>
                  <div className="crew-label">Skill Agent Crew</div>

                  <div className="agents-top">
                    {AGENTS_TOP.map((agent, idx) => (
                      <div
                        key={idx}
                        ref={(el) => (elementsRef.current[`top-agent-${idx}`] = el)}
                        data-tip={agent.tip}
                        onMouseEnter={(e) => handleMouseEnter(e, agent.tip)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleAgentClick(`top-agent-${idx}`, agent.name)}
                        className={`agent-card ${agent.styleClass}`}
                      >
                        <div className="agent-icon">{agent.icon}</div>
                        <div className="agent-name">{formatName(agent.name)}</div>
                        <div className="agent-desc">{agent.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="ai-core-row">
                    <div
                      ref={(el) => (elementsRef.current['mid-agent-0'] = el)}
                      data-tip="RAG Q&A Agent|Builds a FAISS vector store from document chunks and answers questions with source page attribution."
                      onMouseEnter={(e) => handleMouseEnter(e, "RAG Q&A Agent|Builds a FAISS vector store from document chunks and answers questions with source page attribution.")}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleAgentClick('mid-agent-0', 'RAG Q&A\nAgent')}
                      className="agent-card ac-green"
                    >
                      <div className="agent-icon">🔎</div>
                      <div className="agent-name">RAG Q&A<br />Agent</div>
                      <div className="agent-desc">FAISS vectorstore + LLM</div>
                    </div>

                    <div className="ai-core" onClick={handleCoreClick} id="aiCore" ref={aiCoreRef}>
                      <div className="ai-emoji">⚡</div>
                      <div className="ai-name">DOC AI</div>
                    </div>

                    <div
                      ref={(el) => (elementsRef.current['mid-agent-1'] = el)}
                      data-tip="Field Extractor|Extracts structured fields from documents using an editable JSON schema. Returns data in your custom format."
                      onMouseEnter={(e) => handleMouseEnter(e, "Field Extractor|Extracts structured fields from documents using an editable JSON schema. Returns data in your custom format.")}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleAgentClick('mid-agent-1', 'Field\nExtractor')}
                      className="agent-card ac-purp"
                    >
                      <div className="agent-icon">🧾</div>
                      <div className="agent-name">Field<br />Extractor</div>
                      <div className="agent-desc">Custom JSON schema output</div>
                    </div>
                  </div>

                  <div className="agents-bottom">
                    {AGENTS_BOTTOM.map((agent, idx) => (
                      <div
                        key={idx}
                        ref={(el) => (elementsRef.current[`bot-agent-${idx}`] = el)}
                        data-tip={agent.tip}
                        onMouseEnter={(e) => handleMouseEnter(e, agent.tip)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleAgentClick(`bot-agent-${idx}`, agent.name)}
                        className={`agent-card ${agent.styleClass}`}
                      >
                        <div className="agent-icon">{agent.icon}</div>
                        <div className="agent-name">{formatName(agent.name)}</div>
                        <div className="agent-desc">{agent.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="capabilities">
                    {CAPABILITIES.map((cap, idx) => (
                      <div
                        key={idx}
                        ref={(el) => (elementsRef.current[`cap-${idx}`] = el)}
                        data-tip={cap.tip}
                        onMouseEnter={(e) => handleMouseEnter(e, cap.tip)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleAgentClick(`cap-${idx}`, cap.name)}
                        className="cap-card"
                      >
                        <div className="cap-icon">{cap.icon}</div>
                        <div className="cap-name">{formatName(cap.name)}</div>
                        <div className="cap-desc">{cap.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="status-bar">
                    <div className="status-dot" />
                    <span className="status-text" id="statusText">{statusText}</span>
                  </div>
                </div>
              </section>

              {/* RIGHT BLOCK: OUTBOUND PRODUCTS */}
              <aside className="right-col" id="rightCol">
                <div className="panel-title" style={{ textAlign: 'right' }}>Intelligence Outputs</div>
                {OUTPUT_CARDS.map((card) => (
                  <div
                    key={card.id}
                    id={card.id}
                    ref={(el) => (elementsRef.current[card.id] = el)}
                    onClick={() => flashCard(card.id)}
                    className="output-item"
                  >
                    <div className="output-dot" style={{ background: card.color, boxShadow: `0 0 6px ${card.color}` }} />
                    <div>
                      <div className="out-title">{card.title}</div>
                      <div className="out-desc">{card.desc}</div>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </div>

        {/* TOOLTIP RENDERING BLOCKS */}
        <div className={`tooltip ${tooltip.show ? 'show' : ''}`} id="tooltip" style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}>
          <strong>{tooltip.title}</strong>
          {tooltip.desc}
        </div>
      </div>
    </>
  );
}
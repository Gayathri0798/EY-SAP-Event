import { useEffect, useRef } from "react";
import "../styles/pricewise.css";

export default function PricewisePipeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const svg = root.querySelector("#pipeline-svg");
    const svgGroup = root.querySelector("#wires-group");
    const inputCards = root.querySelectorAll(".input-card");
    const outputCards = root.querySelectorAll(".output-card");

    const calculateLines = () => {
      if (!svg || !svgGroup) return;

      svgGroup.innerHTML = "";

      const svgRect = svg.getBoundingClientRect();
      const hub = root.querySelector("#center-trigger");
      if (!hub) return;

      const hubRect = hub.getBoundingClientRect();

      const cx = hubRect.left + hubRect.width / 2 - svgRect.left;
      const cy = hubRect.top + hubRect.height / 2 - svgRect.top;

      inputCards.forEach((card) => {
        const r = card.getBoundingClientRect();

        const x1 = r.right - svgRect.left;
        const y1 = r.top + r.height / 2 - svgRect.top;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        const midX = (x1 + cx) / 2;

        path.setAttribute(
          "d",
          `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${cy}, ${cx} ${cy}`
        );
        path.setAttribute("stroke", card.dataset.color);
        path.setAttribute("fill", "none");
        path.setAttribute("opacity", "0.3");

        svgGroup.appendChild(path);
      });

      outputCards.forEach((card) => {
        const r = card.getBoundingClientRect();

        const x2 = r.left - svgRect.left;
        const y2 = r.top + r.height / 2 - svgRect.top;

        const midX = (cx + x2) / 2;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        path.setAttribute(
          "d",
          `M ${cx} ${cy} C ${midX} ${cy}, ${midX} ${y2}, ${x2} ${y2}`
        );
        path.setAttribute("stroke", card.dataset.color);
        path.setAttribute("fill", "none");
        path.setAttribute("opacity", "0.3");

        svgGroup.appendChild(path);
      });
    };

    /** Hover interactions **/
    inputCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("active-card-glow");
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("active-card-glow");
      });
    });

    outputCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("active-card-glow");
      });

      card.addEventListener("mouseleave", () => {
        card.classList.remove("active-card-glow");
      });
    });

    calculateLines();
    window.addEventListener("resize", calculateLines);

    return () => {
      window.removeEventListener("resize", calculateLines);
    };
  }, []);

  return (
    <div ref={containerRef} className="pw-wrapper">

      {/* SVG */}
      <svg id="pipeline-svg" className="pw-svg">
        <g id="wires-group"></g>
      </svg>

      {/* LEFT INPUTS */}
      <div className="pw-left">
        <h3>Input Ecosystem</h3>

        {[
          ["SAP S4/HANA", "#0EA5E9"],
          ["SAP ARIBA", "#A855F7"],
          ["OTHER ERP SYSTEM", "#10B981"],
          ["CRM SYSTEM", "#EC4899"]
        ].map(([label, color]) => (
          <div
            key={label}
            className="input-card glass-mirror"
            data-color={color}
          >
            {label}
          </div>
        ))}
      </div>

      {/* CENTER */}
      <div className="pw-center">
        <div id="center-trigger" className="engine">
          🧠 Pricing Engine
        </div>
      </div>

      {/* RIGHT OUTPUTS */}
      <div className="pw-right">
        <h3>Generated Insights</h3>

        {[
          ["PRICING RECOMMENDATION", "#0EA5E9"],
          ["DEAL RISK", "#F43F5E"],
          ["MARGIN ANALYSIS", "#A855F7"]
        ].map(([label, color]) => (
          <div
            key={label}
            className="output-card glass-mirror"
            data-color={color}
          >
            {label}
          </div>
        ))}
      </div>

    </div>
  );
}

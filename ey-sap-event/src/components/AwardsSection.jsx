import { useState } from "react";
import "../styles/awards-section.css";

export default function AwardsSection() {
  const awards = [
    {
      image: "/images/ai-awards.webp",
      title: "Best AI for Sustainable Development",
      description: "EY ESG Materiality Manager",
    },
    {
      image: "/images/awards.webp",
      title: "Best AI Usage in Finance",
      description: "EY Finance Data Hub",
    },
    {
      image: "/images/winner.webp",
      title: "SAP Hack2Build on AI using Joule Skills",
      description: "Innovation Excellence Award",
    },
    {
      image: "/images/ai-awards.webp",
      title: "Best AI Solution Award",
      description: "Sustainable Development category",
    },
    {
      image: "/images/stratus-award.webp",
      title: "SAP Pinnacle Award",
      description: "Extensibility and Clean Core",
    },
  ];

  const [current, setCurrent] = useState(1);

  const next = () =>
    setCurrent((prev) => (prev + 1) % awards.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? awards.length - 1 : prev - 1
    );

  return (
    <section className="awards-section-dark">

      <div className="carousel-wrapper">

        {/* LEFT ARROW */}
        <button className="nav-arrow left" onClick={prev}>
          ‹
        </button>

        <div className="center-carousel">
  {awards.map((item, index) => {
    let position = "hidden";  // ✅ default hidden

    if (index === current) {
      position = "active";
    } 
    else if (
      index === (current - 1 + awards.length) % awards.length
    ) {
      position = "prev";
    } 
    else if (
      index === (current + 1) % awards.length
    ) {
      position = "next";
    }

    return (
      <div key={index} className={`carousel-card ${position}`}>
        <img src={item.image} alt="" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    );
  })}
</div>
        {/* RIGHT ARROW */}
        <button className="nav-arrow right" onClick={next}>
          ›
        </button>

      </div>

      {/* ✅ SLIDE COUNT */}
      <p className="slide-count">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(awards.length).padStart(2, "0")}
      </p>

    </section>
  );
}
``
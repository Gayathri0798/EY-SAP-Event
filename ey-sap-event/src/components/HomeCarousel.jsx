import { useState, useEffect } from "react";
import "../styles/carousel.css";
import PrinciplesGrid from "../components/PrinciplesSection";
import AwardsSection from "../components/AwardsSection";

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
  const slides = [
    {
      type: "video",
      title: [
        "Join EY at SAP NOW "
      ],
      desc: "Experience the future of enterprise AI through live innovation showcases, intelligent automation and next-generation transformation capabilities.",
      bg: "/videos/sap-now.mp4",
      showLogos: true,
    },
    {
      type: "image",
      title: [
        "How will AI redefine the future of enterprise?"
      ],
      desc: "AI is transforming enterprises through intelligent automation, autonomous decision-making and scalable innovation.",
      bg: "/images/slide-1.jpg"
    },
    {
      type: "image",
      title: [
        "What if your enterprise",
        "could build its own AI workforce?"
      ],
      desc: "Create intelligent agents that automate workflows, enhance decisions and accelerate business operations at scale.",
      bg: "/images/slide-2.png"
    },
    {
      type: "image",
      title: [
        "Building autonomous agents starts with the right ecosystem"
      ],
      desc: "Access reusable agents, enterprise skills and automation assets designed to accelerate intelligent transformation.",
      bg: "/images/slide-3.jpeg",
      fontSize: "50px"
    },
    {
      type: "image",
      title: [
        "How can AI create measurable business impact?"
      ],
      desc: "Explore AI-powered solutions transforming sales, finance, procurement, sustainability and enterprise operations.",
      bg: "/images/slide-4.png"
    },
    {
      type: "image",
      title: [
        "AI that works inside the enterprise — securely, responsibly, at scale."
      ],
      desc: "Enterprise-grade AI orchestration built for SAP ecosystems.",
      bg: "/images/slide-5.png"
    }
  ];

  useEffect(() => {
    // if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);//paused

  //onMouseEnter={() => setPaused(true)}
//onMouseLeave={() => setPaused(false)}
  return (
    <>
    <div className="carousel"
>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >

          {/* ✅ FIXED IMAGE RENDER */}
          {slide.type === "video" ? (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="video-bg"
  >
    <source src={slide.bg} type="video/mp4" />
  </video>
) : (
  <img
    src={slide.bg}
    alt=""
    className="hero-bg"
  />
)}


          <div className="overlay"></div>

          <div className="hero-content-left">

            {slide.tag && <span className="tag">{slide.tag}</span>}
            {slide.showLogos && (
    <div className="logos">
      <img src="/images/logo.png" alt="EY Logo" />
      <img src="/images/image.png" alt="SAP Logo" className="sap-logo" />
    </div>
  )}

            <h1>
              {slide.title.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h1>
            

            <div className="desc-section">
              <div className="vertical-line"></div>
              <p>{slide.desc}</p>
            </div>

          </div>

        </div>
      ))}

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
    
<PrinciplesGrid />
      <AwardsSection />
      </>
  );
}

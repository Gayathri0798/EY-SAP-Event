import { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";
// import PrinciplesGrid from "../components/PrinciplesSection";
import AwardsSection from "../components/AwardsSection";

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
  
    const togglePlay = () => {
      if (!videoRef.current) return;
  
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(!videoRef.current.paused);
    }
  }, []);
    // const handleTimeUpdate = () => {
    //   const video = videoRef.current;
    //   if (!video) return;
  
    //   const percent = (video.currentTime / video.duration) * 100;
    //   setProgress(percent);
    // };
  
    const handleSeek = (e) => {
      const video = videoRef.current;
      if (!video) return;
  
      const rect = e.target.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
  
      const newTime = (clickX / width) * video.duration;
      video.currentTime = newTime;
    };
    const handleTimeUpdate = () => {
      const video = videoRef.current;
      if (!video) return;
  
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };
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
      enableAudio: false,
      duration: 10000
    },
    {
      type: "image",
      title: [
        "How will AI redefine the future of enterprise?"
      ],
      desc: "AI is transforming enterprises through intelligent automation, autonomous decision-making and scalable innovation.",
      bg: "/images/slide-1.jpg",
      duration: 10000
    },
    {
      type: "image",
      title: [
        "What if your enterprise",
        "could build its own AI workforce?"
      ],
      desc: "Create intelligent agents that automate workflows, enhance decisions and accelerate business operations at scale.",
      bg: "/images/slide-2.png",
      duration: 10000
    },
    {
      type: "image",
      title: [
        "Building autonomous agents starts with the right ecosystem"
      ],
      desc: "Access reusable agents, enterprise skills and automation assets designed to accelerate intelligent transformation.",
      bg: "/images/slide-3.jpeg",
      fontSize: "50px",
      duration: 10000
    },
    {
      type: "image",
      title: [
        "How can AI create measurable business impact?"
      ],
      desc: "Explore AI-powered solutions transforming sales, finance, procurement, sustainability and enterprise operations.",
      bg: "/images/slide-4.png"
      ,duration: 10000
    },
    {
      type: "image",
      title: [
        "AI that works inside the enterprise — securely, responsibly, at scale."
      ],
      desc: "Enterprise-grade AI orchestration built for SAP ecosystems.",
      bg: "/images/slide-5.png",
      duration: 10000
    }
  ];
// Set Interval
useEffect(() => {
  const timer = setTimeout(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, slides[current].duration || 10000);

  return () => clearTimeout(timer);
}, [current]);
const videoContainerRef = useRef(null);
const [isFullscreen, setIsFullscreen] = useState(false);
const [hasTriggered, setHasTriggered] = useState(false);

useEffect(() => {
  const video = videoRef.current;
  const section = videoContainerRef.current;

  if (!video || !section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasTriggered) {
        video.play().catch(() => {});
        setIsPlaying(true);

        setIsFullscreen(true);   // ✅ FULLSCREEN TRIGGER
        setHasTriggered(true);  // ✅ prevent loop
      }

      if (!entry.isIntersecting) {
        video.pause();
        setIsPlaying(false);
      }
    },
    {
      threshold: 0.6,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, [hasTriggered]);
useEffect(() => {
  if (!isFullscreen) return;

  let scrollAmount = 0;

  const handleWheel = (e) => {
    scrollAmount += Math.abs(e.deltaY);

    if (scrollAmount > 200) {
      setTimeout(() => {
        setIsFullscreen(false);
      }, 200);
    }
  };

  window.addEventListener("wheel", handleWheel);

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [isFullscreen]);

  const slideVideoRefs = useRef([]);
useEffect(() => {
  slideVideoRefs.current.forEach((video, i) => {
    if (!video) return;

    const slide = slides[i];

    if (i === current) {
      if(video.paused){
      video.currentTime = 0;

      if (slide.enableAudio) {
        video.muted = false;   // ✅ turn sound ON
      } else {
        video.muted = true;    // ✅ keep others muted
      }

      video.play().catch(() => {});}
    } else {
      video.pause();
    }
  });
}, [current]);


  return (
    <>
    <div className="carousel"
>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >

          {/* FIXED IMAGE RENDER */}
          {slide.type === "video" ? (
  <video
    ref={(el) => (slideVideoRefs.current[index] = el)}
    autoPlay
    loop
    muted={!slide.enableAudio}
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
      <img src="/images/sap-logo.png" alt="SAP Logo" className="sap-logo" />
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
    
{/* <PrinciplesGrid /> */}
<div className={`home-video-section ${isFullscreen ? "fullscreen" : ""}`} ref={videoContainerRef}>
  <div className="home-video-floating">

    <video
      ref={videoRef}
      loop
      playsInline
      onClick={togglePlay}
      onTimeUpdate={handleTimeUpdate}
      poster="/images/aiface.jpg"
    >
      <source src="/videos/sapHome.mp4" type="video/mp4" />
    </video>

    {/* GLASS OVERLAY */}
    {!isPlaying && (
      <div className="home-video-overlay" onClick={togglePlay}>
        <div className="home-play-circle">▶</div>
      </div>
    )}

    {/* CONTROLS */}
    <div className="home-video-controls">
      <div className="home-progress-bar" onClick={handleSeek}>
        <div
          className="home-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

  </div>
</div>
      <AwardsSection />
      </>
  );
}

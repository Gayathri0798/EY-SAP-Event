import { useState } from "react";
import "../styles/talk-to-experts.css";

export default function TalkToExperts() {
  const experts = [
    {
      name: "Mahesh Makhija",
      role: "India Technology Consulting Leader, EY",
      image: "/images/mahesh.png",
      text: "I wanted to recognize the strong contribution NITRO team has made to the Agent Controllership Suite (ACS) workstream. As part of the highly strategic 1EY Finance transformation, this work requires both execution excellence and forward looking thinking—and the team’s contributions have materially shaped that trajectory. From an innovation standpoint, NITRO has elevated ACS by translating complex agent led concepts into tangible artifacts. The ACS engineering guidelines are a clear example, and the team’s influence on the product engineering/architecture has ensured innovation is anchored in scalable, governable, and reusable foundations.",
    },
    {
      name: "Hari Balaji",
      role: "Partner, Technology ConsultingGenAI | AI-led Transformation, EY",
      image: "/images/hari-balaji.png",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Abhinav Johri ",
      role: "SAP Integration",
      image: "/images/abhinav-jhori.png",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Sudha S Gathala ",
      role: "Director - AI led Digital and Emerging Technology",
      image: "/images/sudha.png",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Shomik",
      role: "SAP Integration",
      image: "/images/expert3.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Surinder Nanda",
      role: "SAP Integration",
      image: "/images/expert3.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Uday",
      role: "SAP Integration",
      image: "/images/expert3.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Venu",
      role: "SAP Integration",
      image: "/images/expert3.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Balaji",
      role: "SAP Integration",
      image: "/images/expert3.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
  ];

//   const visibleCount = 3;
  const [active, setActive] = useState(0);

  const next = () => {
  setActive((prev) =>
    prev === experts.length - 1 ? 0 : prev + 1
  );
};

const prev = () => {
  setActive((prev) =>
    prev === 0 ? experts.length - 1 : prev - 1
  );
};
  

  return (
    <div className="experts-page">
      <div className="heading">Talk to our Experts</div>

      {/* <h2 className="experts-title">
        What people are saying about us
      </h2> */}

      <div className="experts-container">
        {/* ✅ LEFT MAIN PROFILE */}
        <div className="experts-main">
          {/* BIG CIRCLE (CENTER) */}
          <div className="expert-content">
            <div className="content-circle">
              <p>{experts[active].text}</p>
            </div>
          </div>

          {/* SMALL PROFILE (OVERLAY) */}
          <div className="expert-profile">
            <img
              src={experts[active].image}
              alt={experts[active].name}
              className="main-avatar"
            />
            <p className="expert-name">{experts[active].name}</p>
            <p className="expert-role">{experts[active].role}</p>
          </div>
        </div>

        {/* ✅ RIGHT SIDE CAROUSEL */}

<div className="expert-carousel">

  {/* TOP ARROW */}
  <button className="arrow top" onClick={prev}>▲</button>

  {/* VIEWPORT */}
  <div className="carousel-window">
    <div
      className="carousel-track"
      style={{
        transform: `translateY(-${active * 90}px)`
      }}
    >
      {experts.map((item, i) => (
        <div
          key={i}
          className={`carousel-item ${i === active ? "active" : ""}`}
          onClick={() => setActive(i)}
        >
          <img src={item.image} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* BOTTOM ARROW ✅ FIXED */}
  <button className="arrow bottom" onClick={next}>▼</button>

</div>

      </div>
    </div>
  );
}

import { useState } from "react";
import "../styles/talk-to-experts.css";

export default function TalkToExperts() {
  const experts = [
    {
      name: "Mahesh Makhija",
      role: "India Technology Consulting Leader, EY",
      image: "/images/experts/mahesh.png",
      text: "Leads Technology Consulting at EY India, helping organizations navigate the shift from digital transformation to AI-driven enterprise reinvention. A recognized thought leader on Generative AI, Agentic AI, Responsible AI, and emerging technologies, he works closely with business leaders to translate innovation into measurable business outcomes. Through his advisory work, industry research, and frequent speaking engagements, he helps organizations build scalable AI strategies, modernize operations, and create the foundations for the autonomous enterprise of the future.",
    },
    {
      name: "Surinder Nanda",
      role: "SAP Integration",
      image: "/images/experts/surinder.png",
      text: "Advises organizations on transforming complex business challenges into sustainable growth opportunities through SAP-led enterprise transformation. With extensive experience helping global organizations modernize their core operations, he works with business and technology leaders to drive process excellence, accelerate business value, and deliver large-scale transformation outcomes. His focus is on helping enterprises build agile, resilient, and future-ready operating models.",
    },
    {
      name: "Bhavana Advani",
      role: "SAP Alliance Lead - Partner",
      image: "/images/experts/bhavanaAdvani.png",
      text: "SAP Alliance Leader at EY India, helping organizations accelerate business transformation by connecting strategic priorities with the latest SAP innovations and ecosystem capabilities. Working closely with clients, SAP leadership, and technology stakeholders, she enables enterprises to unlock greater value from their SAP investments, drive innovation at scale, and adopt next-generation capabilities that deliver measurable business outcomes.",
    },
    {
      name: "Hari Balaji",
      role: "Partner, Technology ConsultingGenAI | AI-led Transformation, EY",
      image: "/images/experts/hari-balaji.png",
      text: "Advises organizations on leveraging Generative AI and Agentic AI for digital transformation and business optimization. With a deep understanding of AI technologies and industry best practices, he helps clients design and implement tailored solutions that drive operational efficiency and competitive advantage.",
    },
    {
      name: "Abhinav Johri ",
      role: "SAP Integration",
      image: "/images/experts/abhinav-jhori.png",
      text: "Advises organizations on leveraging SAP solutions for digital transformation and business optimization. With a deep understanding of SAP technologies and industry best practices, he helps clients design and implement tailored solutions that drive operational efficiency and competitive advantage.",
    },
    {
      name: "Sudha S Gathala ",
      role: "Director - AI led Digital and Emerging Technology",
      image: "/images/experts/sudha.png",
      text: "Leads AI adoption initiatives at EY, helping organizations identify high-value AI opportunities and translate business challenges into actionable transformation roadmaps. Working closely with executive stakeholders, he facilitates AI strategy and innovation workshops, enabling clients to prioritize use cases, accelerate value realization, and scale AI adoption across the enterprise. He also plays a key role in advancing SAP Business AI adoption, helping organizations unlock the full potential of AI-powered business processes and intelligent enterprise capabilities.",
    },
    {
      name: "Shomik Dasgupta",
      role: "SAP Integration",
      image: "/images/experts/shomik.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Udit Aggarwal",
      role: "SAP Integration",
      image: "/images/experts/udit.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Venu Sarangadharan",
      role: "SAP Integration",
      image: "/images/experts/venu.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
    {
      name: "Baldev Sri Edara",
      role: "SAP Integration",
      image: "/images/experts/baldev.jpg",
      text: "The overall sentiment has been very positive. Everyone consistently highlighted how well-structured, intuitive, and realistic the experience felt - especially the scenario-based questions, accuracy of questions/prompt and impressive speech-to-text responsiveness and the availability of a detailed feedback report at the end of the session. The tool helps presenters focus on structure, timing, and critical talking points. Our team plans to use it before their upcoming presentations because they see it adds real value. The flexibility across different permit types and scenarios to practice was also called out as a standout feature, along with the reflective follow up questions that simulate a genuine discussion.",
    },
  ];

  //   const visibleCount = 3;
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
  };

  return (
    <div className="experts-page">
      <div className="heading">Know our Experts</div>

      {/* <h2 className="experts-title">
        What people are saying about us
      </h2> */}

      <div className="experts-container">
        {/*   LEFT MAIN PROFILE */}
        <div className="experts-main">
          {/* BIG CIRCLE (CENTER) */}
          <div className="expert-content">
            <div className="content-circle">
              <p>{experts[active].text}</p>
            </div>
          </div>

          {/* SMALL PROFILE (OVERLAY) */}
          <div
            className="expert-profile"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Keeps image, name, and role perfectly centered horizontally
              justifyContent: "center",
              textAlign: "center",
              width: "180px", // Gives the block a fixed width so it doesn't expand/shrink
              position: "absolute", // Assuming this overlays on the circle graphic in "86a48bf7-cc16-4a2f-aeb0-38b1d289e5a5"
              left: "15%", // Adjust this positioning offset to match your exact visual preference
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <img
              src={experts[active].image}
              alt={experts[active].name}
              className="main-avatar"
              style={{
                width: "120px", // Lock the image width explicitly
                height: "120px", // Lock the image height explicitly
                borderRadius: "50%", // Ensures a perfect circle shape
                objectFit: "cover", // Prevents image distortion if the aspect ratio varies
                flexShrink: 0, // Crucial: Prevents text from squeezing or shrinking the image size
                marginBottom: "12px", // Fixed separation space before the name text
              }}
            />

            <p
              className="expert-name"
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#ffffff",
                margin: "0 0 4px 0",
                width: "100%", // Restricts text box width to the parent profile block boundary
                whiteSpace: "normal", // Allows long names to break wrap elegantly onto a second line
                wordBreak: "break-word", // Prevents extra long strings from breaking outside layout margins
              }}
            >
              {experts[active].name}
            </p>

            <p
              className="expert-role"
              style={{
                fontSize: "0.85rem",
                color: "#cccccc",
                margin: "0",
                width: "100%",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {experts[active].role}
            </p>
          </div>
        </div>

        {/*   RIGHT SIDE CAROUSEL */}

        <div className="expert-carousel">
          {/* TOP ARROW */}
          <button className="arrow top" onClick={prev}>
            ▲
          </button>

          {/* VIEWPORT */}
          <div className="carousel-window">
            <div
              className="carousel-track"
              style={{
                transform: `translateY(-${active * 90}px)`,
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

          {/* BOTTOM ARROW   FIXED */}
          <button className="arrow bottom" onClick={next}>
            ▼
          </button>
        </div>
      </div>
    </div>
  );
}

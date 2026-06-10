import "../styles/aiSap.css";
import { Link } from "react-router-dom"


export default function EnterpriseSolutions() {
  const features = [
    {
      title: "SAP Business AI Capabilities",
      desc: "170+ enterprise use cases powered by Joule, Embedded AI and GenAI across Finance, spend, SCM, HCM, Customer experience.",
      img: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/sapEcoSystem",
    },
    {
      title: "Joule Studio & Enterprise Agents",
      desc: "Build and deploy enterprise-ready Joule agents and reusable AI skills integrated with SAP workflows.",
      img: "https://images.unsplash.com/photo-1737644467636-6b0053476bb2?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/sapJouleSystem"
    },
    {
      title: "EY AI Solutions",
      desc: "EY’s portfolio of SAP-integrated AI solutions accelerating enterprise transformation and operational intelligence.",
      img: "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link:"/aiSolution"
    },
  ];

  // const navigate = useNavigate();


  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="content">
          <h1>
            EY's AI Solutions Embedded Across<br/> Enterprise Functions
          </h1>

          <p>
            AI-powered enterprise solutions transforming finance, procurement,
            HR and customer experiences through SAP-integrated intelligence and
            automation.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
  <div className="features-container">
    {features.map((item, index) => (
      <Link 
        to={item.link}
        className={`feature-card ${index === 2 ? "feature-card-wide" : ""}`}
        key={index}
        style={{ textDecoration: 'none' }} /* Prevents standard global anchor underlines */
      >
        <div className="img-box">
          <img src={item.img} alt={item.title} />
        </div>

        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        {/* Turned into a span since the parent wrapper handles the redirect link routing */}
        <span className="learn">
          Learn more <pre></pre>➤
        </span>
      </Link>
    ))}
  </div>
</section>
    </>
  );
}

import "../styles/aiSap.css";
import { Link } from "react-router-dom"


export default function EnterpriseSolutions() {
  const features = [
    {
      title: "SAP Embedded Solutions",
      desc: "120+ enterprise use cases powered by Joule, Embedded AI and GenAI across Finance, spend, SCM, HCM, Customer experience.",
      img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
      link: "/sapEcoSystem",
    },
    {
      title: "Joule Studio & Enterprise Agents",
      desc: "Build and deploy enterprise-ready Joule agents and reusable AI skills integrated with SAP workflows.",
      img: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop",
      link: "/sapJouleSystem"
    },
    {
      title: "EY AI Solutions",
      desc: "EY’s portfolio of SAP-integrated AI solutions accelerating enterprise transformation and operational intelligence.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
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
            <div
              className={`feature-card ${index === 2 ? "feature-card-wide" : ""
                }`}
              key={index}
            >
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>



              <Link to={item.link} className="learn">
                Learn more →
              </Link>



            </div>
          ))}
        </div>
      </section>
    </>
  );
}

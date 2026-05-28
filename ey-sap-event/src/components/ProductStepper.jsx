import "../styles/product-stepper.css";
import { FaCogs, FaRobot, FaDatabase, FaClipboardCheck, FaRocket } from "react-icons/fa";

const steps = [
  { label: "Choose Workflow", icon: <FaCogs /> },
  { label: "Select AI", icon: <FaRobot /> },
  { label: "Connect Data", icon: <FaDatabase /> },
  { label: "Set Rules", icon: <FaClipboardCheck /> },
  { label: "Deploy Agent", icon: <FaRocket /> },
];

export default function ProductStepper() {
    const activeStep = 2;
  return (
    <section className="stepper-section">
      <h2>PRODUCT TOUR EXPERIENCE</h2>
      <p className="subtitle">From idea to AI agent in minutes</p>

      <div className="stepper-container">
        <div className="stepper-line"></div>

        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className={`circle ${index <= activeStep ? "active" : ""}`}></div>

            <div className="icon">
              {step.icon}
            </div>

            <p>{step.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
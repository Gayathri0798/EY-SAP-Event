import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">

      
<NavLink to="/" className="logo">
        <img src="/images/logo.png" alt="EY Logo" />
      </NavLink>


      <div className="nav-links">
        {/* <NavLink to="/sap-now">SAP Now</NavLink> */}
        <NavLink to="/studio">Agent Studio</NavLink>
        <NavLink to="/marketplace">AI Marketplace</NavLink>
        <NavLink to="/enterprise-solutions">EY Enterprise Solutions</NavLink>
        <NavLink to="/sap-ai">SAP AI</NavLink>
        <NavLink to="/insights">Insights</NavLink>
        <NavLink to="/talk-to-experts">Talk to Experts</NavLink>
      </div>


    </div>
  );
}

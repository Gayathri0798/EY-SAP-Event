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
        <NavLink to="/products">EY Enterprise Solutions</NavLink>
        <NavLink to="/products">SAP AI</NavLink>
        <NavLink to="/products">Insights</NavLink>
        <NavLink to="/products">Talk to Experts</NavLink>
      </div>


    </div>
  );
}

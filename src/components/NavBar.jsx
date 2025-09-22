import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function NavBar() {
    return (
      <header className="nav">
        <div className="nav-container">
          {/* Card-like bar */}
          <div className="nav__frame">
            {/* Left: brand */}
            <a className="nav__brand" href="/">
              <img className="nav__logo" src={logo} alt="Caregiver logo" />
              <span className="nav__title">Caregiver</span>
            </a>
  
            {/* Center: links */}
            <nav className="nav__links" aria-label="Primary">
              <NavLink to="/" end className={({isActive}) => `nav__link${isActive ? " active" : ""}`}>
                Home
              </NavLink>
              <NavLink to="/services" className={({isActive}) => `nav__link${isActive ? " active" : ""}`}>
                Services
              </NavLink>
              <NavLink to="/find-nanny" className={({isActive}) => `nav__link${isActive ? " active" : ""}`}>
                Find Nanny
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => `nav__link${isActive ? " active" : ""}`}>
                Contact
              </NavLink>
            </nav>
  
            {/* Right: Sign In */}
            <div className="nav__actions">
              <button className="btn btn--dark">Sign In</button>
            </div>
          </div>
        </div>
      </header>
    );
}

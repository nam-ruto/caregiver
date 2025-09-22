import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__section footer__brand">
          <h3 className="footer__title">Caregiver</h3>
          <p className="footer__description">
            Providing exceptional childcare services with love, dedication, and professionalism.
          </p>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>123 Main St, Troy, AL</span>
            </div>
            <div className="footer__contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>(555) 123-4567</span>
            </div>
            <div className="footer__contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>hello@caregiver.example</span>
            </div>
          </div>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Quick Links</h4>
          <nav className="footer__links" aria-label="Footer navigation">
            <NavLink to="/" className="footer__link">Home</NavLink>
            <NavLink to="/services" className="footer__link">Services</NavLink>
            <NavLink to="/find-nanny" className="footer__link">Find Nanny</NavLink>
            <NavLink to="/about" className="footer__link">About Us</NavLink>
            <NavLink to="/contact" className="footer__link">Contact</NavLink>
          </nav>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Services</h4>
          <nav className="footer__links" aria-label="Services navigation">
            <NavLink to="/services/babysitting" className="footer__link">Babysitting</NavLink>
            <NavLink to="/services/daycare" className="footer__link">Daycare</NavLink>
            <NavLink to="/services/nanny" className="footer__link">Nanny Services</NavLink>
            <NavLink to="/services/special-needs" className="footer__link">Special Needs Care</NavLink>
            <NavLink to="/services/after-school" className="footer__link">After School Care</NavLink>
          </nav>
        </div>

        <div className="footer__section">
          <h4 className="footer__subtitle">Connect With Us</h4>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p className="footer__newsletter">
            Subscribe to our newsletter for childcare tips and updates.
          </p>
          <form className="footer__form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footer__button">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Caregiver. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <a href="/privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="/terms" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
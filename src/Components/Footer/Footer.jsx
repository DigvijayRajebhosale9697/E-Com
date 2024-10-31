import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="/Image/S-karts.png" alt="" className="image-footer-l" />
          <p style={{ color: "grey" }}>E-Com...</p>
        </div>

        <div className="footer-section-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@2024 E-Com All Rights Reserved By Digvijay Rajebhosale</p>
      </div>
    </footer>
  );
};

export default Footer;

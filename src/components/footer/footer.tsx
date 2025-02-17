import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {navigationLinks} from "../navigation/navigation.tsx";
import "./footer.css";

const Footer = () => {
  const date: Date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <span className="address">
            180 W 3030 S
            <br />
            South Salt Lake, UT 84115
          </span>
          <br />
          <span className="phone">
            <a href="tel:801-815-4612" className="phone-link">
              (801) 815-4612
            </a>
          </span>
          <p>© {year} Alta Stucco, all rights reserved</p>
          <a href="/">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} />
          </a>
        </div>
        <div className="footer-right">
          <nav>
            <ul>
              {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

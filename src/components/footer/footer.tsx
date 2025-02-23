import { faFacebook, faLinkedin, faInstagram, faUpwork } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../navigation/navigation.tsx";
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

              (801) 815-4612

          </span>
          <p>© {year} Alta Stucco, all rights reserved</p>
            <div className="social-icons">
              <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} /></a>
              <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} style={{ color: "black" }} /></a>
              <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} /></a>
              <a href="https://instagram.com"><FontAwesomeIcon icon={faUpwork} style={{ color: "black" }} /></a>

            </div>

        </div>
        <div className="footer-right">
          <Navigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

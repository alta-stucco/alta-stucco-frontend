import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <a href="mailto:alta_stucco@yahoo.com" className="email-footer">alta_stucco@yahoo.com</a>
          <span className="phone">(801) 815-4612</span>
          <p>© {year} Alta Stucco, all rights reserved</p>
          <div className="social-icons">
            <a href="https://facebook.com/altastucco" target="_blank">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
          <span className="phone">
              (801) 815-4612
          </span>
          <p>© {year} Alta Stucco, all rights reserved</p>
            <div className="social-icons">
              <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ color: "#7498bd" }} /></a>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

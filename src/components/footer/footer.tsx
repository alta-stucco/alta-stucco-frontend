import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
    const date: Date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="footer-content">
                <div className="address">
          <span className="address">
            180 W 3030 S
            <br />
            South Salt Lake UT 84115
          </span>
                </div>
                <div className="contact">
                    <a href="mailto:alta_stucco@yahoo.com" className="email-footer">
                        alta_stucco@yahoo.com
                    </a>

                    <span className="phone">(801) 815-4612</span>
                </div>


                <div className="social">
                    <p>Get Started!</p>
                    <div className="social-icons">
                        <a href="https://facebook.com/altastucco" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="sitemap">
                    <p>Sitemap</p>
                    <nav aria-label="Footer sitemap" className="footer-sitemap">
                        <ul className="sitemap-list">
                            <li><a href="/sitemap.xml" aria-label="XML sitemap">Full sitemap (XML)</a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                © {year} Alta Stucco, all rights reserved
            </div>
        </footer>
    );
};

export default Footer;

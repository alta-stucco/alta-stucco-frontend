import { Link } from "react-router-dom";
import "./navigation.css";
import mainLogo from "../../../src/assets/main_logo.png";

const Navigation = () => {
  const handleContactClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.location.href = "/contact";
  };
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={mainLogo} alt="Alta Stucco" className="main-logo" />
        </Link>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
        <li>
          <a href="/contact" onClick={handleContactClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import { Link } from "react-router-dom";
import "./navigation.css";
import mainLogo from "../../../src/assets/main_logo.png";
const Navigation = () => {
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
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

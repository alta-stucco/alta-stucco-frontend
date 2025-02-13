import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="" alt="Alta Stucco" />
        </Link>
      </div>
      <ul>
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

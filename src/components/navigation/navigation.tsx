import { Link } from "react-router-dom";
import "./navigation.css";

// export const navigationLinks = [
//   { path: '/', label: 'Home' },
//   { path: '/about', label: 'About' },
//   { path: '/faq', label: 'FAQ' },
//   { path: '/contact', label: 'Contact' },
// ]

// TODO: test with cypress

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="src/assets/main_logo.png" alt="Alta Stucco" />
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
        {/*{navigationLinks.map((link, index) => (*/}
        {/*    <li key={index}>*/}
        {/*      <Link to={link.path}>{link.label}</Link>*/}
        {/*    </li>*/}
        {/*))}*/}
      </ul>
    </nav>
  );
};

export default Navigation;

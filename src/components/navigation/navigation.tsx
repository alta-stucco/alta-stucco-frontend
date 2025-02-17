import { Link } from "react-router-dom";
import "./navigation.css";

export const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
]

// TODO: test with cypress

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="https://via.placeholder.com/150" alt="Alta Stucco" />
        </Link>
      </div>
      <ul>
        {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

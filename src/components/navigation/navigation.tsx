import { Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => {
    return (
        <nav>
        <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
        </ul>
        </nav>
    );
}

export default Navigation;

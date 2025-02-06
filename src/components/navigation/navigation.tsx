import {Link} from "react-router-dom";
import './navigation.css'

const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src="" alt="Alta Stucco"/></Link>
            </div>
            <div className="phone"><a className="phone-link" href="tel:888-888-8888">Call us: 888-888-8888</a></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    const date: Date = new Date();
    const year = date.getFullYear();


    return (
        <footer>
            <p>© {year} Alta Stucco</p>
            <a href="/">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }}/>
            </a>
        </footer>
    );
}

export default Footer;

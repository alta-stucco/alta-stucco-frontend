import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Alta Stucco</h1>
            <div>
                <p>Is your stucco chipping or falling off? Do you have leaky gutters or windows? Is your stucco bulging? Is your chimney cracked and looking like a spider web? Does your stucco look shiny or glittering?

                    Let us help restore your home or office exterior! <Link to="/contact">Contact us</Link> for a free consultation!
                </p>
            </div>
        </div>
    );
}

export default Home;

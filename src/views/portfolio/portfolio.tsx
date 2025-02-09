import './portfolio.css';
import ControlledCarousel from "../../components/carousel/carousel.tsx";

const Portfolio = () => {
        return (
            <div className="portfolio-component">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                    <ControlledCarousel />
                </div>
            </div>
    )
}
export default Portfolio
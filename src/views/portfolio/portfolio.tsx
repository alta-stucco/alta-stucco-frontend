import './portfolio.css';
import ControlledCarousel from "../../components/carousel/carousel.tsx";

const carouselData  = [
    {
        item: <img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/500" alt="First slide" />,
        caption: "First slide label",
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        item: <img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/500" alt="Second slide" />,
        caption: "Second slide label",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        item: <img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/500" alt="Third slide" />,
        caption: "Third slide label",
        paragraph: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
]

const Portfolio = () => {
    return (
        <div className="portfolio-component">
            <h1>Portfolio</h1>
            <div className="portfolio-container">
                <ControlledCarousel items={carouselData} />
            </div>
        </div>
    )
}

export default Portfolio;
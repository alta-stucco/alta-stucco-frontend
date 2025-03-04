import {Link} from "react-router-dom";
import "./home.css";

import ImageGrid from "../../components/imageGrid/imageGrid.tsx";

import CardHomeText from "../../components/card_text/card_text.tsx";

const Home = () => {


    const cardHomeData = [
        {
            title: "Stucco",
            text: "Is your stucco cracking, chipped, bulging or shiny? Allow us to revitalize your stucco and ensure its longevity!",
        },
        {
            title: "Stone, Brick & Rock",
            text: "Add character or repair your existing stone to withstand Utah’s harsh weather conditions.",
        },
        {
            title: "Fascia, Soffit & Gutters",
            text: "Protect your roof and prevent moisture build up with expertly installed, high quality fascia and soffit.",
        },
        {
            title: "Hardie Board",
            text: "Durable, stylish and weather-resistant fiber cement board provides a beautiful finish that enhances your exterior.",
        },
        {
            title: "Painting",
            text: "Refresh your home or business with a new coat of paint. We utilize top-quality materials to ensure a stunning, long-lasting finish."
        },
        {
            title: "Partnerships",
            text: "We work with a trusted network of specialists including; window companies, roofers, deck and patio designers, steel work experts and more.",
        },

    ]
    return (
       <>

            <div className="home-container">
                <div>
                    <p>Is your stucco chipping or falling off? Do you have leaky gutters or windows? Is your stucco bulging? Is your chimney cracked and looking like a spider web? Does your stucco look shiny or glittering?

                        Let us help restore your home or office exterior! <Link className="contact-home" to="/contact">Contact us</Link> for a free consultation!
                    </p>
                </div>
                <div className="portfolio-component">
                    <div className="portfolio-container">
                    <ImageGrid />
                    </div>
                </div>

                <div>
                    {cardHomeData.map((card, index) => (
                        <CardHomeText key={index} title={card.title} text={card.text} />
                    ))}
                </div>
            </div>
       </>
    );
}

export default Home;

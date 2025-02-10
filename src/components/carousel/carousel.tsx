import {useState} from "react";
import {Carousel} from "react-bootstrap";
import './carousel.css';


const ControlledCarousel = (item: JSX.Element, caption: string, paragraph: string) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="carousel-container">
                <Carousel  data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        {item}
                        <Carousel.Caption>
                            <h3>{caption}</h3>
                            <p>{paragraph}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )

}

export default ControlledCarousel
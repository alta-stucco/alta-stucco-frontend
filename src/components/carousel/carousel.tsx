import { useState } from "react";
import { Carousel } from "react-bootstrap";
import './carousel.css';

interface CarouselItemProps {
    item: JSX.Element;

}

interface ControlledCarouselProps {
    items: CarouselItemProps[];
}

const ControlledCarousel = ({ items }: ControlledCarouselProps) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="carousel-container">
            <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
                {items.map((carouselItem, idx) => (
                    <Carousel.Item key={idx}>
                        {carouselItem.item}
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ControlledCarousel;
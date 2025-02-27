import './imageGrid.css'
import stock1 from '../../assets/stock_images/IMG_1055.jpg';
import stock2 from '../../assets/stock_images/IMG_1056.jpg';
import stock3 from '../../assets/stock_images/IMG_1057.jpg';
import stock4 from '../../assets/stock_images/IMG_1058.jpg';
import stock5 from '../../assets/stock_images/IMG_1059.jpg';
import stock6 from '../../assets/stock_images/IMG_2881.png';
import stock7 from '../../assets/stock_images/IMG_2882.png';

const images = [stock1, stock2, stock3, stock4, stock5, stock6, stock7];

const ImageGrid = () => {
    return (
        <div className="image-grid">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
};

export default ImageGrid;
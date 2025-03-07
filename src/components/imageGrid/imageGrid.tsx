import "./imageGrid.css";
import stock1 from "../../assets/stock_images/IMG_1055.jpg";
import stock2 from "../../assets/stock_images/IMG_1056.jpg";
import TextContainer from "../textcontainer/textcontainer.tsx";
// import stock3 from '../../assets/stock_images/IMG_1057.jpg';
// import stock4 from '../../assets/stock_images/IMG_1058.jpg';
// import stock5 from '../../assets/stock_images/IMG_1059.jpg';
// import stock6 from '../../assets/stock_images/IMG_2881.png';
// import stock7 from '../../assets/stock_images/IMG_2882.png';

const images = [stock1, stock2];

const ImageGrid = () => {
  return (
    <div>
      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
        <TextContainer />
      </div>
      <div>
        <p className="mission">
          With over 30 years of experience and third generation stucco and
          remodeling experts, we offer a full range of exterior services with
          exceptional results and a seamless experience for every client.
        </p>
      </div>
      <div className="image-grid"></div>
    </div>
  );
};

export default ImageGrid;

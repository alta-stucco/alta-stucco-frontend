import "./aboutImages.css";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
}

const AboutImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="about-image-grid">
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default AboutImageGrid;

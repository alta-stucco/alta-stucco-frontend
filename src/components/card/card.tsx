import { Card } from "react-bootstrap";
import "./card.css";

interface CardComponentProps {
  title: string;
  imagePath: string;
}

const CardComponent = ({ title, imagePath }: CardComponentProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagePath} className="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;

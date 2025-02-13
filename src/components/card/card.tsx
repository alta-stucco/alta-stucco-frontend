import { Card } from "react-bootstrap";

interface CardComponentProps {
  title: string;
}

const CardComponent = ({ title, text }: CardComponentProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;

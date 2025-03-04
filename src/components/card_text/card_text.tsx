import {Card, CardBody} from "react-bootstrap";
import "./card_text.css"

type StringOrNull = string | null;

interface CardTextProps {
    title: string;
    text: StringOrNull;
}
export default function CardHomeText({title, text}:CardTextProps) {

  return (
      <div className="card-text-container">

        <Card>
            <CardBody>

            <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>

            </CardBody>


        </Card>
        </div>
      );
    }


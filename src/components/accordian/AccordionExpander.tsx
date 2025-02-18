import { Accordion } from "react-bootstrap";
import './accordion.css';

interface FAQ {
    question: string;
    answer: string;
}

const AccordionExpander = ({ question, answer }: FAQ) => {
    return (
        <Accordion className="accordion-class">
            <Accordion.Item eventKey="0">
                <Accordion.Header className="accordion-header">{question}</Accordion.Header>
                <Accordion.Body className="accordion-body">{answer}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionExpander;
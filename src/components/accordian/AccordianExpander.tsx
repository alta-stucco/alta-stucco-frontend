import { Accordion } from "react-bootstrap";

interface FAQ {
    question: string;
    answer: string;
}

const AccordianExpander = ({ question, answer }: FAQ) => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body>{answer}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordianExpander;
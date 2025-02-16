import { Accordion } from "react-bootstrap";

export default function Faq () {

    const questions = [
        {
            question: "How long have you been in business?",
            answer: "How long have you been in business? \n" +
                "We started Alta Stucco in 2007 in the middle of the US financial crisis. We saw a need for affordable, durable stucco repair in our community and got to work. With over 30 years of experience, we are third generation stucco and remodeling experts, we deliver exceptional results and a seamless experience for every client."
        },
        {
            question: "Do you have a physical location?",
            answer: "Yes, with the purchase of our first commercial property in 2024, we are now located at 180 W 3030 S, South Salt Lake. Our office hours vary so please contact us to set up a meeting."
        },
        {
            question: "Will you come to my home or office for a consultation?",
            answer: "Yes, from Logan to St. George, and sometimes as far as Idaho or Wyoming, we are willing to travel and meet with you to review your needs. Book your consultation today!"
        },
        {
            question: "Do you patch cracks in stucco?",
            answer: "Yes, we specialize in repairing and restoring in your existing stucco. We will review options with you to repair cracks or evaluate the need for replacing your stucco."
        },
        {
            question: "Can you match my existing stucco color?",
            answer: "Yes, we can match your existing stucco color."
        },
        {
            question: "Do you paint over existing stucco?",
            answer: "Yes, we only use an elastomeric paint, to allow for expansion and ensure proper adhesion which will prevent peeling. Prior to painting your home or office, we will pressure wash the walls to check for damage and remove any dirt or debris to safeguard the longevity of your stucco."
        },
        {
            question: "Are cracks in stucco normal around windows?",
            answer: "Yes and no. Cracks around windows can occur due to the basic opening and closing of the window. However, if there is water coming out of the cracks, you will want to schedule a consultation for repairs as soon as possible to avoid any long term damage."
        },
        {
            question: "How long does stucco last?",
            answer: "Stucco can last up to 30 years with proper installation and maintenance."
        },
        {
            question: "Do you pressure wash stucco?",
            answer: "Yes, we can pressure wash your stucco using guidelines to prevent damage and color fading."
        },
        {
            question: "Can you stucco over my brick?",
            answer: "Yes, we can stucco over cinder block or brick. This is a common procedure to prevent unnecessary labor costs for removal."
        }
    ]

    return (
        <div>
            <Accordion>
                {questions.map((faq, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>{faq.answer}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

        </div>
    )
}

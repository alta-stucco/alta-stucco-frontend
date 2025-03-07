import { Accordion } from "react-bootstrap";
import AccordionExpander from "../../components/accordian/AccordionExpander.tsx";
export default function Faq() {
  const altaStuccoQuestions = [
    {
      question: "How long have you been in business?",
      answer:
        "We started Alta Stucco in 2007 in the middle of the US financial crisis. We saw a need for affordable, durable stucco repair in our community and got to work. With over 30 years of experience, we are third generation stucco and remodeling experts, we deliver exceptional results and a seamless experience for every client.",
    },
    {
      question: "What exterior services do you offer?",
      answer:
        "We specialize in and offer a full range of exterior services for repairing and renovating residential and commercial properties including: <br>Stucco <br/>  Stone, brick & rock <br/>  Fascia, soffit & gutters <br/>  Hardie Board </br> Painting </br> Network of trusted partners including roofers, window specialists, deck or patio designers, steel work experts, and more.",
    },
    {
      question: "Do you have a physical location?",
      answer:
        "Yes, with the purchase of our first commercial property in 2024, we are now located at 180 W 3030 S, South Salt Lake. Our office hours vary so please <strong><a href='/contact'>contact us</a></strong> to set up a meeting.",
    },
    {
      question: "Will you come to my home or office for a consultation?",
      answer:
        "Yes, from Logan to St. George, and sometimes as far as Idaho or Wyoming, we are willing to travel and meet with you to review your needs. <strong><a href='/contact'>Book your consultation today</a></strong>!",
    },
  ];
  const stuccoQuestions = [
    {
      question: "Do you patch cracks in stucco?",
      answer:
        "Yes, we specialize in repairing and restoring in your existing stucco. We will review options with you to repair cracks or evaluate the need for replacing your stucco.",
    },
    {
      question: "Can you match my existing stucco color?",
      answer: "Yes, we can match your existing stucco color.",
    },
    {
      question: "Do you paint over existing stucco?",
      answer:
        "Yes, we only use an elastomeric paint, to allow for expansion and ensure proper adhesion which will prevent peeling. Prior to painting your home or office, we will pressure wash the walls to check for damage and remove any dirt or debris to safeguard the longevity of your stucco.",
    },
    {
      question: "Are cracks in stucco normal around windows?",
      answer:
        "Yes and no. Cracks around windows can occur due to the basic opening and closing of the window. However, if there is water coming out of the cracks, you will want to schedule a consultation for repairs as soon as possible to avoid any long term damage.",
    },
    {
      question: "How long does stucco last?",
      answer:
        "Stucco can last up to 30 years with proper installation and maintenance.",
    },
    {
      question: "Do you pressure wash stucco?",
      answer:
        "Yes, we can pressure wash your stucco using guidelines to prevent damage and color fading.",
    },
    {
      question: "Can you stucco over my brick?",
      answer:
        "Yes, we can stucco over cinder block or brick. This is a common procedure to prevent unnecessary labor costs for removal.",
    },
  ];
  return (
    <div>
      <h1>About Alta Stucco</h1>
      <Accordion>
        {altaStuccoQuestions.map((faq, index) => (
          <AccordionExpander
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </Accordion>
      <h1>About Stucco</h1>
      <Accordion>
        {stuccoQuestions.map((faq, index) => (
          <AccordionExpander
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}

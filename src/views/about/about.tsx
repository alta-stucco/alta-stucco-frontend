import CardComponent from "../../components/card/card.tsx";
import './about.css';

const cardData = [
    { id: 1, title: "Adam Larsen", text: "This is the first card." },
    { id: 2, title: "Nate", text: "This is the second card." },
    { id: 3, title: "Someone Else", text: "This is the third card." }
];

const About = () => {
  return (
    <div>
      <h1>About</h1>
        <div className="card-container">
        {cardData.map((card) => (<CardComponent key={card.id} title={card.title} text={card.text} />))}
        </div>
    </div>
  )
}

export default About
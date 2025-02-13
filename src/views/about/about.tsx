import CardComponent from "../../components/card/card.tsx";
import "./about.css";

const cardData = [
  {
    id: 1,
    title: "Nate Olsen and Adam Larsen ",
  },
];

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <h1>About Us</h1>
        About us hahahaha
      </div>
      <div className="aboutRight">
        <div className="card-container">
          {cardData.map((card) => (
            <CardComponent key={card.id} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

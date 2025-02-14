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
        <h3>About Us</h3>
        <p>Since 2007, Alta Stucco has been dedicated to restoring and transforming residential and commercial exteriors into stunning and durable spaces. With over 30 years of experience, we specialize in repairs and improvements that elevate curb appeal and ensure lasting durability. Our skilled team is committed to delivering top-quality craftsmanship and personalized service, whether it’s fixing wear and tear or transforming your outdoor spaces.</p>
          <br />
          <h3>Our Mission</h3>
          <p>Our mission is to repair and enhance the functionality, beauty and value of your property. Whether you’re a home or business owner, we are here to bring your vision to life. We strive to build lasting relationships through integrity, quality, and customer satisfaction, ensuring every project reflects our commitment to excellence.</p>
            <br />
            <h3>What We Offer</h3>
          <ul className="vertical-list">
              <li><strong>Residential Services</strong>: From stucco and stone to fascia and soffit, we provide a full range of exterior services tailored to homeowners. Our team understands the unique needs of residential properties and works diligently to ensure every project meets our high standards of quality and craftsmanship.</li>
              <li><strong>Commercial Services</strong>: We know that your business’s exterior is crucial to attracting customers and maintaining a professional image. Our commercial services include façade renovations, exterior painting, and maintenance solutions designed to enhance your building’s appeal while adhering to industry standards.</li>
              <li><strong>Custom Solutions</strong>: Every property is unique, and so are your needs. We offer personalized consultations to discuss your vision and create a customized plan that fits your budget and style. Whether it’s a modern aesthetic or a classic look, we have the expertise to deliver results that exceed your expectations.</li>
              <li><strong>Partnerships</strong>: If your exterior needs out grow our own expertise, we will collaborate with a network of trusted partners including roofers, window specialists, deck or patio designers, framers, steel work experts, and more.</li>
          </ul>

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

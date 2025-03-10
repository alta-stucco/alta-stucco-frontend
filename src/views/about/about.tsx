// import CardComponent from "../../components/card/card.tsx";
import { Helmet } from "react-helmet";
import "./about.css";
import img3 from "../../assets/stock_images/IMG_2881.png";
import img4 from "../../assets/stock_images/IMG_2882.png";

import img5 from "../../assets/stock_images/image5.jpeg";
import img6 from "../../assets/stock_images/image6.jpeg";
import AboutImageGrid from "../../components/aboutImages/aboutImages";
// const cardData = [
//   {
//     id: 1,
//     title: "Nate Olsen and Adam Larsen ",
//     imagePath: "https://via.placeholder.com/150",
//     // imagePath: "src/assets/react.svg",
//   },
// ];

const About = () => {
  const images = [
    {
      id: 1,
      src: img3,
      alt: "before door",
    },
    {
      id: 2,
      src: img4,
      alt: "after door",
    },
    {
      id: 3,
      src: img5,
      alt: "befor window",
    },
    {
      id: 4,
      src: img6,
      alt: "after window",
    },
  ];
  return (
    <div>
      <br />
      <div className="about">
        <div className="aboutLeft">
          <Helmet>
            <title>About Us - Alta Stucco</title>
            <meta
              name="description"
              content="Learn more about Alta Stucco, our mission, services, and values. Contact us for a free consultation and estimate."
            />
          </Helmet>
          <h3>About Us</h3>
          <p>
            Since 2007, Alta Stucco has been dedicated to restoring and
            transforming residential and commercial exteriors into stunning and
            durable spaces. With over 30 years of experience, we specialize in
            repairs and improvements that elevate curb appeal and ensure lasting
            durability. Our skilled team is committed to delivering top-quality
            craftsmanship and personalized service, whether it’s fixing wear and
            tear or transforming your outdoor spaces.
          </p>
          <br />
          <h3>Our Mission</h3>
          <p>
            Our mission is to repair and enhance the functionality, beauty and
            value of your property. Whether you’re a home or business owner, we
            are here to bring your vision to life. We strive to build lasting
            relationships through integrity, quality, and customer satisfaction,
            ensuring every project reflects our commitment to excellence.
          </p>
          <br />
          <h3>What We Offer</h3>
          <ul className="vertical-list">
            <li>
              <strong>Residential Services</strong>:{" "}
              <p>
                From stucco and stone to fascia and soffit, we provide a full
                range of exterior services tailored to homeowners. Our team
                understands the unique needs of residential properties and works
                diligently to ensure every project meets our high standards of
                quality and craftsmanship.
              </p>
            </li>
            <li>
              <strong>Commercial Services</strong>:{" "}
              <p>
                We know that your business’s exterior is crucial to attracting
                customers and maintaining a professional image. Our commercial
                services include façade renovations, exterior painting, and
                maintenance solutions designed to enhance your building’s appeal
                while adhering to industry standards.
              </p>
            </li>
            <li>
              <strong>Custom Solutions</strong>:{" "}
              <p>
                Every property is unique, and so are your needs. We offer
                personalized consultations to discuss your vision and create a
                customized plan that fits your budget and style. Whether it’s a
                modern aesthetic or a classic look, we have the expertise to
                deliver results that exceed your expectations.
              </p>
            </li>
            <li>
              <strong>Partnerships</strong>:{" "}
              <p>
                If your exterior needs out grow our own expertise, we will
                collaborate with a network of trusted partners including
                roofers, window specialists, deck or patio designers, framers,
                steel work experts, and more.
              </p>
            </li>
          </ul>
          <br />
          <h3>Our Values</h3>
          <p>
            <strong>Quality Craftsmanship: </strong>We take pride in our work
            and use only the finest materials and techniques. Our commitment to
            quality ensures that your exterior improvements will stand the test
            of time.
          </p>
          <p>
            <strong>Integrity and Communication: </strong>Honesty is at the
            heart of our business. We provide free consultations and detailed
            estimates, along with open communication, in an effort to build
            trust so you know exactly what to expect throughout the project.
          </p>
          <p>
            <strong>Customer-Centric Focused: </strong>Our clients are our
            priority. We believe in open communication and collaboration,
            ensuring that you are completely satisfied with your project. Your
            satisfaction and referral is our ultimate goal. <br />
          </p>

          <br />
          <p>
            Ready to elevate your property’s exterior? Contact us today for a
            free consultation and estimate. We look forward to partnering with
            you to create an exterior that reflects your vision and enhances the
            value of your property. Thank you for considering Alta Stucco. Let’s
            transform your space together!
          </p>
        </div>
        <div className="aboutRight">
          <p id="scheduleConsultation">
            <a href="/contact">Schedule your free consultation</a>
          </p>
          {/* <div className="card-container">
            {cardData.map((card) => (
              <CardComponent
                key={card.id}
                title={card.title}
                imagePath={card.imagePath}
              />
            ))}
          </div> */}

          <p>
            <h4>Meet Our Team</h4>
            Nate and Adam are co-owners and childhood friends who saw a need for
            affordable, durable stucco repair in our community. Using their
            expertise in stucco and operations, they took a risk in the middle
            of a financial crisis to provide a solution for homeowners and
            businesses. Our extended team is made up of skilled professionals
            with extensive experience in exterior renovations. Together, we are
            committed to delivering exceptional results and a seamless
            experience for every client.
          </p>
          <br />
          <h3 className="getintouch">
            <a href="/contact">Get in Touch!</a>
          </h3>
        </div>
      </div>
      <br />
      <AboutImageGrid images={images} />
      <br />
    </div>
  );
};

export default About;

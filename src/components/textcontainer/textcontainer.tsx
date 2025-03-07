import { Link } from "react-router-dom";
import "./textcontainer.css";

export default function TextContainer() {
  return (
    <div className="text-center">
      <p id="scheduleConsultation">
        <a href="/contact">Schedule your free consultation</a>
      </p>
      <p id="partnerships">
        Residential
        <br />
        Commercial
        <br />
        Custom solutions
        <br />
        Partnerships
      </p>
    </div>
  );
}

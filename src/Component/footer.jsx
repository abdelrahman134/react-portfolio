import { Row,Container,Col } from "react-bootstrap"
import facebook from "../assets/icons8-facebookcolor.svg";
import instgram from "../assets/icons8-instagram.svg";
import linkedin from "../assets/icons8-linkedin.svg";

function Footer(){
return (
  <footer>
    <Container>
      <h1>LOGO</h1>
      <div className="divid">
        <div className="icon">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={instgram} alt="" />
          </a>{" "}
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </Container>
  </footer>
);
}
export default Footer
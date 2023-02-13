import img1 from "../assets/contact-img.svg"
import { Container,Col,Row } from "react-bootstrap"
import { useState,useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
function Form(){
 const [buttonText, setButtonText] = useState("Send");
 function ChangeWord(e){
    e.preventDefault()
    setButtonText("Sending...")
 }
    return (
      <section className="form" id="form">
        <Container>
          <Row>
            <Col>
              {" "}
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    src={img1}
                    alt=""
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Get in touch</h2>
                    <form>
                      <Row className="formRow">
                        <Col className="px-1">
                          <input type="text" placeholder="First Name" />
                        </Col>
                        <Col className="px-1">
                          <input type="text" placeholder="last Name" />
                        </Col>
                        <Col className="px-1">
                          <input type="text" placeholder="Email Address" />
                        </Col>
                        <Col className="px-1">
                          <input type="text" placeholder="Phone No" />
                        </Col>
                        <Col className="px-1">
                          <textarea type="text" placeholder="Message" />
                          <button type="submit" onClick={(e) => ChangeWord(e)}>
                            <span>{buttonText}</span>
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default Form
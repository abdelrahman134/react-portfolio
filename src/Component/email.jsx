
import { Col,Row } from "react-bootstrap"
function Email(){
return (
  <Col lg={12}>
    <div className="email">
      <Row className="emailRow">
        <Col lg={12} md={6} xl={5}>
          <h3>
            Subscribe to our Newsletter<br></br> & Never miss latest updates
          </h3>
        </Col>
        <Col  md={6} xl={7}>
         <form className="FormEmail">
<div className="new-email">
    <input type="email" />
    <button>Submit</button>
</div>
         </form>
        </Col>
      </Row>
    </div>
  </Col>
);
}
export default Email
import { Container, Col, Row, Tab, Nav, TabContent } from "react-bootstrap";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
function Project() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: img2,
    },
  ];
const [Active,setActive]=useState(1  )
 function addActive(index){
setActive(index)
} 
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              omnis eos iure voluptas natus harum et, provident eaque,
            </p>
            <div className="prjectnav">
              <Link
                to="tab1"
                onClick={() => addActive(1)}
                className={Active == 1 ? "active" : ""}
              >
                Tab 1
              </Link>

              <Link
                to="tab2"
                onClick={() => addActive(2)}
                className={Active == 2 ? "active" : ""}
              >
                Tab 2
              </Link>
              <Link
                to="tab3"
                onClick={() => addActive(3)}
                className={Active == 3 ? "active" : ""}
              >
                Tab 3
              </Link>
            </div>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Project;
                    {
                      /* <TabContent>
                <Tab.Pane eventKey="first">
                  {projects.map((ele, index) => {
                    return (<Projectdata key={index} {...ele} />)
                  })}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium non iusto esse sit veritatis enim, maxime
                    consequuntur ducimus odio sint eaque fugit. Dolore, animi
                    distinctio ad ullam repudiandae id error!
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <p></p>
                </Tab.Pane>
              </TabContent> */
                    }

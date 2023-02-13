import facebook from "../assets/icons8-facebookcolor.svg";
import instgram from "../assets/icons8-instagram.svg";
import linkedin from "../assets/icons8-linkedin.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
function NavBar() {
  const [activelink, setActivelink] = useState("home");
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll=()=>{
if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    }
    

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scroll ? "scrolled navbar" : "navbar"}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ">
            <Nav.Link
              href="#home"
              className={
                activelink == "home"
                  ? "active navlink text-white"
                  : "navlink text-white"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activelink == "skills"
                  ? "active navlink text-white"
                  : "navlink text-white"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activelink == "project"
                  ? "active navlink text-white"
                  : "navlink text-white"
              }
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-icon">
            <div className="icon">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instgram} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/abdelrahman-mahmoud-223a73222/">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <a href="#form">
              <button className="btn text-white">Lets connect</button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

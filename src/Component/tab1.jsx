import React from "react";
import Projectdata from "./ProjectData";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { Container, Col, Row, Tab, Nav, TabContent } from "react-bootstrap";

const Tab1 = () => {
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
    }]    
    return (
      <div className="itemproject">
        {projects.map((ele, index) => {
          return <Projectdata key={index} {...ele} />;
        })}
      </div>
    );
};

export default Tab1;

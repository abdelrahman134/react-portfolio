import {Container,Row,Col} from "react-bootstrap"
import plant from "../assets/BluePlanet.svg"
import img1 from "../assets/img1.jfif";
import {useState , useEffect} from "react"
import "animate.css";
import TrackVisibility from "react-on-screen";
function Banner(){
const [loop, setLoop]=useState(0)
const [isDeleting, setIsDeleting]=useState(false)
const [text,setText]=useState('')
const [rand,setRand]=useState(300-Math.random()*100)
const [index,setIndex] = useState(1)
const per=2000
const toRotate = [
  "Fullstack web developer",
  "Backend web developer",
  "Frontend web developer",
];
useEffect(()=>{
let timer =setInterval(()=>{
    time();
},rand)
return()=>{
    clearInterval(timer)
}},[text]
)
function time(){
    let i = loop%toRotate.length;
    let fulltext = toRotate[i]
    let UpdatedText = isDeleting
      ? fulltext.substring(0, text.length - 1)
      : fulltext.substring(0, text.length + 1);
setText(UpdatedText)
if(isDeleting){
    setRand(prevRand=>prevRand/2)
}
 if(!isDeleting&& UpdatedText==fulltext){
    setIsDeleting(true)
    setIndex(prevIndex=>prevIndex+1)
    setRand(per)
 }else if (isDeleting && UpdatedText == "") {
   setIsDeleting(false);
   setLoop(loop + 1);
   setIndex(1);
   setRand(500); 
}else{
    setIndex(prevIndex=>prevIndex+1)
}
    } 
return (
  <section className="banner" id="home">
    <Container>
      <Row>
        <Col xs={12} md={6} xl={7} className="tol">
      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <p className="tagline">Welcome to my Protfolio</p>
          <h1>
            {"Hi i am Abdelrahman mohab ,  "}
            <span className="wrap">{text}</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quod doloribus esse nisi explicabo expedita rem voluptates soluta
            harum quos dolore? Temporibus maxime velit id voluptatum quidem
            ducimus quam nam!
          </p>
          <button>let connect</button>
             </div>}
            </TrackVisibility>
          </Col>
        <Col xs={12} md={6} xl={5}>
           <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
          <img className="plt" src={plant} alt="" />
          </div>}
            </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
);
}
export default Banner
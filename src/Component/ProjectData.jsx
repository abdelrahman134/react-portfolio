import { Col } from "react-bootstrap";
function Projects({title ,description,imgUrl}){
return(
<Col >
<div className="proj-imgbx">
    <img src={imgUrl} alt="" />
<div className="proj-txt">
    <h4>{title}</h4>
    <span>{description}</span>
</div>
</div>

</Col>
)}
export default Projects
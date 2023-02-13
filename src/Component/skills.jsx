// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import { Container, Col, Row } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import "swiper/css/pagination";
// import { Pagination,Swiper } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
// import "swiper/swiper-bundle.min.css";

// import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Pagination } from "swiper";

function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-m">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                magni neque voluptatem fugiat ad assumenda numquam quod, nam
                amet nulla sint accu
              </p>
              <Carousel
                responsive={responsive}
                className="owl-carousel owl-theme slider"
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>web devlopment</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>cyber scurity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>data science</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>AI</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// function Skills() {
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="skill" id="skills">
//       <Container>
//         <Row>
//           <Col>
//             <div className="skill-m">
//               <h2>Skills</h2>
//               <p>
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
//                 magni neque voluptatem fugiat ad assumenda numquam quod, nam
//                 amet nulla sint accu
//               </p>
//               <Swiper
//                 modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 loop={true}
                
//                 navigation
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 onSlideChange={() => console.log("slide change")}
//                 onSwiper={(swiper) => console.log(swiper)}
//                 effect={"cube"}
//                 cubeEffect={{
//                   shadow: true,
//                   slideShadows: true,
//                   shadowOffset: 20,
//                   shadowScale: 0.94,
//                 }}
//               >
//                 <SwiperSlide>
//                   <div className="item">
//                     <img src={meter1} alt="" />
//                     <h5>web devlopment</h5>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="item">
//                     <img src={meter2} alt="" />
//                     <h5>cyber scurity</h5>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="item">
//                     <img src={meter3} alt="" />
//                     <h5>data science</h5>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="item">
//                     <img src={meter2} alt="" />
//                     <h5>AI</h5>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export const Slider = ({ slides }) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       effect={"cube"}
//       cubeEffect={{
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       }}
//     >
//     </Swiper>
//   )

// }
// import required modules


export default Skills;

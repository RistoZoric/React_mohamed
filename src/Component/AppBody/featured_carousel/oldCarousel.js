// import React from "react";
// import './FeaturedCarousel.scss';
// import {featured_carousel} from './data'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import {useState} from 'react'

// export default function FeaturedCarousel() {

//   const [sliderRef, setSliderRef] = useState(null)
//   const settings = {
//         // dots: false,
//         arrows: false,
//         infinite: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // speed: 500,
//         // cssEase: "linear",
//         // nextArrow: <SampleNextArrow />,
//         // prevArrow: <SamplePrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: false,
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//     return(
//         <div className="featured-carousel">
//           {/* <div className='controls'>
//             <button onCLick={sliderRef?.slickPrev}>
//               <FaChevronLeft />
//             </button>
//             <button onCLick={sliderRef?.slickNext}>
//               <FaChevronRight />
//             </button>
//           </div> */}
//             <Slider ref={setSliderRef} {...settings}>
//             {featured_carousel.map((item) => (
//                 <div className="featured-carousel_card-outline">
//                     <div className="featured-carousel__card">
//                         <div className="featured-carousel__card-image"><img src={item.image} alt="card"></img></div>
//                         <div className="featured-carousel__card-logo"><img src={item.logo} alt='logo'></img></div>
//                         <div className="featured-carousel__card-text">
//                             <h2>{item.title}</h2>
//                             <p>{item.desc}</p>
//                         </div>
//                         <div className="featured-carousel__card-action">Enquire Now</div>
//                     </div>
//                 </div>
//             ))}
//             </Slider>
            
//         </div>
//     )
// }

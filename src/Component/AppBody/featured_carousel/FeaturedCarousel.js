import React, { useEffect } from "react";
import "./FeaturedCarousel.scss";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getBrands } from "../../../api/services";

export default function FeaturedCarousel() {
  const [featuredBrands, setFeaturedBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    await getBrands()
      .then((response) => {
        if (response.data.dataInfo.length > 0) {
          var brandList = [];
          response.data.dataInfo.map((brand) => {
            if (brand.is_featured) {
              brandList.push(brand);
              // setFeaturedBrands([...featuredBrands, brand])
            }
          });

          console.log(brandList, "brandListbrandListbrandList");
          setFeaturedBrands(brandList);
        }
      })
      .catch((err) => console.log(err));
  };

  const responsive = {
    large_desktop: {
      breakpoint: { max: 3000, min: 1444 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1444, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // infinite={true}
  // autoPlay={true}
  const links = ["buy-franchise", ""];

  return (
    <div className="featured-carousel">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        spaceBetween={20}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {featuredBrands.map((item) => (
          <div className="featured-carousel_card-outline">
            <div className="featured-carousel__card">
              <div className="featured-carousel__card-image">
                <img src={item.banner[0].image} alt="card"></img>
              </div>
              <div className="featured-carousel__card-logo">
                <img src={item.logo} alt="logo"></img>
              </div>
              <div className="featured-carousel__card-text">
                <h2>{item.name}</h2>
                <p>{item.type}</p>
              </div>
              <div className="featured-carousel__card-action">Enquire Now</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

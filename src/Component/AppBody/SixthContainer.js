import React from "react";
import FeaturedCarousel from "./featured_carousel/FeaturedCarousel";
import './SixthContainer.scss';

export default function SixthContainer() {
    return(
    <div className='sixth-container'>
        <div className="sixth-container__label">BUSINESS OPPORTUNITIES</div>
        <div className="sixth-container__title">Featured Franchise</div>
        <FeaturedCarousel></FeaturedCarousel>
    </div>
    )
}
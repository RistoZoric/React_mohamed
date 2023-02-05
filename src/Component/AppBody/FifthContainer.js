import React from "react";
import './FifthContainer.scss'
import ContainerWrapper from "../ContainerWrapper";
import academy from '../../images/academy.jpeg'

export default function FifthContainer() {
    return(
        <ContainerWrapper className='fifth-container'>
            <div className="fifth-container__academy-text">
                <div className="fifth-container__academy-label">FRANCHISE ACADEMY</div>
                <div className="fifth-container__academy-title">The Ultimate Guide to Franchise your Business</div>
                <div className="fifth-container__academy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada congue scelerisque. In luctus faucibus dui nec vehicula. Ut vel porttitor quam.</div>
                <div className="fifth-container__academy-action">Explore Now</div>
            </div>
            <div className="fifth-container__academy-image">
                <img src={academy} alt='academy'></img>
            </div>
        </ContainerWrapper>
    )
}
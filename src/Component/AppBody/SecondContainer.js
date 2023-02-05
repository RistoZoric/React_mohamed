import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import "./SecondContainer.scss";
import about from "../../images/about-image.jpg";
import { Link } from "react-router-dom";

export default function SecondContainer() {
  return (
    <ContainerWrapper className="second-container">
      <div className="second-container__image">
        <div className="second-container__image-about">
          <img src={about} alt="about"></img>
        </div>
        <div className="second-container__text-about">
          Franchising Support for Your Business
        </div>
      </div>
      <div className="second-container__text">
        <div className="second-container__text-label">
          ABOUT FRANCHISE PORTAL
        </div>
        <div className="second-container__text-title">
          We help businesses grow by franchising!
        </div>
        <div className="second-container__text-descp">
          Franchise UAE is a program created by Khalifa Fund in partnership with
          Francorp Middle East to support the growth and success of small and
          medium-sized enterprises across the UAE through comprehensive
          franchise development services to help businesses navigate the
          franchise process and successfully enter the franchise market.
        </div>
        <div className="second-container__text-list line">
          <span className="second-container__text-list-span">01. </span>
          <Link to="/franchise-fdp">Franchise Development Program</Link>
        </div>
        <div className="second-container__text-list line">
          <span className="second-container__text-list-span">02. </span>
          <Link to="/franchise-sme">SME Initiatives</Link>
        </div>
        {/* <div className='second-container__text-list'><span className='second-container__text-list-span'>03. </span>Franchise Development</div> */}
        <Link className="second-container__text-action" to="/about-partnership">
        Learn More
        </Link>
      </div>
    </ContainerWrapper>
  );
}

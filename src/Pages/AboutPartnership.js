import React from "react";
import "./AboutPartnership.scss";
import logo from "../images/new/uae.jpg";

const AboutPartnership = () => {
  return (
    <div className="about-partnership">
      <div className="about-partnership__banner">About Partnership</div>
      <div className="about-khalifafund__body-banner">
          <img src={logo} alt={"logo"}></img>
        </div>
      <div className="about-partnership__body">
        Khalifa Fund for Enterprise Development has partnered with Francorp
        Middle East, a leading franchise development company, to support the
        growth and success of small and medium-sized enterprises in the UAE.
        Khalifa Fund recognizes the importance of franchising as a key driver of
        economic growth and development in the UAE, as it allows businesses to
        expand their operations and reach new markets while leveraging the
        established brand and business model of a successful franchise. Through
        this partnership, Khalifa Fund aims to provide UAE businesses with the
        necessary resources and support to effectively franchise their
        operations and achieve long-term sustainability and success. By
        partnering with Francorp, Khalifa Fund is able to offer comprehensive
        franchise development services to help businesses navigate the franchise
        process and successfully enter the franchise market.
      </div>
    </div>
  );
};

export default AboutPartnership;

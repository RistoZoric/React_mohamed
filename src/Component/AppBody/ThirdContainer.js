import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import "./ThirdContainer.scss";
import food from "../../images/restaurant-1.png";
import retail from "../../images/retail.png";
import education from "../../images/education.png";
import health from "../../images/health.png";
import beauty from "../../images/beauty.png";
import check from "../../images/check.png";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';

export default function ThirdContainer() {
  return (
    <ContainerWrapper className="third-container">
      <div className="third-container__buy-section">
        <div className="third-container__buy-section-overlay">
          <div className="third-container__text-label">
            FRANCHISE OPPORTUNITY
          </div>
          <div className="third-container__text-buy-title">
            Buy a Franchise Available Now!
          </div>
          <div className="third-container__text-icons">
            <span className="third-container__text-icons-span">
              <img
                className="third-container__text-icons-images"
                src={food}
                width={64}
                height={64}
                alt="food"
              ></img>
              Food & Beverage
            </span>
            <span className="third-container__text-icons-span">
              <img
                className="third-container__text-icons-images"
                src={retail}
                width={64}
                height={64}
                alt="food"
              ></img>
              Retail
            </span>
            <span className="third-container__text-icons-span">
              <img
                className="third-container__text-icons-images"
                src={education}
                width={64}
                height={64}
                alt="food"
              ></img>
              Education
            </span>
            <span className="third-container__text-icons-span">
              <img
                className="third-container__text-icons-images"
                src={health}
                width={64}
                height={64}
                alt="food"
              ></img>
              Health
            </span>
            <span className="third-container__text-icons-span">
              <img
                className="third-container__text-icons-images"
                src={beauty}
                width={64}
                height={64}
                alt="food"
              ></img>
              Beauty
            </span>
          </div>
          <Link
            to="/buy-franchise"
            className="third-container__text-buy-action"
          >
            Explore More
          </Link>
        </div>
      </div>
      <div className="third-container__sell-section">
        <div className="third-container__sell-section-overlay">
          <div className="third-container__text-label">FRANCHISE BUSINESS</div>
          <div className="third-container__text-sell-title">
            Sell Your Franchise With Us
          </div>
          <div className="third-container__text-desc">
            Do you own, run or operate a successful business or have a new
            concept to introduce and looking to sell your Franchise?  Find out
            how franchising your business right can exponentially benefit your
            company growth and expansion goal.
          </div>
          {/* <div className="third-container__text-list">
            <span className="third-container__text-list-span">
              <img src={check} alt="check"></img>
            </span>
            Market Your Franchise
          </div>
          <div className="third-container__text-list">
            <span className="third-container__text-list-span">
              <img src={check} alt="check"></img>
            </span>
            Market Your Franchise
          </div>
          <div className="third-container__text-list">
            <span className="third-container__text-list-span">
              <img src={check} alt="check"></img>
            </span>
            Market Your Franchise
          </div> */}
          <Link
            to="/sell-franchise"
            className="third-container__text-sell-action"
          >
            Learn More
          </Link>
        </div>
      </div>
    </ContainerWrapper>
  );
}

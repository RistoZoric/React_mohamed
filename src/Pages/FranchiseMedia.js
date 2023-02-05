import React from "react";
import "./FranchiseMedia.scss";
import news1 from "../images/news1.jpeg";
import news2 from "../images/news2.jpeg";
import news3 from "../images/news3.jpeg";

const FranchiseMedia = () => {
  return (
    <div className="franchise-media">
      <div className="franchise-media__banner">Franchise News</div>
      <div className="franchise-media__news">
        <div className="franchise-media__news-content">
          <div className="franchise-media__news-content-card">
            <div className="franchise-media__news-content-card-image">
              <img src={news1} alt="news1"></img>
            </div>
            <div className="franchise-media__news-content-card-date_card">
              <div className="franchise-media__news-content-card-day">21</div>
              <div className="franchise-media__news-content-card-month">
                March
              </div>
            </div>
            <div className="franchise-media__news-content-card-desc">
              <div className="franchise-media__news-content-card-label">
                FRANCHISE
              </div>
              <div className="franchise-media__news-content-card-title">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.entrepreneur.com/franchise/5-ways-a-franchise-can-grow-fast/344500"
                >
                  5 Ways a franchise Can Grow Fast
                </a>
              </div>
            </div>
          </div>
          <div className="franchise-media__news-content-card">
            <div className="franchise-media__news-content-card-image">
              <img src={news2} alt="news2"></img>
            </div>
            <div className="franchise-media__news-content-card-date_card">
              <div className="franchise-media__news-content-card-day">21</div>
              <div className="franchise-media__news-content-card-month">
                March
              </div>
            </div>
            <div className="franchise-media__news-content-card-desc">
              <div className="franchise-media__news-content-card-label">
                FRANCHISE
              </div>
              <div className="franchise-media__news-content-card-title">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.businessnewsdaily.com/1783-choosing-franchise.html"
                >
                  Buy the Right Franchise For You.
                </a>
              </div>
            </div>
          </div>
          <div className="franchise-media__news-content-card">
            <div className="franchise-media__news-content-card-image">
              <img src={news3} alt="news3"></img>
            </div>
            <div className="franchise-media__news-content-card-date_card">
              <div className="franchise-media__news-content-card-day">21</div>
              <div className="franchise-media__news-content-card-month">
                March
              </div>
            </div>
            <div className="franchise-media__news-content-card-desc">
              <div className="franchise-media__news-content-card-label">
                FRANCHISE
              </div>
              <div className="franchise-media__news-content-card-title">
                Which franchise is Right For You?
              </div>
            </div>
          </div>
        </div>
        <div className="franchise-media__news-action">Vew More</div>
      </div>
    </div>
  );
};

export default FranchiseMedia;

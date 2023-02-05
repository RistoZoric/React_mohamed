import React from "react";
import './SeventhContainer.scss';
import ContainerWrapper from "../ContainerWrapper";
import news1 from '../../images/news1.jpeg';
import news2 from '../../images/news2.jpeg';
import news3 from '../../images/news3.jpeg';

export default function SeventhContainer() {
    return(
        <ContainerWrapper className='seventh-container'>
            <div className="seventh-container__news">
                <div className="seventh-container__news-label">OUR BLOGS</div>
                <div className="seventh-container__news-title">Franchise News</div>
                <div className="seventh-container__news-content">
                    <div className="seventh-container__news-content-card">
                        <div className="seventh-container__news-content-card-image"><img src={news1} alt='news1'></img></div>
                        <div className="seventh-container__news-content-card-date_card">
                            <div className="seventh-container__news-content-card-day">21</div>
                            <div className="seventh-container__news-content-card-month">March</div>
                        </div>
                        <div className="seventh-container__news-content-card-desc">
                            <div className="seventh-container__news-content-card-label">FRANCHISE</div>
                            <div className="seventh-container__news-content-card-title">5 Ways a franchise Can Grow Fast</div>
                        </div>
                    </div>
                    <div className="seventh-container__news-content-card">
                        <div className="seventh-container__news-content-card-image"><img src={news2} alt='news2'></img></div>
                        <div className="seventh-container__news-content-card-date_card">
                            <div className="seventh-container__news-content-card-day">21</div>
                            <div className="seventh-container__news-content-card-month">March</div>
                        </div>
                        <div className="seventh-container__news-content-card-desc">
                            <div className="seventh-container__news-content-card-label">FRANCHISE</div>
                            <div className="seventh-container__news-content-card-title">Buy the Right Franchise For You.</div>
                        </div>
                    </div>
                    <div className="seventh-container__news-content-card">
                        <div className="seventh-container__news-content-card-image"><img src={news3} alt='news3'></img></div>
                        <div className="seventh-container__news-content-card-date_card">
                            <div className="seventh-container__news-content-card-day">21</div>
                            <div className="seventh-container__news-content-card-month">March</div>
                        </div>
                        <div className="seventh-container__news-content-card-desc">
                            <div className="seventh-container__news-content-card-label">FRANCHISE</div>
                            <div className="seventh-container__news-content-card-title">Which franchise is Right For You?</div>
                        </div>
                    </div>
                </div>
                <div className="seventh-container__news-action">Vew More</div>
            </div>
        </ContainerWrapper>
    )
}
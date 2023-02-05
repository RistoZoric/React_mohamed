import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import "./AppFooter.scss";
import logo from "../images/KF-Logo-black.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import stripe from "../images/stripe.png";
import { useTranslation } from "react-i18next";

export default function AppFooter() {
  const [t, i18n] = useTranslation("common");

  return (
    <ContainerWrapper className="app-footer">
      <div className="app-footer__main">
        <div className="app-footer__main-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="app-footer__main-office">
          <div className="app-footer__main-label">Contact us</div>
          {/* <div className="app-footer__main-item">#121, Lorem ipsum dolor  <br/> Lorem ipsum dolor <br/> Dubai, United Arab Emirates.</div> */}
          <div className={`app-footer__main-item app-footer__main-item-mail`}>
            info@franchiseuae.ae
          </div>
          <div className={`app-footer__main-item app-footer__main-item-phone`}>
            <a href="tel:#">43465000</a>
          </div>
        </div>
        <div className="app-footer__main-links">
          <div className="app-footer__main-label">Links</div>
          <Link to="/" className="app-footer__main-item">
            Home
          </Link>
          <Link to="/about-partnership" className="app-footer__main-item">
            {t("app.navbar.about")}
          </Link>
          <Link to="/buy-franchise" className="app-footer__main-item">
            {t("app.navbar.buy-a-franchise")}
          </Link>
          <Link to="/sell-franchise" className="app-footer__main-item">
            {t("app.navbar.sell-a-franchise")}
          </Link>
          <Link to="/franchise-quiz" className="app-footer__main-item">
            {t("app.navbar.franchise-quiz")}
          </Link>
          <Link to="/franchise-fdp" className="app-footer__main-item">
            {t("app.navbar.services")}
          </Link>
          <Link
            to="/franchise-management-training"
            className="app-footer__main-item"
          >
            {t("app.navbar.academy")}
          </Link>
          <Link to="/franchise-media" className="app-footer__main-item">
            {t("app.navbar.media")}
          </Link>
        </div>

        <div className="app-footer__main-links">
          <div className="app-footer__main-label">About Franchise UAE</div>
          <Link to="/about-partnership" className="app-footer__main-item">
            Partnership
          </Link>
          <Link to="/about-khalifafund" className="app-footer__main-item">
            Khalifa Fund
          </Link>
          <Link to="/about" className="app-footer__main-item">
            Francorp
          </Link>
          {/* <Link to='/' className="app-footer__main-item">Franchise Academy</Link> */}
        </div>

        <div className="app-footer__main-newsletter">
          <div className="app-footer__main-label">Newsletter</div>
          <div className="app-footer__main-item">
            <span className="app-footer__main-item-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              className="app-footer__main-item-input"
              type="text"
              placeholder="Enter You Email Address"
              required
            ></input>
            <span className="app-footer__main-item-arrow">
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </span>
          </div>
        </div>
      </div>
      <div className="app-footer__rights">
        <div className="left">@2022. All Rights reserved.</div>
        <div className="right">
          <img width={125} height={40} src={stripe} alt="food" />
        </div>
      </div>
    </ContainerWrapper>
  );
}

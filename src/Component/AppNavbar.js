import React, { useState } from "react";
import "./AppNavbar.scss";
import logo from "../images/KF-Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";
import toast from "react-hot-toast";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";

export default function AppNavbar() {
  const location = useLocation();
  const { state, dispatch } = useContext(AuthContext);
  const [t, i18n] = useTranslation("common");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [langArabic, setLangArabic] = useState(false);

  const handleLanguageChange = () => {
    if (langArabic) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
    setLangArabic(!langArabic);
  };
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/" className={`navbar__item`}>
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="navbar__items">
          <div
            className={`hidder navbar__item ${
              location.pathname === "/about" && "navbar__item-selected"
            } ${
              location.pathname === "/about-partnership" &&
              "navbar__item-selected"
            } ${
              location.pathname === "/about-khalifafund" &&
              "navbar__item-selected"
            } navbar__services`}
          >
            <Link to="/about-partnership" className="navbar__item1">
              {t("app.navbar.about")}
            </Link>
            <div className="navbar__subservices">
              <Link
                to="/about-partnership"
                className="navbar__subservices-item "
              >
                Franchise UAE
              </Link>
              <Link
                to="/about-khalifafund"
                className="navbar__subservices-item "
              >
                Khalifa Fund
              </Link>
              <Link to="/about" className="navbar__subservices-item ">
                Francorp Middle East
              </Link>
            </div>
          </div>
          {/* <Link to="/about" className={`hidder navbar__item ${location.pathname === '/about' && 'navbar__item-selected'}`}>{t('app.navbar.about')}</Link> */}
          <Link
            to="/buy-franchise"
            className={` hidder navbar__item ${
              location.pathname === "/buy-franchise" && "navbar__item-selected"
            }`}
          >
            {t("app.navbar.buy-a-franchise")}
          </Link>
          <Link
            to="/sell-franchise"
            className={`hidder navbar__item ${
              location.pathname === "/sell-franchise" && "navbar__item-selected"
            }`}
          >
            {t("app.navbar.sell-a-franchise")}
          </Link>
          <Link
            to="/franchise-quiz"
            className={`hidder navbar__item ${
              location.pathname === "/franchise-quiz" && "navbar__item-selected"
            }`}
          >
            {t("app.navbar.franchise-quiz")}
          </Link>
          <div
            className={`hidder navbar__item ${
              location.pathname === "/franchise-sme" && "navbar__item-selected"
            } ${
              location.pathname === "/franchise-fdp" && "navbar__item-selected"
            } navbar__services`}
          >
            <Link to="/franchise-fdp" className="navbar__item1 ">
              {t("app.navbar.services")}
            </Link>

            <div className="navbar__subservices">
              <Link to="/franchise-fdp" className="navbar__subservices-item ">
                Franchise Development Program
              </Link>
              <Link to="/franchise-sme" className="navbar__subservices-item ">
                SME Initiatives
              </Link>
            </div>
          </div>
          {/* <Link to="/franchise-services" className={`hidder navbar__item ${location.pathname === '/franchise-services' && 'navbar__item-selected'}`}>Services</Link> */}
          <div
            className={`hidder navbar__item ${
              location.pathname === "/franchise-management-trainig" &&
              "navbar__item-selected"
            } ${
              location.pathname === "/franchise-sales-training" &&
              "navbar__item-selected"
            } ${
              location.pathname === "/other-training" && "navbar__item-selected"
            } navbar__services`}
          >
            <Link
              to="/franchise-management-training"
              className="navbar__item1"
            >
              {t("app.navbar.academy")}
            </Link>

            <div className="navbar__subservices">
              <Link
                to="/franchise-management-training"
                className="navbar__subservices-item "
              >
                Franchise Management Training
              </Link>
              <Link
                to="/franchise-sales-training"
                className="navbar__subservices-item "
              >
                Franchise Sales Training
              </Link>
              <Link to="/other-training" className="navbar__subservices-item ">
                Other Training
              </Link>
            </div>
          </div>
          {/* <Link to="/franchise-academy" className={`hidder navbar__item ${location.pathname === '/franchise-academy' && 'navbar__item-selected'}`}>{t('app.navbar.academy')}</Link> */}
          <Link
            to="/franchise-media"
            className={`hidder navbar__item ${
              location.pathname === "/franchise-media" &&
              "navbar__item-selected"
            }`}
          >
            {t("app.navbar.media")}
          </Link>
          <div className="navbar__login svg-icon">
            {state.user ? (
              <div
                className="navbar__login-text"
                onClick={() => {
                  dispatch({ type: "LOGOUT" });
                  toast.success("Logged out successfully!");
                }}
              >
                <FaUserCheck />
              </div>
            ) : (
              <div
                className=""
                onClick={() => dispatch({ type: "OPEN_MODAL" })}
              >
                <svg
                  width="40"
                  height="40"
                  fill="#71adc9"
                  version="1.1"
                  viewBox="0 0 700 700"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g transform="translate(0 80)">
                    <path d="m350 28c-138.88 0-252 112.56-252 252s113.12 252 252 252 252-112.56 252-252-113.12-252-252-252zm0 120.4c40.32 0 73.359 33.039 73.359 73.359 0 40.32-33.039 73.359-73.359 73.359s-73.359-33.039-73.359-73.359c0-40.316 33.039-73.359 73.359-73.359zm0 343.84c-68.32 0-129.36-32.48-168.56-82.879 31.922-59.922 95.762-100.8 168.56-100.8 72.801 0 136.64 40.879 168.56 100.8-38.637 50.402-100.24 82.879-168.56 82.879z" />
                  </g>
                </svg>
              </div>
            )}
            {/* {state.user ?
            <div className='navbar__login-text' onClick={() => { dispatch({ type: 'LOGOUT' }); toast.success('Logged out successfully!') }}>{t('app.navbar.logout')}?</div> :
            <div className='navbar__login-text' onClick={() => dispatch({ type: 'OPEN_MODAL' })}>{t('app.navbar.login')}/{t('app.navbar.register')}</div>} */}

            <div className="navbar__arabic" onClick={handleLanguageChange}>
              <FontAwesomeIcon icon={faGlobe} />
              {langArabic ? "EN" : "AR"}
            </div>
          </div>

          <div className="navbar__subservices"></div>
          <div className="navbar__context-menu">
            <div
              className="navbar__context-menu-trigger"
              onClick={() => setOpenDrawer(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            <Drawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              direction="right"
              className="navbar__context-menu-drawer"
            >
              <Link
                to="/about-partnership"
                className={`navbar__item ${
                  location.pathname === "/about-partnership" &&
                  "navbar__item-selected"
                }`}
              >
                Partnership
              </Link>
              <Link
                to="/about-khalifafund"
                className={`navbar__item ${
                  location.pathname === "/about-khalifafund" &&
                  "navbar__item-selected"
                }`}
              >
                Khalifa Fund
              </Link>
              <Link
                to="/about"
                className={`navbar__item ${
                  location.pathname === "/about" && "navbar__item-selected"
                }`}
              >
                Francorp Middle East
              </Link>
              <Link
                to="/buy-franchise"
                className={`navbar__item ${
                  location.pathname === "/buy-franchise" &&
                  "navbar__item-selected"
                }`}
              >
                {t("app.navbar.buy-a-franchise")}
              </Link>
              <Link
                to="/sell-franchise"
                className={`navbar__item ${
                  location.pathname === "/sell-franchise" &&
                  "navbar__item-selected"
                }`}
              >
                {t("app.navbar.sell-a-franchise")}
              </Link>
              <Link
                to="/franchise-quiz"
                className={`navbar__item ${
                  location.pathname === "/franchise-quiz" &&
                  "navbar__item-selected"
                }`}
              >
                {t("app.navbar.franchise-quiz")}
              </Link>
              <Link
                to="/franchise-management-training"
                className={`navbar__item ${
                  location.pathname === "/franchise-management-training" &&
                  "navbar__item-selected"
                }`}
              >
                Franchise Management Training
              </Link>
              <Link
                to="/franchise-sales-training"
                className={`navbar__item ${
                  location.pathname === "/franchise-sales-training" &&
                  "navbar__item-selected"
                }`}
              >
                Franchise Sales Training
              </Link>
              <Link
                to="/other-training"
                className={`navbar__item ${
                  location.pathname === "/other-training" &&
                  "navbar__item-selected"
                }`}
              >
                Franchise Other Training
              </Link>
              <Link
                to="/franchise-media"
                className={`navbar__item ${
                  location.pathname === "/franchise-media" &&
                  "navbar__item-selected"
                }`}
              >
                {t("app.navbar.media")}
              </Link>
              <div className="navbar__login-mobile">
                {state.user ? (
                  <div
                    className="navbar__login-text"
                    onClick={() => {
                      dispatch({ type: "LOGOUT" });
                      toast.success("Logged out successfully!");
                    }}
                  >
                    <FaUserCheck />
                  </div>
                ) : (
                  <div
                    className="navbar__login-text"
                    onClick={() => dispatch({ type: "OPEN_MODAL" })}
                  >
                    <FaUserTimes />
                  </div>
                )}
                {/* {state.user ?
                <div className='navbar__login-text' onClick={() => { dispatch({ type: 'LOGOUT' }); toast.success('Logged out successfully!') }}>{t('app.navbar.logout')}?</div> :
                <div className='navbar__login-text' onClick={() => dispatch({ type: 'OPEN_MODAL' })}>{t('app.navbar.login')}/{t('app.navbar.register')}</div>} */}
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

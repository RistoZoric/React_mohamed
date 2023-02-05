import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import "./FirstContainer.scss";
import landing from "../../images/quiz_img.jpg";
import { useTranslation } from "react-i18next";

export default function FirstContainer({ contactRef }) {
  const [t, i18n] = useTranslation("common");

  // const handleClickExplore = () => {
  //   contactRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const contact = () => {
    const contact =
      document.querySelector(".contact").getBoundingClientRect().top +
      window.pageYOffset;
    window.scrollTo({ top: contact, behavior: "smooth" });
  };

  return (
    <ContainerWrapper className="first-container">
      <div className="first-container__text">
        <div className="first-container__text-label">
          {t("app.home.first-container.label")}
        </div>
        <div className="first-container__text-title">
        We’re here to support you grow and expand, locally and internationally.<br/>Learn how to franchise and discover how you can become world leader through franchising.
        </div>
        <div className="first-container__text-descp">
          Franchise your business, Take your Franchise to the world. Come with
          us to the new world of franchise. Enquire and Explore.
          {/* {t("app.home.first-container.description")} */}
        </div>
        <div className="first-container__text-action" onClick={contact}>
          {t("app.home.first-container.action")}
        </div>
      </div>
    </ContainerWrapper>
  );
}

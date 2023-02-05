import React from "react";
import { Link } from "react-router-dom";
import ContainerWrapper from "../ContainerWrapper";
import "./FourthContainer.scss";
// import quiz from '../../images/quiz.jpeg';

export default function FourthContainer() {
  return (
    <ContainerWrapper className="fourth-container">
      <div className="fourth-container__quiz">
        <div className="fourth-container__quiz-overlay">
          <div className="fourth-container__quiz-label">
            FRANCHISABILITY QUIZ
          </div>
          <div className="fourth-container__quiz-title">
            Are You Franchisable?
          </div>
          <div className="fourth-container__quiz-desc">
            <p>
              Whether or not to franchise is not an easy decision. You’ll need
              to consider the business issues and weigh the pros and cons from
              an informed perspective.
            </p>
          </div>
          <Link to="/franchise-quiz" className="fourth-container__quiz-action">
            Take Franchise Quiz
          </Link>
        </div>
      </div>
    </ContainerWrapper>
  );
}

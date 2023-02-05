import React, { useContext, useState } from "react";
import "./FranchiseQuiz.scss";
import { quiz_data } from "./quiz_data";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import AppProgressBar from "../Component/AppProgressBar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../App";
import { createQuizRecord } from "../api/services";

var partOne = 0;
var partTwo = 0;
var partThree = 0;
var partFour = 0;

const FranchiseQuiz = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [checkedInput, setCheckedInput] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [enableQuiz, setEnableQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRadioButtonClick = (e) => {
    setCheckedInput(e.target.id);
    setScore(e.target.value);
    setButtonClick(false);
  };

  const handleQuizSubmit = async () => {
    const toastId = toast.loading("Submitting quiz......");
    const quiz_data = {
      partOne: partOne,
      partTwo: partTwo,
      partThree: partThree,
      partFour: partFour,
      score: totalScore,
      form: "quiz",
    };
    let header = {
      Authorization: "Token " + state.token,
    };

    setIsLoading(true);
    await createQuizRecord(header, quiz_data)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          setIsLoading(false);
          toast.success("Quiz Submitted!");
          setShowScore(true);
        } else {
          setIsLoading(false);
          toast.error("Something went wrong!");
        }
      })
      .catch((err) => {
        toast.dismiss(toastId);
        setIsLoading(false);
        console.log(err);
        toast.error("Something went wrong!");
      });
  };
  const handleFinishButtonClick = () => {
    if (state.user) {
      handleNextButtonClick();
      handleQuizSubmit();
    } else {
      dispatch({ type: "OPEN_MODAL" });
    }
  };

  const handleFranchiseQuizButton = (props) => {
    setEnableQuiz(true);
  };

  const handleNextButtonClick = () => {
    setCheckedInput([]);
    console.log(score);
    const nextQuestion = currentQuestion + 1;
    if (checkedInput.length === 0) {
      toast.error("Please select one answer!");
      // return setButtonClick(true)
    }
    if (nextQuestion < quiz_data.length) {
      setCurrentQuestion(nextQuestion);
      setTotalScore(totalScore + Number(score));
      setScore(0);
    } else {
      setTotalScore(totalScore + Number(score));
      setScore(0);
      // setShowScore(true)
    }
  };

  if (currentQuestion === 6) {
    partOne = totalScore;
    console.log(partOne);
  } else if (currentQuestion === 12) {
    partTwo = totalScore - partOne;
    console.log(partTwo);
  } else if (currentQuestion === 18) {
    partThree = totalScore - (partTwo + partOne);
    console.log(partThree);
  } else if (currentQuestion === 24) {
    partFour = totalScore - (partOne + partTwo + partThree);
    console.log(partFour);
  }

  const resultText = (marks) => {
    if (marks <= 39) {
      return (
        <p>
          Your business needs to make significant strides – perhaps with the
          help of specialists in your industry – before franchising becomes a
          viable option. If a strong market for your business exists, look for
          ways to improve your score in other areas.
        </p>
      );
    } else if (marks >= 59 && marks <= 40) {
      return (
        <p>
          {" "}
          You have made a promising beginning. Now is the time to work on areas
          critical to successful franchising, such as systematizing your
          business, boosting sales and adding elements that can make your
          business distinctive.
        </p>
      );
    } else if (marks >= 79 && marks <= 60) {
      return (
        <p>
          You have all of the elements in place for a successful franchise. At
          this point your own goals may be more of a determining factor as to
          whether or not you franchise than the viability of your business.
        </p>
      );
    } else if (marks >= 100 && marks <= 80) {
      return (
        <p>
          There’s no such thing as a Can’t Miss Concept, but yours is about as
          close as a business can get to Total Franchisability. Go for it!
        </p>
      );
    } else {
      return <p></p>;
    }
  };

  return (
    <div className="franchise-quiz">
      <div className="franchise-quiz__banner">Franchisability Quiz</div>
      <div className="franchise-quiz__body">
        {/* <div className='franchise-quiz__body-about'>
          <h2>About Franchisability Quiz</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum nibh at lectus sodales convallis in sit amet elit. Suspendisse rhoncus nec elit sit amet eleifend. Nam sit amet risus turpis. Fusce facilisis viverra malesuada.</p>
        </div> */}
        {/* <div className='franchise-quiz__body-content'> */}
        {/* <div className="franchise-quiz__body-content">
          <div className="franchise-quiz__body-content-feedback">
            <div className="franchise-quiz__body-content-feedback-label">
              Thank you for completing Franchisability Quiz!
            </div>
            <div className="franchise-quiz__body-content-feedback-heading">
              Result / Feedback
            </div>
            <div className="franchise-quiz__body-content-feedback-result">
              Your score is{" "}
              <span className="franchise-quiz__body-content-feedback-result-mark">
                {totalScore}
              </span>
            </div>
            <div className="franchise-quiz__body-content-feedback-message">
              {resultText(totalScore)}
            </div>
            <div className="franchise-quiz__body-content-feedback-info">
              Please check your email for a detailed report of your response
              based on the four key determinants of successful franchising
              companies.
            </div>
            <div className="franchise-quiz__body-content-feedback-fra">
              Please click the button to proceed for detailed FRA Questionnaire
              <Link to="/franchise-quiz/franchise-fra">
                <button>
                  Proceed to FRA Questionnaire{" "}
                  <span>
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="franchise-quiz__body-content-feedback-fra">
            <Link to="/franchise-quiz/franchise-fra">
              <button style={{ marginLeft: 0, marginTop: "1rem" }}>
                Receive the full report
              </button>
            </Link>
          </div>
        </div> */}
        {showScore ? (
          <div className="franchise-quiz__body-content">
            <div className="franchise-quiz__body-content-feedback">
              <div className="franchise-quiz__body-content-feedback-label">
                Thank you for completing Franchisability Quiz!
              </div>
              <div className="franchise-quiz__body-content-feedback-heading">
                Result / Feedback
              </div>
              <div className="franchise-quiz__body-content-feedback-result">
                Your score is{" "}
                <span className="franchise-quiz__body-content-feedback-result-mark">
                  {totalScore}
                </span>
              </div>
              <div className="franchise-quiz__body-content-feedback-message">
                {resultText(totalScore)}
              </div>
              <div className="franchise-quiz__body-content-feedback-info">
                Please check your email for a detailed report of your response
                based on the four key determinants of successful franchising
                companies.
              </div>
              <div className="franchise-quiz__body-content-feedback-fra">
                Please click the button to proceed for detailed FRA
                Questionnaire
                <Link to="/franchise-quiz/franchise-fra">
                  <button>
                    Proceed to FRA Questionnaire{" "}
                    <span>
                      <FaArrowRight></FaArrowRight>
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="franchise-quiz__body-content-feedback-fra">
              <Link to="/franchise-quiz/franchise-fra">
                <button style={{ marginLeft: 0, marginTop: "1rem" }}>
                  Receive the full report
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {enableQuiz ? (
              <div className="franchise-quiz__body-content-container">
                <div className="franchise-quiz__body-content-wrapper">
                  <div className="franchise-quiz__body-content-wrapper-label">
                    {quiz_data[currentQuestion].label}
                  </div>
                  <div className="franchise-quiz__body-content-wrapper-questions">
                    <span>{currentQuestion + 1}. </span>
                    {quiz_data[currentQuestion].question}
                  </div>
                  <div className="franchise-quiz__body-content-wrapper-options">
                    {quiz_data[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <div className="franchise-quiz__body-content-wrapper-options-each">
                          <input
                            type="radio"
                            id={answerOption.id}
                            name="quiz"
                            value={answerOption.points}
                            checked={
                              checkedInput === answerOption.id ? true : false
                            }
                            onChange={handleRadioButtonClick}
                          />
                          <label>{answerOption.answerText}</label>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="franchise-quiz__body-content-wrapper-progress">
                  <AppProgressBar
                    completed={quiz_data[currentQuestion].completed}
                  />
                  {currentQuestion === 24 ? (
                    <button
                      id="nextQuestion"
                      disabled={buttonClick}
                      onClick={handleFinishButtonClick}
                    >
                      <span>Finish</span>
                    </button>
                  ) : (
                    <button
                      id="nextQuestion"
                      disabled={buttonClick}
                      onClick={handleNextButtonClick}
                    >
                      <span>Next</span>
                      <FaArrowRight />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <div className="franchise-quiz__body-about">
                  <h2>About Franchisability Quiz</h2>
                  <p>
                    Franchising isn’t the only way to expand your business, but
                    it offers benefits those other methods can’t. For instance,
                    if you have the right idea, at the right time, and have the
                    funds to support it, franchising can help you penetrate the
                    market quickly.
                    <br />
                    <br /> Helping franchisors to grow & expand their business
                    as quickly and effectively as possible is our main aim and
                    we assure that we have the right expertise in place to
                    assist them. Our program is a bespoke portal to help brands
                    develop their franchise and to recruit quality franchisees.{" "}
                    <br />
                    <br />
                    If you think you’re ready for franchising take our
                    franchisability quiz to make sure your business is
                    franchisable.
                  </p>
                </div>
                <div className="franchise-quiz__body-content">
                  <div className="franchise-quiz__body-text">
                    Please proceed to take Franchisability Quiz and FRA
                    assessment to develop your Franchise Program.
                    <div className="franchise-quiz__body-text-button">
                      <button onClick={handleFranchiseQuizButton}>
                        Take the Franchisability Quiz Now!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FranchiseQuiz;

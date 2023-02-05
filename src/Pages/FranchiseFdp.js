import React, { useState } from "react";
import "./FranchiseFdp.scss";
import {
  FaLightbulb,
  FaBalanceScale,
  FaCogs,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";
import { createBusinessRequest } from "../api/services";
import toast from "react-hot-toast";

const FranchiseFdp = () => {
  const [detailsPage, setDetailsPage] = useState(false);
  const [pageContent, setPageContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFranchiseDetails = (e) => {
    console.log(e.target.value);
    setPageContent(e.target.value);
    setDetailsPage(true);
  };

  const handleFDPSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var data = Object.fromEntries(formData.entries());

    data["request_type"] = 1;
    console.log(data);
    const toastId = toast.loading("Submitting request......");

    setIsLoading(true);
    await createBusinessRequest(data)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          setIsLoading(false);
          toast.success("Request Submitted!");
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

  return (
    <div className="franchise-fdp">
      <div className="franchise-fdp__banner">Franchise Development Program</div>
      <div className="franchise-fdp__body">
        <div className="franchise-fdp__body-about">
          <div className="franchise-fdp__body-about-title">
            About Franchise Development Program
          </div>
          <div className="franchise-fdp__body-about-desc">
            <p>
              The services outlined herein are intended to assist the businesses
              in initiating a franchise program.<br/> Our <strong>Franchise Development
              Program</strong> is designed to cater the needs of both new franchisors and
              the existing ones.Check out details about our franchise program
              development services. Franchise UAE provides three ranges of
              services:
            </p>
          </div>
        </div>
        <div className="franchise-fdp__body-program">
          {detailsPage ? (
            <div>
              {pageContent === "partial" && (
                <div className="franchise-fdp__body-program-body">
                  <div className="franchise-fdp__body-program-body-title">
                    PARTIAL PROGRAM
                  </div>
                  <div className="franchise-fdp__body-program-body-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="franchise-fdp__body-program-body-form">
                    <form onSubmit={handleFDPSubmit}>
                      <input
                        hidden
                        name="product"
                        value="Partial Program"
                      ></input>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          placeholder="Name"
                          name="name"
                          required
                        ></input>
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          placeholder="Email"
                          name="email"
                          required
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="number"
                          name="phone"
                          maxLength={10}
                          placeholder="Phone No."
                          required
                        ></input>
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          name="country"
                          placeholder="Country/Region"
                          required
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-message"
                          type="text"
                          name="message"
                          placeholder="Message (Optional)"
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-action"
                          type="submit"
                          value="Submit Request"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {pageContent === "basic" && (
                <div className="franchise-fdp__body-program-body">
                  <div className="franchise-fdp__body-program-body-title">
                    BASIC PROGRAM
                  </div>
                  <div className="franchise-fdp__body-program-body-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="franchise-fdp__body-program-body-form">
                    <form onSubmit={handleFDPSubmit}>
                      <input
                        hidden
                        name="product"
                        value="Basic Program"
                      ></input>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          placeholder="Name"
                          name="name"
                          required
                        ></input>
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          placeholder="Email"
                          name="email"
                          required
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="number"
                          name="phone"
                          maxLength={10}
                          placeholder="Phone No."
                          required
                        ></input>
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          name="country"
                          placeholder="Country/Region"
                          required
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-message"
                          type="text"
                          name="message"
                          placeholder="Message (Optional)"
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-action"
                          type="submit"
                          value="Submit Request"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {pageContent === "full" && (
                <div className="franchise-fdp__body-program-body">
                  <div className="franchise-fdp__body-program-body-title">
                    FULL PROGRAM
                  </div>
                  <div className="franchise-fdp__body-program-body-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <div className="franchise-fdp__body-program-body-form">
                    <form onSubmit={handleFDPSubmit}>
                      <input hidden name="product" value="Full Program"></input>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        ></input>
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          name="email"
                          placeholder="Email"
                          required
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="number"
                          name="phone"
                          maxLength={10}
                          placeholder="Phone No."
                          required
                        ></input>
                        <input
                          className="franchise-fdp__body-program-body-form-row-input"
                          type="text"
                          name="country"
                          placeholder="Country/Region"
                          required
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-row-message"
                          type="text"
                          name="message"
                          placeholder="Message (Optional)"
                        ></input>
                      </div>
                      <div className="franchise-fdp__body-program-body-form-row">
                        <input
                          className="franchise-fdp__body-program-body-form-action"
                          type="submit"
                          value="Submit Request"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="franchise-fdp__body-program-label">
                FRANCHISE DEVELOPMENT PROGRAM
              </div>
              <div className="franchise-fdp__body-program-title">
                PROGRAM SELECTION
              </div>
              <div className="franchise-fdp__body-program-row">
                <div className="franchise-fdp__body-program-row-card franchise-fdp__body-program-row-card_first">
                  <div className="franchise-fdp__body-program-row-card-title">
                    PARTIAL PROGRAM
                  </div>
                  <div className="franchise-fdp__body-program-row-card-details">
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaLightbulb />
                      </span>
                      Strategic Planning & Program Structure
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row grey-text">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon grey-text">
                        <FaBalanceScale />
                      </span>
                      Franchise Legal Documentation
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row grey-text">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon grey-text">
                        <FaCogs />
                      </span>
                      Franchise Operations Services
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row grey-text">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon grey-text">
                        <FaBullhorn />
                      </span>
                      Franchise Marketing Services
                    </div>
                  </div>
                  <button
                    className="franchise-fdp__body-program-row-card-action"
                    value="partial"
                    onClick={handleFranchiseDetails}
                  >
                    GET STARTED <FaArrowRight />
                  </button>
                </div>

                <div className="franchise-fdp__body-program-row-card franchise-fdp__body-program-row-card_second">
                  <div className="franchise-fdp__body-program-row-card-title">
                    BASIC PROGRAM
                  </div>
                  <div className="franchise-fdp__body-program-row-card-details">
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaLightbulb />
                      </span>
                      Strategic Planning & Program Structure
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaBalanceScale />
                      </span>
                      Franchise Legal Documentation
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row grey-text">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon grey-text">
                        <FaCogs />
                      </span>
                      Franchise Operations Services
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row grey-text">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon grey-text">
                        <FaBullhorn />
                      </span>
                      Franchise Marketing Services
                    </div>
                  </div>
                  <button
                    className="franchise-fdp__body-program-row-card-action"
                    value="basic"
                    onClick={handleFranchiseDetails}
                  >
                    GET STARTED <FaArrowRight />
                  </button>
                </div>

                <div className="franchise-fdp__body-program-row-card franchise-fdp__body-program-row-card_third">
                  <div className="franchise-fdp__body-program-row-card-title">
                    FULL PROGRAM
                  </div>
                  <div className="franchise-fdp__body-program-row-card-details">
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaLightbulb />
                      </span>
                      Strategic Planning & Program Structure
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaBalanceScale />
                      </span>
                      Franchise Legal Documentation
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaCogs />
                      </span>
                      Franchise Operations Services
                    </div>
                    <div className="franchise-fdp__body-program-row-card-details-row">
                      <span className="franchise-fdp__body-program-row-card-details-row-icon">
                        <FaBullhorn />
                      </span>
                      Franchise Marketing Services
                    </div>
                  </div>
                  <button
                    className="franchise-fdp__body-program-row-card-action"
                    value="full"
                    onClick={handleFranchiseDetails}
                  >
                    GET STARTED <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FranchiseFdp;

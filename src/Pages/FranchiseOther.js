import React, { useState } from "react";
import "./FranchiseOther.scss";
import Popup from "../Component/Popup";
import toast from "react-hot-toast";
import { createAcademyRequest } from "../api/services";

const FranchiseOther = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [enquireForm, setEnquireForm] = useState(false);

  const handlePopup = () => {
    setButtonPopup(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var data = Object.fromEntries(formData.entries());
    console.log(data);
    const toastId = toast.loading("Submitting request......");

    await createAcademyRequest(data)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          toast.success("Request Submitted!");
          setButtonPopup(false);
        } else {
          toast.error("Something went wrong!");
        }
      })
      .catch((err) => {
        toast.dismiss(toastId);
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="franchise-other">
      <div className="franchise-other__banner">Franchise Other Training</div>
      <div className="franchise-other__body">
        <div className="franchise-other__body-title">
          About Franchise Other Training
        </div>
        <div className="franchise-other__body-text">
          <p>
            The below additional trainings are extensions and essential programs
            that should be acquired by business owners and franchisors while
            considering franchising their business. Other Trainings include:
          </p>
        </div>
        <ul className="franchise-manual__body-text">
          <li>Strategic Planning and Business Plan Development</li>
          <li>Dos and Don’ts in Franchising </li>
          <li>How to properly shape a Legal Structure</li>
          <li>How to draft a Legal Agreement </li>
          <li>Legal Document revision</li>
          <li>How to Market your franchise? </li>
          <li>How to Sell your franchise?</li>
          <li>Operations Consulting and Manual Development </li>
          <li>Operations Manual Drafting, Review and Revision Services</li>
        </ul>
        <div className="franchise-other__body-join">
          <button
            className="franchise-other__body-join-button"
            onClick={handlePopup}
          >
            Join Now
          </button>
        </div>
      </div>

      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        setEnquire={setEnquireForm}
      >
        <div className="franchise-other__popup-form">
          <form onSubmit={handleFormSubmit}>
            <div className="franchise-other__popup-title">Enquire Now</div>
            <input
              hidden
              name="product"
              value="Franchise Other Training"
            ></input>
            <div className="franchise-other__popup-row">
              <input
                className="franchise-other__popup-row-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              ></input>
              <input
                className="franchise-other__popup-row-input"
                type="text"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="franchise-other__popup-row">
              <input
                className="franchise-other__popup-row-input"
                type="number"
                name="phone"
                maxLength={10}
                placeholder="Phone No."
                required
              ></input>
              <input
                className="franchise-other__popup-row-input"
                type="text"
                name="country"
                placeholder="Country/Region"
                required
              ></input>
            </div>
            <div className="franchise-other__popup-row">
              <input
                className="franchise-other__popup-row-message"
                type="text"
                name="company_name"
                placeholder="Company Name"
              ></input>
            </div>
            <div className="franchise-other__popup-row">
              <input
                className="franchise-other__popup-row-message"
                type="text"
                name="message"
                placeholder="Message (Optional)"
              ></input>
            </div>
            <div className="franchise-other__popup-row">
              <input
                className="franchise-other__popup-action"
                type="submit"
                value="Submit Request"
              />
            </div>
          </form>
        </div>
      </Popup>
    </div>
  );
};

export default FranchiseOther;

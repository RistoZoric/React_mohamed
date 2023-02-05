import React, { useState } from "react";
import "./FranchiseSales.scss";
import Popup from "../Component/Popup";
import toast from "react-hot-toast";
import { createAcademyRequest } from "../api/services";

const FranchiseSales = () => {
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
    <div className="franchise-sales">
      <div className="franchise-sales__banner">Franchise Sales Training</div>
      <div className="franchise-sales__body">
        <div className="franchise-sales__body-title">
          About Franchise Sales Training
        </div>
        <div className="franchise-sales__body-text">
          <p>
            Franchise UAE provides Franchise Sales Training to new and existing
            franchisors. Attendees are taught by industry experts with numerous
            years of franchise sales experience, receive a “how to” manual and
            personalized instruction on how to sell effectively. On an ongoing
            basis, Franchise UAE provides implementation consulting to ensure
            that the lessons learned in the classroom work effectively in
            achieving sales.
            <br />
            <br /> As a first step in your franchise sales training program, it
            is important to understand how the program is designed to integrate
            with other materials used in conjunction with franchise marketing.
            The objective of your sales program is to convert leads to franchise
            sales.  Some of the principal topics covered in this sales training
            are:
          </p>
        </div>
        <ul className="franchise-manual__body-text">
          <li>Legal issues</li>
          <li>Setting up a franchise sales system</li>
          <li>The sales process</li>
          <li>
            additional sales methods (special events, trade shows, seminars and
            more)
          </li>
        </ul>
        <div className="franchise-sales__body-join">
          <button
            className="franchise-sales__body-join-button"
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
        <div className="franchise-sales__popup-form">
          <form onSubmit={handleFormSubmit}>
            <div className="franchise-sales__popup-title">Enquire Now</div>
            <input
              hidden
              name="product"
              value="Franchise Sales Training"
            ></input>
            <div className="franchise-sales__popup-row">
              <input
                className="franchise-sales__popup-row-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              ></input>
              <input
                className="franchise-sales__popup-row-input"
                type="text"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="franchise-sales__popup-row">
              <input
                className="franchise-sales__popup-row-input"
                type="number"
                name="phone"
                maxLength={10}
                placeholder="Phone No."
                required
              ></input>
              <input
                className="franchise-sales__popup-row-input"
                type="text"
                name="country"
                placeholder="Country/Region"
                required
              ></input>
            </div>
            <div className="franchise-sales__popup-row">
              <input
                className="franchise-sales__popup-row-message"
                type="text"
                name="company_name"
                placeholder="Company Name"
              ></input>
            </div>
            <div className="franchise-sales__popup-row">
              <input
                className="franchise-sales__popup-row-message"
                type="text"
                name="message"
                placeholder="Message (Optional)"
              ></input>
            </div>
            <div className="franchise-sales__popup-row">
              <input
                className="franchise-sales__popup-action"
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

export default FranchiseSales;

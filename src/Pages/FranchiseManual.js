import React, { useState } from "react";
import "./FranchiseManual.scss";
import Popup from "../Component/Popup";
import { createAcademyRequest } from "../api/services";
import toast from "react-hot-toast";

const FranchiseManual = () => {
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
    <div className="franchise-manual">
      <div className="franchise-manual__banner">
        Franchise Management Training
      </div>
      <div className="franchise-manual__body">
        <div className="franchise-manual__body-title">
          About Franchise Management Training
        </div>
        <div className="franchise-manual__body-text">
          <p>
            The Franchise Management Training Program summarizes many of the key
            development issues that influence franchise companies as they
            continue to expand their business system. A business owner who has
            found success in growing his/her own business will find that
            developing and growing a successful franchise organization requires
            special considerations and efforts that previously had not been an
            integral part of running the company. A franchisor will find there
            are strategic and structural decisions to be made, particular human
            resource needs to be analyzed and filled, and franchisee support
            issues to be addressed.
            <br />
            <br /> To assist a franchisor with his/her growing business, this
            training course, along with the supporting manual, will address some
            of these key issues that are imperative to the proper functioning
            and success of a franchise organization. While the needs and
            concerns of each franchise company are unique, the information
            presented in this manual will provide an overview of the important
            issues to consider as your company formulates its business planning
            and expansion policies. Some of the principal topics covered in this
            management training are:
          </p>
        </div>

        <ul className="franchise-manual__body-text">
          <li>Building the franchisor organization</li>
          <li>Training your franchisees</li>
          <li>Providing effective field suport</li>
          <li>Marketing as a franchisor</li>
          <li>Franchisor compliance</li>
          <li>Franchisee relations</li>
        </ul>
        <div className="franchise-manual__body-join">
          <button
            className="franchise-manual__body-join-button"
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
        <div className="franchise-manual__popup-form">
          <form onSubmit={handleFormSubmit}>
            <div className="franchise-manual__popup-title">Enquire Now</div>
            <input
              hidden
              name="product"
              value="Franchise Manual Training"
            ></input>
            <div className="franchise-manual__popup-row">
              <input
                className="franchise-manual__popup-row-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              ></input>
              <input
                className="franchise-manual__popup-row-input"
                type="text"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="franchise-manual__popup-row">
              <input
                className="franchise-manual__popup-row-input"
                type="number"
                name="phone"
                maxLength={10}
                placeholder="Phone No."
                required
              ></input>
              <input
                className="franchise-manual__popup-row-input"
                type="text"
                name="country"
                placeholder="Country/Region"
                required
              ></input>
            </div>
            <div className="franchise-manual__popup-row">
              <input
                className="franchise-manual__popup-row-message"
                type="text"
                name="company_name"
                placeholder="Company Name"
              ></input>
            </div>
            <div className="franchise-manual__popup-row">
              <input
                className="franchise-manual__popup-row-message"
                type="text"
                name="message"
                placeholder="Message (Optional)"
              ></input>
            </div>
            <div className="franchise-manual__popup-row">
              <input
                className="franchise-manual__popup-action"
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

export default FranchiseManual;

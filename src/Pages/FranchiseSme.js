import React, { useState } from "react";
import "./FranchiseSme.scss";
import { sme_services_data } from "./sme_data";
import { FaArrowRight } from "react-icons/fa";
import Popup from "../Component/Popup";
import { createBusinessRequest } from "../api/services";
import toast from "react-hot-toast";

const FranchiseSme = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [itemid, setItemId] = useState([]);
  const [enquireForm, setEnquireForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sme_data_row_one = sme_services_data.slice(0, 5);
  const sme_data_row_two = sme_services_data.slice(5, 10);

  const handlePopup = (e) => {
    setButtonPopup(true);
    setItemId(e.target.value);
    console.log(e.target.value);
  };

  const handleFranchiseSME = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    var data = Object.fromEntries(formData.entries());

    data["request_type"] = 2;
    console.log(data);
    const toastId = toast.loading("Submitting request......");

    setIsLoading(true);
    await createBusinessRequest(data)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          setIsLoading(false);
          toast.success("Request Submitted!");
          setButtonPopup(false);
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
    <div className="franchise-sme">
      <div className="franchise-sme__banner">
      Franchise UAE SME Initiatives
      </div>
      <div className="franchise-sme__body">
        <div className="franchise-sme__body-title">
          360 Degree of Value Added Services for SMEs
        </div>
        <div className="franchise-sme__body-support">
          <div className="franchise-sme__body-support-body">
            <div className="franchise-sme__body-support-body-row">
              {sme_data_row_one.map((item) => (
                <div className="franchise-sme__body-support-body-card">
                  <img
                    className="franchise-sme__body-support-body-card-img"
                    src={item.icon}
                    alt="sme service icons"
                  ></img>
                  <div className="franchise-sme__body-support-body-card-title">
                    {item.title}
                  </div>
                  {/* <div className="franchise-sme__body-support-body-card-desc">
                    {item.desc}
                  </div> */}
                  <button
                    className="franchise-sme__body-support-body-card-button"
                    value={item.id}
                    onClick={handlePopup}
                  >
                    More Info{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div className="franchise-sme__body-support-body-row">
              {sme_data_row_two.map((item) => (
                <div className="franchise-sme__body-support-body-card">
                  <img
                    className="franchise-sme__body-support-body-card-img"
                    src={item.icon}
                    alt="sme service icons"
                  ></img>
                  <div className="franchise-sme__body-support-body-card-title">
                    {item.title}
                  </div>
                  {/* <div className="franchise-sme__body-support-body-card-desc">
                    {item.desc}
                  </div> */}
                  <button
                    className="franchise-sme__body-support-body-card-button"
                    value={item.id}
                    onClick={handlePopup}
                  >
                    More Info{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              ))}
              <Popup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                setEnquire={setEnquireForm}
              >
                {sme_services_data.map((item) => {
                  if (item.id === parseInt(itemid)) {
                    return (
                      <div className="franchise-sme__popup">
                        <div className="franchise-sme__popup-img">
                          <img src={item.image} alt={item.title}></img>
                        </div>
                        {!enquireForm ? (
                          <div className="franchise-sme__popup-content">
                            <div className="franchise-sme__popup-content-title">
                              {item.title}
                            </div>
                            <div className="franchise-sme__popup-content-list">
                              <ul>
                                {item.details.map((detail) => {
                                  return (
                                    <li>
                                      {detail.name}
                                      <ul>
                                        {detail.sub_details.map(
                                          (sub_detail) => {
                                            return <li>{sub_detail}</li>;
                                          }
                                        )}
                                      </ul>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <button
                              className="franchise-sme__popup-content-button"
                              onClick={() => setEnquireForm(true)}
                            >
                              Enquire Now
                            </button>
                          </div>
                        ) : (
                          <div className="franchise-sme__popup-form">
                            <form onSubmit={handleFranchiseSME}>
                              <input
                                hidden
                                name="product"
                                value={item.title}
                              ></input>
                              <div className="franchise-sme__popup-row">
                                <input
                                  className="franchise-sme__popup-row-input"
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  required
                                ></input>
                                <input
                                  className="franchise-sme__popup-row-input"
                                  type="text"
                                  placeholder="Email"
                                  name="email"
                                  required
                                ></input>
                              </div>
                              <div className="franchise-sme__popup-row">
                                <input
                                  className="franchise-sme__popup-row-input"
                                  type="number"
                                  maxLength={10}
                                  name="phone"
                                  placeholder="Phone No."
                                  required
                                ></input>
                                <input
                                  className="franchise-sme__popup-row-input"
                                  type="text"
                                  name="country"
                                  placeholder="Country/Region"
                                  required
                                ></input>
                              </div>
                              <div className="franchise-sme__popup-row">
                                <input
                                  className="franchise-sme__popup-row-message"
                                  type="text"
                                  placeholder="Message (Optional)"
                                ></input>
                              </div>
                              <div className="franchise-sme__popup-row">
                                <input
                                  className="franchise-sme__popup-action"
                                  onSubmit={() => setEnquireForm(false)}
                                  type="submit"
                                  value="Submit Request"
                                />
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSme;

import React, { useState, useEffect, forwardRef } from "react";
import "./EighthContainer.scss";
import ContainerWrapper from "../ContainerWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faMobile,
  faEnvelope,
  faUserTie,
  faPhone,
  faExclamationCircle,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
// import { fa } from '@fortawesome/free-regular-svg-icons';
import toast from "react-hot-toast";
import { createContactRequest } from "../../api/services";

const EighthContainer = forwardRef((props, ref) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });
  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  useEffect(() => {
    if (requestData.phone.length > 0 && requestData.phone.length !== 10) {
      setErrorMessage("-> Enter Valid contact Number !!");
    } else if (requestData.email != "" && !emailRegex.test(requestData.email)) {
      setErrorMessage("-> Enter Valid Email Id !!");
    } else {
      setErrorMessage("");
    }
  }, [requestData]);

  const handleName = (e) => {
    setRequestData((prevData) => ({ ...prevData, name: e.target.value }));
  };
  const handleEmail = (e) => {
    setRequestData((prevData) => ({ ...prevData, email: e.target.value }));
  };
  const handlePhone = (e) => {
    setRequestData((prevData) => ({ ...prevData, phone: e.target.value }));
  };
  const handleOption = (e) => {
    setRequestData((prevData) => ({ ...prevData, option: e.target.value }));
  };
  const handleMessage = (e) => {
    setRequestData((prevData) => ({ ...prevData, message: e.target.value }));
  };

  const handleSubmit = async () => {
    const toastId = toast.loading("Submitting Inquiry Request...");
    setIsLoading(true);
    await createContactRequest(requestData)
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
    <ContainerWrapper className="eighth-container">
      <div ref={ref} className="eighth-container__contact contact">
        <div className="eighth-container__contact-label">CONTACT US</div>
        <div className="eighth-container__contact-title">Get in Touch!</div>
        <div className="eighth-container__contact-desc">
          Determine whether you are eligible to franchise! <br></br>Take free
          franchise quiz now!
        </div>
        <div className="eighth-container__contact-details">
          {/* <div className="eighth-container__contact-details-address"><span className="eighth-container__contact-details-font-address"><FontAwesomeIcon icon={faLocationCrosshairs} /></span><p className="eighth-container__contact-details-address">#121, Lorem ipsum dolor, Lorem ipsum dolor, Dubai, united Arab Emirates.</p></div> */}
          <div className="eighth-container__contact-details-phone">
            <span className="eighth-container__contact-details-font">
              <FontAwesomeIcon icon={faMobile} />
            </span>
            <p className="eighth-container__contact-details-connect">
              <a href="tel:#">600500506</a>
            </p>
          </div>
          <div className="eighth-container__contact-details-email">
            <span className="eighth-container__contact-details-font-mail">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <p className="eighth-container__contact-details-connect">
              info@franchiseuae.ae
            </p>
          </div>
        </div>
      </div>
      <div className="eighth-container__contact-form">
        <form>
          <div className="eighth-container__contact-row">
            <span className="eighth-container__contact-row-icon">
              <FontAwesomeIcon icon={faUserTie} />
            </span>
            <input
              className="eighth-container__contact-row-input"
              type="text"
              placeholder="Name"
              onChange={(e) => handleName(e)}
              required
            ></input>
            <span className="eighth-container__contact-row-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              className="eighth-container__contact-row-input"
              type="text"
              placeholder="Email"
              onChange={(e) => handleEmail(e)}
              required
            ></input>
          </div>
          <div className="eighth-container__contact-row">
            <span className="eighth-container__contact-row-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input
              className="eighth-container__contact-row-input"
              type="number"
              maxLength={10}
              placeholder="Phone No."
              onChange={(e) => handlePhone(e)}
              required
            ></input>
            <span className="eighth-container__contact-row-icon">
              <FontAwesomeIcon icon={faExclamationCircle} />
            </span>
            <select
              required
              className="eighth-container__contact-row-input"
              onChange={(e) => handleOption(e)}
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="sell franchise">Sell a Franchise</option>
              <option value="buy franchise">Buy a Franchise</option>
              <option value="franchise academy">Franchise Academy</option>
              <option value="others">others</option>
            </select>
            {/* <input className='eighth-container__contact-row-input' type='text' placeholder='Subject' required></input> */}
          </div>
          <div className="eighth-container__contact-row">
            <span className="eighth-container__contact-row-icon">
              <FontAwesomeIcon icon={faPen} />
            </span>
            <input
              className="eighth-container__contact-row-message"
              type="text"
              onChange={(e) => handleMessage(e)}
              placeholder="How can we help you? Feel free to get in touch!"
            ></input>
          </div>
          <div className="eighth-container__contact-row">
            <input
              className="eighth-container__contact-action"
              onClick={() => handleSubmit()}
              type="button"
              value="Get in Touch"
            />
          </div>
        </form>
        {/* <form>
                    <div>
                        <div className="eighth-container__contact-form-details">
                            <span><FontAwesomeIcon icon={faUserTie} /></span>
                            <input type='text' placeholder="Name" name="name"></input>
                        </div>
                        <div className="eighth-container__contact-form-details">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input type='email' placeholder="Email Address" name='email'></input>
                        </div>
                    </div>
                    <div>
                        <div className="eighth-container__contact-form-details">
                            <span><FontAwesomeIcon icon={faPhoneVolume} /></span>
                            <input type='text' placeholder='Phone' name="phone"></input>
                        </div>
                        <div className="eighth-container__contact-form-details">
                            <span><FontAwesomeIcon icon={faExclamationCircle} /></span>
                            <input type='text' placeholder="Subject" name='subject'></input>
                        </div>
                    </div>
                    <div className="eighth-container__contact-form-desc">
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <input type='text' placeholder="How can we help you? Feel free to get in touch!" name='desc'></input>
                    </div>
                    <div className="contact-form-submit"><input type="submit" value="Get in Touch" /></div>
                </form> */}
      </div>
    </ContainerWrapper>
  );
});

export default EighthContainer;

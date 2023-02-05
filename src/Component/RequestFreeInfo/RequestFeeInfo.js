import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createEnquiry } from "../../api/services";
import { countryList } from "../../Utils/constants";
import AppSelect from "../AppSelect";
import "./RequestFeeInfo.scss";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

export default function RequestFeeInfo({ brandId, isPopup = false }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requestData, setRequestData] = useState({
    brand: brandId,
    name: "",
    email: "",
    country: "",
    phone: "",
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
  const handleMessage = (e) => {
    setRequestData((prevData) => ({ ...prevData, message: e.target.value }));
  };

  const handleSelectedNationality = (item) => {
    setRequestData((prevData) => ({ ...prevData, country: item }));
  };

  const handleSubmit = async () => {
    const toastId = toast.loading("Submitting Inquiry Request...");
    setIsLoading(true);
    await createEnquiry(requestData)
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

  const handleButtonDisabled = () => {
    return (
      requestData.name == "" ||
      requestData.phone == "" ||
      requestData.phone.length != 10 ||
      requestData.email == "" ||
      requestData.country == "" ||
      errorMessage !== ""
    );
  };
  return (
    <div className={`request_free_info ${isPopup && "is_popup"}`}>
      {!isPopup && (
        <h2 className="request_free_info__header">REQUEST FOR MORE INFO</h2>
      )}
      <div className="request_free_info__body">
        <form>
          <div className="row">
            <div className="col-sm-6">
              <input
                className="request_free_info__body-row-input"
                type="text"
                placeholder="Name"
                onChange={(e) => handleName(e)}
                required
              ></input>
            </div>

            <div className="col-sm-6">
              <input
                className="request_free_info__body-row-input"
                type="text"
                placeholder="Email"
                onChange={(e) => handleEmail(e)}
                required
              ></input>
            </div>

            <div className="col-sm-6">
              <input
                className="request_free_info__body-row-input"
                type="number"
                maxLength={10}
                placeholder="Phone No."
                onChange={(e) => handlePhone(e)}
                required
              ></input>
            </div>

            <div className="col-sm-6">
              <AppSelect
                className="request_free_info__body-row-input"
                placeholder={"Country/Region"}
                options={countryList}
                selectedOption={(item, optionName) =>
                  handleSelectedNationality(item)
                }
              />
            </div>
          </div>

          <div className="request_free_info__body-row">
            <textarea
              className="request_free_info__body-row-message textarea"
              type="text"
              placeholder="Message (Optional)"
              onChange={(e) => handleMessage(e)}
            ></textarea>
          </div>
          {errorMessage != "" && (
            <div className="request_free_info__body-error">{errorMessage}</div>
          )}
          <div className="request_free_info__body-row">
            <input
              className="request_free_info__body-action"
              disabled={handleButtonDisabled()}
              type="button"
              onClick={() => handleSubmit()}
              value={isLoading ? "Submitting..." : "Submit Request"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

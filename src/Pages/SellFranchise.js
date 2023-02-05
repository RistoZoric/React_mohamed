import React, { useContext, useState } from "react";
import "./SellFranchise.scss";
import { Link } from "react-router-dom";
import AgreementFile from "../assets/BrokerageAgreementTemplate.pdf";
import { AuthContext } from "../App";
import toast from "react-hot-toast";
import { createPaymentLink } from "../api/services";

export default function SellFranchise() {
  const { state, dispatch } = useContext(AuthContext);
  const [doneDevProg, setDoneDevProg] = useState();
  const [isFrancorp, setIsFrancorp] = useState();

  const handleDownloadAgreement = () => {
    // using Java Script method to get PDF file
    fetch(AgreementFile).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "BrokerageAgreement.pdf";
        alink.click();
      });
    });
  };
  const handlePayment = async () => {
    const toastId = toast.loading("Submitting Payment Request...");
    let request = {
      Authorization: "Token " + state.token,
    };
    await createPaymentLink(request)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          console.log("Success....");
          window.open(resp.data.dataInfo.url, "_self");
        } else {
          toast.error("Something went wrong!");
          console.log("error....");
        }
      })
      .catch((err) => {
        toast.dismiss(toastId);
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  const handlePaymentSubmit = async () => {
    if (!state.user) {
      dispatch({ type: "OPEN_MODAL" });
    } else {
      handlePayment();
    }
  };
  return (
    <div className="sell-franchise">
      <div className="sell-franchise__banner">Sell Your Franchise</div>
      <div className="sell-franchise__body">
        <div className="sell-franchise__body-title">
          {/* About Sell Your Franchise */}
        </div>
        <div className="sell-franchise__body-descp">
          Franchising is being implemented by more businesses and more types of
          businesses than ever before.
           Today, almost any product or service can be distributed through
          franchising.
          <br /> <br/>Whether you have a new concept to introduce, an existing
          business in need of faster growth, or you just don’t have the capital
          to expand, the question often is: “Can we afford to go slowly and
          perhaps miss the chance of a lifetime, or should we take the expansion
          plunge and risk losing the business itself?” Franchise UAE has been
          helping brands, both large and small to develop their businesses into
          successful franchises and helping existing franchisors expand their
          networks regionally and globally.
          <br /> <br/>Think you have what it takes to franchise? Learn more about the
          Selling Process and find out which qualities are essential to making
          it work.
        </div>

        <div className="sell-franchise__body-title">The Selling Process</div>
        <div className="sell-franchise__body-content">
          <div className="sell-franchise__body-content-quest">
            <div className="sell-franchise__body-content-quest-text">
              Have you done any sort of a Franchise Development Program?
            </div>
            <div className="sell-franchise__body-content-quest-action">
              <label for="Yes">Yes</label>
              <input
                className="sell-franchise__body-content-quest-action-radio"
                checked={doneDevProg}
                type="radio"
                value="Yes"
                onClick={() => setDoneDevProg(true)}
              />
              <label for="No">No</label>
              <input
                className="sell-franchise__body-content-quest-action-radio"
                checked={doneDevProg === false}
                type="radio"
                value="No"
                onClick={() => setDoneDevProg(false)}
              />
            </div>
          </div>
          {doneDevProg && (
            <div className="sell-franchise__body-content-quest">
              <div className="sell-franchise__body-content-quest-text">
                Choose your Franchise Consultant:
              </div>
              <div className="sell-franchise__body-content-quest-action">
                <label for="Francorp">Francorp</label>
                <input
                  className="sell-franchise__body-content-quest-action-radio"
                  checked={isFrancorp}
                  type="radio"
                  value="Francorp"
                  onClick={() => setIsFrancorp(true)}
                />
                <label for="Other">Other</label>
                <input
                  className="sell-franchise__body-content-quest-action-radio"
                  checked={isFrancorp === false}
                  type="radio"
                  value="Other"
                  onClick={() => setIsFrancorp(false)}
                />
              </div>
            </div>
          )}
          {doneDevProg === false && (
            <div className="sell-franchise__body-content-redirect">
              <div className="sell-franchise__body-content-quest-text">
                Please proceed to take Franchisability Quiz and FRA assessment
                to develop your Franchise Program.
              </div>
              <div className="sell-franchise__body-content-quest-action">
                <Link
                  to="/franchise-quiz"
                  className="sell-franchise__body-content-quest-action-link"
                >
                  Take the Franchisability Quiz Now!
                </Link>
              </div>
            </div>
          )}
          {doneDevProg && (
            <div>
              {isFrancorp && (
                <div className="sell-franchise__body-content-francorp">
                  <object
                    data={AgreementFile + "#toolbar=0"}
                    type="application/pdf"
                    className="sell-franchise__body-content-francorp-pdf"
                  ></object>
                  <div className="sell-franchise__body-content-francorp-action">
                    <div className="sell-franchise__body-content-francorp-action-text">
                      Download the Brokerage Agreement and Fill the Information
                      and send it back to us by email: info@gmail.com{" "}
                    </div>
                    <div className="sell-franchise__body-content-francorp-action-text">
                      {" "}
                      15%-20% Success Fee (from franchise fee) will be
                      applicable
                      <div
                        className="sell-franchise__body-content-francorp-action-button"
                        onClick={() => handleDownloadAgreement()}
                      >
                        Download Brokerage Agreement!
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isFrancorp === false && (
                <div className="sell-franchise__body-content-others">
                  <div className="sell-franchise__body-content-others-action">
                    <div className="sell-franchise__body-content-others-action-text">
                      {" "}
                      If it is Third Party, There will be a Brokerage Agreement
                      fee of 50$ has to pay
                    </div>
                    <div
                      className="sell-franchise__body-content-others-action-button"
                      onClick={handlePaymentSubmit}
                    >
                      Proceed to Payment
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

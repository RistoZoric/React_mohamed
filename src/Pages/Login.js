import React, { useContext, useEffect, useReducer, useState } from "react";
import { createNewUser, loginUser } from "../api/services";
import { AuthContext } from "../App";
import AppSelect from "../Component/AppSelect";
import { countryList } from "../Utils/constants";
import { HashLoader } from "react-spinners";
import "./Login.scss";
import toast from "react-hot-toast";

export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [logInData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    nationality: "",
    contact_number: "",
    company_name: "",
    designation: "",
    membership_id: "",
    password: "",
  });

  const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  useEffect(() => {
    if (confirmPassword == signUpData.password) setConfirmPasswordValid(true);
    else setConfirmPasswordValid(false);

    if (
      signUpData.contact_number.length > 0 &&
      signUpData.contact_number.length !== 10
    ) {
      setErrorMessage("-> Enter Valid contact Number !!");
    } else if (signUpData.email != "" && !emailRegex.test(signUpData.email)) {
      setErrorMessage("-> Enter Valid Email Id !!");
    } else if (confirmPassword !== "" && !confirmPasswordValid) {
      setErrorMessage(`-> Password doesn't match !!`);
    } else {
      setErrorMessage("");
    }
  }, [signUpData, confirmPassword, confirmPasswordValid]);

  const handleLoginEmail = (e) => {
    setLoginData((prevData) => ({ ...prevData, email: e.target.value }));
  };
  const handleLoginPswd = (e) => {
    setLoginData((prevData) => ({ ...prevData, password: e.target.value }));
  };
  const handleLogIn = async (payload) => {
    const toastId = toast.loading("Logging in ...");
    setIsLoading(true);
    await loginUser(payload)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          dispatch({
            type: "LOGIN",
            payload: { user: payload, token: resp.data.token },
          });
          setIsLoading(false);
          toast.success("Logged in Successfully!");
        }
      })
      .catch((err) => {
        toast.dismiss(toastId);
        dispatch({ type: "CLOSE_MODAL" });
        setIsLoading(false);
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  const handleSignUpFirstName = (e) => {
    setSignUpData((prevData) => ({ ...prevData, first_name: e.target.value }));
  };
  const handleSignUpLastName = (e) => {
    setSignUpData((prevData) => ({ ...prevData, last_name: e.target.value }));
  };
  const handleSignUpContactNo = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      contact_number: e.target.value,
    }));
  };
  const handleSignUpCompanyName = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      company_name: e.target.value,
    }));
  };
  const handleSignUpDesignation = (e) => {
    setSignUpData((prevData) => ({ ...prevData, designation: e.target.value }));
  };
  const handleSignUpMembership = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      membership_id: e.target.value,
    }));
  };
  const handleSignUpEmail = (e) => {
    setSignUpData((prevData) => ({ ...prevData, email: e.target.value }));
  };
  const handleSignUpPswd = (e) => {
    setSignUpData((prevData) => ({ ...prevData, password: e.target.value }));
  };
  const handleSignUp = async () => {
    const toastId = toast.loading("Creating New User...");
    setIsLoading(true);

    let data = { ...signUpData };
    if (!signUpData.membership_id) {
      delete data.membership_id;
    }

    await createNewUser(signUpData.membership_id ? signUpData : data)
      .then((resp) => {
        toast.dismiss(toastId);
        if (resp.data.isSuccess) {
          setIsLoading(false);
          toast.success("Registration Completed!");
          setOpenSignUp(false);
          handleLogIn({
            email: signUpData.email,
            password: signUpData.password,
          });
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

  const handleSelectedNationality = (item) => {
    setSignUpData((prevData) => ({ ...prevData, nationality: item }));
  };

  const checkLoginValidity = () => {
    if (logInData.email === "" || logInData.password === "") return true;
  };

  const checkCreateUserValidity = () => {
    if (
      signUpData.first_name === "" ||
      signUpData.last_name === "" ||
      signUpData.email === "" ||
      signUpData.nationality === "" ||
      signUpData.contact_number === "" ||
      signUpData.contact_number.length < 10 ||
      signUpData.company_name === "" ||
      signUpData.designation === "" ||
      signUpData.password === "" ||
      !confirmPasswordValid ||
      confirmPassword === "" ||
      errorMessage !== ""
    )
      return true;
  };
  return (
    <div className="login">
      {isLoading && <HashLoader color={"#fff"} loading={true} size={100} />}

      {!isLoading && (
        <div
          className={`${
            openSignUp && "login__container-signup"
          } login__container`}
        >
          <div
            className="login__container-close"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            ×
          </div>
          <div className="login__container-header">
            {openSignUp ? "Sign Up" : "Log In"}
          </div>
          {!openSignUp && (
            <div className="login__container-content">
              <input
                className="login__container-content-input"
                type={"text"}
                placeholder={"Username or email"}
                value={logInData.email}
                onChange={(e) => handleLoginEmail(e)}
                required
              />
              <input
                className="login__container-content-input"
                type={"password"}
                placeholder={"Password"}
                value={logInData.password}
                onChange={(e) => handleLoginPswd(e)}
                required
              />
              <button
                className="login__container-content-action"
                disabled={checkLoginValidity()}
                onClick={() => handleLogIn(logInData)}
                type={"submit"}
              >
                Login
              </button>
              <div className="login__container-content-text">
                Lost your password? Get help
              </div>
            </div>
          )}

          {openSignUp && (
            <div className="login__container-content">
              <div className="login__container-content-row">
                <input
                  className="login__container-content-input"
                  type={"text"}
                  placeholder={"First Name"}
                  value={signUpData.first_name}
                  onChange={(e) => handleSignUpFirstName(e)}
                  required
                />
                <input
                  className="login__container-content-input"
                  type={"text"}
                  placeholder={"Last Name"}
                  value={signUpData.last_name}
                  onChange={(e) => handleSignUpLastName(e)}
                  required
                />
              </div>

              <input
                className="login__container-content-input"
                type={"text"}
                placeholder={"Email"}
                value={signUpData.email}
                onChange={(e) => handleSignUpEmail(e)}
                required
              />

              <div className="login__container-content-row">
                <AppSelect
                  className="login__container-content-input app-select"
                  placeholder={"Select Nationality"}
                  options={countryList}
                  selectedOption={(item, optionName) =>
                    handleSelectedNationality(item)
                  }
                />
                <input
                  className="login__container-content-input"
                  type={"number"}
                  maxLength={10}
                  placeholder={"Contact Number"}
                  value={signUpData.contact_number}
                  onChange={(e) => handleSignUpContactNo(e)}
                  required
                />
              </div>

              <div className="login__container-content-row">
                <input
                  className="login__container-content-input"
                  type={"text"}
                  placeholder={"Company Name"}
                  value={signUpData.company_name}
                  onChange={(e) => handleSignUpCompanyName(e)}
                  required
                />
                <input
                  className="login__container-content-input"
                  type={"text"}
                  placeholder={"Profession"}
                  value={signUpData.designation}
                  onChange={(e) => handleSignUpDesignation(e)}
                  required
                />
              </div>

              <input
                className="login__container-content-input"
                type={"text"}
                placeholder={"Khalifa Fund Membership ID (Optional)"}
                value={signUpData.membership_id}
                onChange={(e) => handleSignUpMembership(e)}
              />

              <input
                className="login__container-content-input"
                type={"password"}
                placeholder={"Create New Password"}
                value={signUpData.password}
                onChange={(e) => handleSignUpPswd(e)}
                required
              />
              <input
                className="login__container-content-input"
                type={"password"}
                placeholder={"Confirm Password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              {errorMessage !== "" && (
                <div className="login__container-content-error">
                  {errorMessage}
                </div>
              )}
              <button
                className="login__container-content-action"
                disabled={checkCreateUserValidity()}
                onClick={() => handleSignUp()}
                type={"submit"}
              >
                Create User
              </button>
            </div>
          )}

          {!openSignUp && (
            <div className="login__container-footer">
              <div className="login__container-footer-text">
                Don't have an account?
              </div>
              <button
                className="login__container-footer-action"
                type={"submit"}
                onClick={() => setOpenSignUp(true)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

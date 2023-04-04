import React, { useState, useEffect, Component } from "react";
import "./SignUpStyle.css";
import "./LoginStyle.css";
import SignInValidation from "./SignInValidation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignInPage = () => {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("values"));
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [signInValues, setSignInValues] = useState({
    signinemail: "",
    signinpassword: "",
  });
  function handlChange(e) {
    setSignInValues({ ...signInValues, [e.target.name]: e.target.value });
  }
  function handleLogin(e) {
    e.preventDefault();
    setErrors(SignInValidation(signInValues));
    let email = signInValues.signinemail;
    let password = signInValues.signinpassword;
    if (email === data.email && password === data.password) {
      toast.success("login successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        style: {
          backgroundColor: "white",
          color: "blue",
          width: 250,
          display: "inline-block",
          alignItems: "center",
        },
      });
      setTimeout(() => {
        navigate("/home");
      }, 1100);
      setErrorMessage("");
    } else {
    }
  }
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      signInValues.signinemail !== "" &&
      signInValues.signinpassword !== ""
    ) {
      setErrorMessage("In valid Email and Password ");
    }
  }, [errors]);
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      {/* Login Page  */}
      <div class="wrapper">
        <div class="containers">
          <div class="tabs">
            <input
              type="radio"
              class="tabs__button"
              name="signForm"
              id="signIn"
              checked
            />
            <label class="tabs__text" for="signIn">
              Sign In
            </label>
            <div class="tabs__content">
              <h1>Welcome back!</h1>
              <p>Get back on your track</p>
              <form class="form">
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="text"
                    placeholder="&nbsp;"
                    name="signinemail"
                    id="signinemail"
                    autocomplete="off"
                    required
                    value={signInValues.signinemail}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="username">
                    Email
                  </label>
                  <p>
                    {errors.signinemail && (
                      <p className="Errors">{errors.signinemail}</p>
                    )}
                  </p>
                </div>
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="password"
                    placeholder="&nbsp;"
                    id="password"
                    required
                    name="signinpassword"
                    value={signInValues.signinpassword}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="password">
                    Password
                  </label>
                  <p>
                    {errors.signinpassword && (
                      <p className="Errors">{errors.signinpassword}</p>
                    )}
                  </p>
                </div>
                <div class="flex-space-between">
                  <label class="flex-align-center">
                    {errorMessage && (
                      <div className="errorMessage">{errorMessage}</div>
                    )}
                  </label>
                  <p>
                    <a href="#" type="button" onClick={handleClick}>
                      New Users?
                    </a>
                  </p>
                </div>
                <button type="submit" onClick={handleLogin}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignInPage;

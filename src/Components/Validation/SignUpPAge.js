import React, { useState, useEffect } from "react";
import "./SignUpStyle.css";
import SignUpValidation from "./SignUpValidation";
import { useNavigate } from "react-router-dom";
const SignUpPAge = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  console.log(errors);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  });

  function handlChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrors(SignUpValidation(values));
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.firstname !== "" &&
      values.lastname !== ""
    ) {
      localStorage.setItem("values", JSON.stringify(values));
      navigate("/login");
    }
  }, [errors]);

  function LoginPage() {
    navigate("/login");
  }
  return (
    <>
      {/* sign up  */}

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
              <h1>New Account</h1>
              <p>Start Your journey now</p>
              <form class="form" onSubmit={handleSubmit}>
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="text"
                    placeholder="&nbsp;"
                    id="signinemail"
                    autocomplete="off"
                    required
                    name="firstname"
                    value={values.firstname}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="username">
                    First Name
                  </label>
                  <p>
                    {errors.firstname && (
                      <p className="Errors">{errors.firstname}</p>
                    )}
                  </p>
                </div>
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="text"
                    placeholder="&nbsp;"
                    id="text"
                    required
                    name="lastname"
                    value={values.lastname}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="password">
                    Last Name
                  </label>
                  <p>
                    {errors.lastname && (
                      <p className="Errors">{errors.lastname}</p>
                    )}
                  </p>
                </div>
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="email"
                    placeholder="&nbsp;"
                    id="email"
                    required
                    name="email"
                    value={values.email}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="password">
                    Email
                  </label>
                  <p>
                    {errors.email && <p className="Errors">{errors.email}</p>}
                  </p>
                </div>
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="number"
                    placeholder="&nbsp;"
                    id="number"
                    required
                    name="number"
                    value={values.number}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="password">
                    Phone Number
                  </label>
                  <p>
                    {errors.number && <p className="Errors">{errors.number}</p>}
                  </p>
                </div>
                <div class="input-group">
                  <input
                    class="input-group__input"
                    type="password"
                    placeholder="&nbsp;"
                    id="password"
                    required
                    name="password"
                    value={values.password}
                    onChange={handlChange}
                  />
                  <label class="input-group__label" for="password">
                    Password
                  </label>
                  <p>
                    {errors.password && (
                      <p className="Errors">{errors.password}</p>
                    )}
                  </p>
                </div>

                <div class="flex-space-between">
                  <label class="flex-align-center"></label>
                  <p>
                    <a href="#" type="button" onClick={LoginPage}>
                      Already have a account?
                    </a>
                  </p>
                </div>
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPAge;

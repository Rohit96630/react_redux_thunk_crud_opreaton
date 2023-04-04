import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddUser.css";
import { useDispatch } from "react-redux";
import { addUsers } from "../../Redux/actions";
import Swal from "sweetalert2";

const AddUsers = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });
  const { name, phone, email, date } = user;

  const [errorMessage, setErrorMessage] = useState("");
  const [successFull, setSuccessFull] = useState("");
  console.log(errorMessage);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSumbit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "" || date === "") {
      setErrorMessage("Please fill all the fields.....");
    } else {
      dispatch(addUsers(user));
      Swal.fire({
        icon: "success",
        title: "Data Added Successful!",
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        navigate("/home");
      }, 1100);
      setErrorMessage("");
    }
  };

  return (
    <form className=" p-5 responsive">
      <div className=" Adduser_style shadow-lg rounded p-3">
        <div className="row d-flex justify-content-center " onSumbit={onSumbit}>
          <h2 className="text-center">
            <b>Add User Information</b>
          </h2>
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          {successFull && <div className="successFull">{successFull}</div>}
          <div className="col-md-5 mb-3">
            <label>FullName</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="fullname..."
              value={name}
              name="name"
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-5 mb-3">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="validationServer02"
              name="phone"
              placeholder="number..."
              value={phone}
              required
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row  d-flex justify-content-center ">
          <div className="col-md-5 mb-3">
            <label>Email Id :</label>
            <input
              type="email"
              className="form-control"
              id="validationServer04"
              placeholder="email... "
              value={email}
              name="email"
              required
              onChange={(e) => onInputChange(e)}
            />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <label>Date Of Birth</label>
            <input
              type="date"
              className="form-control"
              id="validationServer05"
              placeholder="Zip"
              required
              value={date}
              name="date"
              onChange={(e) => onInputChange(e)}
            />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>
        <div className="row  d-flex justify-content-center ">
          <div className="col-md-2 m-3">
            <button
              className="btn btn-primary  sm "
              type="submit"
              onClick={onSumbit}
            >
              Submit form
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUsers;

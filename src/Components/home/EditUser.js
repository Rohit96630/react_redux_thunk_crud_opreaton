import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddUser.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../../Redux/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });
  const { name, phone, email, date } = state;

  const { user } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, []);
  const onInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSumbit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "" || date === "") {
      setErrorMessage("Please fill all the fields.....");
    } else {
      dispatch(updateUser(state, id));

      toast.success("Data updated successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        style: {
          backgroundColor: "black",
          color: "white",
          width: 250,
          display: "inline-block",
          alignItems: "center",
        },
      });

      setTimeout(() => {
        navigate("/home");
      }, 1100);
      setErrorMessage("");
    }
  };

  return (
    <>
      <form className=" p-5 responsive">
        <div className=" Adduser_style shadow-lg rounded p-3">
          <div
            className="row d-flex justify-content-center "
            onSumbit={onSumbit}
          >
            <h2 className="text-center">
              <b>Edit User</b>
            </h2>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className="col-md-5 mb-3">
              <label>FullName :</label>
              <input
                type="text"
                className="form-control is-valid"
                placeholder="fullname..."
                value={name || ""}
                name="name"
                required
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-5 mb-3">
              <label>Phone Number :</label>
              <input
                type="number"
                className="form-control is-valid"
                name="phone"
                placeholder="number..."
                value={phone || ""}
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
                className="form-control is-valid"
                placeholder="email... "
                value={email || ""}
                name="email"
                required
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-5 mb-3">
              <label>Date Of Birth</label>
              <input
                type="date"
                className="form-control is-valid"
                placeholder="BOD"
                required
                value={date || ""}
                name="date"
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row  d-flex justify-content-center ">
            <div className="col-md-2 m-3">
              <button
                className="btn btn-primary  sm "
                type="submit"
                onClick={onSumbit}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default EditUser;

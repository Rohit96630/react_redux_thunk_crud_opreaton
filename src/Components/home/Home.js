import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import Birthday from "./Birthday";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, loadUsers } from "../../Redux/actions";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();

  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUsers(id));
      }
    });
  };

  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState("");

  function handleSumbt() {
    navigate("/adduser");
  }
  function EditButton(id) {
    navigate(`/edituser/${id}`);
  }

  function handleView(id) {
    const filteredData = users?.filter((x, z) => {
      return x.id === id;
    });
    setModalData(filteredData);
    setOpenModal(true);
  }
  function logoutBtn() {
    navigate("/");
  }

  return (
    <>
      <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-dark nav_bar">
        <div class="container-fluid ">
          <a class="navbar-brand " href="#">
            <img
              src="Images/1677325632047.jpeg"
              alt="image-fluid"
              className="logoImages"
            />
          </a>

          <div
            class="collapse navbar-collapse  form-inline d-flex flex-row justify-content-between  "
            id="navbarScroll"
          >
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li class="nav-item ">
                <a class="nav-link active  text-dark" aria-current="page">
                  <img
                    src="Images/home.png"
                    alt="images-fluid"
                    className="homeImages"
                  />
                </a>
              </li>
              <li class="nav-item totaluser">
                <a class="  text-white ">
                  <span className="TotalUser">{users.length}</span>
                </a>
              </li>
            </ul>

            <form class="d-flex Button ">
              <button
                class="btn  btn-sm btn-outline-success text-white bg-success"
                type="submit"
                onClick={handleSumbt}
              >
                Add Users
                <img
                  src="Images/icons8-join-48.png"
                  alt="image-fluid"
                  className="AddLogo"
                />
              </button>
            </form>
            <form class="d-flex Button ">
              <button
                class="btn btn-outline-primary  btn-sm text-danger "
                type="submit"
                onClick={logoutBtn}
              >
                Logout
                <img
                  src="Images/shutdown.png"
                  alt="image-fluid"
                  className="AddLogo"
                />
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* user Information START  */}
      <div className="Tabless ">
        <div className="container p-3 shadow table-responsive">
          <div className="row col-lg-12  rounded">
            <div className="col-lg-12">
              <table className="table   table-striped">
                <thead className="TableHeader">
                  <tr>
                    <th>SI.No</th>
                    <th>FullName</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((users, index) => (
                      <tr key={users.id} className="table-row">
                        <>
                          <td>{index + 1}</td>
                          <td className="OverLap ">{users.name}</td>
                          <td>{users.phone}</td>
                          <td>{users.email}</td>
                          <td>{users.date}</td>
                          <td className="row-gap">
                            <button
                              onClick={() => handleView(users?.id)}
                              className=" btn btn-sm btn-outline-primary p-0 m-0 "
                            >
                              <img
                                src="Images/view.png"
                                alt=".."
                                className="Edit_logo"
                              />
                            </button>

                            <button
                              onClick={() => EditButton(users?.id)}
                              className="p-0 btn btn-outline-success m-0 "
                            >
                              <img
                                src="Images/edit.png"
                                alt=".."
                                className="Edit_logo"
                              />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(users.id)}
                              className=" btn btn-sm btn-outline-danger p-0 m-0"
                            >
                              <img
                                src="Images/delete.png"
                                alt=".."
                                className="Edit_logo"
                              />
                            </button>
                          </td>
                        </>
                      </tr>
                    ))}

                  <ul></ul>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {openModal && (
          <div className="modal-wrapper">
            <div
              className="modalBackdrop"
              onClick={() => setOpenModal(!openModal)}
            />
            <div className="modal-box">
              <div className="moadl-content">
                <h3> User Information</h3>
                <h4>
                  User Name:<span>{modalData[0]?.name}</span>
                </h4>
                <p>
                  Phone Number:<span>{modalData[0]?.phone}</span>
                </p>
                <p>
                  Address :<span>{modalData[0]?.email}</span>
                </p>
                <p>
                  birthday:<span>{modalData[0]?.date}</span>
                </p>
              </div>
              <button
                onClick={() => setOpenModal(!openModal)}
                className="closeBtn"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="Birthday">{<Birthday users={users} />}</div>
    </>
  );
};
export default Home;

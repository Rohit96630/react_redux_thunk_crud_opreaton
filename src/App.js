import React, { useState, useEffect } from "react";
import SignUpPAge from "./Components/Validation/SignUpPAge";
import SignInPage from "./Components/Validation/SignInPage";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import AddUsers from "./Components/home/AddUsers";
import EditUser from "./Components/home/EditUser";
import NotFound from "./NotFound";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Retrieve data from local storage and store in state
  //   const storedData = JSON.parse(localStorage.getItem("data"));
  //   if (storedData) {
  //     setData(storedData);
  //   }
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUpPAge />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adduser" element={<AddUsers />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

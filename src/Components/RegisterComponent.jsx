import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nykaaAppApi from "../api/nykaaApp";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    mailId: "",
    phoneNumber: "",
    password: "",
  });

  const registerAPI = (event) => {
    event.preventDefault();

    nykaaAppApi
      .post(`/auth/register`, {
        name: register.name,
        mailId: register.mailId,
        phoneNumber: register.phoneNumber,
        password: register.password,
      })
      .then((res) => {
        if (res.data.data) {
          navigate("/");
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  return (
    <div>
      <div>
        <div className="loginContainer container mt-5 py-5">
        <h1> Welcome to Nykaa! </h1>
      <h3>Your beauty, our passion</h3>
          <p className="heading">Sign up</p>
          <div className="box">
            <p>Name</p>
            <div>
              <input
                className="form-control"
                type="text"
                autoComplete="off"
                value={register.name}
                onChange={(event) => {
                  setRegister({...register, name: event.target.value})
                }}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="box">
            <p>Email</p>
            <div>
              <input
                className="form-control"
                type="text"
                autoComplete="off"
                value={register.mailId}
                onChange={(event) => {
                  setRegister({...register, mailId: event.target.value})
                }}
                placeholder="Enter your mailId"
              />
            </div>
          </div>
          <div className="box">
            <p>Phone Number</p>
            <div>
              <input
                className="form-control"
                type="text"
                autoComplete="off"
                value={register.phoneNumber}
                onChange={(event) => {
                  setRegister({...register, phoneNumber: event.target.value})
                }}
                placeholder="Enter your Phone number"
              />
            </div>
          </div>
          <div className="box">
            <p>Password</p>
            <div>
              <input
                className="form-control"
                type="password"
                autoComplete="off"
                value={register.password}
                onChange={(event) => {
                  setRegister({...register, password: event.target.value})
                }}
                placeholder="Set password"
              />
            </div>
          </div>
          <button className="btn btn-lg mt-3 loginBtn" onClick={(event) => registerAPI(event)}>register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

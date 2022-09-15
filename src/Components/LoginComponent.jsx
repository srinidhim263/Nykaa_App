import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import nykaaAppApi from "../api/nykaaApp";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState({ mailId: "", password: "" });

  const loginAPI = (event) => {
    event.preventDefault();
    navigate("/");
    nykaaAppApi
      .post(`/auth/login`, {
        mailId: login.mailId,
        password: login.password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.data) {
          let loggedInUser = res.data.data;
          loggedInUser.isLoggedIn = true;
          loggedInUser.role = res.data.data.role;
          setLoggedInUser(loggedInUser);
          if (loggedInUser.role === "ADMIN") {
            navigate("/admin");
          } else navigate("/");
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
          <p className="heading">Login In</p>
          <div className="box">
            <p>Email</p>
            <div>
              <input
                className="form-control"
                type="email"
                autocomplete="off"
                value={login.mailId}
                placeholder="Enter your email"
                onChange={(event) => {
                  setLogin({ ...login, mailId: event.target.value });
                }}
              />
            </div>
          </div>
          <div className="box">
            <p>Password</p>
            <div>
              <input
                className="form-control"
                type="password"
                autocomplete="off"
                value={login.password}
                placeholder="Enter your password"
                onChange={(event) => {
                  setLogin({ ...login, password: event.target.value });
                }}
              />
            </div>
          </div>
          <button
            className="btn btn-lg mt-3 loginBtn"
            onClick={(event) => loginAPI(event)}
          >
            Login
          </button>
          <p className="text mt-3">
            Don't have an account?{" "}
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

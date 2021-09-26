import React, { useState } from "react";
import "./Signup.css";
import Signupimage from "../Assests/images/signupimage.png";
import GoogleLogin from "react-google-login";
import Close from "../Assests/icons/closesign.png";

export default function Signup({
  setLogin,
  setSign,
  setUserInfo,
  userInfo,
  setPersonLogged,
}) {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
    location: "",
    cpassword: "",
  });
  const [registersucess, setRegistersucess] = useState({ ok: false });
  function setData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setRegister({ ...register, [name]: value });
  }
  function sucess(response) {
    console.log(response.profileObj);
    setPersonLogged(true);
    setUserInfo({
      ...userInfo,
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
    });
    setSign(false);
  }
  function fail(res) {
    console.log(res);
  }

  async function addUser() {
    if (
      register.email === "" ||
      register.password === "" ||
      register.name === "" ||
      register.location === ""
    ) {
      window.alert("plz fill all the fields properly");
    }
    if (register.password !== register.cpassword) {
      return window.alert("password and confirm password must match");
    }
    await fetch("https://amazon-backend-server.herokuapp.com/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: register.email,
        password: register.password,
        name: register.name,
        location: register.location,
      }),
    }).then(() => {
      setLogin(true);
    });
  }

  return (
    <div className="signup">
      <div className="signup-form">
        <div className="green-content">
          Let's learn, share & inspire each other with our passion for computer
          engineerin.Sign up now
        </div>
        <div className="compart-container">
          <div className="copocart">
            <div className="head-sign">Create Account</div>
            <br />
            <div className="name-input">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={register.name}
                onChange={(e) => {
                  setData(e);
                }}
              />
              <input
                type="text"
                name="location"
                placeholder="Last Name"
                value={register.location}
                onChange={(e) => {
                  setData(e);
                }}
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={register.email}
              onChange={(e) => {
                setData(e);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={register.password}
              onChange={(e) => {
                setData(e);
              }}
            />
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={register.cpassword}
              onChange={(e) => {
                setData(e);
              }}
            />
            <div className="mobile-view">
              <div className="signin-btn" onClick={addUser}>
                Create Account
              </div>
              <div
                className="xyuasd"
                onClick={() => {
                  setLogin(true);
                }}
              >
                or, Sign In
              </div>
            </div>
            <div className="google-btn">
              <GoogleLogin
                clientId="636860644436-jlcqa96644hsv4c00fvl5vfsgidq8rtl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={sucess}
                onFailure={() => {
                  fail();
                }}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <div className="mobile-resp-text">
              By signing up, you agree to Terms & conditions. Privacy Policy
            </div>
          </div>
          <div className="copocart1">
            <div style={{ marginBottom: "51px" }}>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setLogin(true);
                }}
                style={{
                  color: "#2F6CE5",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                Sign In!
              </span>
            </div>
            <img src={Signupimage} alt="image" />
            <div style={{ fontSize: "11px" }}>
              By signing up, you agree to Terms & conditions. Privacy Policy
            </div>
          </div>
        </div>
        <div
          className="close-sign-btn"
          onClick={() => {
            setSign(false);
          }}
        >
          <img src={Close} alt="close" />
        </div>
      </div>
    </div>
  );
}

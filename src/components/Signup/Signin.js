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
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
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
  function setData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setDetails({ ...details, [name]: value });
  }
  function fail(res) {
    console.log(res);
  }

  async function verifyUser() {
    if (details.email === "" || details.password === "") {
      window.alert("Plz fill details");
      return null;
    }
    await fetch("https://amazon-backend-server.herokuapp.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          return res.json();
        } else {
          return [false];
        }
      })
      .then(([data]) => {
        if (data === false) {
          window.alert("incorrect credentials");
          return data;
        } else {
          setPersonLogged(true);
          setUserInfo({
            ...userInfo,
            firstname: data.name,
            lastname: data.location,
          });
          setSign(false);
        }
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
            <div className="head-sign">Sign In</div>
            <br />
            <input
              type="text"
              name="email"
              value={details.email}
              onChange={(e) => {
                setData(e);
              }}
              placeholder="Email"
            />
            <input
              type="text"
              name="password"
              value={details.password}
              onChange={(e) => {
                setData(e);
              }}
              placeholder="Password"
            />
            <div className="mobile-view">
              <div className="signin-btn" onClick={verifyUser}>
                Sign In
              </div>
              <div
                className="xyuasd"
                onClick={() => {
                  setLogin(false);
                }}
              >
                or, Create Account
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
              Don't have an account yet?{" "}
              <span
                onClick={() => {
                  setLogin(false);
                }}
                style={{
                  color: "#2F6CE5",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                Create new for free!
              </span>
            </div>
            <img src={Signupimage} alt="image" />
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

import React, { useState } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Post1 from "../SinglePosts/Post1";
import Post2 from "../SinglePosts/Post2";
import Post3 from "../SinglePosts/Post3";
import Post4 from "../SinglePosts/Post4";
import Location1 from "../Assests/icons/location.png";
import Cross from "../Assests/icons/cross.png";
import Info from "../Assests/icons/info.png";
import Like from "../Assests/icons/like.png";
import Leisure from "../Assests/images/leisure.png";
import Activism from "../Assests/images/activist.png";
import Mba from "../Assests/images/mba.png";
import Philosophy from "../Assests/images/philosophy.png";
import Signin from "../Signup/Signin";
import Signup from "../Signup/Signup";

export default function Main() {
  const [sign, setSign] = useState(false);
  const [personLogged, setPersonLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({ firstname: "", lastname: "" });
  const [login, setLogin] = useState(true);
  function signfun() {
    setSign(true);
  }

  function logoutUser() {
    setPersonLogged(false);
    setUserInfo({ ...userInfo, ...{ firstname: "", lastname: "" } });
  }
  function followBlack(e) {
    e.target.classList.toggle("black-follow");
    var tog = e.target.classList.contains("black-follow");
    if (tog) {
      e.target.innerText = "Followed";
    } else {
      e.target.innerText = "Follow";
    }
  }

  return (
    <>
      <div className="main-container">
        <Header personLogged={personLogged} userInfo={userInfo} />
        <div className="main-content">
          <div className="rectangle-2">
            {personLogged ? (
              <div className="join-button" onClick={logoutUser}>
                Leave Group
              </div>
            ) : (
              <div className="join-button" onClick={signfun}>
                Join Group
              </div>
            )}
            <div className="image-text">
              Computer Engineering <br />
              <span style={{ fontSize: "12px", fontWeigth: "400" }}>
                142,765 Computer Engineers follow this
              </span>{" "}
            </div>
          </div>
          <div className="content-below-img">
            <div className="options-main-mobile">
              <span>Posts(368)</span>
              <div className="filter-all-btn">
                <span>Filter: All</span>
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.833252 0.333374L4.99992 4.50004L9.16659 0.333374H0.833252Z"
                    fill="#212529"
                  />
                </svg>
              </div>
            </div>
            <div className="options-main">
              <span className="black-option">All Posts(32)</span>
              <span>Article</span>
              <span>Event</span>
              <span>Education</span>
              <span>Job</span>
              <div className="post-join-btn">
                <div className="btn-1">
                  Write a Post{" "}
                  <span>
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.416626 0.166626L4.99996 4.74996L9.58329 0.166626H0.416626Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                {personLogged ? (
                  <div className="btn-2-log" onClick={logoutUser}>
                    <span>
                      <svg
                        width="22"
                        height="13"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.24917 12.2908L8.54167 13.5833L13.125 9L8.54167 4.41667L7.24917 5.70917L9.61417 8.08333H0.75V9.91667H9.61417L7.24917 12.2908ZM15.4167 0.75H2.58333C1.56583 0.75 0.75 1.575 0.75 2.58333V6.25H2.58333V2.58333H15.4167V15.4167H2.58333V11.75H0.75V15.4167C0.75 16.425 1.56583 17.25 2.58333 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.575 16.425 0.75 15.4167 0.75Z"
                          fill="#6A6A6B"
                        />
                      </svg>
                    </span>{" "}
                    Leave Group
                  </div>
                ) : (
                  <div className="btn-2" onClick={signfun}>
                    <span>
                      <svg
                        width="22"
                        height="13"
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z"
                          fill="white"
                        />
                      </svg>
                    </span>{" "}
                    Join Group
                  </div>
                )}
              </div>
            </div>
            <div className="divison-container">
              <div className="posts-division">
                <Post1 />
                <Post2 />
                <Post3 />
                <Post4 />
              </div>
              <div className="groups-division">
                <div className="location-division">
                  <img src={Location1} alt="" width="10px" height="15px" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="inputselect"
                  />
                  <img src={Cross} alt="icon" width="10px" height="10px" />
                </div>
                <div className="notice-division">
                  <img src={Info} alt="info" width="15px" height="15px" />
                  <div>
                    Your location will help us serve extend a personalised
                    experience.
                  </div>
                </div>
                {personLogged ? (
                  <div className="recommended-groups">
                    <div style={{ display: "flex", columnGap: "10px" }}>
                      <img src={Like} alt="icon" width="15px" height="15px" />
                      <span
                        style={{
                          letterSpacing: "0.1em",
                          fontSize: "14px",
                          fontWeight: "900",
                        }}
                      >
                        RECOMMENDED GROUPS
                      </span>
                    </div>
                    <div className="recommended-single">
                      <div
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          columnGap: "5px",
                        }}
                      >
                        <img
                          src={Leisure}
                          alt="leisure"
                          width="36px"
                          height="36px"
                        />
                        <span>Leisure</span>
                      </div>
                      <div
                        className="follow-btn"
                        onClick={(e) => {
                          followBlack(e);
                        }}
                      >
                        Follow
                      </div>
                    </div>
                    <div className="recommended-single">
                      <div
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          columnGap: "5px",
                        }}
                      >
                        <img
                          src={Activism}
                          alt="leisure"
                          width="36px"
                          height="36px"
                        />
                        <span>Activism</span>
                      </div>
                      <div
                        className="follow-btn"
                        onClick={(e) => {
                          followBlack(e);
                        }}
                      >
                        Follow
                      </div>
                    </div>
                    <div className="recommended-single">
                      <div
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          columnGap: "5px",
                        }}
                      >
                        <img
                          src={Mba}
                          alt="leisure"
                          width="36px"
                          height="36px"
                        />
                        <span>MBA</span>
                      </div>
                      <div
                        className="follow-btn"
                        onClick={(e) => {
                          followBlack(e);
                        }}
                      >
                        Follow
                      </div>
                    </div>
                    <div className="recommended-single">
                      <div
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          columnGap: "5px",
                        }}
                      >
                        <img
                          src={Philosophy}
                          alt="leisure"
                          width="36px"
                          height="36px"
                        />
                        <span>Philosophy</span>
                      </div>
                      <div
                        className="follow-btn"
                        onClick={(e) => {
                          followBlack(e);
                        }}
                      >
                        Follow
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        color: "#2F6CE5",
                        cursor: "pointer",
                      }}
                    >
                      See more...
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {sign ? (
        login ? (
          <Signin
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setSign={setSign}
            setPersonLogged={setPersonLogged}
            setLogin={setLogin}
          />
        ) : (
          <Signup
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setSign={setSign}
            setPersonLogged={setPersonLogged}
            setLogin={setLogin}
          />
        )
      ) : null}
    </>
  );
}

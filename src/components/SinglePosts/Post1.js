import React, { useState } from "react";
import "./Post.css";
import Share from "../Assests/icons/share.png";
import Img1 from "../Assests/icons/sarthak.png";
export default function Post1() {
  const [state, setState] = useState(false);
  function handleBox() {
    setState(!state);
  }
  return (
    <div className="single-post">
      <div className="image-1"></div>
      <div className="post-text">
        <div className="type-post-desc1"></div>
        <div className="title-post">
          <p>What if famous brands had regular fonts? Meet Regular Brands!</p>
          <span onClick={handleBox}>
            <svg
              width="20"
              height="6"
              viewBox="0 0 20 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                fill="black"
              />
            </svg>
            {state ? (
              <div className="option-set">
                <div className="option-set-class">Edit</div>
                <div className="option-set-class">Report</div>
                <div className="option-set-class">option 3</div>
              </div>
            ) : null}
          </span>
        </div>
        <div>
          I've worked in UX for the better part of a decade. From now on , I
          plan yo retire
        </div>
        <div className="image-name-views">
          <div className="image-name">
            <img src={Img1} alt="image" width="35px" height="35px" />
            <span>Srthak Kamra</span>
          </div>
          <div className="views-share">
            <span className="icon-eye"></span>
            <div>1.4k views</div>
            <img src={Share} alt="share" width="15px" height="15px" />
          </div>
        </div>
      </div>
    </div>
  );
}

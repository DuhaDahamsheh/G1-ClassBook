import React, { useRef, useState, useEffect } from "react";

import "./Page9_Q2.css";
export default function Page9_Q2() {
  return (
    <>
      <h4 className="header-title-page8">
        <span className="ex-A">E</span>Match and color.
      </h4>

      <div className="container">
        <div className="word-section1">
          <h5>
            Good<span className="red-dot"></span>
          </h5>
          <h5>
            Fine,<span className="red-dot"></span>
          </h5>
          <h5>
            How<span className="red-dot"></span>
          </h5>
        </div>
        <div className="word-section2">
          <h5>
           <span className="red-dot"></span> thank you
          </h5>
          <h5>
           <span className="red-dot"></span> are you
          </h5>
          <h5>
          <span className="red-dot"></span>  afternoon
          </h5>
        </div>
      </div>
    </>
  );
}

import React, { useRef, useState, useEffect } from "react";
import img1 from "../assets/matching1Q_Page8 (1).png";
import img2 from "../assets/matching2Q_Page8 (2).png";
import "./Page8_Q3.css" 
export default function Page8_Q3() {
  return (
    <>
      <h5 className="header-title-page8">
        <span className="ex-A">B</span>Read and match.
      </h5>

      <div className="container">
        <div className="word-section">
          <h5>
            <span>1</span> Hello! I’m John. <span className="red-dot"></span>
          </h5>
          <h5>
            <span>2</span> Goodbye!<span className="red-dot"></span>
          </h5>
        </div>
        <div className="img-section">
          <img src={img1} style={{ height: "150px", width: "100px" }} />
          <img src={img2} style={{ height: "150px", width: "100px" }} />
        </div>
      </div>
    </>
  );
}

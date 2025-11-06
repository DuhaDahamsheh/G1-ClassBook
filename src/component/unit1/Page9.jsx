import React, { useState, useRef } from "react";
import page_9 from "../../assets/page_9.png";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import Page9_Q3 from "./Page9_Q3";
import Page9_Q1 from "./Page9_Q1";
import Page9_Q2 from "./Page9_Q2";
const Page9 = () => {
  const audioRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);

  return (
    <div className="page_9-background">
      <img src={page_9} />
      <span
        className="headset-icon-CD-page9 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(3)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page9_Q3 />
          </>
        }
      />

      <span
        className="click-icon-page9-1 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(1)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page9_Q1 />
          </>
        }
      />
      <span className="click-icon-page9-2 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(2)}
        />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page9_Q2/>
          </>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Page9;

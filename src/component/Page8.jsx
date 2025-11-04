import React, { useState, useRef, useEffect } from "react";
import page_8 from "../assets/page_8.png";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "./Popup/Popup";
import CD6_Pg8_Instruction1_AdultLady from "../assets/unit1/CD6.Pg8_Instruction1_Adult Lady.mp3";
import MatchExercise from "./Page8_Q3";
import Page8_Q2 from "./Page8_Q2";
import Page8_Q1 from "./Page8_Q1";
import Page8_Q4 from "./Page8_Q4";
const Page8 = () => {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <div className="page_8-background">
      <img src={page_8} />
      <span
        className="headset-icon-CD-page8 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(1)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <audio controls>
              <source src={CD6_Pg8_Instruction1_AdultLady} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <span className="click-icon-page8-1 shadow-md hover:scale-110 transition">
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
            <Page8_Q1 />
          </>
        }
      />
      <span
        className="click-icon-page8-2 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(3)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page8_Q2 />
          </>
        }
      />
      <span
        className="click-icon-page8-3 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(4)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <MatchExercise />
          </>
        }
      />
      <span
        className="click-icon-page8-4 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(5)}
      >
        <PiCursorClickBold size={12} color="rgb(255, 255, 255)" />
      </span>
      <Popup
        isOpen={activePopup === 5}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page8_Q4 />
          </>
        }
      />
    </div>
  );
};

export default Page8;

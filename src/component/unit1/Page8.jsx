import React, { useState, useRef, useEffect } from "react";
import page_8 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0008.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import CD6_Pg8_Instruction1_AdultLady from "../../assets/unit1/sounds/pg8-instruction1-all.mp3";
import Page8_Q3 from "./Page8_Q3";
import Page8_Q2 from "./Page8_Q2";
import Page8_Q1 from "./Page8_Q1";
import Page8_Q4 from "./Page8_Q4";
import AudioWithCaption from "../AudioWithCaption";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
const Page8 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  return (
    <div className="page_8-background">
      <img src={page_8} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 90 90"
        onClick={() => setActivePopup(1)}
        className="headset-icon-CD-page8 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="90" height="90" />
      </svg>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        isAudio={true}
        children={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <AudioWithCaption
              src={CD6_Pg8_Instruction1_AdultLady}
              captions={captionsExample}
            />
          </div>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(2)}
        className="click-icon-page8-1 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page8_Q1 />
          </>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(3)}
        className="click-icon-page8-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
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
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(4)}
        className="click-icon-page8-3 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>

      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page8_Q3 />
          </>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(5)}
        className="click-icon-page8-4 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
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

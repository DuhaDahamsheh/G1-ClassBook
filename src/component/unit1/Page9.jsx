import React, { useState, useRef } from "react";
import page_9 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0009.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import Page9_Q3 from "./Page9_Q3";
import Page9_Q1 from "./Page9_Q1";
import Page9_Q2 from "./Page9_Q2";
import song from "../../assets/unit1/sounds/pg9-song-all.mp3";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import AudioWithCaption from "../AudioWithCaption";
const Page9 = () => {
  const audioRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  return (
    <div className="page_9-background">
      <img src={page_9} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 90 90"
        onClick={() => setActivePopup(3)}
        className="headset-icon-CD-page9 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="90" height="90" />
      </svg>
      <Popup
        isOpen={activePopup === 3}
        isAudio={true}
        onClose={() => setActivePopup(null)}
        children={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <AudioWithCaption src={song} captions={captionsExample} />
          </div>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(1)}
        className="click-icon-page9-1 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page9_Q1 />
          </>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(2)}
        className="click-icon-page9-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Page9_Q2 />
          </>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default Page9;

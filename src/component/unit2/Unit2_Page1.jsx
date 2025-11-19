import React, { useState, useRef, useEffect } from "react";
import page_1 from "../../assets/img_unit2/imgs/Right 1 Unit 02 Stell Birthday.jpg";
import "./Unit2_Page1.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import unit2_page1_CD8 from "../../assets/img_unit2/sounds-unit2/CD8.Pg10_U2.Intro_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import Unit2_Page1_find from "./Unit2_Page1_find";
import Unit2_Page1_Vocab from "./Unit2_Page1_Vocab";
import Unit2_Page1_Read from "./Unit2_Pag1_Read";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";

const Unit2_Page1 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_1} />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(1)}
        className="headset-icon-CD-unit2-page1-1 hover:scale-110 transition"
      >
        <image href={audioBtn} x="0" y="0" width="45" height="45" />
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
            <audio controls>
              <source src={unit2_page1_CD8} type="audio/mp3" />
            </audio>
          </div>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(2)}
        className="click-icon-unit2-page1-1 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page1_find />
          </>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(3)}
        className="headset-icon-CD-unit2-page1-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page1_Vocab />
          </>
        }
      />

      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        onClick={() => setActivePopup(4)}
        className="click-icon-unit2-page1-2 hover:scale-110 transition"
      >
        <image href={arrowBtn} x="0" y="0" width="60" height="60" />
      </svg>
      <Popup
        isOpen={activePopup === 4}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <Unit2_Page1_Read />
          </>
        }
      />
    </div>
  );
};

export default Unit2_Page1;

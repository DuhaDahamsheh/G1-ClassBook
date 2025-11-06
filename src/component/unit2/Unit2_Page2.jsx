import React from "react";
import page_2 from "../../assets/img_unit2/imgs/15.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
import "./Unit2_Page2.css";
const Unit2_Page2 = () => {
  return (
    <div className="unit2-page-background">
      <img src={page_2} />
      <span className="headset-icon-CD-unit2-page2-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <span className="headset-icon-CD-unit2-page2-2 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(2)}
        />
      </span>

      <span className="click-icon-unit2-page2-1 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(3)}
        />
      </span>
    </div>
  );
};

export default Unit2_Page2;

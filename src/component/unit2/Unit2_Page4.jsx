import React from "react";
import page_4 from "../../assets/img_unit2/imgs/17.jpg";
import "./Unit2_Page4.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";

import Popup from "../Popup/Popup";
const Unit2_Page4 = () => {
  return (
    <div className="unit2-page-background">
      <img src={page_4} />
      <span className="headset-icon-CD-unit2-page4-1 shadow-md hover:scale-110 transition">
        <FaHeadphones
          size={12}
          color="rgba(255, 255, 255, 1)"
          onClick={() => setActivePopup(1)}
        />
      </span>
    </div>
  );
};

export default Unit2_Page4;

import React ,{useState} from "react";
import page_8 from "../../assets/img_unit2/imgs/21.jpg";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import "./Unit2_Page8.css";
import Popup from "../Popup/Popup";
import Unit2_Page8_Q1 from "./Unit2_Page8_Q1";
const Unit2_Page8 = () => {
     const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_8} />
      <span className="click-icon-unit2-page8-1 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(1)}
        />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
           <Unit2_Page8_Q1/>
          </>
        }
      />
      <span className="click-icon-unit2-page8-2 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(2)}
        />
      </span>
      <span
        className="headset-icon-CD-unit2-page8-1 shadow-md hover:scale-110 transition"
        onClick={() => setActivePopup(3)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <span className="click-icon-unit2-page8-3 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(2)}
        />
      </span>
    </div>
  );
};

export default Unit2_Page8;

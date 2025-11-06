import React,{useState} from "react";
import page_3 from "../../assets/img_unit2/imgs/16.jpg";
import "./Unit2_Page3.css";
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from "../Popup/Popup";
const Unit2_Page3 = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="unit2-page-background">
      <img src={page_3} /> 

         <span className="headset-icon-CD-unit2-page3-1 shadow-md hover:scale-110 transition">
              <FaHeadphones
                size={12}
                color="rgba(255, 255, 255, 1)"
                onClick={() => setActivePopup(1)}
              />
            </span>
    </div>
  );
};

export default Unit2_Page3;

import React,{useState} from "react";
import page_9 from "../../assets/img_unit2/imgs/22.jpg"
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import "./Unit2_Page9.css";
const Unit2_Page9 = () => {
   const [activePopup, setActivePopup] = useState(null);
     return (
        <div className="unit2-page-background">
          <img src={page_9} />
           <span className="click-icon-unit2-page9-1 shadow-md hover:scale-110 transition">
                  <PiCursorClickBold
                    size={12}
                    color="rgb(255, 255, 255)"
                    onClick={() => setActivePopup(1)}
                  />
                </span>
                <span className="click-icon-unit2-page9-2 shadow-md hover:scale-110 transition">
                  <PiCursorClickBold
                    size={12}
                    color="rgb(255, 255, 255)"
                    onClick={() => setActivePopup(2)}
                  />
                </span>
                <span className="click-icon-unit2-page9-3 shadow-md hover:scale-110 transition">
                  <PiCursorClickBold
                    size={12}
                    color="rgb(255, 255, 255)"
                    onClick={() => setActivePopup(3)}
                  />
                </span>
        </div>
      );
};

export default Unit2_Page9;

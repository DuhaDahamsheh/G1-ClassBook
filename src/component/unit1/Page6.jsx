import React, { useRef, useState } from "react";
import page_6 from "../../assets/page_6.png";
import CD4_Pg6_Grammar1_AdultLady from "../../assets/unit1/CD4.Pg6_Grammar1_Adult Lady.mp3";
import Pg6_1_1_AdultLady from "../../assets/unit1/Pg6_1.1_Adult Lady.mp3";
import Pg6_1_2_AdultLady from "../../assets/unit1/Pg6_1.2_Adult Lady.mp3";
import Pg6_1_3_AdultLady from "../../assets/unit1/Pg6_1.3_Adult Lady.mp3";
import Pg6_1_4_AdultLady from "../../assets/unit1/Pg6_1.4_Adult Lady.mp3";
import Pg6_1_5_AdultLady from "../../assets/unit1/Pg6_1.5_Adult Lady.mp3";
import Pg6_1_6_AdultLady from "../../assets/unit1/Pg6_1.6_Adult Lady.mp3";
import Pg6_2_1_Stella from "../../assets/unit1/Pg6_2.1_Stella.mp3";
import Pg6_2_2_ModifiedStella from "../../assets/unit1/Pg6_2.2_Modified Stella.mp3";
import Pg6_3_1_Harley from "../../assets/unit1/Pg6_3.1_Harley.mp3";
import Pg6_3_2_ModifiedHarley from "../../assets/unit1/Pg6_3.2_Modified Harley.mp3";
import Popup from "../Popup/Popup";
// import Pg6_1_4_AdultLady from "../assets"
import { FaHeadphones } from "react-icons/fa";
const Page6 = () => {
  const audioRef = useRef(null);
  const [activePopup, setActivePopup] = useState(null);
  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent);
  };
  const clickableAreas = [
    { x1: 9.41, y1: 12.0, x2: 37.43, y2: 14.0, sound: Pg6_1_1_AdultLady },
    { x1: 62.25, y1: 12.0, x2: 75.14, y2: 14.0, sound: Pg6_1_2_AdultLady },
    { x1: 10.0, y1: 16.0, x2: 22.0, y2: 18.0, sound: Pg6_1_3_AdultLady },
    { x1: 62.0, y1: 16.0, x2: 77.0, y2: 18.0, sound: Pg6_1_4_AdultLady },
    { x1: 9.0, y1: 19.0, x2: 26.0, y2: 23.0, sound: Pg6_1_5_AdultLady },
    { x1: 62.0, y1: 19.0, x2: 79.17, y2: 23.0, sound: Pg6_1_6_AdultLady },
    { x1: 30.0, y1: 30.18, x2: 50.0, y2: 40.0, sound: Pg6_2_1_Stella },
    { x1: 62.25, y1: 33.0, x2: 69.02, y2: 35.0, sound: Pg6_2_2_ModifiedStella },
    { x1: 8.5, y1: 63.5, x2: 23.5, y2: 66.0, sound: Pg6_3_1_Harley },
    { x1: 48.0, y1: 64.0, x2: 66.0, y2: 67.0, sound: Pg6_3_2_ModifiedHarley },
  ];

  const checkAreaAndPlaySound = (x, y) => {
    const area = clickableAreas.find(
      (a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
    );

    console.log("Matched Area:", area);

    if (area) playSound(area.sound);
  };
  const playSound = (soundPath) => {
    console.log(soundPath);
    if (audioRef.current) {
      audioRef.current.src = soundPath;
      audioRef.current.play();
    }
  };

  return (
    <div className="page_6-background" style={{ position: "relative" }}>
      <img src={page_6} style={{display:"block"}} onClick={handleImageClick} />
      {clickableAreas.map((area, index) => (
        <div
          key={index}
          className="clickable-area"
          style={{
            position:"absolute",
            left: `${area.x1}%`,
            top: `${area.y1}%`,
            width: `${area.x2 - area.x1}%`,
            height: `${area.y2 - area.y1}%`,
          }}
           onClick={() => playSound(area.sound)} 
          onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
        ></div>
      ))}
      <span
        className="headset-icon-CD-page6 shadow-md hover:scale-110 transition"
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
              <source src={CD4_Pg6_Grammar1_AdultLady} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <audio ref={audioRef} style={{ display: "none"}} />
    </div>
  );
};

export default Page6;

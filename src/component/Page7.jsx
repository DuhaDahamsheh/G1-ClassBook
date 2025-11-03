import React, { useState, useRef, useEffect } from 'react'
import page_7 from "../assets/page_7.png"
import CD5_Pg7_Grammar2_AdultLady from "../assets/unit1/CD5.Pg7_Grammar2_Adult Lady.mp3"
import Pg7_2_1_AdultLady from "../assets/unit1/Pg7_2.1_Adult Lady.mp3"
import Pg7_2_2_AdultLady from "../assets/unit1/Pg7_2.2_Adult Lady.mp3"
import Pg7_2_3_AdultLady from "../assets/unit1/Pg7_2.3_Adult Lady.mp3"
import Pg7_2_4_AdultLady from "../assets/unit1/Pg7_2.4_Adult Lady.mp3"
import Pg7_3_1_Stella from "../assets/unit1/Pg7_3.1_Stella.mp3"
import Pg7_3_2_Mom from "../assets/unit1/Pg7_3.2_Mom.mp3"
import Pg7_4_1_Hansel from "../assets/unit1/Pg7_4.1_Hansel.mp3"
import Pg7_4_2_ModifiedJack from "../assets/unit1/Pg7_4.2_Modified Jack.mp3"
import Pg7_5_1_Dad from "../assets/unit1/Pg7_5.1_Dad.mp3"
import Pg7_5_2_Mom from "../assets/unit1/Pg7_5.2_Mom.mp3"
import Pg7_6_1_Mom from "../assets/unit1/Pg7_6.1_Mom and Dad.mp3"
import Popup from './Popup/Popup'
import { FaHeadphones } from "react-icons/fa";
const Page7 = () => {

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
    { x1: 9.00, y1: 11.00, x2: 28.43, y2: 14.00, sound: Pg7_2_1_AdultLady },
    { x1: 30.25, y1: 11.00, x2: 50.14, y2: 14.00, sound: Pg7_2_2_AdultLady },
    { x1: 51.00, y1: 11.00, x2: 70.00, y2: 14.00, sound: Pg7_2_3_AdultLady },
    { x1: 73.00, y1: 11.00, x2: 83.00, y2: 14.00, sound: Pg7_2_4_AdultLady },
    { x1: 9.00, y1: 17.00, x2: 33.00, y2: 19.00, sound: Pg7_3_1_Stella },
    { x1: 21.00, y1: 40.00, x2: 42.17, y2: 43.00, sound: Pg7_3_2_Mom },
    { x1: 50.00, y1: 20.18, x2: 70.00, y2: 22.00, sound: Pg7_4_1_Hansel },
    { x1: 70.25, y1: 47.00, x2: 89.02, y2: 48.00, sound: Pg7_4_2_ModifiedJack },
    { x1: 9.00, y1: 57.00, x2: 27.02, y2: 58.00, sound: Pg7_5_1_Dad },
    { x1: 30.00, y1: 47.50, x2:46.00, y2: 60.00, sound: Pg7_5_2_Mom },
    { x1: 70.00, y1: 60.00, x2: 86.00, y2: 67.00, sound: Pg7_6_1_Mom },
  ];

  const checkAreaAndPlaySound = (x, y) => {
    const area = clickableAreas.find(
      a => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
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
    <div className='page_7-background' >
      <img src={page_7}  onClick={handleImageClick}/>
      <span className='headset-icon-CD-page7 shadow-md hover:scale-110 transition' onClick={() => setActivePopup(1)}>
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <audio controls>
              <source src={CD5_Pg7_Grammar2_AdultLady} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  )
}

export default Page7

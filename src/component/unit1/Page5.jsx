import React, { useState, useRef, useEffect } from "react";
import page_5 from "../../assets/page_5.png";
import page5_CD2 from "../../assets/unit1/CD2.Pg5_Intro1_Adult Lady.mp3";
import page5_CD3 from "../../assets/unit1/CD3.Pg5_Instruction1_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import Pg5_1_1_Stella from "../../assets/unit1/Pg5_1.1_Stella.mp3";
import Pg5_1_2_Lolo from "../../assets/unit1/Pg5_1.2_Lolo.mp3";
import Pg5_1_1_Bebo from "../../assets/unit1/Pg5_1.1_Bebo.mp3";
import Pg5_2_1_Adult from "../../assets/unit1/Pg5_2.1_Adult Lady.mp3";
import Pg5_2_2_Adult from "../../assets/unit1/Pg5_2.2_Adult Lady.mp3";
import Pg5_2_3_Adult from "../../assets/unit1/Pg5_2.3_Adult Lady.mp3";
import Pg5_2_4_Adult from "../../assets/unit1/Pg5_2.4_Adult Lady.mp3";
import Pg5_Instruction2_Adult from "../../assets/unit1/Pg5_Instruction2_Adult Lady.mp3";
import page_5_1 from "../../assets/page_5-1.svg";
import page_5_2 from "../../assets/page_5-2.png";
import page_5_3 from "../../assets/page_5-3.jpg";
import { PiCursorClickBold } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";

const Page5 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const activeData = [
    { page: "1", title: "Meet My Cat", sound: page5_CD2, imgSrc: page_5_2 },
    {
      page: "2",
      title: "Lesiten, Read and repeat",
      sound: page5_CD3,
      imgSrc: page_5_1,
    },
    {
      page: "3",
      title: "Lestine and read along",
      sound: Pg5_Instruction2_Adult,
      imgSrc: page_5_3,
    },
  ];

  const audioRef = useRef(null);
  const introRef = useRef(null);
  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent);
  };

  const clickableAreas = [
    { x1: 12.0, y1: 55.0, x2: 16.0, y2: 69.0, sound: Pg5_2_1_Adult },
    { x1: 25.0, y1: 47.0, x2: 42.14, y2: 67.0, sound: Pg5_2_2_Adult },
    { x1: 50.0, y1: 50.0, x2:66.0, y2: 71.0, sound: Pg5_2_3_Adult },
    { x1: 80.0, y1: 40.0, x2: 85.0, y2: 70.0, sound: Pg5_2_4_Adult },
    ,
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
  const speaking = [
    { text: "Hello, How are you?", sound: Pg5_1_1_Bebo },
    { text: "Fine, Thank you", sound: Pg5_1_2_Lolo },
  ];


  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);
  return (
    <div className="page_5-background">
      <img src={page_5} />
      <span
        className="headset-icon-CD-page5 shadow-md hover:scale-110 transition"
        id="CD-1-page5"
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
              <source src={activeData[0].sound} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <span
        className="headset-icon-CD-page5 shadow-md hover:scale-110 transition"
        id="CD-2-page5"
        onClick={() => setActivePopup(2)}
      >
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <img src={activeData[1].imgSrc} style={{ height: "auto" }} />

            {speaking.map((item, index) => {
              return (
                <p
                  key={index}
                  className="speaking"
                  id={`text-${index}`}
                  onClick={() => playSound(item.sound)}
                  style={{ cursor: "pointer" }}
                >
                  {item.text}
                </p>
              );
            })}
            <audio ref={audioRef} autoPlay style={{ display: "none" }}>
              <source src={activeData[1].sound} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <span className="click-icon-page5 shadow-md hover:scale-110 transition">
        <PiCursorClickBold
          size={12}
          color="rgb(255, 255, 255)"
          onClick={() => setActivePopup(3)}
        />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <div style={{position:"relative"}}>
            <audio ref={introRef} autoPlay style={{ display: "none" }}>
              <source src={activeData[2].sound} type="audio/mp3" />
            </audio>
            <img
              src={activeData[2].imgSrc}
              style={{ height: "auto", width: "600px" }}
              onClick={handleImageClick}
            />
             <audio ref={audioRef} style={{ display: "none" }} />

              {clickableAreas.map((area, index) => (
                <div
                  key={index}
                  className="clickable-area"
                  style={{
                    left: `${area.x1}%`,
                    top: `${area.y1}%`,
                    width: `${area.x2 - area.x1}%`,
                    height: `${area.y2 - area.y1}%`,
                  }}
                  onMouseEnter={(e) => (e.target.style.cursor = "pointer")}
                  onClick={() => playSound(area.sound)}
                ></div>
              ))}
          </div>
        }
      />
    </div>
  );
};

export default Page5;

import React, { useState, useRef, useEffect } from "react";
import page_5 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0005.jpg";
import page5_CD2 from "../../assets/unit1/sounds/page5all.mp3";
import page5_CD3 from "../../assets/unit1/sounds/CD3.Pg5_Instruction1_Adult Lady.mp3";
import Popup from "../Popup/Popup";
import Pg5_1_1_Stella from "../../assets/unit1/sounds/Pg5_1.1_Stella.mp3";
import Pg5_1_2_Lolo from "../../assets/unit1/sounds/Pg5_1.2_Lolo.mp3";
import Pg5_1_1_Bebo from "../../assets/unit1/sounds/Pg5_1.1_Bebo.mp3";
import Pg5_2_1_Adult from "../../assets/unit1/sounds/Pg5_2.1_Adult Lady.mp3";
import Pg5_2_2_Adult from "../../assets/unit1/sounds/Pg5_2.2_Adult Lady.mp3";
import Pg5_2_3_Adult from "../../assets/unit1/sounds/Pg5_2.3_Adult Lady.mp3";
import Pg5_2_4_Adult from "../../assets/unit1/sounds/Pg5_2.4_Adult Lady.mp3";
import Pg5_Instruction2_Adult from "../../assets/unit1/sounds/Pg5_Instruction2_Adult Lady.mp3";
import page_5_1 from "../../assets/unit1/imgs/lolo_bebo1.jpg";
import page_5_2 from "../../assets/unit1/imgs/page_5-2.png";
import page_5_3 from "../../assets/unit1/imgs/page_5-3.jpg";
import { PiCursorClickBold } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import AudioWithCaption from "../AudioWithCaption";
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
const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
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
    { x1: 11.7, y1: 50.2, x2: 17.2, y2: 61.9, sound: Pg5_2_1_Adult },
    { x1: 26.0, y1: 43.5, x2: 43.0, y2: 71.0, sound: Pg5_2_2_Adult },
    { x1: 52.7, y1: 43.5, x2: 68.0, y2: 71.0, sound: Pg5_2_3_Adult },
    { x1: 78.0, y1: 43.5, x2: 92.3, y2: 71.0, sound: Pg5_2_4_Adult },
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
    { text: "Fine, Thank you.", sound: Pg5_1_2_Lolo },
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
        isAudio={true}
        children={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <AudioWithCaption src={activeData[0].sound} captions={captionsExample} />
          </div>
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
            <img
              src={activeData[1].imgSrc}
              style={{ height: "500px", display: "block" }}
            />

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
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <audio ref={introRef} autoPlay style={{ display: "none" }}>
              <source src={activeData[2].sound} type="audio/mp3" />
            </audio>
            <img
              src={activeData[2].imgSrc}
              style={{ height: "auto", display: "block" }}
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

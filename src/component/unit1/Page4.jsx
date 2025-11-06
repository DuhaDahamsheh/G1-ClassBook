import React, { useState, useRef, useEffect } from "react";
import page4 from "../../assets/page_4.png";
import { FaHeadphones } from "react-icons/fa";
import Popup from "../Popup/Popup";
import soundFile1 from "../../assets/unit1/CD1.Pg4.U1_Intro_Adult Lady.mp3";
import vocabulary from "../../assets/unit1/Pg4_Vocabulary_Adult Lady.mp3";
import listenSound from "../../assets/unit1/Pg4_Instruction1_Adult Lady.mp3";
import listenImg from "../../assets/page_4-1.jpg";
import duck from "../../assets/unit1/Pg4_1.4_Adult Lady.mp3";
import deer from "../../assets/unit1/Pg4_1.2_Adult Lady.mp3";
import dish from "../../assets/unit1/Pg4_1.3_Adult Lady.mp3";
import dSound from "../../assets/unit1/Pg4_1.1_Adult Lady.mp3";
import { PiCursorClickBold } from "react-icons/pi";
import Page4_Interactive1 from "./Page4_Interactive1";
import Page4_vocabulary from "./Page4_vocabulary";
const Page4 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const activeData = [
    { page: "1", title: "Good Morning", sound: soundFile1, imgSrc: "" },
    {
      page: "2",
      title: [
        "Goodbye",
        " How are you?",
        " Fine",
        "thank you ",
        " Hello ",
        "Good morning",
      ],
      sound: vocabulary,
      imgSrc: "",
    },
    {
      page: "3",
      title: "Lestine and read along",
      sound: listenSound,
      imgSrc: listenImg,
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
    { x1: 12.0, y1: 43.0, x2: 16.0, y2: 69.0, sound: dSound },
    { x1: 30.0, y1: 35.0, x2: 42.14, y2: 67.0, sound: deer },
    { x1: 55.0, y1: 38.0, x2:66.0, y2: 71.0, sound: dish },
    { x1: 86.0, y1: 34.0, x2: 91.0, y2: 54.0, sound: duck },
    ,
  ];
  const checkAreaAndPlaySound = (x, y) => {
    console.log("hi");

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
  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);

  return (
    <>
      <div className="page_4-background">
        <img src={page4} />
        <span className="headset-icon-CD-page4-1 shadow-md hover:scale-110 transition">
          <FaHeadphones
            size={12}
            color="rgba(255, 255, 255, 1)"
            onClick={() => setActivePopup(1)}
          />
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
        <span className="click-icon-page4-1 shadow-md hover:scale-110 transition">
          <PiCursorClickBold
            size={12}
            color="rgb(255, 255, 255)"
            onClick={() => setActivePopup(4)}
          />
        </span>
        <Popup
          isOpen={activePopup === 4}
          onClose={() => setActivePopup(null)}
          children={
            <>
              <Page4_Interactive1 />
            </>
          }
        />
        <span className="headset-icon-CD-page4-2 shadow-md hover:scale-110 transition">
          <FaHeadphones
            size={12}
            color="rgba(255, 255, 255, 1)"
            onClick={() => setActivePopup(2)}
          />
        </span>
        <Popup
          isOpen={activePopup === 2}
          onClose={() => setActivePopup(null)}
          children={
            <>
              <Page4_vocabulary />
            </>
          }
        />
        <span className="click-icon-page4 shadow-md hover:scale-110 transition">
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
            <div style={{ position: "relative" }}>
              <audio ref={introRef} autoPlay style={{ display: "none" }}>
                <source src={activeData[2].sound} type="audio/mp3" />
              </audio>

              <img
                src={activeData[2].imgSrc}
                style={{ height: "auto", width: "700px" }}
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
    </>
  );
};

export default Page4;

import React, { useState, useRef, useEffect } from "react";
import page4 from "../assets/page_4.png";
import { FaHeadphones } from "react-icons/fa";
import Popup from "./Popup/Popup";
import soundFile1 from "../assets/unit1/CD1.Pg4.U1_Intro_Adult Lady.mp3";
import vocabulary from "../assets/unit1/Pg4_Vocabulary_Adult Lady.mp3";
import listenSound from "../assets/unit1/Pg4_Instruction1_Adult Lady.mp3";
import listenImg from "../assets/page_4-1.png";
import duck from "../assets/unit1/Pg4_1.4_Adult Lady.mp3";
import deer from "../assets/unit1/Pg4_1.2_Adult Lady.mp3";
import dish from "../assets/unit1/Pg4_1.3_Adult Lady.mp3";
import dSound from "../assets/unit1/Pg4_1.1_Adult Lady.mp3";
import imgs from "../assets/horizontal_combined.png"
import { PiCursorClickBold } from "react-icons/pi";
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
  const sentences = [
    { text: "d", sound: dSound },
    { text: "deer", sound: deer },
    { text: "duck", sound: duck },
    { text: "dish", sound: dish },
  ];
  const playSound = (soundPath) => {
    audioRef.current.src = soundPath;
    audioRef.current.play();
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
          children={<>
          
          <img src={imgs}/>
          
          </>}
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
              <audio controls>
                <source src={activeData[1].sound} type="audio/mp3" />
              </audio>
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
            <>
              <header className="header-title-page4">
                {activeData[2].title}
              </header>
              <img
                src={activeData[2].imgSrc}
                style={{ height: "auto", width: "700px" }}
              />

              {sentences.map((item, index) => {
                const firstLetter = item.text.charAt(0); // أول حرف
                const restText = item.text.slice(1); // باقي الجملة

                return (
                  <p
                    key={index}
                    className="listen"
                    id={item.text}
                    onClick={() => playSound(item.sound)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="listenSpan">{firstLetter}</span>
                    {restText}
                  </p>
                );
              })}
              <audio ref={audioRef} autoPlay style={{ display: "none" }}>
                <source src={activeData[2].sound} type="audio/mp3" />
              </audio>
            </>
          }
        />
      </div>
    </>
  );
};

export default Page4;

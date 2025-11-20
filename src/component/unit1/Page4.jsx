import React, { useState, useRef, useEffect } from "react";
import page4 from "../../assets/unit1/imgs/Pages/Right 1 Unit 01 Good Morning World 2_page-0004.jpg";
import { FaHeadphones } from "react-icons/fa";
import Popup from "../Popup/Popup";
import soundFile1 from "../../assets/unit1/sounds/CD1.Pg4.U1_Intro_Adult Lady.mp3";
import vocabulary from "../../assets/unit1/sounds/Pg4_Vocabulary_Adult Lady.mp3";
import listenSound from "../../assets/unit1/sounds/Pg4_Instruction1_Adult Lady.mp3";
import listenImg from "../../assets/unit1/imgs/page_4-1.jpg";
import Rabbit from "../../assets/img_unit2/imgs/Rabbit.svg";
import img1 from "../../assets/unit1/imgs/P1 listen and read 01.svg";
import img2 from "../../assets/unit1/imgs/deer33.svg";
import img3 from "../../assets/unit1/imgs/dish22.svg";
import img4 from "../../assets/unit1/imgs/duck22.svg";
import duck from "../../assets/unit1/sounds/Pg4_1.4_Adult Lady.mp3";
import deer from "../../assets/unit1/sounds/Pg4_1.2_Adult Lady.mp3";
import dish from "../../assets/unit1/sounds/Pg4_1.3_Adult Lady.mp3";
import dSound from "../../assets/unit1/sounds/Pg4_1.1_Adult Lady.mp3";
import { PiCursorClickBold } from "react-icons/pi";
import Page4_Interactive1 from "./Page4_Interactive1";
import Page4_vocabulary from "./Page4_vocabulary";
import AudioWithCaption from "../AudioWithCaption";
import FourImagesWithAudio from "../FourImagesWithAudio";
import audioBtn from "../../assets/unit1/imgs/Right Audio Button 2.svg";
import arrowBtn from "../../assets/unit1/imgs/Right Arrow Button ....-01.svg";
import longAudio from "../../assets/unit1/sounds/pg4-instruction1-adult-lady_9KnGFLcl.mp3";
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
  // أصوات الصور
  const imageSounds = [
    null, // الصورة الأولى الكبيرة (إن ما بدك صوت إلها)
    new Audio(dSound),
    new Audio(deer),
    new Audio(dish),
    new Audio(duck),
  ];
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];

  const audioRef = useRef(null);

  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);

  return (
    <>
      <div className="page_4-background">
        <img src={page4} />

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
          onClick={() => setActivePopup(1)}
          className="headset-icon-CD-page4-1 hover:scale-110 transition"
        >
          <image href={audioBtn} x="0" y="0" width="45" height="45" />
        </svg>

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
              <AudioWithCaption
                src={activeData[0].sound}
                captions={captionsExample}
              />
            </div>
          }
        />

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
          onClick={() => setActivePopup(4)}
          className="click-icon-page4-1 hover:scale-110 transition"
        >
          <image href={arrowBtn} x="0" y="0" width="60" height="60" />
        </svg>

        <Popup
          isOpen={activePopup === 4}
          onClose={() => setActivePopup(null)}
          children={
            <>
              <Page4_Interactive1 />
            </>
          }
        />

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
          onClick={() => setActivePopup(2)}
          className="headset-icon-CD-page4-2 hover:scale-110 transition"
        >
          <image href={audioBtn} x="0" y="0" width="45" height="45" />
        </svg>

        <Popup
          isOpen={activePopup === 2}
          onClose={() => setActivePopup(null)}
          children={
            <>
              <Page4_vocabulary />
            </>
          }
        />

        <svg
          width="30"
          height="30"
          viewBox="0 0 60 60"
          onClick={() => setActivePopup(3)}
          className="click-icon-page4 hover:scale-110 transition"
        >
          <image href={arrowBtn} x="0" y="0" width="60" height="60" />
        </svg>

        <Popup
          isOpen={activePopup === 3}
          onClose={() => setActivePopup(null)}
          children={
            <FourImagesWithAudio
              images={[Rabbit, img1, img2, img3, img4]}
              audioSrc={longAudio}
              checkpoints={[0, 2.8, 3.4, 4.2, 5.1]}
              popupOpen={true}
              titleQ={"Listen and read along."}
              audioArr={imageSounds}
            />
          }
        />
      </div>
    </>
  );
};

export default Page4;

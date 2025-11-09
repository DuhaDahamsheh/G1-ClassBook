import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/unit1/imgs/horizontal_vocabulary.jpg";
import page2_2 from "../../assets/unit1/imgs/page4_vocab-removebg-preview.jpg";
import vocabulary from "../../assets/unit1/sounds/Pg4_Vocabulary_Adult Lady.mp3";
import sound1 from "../../assets/unit1/sounds/pg4-vocabulary-1-goodbye.mp3";
import sound2 from "../../assets/unit1/sounds/pg4-vocabulary-2-how are you.mp3";
import sound3 from "../../assets/unit1/sounds/pg4-vocabulary-3-fine thank you.mp3";
import sound4 from "../../assets/unit1/sounds/pg4-vocabulary-4-hello..mp3";
import sound5 from "../../assets/unit1/sounds/pg4-vocabulary-5-good morning.mp3";
import { IoCaretForwardCircle } from "react-icons/io5";

const Page4_vocabulary = () => {
  const mainAudioRef = useRef(null); // ✅ الأوديو الرئيسي
  const clickAudioRef = useRef(null); // ✅ صوت المناطق

  const [paused, setPaused] = useState(false);
  const stopAtSecond = 2.5;

  useEffect(() => {
    if (!mainAudioRef.current) return;

    mainAudioRef.current.currentTime = 0;
    mainAudioRef.current.play();

    const interval = setInterval(() => {
      if (mainAudioRef.current.currentTime >= stopAtSecond) {
        mainAudioRef.current.pause();
        setPaused(true);
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const clickableAreas = [
    { x1: 16, y1: 44, x2: 18, y2: 46, sound: sound1 },
    { x1: 54, y1: 45, x2: 57, y2: 47, sound: sound2 },
    { x1: 70, y1: 42, x2: 72, y2: 44, sound: sound3 },
    { x1: 40, y1: 24, x2: 43, y2: 26, sound: sound4 },
    { x1: 33, y1: 28, x2: 38, y2: 30, sound: sound5 },
  ];

  const playClickSound = (sound) => {
    if (!clickAudioRef.current) return;
    clickAudioRef.current.src = sound;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play();
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* ✅ الأوديو الرئيسي الذي تريدينه ظاهر */}
      <audio ref={mainAudioRef} controls>
        <source src={vocabulary} type="audio/mp3" />
      </audio>

      {/* ✅ أوديو المخفي لصوت الكلمات */}
      <audio ref={clickAudioRef} style={{ display: "none" }} />

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={page2_2}
          style={{
            height: "150px",
            width: "auto",
            position: "absolute",
            bottom: "5%",
            right: "5%",
            borderRadius: "5%",
          }}
          alt=""
        />

        <img
          src={backgroundImage}
          alt="interactive"
          style={{ height: "460px",width:" auto" }}
        />

        {clickableAreas.map((area, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${area.x1}%`,
              top: `${area.y1}%`,
              width: `${area.x2 - area.x1}%`,
              height: `${area.y2 - area.y1}%`,
              cursor: "pointer",
            }}
            onClick={() => playClickSound(area.sound)}
          />
        ))}
      </div>

      {paused ? (
        <div style={{display:"flex" ,justifyContent:"center"}}>
          <button
            className="play-btn swal-continue"
            onClick={() => {
              mainAudioRef.current.play();
              // setPaused(false);
            }}
            style={{ marginTop: "18px" }}
          >
            Continue <IoCaretForwardCircle size={20} style={{ color: "red" }} />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page4_vocabulary;

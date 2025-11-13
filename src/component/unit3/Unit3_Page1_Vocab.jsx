import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/unit3/imgs3/page1_2 unit3.jpg";
import ValidationAlert from "../Popup/ValidationAlert";
import page2_2 from "../../assets/unit3/imgs3/vocabimg_unit3.jpg";
import vocabulary from "../../assets/unit3/sound3/Pg22_Vocabulary_Adult Lady.mp3";

import { IoCaretForwardCircle } from "react-icons/io5";
const Unit3_Page1_Vocab = () => {
  const audioRef = useRef(null);

  const mainAudioRef = useRef(null); // ✅ الأوديو الرئيسي
  const clickAudioRef = useRef(null); // ✅ صوت المناطق

  const [paused, setPaused] = useState(false);
  const stopAtSecond = 3;

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

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

    checkAreaAndPlaySound(xPercent, yPercent);
  };

  const clickableAreas = [
    { x1: 13.0, y1: 22.0, x2: 16.0, y2: 25.0, sound: "" },
    { x1: 23.0, y1: 53.0, x2: 25.0, y2: 55.0, sound: "" },
    { x1: 37.0, y1: 43.0, x2: 39.0, y2: 45.0, sound: "" },
    { x1: 63.0, y1: 20.0, x2: 65.0, y2: 22.0, sound: "" },
    { x1: 61.0, y1: 29.0, x2: 63.0, y2: 31.0, sound: "" },
    { x1: 61.0, y1: 41.0, x2: 63.0, y2: 43.0, sound: "" },
    { x1: 35.0, y1: 63.0, x2: 37.0, y2: 65.0, sound: "" },
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
    if (clickAudioRef.current) {
      clickAudioRef.current.src = soundPath;
      clickAudioRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <audio ref={mainAudioRef} controls>
        <source src={vocabulary} type="audio/mp3" />
      </audio>
      <audio ref={clickAudioRef} style={{ display: "none" }} />
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={page2_2}
          style={{
            height: "160px",
            width: "auto",
            position: "absolute",
            bottom: "5%",
            right: "5%",
            borderRadius: "5%",
          }}
        />
        <img
          src={backgroundImage}
          alt="interactive"
          style={{  height: "460px", width: "auto" }}
          onClick={handleImageClick}
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
        <div style={{ display: "flex", justifyContent: "center" }}>
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

export default Unit3_Page1_Vocab;

import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/unit1/imgs/Page 01/01.jpg";
import page2_2 from "../../assets/unit1/imgs/Page 01/page4_vocab-removebg-preview-XE32rJsc.jpg";
import num1 from "../../assets/unit1/imgs/Page 01/Num1.svg";
import num2 from "../../assets/unit1/imgs/Page 01/Num2.svg";
import num3 from "../../assets/unit1/imgs/Page 01/Num3.svg";
import num4 from "../../assets/unit1/imgs/Page 01/Num4.svg";
import num5 from "../../assets/unit1/imgs/Page 01/Num5.svg";
import vocabulary from "../../assets/unit1/sounds/Pg4_Vocabulary_Adult Lady.mp3";
import sound1 from "../../assets/unit1/sounds/pg4-vocabulary-1-goodbye.mp3";
import sound2 from "../../assets/unit1/sounds/pg4-vocabulary-2-how are you.mp3";
import sound3 from "../../assets/unit1/sounds/pg4-vocabulary-3-fine thank you.mp3";
import sound4 from "../../assets/unit1/sounds/pg4-vocabulary-4-hello..mp3";
import sound5 from "../../assets/unit1/sounds/pg4-vocabulary-5-good morning.mp3";
import { IoCaretForwardCircle } from "react-icons/io5";
import "../../index.css"; // ✅ نضيف ملف CSS خارجي

const Page4_vocabulary = () => {
  const mainAudioRef = useRef(null);
  const clickAudioRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const stopAtSecond = 2.5;

  // 🎵 فترات الكلمات داخل الأوديو الرئيسي
  const wordTimings = [
    { start: 2.7, end: 4.5 }, // Goodbye
    { start: 4.6, end: 6.5 }, // How are you
    { start: 6.6, end: 8.3 }, // Fine thank you
    { start: 8.4, end: 10.1 }, // Hello
    { start: 10.2, end: 12.5 }, // Good morning
  ];

  useEffect(() => {
    const audio = mainAudioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    const interval = setInterval(() => {
      if (audio.currentTime >= stopAtSecond) {
        audio.pause();
        setPaused(true);
        clearInterval(interval);
      }
    }, 250);

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      const currentWordIndex = wordTimings.findIndex(
        (t) => current >= t.start && current <= t.end
      );
      setActiveIndex(currentWordIndex !== -1 ? currentWordIndex : null);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      clearInterval(interval);
    };
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

  const nums = [num1, num2, num3, num4, num5];

  return (
    <div style={{ textAlign: "center" }}>
      <audio ref={mainAudioRef} controls>
        <source src={vocabulary} type="audio/mp3" />
      </audio>

      <audio ref={clickAudioRef} style={{ display: "none" }} />

      <div style={{ position: "relative", display: "inline-block" }}>
        <div style={{ bottom: "2%", right: "0%" }}>
          <img
            src={page2_2}
            style={{
              height: "170px",
              width: "auto",
              position: "absolute",
              bottom: "2%",
              right: "0%",
              borderRadius: "5%",
            }}
          />
          <div className="vocab_container">
            {["Goodbye!", "How are you?", "Fine, thank you.", "Hello!", "Good morning!"].map(
              (text, i) => (
                <h6 key={i} className={activeIndex === i ? "active" : ""}>
                  {i + 1} {text}
                </h6>
              )
            )}
          </div>
        </div>

        {nums.map((num, i) => (
          <img
            key={i}
            src={num}
            className={`num-img ${activeIndex === i ? "active" : ""}`}
            style={{
              height: "20px",
              width: "auto",
              position: "absolute",
              top: ["43%", "43%", "42%", "22%", "25%"][i],
              left: ["14%", "54%", "71%", "40%", "32%"][i],
            }}
          />
        ))}

        <img
          src={backgroundImage}
          alt="interactive"
          style={{ height: "460px", width: "auto" }}
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

      {paused && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="play-btn swal-continue"
            onClick={() => {
              mainAudioRef.current.play();
            }}
            style={{ marginTop: "18px" }}
          >
            Continue <IoCaretForwardCircle size={20} style={{ color: "red" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Page4_vocabulary;

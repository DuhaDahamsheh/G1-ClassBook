import React, { useState, useRef, useEffect } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../assets/unit1/CD6.Pg8_Instruction1_Adult Lady.mp3";
import Pg8_1_1_AdultLady from "../assets/unit1/Pg8_1.1_Adult Lady.mp3";
import Pg8_1_2_AdultLady from "../assets/unit1/Pg8_1.2_Adult Lady.mp3";
import Pg8_1_3_AdultLady from "../assets/unit1/Pg8_1.3_Adult Lady.mp3";
import Pg8_1_4_AdultLady from "../assets/unit1/Pg8_1.4_Adult Lady.mp3";
import deer from "../assets/deer_page_8.png";
import duck from "../assets/duck_page_8.png";
import taxi from "../assets/taxi_page_8.png";
import tiger from "../assets/tiger_page_8.png";
import ValidationAlert from "./Popup/ValidationAlert";
import { IoCaretForwardCircle } from "react-icons/io5";

const Page8_Q1 = () => {
  const audioRef = useRef(null);

  // ✅ بدل 2 arrays → state واحد مرتب
  const data = [
    { word: "deer", missing: "d", sound: Pg8_1_4_AdultLady, src: deer, num: "4" },
    { word: "duck", missing: "d", sound: Pg8_1_3_AdultLady, src: duck, num: "3" },
    { word: "tiger", missing: "t", sound: Pg8_1_1_AdultLady, src: tiger, num: "1" },
    { word: "taxi", missing: "t", sound: Pg8_1_2_AdultLady, src: taxi, num: "2" },
  ];

  const [answers, setAnswers] = useState(
    data.map(() => ({ letter: "", number: "" }))
  );

  const stopAtSecond = 2;
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    audioRef.current.play();
    const interval = setInterval(() => {
      if (audioRef.current.currentTime >= stopAtSecond) {
        audioRef.current.pause();
        setPaused(true);
        clearInterval(interval);
      }
    }, 200);
  }, []);

  // ✅ دالة عامة لكل الإدخالات
  const updateAnswer = (index, field, value) => {
    setAnswers((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value.toLowerCase() } : item
      )
    );
  };

  const playSound = (src) => {
    audioRef.current.src = src;
    audioRef.current.play();
  };

  // ✅ Start Again reset
  const reset = () =>
    setAnswers(data.map(() => ({ letter: "", number: "" })));

  // ✅ Check
  const checkAnswers = () => {
    if (answers.some((a) => a.letter === "" || a.number === "")) {
      ValidationAlert.info();
      return;
    }

    const correct = answers.every(
      (a, i) => a.letter === data[i].missing && a.number === data[i].num
    );

    correct ? ValidationAlert.success() : ValidationAlert.error();
  };

  return (
    <>
      <header className="header-title-page8">
        <span className="ex-A">A</span>
        <span className="ex-a-1">1</span> Listen and write the missing letters. Number the pictures.
      </header>

      <audio ref={audioRef} controls>
        <source src={CD6_Pg8_Instruction1_AdultLady} type="audio/mp3" />
      </audio>

      <div className="div-input" style={{ display: "flex", justifyContent: "space-around" }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "flex-end" }}>
            <span className="number-of-q">{index + 1}</span>
            <input
              type="text"
              maxLength="1"
              className="char-input"
              value={answers[index].letter}
              onChange={(e) => updateAnswer(index, "letter", e.target.value)}
              style={{ width: "30px", textAlign: "center", fontSize: "24px", marginRight: "5px" }}
            />
            {item.word.slice(1)}
          </div>
        ))}
      </div>

      <div className="exercise-image-div" style={{ display: "flex" }}>
        {data.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className="exercise-image"
            onClick={() => playSound(item.sound)}
          />
        ))}
      </div>

      <div className="exercise-container">
        {data.map((item, index) => (
          <div key={index} className="exercise-item">
            <input
              type="text"
              maxLength="1"
             className={`missing-input ${answers[index].number ? "filled" : ""}`}
              value={answers[index].number}
              onChange={(e) => updateAnswer(index, "number", e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="validation-buttons">
        <button className="try-again-button retry-btn swal-retry" onClick={reset}>
          Start Again ↻
        </button>

        {paused && (
          <button className="play-btn swal-continue" onClick={() => (audioRef.current.play(), setPaused(false))}>
            Continue <IoCaretForwardCircle size={20} style={{ color: "red" }} />
          </button>
        )}

        <button className="check-button2 check-btn swal-check" onClick={checkAnswers}>
          Check Answers ✓
        </button>
      </div>
    </>
  );
};

export default Page8_Q1;

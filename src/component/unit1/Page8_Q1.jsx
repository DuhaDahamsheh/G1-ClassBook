import React, { useState, useRef, useEffect } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../assets/unit1/sounds/pg8-instruction1-all.mp3";
import Pg8_1_1_AdultLady from "../../assets/unit1/sounds/Pg8_1.1_Adult Lady.mp3";
import Pg8_1_2_AdultLady from "../../assets/unit1/sounds/Pg8_1.2_Adult Lady.mp3";
import Pg8_1_3_AdultLady from "../../assets/unit1/sounds/Pg8_1.3_Adult Lady.mp3";
import Pg8_1_4_AdultLady from "../../assets/unit1/sounds/Pg8_1.4_Adult Lady.mp3";
import deer from "../../assets/unit1/imgs/deer flip.svg";
import duck from "../../assets/unit1/imgs/duck.svg";
import taxi from "../../assets/unit1/imgs/taxi_1.svg";
import tiger from "../../assets/unit1/imgs/tiger.svg";
import ValidationAlert from "../Popup/ValidationAlert";
import { IoCaretForwardCircle } from "react-icons/io5";

const Page8_Q1 = () => {
  const audioRef = useRef(null);

  // ✅ البيانات الأصلية (ترتيب الصور)
  const data = [
    {
      word: "deer",
      missing: "d",
      sound: Pg8_1_4_AdultLady,
      src: deer,
      num: "4",
    },
    {
      word: "duck",
      missing: "d",
      sound: Pg8_1_3_AdultLady,
      src: duck,
      num: "3",
    },
    {
      word: "tiger",
      missing: "t",
      sound: Pg8_1_1_AdultLady,
      src: tiger,
      num: "1",
    },
    {
      word: "taxi",
      missing: "t",
      sound: Pg8_1_2_AdultLady,
      src: taxi,
      num: "2",
    },
  ];

  // ✅ ترتيب الكلمات المعروض **بدون تغيير ترتيب الصور**
  const displayOrder = [2, 3, 1, 0];
  // => tiger, taxi, duck, deer

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

  const updateAnswer = (index, field, value) => {
    setAnswers((prev) =>
      prev.map((a, i) =>
        i === index ? { ...a, [field]: value.toLowerCase() } : a
      )
    );
  };

  const playSound = (src) => {
    audioRef.current.src = src;
    audioRef.current.play();
  };

  const reset = () => setAnswers(data.map(() => ({ letter: "", number: "" })));

const checkAnswers = () => {
  if (answers.some((a) => a.letter === "" || a.number === "")) {
    ValidationAlert.info("Oops!", "Please complete all answers before checking.");
    return;
  }

  let correctLetters = 0;
  let correctNumbers = 0;

  answers.forEach((a, i) => {
    if (a.letter === data[i].missing) correctLetters++;
    if (a.number === data[i].num) correctNumbers++;
  });

  let totalPoints = data.length * 2;
  let score = correctLetters + correctNumbers;

  let color =
    score === totalPoints ? "green" :
    score === 0 ? "red" :
    "orange";

  let scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      
      <span style="color:${color}; font-weight:bold;">
      Your Score:  ${score} / ${totalPoints}
      </span>
    </div>
  `;

  if (score === totalPoints) {
    ValidationAlert.success(scoreMessage);
  } else if (score === 0) {
    ValidationAlert.error(scoreMessage);
  } else {
    ValidationAlert.warning(scoreMessage);
  }
};


  return (
    <>
      <header className="header-title-page8">
        <span className="ex-A">A</span> 1 Listen and write the missing letters.
        Number the pictures.
      </header>

      <audio ref={audioRef} controls>
        <source src={CD6_Pg8_Instruction1_AdultLady} type="audio/mp3" />
      </audio>

      {/* ✅ ترتيب الكلمات الصحيح */}
      <div
        className="div-input"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {displayOrder.map((dataIndex, index) => (
          <div key={index} style={{ display: "flex", alignItems: "flex-end" }}>
            <span className="number-of-q">{index + 1}</span>
            <input
              type="text"
              maxLength="1"
              className="char-input"
              value={answers[dataIndex].letter}
              onChange={(e) =>
                updateAnswer(dataIndex, "letter", e.target.value)
              }
              style={{
                width: "30px",
                textAlign: "center",
                fontSize: "24px",
                marginRight: "5px",
              }}
            />
            {data[dataIndex].word.slice(1)}
          </div>
        ))}
      </div>

      {/* ✅ الصور تبقى في مكانها الأصلي */}
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

      {/* ✅ مربعات الأرقام بنفس ترتيب الصور */}
      <div className="exercise-container">
        {data.map((item, index) => (
          <div key={index} className="exercise-item">
            <input
              type="text"
              maxLength="1"
              className={`missing-input ${
                answers[index].number ? "filled" : ""
              }`}
              value={answers[index].number}
              onChange={(e) => updateAnswer(index, "number", e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="validation-buttons">
        <button
          className="try-again-button retry-btn swal-retry"
          onClick={reset}
        >
          Start Again ↻
        </button>

        {paused && (
          <button
            className="play-btn swal-continue"
            onClick={() => (audioRef.current.play(), setPaused(false))}
          >
            Continue <IoCaretForwardCircle size={20} style={{ color: "red" }} />
          </button>
        )}

        <button
          className="check-button2 check-btn swal-check"
          onClick={checkAnswers}
        >
          Check Answers ✓
        </button>
      </div>
    </>
  );
};

export default Page8_Q1;

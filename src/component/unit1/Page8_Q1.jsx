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
  const clickAudioRef = useRef(null);

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

  const displayOrder = [2, 3, 1, 0]; // ترتيب الكلمات

  const [answers, setAnswers] = useState(
    data.map(() => ({ letter: "", number: "" }))
  );
  const [wrongLetters, setWrongLetters] = useState(data.map(() => false));
  const [wrongNumbers, setWrongNumbers] = useState(data.map(() => false));

  const stopAtSecond = 9;
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play();

    const interval = setInterval(() => {
      if (audio.currentTime >= stopAtSecond) {
        audio.pause();
        setPaused(true);
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const updateAnswer = (index, field, value) => {
    setAnswers((prev) =>
      prev.map((a, i) =>
        i === index ? { ...a, [field]: value.toLowerCase() } : a
      )
    );
  };

  const playSound = (src) => {
    if (!clickAudioRef.current) return;
    clickAudioRef.current.src = src;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play();
  };

  const reset = () => {
    setAnswers(data.map(() => ({ letter: "", number: "" })));
    setWrongLetters(data.map(() => false)); // <-- ✅ يرجع بدون علامات غلط
    setWrongNumbers(data.map(() => false));
  };

  const checkAnswers = () => {
    if (answers.some((a) => a.letter === "" || a.number === "")) {
      ValidationAlert.info(
        "Oops!",
        "Please complete all answers before checking."
      );
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

    const letterWrongs = answers.map((a, i) => a.letter !== data[i].missing);
    const numberWrongs = answers.map((a, i) => a.number !== data[i].num);

    setWrongLetters(letterWrongs);
    setWrongNumbers(numberWrongs);

    let color =
      score === totalPoints ? "green" : score === 0 ? "red" : "orange";

    let scoreMessage = `
      <div style="font-size: 20px; margin-top: 10px; text-align:center;">
        <span style="color:${color}; font-weight:bold;">Score: ${score} / ${totalPoints}</span>
      </div>
    `;

    if (score === totalPoints) ValidationAlert.success(scoreMessage);
    else if (score === 0) ValidationAlert.error(scoreMessage);
    else ValidationAlert.warning(scoreMessage);
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

      <audio ref={clickAudioRef} style={{ display: "none" }} />

      {/* ✅ الكلمات */}
      <div
        className="div-input"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {displayOrder.map((dataIndex, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
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
            {wrongLetters[dataIndex] && (
              <div
                style={{
                  position: "absolute",
                  left: "56%",
                  top: "19%",
                  transform: "translateY(-50%)",
                  width: "25px",
                  height: "25px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "2px solid white",
                }}
              >
                X
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ✅ الصور */}
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

      {/* ✅ مربعات الأرقام + علامة الخطأ */}
      <div className="exercise-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="exercise-item"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              maxLength="1"
              className="missing-input"
              value={answers[index].number}
              onChange={(e) => updateAnswer(index, "number", e.target.value)}
            />

            {wrongNumbers[index] && (
              <div
                style={{
                  position: "absolute",
                  right: "-17px",
                  top: "5%",
                  transform: "translateY(-50%)",
                  width: "25px",
                  height: "25px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "2px solid white",
                }}
              >
                X
              </div>
            )}
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

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
import { FaCheck } from "react-icons/fa";
const Page8_Q1 = () => {
  const audioRef = useRef(null);

  const words = [
    { word: "tiger", missing: "t" },
    { word: "taxi", missing: "t" },
    { word: "duck", missing: "d" },
    { word: "deer", missing: "d" },
  ];
  const [inputs, setInputs] = useState(Array(words.length).fill(""));

  const sentences = [
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
  const [answers, setAnswers] = useState(Array(sentences.length).fill(""));
  const [pausedByStopPoint, setPausedByStopPoint] = useState(false);

  const stopAtSecond = 2; // غيري الرقم حسب ما بدك

  const startWatch = () => {
    const interval = setInterval(() => {
      if (audioRef.current && audioRef.current.currentTime >= stopAtSecond) {
        audioRef.current.pause();
        setPausedByStopPoint(true);
        clearInterval(interval);
      }
    }, 200);
  };
  const playSound = (soundPath) => {
    console.log(soundPath);

    audioRef.current.src = soundPath;
    audioRef.current.play();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // اختياري
      audioRef.current.play();
      startWatch();
    }
  }, []);
  const continueSound = () => {
    audioRef.current.play();
    setPausedByStopPoint(false);
  };
  const handleInputChange = (value, index) => {
    const updated = [...answers];
    updated[index] = value.toLowerCase();
    setAnswers(updated);
  };
  const handleInputChange2 = (value, index) => {
    const updated = [...inputs];
    updated[index] = value.toLowerCase();
    setInputs(updated);
  };

  const handleCheckAnswers = () => {
    if (answers.includes("") && inputs.includes("")) {
      ValidationAlert.info();
      return;
    }

    const isCorrectInput1 = answers.every((answer, i) => {
      return answer == sentences[i].num;
    });
    const isCorrectInput2 = inputs.every(
      (char, i) => char === words[i].missing
    );
    if (isCorrectInput1 && isCorrectInput2) {
      ValidationAlert.success();
    } else {
      ValidationAlert.error();
    }
  };

  return (
    <>
      <header className="header-title-page8">
        <span className="ex-A">A</span>
        <span className="ex-a-1">1</span> Listen and write the missing letters.
        Number the pictures.
      </header>
      <audio ref={audioRef} style={{ alignSelf: "center" }} controls>
        <source src={CD6_Pg8_Instruction1_AdultLady} type="audio/mp3" />
      </audio>
      <div
        className="div-input"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {words.map((word, index) => {
          return (
            <>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <span className="number-of-q">{index + 1} </span>{" "}
                <input
                  type="text"
                  maxLength="1"
                  className="char-input"
                  value={inputs[index]}
                  onChange={(e) => handleInputChange2(e.target.value, index)}
                  style={{
                    width: "30px",
                    textAlign: "center",
                    fontSize: "24px",
                    marginRight: "5px",
                  }}
                />
                {word.word.slice(1)}
              </div>
            </>
          );
        })}
      </div>
      <div className="exercise-image-div" style={{ display: "flex" }}>
        <img
          src={deer}
          className="exercise-image"
          onClick={() => playSound(Pg8_1_4_AdultLady)}
        />
        <img
          src={duck}
          className="exercise-image"
          onClick={() => playSound(Pg8_1_3_AdultLady)}
        />
        <img
          src={tiger}
          className="exercise-image"
          onClick={() => playSound(Pg8_1_1_AdultLady)}
        />
        <img
          src={taxi}
          className="exercise-image"
          onClick={() => playSound(Pg8_1_2_AdultLady)}
        />
      </div>
      <div className="exercise-container">
        {sentences.map((item, index) => (
          <div key={index} className="exercise-item">
            <input
              type="text"
              maxLength="1"
              className="missing-input"
              value={answers[index]}
              onChange={(e) => handleInputChange(e.target.value, index)}
            />
          </div>
        ))}
      </div>

      {/* زر الفحص */}

      <div class="validation-buttons">
        <button
          className="try-again-button retry-btn swal-retry"
          onClick={() => {
            setInputs(Array(words.length).fill(""));
            setAnswers(Array(sentences.length).fill(""));
          }}
        >
          Start Again ↻
        </button>
        {pausedByStopPoint && (
          <button class="play-btn swal-continue" onClick={continueSound}>
            Continue{" "}
            <span>
              <IoCaretForwardCircle size={20} style={{ color: "red" }} />
            </span>
          </button>
        )}

        <button
          className="check-button2 check-btn swal-check"
          onClick={handleCheckAnswers}
        >
          Check Answers ✓
        </button>
      </div>
    </>
  );
};

export default Page8_Q1;

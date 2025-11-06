import React, { useState, useEffect, useRef } from "react";
import "./Page8_Q4.css";
import ValidationAlert from "../Popup/ValidationAlert";
const Page8_Q4 = () => {
  const data = [
    { letter: "a", number: 1 },
    { letter: "b", number: 2 },
    { letter: "c", number: 3 },
    { letter: "d", number: 4 },
    { letter: "e", number: 5 },
    { letter: "f", number: 6 },
    { letter: "g", number: 7 },
    { letter: "h", number: 8 },
    { letter: "i", number: 9 },
    { letter: "j", number: 10 },
    { letter: "k", number: 11 },
    { letter: "l", number: 12 },
    { letter: "m", number: 13 },
    { letter: "n", number: 14 },
    { letter: "o", number: 15 },
    { letter: "p", number: 16 },
    { letter: "q", number: 17 },
    { letter: "r", number: 18 },
    { letter: "s", number: 19 },
    { letter: "t", number: 20 },
    { letter: "u", number: 21 },
    { letter: "v", number: 22 },
    { letter: "w", number: 23 },
    { letter: "x", number: 24 },
    { letter: "y", number: 25 },
    { letter: "z", number: 26 },
  ];

  const questionGroups = [
    [8, 15, 23], // how
    [1, 18, 5], // are
    [25, 15, 21], // you
  ];

  const [letters, setLetters] = useState(
    questionGroups.map((group) => group.map(() => ""))
  );
  const handleInputChange = (value, groupIndex, letterIndex) => {
    const updated = [...letters];
    updated[groupIndex][letterIndex] = value.toLowerCase();
    setLetters(updated);
  };

  const formedWords = letters.map((group) => group.join(""));
  const fullSentence = formedWords.join(" ");

  const handleCheckAnswers = () => {
     // 1️⃣ Check empty input first
  const hasEmpty = letters.some(group => group.some(letter => letter === ""));
  if (hasEmpty) {
    ValidationAlert.info(); // "Please fill all letters"
    return;
  }

  // 2️⃣ Check correctness
  for (let g = 0; g < letters.length; g++) {
    for (let l = 0; l < letters[g].length; l++) {
      const letter = letters[g][l];
      const correctNum = data.find(d => d.letter === letter)?.number;

      if (correctNum !== questionGroups[g][l]) {
        ValidationAlert.error();
        return;
      }
    }
  }

  // 3️⃣ If all correct
  ValidationAlert.success();
  };

  return (
    <div className="container3">
      <h5 className="header-title-page8">
        <span className="letter-of-Q"> C</span>Answer the question.
      </h5>

      <div className="alphabet-box">
        <div className="row">
          {data.map((c, i) => (
            <div className="letter-char">
              <div className="data">
                <span key={i} className="cell">
                  {c.letter}
                </span>
              </div>
              <div className="data">
                <span key={i} className="cell number">
                  {c.number}
                </span>
              </div>
            </div>
          ))}
        </div>

     <div className="words">
  {questionGroups.map((group, groupIndex) => (
    <div className="word-group" key={groupIndex}>
      {group.map((num, letterIndex) => (
        <div className="input-h6" key={letterIndex}>
          <h6>{num}</h6>
          <input
            className="inputs"
            maxLength={1}
            value={letters[groupIndex][letterIndex]}
            onChange={(e) =>
              handleInputChange(e.target.value, groupIndex, letterIndex)
            }
          />
        </div>
      ))}
    </div>
  ))}
</div>

       <div className="sentence">
  {formedWords.map((word, i) => (
    <span key={i} className="sentence-word">{word}</span>
  ))}
</div>
      </div>
      <div className="action-buttons-container">
        <button
          onClick={() => {
           setLetters(questionGroups.map(group => group.map(() => "")));
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        <button onClick={handleCheckAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Page8_Q4;

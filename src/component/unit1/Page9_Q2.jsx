import React, { useRef, useState } from "react";
import ValidationAlert from "../Popup/ValidationAlert";
import "./Page9_Q2.css";

export default function Page9_Q2() {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  let startPoint = null;

  // 🎨 ألوان الكلمات
  const colors = ["red", "blue", "green", "orange", "purple", "yellow"];
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [wordColors, setWordColors] = useState([
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ]);

  const handleWordClick = (index) => {
    setSelectedWordIndex(index);
  };

  const applyColor = (color) => {
    const newColors = [...wordColors];
    newColors[selectedWordIndex] = color;
    setWordColors(newColors);
    setSelectedWordIndex(null);
  };

  const handleDotDown = (e) => {
    startPoint = e.target;
    const rect = containerRef.current.getBoundingClientRect();
    const x = startPoint.getBoundingClientRect().left - rect.left + 8;
    const y = startPoint.getBoundingClientRect().top - rect.top + 8;
    setLines((prev) => [...prev, { x1: x, y1: y, x2: x, y2: y }]);
    window.addEventListener("mousemove", followMouse);
    window.addEventListener("mouseup", stopDrawingLine);
  };

  const correctMatches = [
    { word1: "Good", word2: "afternoon" },
    { word1: "Fine,", word2: "thank you" },
    { word1: "How", word2: "are you" },
  ];

  const followMouse = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setLines((prev) => [
      ...prev.slice(0, -1),
      {
        x1: startPoint.getBoundingClientRect().left - rect.left + 8,
        y1: startPoint.getBoundingClientRect().top - rect.top + 8,
        x2: e.clientX - rect.left,
        y2: e.clientY - rect.top,
      },
    ]);
  };

  const stopDrawingLine = (e) => {
    window.removeEventListener("mousemove", followMouse);
    window.removeEventListener("mouseup", stopDrawingLine);

    const endDot = document.elementFromPoint(e.clientX, e.clientY);

    if (!endDot.classList.contains("end-dot1")) {
      setLines((prev) => prev.slice(0, -1));
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const newLine = {
      x1: startPoint.getBoundingClientRect().left - rect.left + 8,
      y1: startPoint.getBoundingClientRect().top - rect.top + 8,
      x2: endDot.getBoundingClientRect().left - rect.left + 8,
      y2: endDot.getBoundingClientRect().top - rect.top + 8,
      word: startPoint.dataset.letter,
      image: endDot.dataset.image,
    };

    setLines((prev) => [...prev.slice(0, -1), newLine]);
  };

  const checkAnswers = () => {
  // 1️⃣ إذا في خطوط ناقصة
  if (lines.length < correctMatches.length) {
    ValidationAlert.info(
      "Oops!",
      "Please connect all pairs before checking."
    );
    return;
  }

  // 2️⃣ حساب عدد التوصيلات الصحيحة
  let correctCount = 0;
  const total = correctMatches.length;

  lines.forEach((line) => {
    const isCorrect = correctMatches.some(
      (pair) => pair.word1 === line.word && pair.word2 === line.image
    );
    if (isCorrect) correctCount++;
  });

  // 3️⃣ تحديد اللون حسب النتيجة
  const color =
    correctCount === total ? "green" :
    correctCount === 0 ? "red" :
    "orange";

  // 4️⃣ رسالة النتيجة بشكل HTML
  const scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      <span style="color:${color}; font-weight:bold;">
        Your Score: ${correctCount} / ${total}
      </span>
    </div>
  `;

  // 5️⃣ اختيار نوع الرسالة
  if (correctCount === total) {
    ValidationAlert.success(scoreMessage);
  } else if (correctCount === 0) {
    ValidationAlert.error(scoreMessage);
  } else {
    ValidationAlert.warning(scoreMessage);
  }
};


  return (
    <>
      <h4 className="header-title-page8">
        <span className="ex-A">E</span>Match and color.
      </h4>
      {selectedWordIndex !== null && (
        <div className="color-palette">
          {colors.map((c) => (
            <div
              key={c}
              className="color-circle"
              style={{ backgroundColor: c }}
              onClick={() => applyColor(c)}
            ></div>
          ))}
        </div>
      )}

      <div className="container2" ref={containerRef}>
        <div className="word-section1">
          {["Good", "Fine,", "How"].map((word, i) => (
            <h5
              key={i}
              className={
                wordColors[0] === "transparent"
                  ? "word-outline H5"
                  : "word-colored H5"
              }
              style={{ color: wordColors[i], cursor: "pointer" }}
              onClick={() => handleWordClick(i)}
            >
              {word}
              <div
                className="dot1 start-dot1"
                data-letter={word}
                onMouseDown={handleDotDown}
              ></div>
            </h5>
          ))}
        </div>

        <div className="word-section2">
          {["thank you", "are you", "afternoon"].map((word, i) => (
            <h5
              key={i + 3}
              className={
                wordColors[0] === "transparent"
                  ? "word-outline H5"
                  : "word-colored H5"
              }
              style={{ color: wordColors[i + 3], cursor: "pointer" }}
              onClick={() => handleWordClick(i + 3)}
            >
              <div className="dot1 end-dot1" data-image={word}></div>
              {word}
            </h5>
          ))}
        </div>

        <svg className="lines-layer">
          {lines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="red"
              strokeWidth="3"
            />
          ))}
        </svg>
      </div>

      <div className="action-buttons-container">
        <button
          onClick={() => {
            setLines([]);
            setWordColors([
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
            ]);
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </>
  );
}

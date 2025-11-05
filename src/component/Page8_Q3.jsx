import React, { useRef, useState, useEffect } from "react";
import img1 from "../assets/matching1Q_Page8 (1).png";
import img2 from "../assets/matching2Q_Page8 (2).png";
import imgs from "../assets/Untitled-1-05.svg";
import "./Page8_Q3.css";
import ValidationAlert from "./Popup/ValidationAlert";
export default function Page8_Q3() {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);

  let startPoint = null;

  const handleDotDown = (e) => {
    startPoint = e.target;

    const rect = containerRef.current.getBoundingClientRect();
    const x = startPoint.getBoundingClientRect().left - rect.left + 8;
    const y = startPoint.getBoundingClientRect().top - rect.top + 8;

    // ✅ أضيفي خط مبدئي قبل السحب
    setLines((prev) => [...prev, { x1: x, y1: y, x2: x, y2: y }]);
    window.addEventListener("mousemove", followMouse);
    window.addEventListener("mouseup", stopDrawingLine);
  };
  const correctMatches = [
    { word: "Hello! I’m John.", image: "img2" },
    { word: "Goodbye!", image: "img1" },
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

    if (!endDot.classList.contains("end-dot")) {
      setLines((prev) => prev.slice(0, -1)); // cancel last line
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
    // 1) اذا ما ربط ولا خط
    if (lines.length < 2) {
      ValidationAlert.info(); // "Please fill all letters"
      return;
    }

    // 2) شيك اذا الربط صحيح
    let correctCount = 0;

    lines.forEach((line) => {
      const isCorrect = correctMatches.some(
        (pair) => pair.word === line.word && pair.image === line.image
      );
      if (isCorrect) correctCount++;
    });

    if (correctCount === correctMatches.length) {
      ValidationAlert.success();
    } else {
      ValidationAlert.error();
    }
  };

  return (
    <>
      <h5 className="header-title-page8-q3">
        <span className="ex-A">B</span>Read and match.
      </h5>

      <div className="container" ref={containerRef}>
        <div className="word-section">
          <h5 className="H5-Q8">
            <span className="span-num">1</span>Hello! I’m John.
            <div
              className="dot start-dot"
              data-letter={"Hello! I’m John."}
              onMouseDown={handleDotDown}
            ></div>
          </h5>
          <h5 className="H5-Q8">
            <span className="span-num">2</span> Goodbye!
            <div
              className="dot start-dot"
              data-letter={"Goodbye!"}
              onMouseDown={handleDotDown}
            ></div>
          </h5>
        </div>
        <div className="img-section">
          <img
            src={imgs}
            className="imgs"
            style={{ height: "50vh", width: "auto" }}
          />
          <div className="img-container2">
            <div
              id="dot-start1"
              className="dot end-dot"
              data-index={1}
              data-image="img1"
            ></div>
          </div>
          <div className="img-container2">
            <div
              id="dot-start2"
              className="dot end-dot"
              data-index={2}
              data-image="img2"
            ></div>
          </div>
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
            setLines([]); // يمسح جميع الخطوط
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

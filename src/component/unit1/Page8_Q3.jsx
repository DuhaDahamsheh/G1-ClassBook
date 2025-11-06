import React, { useRef, useState } from "react";
import img1 from "../../assets/img2.svg";
import img2 from "../../assets/img1.svg";

import "./Page8_Q3.css";
import ValidationAlert from "../Popup/ValidationAlert";

export default function Page8_Q3() {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  let startPoint = null;

  const correctMatches = [
    { word: "Hello! I’m John.", image: "img1" },
    { word: "Goodbye!", image: "img2" },
  ];

  const handleDotDown = (e) => {
    startPoint = e.target;
    const rect = containerRef.current.getBoundingClientRect();
    const x = startPoint.getBoundingClientRect().left - rect.left + 8;
    const y = startPoint.getBoundingClientRect().top - rect.top + 8;

    setLines((prev) => [...prev, { x1: x, y1: y, x2: x, y2: y }]);
    window.addEventListener("mousemove", followMouse);
    window.addEventListener("mouseup", stopDrawingLine);
  };

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

    if (!endDot || !endDot.classList.contains("end-dot")) {
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
    if (lines.length < 2) {
      ValidationAlert.info();
      return;
    }

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
      <h5 className="header-title-page8">
        <span className="ex-A">B</span>Read and match.
      </h5>

      <div className="container1" ref={containerRef}>
        {/* الصف الأول */}
        <div className="matching-row">
          <div className="word-with-dot">
            <span className="span-num">1</span>
            <span className="word-text">Hello! I’m John.</span>
            <div className="dot-wrapper">
              <div
                className="dot start-dot"
                data-letter="Hello! I’m John."
                onMouseDown={handleDotDown}
              ></div>
            </div>
          </div>

          <div className="img-with-dot">
            <div className="dot-wrapper">
              <div className="dot end-dot" data-image="img2"></div>
            </div>
            <img src={img2} className="matched-img" alt="" />
          </div>
        </div>

        {/* الصف الثاني */}
        <div className="matching-row">
          <div className="word-with-dot">
            <span className="span-num">2</span>
            <span className="word-text">Goodbye!</span>
            <div className="dot-wrapper">
              <div
                className="dot start-dot"
                data-letter="Goodbye!"
                onMouseDown={handleDotDown}
              ></div>
            </div>
          </div>

          <div className="img-with-dot">
            <div className="dot-wrapper">
              <div className="dot end-dot" data-image="img1"></div>
            </div>
            <img src={img1} className="matched-img" alt="" />
          </div>
        </div>

        <svg className="lines-layer">
          {lines.map((line, i) => (
            <line key={i} {...line} stroke="red" strokeWidth="3" />
          ))}
        </svg>
      </div>

      <div className="action-buttons-container">
        <button onClick={() => setLines([])} className="try-again-button">
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </>
  );
}

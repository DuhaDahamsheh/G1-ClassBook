import React, { useState, useRef } from "react";
import boy from "../../assets/img_unit2/imgs/boy2.jpg";
import fotball from "../../assets/img_unit2/imgs/Football.jpg";
import bird from "../../assets/img_unit2/imgs/bird.jpg";
import pizza2 from "../../assets/img_unit2/imgs/Pizza (2).jpg";
import ValidationAlert from "../Popup/ValidationAlert";
// import { faFootball } from "@fortawesome/free-solid-svg-icons";
const Unit2_Page10_Q2 = () => {
  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  let startPoint = null;
  const [wrongWords, setWrongWords] = useState([]); // ⭐ تم التعديل هون
  const correctMatches = [
    { word: "bird", image: "img1" },
    { word: "boy", image: "img2" },
    { word: "pizza", image: "img3" },
    { word: "ball", image: "img4" },
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

    if (!endDot || !endDot.classList.contains("end-dot2")) {
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
    // تأكد إنو الطالب وصل كل الأزواج
    if (lines.length < correctMatches.length) {
      ValidationAlert.info(
        "Oops!",
        "Please connect all the pairs before checking."
      );
      return;
    }

    let correctCount = 0;
    const total = correctMatches.length;
    let wrong = []; // ⭐ تم التعديل هون
    // احسب كم وصلة صحيحة
    lines.forEach((line) => {
      const isCorrect = correctMatches.some(
        (pair) => pair.word === line.word && pair.image === line.image
      );
      if (isCorrect) correctCount++;
      else wrong.push(line.word); // ⭐ تم التعديل هون
    });
    setWrongWords(wrong); // ⭐ تم التعديل هون
    // تحديد اللون حسب النتيجة
    const color =
      correctCount === total ? "green" : correctCount === 0 ? "red" : "orange";

    // رسالة النتيجة منسقة بالألوان
    const scoreMessage = `
        <div style="font-size: 20px; margin-top: 10px; text-align:center;">
          <span style="color:${color}; font-weight:bold;">
            Score: ${correctCount} / ${total}
          </span>
        </div>
      `;

    // الحالات الثلاث
    if (correctCount === total) {
      ValidationAlert.success(scoreMessage);
    } else if (correctCount === 0) {
      ValidationAlert.error(scoreMessage);
    } else {
      ValidationAlert.warning(scoreMessage);
    }
  };

  return (
    <div className="page8-q1-container">
      <h5 className="header-title-page8">Read and match.</h5>

      <div className="container12" ref={containerRef}>
        {/* الصف الأول */}
        <div className="matching-row2">
          <div className="word-with-dot2">
            <span className="span-num2">1</span>
            <span className="word-text2">Ball</span>
            {wrongWords.includes("ball") && ( // ⭐ تم التعديل هون
              <span className="error-mark">✕</span>
            )}
            <div className="dot-wrapper2">
              <div
                className="dot2 start-dot2"
                data-letter="ball"
                onMouseDown={handleDotDown}
              ></div>
            </div>
          </div>

          <div className="img-with-dot2">
            <div className="dot-wrapper2">
              <div className="dot2 end-dot2" data-image="img1"></div>
            </div>
            <img
              src={bird}
              className="matched-img2"
              alt=""
              style={{ height: "100px", width: "auto" }}
            />
          </div>
        </div>

        {/* الصف الثاني */}
        <div className="matching-row2">
          <div className="word-with-dot2">
            <span className="span-num2">2</span>
            <span className="word-text2">pizza</span>
            {wrongWords.includes("pizza") && ( // ⭐ تم التعديل هون
              <span className="error-mark">✕</span>
            )}
            <div className="dot-wrapper2">
              <div
                className="dot2 start-dot2"
                data-letter="pizza"
                onMouseDown={handleDotDown}
              ></div>
            </div>
          </div>

          <div className="img-with-dot2">
            <div className="dot-wrapper2">
              <div className="dot2 end-dot2" data-image="img2"></div>
            </div>
            <img
              src={boy}
              className="matched-img2"
              alt=""
              style={{ height: "100px", width: "auto" }}
            />
          </div>
        </div>

        {/* الصف الثالث */}
        <div className="matching-row2">
          <div className="word-with-dot2">
            <span className="span-num2">3</span>
            <span className="word-text2">bird</span>
            {wrongWords.includes("bird") && ( // ⭐ تم التعديل هون
              <span className="error-mark">✕</span>
            )}
            <div className="dot-wrapper2">
              <div
                className="dot2 start-dot2"
                data-letter="bird"
                onMouseDown={handleDotDown}
              ></div>
            </div>
          </div>

          <div className="img-with-dot2">
            <div className="dot-wrapper2">
              <div className="dot2 end-dot2" data-image="img3"></div>
            </div>
            <img
              src={pizza2}
              className="matched-img2"
              alt=""
              style={{ height: "100px", width: "auto" }}
            />
          </div>
        </div>

        {/* الصف الرابع */}
        <div className="matching-row2">
          <div className="word-with-dot2">
            <span className="span-num2">4</span>
            <span className="word-text2">boy</span>
            {wrongWords.includes("boy") && ( // ⭐ تم التعديل هون
              <span className="error-mark">✕</span>
            )}
            <div className="dot-wrapper2">
              <div
                className="dot2 start-dot2"
                data-letter="boy"
                onMouseDown={handleDotDown}
              ></div>
            </div>
          </div>

          <div className="img-with-dot2">
            <div className="dot-wrapper2">
              <div className="dot2 end-dot2" data-image="img4"></div>
            </div>
            <img
              src={fotball}
              className="matched-img2"
              alt=""
              style={{ height: "100px", width: "auto" }}
            />
          </div>
        </div>

        <svg className="lines-layer2">
          {lines.map((line, i) => (
            <line key={i} {...line} stroke="red" strokeWidth="3" />
          ))}
        </svg>
      </div>

      <div className="action-buttons-container">
        <button
          onClick={() => {
            setLines([]);
            setWrongWords([]);
          }}
          className="try-again-button"
        >
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Unit2_Page10_Q2;

import "./Unit3_Page5_Q2.css";

import React, { useState } from "react";
import CD13_Pg14_Instruction1_AdultLady from "../../assets/img_unit2/sounds-unit2/CD13.Pg14_Instruction1_Adult Lady.mp3";
import ValidationAlert from "../Popup/ValidationAlert";

const Unit3_Page5_Q2 = () => {
  const [answers, setAnswers] = useState([null, null, null, null]);
  const [showResult, setShowResult] = useState(false);

  const correctData = ["1", "2", "4"];
  const options = [
    { img: "/assets/bat.png", correct: "1" },
    { img: "/assets/bucket.png", correct: "2" },
    { img: "/assets/box.png", correct: "3" },
    { img: "/assets/boat.png", correct: "4" },
    { img: "/assets/boat.png", correct: "5" },
    { img: "/assets/boat.png", correct: "6" },
  ];

  // ✅ نسمح فقط باختيار إجابة واحدة
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index); // اختيار إجابة واحدة فقط
  };

  const scoreMessage = `
    <div style="font-size: 20px; text-align:center; margin-top: 8px;">
      <span style="color:green; font-weight:bold;">
         Score: 1 /1
      </span>
    </div>
  `;

  // ✅ الفحص فقط إذا الطالب اختار أو لا
  const checkAnswers = () => {
    if (selected === null) {
      ValidationAlert.info("Oops!", "Please select an answer first.");
      return;
    }

    // إذا بدك لاحقًا تضيف صح/غلط، هون منعمله.
    ValidationAlert.success(scoreMessage);
  };

  // 🔄 زر الريست
  const resetAnswers = () => {
    setSelected(null);
  };

  return (
    <div className="unit2-q3-wrapper">
      <h5 className="header-title-page8">
        <span className="ex-A">B</span> Ask and answer.
      </h5>

      <div className="q3-content">
        {/* الخيارات */}
        <div className="q3-options">
          {options.map((item, index) => (
            <div
              key={item.num}
              className={`q3-option-item ${selected === index ? "active" : ""}`}
              onClick={() => handleSelect(index)}
            >
              <di>
                <span className="q3-number">{item.num}</span>
              </di>
              <img src={item.img} className="q3-option-img" alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="action-buttons-container">
        <button onClick={resetAnswers} className="try-again-button">
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Unit3_Page5_Q2;

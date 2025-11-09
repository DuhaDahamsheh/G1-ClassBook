import React, { useState } from "react";
import conversation from "../../assets/unit1/imgs/conversation.svg";
import ValidationAlert from "../Popup/ValidationAlert";

const Page9_Q1 = () => {
  // ✅ الإحداثيات كلها نسب مئوية (نسبة من الصورة)
  const clickableAreas = [
    { x: 20, y: 8, w: 22, h:12 }, // غيّري هاي الأرقام حسب ما بدك
  ];

  const [inputs, setInputs] = useState(Array(clickableAreas.length).fill(""));

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  

  const handleCheck = () => {
    if (inputs.some((value) => value.trim() === "")) {
      ValidationAlert.info(); 
      return;
    }
     let scoreMessage = ``
    ValidationAlert.success(scoreMessage);
  };

  const handleReset = () => {
    setInputs(Array(clickableAreas.length).fill(""));
  };

  return (
    <>
      <h5 className="header-title-page8" id="ex-d">
        <span className="ex-A">D</span> Ask and answer.
      </h5>

      {/* ✅ الصورة هي المرجع */}
      <div
        style={{
          position: "relative",
          width: "60vw",       // حجم Responsive
          maxWidth: "600px",   // حد أقصى مناسب
          marginBottom: "30px",
        }}
      >
        <img
          src={conversation}
          style={{ width: "100%", height: "auto", display: "block" }}
          alt="conversation"
        />

        {/* ✅ الانبوت يتحرك حسب نسب الصورة */}
        {clickableAreas.map((area, index) => (
          <input
            key={index}
            value={inputs[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            style={{
              position: "absolute",
              top: `${area.y}%`,
              left: `${area.x}%`,
              width: `${area.w}%`,
              height: `${area.h}%`,
              fontSize: "1.2vw", // Responsive
              border: "2px solid #444",
              borderRadius: "6px",
              padding: "4px",
              background: "white",
              outline: "none",
            }}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="action-buttons-container">
        <button onClick={handleReset} className="try-again-button">
          Start Again ↻
        </button>

        <button onClick={handleCheck} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </>
  );
};

export default Page9_Q1;


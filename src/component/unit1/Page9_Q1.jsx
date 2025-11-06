import React, { useState } from "react";
import conversation from "../../assets/unit1/imgs/conversation.svg";
import ValidationAlert from "../Popup/ValidationAlert";
const Page9_Q1 = () => {
  const clickableAreas = [
    { x: 20, y: 24, w: 22, h: 9 }, // (x2-x1=22 , y2-y1=9)
  ];

  const [inputs, setInputs] = useState(Array(clickableAreas.length).fill(""));

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleCheck = () => {
    // Check if any input is empty
    if (inputs.some((value) => value.trim() === "")) {
      ValidationAlert.info(); // "Please fill all fields"
      return;
    }

    ValidationAlert.success(); // All filled
  };

  const handleReset = () => {
    setInputs(Array(clickableAreas.length).fill(""));
  };

  return (
    <>
      <h5 className="header-title-page8" id="ex-d">
        <span className="ex-A">D</span>Ask and answer.
      </h5>

      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        <img src={conversation} style={{ height: "300px" }} />

        {clickableAreas.map((area, index) => (
          <input
            key={index}
            value={inputs[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            style={{
              position: "absolute",
              top: "24%", // y
              left: "20%", // x
              width: "22%", // w
              height: "9%", // h
              /* أهم سطرين لتثبيت الموقع */
              transform: "none",
              /* حجم الخط responsive */
              fontSize: "1.2vw", // أو "1em" إذا بدك ثابت داخل البابل
              border: "2px solid #444",
              borderRadius: "6px",
              padding: "4px",
              background: "white",
              outline: "none",
            }}
          />
        ))}
      </div>

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

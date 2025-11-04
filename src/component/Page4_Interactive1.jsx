import React, { useState } from "react";
import backgroundImage from "../assets/horizontal_combined.png";
import ValidationAlert from "./Popup/ValidationAlert";

const Page4_Interactive1 = () => {
  const [clickedPoint, setClickedPoint] = useState(null);
  const [checkResult, setCheckResult] = useState(null);

  // ✅ منطقة المطعم (بالنسب المئوية)
  const targetArea = {
    x1: 36,
    y1: 12,
    x2: 60,
    y2: 38,
  };

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    setClickedPoint({
      x: xPercent,
      y: yPercent,
      inside:
        xPercent >= targetArea.x1 &&
        xPercent <= targetArea.x2 &&
        yPercent >= targetArea.y1 &&
        yPercent <= targetArea.y2,
    });
  };

  const handleCheck = () => {
    if (!clickedPoint) {
      ValidationAlert.error("Pay attention!", "Please click on the image first.");
      return;
    }

    if (clickedPoint.inside) {
      setCheckResult("success");
      ValidationAlert.success("Bravo!", "You clicked on the restaurant! 🏆");
    } else {
      setCheckResult("fail");
      ValidationAlert.error("Oops!", "This is not the restaurant. Try again!");
    }
  };

  const handleStartAgain = () => {
    setClickedPoint(null);
    setCheckResult(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3 className="header-title-page8" >Find the restaurant</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={backgroundImage}
          alt="interactive"
          style={{ cursor: "pointer", height: "400px" }}
          onClick={handleImageClick}
        />

        {/* ✅ الدائرة الحمراء في مكان الكبس */}
        {clickedPoint && (
          <div
            style={{
              position: "absolute",
              top: `${clickedPoint.y}%`,
              left: `${clickedPoint.x}%`,
              width: "3%",
              height: "3%",
              backgroundColor: "red",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          ></div>
        )}

        {/* ✅ تلوين المنطقة الصحيحة إذا الجواب صح */}
        {checkResult === "success" && (
          <div
            style={{
              position: "absolute",
              top: `${targetArea.y1}%`,
              left: `${targetArea.x1}%`,
              width: `${targetArea.x2 - targetArea.x1}%`,
              height: `${targetArea.y2 - targetArea.y1}%`,
              backgroundColor: "rgba(0, 255, 0, 0.3)", // أخضر شفاف
              borderRadius: "8px",
              pointerEvents: "none",
            }}
          ></div>
        )}
      </div>

      <div
        style={{
          marginTop: "18px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button className="try-again-button" onClick={handleStartAgain}>
          Start Again ↻
        </button>
        <button className="check-button2" onClick={handleCheck}>
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Page4_Interactive1;

import React, { useState } from "react";
import backgroundImage from "../../assets/unit1/imgs/horizontal_combined.jpg";
import ValidationAlert from "../Popup/ValidationAlert";
import vocabTitle from "../../assets/unit1/imgs/vocab-title.png";
const Page4_Interactive1 = () => {
  const [clickedPoint, setClickedPoint] = useState(null);
  const [checkResult, setCheckResult] = useState(null);

  // ✅ منطقة المطعم (بالنسب المئوية)
  const targetArea = {
    x1: 30,
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
  // 1️⃣ إذا الطالب ما ضغط على الصورة
  if (!clickedPoint) {
    ValidationAlert.info(
      "Pay Attention!",
      "Please click on a spot in the image before checking."
    );
    return;
  }

  // 2️⃣ نحدد إنو الصواب / خطأ
  const correct = clickedPoint.inside;
  const total = 1;
  const score = correct ? 1 : 0;

  // 3️⃣ نحدد اللون حسب الإجابة
  const color =
    score === total ? "green" :
    score === 0 ? "red" :
    "orange";

  // 4️⃣ نكتب رسالة العلامة
  const scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      <span style="color:${color}; font-weight:bold;">
        Your Score: ${score} / ${total}
      </span>
    </div>
  `;

  // 5️⃣ نحدد نوع الإشعار حسب النتيجة
  if (score === total) {
    setCheckResult("success");
    ValidationAlert.success(scoreMessage);
  } else if (score === 0) {
    setCheckResult("fail");
    ValidationAlert.error(scoreMessage);
  } else {
    ValidationAlert.warning(scoreMessage);
  }
};

  const handleStartAgain = () => {
    setClickedPoint(null);
    setCheckResult(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
  
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={vocabTitle}
          style={{
            height: "200px",
            width: "auto",
            position: "absolute",
            bottom: "2%",
            right: "6%",
          }}
        />
        <img
          src={backgroundImage}
          alt="interactive"
          style={{ cursor: "pointer", height: "460px" ,width:"auto" }}
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
              backgroundColor: "rgba(0, 255, 0, 0.55)", // أخضر شفاف
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

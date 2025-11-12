import React, { useState } from "react";
import pizza2 from "../../assets/img_unit2/imgs/Pizza (2).jpg";
import table from "../../assets/unit1/imgs/table.svg";
import dish from "../../assets/unit1/imgs/dish.svg";
import boy from "../../assets/img_unit2/imgs/boy2.jpg";
import paint from "../../assets/img_unit2/imgs/Paint.jpg";
import pincle from "../../assets/img_unit2/imgs/Pencel.jpg";
import ValidationAlert from "../Popup/ValidationAlert"; // تأكدي إنها موجودة

const Unit2_Page10_Q4 = () => {
  const correctAnswers = ["p", "b", "p", "p"];
  const [answers, setAnswers] = useState(["", "", "",""]);
  const [wrongInputs, setWrongInputs] = useState([]);

  const handleChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value.toLowerCase();
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (answers.some((ans) => ans.trim() === "")) {
      ValidationAlert.info("Please fill in all the blanks before checking!");
      return;
    }

    let tempScore = 0;
    let wrong = [];
    answers.forEach((ans, i) => {
      if (ans === correctAnswers[i]) {
        tempScore++;
      } else {
        wrong.push(ans);
      }
    });

    setWrongInputs(wrong);

    const total = correctAnswers.length;
    const color =
      tempScore === total ? "green" : tempScore === 0 ? "red" : "orange";

    const scoreMessage = `
    <div style="font-size: 20px; margin-top: 10px; text-align:center;">
      <span style="color:${color}; font-weight:bold;">
        Score: ${tempScore} / ${total}
      </span>
    </div>
  `;

    if (tempScore === total) {
      ValidationAlert.success(scoreMessage);
    } else if (tempScore === 0) {
      ValidationAlert.error(scoreMessage);
    } else {
      ValidationAlert.warning(scoreMessage);
    }
  };

  const reset = () => {
    setAnswers(["", "", "",""]);
    setWrongInputs([]);
  };

  return (
    <div className="question-wrapper">
      <h5 className="header-title-page8">G Look and write.</h5>
      <div className="row-content">
        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">1</span>{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 0)}
                value={answers[0]}
              />
              {wrongInputs.includes(answers[0]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>{" "}
          <img src={paint} alt="" className="q-img" />
        </div>

        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">2</span>{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 1)}
                value={answers[1]}
              />{" "}
              {wrongInputs.includes(answers[1]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>
          <img src={boy} alt="" className="q-img" />
        </div>

        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">3</span>{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 2)}
                value={answers[2]}
              />{" "}
              {wrongInputs.includes(answers[2]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>
          <img src={pizza2} alt="" className="q-img" />
        </div>

        <div className="row2">
          <span style={{ position: "relative" }}>
            <span className="num-span">4</span>{" "}
            <div className="input-wrapper">
              <input
                type="text"
                className="q-input"
                onChange={(e) => handleChange(e.target.value, 3)}
                value={answers[3]}
              />{" "}
              {wrongInputs.includes(answers[3]) && (
                <span className="error-mark-input">✕</span>
              )}
            </div>
          </span>{" "}
          <img src={pincle} alt="" className="q-img" />
        </div>
      </div>

      <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">
          Start Again ↻
        </button>
        <button onClick={checkAnswers} className="check-button2">
          Check Answer ✓
        </button>
      </div>
    </div>
  );
};

export default Unit2_Page10_Q4;

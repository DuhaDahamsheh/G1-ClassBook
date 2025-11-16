import React, { useState, useRef, useEffect } from "react";
import backgroundImage from "../../assets/img_unit2/imgs/02-03 New copy.jpg";
import page2_2 from "../../assets/img_unit2/imgs/unit2 vocab-3CQVwmCm.jpg";
import vocabulary from "../../assets/img_unit2/sounds-unit2/Pg10_Vocabulary_Adult Lady.mp3";
import "./Unit2_Page1.css";
import { CgPlayPauseO } from "react-icons/cg";
import { FaRegCirclePlay } from "react-icons/fa6";
import num1 from "../../assets/img_unit2/imgs/Num1.svg";
import num2 from "../../assets/img_unit2/imgs/Num2.svg";
import num3 from "../../assets/img_unit2/imgs/Num3.svg";
import num4 from "../../assets/img_unit2/imgs/Num4.svg";
import num5 from "../../assets/img_unit2/imgs/Num5.svg";
import num6 from "../../assets/img_unit2/imgs/Num6.svg";
import num7 from "../../assets/img_unit2/imgs/Num7.svg";

const Unit2_Page1_Vocab = () => {
  const mainAudioRef = useRef(null);
  const clickAudioRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showContinue, setShowContinue] = useState(false);
  const stopAtSecond = 3.0;

  // 🎵 فترات الكلمات داخل الأوديو الرئيسي
  const wordTimings = [
    { start: 3.2, end: 5.0 }, // party hat
    { start: 5.1, end: 7.2 }, // jellow
    { start: 7.3, end: 10.2 }, // cake
    { start: 10.3, end: 12.7 }, // Hello
    { start: 12.8, end: 15.2 }, // Good morning
    { start: 15.3, end: 17.0 },
    { start: 17.1, end: 19.3 },
  ];

  // 🟦 تشغيل الأوديو الرئيسي + إيقافه عند ثانية معينة
  useEffect(() => {
    const audio = mainAudioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    const interval = setInterval(() => {
      if (audio.currentTime >= stopAtSecond) {
        audio.pause();
        setPaused(true);
        setShowContinue(true); // 👈 خلي الكبسة تضل ظاهرة دائماً بعد ثانية 3
        clearInterval(interval);
      }
    }, 200);

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      const index = wordTimings.findIndex(
        (t) => current >= t.start && current <= t.end
      );
      setActiveIndex(index !== -1 ? index : null);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      clearInterval(interval);
    };
  }, []);

  const togglePlay = () => {
    const audio = mainAudioRef.current;

    if (audio.paused) {
      audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  };

  // 🟦 تشغيل صوت المناطق (لو انضاف لاحقاً)
  const playSound = (sound) => {
    if (!sound || !clickAudioRef.current) return;
    clickAudioRef.current.src = sound;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play();
  };

  const nums = [num1, num2, num3, num4, num5, num6, num7];

  return (
    <div style={{ textAlign: "center" }}>
      <audio
        ref={mainAudioRef}
        style={{ position: "relative", left: "5%" }}
        controls
      >
        <source src={vocabulary} type="audio/mp3" />
      </audio>

      <audio ref={clickAudioRef} style={{ display: "none" }} />

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* كلمة + صورة صغيرة */}
        <div style={{ bottom: "0%", right: "0%" }}>
          <img
            src={page2_2}
            style={{
              height: "200px",
              width: "auto",
              position: "absolute",
              bottom: "0%",
              right: "0%",
              borderRadius: "8%",
            }}
          />

          {/* النصوص */}
          <div
            className="vocab_container"
            style={{ bottom: "0%", right: "4%" }}
          >
            {[
              "party hat",
              "jello",
              "cake",
              "happy birthday ",
              "balloons",
              "present",
              "card",
            ].map((text, i) => (
              <h6 key={i} className={activeIndex === i ? "active" : ""}>
                {i + 1} {text}
              </h6>
            ))}
          </div>
        </div>

        {/* الأرقام */}
        {nums.map((num, i) => (
          <img
            key={i}
            src={num}
            id={`num-${i + 1}`}
            className={`num-img ${activeIndex === i ? "active" : ""}`}
            style={{
              height: "20px",
              width: "auto",
              position: "absolute",
            }}
          />
        ))}

        {/* الصورة الرئيسية */}
        <img
          src={backgroundImage}
          alt="interactive"
          style={{ height: "460px", width: "auto" }}
        />
      </div>

      {showContinue && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="play-btn swal-continue"
            onClick={togglePlay}
            style={{ marginTop: "18px" }}
          >
            {paused ? (
              <>
                Continue
                <FaRegCirclePlay size={20} style={{ color: "red" }} />
              </>
            ) : (
              <>
                Pause
                <CgPlayPauseO size={20} style={{ color: "red" }} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Unit2_Page1_Vocab;

import React, { useState, useRef, useEffect } from 'react'
import page_8 from "../assets/page_8.png"
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import Popup from './Popup/Popup';
import CD6_Pg8_Instruction1_AdultLady from "../assets/unit1/CD6.Pg8_Instruction1_Adult Lady.mp3"
import Pg8_1_1_AdultLady from "../assets/unit1/Pg8_1.1_Adult Lady.mp3"
import Pg8_1_2_AdultLady from "../assets/unit1/Pg8_1.2_Adult Lady.mp3"
import Pg8_1_3_AdultLady from "../assets/unit1/Pg8_1.3_Adult Lady.mp3"
import Pg8_1_4_AdultLady from "../assets/unit1/Pg8_1.4_Adult Lady.mp3"
import deer from "../assets/deer_page_8.png"
import duck from "../assets/duck_page_8.png"
import taxi from "../assets/taxi_page_8.png"
import tiger from "../assets/tiger_page_8.png"
import ValidationAlert from './Popup/ValidationAlert';
import page_8_ex1 from "../assets/page-8_ex1.png"
import { ImOffice } from 'react-icons/im';
const Page8 = () => {
    const [activePopup, setActivePopup] = useState(null);
    const audioRef = useRef(null);

    const words = [
        { word: "tiger", missing: "t" },
        { word: "taxi", missing: "t" },
        { word: "duck", missing: "d" },
        { word: "deer", missing: "d" },

    ]
    const [inputs, setInputs] = useState(Array(words.length).fill(""));
    const [feedback, setFeedback] = useState("");
    const sentences = [
        { word: "tiger", missing: "t", sound: Pg8_1_1_AdultLady, src: tiger, num: "1" },
        { word: "taxi", missing: "t", sound: Pg8_1_2_AdultLady, src: taxi, num: "2" },
        { word: "duck", missing: "d", sound: Pg8_1_3_AdultLady, src: duck, num: "3" },
        { word: "deer", missing: "d", sound: Pg8_1_4_AdultLady, src: deer, num: "4" },
    ];
    const [answers, setAnswers] = useState(Array(sentences.length).fill(""));
    const playSound = (soundPath) => {
        audioRef.current.src = soundPath;
        audioRef.current.play();
    };
    useEffect(() => {
        if (activePopup !== null && audioRef.current) {
            audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
        }
    }, [activePopup])

    const handleInputChange = (value, index) => {
        const updated = [...answers];
        updated[index] = value.toLowerCase();
        setAnswers(updated);
    };

    const handleCheckAnswers = () => {
        if (answers.includes("")) {
            ValidationAlert.info();
            return;
        }

        const isCorrect = answers.every((answer, i) => answer === sentences[i].num);



        // مثال:
        if (isCorrect) {
            ValidationAlert.success();
        } else {
            ValidationAlert.error();
        }
    };
    return (
        <div className='page_8-background' >
            <img src={page_8} />
            <span className='headset-icon-CD-page8 shadow-md hover:scale-110 transition' onClick={() => setActivePopup(1)}>
                <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
            </span>
            <Popup
                isOpen={activePopup === 1}
                onClose={() => setActivePopup(null)}
                children={
                    <>
                        <audio controls>
                            <source src={CD6_Pg8_Instruction1_AdultLady} type="audio/mp3" />
                        </audio>
                    </>
                }

            />
            <span className='click-icon-page8-1 shadow-md hover:scale-110 transition'>
                <PiCursorClickBold size={12} color='rgb(255, 255, 255)' onClick={() => setActivePopup(2)} />
            </span>
            <Popup
                isOpen={activePopup === 2}
                onClose={() => setActivePopup(null)}
                children={
                    <>

                        <>
                            <header className='header-title-page8'>
                                <span className='ex-A'>A</span><span className='ex-a-1'>1</span> Listen and write the missing letters. Number the pictures.
                            </header>
                            <div className='div-input' style={{ display: "flex", justifyContent: "space-evenly" }}>
                                {words.map((word, index) => {


                                    return <>
                                        <div style={{ display: "flex", alignItems: "flex-end" }} >
                                            <input
                                                type="text"
                                                maxLength="1"
                                                className='char-input'
                                                value={inputs[index]}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                style={{
                                                    width: "30px",
                                                    textAlign: "center",
                                                    fontSize: "24px",
                                                    marginRight: "5px"
                                                }}
                                            />{word.word.slice(1)}
                                        </div>

                                    </>
                                })}
                            </div>
                            <div className='exercise-image-div' style={{ display: "flex" }}>
                                <img
                                    src={deer}
                                    className="exercise-image"
                                    onClick={() => playSound(Pg8_1_1_AdultLady)}
                                /><img
                                    src={duck}
                                    className="exercise-image"
                                    onClick={() => playSound(Pg8_1_2_AdultLady)}
                                /><img
                                    src={tiger}
                                    className="exercise-image"
                                    onClick={() => playSound(Pg8_1_3_AdultLady)}
                                /><img
                                    src={taxi}
                                    className="exercise-image"
                                    onClick={() => playSound(Pg8_1_4_AdultLady)}
                                />

                            </div>
                            <div className="exercise-container">
                                {sentences.map((item, index) => (
                                    <div key={index} className="exercise-item">
                                        <input
                                            type="text"
                                            maxLength="1"
                                            className="missing-input"
                                            value={answers[index]}
                                            onChange={(e) => handleInputChange(e.target.value, index)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* زر الفحص */}

                            <div class="validation-buttons">
                                <button class="retry-btn swal-retry" onClick={() => { setAnswers(Array(sentences.length).fill("")) }}>Start Again</button>
                                <button class="play-btn swal-continue">Continue</button>
                                <button class="check-btn swal-check" onClick={handleCheckAnswers}>Check the Answer</button>

                            </div>

                        </>
                    </>
                }

            />
            <span className='click-icon-page8-2 shadow-md hover:scale-110 transition'>
                <PiCursorClickBold size={12} color='rgb(255, 255, 255)' />
            </span>
            <span className='click-icon-page8-3 shadow-md hover:scale-110 transition'>
                <PiCursorClickBold size={12} color='rgb(255, 255, 255)' />
            </span>
        </div>
    )
}

export default Page8

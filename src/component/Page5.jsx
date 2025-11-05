import React, { useState, useRef, useEffect } from 'react'
import page_5 from "../assets/page_5.png"
import page5_CD2 from "../assets/unit1/CD2.Pg5_Intro1_Adult Lady.mp3"
import page5_CD3 from "../assets/unit1/CD3.Pg5_Instruction1_Adult Lady.mp3"
import Popup from './Popup/Popup'
import Pg5_1_1_Stella from "../assets/unit1/Pg5_1.1_Stella.mp3"
import Pg5_1_2_Lolo from "../assets/unit1/Pg5_1.2_Lolo.mp3"
import Pg5_1_1_Bebo from "../assets/unit1/Pg5_1.1_Bebo.mp3"
import Pg5_2_1_Adult from "../assets/unit1/Pg5_2.1_Adult Lady.mp3"
import Pg5_2_2_Adult from "../assets/unit1/Pg5_2.2_Adult Lady.mp3"
import Pg5_2_3_Adult from "../assets/unit1/Pg5_2.3_Adult Lady.mp3"
import Pg5_2_4_Adult from "../assets/unit1/Pg5_2.4_Adult Lady.mp3"
import Pg5_Instruction2_Adult from "../assets/unit1/Pg5_Instruction2_Adult Lady.mp3"
import page_5_1 from "../assets/page_5-1.svg"
import page_5_2 from "../assets/page_5-2.png"
import page_5_3 from "../assets/page_5-3.jpg"
import { PiCursorClickBold } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";

const Page5 = () => {
  const [activePopup, setActivePopup] = useState(null);
  const activeData = [
    { page: "1", title: "Meet My Cat", sound: page5_CD2, imgSrc: page_5_2 },
    { page: "2", title: "Lesiten, Read and repeat", sound: page5_CD3, imgSrc: page_5_1 },
    { page: "3", title: "Lestine and read along", sound: Pg5_Instruction2_Adult, imgSrc: page_5_3 }
  ]

  const audioRef = useRef(null);
  const speaking = [
    { text: "Hello, How are you?", sound: Pg5_1_1_Bebo },
    { text: "Fine, Thank you", sound: Pg5_1_2_Lolo },
  ]
  const sentences = [
    { text: "t", sound: Pg5_2_1_Adult },
    { text: "table", sound: Pg5_2_2_Adult },
    { text: "taxi", sound: Pg5_2_3_Adult },
    { text: "tiger", sound: Pg5_2_4_Adult },
  ];
  const playSound = (soundPath) => {
    audioRef.current.src = soundPath;
    audioRef.current.play();
  };
  useEffect(() => {
    if (activePopup !== null && audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, [activePopup]);
  return (
    <div className='page_5-background' >
      <img src={page_5} />
      <span className='headset-icon-CD-page5 shadow-md hover:scale-110 transition' id='CD-1-page5' onClick={() => setActivePopup(1)}>
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 1}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <audio controls>
              <source src={activeData[0].sound} type="audio/mp3" />
            </audio>
          </>
        }
      />
      <span className='headset-icon-CD-page5 shadow-md hover:scale-110 transition' id='CD-2-page5' onClick={() => setActivePopup(2)}>
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <Popup
        isOpen={activePopup === 2}
        onClose={() => setActivePopup(null)}
        children={
          <>
           
            <img src={activeData[1].imgSrc} style={{ height: "auto" }}  />

            {speaking.map((item, index) => {
              return (
                <p
                  key={index}
                  className='speaking'
                  id={`text-${index}` }
                  onClick={() => playSound(item.sound)}
                  style={{ cursor: "pointer" }}
                >
                  {item.text}
                </p>
              );
            })}
            <audio ref={audioRef}
              autoPlay
              style={{ display: "none" }}>
              <source src={activeData[1].sound} type="audio/mp3" />
            </audio>


          </>
        }

      />
      <span className='click-icon-page5 shadow-md hover:scale-110 transition'>
        <PiCursorClickBold size={12} color='rgb(255, 255, 255)' onClick={() => setActivePopup(3)} />
      </span>
      <Popup
        isOpen={activePopup === 3}
        onClose={() => setActivePopup(null)}
        children={
          <>
            <img src={activeData[2].imgSrc} style={{ height: "auto", width: "600px" }} />

            {sentences.map((item, index) => {
              const firstLetter = item.text.charAt(0);  // أول حرف
              const restText = item.text.slice(1);      // باقي الجملة
              return (
                <p
                  key={index}
                  className='listen'
                  id={item.text}
                  onClick={() => playSound(item.sound)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="listenSpan">{firstLetter}</span>{restText}
                </p>
              );
            })}
            <audio ref={audioRef}
              autoPlay
              style={{ display: "none" }}>
              <source src={activeData[2].sound} type="audio/mp3" />
            </audio>


          </>
        }

      />

    </div>
  )
}

export default Page5

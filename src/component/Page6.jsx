import React, { useRef, useState} from 'react'
import page_6 from "../assets/page_6.png"
import CD4_Pg6_Grammar1_AdultLady from "../assets/unit1/CD4.Pg6_Grammar1_Adult Lady.mp3"
import Pg6_1_1_AdultLady from "../assets/unit1/Pg6_1.1_Adult Lady.mp3"
import Pg6_1_2_AdultLady from "../assets/unit1/Pg6_1.2_Adult Lady.mp3"
import Pg6_1_3_AdultLady from "../assets/unit1/Pg6_1.3_Adult Lady.mp3"
import Pg6_1_4_AdultLady from "../assets/unit1/Pg6_1.4_Adult Lady.mp3"
import Pg6_1_5_AdultLady from "../assets/unit1/Pg6_1.5_Adult Lady.mp3"
import Pg6_1_6_AdultLady from "../assets/unit1/Pg6_1.6_Adult Lady.mp3"
import Pg6_2_1_Stella from "../assets/unit1/Pg6_2.1_Stella.mp3"
import Pg6_2_2_ModifiedStella from "../assets/unit1/Pg6_2.2_Modified Stella.mp3"
import Pg6_3_1_Harley from "../assets/unit1/Pg6_3.1_Harley.mp3"
import Pg6_3_2_ModifiedHarley from "../assets/unit1/Pg6_3.2_Modified Harley.mp3"
import Popup from './Popup/Popup'
// import Pg6_1_4_AdultLady from "../assets"
import { FaHeadphones } from "react-icons/fa";
const Page6 = () => {
    const audioRef = useRef(null);
    const [activePopup, setActivePopup] = useState(null);
    const handleImageClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

        console.log("X%:", xPercent.toFixed(2), "Y%:", yPercent.toFixed(2));

        checkAreaAndPlaySound(xPercent, yPercent);
    };
    const clickableAreas = [
        { x1: 9.41, y1: 12.00, x2: 37.43, y2: 14.00, sound: Pg6_1_1_AdultLady },
        { x1: 62.25, y1: 12.00, x2: 75.14, y2: 14.00, sound: Pg6_1_2_AdultLady },
        { x1: 10.00, y1: 16.00, x2: 22.00, y2: 18.00, sound: Pg6_1_3_AdultLady },
        { x1: 62.00, y1: 16.00, x2: 77.00, y2: 18.00, sound: Pg6_1_4_AdultLady },
        { x1: 9.00, y1: 19.00, x2: 26.00, y2: 23.00, sound: Pg6_1_5_AdultLady },
        { x1: 62.00, y1: 19.00, x2: 79.17, y2: 23.00, sound: Pg6_1_6_AdultLady },
        { x1: 33.00, y1: 29.18, x2: 50.00, y2: 32.00, sound: Pg6_2_1_Stella },
        { x1: 62.25, y1: 33.00, x2: 69.02, y2: 35.00, sound: Pg6_2_2_ModifiedStella },
        { x1: 8.50, y1: 63.50, x2: 23.50, y2: 66.00, sound: Pg6_3_1_Harley },
        { x1: 48.00, y1: 64.00, x2: 66.00, y2: 67.00, sound: Pg6_3_2_ModifiedHarley },
    ];

    const checkAreaAndPlaySound = (x, y) => {
        const area = clickableAreas.find(
            a => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
        );

        console.log("Matched Area:", area);

        if (area) playSound(area.sound);
    };
    const playSound = (soundPath) => {
        console.log(soundPath);
        if (audioRef.current) {
            audioRef.current.src = soundPath;
            audioRef.current.play();
        }
    };


    return (
        <div className='page_6-background' >
            <img src={page_6} onClick={handleImageClick} />
            <span className='headset-icon-CD-page6 shadow-md hover:scale-110 transition' onClick={() => setActivePopup(1)}>
                <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
            </span>
            <Popup
                isOpen={activePopup === 1}
                onClose={() => setActivePopup(null)}
                children={
                    <>
                        <audio controls>
                            <source src={CD4_Pg6_Grammar1_AdultLady} type="audio/mp3" />
                        </audio>
                    </>
                }
            />
            <audio ref={audioRef} style={{ display: "none" }} />
        </div>
    )
}

export default Page6

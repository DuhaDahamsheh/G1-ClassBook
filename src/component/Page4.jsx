import React, { useState, useRef } from 'react'
import page4 from "../assets/page_4.png"
import { FaHeadphones } from "react-icons/fa";
import Popup from './Popup/Popup';
import soundFile from "../assets/unit1/CD1.Pg4.U1_Intro_Adult Lady.mp3"


const Page4 = () => {
    const [open, setOpen] = useState(false);
    const activityData = {
        title: "Good Morning, World",
        audioSrc: "/assets/unit1/CD1.Pg4.U1_Intro_Adult Lady.mp3",
        imageSrc: "dddd"
    };

   
    return (
        <>
            <div className='page_4-background' >
                <img src={page4} />
                <span className='headset-icon-CD-page4 shadow-md hover:scale-110 transition'>
                    <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" onClick={() => setOpen(true)} />

                </span>
                <Popup
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    children={
                        <>
                            <header>{activityData.title}</header>
                            <audio controls>
                                <source src={soundFile} type="audio/mp3" />
                            </audio>
                            
                            
                        </>
                    }

                />
                <span id='num-1-page4' className='number-icon shadow-md hover:scale-110 transition'>
                    1
                </span>
                <span id='num-5-page4' className='number-icon shadow-md hover:scale-110 transition'>
                    5
                </span>
                <span id='num-4-page4' className='number-icon shadow-md hover:scale-110 transition'>
                    4
                </span>

            </div>

        </>
    )
}

export default Page4

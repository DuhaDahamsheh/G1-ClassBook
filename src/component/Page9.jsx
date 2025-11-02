import React from 'react'
import page_9 from "../assets/page_9.png"
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
const Page9 = () => {
    return (
        <div className='page_9-background' >
            <img src={page_9} />
            <span className='headset-icon-CD-page9 shadow-md hover:scale-110 transition'>
                <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
            </span>
            <span className='click-icon-page9-1 shadow-md hover:scale-110 transition'>
                <PiCursorClickBold size={12} color='rgb(255, 255, 255)' />
            </span>
            <span className='click-icon-page9-2 shadow-md hover:scale-110 transition'>
                <PiCursorClickBold size={12} color='rgb(255, 255, 255)' />
            </span>
        </div>
    )
}

export default Page9

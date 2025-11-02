import React from 'react'
import page_8 from "../assets/page_8.png"
import { FaHeadphones } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";

const Page8 = () => {
    return (
        <div className='page_8-background' >
            <img src={page_8} />
            <span className='headset-icon-CD-page8 shadow-md hover:scale-110 transition'>
                <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
            </span>
            <span className='click-icon-page8-1 shadow-md hover:scale-110 transition'>
                <PiCursorClickBold size={12} color='rgb(255, 255, 255)' />
            </span>
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

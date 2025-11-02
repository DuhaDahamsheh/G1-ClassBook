import React from 'react'
import page_6 from "../assets/page_6.png"
import { FaHeadphones } from "react-icons/fa";
const Page6 = () => {
    return (
        <div className='page_6-background' >
            <img src={page_6} />
            <span className='headset-icon-CD-page6 shadow-md hover:scale-110 transition'>
                <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
            </span>
        </div>
    )
}

export default Page6

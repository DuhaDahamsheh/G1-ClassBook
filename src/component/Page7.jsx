import React from 'react'
import page_7 from "../assets/page_7.png"
import { FaHeadphones } from "react-icons/fa";
const Page7 = () => {
  return (
    <div className='page_7-background' >
       <img src={page_7}/>
    <span className='headset-icon-CD-page7 shadow-md hover:scale-110 transition'>
                    <FaHeadphones size={12} color="rgba(255, 255, 255, 1)"  />
                </span>
    </div>
  )
}

export default Page7

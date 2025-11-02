import React from 'react'
import page_5 from "../assets/page_5.png"
import { FaHeadphones } from "react-icons/fa";
const Page5 = () => {
  return (
    <div className='page_5-background' >
      <img src={page_5} />
      <span className='headset-icon-CD-page5 shadow-md hover:scale-110 transition' id='CD-1-page5'>
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <span className='headset-icon-CD-page5 shadow-md hover:scale-110 transition' id='CD-2-page5'>
        <FaHeadphones size={12} color="rgba(255, 255, 255, 1)" />
      </span>
      <span id='num-2-page5' className='number-icon shadow-md hover:scale-110 transition'>
        2
      </span>
      <span id='num-3-page5' className='number-icon shadow-md hover:scale-110 transition'>
        3
      </span>

    </div>
  )
}

export default Page5

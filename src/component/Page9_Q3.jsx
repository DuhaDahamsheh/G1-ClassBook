import React, { useState, useEffect, useRef } from "react";
import sound1 from "../assets/unit1/CD7.Pg9_Song_Adult Lady.mp3";
import song from "../assets/unit1/Pg9_Song_Adult Lady.mp3";
const Page9_Q3 = () => {
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} autoPlay style={{ display: "none" }}>
        <source src={sound1} type="audio/mp3" />
      </audio>

      <audio style={{ alignSelf: "center" }} controls>
        <source src={song} type="audio/mp3" />
      </audio>
    </>
  );
};

export default Page9_Q3;

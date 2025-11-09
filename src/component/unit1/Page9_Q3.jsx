import React, { useState, useEffect, useRef } from "react";
import sound1 from "../../assets/unit1/sounds/CD7.Pg9_Song_Adult Lady.mp3";
import song from "../../assets/unit1/sounds/pg9-song-all.mp3";
const Page9_Q3 = () => {
  const audioRef = useRef(null);
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play(); // تشغيل الصوت عند فتح البوب أب
  //   }
  // }, []);

  return (
    <>
      <audio style={{ alignSelf: "center" }} controls>
        <source src={song} type="audio/mp3" />
      </audio>
    </>
  );
};

export default Page9_Q3;

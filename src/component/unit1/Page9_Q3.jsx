import React from "react";
import sound1 from "../../assets/unit1/sounds/CD7.Pg9_Song_Adult Lady.mp3";
import song from "../../assets/unit1/sounds/pg9-song-all.mp3";
import AudioWithCaption from "../AudioWithCaption";
const Page9_Q3 = () => {
  const captionsExample = [
    { start: 0, end: 1, text: "Hello!" },
    { start: 1, end: 2.2, text: "My name is Tom." },
    { start: 2.2, end: 4, text: "I like apples." },
  ];
  return (
    <>
      <AudioWithCaption src={song} captions={captionsExample} />
    </>
  );
};

export default Page9_Q3;

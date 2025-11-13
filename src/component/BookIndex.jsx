import React from "react";

const BookIndex = ({ goToUnit }) => {
  const units = [
    { title: "Unit 1", startIndex: 4 },   // أول صفحة من Unit 1 (Page2)
    { title: "Unit 2", startIndex: 10 },  // أول صفحة من Unit 2
    { title: "Unit 3", startIndex: 22 },
    { title: "Unit 4", startIndex: 28 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-6">
      <h1 className="text-4xl font-bold text-[#2c5287] mb-8">📘 Book Index</h1>
      <div className="flex flex-col gap-4">
        {units.map((unit, idx) => (
          <button
            key={idx}
            onClick={() => goToUnit(unit.startIndex)}
            className="bg-[#2c5287] hover:bg-[#426ca7f2] text-white py-3 px-10 rounded-2xl text-xl font-semibold shadow-md hover:scale-105 transition"
          >
            {unit.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookIndex;

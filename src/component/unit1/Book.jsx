import { useState, useEffect } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";

const pages = [
  <Page1 />,
  <Page2 />,
  <Page3 />,
  <Page4 />,
  <Page5 />,
  <Page6 />,
  <Page7 />,
  <Page8 />,
  <Page9 />,
];

export default function Book() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    if (isMobile) {
      if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
    } else {
      if (pageIndex === 0) setPageIndex(1);
      else if (pageIndex < pages.length - 2) setPageIndex(pageIndex + 2);
    }
  };

  const prevPage = () => {
    if (isMobile) {
      if (pageIndex > 0) setPageIndex(pageIndex - 1);
    } else {
      if (pageIndex === 1) setPageIndex(0);
      else if (pageIndex > 1) setPageIndex(pageIndex - 2);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative">
      {/* 📱 إذا الشاشة صغيرة → صفحة واحدة دائماً */}
      {isMobile ? (
        <>
          <button
            onClick={prevPage}
            className="absolute left-4 w-10 h-10 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition"
          >
            <IoMdArrowBack size={25} />
          </button>

          <div className="bg-white w-[90%] h-[85vh] rounded-2xl shadow-2xl border p-3 text-center">
            {pages[pageIndex]}
          </div>

          <button
            onClick={nextPage}
            className="absolute right-4 w-10 h-10 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
          >
            <GrLinkNext size={25} />
          </button>
        </>
      ) : /* 💻 إذا الشاشة كبيرة → نظام صفحتين */
      pageIndex === 0 ? (
        <>
          <div className="bg-white sm:w-[60%] h-[60vh] sm:h-[90vh] p-6 rounded-2xl shadow-2xl border flex items-center justify-center overflow-hidden">
            {pages[0]}
          </div>
          <button
            onClick={nextPage}
            className="absolute right-8 w-14 h-14 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
          >
            <GrLinkNext size={25} />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={prevPage}
            className="absolute left-8 w-14 h-14 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
          >
            <IoMdArrowBack size={30} />
          </button>

          <div className="bg-white sm:w-[85%] h-[85vh] rounded-2xl shadow-2xl border grid grid-cols-2 overflow-hidden">
            <div className="border-r ">{pages[pageIndex]}</div>
            <div className="border-l ">{pages[pageIndex + 1]}</div>
          </div>

          <button
            onClick={nextPage}
            className="absolute right-8 w-14 h-14 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
          >
            <GrLinkNext size={25} />
          </button>
        </>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { FaHome } from "react-icons/fa";


//===================== unit 1 pages
import Page1 from "./unit1/Page1";
import Page2 from "./unit1/Page2";
import Page3 from "./unit1/Page3";
import Page4 from "./unit1/Page4";
import Page5 from "./unit1/Page5";
import Page6 from "./unit1/Page6";
import Page7 from "./unit1/Page7";
import Page8 from "./unit1/Page8";
import Page9 from "./unit1/Page9";

//==================== unit 2 pages
import Unit2_Page1 from "./unit2/Unit2_Page1";
import Unit2_Page2 from "./unit2/Unit2_Page2";
import Unit2_Page3 from "./unit2/Unit2_Page3";
import Unit2_Page4 from "./unit2/Unit2_Page4";
import Unit2_Page5 from "./unit2/Unit2_Page5";
import Unit2_Page6 from "./unit2/Unit2_Page6";
import Unit2_Page7 from "./unit2/Unit2_Page7";
import Unit2_Page8 from "./unit2/Unit2_Page8";
import Unit2_Page9 from "./unit2/Unit2_Page9";
import Unit2_Page10 from "./unit2/Unit2_Page10";
import Unit2_Page11 from "./unit2/Unit2_Page11";
import Unit2_Page12 from "./unit2/Unit2_Page12";

// ==================== unit 3 pages
import Unit3_Page1 from "./unit3/Unit3_Page1";
import Unit3_Page2 from "./unit3/Unit3_Page2";
import Unit3_Page3 from "./unit3/Unit3_Page3";
import Unit3_Page4 from "./unit3/Unit3_Page4";
import Unit3_Page5 from "./unit3/Unit3_Page5";
import Unit3_Page6 from "./unit3/Unit3_Page6";
//==================== unit 4 pages
import Unit4_Page1 from "./unit4/Unit4_Page1";
import Unit4_Page2 from "./unit4/Unit4_Page2";
import Unit4_Page3 from "./unit4/Unit4_Page3";
import Unit4_Page4 from "./unit4/Unit4_Page4";
import Unit4_Page5 from "./unit4/Unit4_Page5";
import Unit4_Page6 from "./unit4/Unit4_Page6";

export default function Book() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ دالة الذهاب للفهرس
  const goToIndex = () => setPageIndex(1);
  // ✅ دالة التنقل من الفهرس إلى أول صفحة من الوحدة
  const goToUnit = (unitStartIndex) => {
    const evenIndex =
      unitStartIndex % 2 === 0 ? unitStartIndex : unitStartIndex - 1;
    setPageIndex(evenIndex);
  };
const pages = [
  <Page1 />, // الغلاف
  <Page2 goToUnit={goToUnit} />,
  <Page3  goToUnit={goToUnit}/>,
  <Page4 />,
  <Page5 />,
  <Page6 />,
  <Page7 />,
  <Page8 />,
  <Page9 />,
  <Unit2_Page1 />,
  <Unit2_Page2 />,
  <Unit2_Page3 />,
  <Unit2_Page4 />,
  <Unit2_Page5 />,
  <Unit2_Page6 />,
  <Unit2_Page7 />,
  <Unit2_Page8 />,
  <Unit2_Page9 />,
  <Unit2_Page10 />,
  <Unit2_Page11 />,
  <Unit2_Page12 />,
  <Unit3_Page1 />,
  <Unit3_Page2 />,
  <Unit3_Page3 />,
  <Unit3_Page4 />,
  <Unit3_Page5 />,
  <Unit3_Page6 />,
  <Unit4_Page1 />,
  <Unit4_Page2 />,
  <Unit4_Page3 />,
  <Unit4_Page4 />,
  <Unit4_Page5 />,
  <Unit4_Page6 />,
];

 const nextPage = () => {
  if (isMobile) {
    if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
  } else {
    if (pageIndex === 0) setPageIndex(1); // الغلاف → فهرس (صفحتين)
    else if (pageIndex < pages.length - 2) setPageIndex(pageIndex + 2);
  }
};

const prevPage = () => {
  if (isMobile) {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  } else {
    if (pageIndex === 1) setPageIndex(0); // رجوع من الفهرس → الغلاف
    else if (pageIndex > 1) setPageIndex(pageIndex - 2);
  }
};

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative">
      {/* 📖 زر العودة للفهرس - ثابت بكل الصفحات */}
    {pageIndex !== 1 && pageIndex !== 2 && (
  <button
    onClick={goToIndex}
    title="Go to Index"
    className="fixed top-6 right-6 z-[10000] bg-[#2c5287] hover:bg-[#426ca7f2] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
  >
    <FaHome />
  </button>
)}
      {/* 📱 شاشة الموبايل */}
      {isMobile ? (
        <>
          <button
            onClick={prevPage}
            className="absolute left-4 w-10 h-10 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition"
          >
            <IoMdArrowBack size={25} />
          </button>

          <div className="bg-white w-[90%] h-[97vh] rounded-2xl shadow-2xl border p-3 text-center overflow-auto">
            {pages[pageIndex]}
          </div>

          <button
            onClick={nextPage}
            className="absolute right-4 w-10 h-10 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
          >
            <GrLinkNext size={25} />
          </button>
        </>
      ) : (
        <>
          {/* 💻 شاشة اللابتوب / الديسكتوب */}
        {pageIndex === 0 ? (
  // ✅ الغلاف صفحة واحدة فقط
  <>
    <div className="bg-white sm:w-[40%] h-[95vh] rounded-2xl shadow-2xl border flex items-center justify-center overflow-hidden">
      {pages[0]}
    </div>

    <button
      onClick={nextPage}
      className="absolute right-10 w-14 h-14 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
    >
      <GrLinkNext size={25} />
    </button>
  </>
) : (
  // ✅ الفهرس + باقي الصفحات → صفحتين
  <>
    <button
      onClick={prevPage}
      className="absolute left-10 w-14 h-14 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
    >
      <IoMdArrowBack size={30} />
    </button>

    <div className="bg-white sm:w-[75%] h-[95vh] rounded-2xl shadow-2xl border grid grid-cols-2 overflow-hidden">
      <div className="border-r">{pages[pageIndex]}</div>
      <div className="border-l">{pages[pageIndex + 1]}</div>
    </div>

    <button
      onClick={nextPage}
      className="absolute right-10 w-14 h-14 rounded-full bg-[#2c5287] text-white flex items-center justify-center shadow-md hover:bg-[#426ca7f2] hover:scale-110 transition z-[9999]"
    >
      <GrLinkNext size={25} />
    </button>
  </>
)}

        </>
      )}
    </div>
  );
}

import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
export default function Book({ pages }) {
    const [pageIndex, setPageIndex] = useState(0);

    const nextPage = () => {
        if (pageIndex === 0) {
            setPageIndex(1);
        } else if (pageIndex < pages.length - 2) {
            setPageIndex(pageIndex + 2);
        }
    };

    const prevPage = () => {
        if (pageIndex === 1) {
            setPageIndex(0);
        } else if (pageIndex > 1) {
            setPageIndex(pageIndex - 2);
        }
    };

    return (
        <div className="w-full min-h-screen  flex items-center justify-center relative ">

            {/* إذا الصفحة الأولى → صفحة واحدة */}
            {pageIndex === 0 ? (
                <>
                    <div className="bg-white sm:w-[60%] h-[60vh] sm:h-[90vh] p-4 sm:p-6 rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center text-center overflow-hidden">
                        {pages[0]}
                    </div>
                    <button
                        onClick={nextPage}
                        className="absolute right-4 sm:right-8 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#5247DD] text-white text-2xl sm:text-3xl flex items-center justify-center shadow-md hover:scale-110 transition"
                    >
                      <GrLinkNext size={25} />
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={prevPage}
                        className="absolute left-4 sm:left-8 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#5247DD] text-white text-2xl sm:text-3xl flex items-center justify-center shadow-md hover:scale-110 transition"
                    >
                        <IoMdArrowBack size={30}/>
                    </button>
                    <div className="bg-white sm:w-[85%] h-[75vh] sm:h-[85vh] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden grid grid-cols-1 sm:grid-cols-2 overflow-hidden">

                        {/* الصفحة الأولى في الوضع الثنائي */}
                        <div className="border-b sm:border-b-0 sm:border-r border-gray-300 overflow-auto text-center sm:text-left overflow-hidden">
                            {pages[pageIndex]}
                        </div>

                        {/* الصفحة الثانية */}
                        <div className="border-t sm:border-t-0 sm:border-l border-gray-300 overflow-auto text-center sm:text-left overflow-hidden">
                            {pages[pageIndex + 1]}
                        </div>

                    </div>
                    <button
                        onClick={nextPage}
                        className="absolute right-4 sm:right-8 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#5247DD] text-white text-2xl sm:text-3xl flex items-center justify-center shadow-md hover:scale-110 transition"
                    >
                       <GrLinkNext size={25} />

                    </button>
                </>
            )}

            {/* زر التقدم */}

        </div>
    );
}

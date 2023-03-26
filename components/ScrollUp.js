import React from "react";
import ArrowUpSVG from "./svg/ArrowUpSVG";

const ScrollUp = ({ scrolled }) => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            {scrolled ? <div className="fixed bottom-6 right-6 tmv-shadow rounded-xl bg-gradient flex justify-center items-center z-50">
                <button onClick={handleScrollTop} className="bg-primary w-[50px] h-[50px] rounded-full flex justify-center items-center">
                    <ArrowUpSVG />
                </button>
            </div> : ''}
        </>
    );
};

export default ScrollUp;
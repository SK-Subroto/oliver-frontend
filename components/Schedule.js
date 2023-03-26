import React, { useEffect, useRef, useState } from 'react';
// image 
import schedule_bg from '../public/images/banner4.jpg'
// css 
import '../styles/components/schedule.css'

const Schedule = () => {
    const [head, setHead] = useState(null)
    // const head = useRef(null)
    useEffect(() => {
        setHead(document.querySelector("#parallax"))
        // head.current = document.querySelector("#parallax")
        window.onscroll = function () {
            let scroll_pos = window.scrollY;
            // console.log(scroll_pos);
            scroll_pos = scroll_pos * -1 * 0.5;
            head.style.backgroundPosition = "0px " + scroll_pos + "px";
        }
    }, [head])
    return (
        <div id='parallax' className='relative schedule_banner h-[100px]' style={{
            backgroundImage: `url(${schedule_bg.src})`,
        }}>
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-center'>
                <div className='container'>
                    <h2 className='text-3xl text-white font-bold'>SCHEDULE / SCOREBOARD</h2>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
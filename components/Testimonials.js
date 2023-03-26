import React, { useRef } from 'react';
import "../styles/components/testimonial.css"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import coach_1 from "../public/images/coach-1.jpg"
import coach_2 from "../public/images/coach-2.jpg"

import Slider from "react-slick";
import ArrowLeftSVG from './svg/ArrowLeftSVG';
import ArrowRightSVG from './svg/ArrowRightSVG';

// svg


const Testimonials = () => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 5000,
        cssEase: "ease-in"
    };

    const testimnials = [
        {
            photo: coach_1.src,
            name: 'David Miller',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore magnam esse corporis assumenda minus explicabo, blanditiis vitae culpa excepturi quo animi, eius asperiores officia. Ad obcaecati animi culpa officia.'
        },
        {
            photo: coach_2.src,
            name: 'David Warner',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore magnam esse corporis assumenda minus explicabo, blanditiis vitae culpa excepturi quo animi, eius asperiores officia. Ad obcaecati animi culpa officia.'
        }
    ]
    return (
        <div className='container'>
            <h1 className='text-4xl text-primaryText font-bold text-center py-8'>TESTIMONIALS</h1>
            <div className='testimonial_bg container rounded-lg flex justify-center items-center'>
                <button className="bg-primary w-[50px] h-[50px] rounded-full flex justify-center items-center" onClick={previous}>
                    <ArrowLeftSVG />
                </button>
                <div className='max-w-lg mx-auto py-6'>
                    <Slider ref={sliderRef}  {...settings}>
                        {
                            testimnials.map(testimnial => (
                                <div key={testimnial.name}>
                                    <img src={testimnial.photo} className='w-[108px] h-[108px] mx-auto rounded-full border-[6px] border-white' alt="" />
                                    <p className='text-white font-bold text-lg text-center my-4'>{testimnial.name}</p>
                                    <p className='text-gray-300 text-center'>{testimnial.description}</p>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <button className="bg-primary w-[50px] h-[50px] rounded-full flex justify-center items-center" onClick={next}>
                    <ArrowRightSVG />
                </button>

            </div>
        </div>
    );
};

export default Testimonials;
import React from 'react';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// image import 
import p1 from "../public/images/bindle-square-red-transparent.png"
import p2 from "../public/images/colwiz_logo_256.png"
import p3 from "../public/images/Cue7e_7q.png"
import p4 from "../public/images/bbfc-logo-col.png"
import p5 from "../public/images/colwiz_logo_256.png"
import p6 from "../public/images/bindle-square-red-transparent.png"
import p7 from "../public/images/Cue7e_7q.png"
import p8 from "../public/images/bbfc-logo-col.png"

const Partners = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const partners = [p1.src, p2.src, p3.src, p4.src, p5.src, p6.src, p7.src, p8.src]
    return (
        <div className='container'>
            <h1 className='text-4xl text-primaryText font-bold text-center py-8'>OUR PARTNERS</h1>
            <Slider  {...settings}>
                {
                    partners.map(partner => (
                        <div key={partner}>
                            <img src={partner} className='w-[120px] h-[120px] p-2' alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Partners;
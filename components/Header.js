import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '../public/images/oliver/Flash Stats- Oliver-03.jpg'

const Header = ({ scrolled }) => {

    // console.log('scrolled:', scrolled);

    return (
        <div className={`h-[66px]  z-30 duration-300 ${scrolled ? 'bg-[#ebfbfc] sticky top-0 oliver_shadow' : 'bg-[#fef1ed] shadow-md'}`}>
            <div className='h-full px-4 flex justify-between items-center '>
                <div>
                    <img src={logo.src} className="h-12 w-12 rounded-lg" alt="" />
                </div>
                <div className='text-primaryText flex items-center space-x-3'>
                    <div className='py-3.5 px-5'><Link href="/">Home</Link></div>
                    <div className='py-3.5 px-5'><Link href="/scoreboard">Scoreboard</Link></div>
                    <div className='py-3.5 px-5'><Link href="#">Schedule</Link></div>
                    <div className='py-3.5 px-5'><Link href="#">Player Profile</Link></div>
                    <div className='py-3.5 px-5'><Link href="#">Minor Gamelogs</Link></div>
                    <div className='py-3.5 px-5'><Link href="#">Team</Link></div>
                    <div className='py-3.5 px-5'><Link href="standing">Team Standing</Link></div>
                    <div className='py-3.5 px-5'><Link href="#">Searchs</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
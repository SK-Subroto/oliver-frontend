import React from 'react';
import EmailSVG from './svg/EmailSVG';
import FacebookSVG from './svg/FacebookSVG';
import InstagramSVG from './svg/InstagramSVG';
import PhoneSVG from './svg/PhoneSVG';
import TwitterSVG from './svg/TwitterSVG';

const Footer = () => {
    return (
        <div className='bg-[#ecfdf5] py-12'>
            <div className='container grid grid-cols-12 gap-12'>
                <div className='col-span-3'>
                    <p className='text-primaryText font-bold mb-4 text-lg'>Contact Us</p>
                    <div className='flex items-center space-x-2'>
                        <PhoneSVG />
                        <p className='text-secondaryText'>01700000000</p>
                    </div>
                    <div className='flex items-center space-x-2 mt-2'>
                        <EmailSVG />
                        <p className='text-secondaryText'>test@test.com</p>
                    </div>
                </div>
                <div className='col-span-6'>
                    <p className='text-primaryText font-bold mb-4 text-lg'>MLB.com Legal Notices</p>
                    <p className='text-primaryText'>The following are trademarks or service marks of Major League Baseball entities and may be used only with permission of Major League Baseball Properties, Inc. or the relevant Major League Baseball entity: Major League, Major League Baseball, MLB, the silhouetted batter logo, World Series, National League, American League, Division Series, League Championship Series, All-Star Game, and the names, nicknames, logos, uniform designs, color combinations, and slogans designating the Major League Baseball clubs and entities, and their respective mascots, events and exhibitions.</p>
                </div>
                <div className='col-span-3'>
                    <p className='text-primaryText font-bold mb-4 text-lg'>Follow Us</p>
                    <div className='flex items-center space-x-2'>
                        <div className='w-14 h-14 rounded-full bg-[#c0fcde] flex justify-center items-center'>
                            <FacebookSVG />
                        </div>
                        <div className='w-14 h-14 rounded-full bg-[#c0fcde] flex justify-center items-center'>
                            <TwitterSVG />
                        </div>
                        <div className='w-14 h-14 rounded-full bg-[#c0fcde] flex justify-center items-center'>
                            <InstagramSVG />
                        </div>
                    </div>
                    <p className='text-primaryText font-bold my-4 text-lg'>Quick Links</p>
                    <div className='flex space-x-4 text-primaryText'>
                        <p>Home</p>
                        <p>Blog</p>
                        <p>Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React, { useState } from 'react';
import classNames from 'classnames';
import PlusSVG from './svg/PlusSVG';
import MinusSVG from './svg/MinusSVG';


const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div
                className="flex justify-between items-center bg-[#e3fdf0] p-4 cursor-pointer rounded-lg h-[72px] oliver_shadow"
                onClick={toggleAccordion}
            >
                <h2 className="font-medium text-secondaryText">{title}</h2>
                <span
                    className={classNames(
                        'transition-transform duration-300',
                        isOpen ? 'transform rotate-180' : ''
                    )}
                >
                    {isOpen ? (
                        <MinusSVG />
                    ) : (
                        <PlusSVG />
                    )}
                </span>
            </div>
            <div
                className={classNames(
                    'p-4 transition-all duration-300',
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                {content}
            </div>
        </div>
    );
};

export default Accordion;

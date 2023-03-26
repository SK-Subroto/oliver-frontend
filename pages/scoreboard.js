import Layout from '@/components/Layouts/Layout';
import Schedule from '@/components/Schedule';
import React from 'react';

// image
import team_1 from '../public/images/ebl_h31_LG.png'
import team_2 from '../public/images/ebl_h31_OB.png'

const scoreboard = () => {
    return (
        <div>
            <section className='mt-12'>
                <Schedule />
            </section>

            <section className='mt-20'>
                <div className='max-w-2xl mx-auto h-[90px] text-primaryText text-sm oliver_shadow flex justify-between items-center rounded-xl px-4'>
                    <button className='px-6 py-2 rounded-full  bg-[#acd7eb]'>
                        PREV
                    </button>
                    <p className='text-base'>26/03/2023</p>
                    <button className='px-6 py-2 rounded-full  bg-[#acd7eb]'>
                        NEXT
                    </button>
                </div>

                {/* scrore table */}
                <div className='container grid grid-cols-2 gap-8 mt-12'>
                    {/* table-1 */}
                    <div className="bg-white relative overflow-x-auto p-2 rounded-lg oliver_shadow">
                        {/* header */}
                        <div className='bg-[#dbe4ff] text-primaryText grid grid-cols-6 items-center rounded py-6 px-2'>
                            <div className='col-span-2 flex justify-between items-center'>
                                <img src={team_1.src} alt="" />
                                <p>DOOSAN</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='bg-[#fde1ff] w-fit mx-auto px-2'>13:00</p>
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <p>LG</p>
                                <img src={team_2.src} alt="" />
                            </div>
                        </div>
                        <div className='px-2 py-4'>
                            <p className='text-secondaryText text-sm'>JAMSIL 13:00</p>
                        </div>
                        <table className="table-auto w-full text-sm text-primaryText text-left border-collapse border-y">
                            <thead>
                                <tr className='bg-[#e9fafc]'>
                                    <th scope="col" className='p-1.5'>Team</th>
                                    <th scope="col" className='p-1.5'>1</th>
                                    <th scope="col" className='p-1.5'>2</th>
                                    <th scope="col" className='p-1.5'>3</th>
                                    <th scope="col" className='p-1.5'>4</th>
                                    <th scope="col" className='p-1.5'>5</th>
                                    <th scope="col" className='p-1.5'>6</th>
                                    <th scope="col" className='p-1.5'>7</th>
                                    <th scope="col" className='p-1.5'>8</th>
                                    <th scope="col" className='p-1.5'>9</th>
                                    <th scope="col" className='p-1.5'>10</th>
                                    <th scope="col" className='p-1.5'>11</th>
                                    <th scope="col" className='p-1.5'>12</th>
                                    <th scope="col" className='p-1.5'>13</th>
                                    <th scope="col" className='p-1.5'>14</th>
                                    <th scope="col" className='p-1.5'>15</th>
                                    <th scope="col" className='p-1.5'>R</th>
                                    <th scope="col" className='p-1.5'>H</th>
                                    <th scope="col" className='p-1.5'>E</th>
                                    <th scope="col" className='p-1.5'>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">DOOSAN</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">LG</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* table-2 */}
                    <div className="bg-white relative overflow-x-auto p-2 rounded-lg oliver_shadow">
                        {/* header */}
                        <div className='bg-[#dbe4ff] text-primaryText grid grid-cols-6 items-center rounded py-6 px-2'>
                            <div className='col-span-2 flex justify-between items-center'>
                                <img src={team_1.src} alt="" />
                                <p>DOOSAN</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='bg-[#fde1ff] w-fit mx-auto px-2'>13:00</p>
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <p>LG</p>
                                <img src={team_2.src} alt="" />
                            </div>
                        </div>
                        <div className='px-2 py-4'>
                            <p className='text-secondaryText text-sm'>JAMSIL 13:00</p>
                        </div>
                        <table className="table-auto w-full text-sm text-primaryText text-left border-collapse border-y">
                            <thead>
                                <tr className='bg-[#e9fafc]'>
                                    <th scope="col" className='p-1.5'>Team</th>
                                    <th scope="col" className='p-1.5'>1</th>
                                    <th scope="col" className='p-1.5'>2</th>
                                    <th scope="col" className='p-1.5'>3</th>
                                    <th scope="col" className='p-1.5'>4</th>
                                    <th scope="col" className='p-1.5'>5</th>
                                    <th scope="col" className='p-1.5'>6</th>
                                    <th scope="col" className='p-1.5'>7</th>
                                    <th scope="col" className='p-1.5'>8</th>
                                    <th scope="col" className='p-1.5'>9</th>
                                    <th scope="col" className='p-1.5'>10</th>
                                    <th scope="col" className='p-1.5'>11</th>
                                    <th scope="col" className='p-1.5'>12</th>
                                    <th scope="col" className='p-1.5'>13</th>
                                    <th scope="col" className='p-1.5'>14</th>
                                    <th scope="col" className='p-1.5'>15</th>
                                    <th scope="col" className='p-1.5'>R</th>
                                    <th scope="col" className='p-1.5'>H</th>
                                    <th scope="col" className='p-1.5'>E</th>
                                    <th scope="col" className='p-1.5'>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">DOOSAN</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">LG</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* table-3 */}
                    <div className="bg-white relative overflow-x-auto p-2 rounded-lg oliver_shadow">
                        {/* header */}
                        <div className='bg-[#dbe4ff] text-primaryText grid grid-cols-6 items-center rounded py-6 px-2'>
                            <div className='col-span-2 flex justify-between items-center'>
                                <img src={team_1.src} alt="" />
                                <p>DOOSAN</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='bg-[#fde1ff] w-fit mx-auto px-2'>13:00</p>
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <p>LG</p>
                                <img src={team_2.src} alt="" />
                            </div>
                        </div>
                        <div className='px-2 py-4'>
                            <p className='text-secondaryText text-sm'>JAMSIL 13:00</p>
                        </div>
                        <table className="table-auto w-full text-sm text-primaryText text-left border-collapse border-y">
                            <thead>
                                <tr className='bg-[#e9fafc]'>
                                    <th scope="col" className='p-1.5'>Team</th>
                                    <th scope="col" className='p-1.5'>1</th>
                                    <th scope="col" className='p-1.5'>2</th>
                                    <th scope="col" className='p-1.5'>3</th>
                                    <th scope="col" className='p-1.5'>4</th>
                                    <th scope="col" className='p-1.5'>5</th>
                                    <th scope="col" className='p-1.5'>6</th>
                                    <th scope="col" className='p-1.5'>7</th>
                                    <th scope="col" className='p-1.5'>8</th>
                                    <th scope="col" className='p-1.5'>9</th>
                                    <th scope="col" className='p-1.5'>10</th>
                                    <th scope="col" className='p-1.5'>11</th>
                                    <th scope="col" className='p-1.5'>12</th>
                                    <th scope="col" className='p-1.5'>13</th>
                                    <th scope="col" className='p-1.5'>14</th>
                                    <th scope="col" className='p-1.5'>15</th>
                                    <th scope="col" className='p-1.5'>R</th>
                                    <th scope="col" className='p-1.5'>H</th>
                                    <th scope="col" className='p-1.5'>E</th>
                                    <th scope="col" className='p-1.5'>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">DOOSAN</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">LG</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* table-4 */}
                    <div className="bg-white relative overflow-x-auto p-2 rounded-lg oliver_shadow">
                        {/* header */}
                        <div className='bg-[#dbe4ff] text-primaryText grid grid-cols-6 items-center rounded py-6 px-2'>
                            <div className='col-span-2 flex justify-between items-center'>
                                <img src={team_1.src} alt="" />
                                <p>DOOSAN</p>
                            </div>
                            <div className='col-span-2'>
                                <p className='bg-[#fde1ff] w-fit mx-auto px-2'>13:00</p>
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <p>LG</p>
                                <img src={team_2.src} alt="" />
                            </div>
                        </div>
                        <div className='px-2 py-4'>
                            <p className='text-secondaryText text-sm'>JAMSIL 13:00</p>
                        </div>
                        <table className="table-auto w-full text-sm text-primaryText text-left border-collapse border-y">
                            <thead>
                                <tr className='bg-[#e9fafc]'>
                                    <th scope="col" className='p-1.5'>Team</th>
                                    <th scope="col" className='p-1.5'>1</th>
                                    <th scope="col" className='p-1.5'>2</th>
                                    <th scope="col" className='p-1.5'>3</th>
                                    <th scope="col" className='p-1.5'>4</th>
                                    <th scope="col" className='p-1.5'>5</th>
                                    <th scope="col" className='p-1.5'>6</th>
                                    <th scope="col" className='p-1.5'>7</th>
                                    <th scope="col" className='p-1.5'>8</th>
                                    <th scope="col" className='p-1.5'>9</th>
                                    <th scope="col" className='p-1.5'>10</th>
                                    <th scope="col" className='p-1.5'>11</th>
                                    <th scope="col" className='p-1.5'>12</th>
                                    <th scope="col" className='p-1.5'>13</th>
                                    <th scope="col" className='p-1.5'>14</th>
                                    <th scope="col" className='p-1.5'>15</th>
                                    <th scope="col" className='p-1.5'>R</th>
                                    <th scope="col" className='p-1.5'>H</th>
                                    <th scope="col" className='p-1.5'>E</th>
                                    <th scope="col" className='p-1.5'>B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">DOOSAN</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                                <tr>
                                    <td className="bg-[#e9fafc] border-y font-medium p-1.5">LG</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                    <td className='border-y p-1.5'>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default scoreboard;

scoreboard.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
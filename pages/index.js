import Ads1 from "@/components/Ads1";
import Header from "@/components/Header";
import React from "react";
// css 
import "../styles/pages/index.css";
// image 
import baseball_banner from "../public/images/baseball_banner.jpg"
import signup_bg from "../public/images/signup.jpg";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import Layout from "@/components/Layouts/Layout";

// auto complete search 
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const home = () => {
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  return (
    <div>

      <section className=" max-w-5xl mx-auto px-4 mt-28 text-center h-[88px] bg-white text-secondaryText flex items-center rounded-lg oliver_shadow">
        <p className="w-full">
          Oliver ProjectionsTM is the premier site for all fans that want the best statistical support and analysis for their fantasy baseball and gaming decisions.
        </p>
      </section>

      <section className="container mt-12">
        <h1 className="text-4xl text-primaryText font-bold text-center">EVERY MLB TEAM</h1>

        <div className="mt-12 p-8 rounded-lg oliver_shadow">
          <div>
            <p className="text-secondaryText font-semibold mb-2">Search Player</p>
            <div className="flex justify-center space-x-4">
              {/* <input className="w-full p-4 rounded-full" style={{ boxShadow: '0px 1px 3px 2px rgba(181, 181, 181, 0.52)' }} type="text" placeholder="Search Player" /> */}
              <div className="w-full">
                <ReactSearchAutocomplete
                  placeholder="Search Player"
                  items={items}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  showClear
                  formatResult={formatResult}
                  styling={{
                    height: "50px",
                  }}
                />
              </div>
              <button className="w-[374px] h-[50px] bg-primary text-white text-center rounded-full flex items-center justify-center search-btn">
                Search
              </button>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-secondaryText font-semibold mb-2">2020 MLB STANDINGS</p>
            <Accordion
              title="2020 MLB Standings"
              content={
                <div>
                  <div className="text-secondaryText flex items-center space-x-6 mt-4">
                    <p>MLB Summary</p>
                    <p>Scores</p>
                    <p>Schedule</p>
                    <p>Leaders</p>
                    <p>Standings</p>
                    <p>Transactions</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-blue-500">Al Summary: </p>
                    <div className="text-secondaryText flex items-center space-x-6 mt-4">
                      <p className="text-primaryText">Leaders:</p>
                      <p>Batting</p>
                      <p>Pitching</p>
                      <p>Standings</p>
                      <p>Attendance</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-blue-500">Nl Summary: </p>
                    <div className="text-secondaryText flex items-center space-x-6 mt-4">
                      <p className="text-primaryText">Leaders:</p>
                      <p>Batting</p>
                      <p>Pitching</p>
                      <p>Standings</p>
                      <p>Attendance</p>
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4">
            <div>
              <p className="text-secondaryText font-semibold mb-4">AL</p>
              {/* ======table-left-1======== */}
              <div className="bg-white relative overflow-x-auto p-4 rounded-lg mb-8 oliver_shadow">
                <table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 border border-gray-300">Al</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">W</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">L</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">GB</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">SRS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-6 py-3 border border-gray-300">EAST</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ======table-left-2======== */}
              <div className="bg-white relative overflow-x-auto p-4 rounded-lg mb-8 oliver_shadow">
                <table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 border border-gray-300">Al</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">W</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">L</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">GB</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">SRS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-6 py-3 border border-gray-300">EAST</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ======table-left-3======== */}
              <div className="bg-white relative overflow-x-auto p-4 rounded-lg mb-8 oliver_shadow">
                <table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 border border-gray-300">Al</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">W</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">L</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">GB</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">SRS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-6 py-3 border border-gray-300">EAST</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </div>

            <div>
              <p className="text-secondaryText font-semibold mb-4">NL</p>
              {/* ======table-left-1======== */}
              <div className="bg-white relative overflow-x-auto p-4 rounded-lg mb-8 oliver_shadow">
                <table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 border border-gray-300">Nl</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">W</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">L</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">GB</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">SRS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-6 py-3 border border-gray-300">EAST</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ======table-left-2======== */}
              <div className="bg-white relative overflow-x-auto p-4 rounded-lg mb-8 oliver_shadow">
                <table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 border border-gray-300">Nl</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">W</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">L</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">GB</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">SRS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-6 py-3 border border-gray-300">EAST</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* ======table-left-3======== */}
              <div className="bg-white relative overflow-x-auto p-4 rounded-lg mb-8 oliver_shadow">
                <table className="table-auto w-full text-sm text-left text-gray-500 border-collapse border">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 border border-gray-300">Nl</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">W</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">L</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">GB</th>
                      <th scope="col" className="px-6 py-3 border border-gray-300">SRS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={5} className="px-6 py-3 border border-gray-300">EAST</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 border border-gray-300">y-TRB</td>
                      <td className="px-6 py-3 border border-gray-300">40</td>
                      <td className="px-6 py-3 border border-gray-300">20</td>
                      <td className="px-6 py-3 border border-gray-300">--</td>
                      <td className="px-6 py-3 border border-gray-300">0.9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-secondaryText">
            <p>y - clinched division</p>
            <p> w - clinched wildcard</p>
          </div>
        </div>
      </section>

      <section className="container my-12">
        <img className="rounded-lg" src={baseball_banner.src} alt="" />
      </section>

      <section className="relative signup_banner h-[245px]" style={{
        backgroundImage: `url(${signup_bg.src})`,
      }}>
        <div className="absolute top-0 w-full h-full flex justify-center items-center text-white z-10">
          <div>
            <h1 className="text-4xl font-bold">JOIN WITH US</h1>
            <div className="flex justify-center mt-2">
              <button className="rounded-full border-2 border-primary px-6 py-4">SIGN UP NOW</button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
      </section>

    </div>
  )
}

export default home;

home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
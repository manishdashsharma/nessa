import React from 'react'
import Navbar from '../../components/header/Navbar'
import { GiElectric } from "react-icons/gi";
import { countries, lightingSolution } from './homepageConfig';
import { Link } from 'react-router-dom';
import { ProductRange } from './homepageinnersections/ProductRange';
import { RiLightbulbFlashLine } from "react-icons/ri";
import RecognizeEx from './homepageinnersections/RecognizeEx';
import InsitesSwiper from './homepageinnersections/InsitesSwiper';
import PartnersReviewsSwiper from '../../components/partnerreviews/PartnersReviewsSwiper';




const Homepage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      {/* Hero Content  */}
      <div className="w-full h-[70vh] relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="./images/homepageimages/herobg.png"
            alt="hero background"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4">
          <div className="max-w-4xl mx-auto text-center ">
            {/* Top Label */}
            <div className="w-full flex items-center justify-center">
              <div className="flex w-fit  px-[30px] max-md:px-[10px] py-[5px] items-center justify-center gap-2  border border-[var(--primary-bg-color)] rounded-full">
                <img
                  className=""
                  src="./images/homepageimages/thunder.svg"
                  alt=""
                />
                <span className="text-lg font-medium">
                  Crafted with precision, powered by sustainability
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 mt-8">
              Innovative{" "}
              <span className="text-blue-500">Lighting Solution</span>
              <br />
              for every Industry
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl  mb-8 max-w-2xl mx-auto">
              With 16+ years of expertise and a global presence in 20+
              countries, Nessa delivers sustainable, high-performance lighting
              tailored to your needs.
            </p>

            {/* discover Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Discover All Solutions
            </button>
          </div>
        </div>
      </div>

      {/* images section  */}
      <div className="w-full h-fit px-[5vw]">
        <img
          className="w-full h-full object-cover"
          src="./images/homepageimages/image1.png"
          alt=""
        />
      </div>
      <div className="w-full h-fit translate-y-[-5vw] flex gap-10 justify-center">
        <img
          className="w-fit h-[20vw]  drop-shadow-2xl"
          src="./images/homepageimages/colorcircle.png"
          alt=""
        />
        <img
          className=" h-[20vw]  drop-shadow-2xl"
          src="./images/homepageimages/lightintensity.png"
          alt=""
        />
      </div>

      {/* trusted partners */}
      <div>
        <h1 className="text-center mb-2 text-lg">Our Trusted Partners</h1>
        <div className="w-full h-[7vw] py-[0px] flex items-center justify-evenly gap-5 bg-[#005ab322]">
          <img
            className="h-[4vw] "
            src="./images/homepageimages/adanilogo.png"
            alt=""
          />
          <img
            className="h-[4vw] "
            src="./images/homepageimages/essarlogo.png"
            alt=""
          />
          <img
            className="h-[4vw] "
            src="./images/homepageimages/l&tlogo.png"
            alt=""
          />
          <img
            className="h-[4vw] "
            src="./images/homepageimages/jindallogo.png"
            alt=""
          />
          <img
            className="h-[4vw] "
            src="./images/homepageimages/torrentlogo.png"
            alt=""
          />
          <img
            className="h-[4vw] "
            src="./images/homepageimages/nirmalogo.png"
            alt=""
          />
        </div>
      </div>

      {/* Lighting Solutions According to Your Needs & Conditions  data is dynamic in homepageConfig.js  */}
      <div className="w-full py-16 max-md:pb-2 px-[5vw] bg-white text-center">
        <h2 className="text-4xl font-semibold ">
          Lighting <span className="text-blue-500">Solutions</span> According to{" "}
          <br />
          Your Needs & Conditions
        </h2>
        <div className="w-full flex justify-center mb-4">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>

        <p className="text-lg max-w-3xl mx-auto mb-8">
          At Nessa, we don’t just offer off-the-shelf products; we design and
          manufacture lighting solutions that adapt precisely to your unique
          requirements. From extreme environments in mining and refineries to
          specific needs in airports and rural settings, our expert team
          customizes each solution to solve the exact challenges you face.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
          <div className="absolute w-[200px] h-[200px] bg-[#e8f3fd] left-[-14vw] top-[-5vw]   rounded-full z-[1]"></div>
          <img
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg z-[2]"
            src={lightingSolution[0].image}
            alt=""
          />
          <div className="text-left md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">
              {lightingSolution[0].heading}
            </h3>
            <p className="mb-4">{lightingSolution[0].para}</p>

            <Link
              to={lightingSolution[0].discoverlink || ""}
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Discover Products
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-16  max-md:pb-2 px-[5vw] bg-white text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            className="w-full md:w-1/2 h-auto  hidden max-md:block rounded-lg shadow-lg"
            src={lightingSolution[1].image}
            alt=""
          />
          <div className="text-left md:w-1/2 ">
            <h3 className="text-2xl font-bold mb-2">
              {lightingSolution[1].heading}
            </h3>
            <p className="mb-4 ">{lightingSolution[1].para}</p>

            <Link
              to={lightingSolution[1].discoverlink || ""}
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Discover Products
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 h-auto max-md:hidden rounded-lg shadow-lg"
            src={lightingSolution[1].image}
            alt=""
          />
        </div>
      </div>
      <div className="w-full py-16  max-md:pb-2 px-[5vw] bg-white text-center  relative ">
        <div className="absolute w-[200px] h-[200px] bg-[#e9fdfb] right-[-7vw] top-[0vw]   rounded-full z-[1]"></div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-[2] relative">
          <img
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg z-[2]"
            src={lightingSolution[2].image}
            alt="Stadium Lighting"
          />
          <div className="text-left md:w-1/2 ">
            <h3 className="text-2xl font-bold mb-2">
              {lightingSolution[2].heading}
            </h3>
            <p className="mb-4">{lightingSolution[2].para}</p>

            <Link
              to={lightingSolution[2].discoverlink}
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Discover Products
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-[5vw] bg-white text-center relative">
        <div className="absolute w-[200px] h-[200px] bg-[#e8f3fd] left-[-7vw] top-[-5vw]   rounded-full z-[1]"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-[2]">
          <img
            className="w-full md:w-1/2 hidden max-md:block h-auto rounded-lg shadow-lg"
            src={lightingSolution[3].image}
            alt=""
          />
          <div className="text-left md:w-1/2 ">
            <h3 className="text-2xl font-bold mb-2">
              {lightingSolution[3].heading}
            </h3>
            <p className="mb-4">{lightingSolution[3].para}</p>

            <Link
              to={lightingSolution[3].discoverlink}
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
            >
              Discover Products
            </Link>
          </div>
          <img
            className="w-full md:w-1/2 h-auto max-md:hidden rounded-lg shadow-lg"
            src={lightingSolution[3].image}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Discover All Solutions
        </button>
      </div>

      {/* product range  */}
      <ProductRange />

      {/* trusted by industries */}
      <div className="w-full h-fit px-[5vw] py-[5vw] flex flex-col items-center justify-center relative">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Trusted by
          <span className="text-blue-500"> Industries</span> Across <br /> the
          Globe{" "}
        </div>
        <div className="flex relative shrink-0 mt-9 h-2.5 bg-[var(--light-blue)] rounded-[50px] w-[51px]" />
        <div className="relative mt-7 text-xl px-[5vw] leading-8 text-center text-zinc-900 max-md:max-w-full">
          With a growing presence across 20+ countries, Nessa is internationally
          recognized for the reliability, integrity, and high standards of its
          products. From Africa and the Middle East to Europe, South Asia, and
          the USA, our lighting solutions serve a trusted customer base,
          expanding our reach every year and delivering excellence across major
          continents.
        </div>
        <div className="absolute w-[15vw] min-w-[80px] object-cover top-0 right-10 max-sm:right-0">
          {" "}
          <img src="./images/homepageimages/lamp.png" alt="" />
        </div>
      </div>
      <div className="flex max-md:block px-[5vw] text-lg relative">
        <div className="w-[60%] max-md:w-full h-[500px] max-md:h-fit ">
          <h1 className="text-center mb-8">Nationwide presence</h1>
          <div className="flex max-md:flex-col">
            <img
              className=" h-[350px] w-[60%] max-md:w-full object-contain"
              src="./images/homepageimages/indiaMap.png"
              alt=""
            />
            <div className="w-[40%]  flex  max-md:w-full max-md:mt-10 flex-col items-center justify-center ">
              <img
                className="w-[80px] h-[80px]"
                src="./images/homepageimages/india.png"
                alt=""
              />
              <div className="relative text-lg font-semibold  text-center text-black">
                Nessa in <br />
                <span className="text-blue-500"> 29 States</span> of india{" "}
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] max-md:w-full h-[500px] max-md:h-fit relative">
          <div
            className="h-full absolute left-0 w-[2px] max-md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #0074E0, transparent)",
            }}
          ></div>

          <h1 className="text-center mb-8 ">International presence</h1>
          <div className="grid grid-cols-4 gap-y-4 gap-x-0 ml-5 max-sm:ml-0">
            {countries.map((country, index) => (
              <div key={index} className="flex flex-col items-center ">
                <img
                  className="h-[50px] w-[50px]  "
                  src={country.flag}
                  alt=""
                />
                <h1 className="text-center">{country.country}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* why choose nessa  */}
      <div
        className="py-[50px] "
        style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
      >
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Why Choose
          <span className="text-blue-500"> Nessa</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
          Trusted by industries worldwide, Nessa delivers customized,
          high-performance lighting solutions for every need. Partner with Nessa
          for reliable, energy-efficient lighting that sets new standards in
          quality and sustainability.
        </div>
        <div>
          <div className="grid grid-cols-3 justify-items-center max-md:grid-cols-1 gap-4 px-[5vw] py-8">
            <div
              className="w-[22vw] pt-[20px] rounded-2xl shadow-md max-md:w-full"
              style={{
                background:
                  "linear-gradient(to right, #841D84, #3DC3BB, #FF8983)",
              }}
            >
              <div className="border-2 border-blue-500 bg-white w-full rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <RiLightbulbFlashLine className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  16+ Years of Expertise
                </h3>
                <p>
                  Lighting the way for over 16 years, trusted by industries
                  worldwide.
                </p>
              </div>
            </div>

            <div className="w-[22vw] pt-[20px] bg-blue-500 rounded-2xl shadow-md max-md:w-full">
              <div className=" w-full rounded-2xl p-6  bg-blue-500 text-white ">
                <div className="flex  items-center  mb-4">
                  <RiLightbulbFlashLine className="text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p>
                  Serving clients in 20+ countries across all major continents.
                </p>
              </div>
            </div>
            <div
              className="w-[22vw] pt-[20px] rounded-2xl shadow-md max-md:w-full"
              style={{
                background:
                  "linear-gradient(to right, #841D84, #3DC3BB, #FF8983)",
              }}
            >
              <div className="border-2 border-blue-500 bg-white w-full rounded-2xl p-6 shadow-md ">
                <div className="flex items-center mb-4">
                  <RiLightbulbFlashLine className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Inhouse Manufacturing
                </h3>
                <p>
                  Complete control from design to delivery for unmatched
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* inside nessa */}
      <div className="w-full h-fit px-[5vw] py-[5vw] flex flex-col items-center justify-center relative">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Inside
          <span className="text-blue-500"> Nessa:</span> Expertise <br /> in
          Every Step
        </div>
        <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        <div className="relative mt-7 text-xl px-[5vw] leading-8 text-center text-zinc-900 max-md:max-w-full">
          With complete in-house manufacturing, R&D, and stringent testing,
          Nessa guarantees top-tier quality and innovation in every lighting
          solution. From design to delivery, we control every step for unmatched
          reliability.
        </div>
        <div className="absolute w-[15vw] min-w-[80px]  object-cover top-0 left-10 max-sm:left-0">
          {" "}
          <img src="./images/homepageimages/lamp.png" alt="" />
        </div>
      </div>
      <div className="w-full h-fit px-[5vw] pb-[50px]">
        <img
          className="w-full h-fit object-cover"
          src="./images/homepageimages/Rectangle69.png"
          alt=""
        />
      </div>

      {/* Partners Reviews Swiper */}
      <PartnersReviewsSwiper/>

      {/* recognized excellence */}
      <RecognizeEx />

      {/* insights and resources */}
      <div
        className="py-[50px]  mt-[50px]"
        style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
      >
        <div className=" text-4xl py-[50px] font-semibold leading-snug text-center text-black z-[2] relative">
        Insights & 
          <span className="text-blue-500"> Resources</span> 
        </div>
        <InsitesSwiper/>
      </div>


    </div>
  );
}

export default Homepage
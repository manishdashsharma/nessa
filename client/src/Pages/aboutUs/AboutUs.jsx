import React from "react";
import Navbar from "../../components/header/Navbar";
import {
  aboutUsPara1,
  aboutUsPara2,
  investor,
  nessaEdgeItems,
  team,
  whoWeAre,
} from "./AboutUsConfig";
import { RiLightbulbFlashLine } from "react-icons/ri";
import ProductAndTestingSwiper from "./ProductAndTestingSwiper";
import CertificatesSwiper from "./CertificatesSwiper";
import PartnersReviewsSwiper from "../../components/partnerreviews/PartnersReviewsSwiper";

const AboutUs = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src="./images/solutionsImages/hero.png"
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold w-full text-center text-white ml-[5vw] relative z-[2]">
          About Us
        </h1>
      </div>

      <div className="w-full min-h-[300px] relative py-[50px] px-[5vw]">
        <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 left-[-7vw] top-[-3vw]   rounded-full z-[-1]"></div>

        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Lighting the Future: About Nessa <br />
          <span className="text-blue-500"> Illumination</span> Technologies
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
          Brightening lives with innovative, sustainable, and efficient lighting
          solutions.
        </div>
      </div>

      <div className="w-full h-fit px-[5vw] pb-[50px]">
        <img
          className="w-full h-fit object-cover"
          src="./images/homepageimages/Rectangle69.png"
          alt=""
        />
      </div>

      {/* about us para */}
      <div
        className=" w-full "
        style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
      >
        <div className="w-full min-h-[300px] relative py-[50px] px-[5vw]">
          <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
            About
            <span className="text-blue-500"> US</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
          </div>
          <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
            {aboutUsPara1}
          </div>
          <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
            {aboutUsPara2}
          </div>
        </div>
      </div>

      {/* our vision and Mission */}
      <div className="w-full text-xl flex max-md:flex-col min-h-[200px] relative p-[5vw]">
        <div className="w-1/2  max-md:w-full max-md:h-fit flex flex-col items-center gap-5 p-[30px] text-center ">
          <img
            className="h-[200px]"
            src="./images/aboutUs/ourVision.png"
            alt=""
          />
          <h1 className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
            Our
            <span className="text-blue-500"> Vision</span>
          </h1>
          <h1 className="px-[50px]">
            {" "}
            To become one of the best and most preferred lighting solution
            providers in domestic as well as international market.
          </h1>
        </div>

        <div
          className="min-h-[100px] w-[2px] max-md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0074E0, transparent)",
          }}
        ></div>

        <div className="w-1/2  max-md:w-full max-md:h-fit flex flex-col items-center gap-5 p-[30px] text-center ">
          <img
            className="h-[200px]"
            src="./images/aboutUs/ourMission.png"
            alt=""
          />
          <h1 className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
            Our
            <span className="text-blue-500"> Mission</span>
          </h1>
          <h1 className="px-[50px]">
            {" "}
            To work as a team innovatively and dedicatedly to create safe &
            reliable products and services.
          </h1>
        </div>
      </div>

      {/* why we are */}
      <div className="py-[5vw]  ">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Why we
          <span className="text-blue-500"> are</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className="relative mt-7 text-xl px-[10vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
          {whoWeAre.para}
        </div>

        <div className="grid grid-cols-3 justify-items-center max-md:grid-cols-1 gap-4 px-[5vw] py-8">
          {whoWeAre.items.map((item, index) => (
            <div
              key={index}
              className="w-[25vw] pt-[20px] rounded-2xl shadow-md max-md:w-full"
              style={{
                background:
                  index === 1
                    ? "#0074E0"
                    : "linear-gradient(to right, #841D84, #3DC3BB, #FF8983)",
              }}
            >
              <div
                className={`border-2  ${
                  index === 1
                    ? "bg-blue-500 border-white text-white "
                    : "bg-white border-blue-500 "
                } w-full h-full rounded-2xl p-6 shadow-md`}
              >
                <div className="flex items-center mb-4">
                  <RiLightbulbFlashLine
                    className={`text-4xl ${index !== 1 ? "text-blue-500" : ""}`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    index !== 1 ? "text-blue-500" : ""
                  }`}
                >
                  {item.tital}
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* the nessa edge */}
      <div
        className=" w-full py-[50px] "
        style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
      >
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Nessa
          <span className="text-blue-500"> Edge</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-[5vw] mt-[50px] gap-20 justify-items-center">
          {nessaEdgeItems.map((item, index) => (
            <div key={index} className=" flex flex-col items-center gap-5 ">
              <img className="w-[80px] h-[80px]" src={item.img} alt="" />
              <h1 className="text-xl text-center">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* our Team and Investor */}
      <div className="w-full py-[50px]">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Our Team
          <span className="text-blue-500"> &</span> Investor
        </div>
        <div className="w-full flex justify-center mb-5">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center px-[5vw]">
          {team.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  items-center text-center"
            >
              <img
                className="rounded-xl h-[300px]  w-[300px] object-contain border pt-[50px] bg-[#e7f2fd] border-orange-400 overflow-hidden "
                src={item.img}
                alt=""
              />
              <h1 className="font-semibold text-xl mt-5">{item.member}</h1>
              <h1 className="opacity-70 mt-1"> {item.position}</h1>
            </div>
          ))}
        </div>

        <div className="w-full px-[10vw] mt-[50px]  ">
          {investor.map((investor, i) => (
            <div className="w-[100%]  mb-[50px]  border border-orange-400 flex max-md:flex-col max-md:items-center rounded-xl  overflow-hidden">
              <div key={i} className="w-[30%] max-md:w-full ">
                <img
                  className="h-[300px] max-md:h-[300px] max-md:w-full object-contain"
                  src={investor.img}
                  alt=""
                />
              </div>
              <div className="w-[70%] max-md:w-full p-[30px] flex flex-col justify-center gap-5">
                <h1 className="font-semibold text-orange-400 text-4xl ">
                  Investor
                </h1>
                <h1 className="font-semibold  text-xl ">{investor.member}</h1>
                <h1 className="text-lg">{investor.detail}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* customer segment */}

      <div
        className=" w-full py-[50px] "
        style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
      >
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Customer
          <span className="text-blue-500"> Segment</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>

        <div className="px-[5vw] ">
          <img
            className="mt-[50px] "
            src="/images/aboutUs/customersegment.svg"
            alt=""
          />
        </div>
      </div>

      {/* product and testing */}
      <div className="w-full py-[50px]">
        <div className=" px-[5vw] text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Product
          <span className="text-blue-500"> & Testing</span> Facilities
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className=" ">
          <ProductAndTestingSwiper />
        </div>
      </div>
      {/*  certificates */}
      <div className="w-full py-[50px]">
        <div className=" px-[5vw] text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          <span className="text-blue-500"> Certification</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <CertificatesSwiper />
      </div>

      <div className="w-full px-[5vw] py-[100px] flex max-md:flex-col">
        <div className=" px-[5vw] text-5xl font-semibold leading-snug text-center text-black z-[2] relative">
          Quality <br />
          <span className="text-blue-500"> Policy</span>
        </div>
        <div
          className="min-h-[100px] w-[5px] max-md:hidden bg-blue-500 " 
        ></div>
        <div className=" px-[5vw] text-xl flex items-center justify-center text-black z-[2] relative">
         <h1> To be World Class supplier of <span className="text-blue-500"> LED Lights, Solar LED Lights and Drivers, </span> which meet the Customer’s expectations through Teamwork and continuous <span className="text-blue-500">Improvement and Innovation.</span> </h1>
          
        </div>
      </div>

      <PartnersReviewsSwiper/>
    </div>
  );
};

export default AboutUs;

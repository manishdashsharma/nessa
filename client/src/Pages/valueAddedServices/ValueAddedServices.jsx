import React from "react";
import Navbar from "../../components/header/Navbar";
import hero from "../../assets/images/allProductsimages/hero.png";
import {
  ourRulerUpliftmentsSolution,
  ourRulerUpliftmentsSolutionRightSection,
  ourValuePreposition,
} from "./ValueAddedServicesConfig";
import { RiLightbulbFlashLine } from "react-icons/ri";

export const ValueAddedServices = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-center ">
        <img
          className="w-full h-full object-cover absolute  "
          src={hero}
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white  relative z-[2]">
          Value Added Services
        </h1>
      </div>

      {/* our value preposition */}
      <div className="py-[5vw]  ">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          <span className="text-blue-500"> Our Value</span> Preposition
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>

        <div className="grid grid-cols-3 justify-items-center max-[900px]:grid-cols-2 max-md:grid-cols-1 gap-4 px-[5vw] py-8">
          {ourValuePreposition.items.map((item, index) => (
            <div
              key={index}
              className="w-[25vw] pt-[20px] rounded-2xl mt-[40px] shadow-md max-[900px]:w-[40vw] max-md:w-full"
              style={{
                background:
                  index === 1 || index === 4
                    ? "#0074E0"
                    : "linear-gradient(to right, #841D84, #3DC3BB, #FF8983)",
              }}
            >
              <div
                className={`border-2  ${
                  index === 1 || index === 4
                    ? "bg-blue-500 border-white text-white "
                    : "bg-white border-blue-500 "
                } w-full h-full rounded-2xl p-6 shadow-md`}
              >
                <div className="flex items-center mb-4">
                  <RiLightbulbFlashLine
                    className={`text-4xl ${
                      index !== 1 && index !== 4 ? "text-blue-500" : ""
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    index !== 1 && index !== 4 ? "text-blue-500" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {Our ruler upliftments solution} */}
      <div className=" ">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          <span className="text-blue-500"> Our Value</span> Preposition
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>

        <div className="flex max-lg:flex-col   px-[5vw]">
          
          <div className=" max-lg:w-full  grid grid-cols-2 max-md:grid-cols-1 gap-y-8 mt-[50px] w-[70%] ">
            {ourRulerUpliftmentsSolution.map((item, index) => (
              <div className="flex w-full justify-center items-center">
                <div className="relative h-[400px] flex justify-center items-center">
                  <img
                    className=" w-full h-full  object-cover"
                    src={item.poster}
                    alt=""
                  />
                  <h1 className="absolute bottom-0 rounded-md w-[95%] bg-white text-xl py-[10px] mb-[10px] flex items-center justify-center  z-[2]">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[30%] max-lg:w-full  mt-[50px] grid grid-cols-1 max-lg:grid-cols-4 max-md:grid-cols-2    ">
            {ourRulerUpliftmentsSolutionRightSection.map((item, index) => (
               <div className="w-full  h-[200px] flex flex-col items-center ">
                 <div className="w-[100px] h-[100px] rounded-full text-3xl font-semibold bg-orange-400  flex items-center justify-center">
                    {item.inCircleNumbers}
                 </div>
                 <div className="text-lg text-center">{item.title}</div>
               </div>      
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Navbar from "../../components/header/Navbar";
import { nessaCatalogs } from "./ResourcesConfig";
import InsightsResources from "./Insites";

export const Resources = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src="./images/solutionsImages/hero.png"
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">
          Resources
        </h1>
      </div>

        {/* download nessa catalogus */}
      <div className="w-full min-h-[300px] relative py-[50px] px-[5vw]">
        <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 left-[-7vw] top-[-3vw]   rounded-full z-[-1]"></div>

        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Download 
          <span className="text-blue-500"> NESSA CATALOGUE</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
          NESSA offers a complete product catalog in PDF file format. Our
          catalog includes product specifications, features, and applications.
        </div>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center mt-[50px] ">
        {nessaCatalogs.map((item , index)=>(
            <div key={index} className=" w-[20vw] max-md:w-[40vw] max-sm:w-[90%] max-sm:mb-10 h-[30vw] max-md:h-fit  flex flex-col items-center ">
            <img
              className="bg-gray-400 h-[80%] "
              src={item.img}
              alt=""
            />
  
            <div className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md text-white">
              {item.btntext}
            </div>
          </div>
        ))}
       
      </div> 

        <InsightsResources/>


    </div>
  );
};

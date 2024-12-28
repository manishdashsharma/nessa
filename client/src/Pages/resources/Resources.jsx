import React from "react";
import Navbar from "../../components/header/Navbar";
import { nessaCatalogs, nessaManual, productManual } from "./ResourcesConfig";
import { Link } from "react-router-dom";
import ResourcesInsites from "./ResourcesInsites";
import Media from "./Media";
import hero from "../../assets/images/allProductsimages/hero.png";

export const Resources = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src={hero}
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
        {nessaCatalogs.map((item, index) => (
          <div
            key={index}
            className=" w-[20vw] max-md:w-[40vw] max-sm:w-[90%] max-sm:mb-10 h-[30vw] max-md:h-fit  flex flex-col items-center "
          >
            <img className="bg-gray-400 h-[80%] " src={item.img} alt="" />

            <div className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md text-white">
              {item.btntext}
            </div>
          </div>
        ))}
      </div>

      {/* product manuals */}

      <div
        style={{
          background: "linear-gradient(to bottom, #f7faff, #deeefc)",
        }}
        className="py-[50px] "
      >
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Product
          <span className="text-blue-500"> MANUALS</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className="grid grid-cols-4 max-[1000px]:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center px-[5vw] mt-[50px] ">
          {productManual.map((item, index) => (
            <div
              key={index}
              className=" w-[20vw] max-md:w-[40vw] max-sm:w-[90%] max-sm:mb-10 min-h-[30vw] max-md:h-fit mb-[50px]  flex flex-col items-center  justify-between"
            >
              <img
                className="bg-gray-400 h-[300px] object-cover  "
                src={item.img}
                alt=""
              />

              <h1 className="text-xl font-semibold mt-4">{item.title}</h1>
              <p className="text-md text-zinc-900 mt-4 mb-4 text-center">
                {item.discription}
              </p>

              <Link className="bg-blue-500 w-[70%] text-center py-[10px] mt-[20px] rounded-md text-white">
                Download Now
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* nessa manual */}
      <div className="w-full  relative py-[50px] px-[5vw]">

        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          <span className="text-blue-500"> NESSA </span> MANUAL
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center   px-[5vw]">
        {nessaManual.map((item, index) => (
          <div
            key={index}
            className=" w-[20vw] max-md:w-[40vw] max-sm:w-[90%] mb-10 max-sm:mb-10 max-md:h-fit  flex flex-col items-center justify-between text-center "
          >
            <h1 className="text-xl font-semibold mt-4">{item.title}</h1>

            <Link className="bg-blue-500 w-[70%] text-center py-[10px] mt-[20px] rounded-md text-white">
              Download Now
            </Link>
          </div>
        ))}
      </div>


      {/* Insites & Resources */}
      <ResourcesInsites />

      {/* Media */} 
      <Media />
    </div>
  );
};

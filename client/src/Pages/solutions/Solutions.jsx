import React from "react";
import Navbar from "../../components/header/Navbar";
import { solutionsdata } from "./SolutionsConfig";
import { Link } from "react-router-dom";
import TrendingProductsSwipe from "../../components/trendingProducts/TrendingProductsSwiper";

const Solutions = () => {
   
  return (
    <div className="w-full overflow-hidden ">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src="./images/solutionsImages/hero.png"
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">
          Solutions
        </h1>
      </div>

      <div className="w-full min-h-[300px] relative py-[50px] px-[5vw]">
        <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 left-[-7vw] top-[-3vw]   rounded-full z-[-1]"></div>

        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Lighting Solutions
          <span className="text-blue-500"> According</span> to <br /> Your Needs
          & Conditions
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
          At Nessa, we don’t just offer off-the-shelf products; we design and
          manufacture lighting solutions that adapt precisely to your unique
          requirements. From extreme environments in mining and refineries to
          specific needs in airports and rural settings, our expert team
          customizes each solution to solve the exact challenges you face.
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1  gap-y-20  justify-items-center p-[5vw]">
        {solutionsdata.map((solution, index) => (
          <Link to={`/solutions/${solution.heading.toLowerCase()}`}  key={index} className="relative h-[350px] lg:w-[25vw] md:w-[35vw] w-full flex justify-center items-end">
            <img className="w-full h-full object-cover absolute" src={solution.poster} alt="" />
            <h1 className="rounded-md w-[95%] bg-white text-xl py-[10px] mb-[10px] flex items-center justify-center relative z-[2]">
              {solution.heading}
            </h1>
          </Link>
        ))}
      </div>


        <div className="w-full mt-[100px] flex max-md:flex-col items-center justify-center gap-20 px-[5vw]  ">
            <div className="w-1/2 max-md:w-full h-full">
             <img className="w-full h-[300px] object-cover" src="./images/solutionsImages/experties1.png" alt="" />
            </div>
            <div className="w-1/2 max-md:w-full h-full ">
                <h1 className="text-2xl font-semibold">Custom Lighting for Harsh Environments</h1>
                <br />
                <p className="text-xl">From the blazing heat of refineries to the damp, rugged conditions of mines, Nessa’s customized lighting solutions are built to perform. </p>
                <br />
                <p className="text-xl">Our products are designed with durability and efficiency in mind, ensuring reliable performance even in the harshest environments.</p>
            </div>
        </div>
      
        <div className="w-full mt-[100px] flex max-md:flex-col items-center justify-center gap-20 px-[5vw]  ">
           
            <div className="w-1/2 max-md:w-full h-full ">
                <h1 className="text-2xl font-semibold">Solutions Tailored to Your Needs</h1>
                <br />
                <p className="text-xl">Whether it’s optimizing brightness for airports or creating energy-efficient systems for highways, our expert team works closely with you to craft solutions tailored to your exact specifications.</p>
                <br />
                <p className="text-xl">With Nessa, you don’t just get products—you get precision-engineered solutions that solve your unique problems.</p>
            </div>
            <div className="w-1/2 max-md:w-full h-full">
             <img className="w-full h-[300px] object-cover" src="./images/solutionsImages/experties2.png" alt="" />
            </div>
        </div>


        <div className=" text-4xl mt-[50px] font-semibold leading-snug text-center text-black z-[2] relative">
         Trending
          <span className="text-blue-500"> Products</span> 
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
        
        <div  className="py-[20px] my-[20px]" style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}>

        <TrendingProductsSwipe/>
        </div>
      
    </div>
  );
};

export default Solutions;

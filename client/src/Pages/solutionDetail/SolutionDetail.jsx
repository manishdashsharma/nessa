import React from "react";
import Navbar from "../../components/header/Navbar";
import PartnersReviewsSwiper from "../../components/partnerreviews/PartnersReviewsSwiper";
import { Link, useParams } from "react-router-dom";
import { solutionsdata } from "../solutions/SolutionsConfig";
import { caseStudiesdata } from "./SolutionDetailConfig";

const SolutionDetail = () => {
  const { type } = useParams(); // Extract 'type' parameter from the URL

  const data = solutionsdata.find(
    (solution) => solution.heading.toLowerCase() === type.toLowerCase()
  ); // Find the object based on 'heading'


  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
        <img
          className="w-full h-full object-cover absolute "
          src={data.solutionDetail.heroposter} // dynamic poster
          alt=""
        />
        {/* <div className="w-full h-full absolute bg-black opacity-50"></div> */ } {/* dark background image*/}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">
          {/* dynamic heading */}
          {data.solutionDetail.heading}
        </h1>
      </div>

      {/* para for solution detail */}

      <div className="w-full h-fit flex gap-10 max-md:flex-col px-[5vw] py-[5vw] relative">
        <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 right-[-7vw] top-[-3vw]   rounded-full z-[-1]"></div>

        <div className="w-1/2 max-md:w-full">
          <div className=" text-4xl font-semibold leading-snug text-black z-[2] relative">
            {data.solutionDetail.paraHading}
          </div>
          <div className="w-full ">
            <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
          </div>
          <div className="relative mt-7 text-xl  mb-4 leading-8 text-zinc-900 max-md:max-w-full">
            {data.solutionDetail.paraText}
          </div>
        </div>

        <div className="w-1/2 max-md:w-full max-md:h-[300px] bg-gray-500">
          <img className="w-full  bg-gray-600" src="" alt="" />
        </div>
      </div>

      {/* related products */}

      <div className="">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Sub-Applications and <br />
          <span className="text-blue-500"> Related Products</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>

      <div className="w-full  flex items-center justify-center gap-10 mt-[50px]">
        {/* clients images path  */}
        {[
          "/images/homepageimages/partner1.png",
          "/images/homepageimages/partner2.png",
          "/images/homepageimages/partner3.png",
          "/images/homepageimages/partner2.png",
        ].map((image, index) => (
          <img
            key={index}
            className="w-[80px] h-[80px] bg-gray-400 rounded-full mb-4"
            src={image}
            alt=""
          />
        ))}
      </div>

      {data.solutionDetail.relatedProducts.map((item, index) => (
        <div
          key={index}
          className="w-full px-[5vw] mx-auto my-6 mt-[50px] font-sans text-lg text-gray-800 "
        >
          <img
            className="w-[50px] h-[50px] bg-gray-400 rounded-full mb-4"
            src=""
            alt=""
          />
          <div className="text-2xl font-bold text-blue-500">{item.title}</div>
          <div className="mt-4 text-lg">
            <strong>Application : </strong>
            {item.applications}
          </div>
          <div className="mt-6">
            <strong>Products:</strong>
            <div className="mt-2 space-y-4 ml-[40px]">
              {item.products.map((productitem, i) => (
                <div key={i}>
                  <strong> • {productitem.productName}</strong> :{productitem.discription}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
     

      {/* case studies */}
      <div className=" mt-[100px]">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Case
          <span className="text-blue-500"> Studies</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center mt-[50px] ">
      {caseStudiesdata.map((item , index)=>(
            <div key={index} className=" w-[20vw] max-md:w-[40vw] max-sm:w-[90%] max-sm:mb-10 h-[30vw] max-md:h-fit  flex flex-col items-center ">
            <img
              className="bg-gray-400 h-[80%] "
              src={item.img}
              alt=""
            />
  
            <Link   className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md text-white">
              Download
            </Link>
          </div>
        ))}
      </div>

      {/* our clients */}
      <div className=" mt-[100px]">
        <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
          Our
          <span className="text-blue-500"> Clients</span>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      </div>
      <div className="w-full  flex items-center justify-center gap-20 mt-[50px]">
        {/* clients images path  */}
        {[
          "/images/homepageimages/partner1.png",
          "/images/homepageimages/partner2.png",
          "/images/homepageimages/partner3.png",
          "/images/homepageimages/partner2.png",
          "/images/homepageimages/partner1.png",
        ].map((image, index) => (
          <img
            key={index}
            className="w-[100px] h-[100px] bg-gray-400 rounded-full mb-4"
            src={image}
            alt=""
          />
        ))}
      </div>

      {/* partners revies */}
      <PartnersReviewsSwiper />
    </div>
  );
};

export default SolutionDetail;

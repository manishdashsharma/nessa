import React from "react";
import { Link } from "react-router-dom";
import TrendingProductsSwipe from "../../../components/trendingProducts/TrendingProductsSwiper";

const categories = [
  {
    name: "AC LIGHTS",
    image:
      "/images/productRange/aclight.png",
  },
  {
    name: "SOLAR LIGHTS",
    image:
     "/images/productRange/solarlight.png",
  },
  {
    name: "ELECTRONICS",
    image:
     "/images/productRange/electronics.png",
  },
];

export function ProductRange() {
  const renderCategoryCard = ({ name, image }, index) => (
    <div
      key={index}
      className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
    >
      <div className="flex items-center relative flex-col grow justify-center px-5 py-10 text-lg font-semibold tracking-wide leading-relaxed text-center text-black min-h-[620px] max-md:px-5 max-md:py-10 max-md:mt-1 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={name}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-fit px-10 py-5 bg-white rounded-lg ">
          {name}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className=" relative flex-col items-center  py-14   mt-20 w-full h-fit max-md:mt-10 max-md:max-w-full"
      style={{ background: "linear-gradient(to bottom, #f7faff, #deeefc)" }}
    >
      <div className="relative text-4xl font-semibold leading-snug text-center text-black">
        Our <span className="text-blue-500">Product</span> Range
      </div>
      <div className="w-full flex justify-center">
          <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
        </div>
      <div className="relative mt-7 text-xl px-[5vw] leading-8 text-center text-zinc-900 max-md:max-w-full">
        At Nessa, we don't just offer off-the-shelf products; we design and
        manufacture lighting solutions that adapt precisely to your unique
        requirements.
      </div>
      <div className="relative self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {categories.map((category, index) =>
            renderCategoryCard(category, index)
          )}
        </div>
      </div>
    
       
       {/* trending products */}
      <div>
       <TrendingProductsSwipe/>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          to=""
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 mt-[50px] rounded-lg font-medium transition-colors"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

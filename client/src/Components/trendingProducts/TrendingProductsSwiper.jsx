import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { trendingProductData } from "./TrendingProductConfig";

export default function TrendingProductsSwipe() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          dynamicBullets:true,
          
          dynamicMainBullets:3,
          clickable: true,
        }}
        navigation={{
            clickable:true
        }}
        breakpoints={{
          550:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[40px]   "
      >
        {trendingProductData.map((product, index) => (
          <SwiperSlide key={index} className=" p-[20px] ">
            <div className="h-[400px] max-sm:flex max-sm:flex-col max-sm:items-center  mb-[40px]  p-[10px]  border-[2px] bg-white border-[#d6d0d0] ">
              <img
                className=" mb-[10px] h-[70%] object-cover"
                src={product.productImage}
                alt=""
              />
              <h1>{product.category}</h1>
              <h1 className="mt-[10px] text-xl">{product.productName}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

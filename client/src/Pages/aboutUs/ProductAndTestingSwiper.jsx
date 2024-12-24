import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination , Navigation } from 'swiper/modules';
import { productAndTesting } from './AboutUsConfig';

export default function ProductAndTestingSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
          dynamicBullets:true,
          dynamicMainBullets:3
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
         
        }}
        navigation={{
            clickable:true
        }}
        modules={[Pagination , Navigation]}
        className="mySwiper  mt-[50px]"
      >
        {
          productAndTesting.map((product, index) => (

            <SwiperSlide key={index} className='mb-[50px]  '>
              <div className='flex w-full justify-center items-center'>

                <div className='relative h-[350px] w-[300px] flex justify-center items-center'>
                  <img className=' w-full h-full  object-cover' src={product.img} alt="" />
                  <h1 className="absolute bottom-0 rounded-md w-[95%] bg-white text-xl py-[10px] mb-[10px] flex items-center justify-center  z-[2]">{product.title}</h1>
                </div>

              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  );
}

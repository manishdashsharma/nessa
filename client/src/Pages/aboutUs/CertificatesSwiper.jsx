import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination , Navigation } from 'swiper/modules';
import { certificate } from './AboutUsConfig';

export default function CertificatesSwiper() {
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
          1424: {
            slidesPerView: 4,
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
          certificate.map((img, index) => (

            <SwiperSlide key={index} className='mb-[50px]  '>
              <div className='flex w-full justify-center items-center'>

                <div className='relative h-[350px] w-[300px] flex justify-center items-center'>
                  <img className=' w-full h-full  object-contain' src={img} alt="" />
                </div>

              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </>
  );
}

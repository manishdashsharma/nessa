import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import styled from "styled-components";
import { Pagination, Autoplay } from "swiper/modules";

const RecoExSec1Wrapper = styled.div`
  .swiper {
    width: 100%;
    height: 500px;
      
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function RecoExSec1() {
  return (
    <RecoExSec1Wrapper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        watchSlidesProgress={true}
        observer={true}
        observeParents={true}
        className="mySwiper "
      >
        {[
          {
            image: "./images/homepageimages/news1.png",
            heading:
              "SEWA, bizmen use LEDs to lead veg vendors out of darkness!",
          },
          {
            image: "./images/homepageimages/news1.png",
            heading:
              "SEWA, bizmen use LEDs to lead veg vendors out of darkness!",
          },
          {
            image: "./images/homepageimages/news1.png",
            heading:
              "SEWA, bizmen use LEDs to lead veg vendors out of darkness!",
          },
          {
            image: "./images/homepageimages/news1.png",
            heading:
              "SEWA, bizmen use LEDs to lead veg vendors out of darkness!",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index} className="  bg-[var(--light-blue)] ">
            <div className=" flex flex-col items-center justify-center gap-4">
              <img
                className=" w-[80%] object-cover "
                src={slide.image}
                alt=""
              />
              <h1 className="w-[70%]">{slide.heading}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </RecoExSec1Wrapper>
  );
}

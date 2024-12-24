import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import styled from "styled-components";
import { Pagination, Autoplay } from "swiper/modules";

const RecoExSec2Wrapper = styled.div`
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

export default function RecoExSec2() {
  return (
    <RecoExSec2Wrapper>
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
        className="mySwiper"
      >
        {[
          {
            image: "./images/homepageimages/award1.png",
            heading: "Economic Times Young achiever Award 2018 by SIDBI",
          },
          {
            image: "./images/homepageimages/award1.png",
            heading: "Economic Times Young achiever Award 2018 by SIDBI",
          },
          {
            image: "./images/homepageimages/award1.png",
            heading: "Economic Times Young achiever Award 2018 by SIDBI",
          },
          {
            image: "./images/homepageimages/award1.png",
            heading: "Economic Times Young achiever Award 2018 by SIDBI",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div className=" flex flex-col items-center justify-center gap-4">
              <img
                className=" h-[300px] object-cover"
                src={slide.image}
                alt=""
              />
              <h1 className="w-[70%]">{slide.heading}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </RecoExSec2Wrapper>
  );
}

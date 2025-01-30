import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import awards02 from '../../../assets/images/homepageimages/awards/awards-02.png';
import awards03 from '../../../assets/images/homepageimages/awards/awards-03.png';
import awards04 from '../../../assets/images/homepageimages/awards/awards-04.png';
import { Link } from 'react-router-dom'


export default function RecoExSec2() {
  return (
    <div className="w-full">
      {/* Add custom styles for Swiper using Tailwind's style */}
      <style>
        {`
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
        `}
      </style>

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
            image: awards02,
            // heading: 'Economic Times Young achiever Award 2018 by SIDBI',
          },
          {
            image: awards03,
            // heading: 'Economic Times Young achiever Award 2018 by SIDBI',
          },
          {
            image: awards04,
            // heading: 'Economic Times Young achiever Award 2018 by SIDBI',
          },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="h-[300px] object-cover"
                src={slide.image}
                alt=""
              />
              {/* <h1 className="w-[70%]">{slide.heading}</h1> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
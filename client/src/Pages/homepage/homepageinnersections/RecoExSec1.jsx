import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import news1 from '../../../assets/images/homepageimages/news1.png';

export default function RecoExSec1() {
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
            image: news1,
            heading: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
          },
          {
            image: news1,
            heading: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
          },
          {
            image: news1,
            heading: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
          },
          {
            image: news1,
            heading: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
          },
        ].map((slide, index) => (
          <SwiperSlide key={index} className="bg-[#EEF7FF]">
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-[80%] object-cover"
                src={slide.image}
                alt=""
              />
              <h1 className="w-[70%]">{slide.heading}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const slideData = [
  {
    image: './images/homepageimages/solar.png',
    category: 'Blog',
    title: 'Solar Lighting in Streets',
    link: 'Read More',
  },
  {
    image: './images/homepageimages/street.png',
    category: 'Case Study',
    title: 'How our Street Light is 20% efficient than others',
    link: 'Read More',
  },
  {
    image: './images/homepageimages/whitepaper.png',
    category: 'White Paper',
    title: 'Explore Nessa Legacy since 16 years',
    link: 'Read More',
  },
  {
    image: './images/homepageimages/solar.png',
    category: 'Blog',
    title: 'Innovative Solar Solutions',
    link: 'Read More',
  },
  {
    image: './images/homepageimages/street.png',
    category: 'Case Study',
    title: 'Efficiency in Modern Lighting',
    link: 'Read More',
  },
  {
    image: './images/homepageimages/whitepaper.png',
    category: 'White Paper',
    title: 'Sustainable Energy Practices',
    link: 'Read More',
  },
];

export default function InsitesSwiper() {

  const [slidepre, setslidepre] = useState(window.innerWidth < 500 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setslidepre(window.innerWidth < 600 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={slidepre}
      spaceBetween={30}
      pagination={{
        dynamicBullets:true,
        clickable: true,
      }}
      navigation={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        enabled: false
      }}
      onSwiper={(swiper) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              swiper.autoplay.start();
            } else {
              swiper.autoplay.stop();
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(swiper.el);
         // Add mouse enter and leave event listeners
         swiper.el.addEventListener('mouseenter', () => {
          swiper.autoplay.stop(); // Pause autoplay on mouse enter
        });
        swiper.el.addEventListener('mouseleave', () => {
          swiper.autoplay.start(); // Resume autoplay on mouse leave
        });
      }}
      modules={[Pagination, Autoplay , Navigation]}
      className="mySwiper "
      style={{paddingLeft:"50px", paddingRight:"50px"}}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index} className='mb-[50px]'>
          <div className="slide-content flex flex-col gap-4">
            <img className='rounded-xl' src={slide.image} alt={slide.title} />
            <div className="slide-text flex flex-col gap-2">
              <h4>{slide.category}</h4>
              <h3 className='font-bold'>{slide.title}</h3>
              <a href="#">{slide.link}</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

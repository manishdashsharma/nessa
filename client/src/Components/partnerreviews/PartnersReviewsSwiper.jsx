import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import partner1 from '../../assets/images/homepageimages/partner1.png';
import partner2 from '../../assets/images/homepageimages/partner2.png';
import partner3 from '../../assets/images/homepageimages/partner3.png';


export default function PartnersReviewsSwiper() {


  //  for Responsive design setting element Numbers to previewm
  const [slidepre, setslidepre] = useState(window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3);

  useEffect(() => {
    const handleResize = () => {
      setslidepre(window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const testimonialData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    image: partner1,
    quote: 'The attention to detail and innovative approach transformed our product development process. Highly recommended for any tech company looking to scale.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Developer',
    image: partner2,
    quote: 'Working with this team has been an incredible experience. Their technical expertise and collaborative spirit made complex projects feel seamless.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'UX Designer',
    image: partner3,
    quote: 'The user-centered approach and attention to accessibility details made our product stand out. The results exceeded our expectations.'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Startup Founder',
    image: partner1 ,
    quote: 'As a startup, we needed a partner who could move fast without compromising quality. They delivered exactly that and more.'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    image:  partner2,
    quote: 'The analytics dashboard they created gave us unprecedented insights into our customer behavior. It is been a game-changer for our strategy.'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Tech Lead',
    image:  partner3,
    quote: 'Their code quality and documentation are outstanding. The handover process was smooth, and our team could maintain the system easily.'
  },
  {
    id: 7,
    name: 'Priya Patel',
    role: 'Project Manager',
    image: partner1,
    quote: 'The teams ability to adapt to changing requirements while maintaining project timeline was impressive. A truly agile partnership.'
  },
  {
    id: 8,
    name: 'Alex Foster',
    role: 'Operations Manager',
    image: partner2,
    quote: 'The automated workflow they implemented saved us countless hours and reduced errors by 75%. The ROI was evident within months.'
  },
  {
    id: 9,
    name: 'Maria Garcia',
    role: 'UI Designer',
    image: partner3,
    quote: 'Their design system implementation brought consistency across our product suite. The component library is a joy to work with.'
  },
  {
    id: 10,
    name: 'Thomas Wright',
    role: 'CTO',
    image: partner2,
    quote: 'From cloud architecture to security implementation, their technical expertise helped us scale confidently. A partnership we truly value.'
  }
];


  return (
    <div className="py-[50px] " >
      <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
        What Our
        <span className="text-blue-500"> Partners</span> Say
      </div>
      <div className="w-full flex justify-center">
        <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
      </div>
      <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
        Our clients share their stories of success and satisfaction with Nessa’s products and services. Your trust drives our innovation!Our clients share their stories of success and satisfaction with Nessa’s products and services. Your trust drives our innovation!
      </div>

      <Swiper
        slidesPerView={slidepre}
        spaceBetween={50}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 3,
          clickable: true,

        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          enabled: false,
        }}
        navigation={{
          clickable: true
        }}

        // Animation starts only when element is in view
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

          // It stops auto play on mouse enter
          swiper.el.addEventListener('mouseenter', (e) => {
            swiper.autoplay.stop();
          });
          swiper.el.addEventListener('mouseleave', (e) => {
            swiper.autoplay.start();
          });

          //On hover scale transitionn
          const svgElements = swiper.el.querySelectorAll('svg');
          svgElements.forEach(svg => {
            svg.addEventListener('mouseenter', () => {
              swiper.autoplay.stop();
              svg.style.transition = 'transform 0.2s ease-in-out';
              svg.style.transform = 'scale(1.2)';
            });
            svg.addEventListener('mouseleave', () => {
              swiper.autoplay.start();
              svg.style.transition = 'transform 0.2s ease-in-out';
              svg.style.transform = 'scale(1)';
            });
          });

        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-full min-h-[550px] px-[5vw]  "
      >
        { testimonialData.map((testimonial)=>(
          <SwiperSlide className="cursor-pointer  py-[50px] flex items-center justify-center relative mb-[50px] ">
            <div className=" bg-blue-500 pb-[30px]  rounded-3xl shadow-lg  max-w-md transform transition-transform hover:scale-105 ">

            <div className="bg-white min-h-[400px]  rounded-3xl shadow-lg p-8 max-w-md ">
             
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-[100px] h-[100px] rounded-full object-cover shadow-md"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 font-medium">{  testimonial.role}</p>
                </div>
                <div className="relative">
                  <span className="text-4xl text-blue-500 absolute -left-4 -top-4">"</span>
                  <p className="text-gray-700 italic pt-4 px-4 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <span className="text-4xl text-blue-500 absolute -right-4 bottom-0">"</span>
                </div>
              </div>
              </div>
            </div>


          </SwiperSlide>
        ))}
       
      
      </Swiper>
    </div>
  );
}

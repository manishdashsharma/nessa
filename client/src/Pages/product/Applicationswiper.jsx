
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Applicationswiper({product}) {

  return (
      <>
          <Swiper
              slidesPerView={1}
              spaceBetween={5}
              pagination={{
                  dynamicBullets: true,
                  dynamicMainBullets: 3,
                  clickable: true
              }}
              navigation={{
                  clickable: true
              }}
              breakpoints={{
                  550: {
                      slidesPerView: 2,
                      spaceBetween: 20
                  },
                  640: {
                      slidesPerView: 2,
                      spaceBetween: 20
                  },
                  800: {
                      slidesPerView: 3,
                      spaceBetween: 20
                  },
                  1280: {
                      slidesPerView: 4,
                      spaceBetween: 20
                  }
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper mt-[40px]   ">
              {product.applicationImageUrls.length > 0 ? (
                  product.applicationImageUrls.map((image, index) => (
                      <SwiperSlide
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.2 }}
                          className="h-[200px] max-sm:h-fit  flex flex-col items-center justify-center text-center">
                          <img
                              className="w-[200px] h-[200px] object-cover bg-gray-300"
                              src={image}
                              alt="Application Image"
                          />
                      </SwiperSlide>
                  ))
              ) : (
                  <div className="text-center text-gray-600 ">No product found.</div>
              )}
          </Swiper>
      </>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination , Navigation } from 'swiper/modules';

export default function ProductAndTestingSwiper( {data}) {
  return (
      <>
          <Swiper
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 3
              }}
              breakpoints={{
                  550: {
                      slidesPerView: 1,
                      spaceBetween: 20
                  },
                  690: {
                      slidesPerView: 2,
                      spaceBetween: 40
                  },
                  900: {
                      slidesPerView: 3,
                      spaceBetween: 40
                  }
              }}
              navigation={{
                  clickable: true
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper  mt-[50px] px-[40px]">
              {data ? (
                  data.map((product, index) => (
                      <SwiperSlide
                          key={index}
                          className="mb-[50px]  ">
                          <div className="flex w-full justify-center items-center">
                              <div className="relative h-[30vw] min-h-[400px]  flex justify-center items-center">
                                  <img
                                      className=" w-full h-full  object-cover"
                                      src={product.poster}
                                      alt=""
                                  />
                                  <h1 className="absolute bottom-0 rounded-md w-[95%] bg-white text-xl py-[10px] mb-[10px] flex items-center justify-center  z-[2]">
                                      {product.name}
                                  </h1>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))
              ) : (
                  <div className="text-center">
                      <h1>No Data </h1>
                  </div>
              )}
          </Swiper>
      </>
  )
}

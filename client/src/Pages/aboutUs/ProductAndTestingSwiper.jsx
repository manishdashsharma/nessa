import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination , Navigation } from 'swiper/modules';
import qi1 from '../../assets/images/aboutUs/productTesting/Quality Infra 1.jpg'
import qi2 from '../../assets/images/aboutUs/productTesting/Quality Infra 2 .jpg'
import qi3 from '../../assets/images/aboutUs/productTesting/Quality Infra 3 .jpg'
import qi4 from '../../assets/images/aboutUs/productTesting/Quality Infra 4.jpg'

export default function ProductAndTestingSwiper( {data}) {


    const productTestingData = [
        {
            name: 'Integrating sphere compact system',
            poster: qi1
        },
        {
            name: 'Sugre generator',
            poster: qi2
        },
        {
            name: 'Burning room',
            poster: qi3
        },
        {
            name: 'Humidity chambers',
            poster: qi4
        },
    ]

  return (
      <>
          <Swiper
              slidesPerView={1}
              spaceBetween={20}
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
              className="mySwiper  mt-[50px] px-[40px] select-none">
              {productTestingData ? (
                  productTestingData.map((product, index) => (
                      <SwiperSlide
                          key={index}
                          className="mb-[50px]  select-none">
                          <div className="flex w-full justify-center items-center">
                              <div className="relative h-[30vw] min-h-[400px] border flex justify-center items-center">
                                  <img
                                      className=" w-full h-full  object-contain "
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

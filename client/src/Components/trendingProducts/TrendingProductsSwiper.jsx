
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { trendingProductData } from './TrendingProductConfig';
import { fetchProducts } from '../../services/api.services';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TrendingProductsSwipe() {

  const navigate = useNavigate()


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        setLoading(true)
        const params = {
          limit: 12,
          offset: 0,
          query: 'popular',

        }

        const response = await fetchProducts(params)
        if (response?.data) {
          setProducts(response.data.products)
          setTotalCount(response.data.total || 0)
        }
      } catch (error) {
        console.error('Error fetching product data:', error)
        toast.error('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchFilteredProducts()
  }, [])

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          dynamicBullets:true,
          
          dynamicMainBullets:3,
          clickable: true,
        }}
        navigation={{
            clickable:true
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
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[40px]   "
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="  ">
            <div className="h-[400px]  xl:w-[22vw]  max-[850px]:w-[33vw] max-[640px]:w-[50vw] w-full max-sm:flex max-sm:flex-col max-sm:items-center  mb-[40px]  p-[10px]  border-[2px] bg-white border-[#d6d0d0] ">
              <img
                className=" mb-[10px] h-[70%] object-cover"
                src={product.productImageurl}
                alt={product.name + ' Image'}
              />
              <h1 className='text-sm'>{product.categories}- {product.subcategories}</h1>
              <h1 className="mt-[10px] text-xl">{product.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

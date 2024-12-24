
import Navbar from '../../components/header/Navbar'
import ShowProducts from './ShowProducts'
import hero from '../../assets/images/allProductsimages/hero.png'

const Allproducts = () => {
  return (
    <div className='overflow-hidden'>
      
      <Navbar />

        <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-center ">
          <img
            className="w-full h-full object-cover absolute "
            src={hero}
            alt=""
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white  relative z-[2]">
            All Products
          </h1>
        </div>

        <ShowProducts/>
    </div>
  )
}

export default Allproducts
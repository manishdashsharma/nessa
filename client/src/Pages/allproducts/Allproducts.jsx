
import ShowProducts from './ShowProducts'
import hero from '../../assets/images/allProductsimages/hero.png'
import Navbar from '../../Components/Header/Navbar';
import SideComponent from '../../Components/sideComponent/SideComponent';

const Allproducts = () => {
  return (
    <div className='overflow-hidden'>
      
      <Navbar />
      <SideComponent/>

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
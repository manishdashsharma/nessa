import ProductPageImg1 from "../../assets/ProductPageImg1.png";
import ProductPageImg2 from "../../assets/ProductPageImg2.png";
import ProductPageImg3 from "../../assets/ProductPageImg3.png";
import ProductPageImg4 from "../../assets/ProductPageImg4.png";
import ProductPageImg5 from "../../assets/ProductPageImg5.png";
import ProductPageImg6 from "../../assets/ProductPageImg6.png";
import ProductPageImg7 from "../../assets/ProductPageImg7.png";

const ProductRange = () => {
    return (
      <div className="bg-blue-50 min-h-screen">
        <div className="text-center py-8">
        <h2 className="text-4xl font-bold mb-6">
  Our <span className="text-blue-600">Product</span> Range
</h2>
<div className="h-1 w-12 bg-blue-200 mx-auto mt-6 mb-6"></div>


          <p className="text-gray-600 mt-2">
            At Nessa, we don’t just offer off-the-shelf products; we design and manufacture lighting solutions that adapt
            <br />
            precisely to your unique requirements.
          </p>
        </div>
  
        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-0 md:px-0">
          <div className="relative group overflow-hidden h-72">
            <img
              src={ProductPageImg1}
              alt="AC Lights"
              className="w-full h-full object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="bg-white py-2 px-4 text-black font-semibold">AC LIGHTS</span>
            </div>
          </div>
  
          <div className="relative group overflow-hidden h-72">
            <img
              src={ProductPageImg2}
              alt="Solar Lights"
              className="w-full h-full object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="bg-white py-2 px-4 text-black font-semibold">SOLAR LIGHTS</span>
            </div>
          </div>
  
          <div className="relative group overflow-hidden h-72">
            <img
              src={ProductPageImg3}
              alt="Electronics"
              className="w-full h-full object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="bg-white py-2 px-4 text-black font-semibold">ELECTRONICS</span>
            </div>
          </div>
        </div>
  
        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 mt-10">
          <div className="border rounded-lg bg-white flex flex-col items-center h-96">
            <img
              src={ProductPageImg4}
              alt="AC LED Flood Light"
              className="h-full w-full object-cover"
            />
            <div className="bg-blue-100 w-full text-center py-4">
              <h4 className="text-sm font-semibold">AC Light</h4>
              <p className="text-sm font-medium">100W AC LED Flood Light</p>
            </div>
          </div>
  
          <div className="border rounded-lg bg-white flex flex-col items-center h-96">
            <img
              src={ProductPageImg5}
              alt="Solar LED Street Light"
              className="h-full w-full object-cover"
            />
            <div className="bg-blue-100 w-full text-center py-4">
              <h4 className="text-sm font-semibold">Solar Light</h4>
              <p className="text-sm font-medium">200W Solar LED Street Light</p>
            </div>
          </div>
  
          <div className="border rounded-lg bg-white flex flex-col items-center h-96">
            <img
              src={ProductPageImg6}
              alt="LED High Bay Light"
              className="h-full w-full object-cover"
            />
            <div className="bg-blue-100 w-full text-center py-4">
              <h4 className="text-sm font-semibold">High Bay Light</h4>
              <p className="text-sm font-medium">150W LED High Bay Light</p>
            </div>
          </div>
  
          <div className="border rounded-lg bg-white flex flex-col items-center h-96">
            <img
              src={ProductPageImg7}
              alt="LED Panel Light"
              className="h-full w-full object-cover"
            />
            <div className="bg-blue-100 w-full text-center py-4">
              <h4 className="text-sm font-semibold">Panel Light</h4>
              <p className="text-sm font-medium">60W LED Panel Light</p>
            </div>
          </div>
        </div>
  
        {/* Button */}
        <div className="text-center py-6">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            View All Products
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductRange;
  
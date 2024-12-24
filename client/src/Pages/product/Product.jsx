import  { useState } from 'react';
import Navbar from '../../components/header/Navbar';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { productConfig, solution } from './ProductConfig';
import RelatedProductsSwipe from './RelatedProducts';
import ProductTabs from './Productdetails';
import { IoMdShare } from 'react-icons/io';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = productConfig.productImage;

  const photoSection = () => (
    <>
      <div className="w-fit px-2  flex flex-col max-lg:flex-row gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border-2 rounded-lg p-1 h-[100px] max-sm:h-[50px] w-[100px] max-sm:w-[50px] bg-blue-50 ${
              selectedImage === index ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full"
            />
          </button>
        ))}
      </div>
      <div className="w-[70%] max-lg:w-full h-[500px] max-lg:h-[300px] p-4 bg-blue-50 rounded-xl">
        <img
          src={images[selectedImage]}
          alt="Solar LED Flood Light"
          className="w-full h-full object-contain "
        />
      </div>
    </>
  );

  return (
    <div className="overflow-hidden text-lg">
      <Navbar />

      <div className="w-full flex max-lg:flex-col max-lg:gap-10 px-[5vw] py-[50px]">
        {/* product iamges section only visible after w-1024 */}
        <div className="w-1/2 max-lg:hidden  max-lg:w-full flex max-lg:flex-col gap-5 h-[500px] max-lg:h-fit">
          {photoSection()}
        </div>

        {/* product information section */}
        <div className="w-1/2 max-lg:w-full  justify-between px-2 flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-start ">
              <h1 className="text-3xl font-bold">
                {productConfig.productName}
              </h1>

              <div className="flex gap-4">
                <button className="p-2  hover:bg-blue-100 rounded-xl bg-blue-50  l">
                  <MdOutlineBookmarkAdd className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-blue-100 rounded-xl bg-blue-50  ">
                  <IoMdShare className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 border-b text-base">
              SKU: {productConfig.productSku}
            </p>
          </div>

          <p className="text-gray-700">{productConfig.productDescription}</p>

          {/* product iamges section only visible bellow w-1024 */}
          <div className="w-1/2 hidden max-lg:flex max-lg:w-full  max-lg:flex-col gap-5 h-[500px] max-lg:h-fit">
            {photoSection()}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Best Suited For</h2>
            <div className="flex  gap-4">
              {productConfig.bestSuittedFor.map((item, index) => (
                <div
                  key={index}
                  className="w-[100px] h-[100px] flex flex-col justify-center items-center"
                >
                  <img src={item.image} alt="" />
                  <h1 className="mt-2">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Enquire Now
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50">
              Download Datasheet
            </button>
          </div>
        </div>
      </div>

      <ProductTabs />

      <div className=" bg-blue-100" >
          <div className="w-full pt-16  max-md:pb-2 px-[5vw]  text-center  relative ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-[2] relative">
              <img
                className="w-full md:w-1/2 h-auto shadow-lg z-[2]"
                src={solution[0].image}
                alt="Stadium Lighting"
              />
              <div className="text-left md:w-1/2 ">
                <h3 className="text-2xl font-bold mb-2">
                  {solution[0].heading}
                </h3>
                <p className="mb-4">{solution[0].para}</p>

                
              </div>
            </div>
          </div>
          <div className="w-full py-16  max-md:pb-2 px-[5vw]  text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img
                className="w-full md:w-1/2 h-auto  hidden max-md:block  shadow-lg"
                src={solution[1].image}
                alt=""
              />
              <div className="text-left md:w-1/2 ">
                <h3 className="text-2xl font-bold mb-2">
                  {solution[1].heading}
                </h3>
                <p className="mb-4 ">{solution[1].para}</p>

               
              </div>
              <img
                className="w-full md:w-1/2 h-auto max-md:hidden  shadow-lg"
                src={solution[1].image}
                alt=""
              />
            </div>
          </div>
        </div>

      <div className="">
        {/* related products */}
        <div className="px-[5vw] flex flex-col items-center  gap-2 my-[50px]">
          <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
            <span className="text-blue-500"> Related</span> Products
          </div>
          <div className="flex relative shrink-0 mt-4 h-2.5 bg-[var(--light-blue)] rounded-[50px] w-[51px]" />
        </div>
       

        <RelatedProductsSwipe />
      </div>
    </div>
  );
};

export default Product;

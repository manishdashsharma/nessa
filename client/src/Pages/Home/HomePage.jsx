import Navbar from "../../Components/Navbar/Navbar";
import Cards from "../../Components/Cards/Card";
// import Map from "../../Components/Map/Map"
import ProductPage from "../../Components/ProductPage/Product";
import InsightPage from "../../Components/InsightPage/Insight"
import { useState } from "react";
import HeadingImg from "../../assets/HeaderImg.png";
import Partners1 from "../../assets/T1.png";
import Partners2 from "../../assets/T2.png";
import Partners3 from "../../assets/T3.png";
import Partners4 from "../../assets/T4.png";
import Partners5 from "../../assets/T5.png";
import Partners6 from "../../assets/T6.png";
import LampImg from "../../assets/lampImg.png";
import Client from "../../Components/Client/Client"
import Recognize from "../../Components/Recognize/Recognize"
// import ClientImg1 from "../../assets/client1.jpeg";
// import ClientImg2 from "../../assets/client2.jpeg";
// import ClientImg3 from "../../assets/client3.jpeg";


const HomePage = () => {
  const [color, setColor] = useState("#ffffff");
  const [intensity, setIntensity] = useState(45);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Lighting Solution Section */}
      <div className="bg-gray-50 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Label */}
          <div className="inline-flex flex-wrap justify-center items-center space-x-2 text-blue-600 mb-4 sm:mb-6 border border-blue-600 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2">
            <span className="text-sm sm:text-base md:text-lg font-medium">⚡</span>
            <span className="text-xs sm:text-sm font-medium">
              Crafted with precision, powered by sustainability
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight px-2 sm:px-0">
            Innovative <span className="text-blue-600">Lighting Solution</span> <br className="hidden sm:block" /> for every Industry
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4 md:mt-6 leading-relaxed px-2 sm:px-4">
            With 16+ years of expertise and a global presence in 20+ countries,{" "}
            <br className="hidden lg:block" />
            Nessa delivers sustainable, high-performance lighting tailored to
            your needs.
          </p>

          {/* Button */}
          <button className="mt-4 sm:mt-6 md:mt-8 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
            Discover All Solutions
          </button>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex justify-center items-center bg-gray-50 px-4 sm:px-6 py-0">
        <div className="relative w-full max-w-7xl">
          <div className="relative">
            <img
              src={HeadingImg}
              alt="Solar Street Lights"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
              style={{
                filter: `brightness(${intensity / 100})`,
                backgroundColor: color,
              }}
            />
          </div>

          {/* Control Section */}
          <div className="absolute bottom-0 sm:bottom-[-60px] left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg w-[90%] sm:w-auto">
            {/* Change Color Control */}
            <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-start gap-2 sm:gap-0">
              <label htmlFor="color" className="text-sm sm:text-base font-medium text-gray-700">
                Change Color
              </label>
              <input
                type="color"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border mt-0 sm:mt-2"
              />
            </div>

            {/* Light Intensity Control */}
            <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-start gap-2 sm:gap-0">
              <label htmlFor="intensity" className="text-sm sm:text-base font-medium text-gray-700">
                Light Intensity
              </label>
              <div className="flex flex-col items-center">
                <input
                  type="range"
                  id="intensity"
                  min="0"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value)}
                  className="w-24 sm:w-32 mt-0 sm:mt-2"
                />
                <span className="text-xs sm:text-sm text-gray-600 mt-1">{intensity}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className="bg-white mt-16 sm:mt-20">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-8">
          Our Trusted Partners
        </h2>
        <div className="h-1 w-12 bg-blue-200 mx-auto mb-6"></div>


        {/* Partners Section */}
        <div className="bg-blue-50 py-6 sm:py-8">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap px-4 sm:px-6">
            <img src={Partners1} alt="Essar" className="h-8 sm:h-10 md:h-12 lg:h-16" />
            <img src={Partners2} alt="Jindal Steel & Power" className="h-8 sm:h-10 md:h-12 lg:h-16" />
            <img src={Partners3} alt="Larsen & Toubro" className="h-8 sm:h-10 md:h-12 lg:h-16" />
            <img src={Partners4} alt="Adani" className="h-8 sm:h-10 md:h-12 lg:h-16" />
            <img src={Partners5} alt="Torrent Power" className="h-8 sm:h-10 md:h-12 lg:h-16" />
            <img src={Partners6} alt="Nirma" className="h-8 sm:h-10 md:h-12 lg:h-16" />
          </div>
        </div>
      </div>

      {/* Cards and Product Page */}
      <Cards />
      <ProductPage />

      {/* Industry Presence Section */}
      <div className="bg-white">
        <h1 className="text-4xl font-bold mt-6 mb-6 text-center">
          Trusted by <span className="text-blue-500">Industries</span> Across
          <br />
          the <span className="text-blue-500">Globe</span>
        </h1>
        
        <div className="h-1 w-12 bg-blue-200 mx-auto mb-6"></div>

        <p className="text-center mb-8">
          With a growing presence across 20+ countries, Nessa is internationally recognized for the reliability, integrity, and high standards
          <br />
          of its products. From Africa and the Middle East to Europe, South Asia, and the USA, our lighting solutions serve a trusted
          <br />
          customer base, expanding our reach every year and delivering excellence across major continents.
        </p>
      </div>

      {/* Why Choose Nessa Section */}
          <div className="bg-blue-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">Nessa</span>
              </h2>
              <div className="h-1 w-12 bg-blue-200 mx-auto mt-6 mb-6"></div>

              <p className="text-gray-700 mb-8">
              Trusted by industries worldwide, Nessa delivers customized, high-performance lighting solutions for every <br /> need. Partner with Nessa for reliable, energy-efficient lighting that sets new standards in quality and <br /> sustainability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Expertise */}
                <div className="bg-white shadow-lg rounded-2xl p-4 relative border-2 border-blue-600 flex flex-col items-center w-64 h-64">
                  <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-t-2xl"></div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg leading-6 font-medium text-blue-600">16+ Years of Expertise</h3>
                  <p className="mt-2 text-base leading-6 text-gray-500 text-center">
                    Lighting the way for over 16 years, trusted by industries worldwide.
                  </p>
                </div>

                {/* Global Reach */}
                <div className="bg-blue-600 shadow-lg rounded-2xl p-4 text-white flex flex-col items-center w-64 h-64">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-200 text-blue-800">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg leading-6 font-medium text-white">Global Reach</h3>
                  <p className="mt-2 text-base leading-6 text-white text-center">
                    Serving clients in 20+ countries across all major continents.
                  </p>
                </div>

                {/* In-house Manufacturing */}
                <div className="bg-white shadow-lg rounded-2xl p-4 relative border-2 border-blue-600 flex flex-col items-center w-64 h-64">
                  <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-t-2xl"></div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-7.071 17.071A10 10 0 1012 2z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg leading-6 font-medium text-blue-600">Inhouse Manufacturing</h3>
                  <p className="mt-2 text-base leading-6 text-gray-500 text-center">
                    Complete control from design to delivery for unmatched quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white relative p-4 md:p-8 lg:p-12">
      {/* Container for better positioning */}
      <div className="max-w-6xl mx-auto relative">
        {/* Lamp Image - Hidden on very small screens */}
        <img
          src={LampImg}
          alt="Lamp"
          className="hidden sm:block absolute top-0 left-4 md:left-8 lg:left-10 w-20 h-20 md:w-28 md:h-28 lg:w-28 lg:h-28 object-contain"
        />

        {/* Content Container */}
        <div className="pt-4 sm:pt-8">
          {/* Heading - Responsive text size */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-4 md:mt-6 md:mb-6 text-center px-4">
            Inside <span className="text-blue-500">Nessa</span>: Expertise in
            <span className="hidden md:inline"><br /></span> Every Step
          </h1>
          <div className="h-1 w-12 bg-blue-200 mx-auto"></div>

          {/* Description - Responsive padding and line breaks */}
          <p className="text-sm md:text-base text-center mb-6 md:mb-8 px-4 max-w-3xl mx-auto leading-relaxed mt-6">
  With complete in-house manufacturing, R&D, and stringent testing, Nessa
  guarantees top-tier quality and innovation in every lighting
  solution. From design to delivery, we control every step for unmatched
  reliability.
</p>


          {/* Video Section - Responsive width and padding */}
          <div className="flex justify-center px-4 md:px-8">
            <div className="w-full aspect-video max-w-4xl">
              <video
                className="w-full h-full rounded-lg shadow-md"
                controls
                preload="metadata"
              >
                <source src="path-to-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Client />
    <Recognize />
    <InsightPage />
    </div>
  );
};

export default HomePage;

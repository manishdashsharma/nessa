import Navbar from "../../Components/Navbar/Navbar";
import Cards from "../../Components/Cards/Card";
import { useState } from "react";
import HeadingImg from "../../assets/HeaderImg.png";
import Partners1 from "../../assets/T1.png";
import Partners2 from "../../assets/T2.png";
import Partners3 from "../../assets/T3.png";
import Partners4 from "../../assets/T4.png";
import Partners5 from "../../assets/T5.png";
import Partners6 from "../../assets/T6.png";

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
            Innovative{" "}
            <span className="text-blue-600">Lighting Solution</span>{" "}
            <br className="hidden sm:block" /> for every Industry
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

        {/* Partners Section */}
        <div className="bg-blue-50 py-6 sm:py-8">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap px-4 sm:px-6">
            <img
              src={Partners1}
              alt="Essar"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
            <img
              src={Partners2}
              alt="Jindal Steel & Power"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
            <img
              src={Partners3}
              alt="Larsen & Toubro"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
            <img
              src={Partners4}
              alt="Adani"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
            <img
              src={Partners5}
              alt="Torrent Power"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
            <img
              src={Partners6}
              alt="Nirma"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
          </div>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default HomePage;

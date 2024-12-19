import SolutionImg1 from "../../assets/SolutionImg1.png";
import SolutionImg2 from "../../assets/SolutionImg2.png";
import SolutionImg3 from "../../assets/SolutionImg3.png";
import SolutionImg4 from "../../assets/SolutionImg4.webp";

const Card = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16 px-4 md:px-8 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Lighting <span className="text-blue-500">Solutions</span> According to
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mt-2">Your Needs & Conditions</h2>
        <div className="h-1 w-12 bg-blue-200 mx-auto mt-6 mb-6"></div>

        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
          At Nessa, we don't just offer off-the-shelf products; we design and
          manufacture lighting solutions that adapt precisely to your unique
          requirements. From extreme environments in mining and refineries to
          specific needs in airports and rural settings, our expert team
          customizes each solution to solve the exact challenges you face.
        </p>
      </div>

      {/* Cards Section */}
      <div className="space-y-8 md:space-y-12">
        {/* Airports */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={SolutionImg1}
              alt="Airports"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Airports</h3>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Nessa delivers advanced, reliable lighting solutions designed to
              meet the unique demands of airports. From runways and taxiways to
              terminal interiors and parking facilities, our energy-efficient and
              durable lighting ensures safety, visibility, and seamless operations.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Tailored to withstand extreme conditions, Nessa's solutions
              illuminate airports around the clock with precision and
              sustainability.
            </p>
            <button className="mt-4 md:mt-6 w-full sm:w-auto border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
              Discover Products
            </button>
          </div>
        </div>

        {/* Mines */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={SolutionImg2}
              alt="Mines"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Mines</h3>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Nessa delivers advanced, reliable lighting solutions designed to
              meet the unique demands of mines. From tunnels and mining sites to
              operations in extreme conditions, our energy-efficient and durable
              lighting ensures safety, visibility, and seamless operations.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Tailored to withstand extreme conditions, Nessa's solutions
              illuminate mines around the clock with precision and
              sustainability.
            </p>
            <button className="mt-4 md:mt-6 w-full sm:w-auto border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
              Discover Products
            </button>
          </div>
        </div>

        {/* Stadiums */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={SolutionImg3}
              alt="Stadiums"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Stadiums</h3>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Nessa delivers advanced, reliable lighting solutions designed to
              meet the unique demands of stadiums. From sports fields and event
              areas to audience seating, our energy-efficient and durable
              lighting ensures safety, visibility, and seamless operations.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Tailored to withstand extreme conditions, Nessa's solutions
              illuminate stadiums around the clock with precision and
              sustainability.
            </p>
            <button className="mt-4 md:mt-6 w-full sm:w-auto border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
              Discover Products
            </button>
          </div>
        </div>

        {/* Additional Mine Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={SolutionImg4}
              alt="Additional Mining Solutions"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Mines</h3>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Nessa delivers advanced, reliable lighting solutions designed to
              meet the unique demands of mines. From tunnels and mining sites to
              operations in extreme conditions, our energy-efficient and durable
              lighting ensures safety, visibility, and seamless operations.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Tailored to withstand extreme conditions, Nessa's solutions
              illuminate mines around the clock with precision and
              sustainability.
            </p>
            <button className="mt-4 md:mt-6 w-full sm:w-auto border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100 transition-colors">
              Discover Products
            </button>
          </div>
        </div>
      </div>

      {/* Discover All Solutions Button */}
      <div className="text-center mt-8 md:mt-12">
        <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors">
          Discover All Solutions
        </button>
      </div>
    </div>
  );
};

export default Card;
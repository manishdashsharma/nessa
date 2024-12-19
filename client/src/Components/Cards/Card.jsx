import SolutionImg1 from "../../assets/SolutionImg1.png"
import SolutionImg2 from "../../assets/SolutionImg2.png"
import SolutionImg3 from "../../assets/SolutionImg3.png"
import SolutionImg4 from "../../assets/SolutionImg4.webp"

const Card = () => {
    return (
      <div className="bg-gray-50 py-16">
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800">
              Lighting <span className="text-blue-500">Solutions</span> According to
            </h1>
            <h2 className="text-3xl text-gray-600 mt-3">Your Needs & Conditions</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              At Nessa, we don't just offer off-the-shelf products; we design and
              manufacture lighting solutions that adapt precisely to your unique
              requirements. From extreme environments in mining and refineries to
              specific needs in airports and rural settings, our expert team
              customizes each solution to solve the exact challenges you face.
            </p>
          </div>
  
          {/* Cards Section */}
          <div className="space-y-24">
            {/* Airports */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={SolutionImg1}
                  alt="Airports"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">Airports</h3>
                <p className="text-lg text-gray-600">
                  Nessa delivers advanced, reliable lighting solutions designed to
                  meet the unique demands of airports. From runways and taxiways to
                  terminal interiors and parking facilities, our energy-efficient
                  and durable lighting ensures safety, visibility, and seamless
                  operations.
                </p>
                <p className="text-lg text-gray-600">
                  Tailored to withstand extreme conditions, Nessa's solutions
                  illuminate airports around the clock with precision and
                  sustainability.
                </p>
                <div className="pt-4">
                  <button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition-colors">
                    Discover Products
                  </button>
                </div>
              </div>
            </div>
  
            {/* Mines */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={SolutionImg2}
                  alt="Mines"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">Mines</h3>
                <p className="text-lg text-gray-600">
                  Nessa delivers advanced, reliable lighting solutions designed to
                  meet the unique demands of mines. From tunnels and mining sites to
                  operations in extreme conditions, our energy-efficient and durable
                  lighting ensures safety, visibility, and seamless operations.
                </p>
                <p className="text-lg text-gray-600">
                  Tailored to withstand extreme conditions, Nessa's solutions
                  illuminate mines around the clock with precision and
                  sustainability.
                </p>
                <div className="pt-4">
                  <button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition-colors">
                    Discover Products
                  </button>
                </div>
              </div>
            </div>
  
            {/* Stadiums */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={SolutionImg3}
                  alt="Stadiums"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">Stadiums</h3>
                <p className="text-lg text-gray-600">
                  Nessa delivers advanced, reliable lighting solutions designed to
                  meet the unique demands of stadiums. From sports fields and event
                  areas to audience seating, our energy-efficient and durable
                  lighting ensures safety, visibility, and seamless operations.
                </p>
                <p className="text-lg text-gray-600">
                  Tailored to withstand extreme conditions, Nessa's solutions
                  illuminate stadiums around the clock with precision and
                  sustainability.
                </p>
                <div className="pt-4">
                  <button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition-colors">
                    Discover Products
                  </button>
                </div>
              </div>
            </div>
  
            {/* Petrol Pumps */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={SolutionImg4}
                  alt="Petrol Pumps"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">Petrol Pumps</h3>
                <p className="text-lg text-gray-600">
                  Nessa delivers advanced, reliable lighting solutions designed to
                  meet the unique demands of petrol pumps. From forecourts and
                  canopies to store interiors and parking areas, our energy-efficient
                  and durable lighting ensures safety, visibility, and seamless
                  operations.
                </p>
                <p className="text-lg text-gray-600">
                  Tailored to withstand extreme conditions, Nessa's solutions
                  illuminate petrol stations around the clock with precision and
                  sustainability.
                </p>
                <div className="pt-4">
                  <button className="bg-blue-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-blue-600 transition-colors">
                    Discover Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  
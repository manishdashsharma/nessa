import RecognizeImg1 from "../../assets/RecognizeImg1.png";
import RecognizeImg2 from "../../assets/RecognizeImg2.png";

const RecognizedExcellencePage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">
          Recognized <span className="text-blue-500">Excellence</span>
        </h1>
        <div className="h-1 w-12 bg-blue-200 mx-auto mt-4"></div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Blue Background */}
        <div className="bg-blue-50 p-8">
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-xl font-semibold text-center">
              Nessa in <span className="text-blue-500">News</span>
            </h2>
            <div className="bg-white rounded-lg p-4">
              <img 
                src={RecognizeImg1}
                alt="SEWA News Article" 
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-medium text-center">
                SEWA, bizmen use LEDs to lead veg <br />vendors out of darkness!
              </h3>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Right Column - White Background */}
        <div className="bg-white p-8">
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-xl font-semibold text-center">
              Awards & <span className="text-blue-500">Recognition</span>
            </h2>
            <div className="p-4">
              <img 
                src={RecognizeImg2}
                alt="Economic Times Award" 
                className="w-2/3 h-auto mx-auto mb-6"
              />
              <h3 className="text-lg font-medium text-center">
                Economic Times Young achiever <br />Award 2018 by SIDBI
              </h3>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognizedExcellencePage;
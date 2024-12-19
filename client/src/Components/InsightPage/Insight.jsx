import { useState } from 'react';
import InsightImg1 from "../../assets/InsightImg1.png";
import InsightImg2 from "../../assets/InsightImg2.png";
import InsightImg3 from "../../assets/InsightImg3.png";

const InsightsResources = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-2">
            Insights & <span className="text-blue-500">Resources</span>
          </h1>
          <div className="h-1 w-12 bg-blue-200 mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card - Blog */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={InsightImg1}
                alt="Solar Lighting"
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">Blog</p>
            <h3 className="font-semibold text-xl mb-3">
              Solar Lighting in Streets
            </h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-left">
              Read More
            </button>
          </div>

          {/* Second Card - Case Study */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={InsightImg2}
                alt="Street Light Efficiency"
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">Case Study</p>
            <h3 className="font-semibold text-xl mb-3">
              How our Street Light is 20% efficient then others
            </h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-left">
              Read More
            </button>
          </div>

          {/* Third Card - White Paper */}
          <div className="flex flex-col relative">
            <div className="rounded-xl overflow-hidden mb-4 border border-blue-500">
              <img
                src={InsightImg3}
                alt="Nessa Legacy"
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">White Paper</p>
            <h3 className="font-semibold text-xl mb-3">
              Explore Nessa Legacy since 16 years
            </h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-left">
              Read More
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`w-2 h-2 rounded-full ${
                dot === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsResources;
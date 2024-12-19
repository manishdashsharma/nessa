import { useState } from "react";

const CountryMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { country: "South Africa", flag: "path/to/south-africa-flag.png", id: "south-africa" },
    { country: "Kenya", flag: "path/to/kenya-flag.png", id: "kenya" },
    { country: "Nigeria", flag: "path/to/nigeria-flag.png", id: "nigeria" },
    { country: "Zambia", flag: "path/to/zambia-flag.png", id: "zambia" },
    { country: "Uganda", flag: "path/to/uganda-flag.png", id: "uganda" },
    { country: "Israel", flag: "path/to/israel-flag.png", id: "israel" },
    { country: "Oman", flag: "path/to/oman-flag.png", id: "oman" },
    { country: "Bangladesh", flag: "path/to/bangladesh-flag.png", id: "bangladesh" },
    { country: "Ethiopia", flag: "path/to/ethiopia-flag.png", id: "ethiopia" },
    { country: "Ghana", flag: "path/to/ghana-flag.png", id: "ghana" },
    { country: "Nepal", flag: "path/to/nepal-flag.png", id: "nepal" },
    { country: "Sri Lanka", flag: "path/to/sri-lanka-flag.png", id: "sri-lanka" },
    { country: "France", flag: "path/to/france-flag.png", id: "france" },
    { country: "Bhutan", flag: "path/to/bhutan-flag.png", id: "bhutan" },
    { country: "Finland", flag: "path/to/finland-flag.png", id: "finland" },
    { country: "United States", flag: "path/to/united-states-flag.png", id: "united-states" },
  ];

  // Handle clicking on a country on the map
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex flex-wrap justify-around w-full">
      {/* Left side: Map */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Nationwide Presence</h2>
        <div className="relative">
          <img
            src="path/to/india-map.png"
            alt="India Map"
            className="w-64 h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-white font-bold">29</span>
          </div>
        </div>
        <p className="mt-4">Nessa in <span className="text-blue-500">29 States of India</span></p>
      </div>

      {/* Right side: List of flags and countries */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">International Presence</h2>
        <div className="grid grid-cols-3 gap-4">
          {countries.map(({ country, flag, id }) => (
            <div
              key={id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleCountryClick(country)}
            >
              <img src={flag} alt={`${country} Flag`} className="w-12 h-auto mb-2" />
              <span>{country}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Show selected country and its flag */}
      {selectedCountry && (
        <div className="w-full p-4 mt-4 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Selected Country:</h3>
          <div className="flex items-center">
            <img
              src={`path/to/${selectedCountry.toLowerCase().replace(" ", "-")}-flag.png`}
              alt={`${selectedCountry} Flag`}
              className="w-16 h-auto mr-4"
            />
            <span className="text-2xl">{selectedCountry}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryMap;

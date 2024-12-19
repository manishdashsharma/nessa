import { useState, useEffect, useRef } from 'react';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const desktopDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset dropdown when closing mobile menu
    if (isMobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleDesktopDropdown = (dropdownName) => {
    setOpenDesktopDropdown(openDesktopDropdown === dropdownName ? null : dropdownName);
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setOpenDesktopDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full">
      {/* Top Bar - Fully Responsive */}
      <div className="bg-blue-700 text-white flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 ml-28">
            <a href="mailto:info@nessa.in" className="flex items-center justify-center sm:justify-start">
              <span className="mr-1">✉️</span>
              info@nessa.in
            </a>
            <a href="tel:+91-79-2970-1779" className="flex items-center justify-center sm:justify-start">
              <span className="mr-1">📞</span>
              +91-79-2970-1779
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto ">
          {/* Search Input - Fully Responsive */}
          <div className="relative w-full md:w-52">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full px-3 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.65 11.5a5.15 5.15 0 11-10.3 0 5.15 5.15 0 0110.3 0z"
              />
            </svg>
          </div>

          {/* Country Selector - Fully Responsive */}
          <div className="relative w-full md:w-auto">
            <div
              className="flex items-center justify-center space-x-1 border border-blue-700 px-3 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
              onClick={toggleCountryDropdown}
            >
              🌐
              <span className="text-sm">IN (ENG)</span>
            </div>
            {isCountryDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full md:w-48 bg-white shadow-lg rounded-md border">
                <select
                  className="w-full px-3 py-2 text-sm text-gray-700"
                  defaultValue="IN"
                >
                  <option value="IN">IN (ENG)</option>
                  <option value="US">US (ENG)</option>
                  <option value="FR">FR (FR)</option>
                  <option value="DE">DE (GER)</option>
                  <option value="JP">JP (JAP)</option>
                  <option value="CN">CN (CHI)</option>
                  <option value="AU">AU (ENG)</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar - Fully Responsive */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Responsive Sizing */}
            <div className="flex items-center space-x-2">
              <img
                src={Logo}
                alt="NESSA Logo"
                className="h-8 sm:h-10 md:h-12 w-32 sm:w-36 md:w-40"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Navbar Links - Desktop */}
            <div ref={desktopDropdownRef} className="hidden md:flex items-center space-x-8 lg:space-x-12 xl:space-x-16">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>

              <div className="relative">
                <button
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                  onClick={() => toggleDesktopDropdown('solutions')}
                >
                  Solutions {openDesktopDropdown === 'solutions' ? '▲' : '▼'}
                </button>
                {openDesktopDropdown === 'solutions' && (
                  <div className="absolute bg-white shadow-md mt-2 rounded-md z-10">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Solution 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Solution 2</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                  onClick={() => toggleDesktopDropdown('products')}
                >
                  Products {openDesktopDropdown === 'products' ? '▲' : '▼'}
                </button>
                {openDesktopDropdown === 'products' && (
                  <div className="absolute bg-white shadow-md mt-2 rounded-md z-10">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Product 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Product 2</a>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-600 hover:text-blue-600">Corporates</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Insights</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>

              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu - Slides down */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 pb-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>

                <div>
                  <button
                    className="text-gray-600 hover:text-blue-600 w-full text-left flex justify-between items-center"
                    onClick={() => toggleDropdown('solutions')}
                  >
                    Solutions
                    <span>{openDropdown === 'solutions' ? '▲' : '▼'}</span>
                  </button>
                  {openDropdown === 'solutions' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a href="#" className="block text-gray-600 hover:text-blue-600">Solution 1</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600">Solution 2</a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    className="text-gray-600 hover:text-blue-600 w-full text-left flex justify-between items-center"
                    onClick={() => toggleDropdown('products')}
                  >
                    Products
                    <span>{openDropdown === 'products' ? '▲' : '▼'}</span>
                  </button>
                  {openDropdown === 'products' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <a href="#" className="block text-gray-600 hover:text-blue-600">Product 1</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600">Product 2</a>
                    </div>
                  )}
                </div>

                <a href="#" className="text-gray-600 hover:text-blue-600">Corporates</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Insights</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>

                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center">
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
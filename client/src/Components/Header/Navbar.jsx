import { CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { IoEarthOutline } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../../assets/images/navbar/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen overflow-hidden text-xl">
      <div className="bg-[var(--primary-bg-color)] p-4 px-[3vw] w-screen">
        <div className="mx-auto flex justify-between items-center">
          <div className="flex max-lg:hidden gap-4 items-center">
            <div className="flex items-center">
              <CiMail className="w-5 h-5 text-white" />
              <span className="text-white ml-2">info@nessa.in</span>
            </div>
            <div className="flex items-center ml-4">
              <IoCallOutline className="w-5 h-5 text-white" />
              <span className="text-white ml-2">+91-79-2970-1779</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex max-sm:w-[170px] items-center bg-[#2672BE] rounded-full px-3 py-1">
              <CiSearch className="w-5 h-5 text-white" />
              <input
                type="text"
                placeholder="Search Product"
                className="ml-2 max-sm:w-[120px] outline-none bg-[rgb(38,114,190)] text-white placeholder:text-[#ffffffe5]"
              />
            </div>
            <div className="flex items-center ml-4">
              <IoEarthOutline className="w-5 h-5 text-white" />
              <span className="text-white ml-2">IN(ENG)</span>
              <FaCaretDown className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 px-[3vw] w-screen relative">
        <div className="mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[80px] w-[200px] object-contain"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex gap-[4vw] px-[30px] items-center">
            <Link to="/" className="text-black">
              Home
            </Link>
            <Link to="/solutions" className="text-black flex items-center gap-1">
              Solutions
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </Link>
            <Link to="/allproducts" className="text-black flex items-center gap-1">
              Products
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </Link>
            <div className="text-black flex items-center gap-1">
              Corporates
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </div>
            <div className="text-black">Insights</div>
            <Link to="/aboutus" className="text-black">
              About Us
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-black p-2 z-50"
            >
              {isMenuOpen ? (
                <IoClose className="w-8 h-8" />
              ) : (
                <IoMenu className="w-8 h-8" />
              )}
            </button>
          </div>

          <Link
            to="/contactus"
            className="bg-[var(--primary-bg-color)] text-white px-4 py-2 rounded ml-8 max-sm:hidden"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden fixed top-[132px] left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-100%] opacity-0 invisible'
          } z-40`}
        >
          <div className="flex flex-col p-4">
            <Link to="/" className="py-2 text-black hover:bg-gray-100 px-4">
              Home
            </Link>
            <Link to="/solutions" className="py-2 text-black hover:bg-gray-100 px-4 flex items-center justify-between">
              Solutions
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </Link>
            <Link to="/allproducts" className="py-2 text-black hover:bg-gray-100 px-4 flex items-center justify-between">
              Products
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </Link>
            <div className="py-2 text-black hover:bg-gray-100 px-4 flex items-center justify-between">
              Corporates
              <IoIosArrowDown className="w-4 h-4 text-black" />
            </div>
            <div className="py-2 text-black hover:bg-gray-100 px-4">
              Insights
            </div>
            <Link to="/aboutus" className="py-2 text-black hover:bg-gray-100 px-4">
              About Us
            </Link>
            <Link to="/contactus" className="sm:hidden py-2 text-black hover:bg-gray-100 px-4">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
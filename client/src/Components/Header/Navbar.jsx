import { CiMail } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { IoEarthOutline } from 'react-icons/io5'
import { FaCaretDown } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import logo from '../../assets/images/navbar/logo.svg'
import { BiSolidPlaneAlt } from 'react-icons/bi'
import { MdPermContactCalendar, MdStadium, MdSupportAgent } from 'react-icons/md'
import { FaCarTunnel, FaGasPump, FaGears, FaRoad } from 'react-icons/fa6'
import { GiHazardSign, GiMineWagon, GiShipBow } from 'react-icons/gi'
import { GiRefinery } from 'react-icons/gi'
import { GiForest } from 'react-icons/gi'
import { PiSolarPanel } from 'react-icons/pi'
import { AnimatePresence, motion } from 'framer-motion'
import { GrResources } from 'react-icons/gr'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [soluitonOpen, setsoluitonOpen] = useState(false)
    const [corporateOpen, setcorporateOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: 'easeOut'
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: 'easeIn'
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.2
            }
        })
    }

    const solutionsDropdown = [
        {
            logo: <BiSolidPlaneAlt className={`text-[#1E90FF]  bg-[#1E90FF] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/airport',
            title: 'Airport'
        },
        {
            logo: <GiMineWagon className={`text-[#FF8C00]  bg-[#FF8C00] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/mines',
            title: 'Mines'
        },
        {
            logo: <MdStadium className={`text-[#9370DB]  bg-[#9370DB] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/stadium',
            title: 'Stadium'
        },
        {
            logo: <FaGasPump className={`text-[#FF6347]  bg-[#FF6347] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/petrolpump',
            title: 'PetrolPump'
        },
        {
            logo: <GiRefinery className={`text-[#32CD32]  bg-[#32CD32] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/refinery',
            title: 'Refinery'
        },
        {
            logo: <FaRoad className={`text-[#4169E1]  bg-[#4169E1] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/highways',
            title: 'Highways'
        },
        {
            logo: <FaCarTunnel className={`text-[#FFB6C1]  bg-[#FFB6C1] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/tunnels',
            title: 'Tunnels'
        },
        {
            logo: <GiForest className={`text-[#32CD32]  bg-[#32CD32] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/rural',
            title: 'Rural, Hilly & Forest Areas',
            color: '#'
        },
        {
            logo: <GiShipBow className={`text-[#98FB98]  bg-[#98FB98] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/ports',
            title: 'Ports & Logistic Parks'
        },
        {
            logo: <GiHazardSign className={`text-[#FF4500]  bg-[#FF4500] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/hazardous',
            title: 'Hazardous Areas'
        },
        {
            logo: <GiRefinery className={`text-[#FFD700]  bg-[#FFD700] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/thermalpowerplant',
            title: 'Thermal Power Plants'
        },
        {
            logo: <PiSolarPanel className={`text-[#FFA07A]  bg-[#FFA07A] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/solutions/solarpark',
            title: 'Solar Parks'
        }
    ]

    const CorporateDropdown = [
        {
            logo: <GrResources className={`text-[#0074E0]  bg-[#0074E0] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/resources',
            title: 'Resources'
        },
        {
            logo: <FaGears className={`text-[#FF881B]  bg-[#FF881B] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/valueAddedServices',
            title: 'Value Added Services'
        },
        {
            logo: <MdPermContactCalendar className={`text-[#0F00E0]  bg-[#0F00E0] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/contactUs',
            title: 'Contact Us'
        },
        {
            logo: <MdSupportAgent className={`text-[#EF2D28]  bg-[#EF2D28] bg-opacity-30 w-[35px] h-[35px] rounded-full p-2`} />,
            link: '/support',
            title: 'Support'
        }
    ]

    return (
        <div className="w-screen  text-xl">
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

            <div className="bg-white p-4 px-[3vw] w-screen z-[999999] relative">
                <div className="mx-auto flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[80px] w-[200px] object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex gap-[4vw] px-[30px] items-center">
                        <Link
                            to="/"
                            className="text-black">
                            Home
                        </Link>
                        <Link className="text-black flex items-center gap-1 relative">
                            <div className=" w-full justify-between px-4 flex items-center gap-1">
                                <Link
                                    to="/solutions"
                                    className="">
                                    Solutions
                                </Link>
                                <motion.div
                                    animate={{ rotate: soluitonOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}>
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setsoluitonOpen(!soluitonOpen)
                                            setcorporateOpen(false)
                                        }}
                                        className="w-5 h-5 text-black "
                                    />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {soluitonOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="w-[600px] shadow-2xl grid grid-cols-2 text-base rounded-xl bg-white p-[30px] absolute top-[110%] left-[-100%] z-[99]">
                                        {solutionsDropdown.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                custom={index}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible">
                                                <Link
                                                    to={item.link}
                                                    className="w-[300px]">
                                                    <div className="flex w-full gap-[10px] mb-2 items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                                        <div className="flex items-center justify-center text-3xl">{item.logo}</div>
                                                        <h1>{item.title}</h1>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Link>
                        <Link
                            to="/allproducts"
                            className="text-black flex items-center gap-1">
                            Products
                        </Link>
                        <Link className="text-black flex items-center gap-1 relative">
                            Corporates
                            <motion.div
                                animate={{ rotate: corporateOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}>
                                <IoIosArrowDown
                                    onClick={() => {
                                        setcorporateOpen(!corporateOpen)
                                        setsoluitonOpen(false)
                                    }}
                                    className="w-5 h-5 text-black"
                                />
                            </motion.div>
                            <AnimatePresence>
                                {corporateOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="w-[300px] shadow-2xl  text-base rounded-xl bg-white p-[30px] absolute top-[120%] left-[-50%] z-[99]">
                                        {CorporateDropdown.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                custom={index}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible">
                                                <Link
                                                    to={item.link}
                                                    className="w-[300px]">
                                                    <div className="flex w-full gap-[10px] mb-2 items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                                        <div className="flex items-center justify-center text-3xl">{item.logo}</div>
                                                        <h1>{item.title}</h1>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Link>
                        <div className="text-black">Insights</div>
                        <Link
                            to="/aboutus"
                            className="text-black">
                            About Us
                        </Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <div className="xl:hidden flex items-center gap-4">
                        <button
                            onClick={toggleMenu}
                            className="text-black p-2 z-50">
                            {isMenuOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
                        </button>
                    </div>

                    <Link
                        to="/contactus"
                        className="bg-[var(--primary-bg-color)] text-white px-4 py-2 rounded ml-8 max-sm:hidden">
                        Contact us
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`xl:hidden fixed top-[132px] left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
                        isMenuOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-100%] opacity-0 invisible'
                    } z-40`}>
                    <div className="flex flex-col p-4">
                        <Link
                            to="/"
                            className="py-2 text-black hover:bg-gray-100 px-4">
                            Home
                        </Link>
                        <div className="text-black relative">
                            <div className=" w-full justify-between px-4 flex items-center gap-1">
                                <Link
                                    to="/solutions"
                                    className="">
                                    {' '}
                                    Solutions
                                </Link>
                                <motion.div
                                    animate={{ rotate: soluitonOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}>
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setsoluitonOpen(!soluitonOpen)
                                        }}
                                        className="w-5 h-5 text-black "
                                    />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {soluitonOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="w-full  grid grid-cols-2 text-base rounded-xl bg-white px-[30px] max-sm:px-0   ">
                                        {solutionsDropdown.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                custom={index}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible">
                                                <Link
                                                    to={item.link}
                                                    className="w-[300px]">
                                                    <div className="flex w-full gap-[10px] mb-2 items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                                        <div className="flex items-center justify-center text-3xl">{item.logo}</div>
                                                        <h1>{item.title}</h1>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link
                            to="/allproducts"
                            className="py-2 text-black hover:bg-gray-100 px-4 flex items-center justify-between">
                            Products
                        </Link>
                        <div className="text-black relative">
                            <div className=" w-full justify-between px-4 flex items-center gap-1">
                                <div className="">
                                    Corporates
                                </div>
                                <motion.div
                                    animate={{ rotate: soluitonOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}>
                                    <IoIosArrowDown
                                        onClick={() => {
                                            setcorporateOpen(!corporateOpen)
                                        }}
                                        className="w-5 h-5 text-black "
                                    />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {corporateOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="w-full  grid grid-cols-2 text-base rounded-xl bg-white px-[30px] max-sm:px-0   ">
                                        {CorporateDropdown.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                custom={index}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible">
                                                <Link
                                                    to={item.link}
                                                    className="w-[300px]">
                                                    <div className="flex w-full gap-[10px] mb-2 items-center hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                                                        <div className="flex items-center justify-center text-3xl">{item.logo}</div>
                                                        <h1>{item.title}</h1>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="py-2 text-black hover:bg-gray-100 px-4">Insights</div>
                        <Link
                            to="/aboutus"
                            className="py-2 text-black hover:bg-gray-100 px-4">
                            About Us
                        </Link>
                        <Link
                            to="/contactus"
                            className="sm:hidden py-2 text-black hover:bg-gray-100 px-4">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

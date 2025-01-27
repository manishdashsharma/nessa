import { aboutUsHardCodedData, aboutUsPara1, aboutUsPara2, nessaEdgeItems, whoWeAre } from './AboutUsConfig'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import ProductAndTestingSwiper from './ProductAndTestingSwiper'
import CertificatesSwiper from './CertificatesSwiper'
import hero from '../../assets/images/solutionsImages/hero.png'
import ourVision from '../../assets/images/aboutUs/ourVision.png'
import ourMission from '../../assets/images/aboutUs/ourMission.png'
import customersegment from '../../assets/images/aboutUs/customersegment.svg'
import Navbar from '../../Components/Header/Navbar'
import SideComponent from '../../Components/sideComponent/SideComponent'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PartnersReviewsSwiper from '../../Components/partnerreviews/PartnersReviewsSwiper'
import demoVideo from '../../assets/images/demoVideo.mp4'
import Footer from '../../Components/Footer'
import { aboutUsPageUtilsApi } from '../../Utils/Utils'
import { fetchUtilsData } from '../../services/api.services'
import TeamSwiper from './TeamSwiper'
import InvestorSwiper from './InvestorSwiper'

const AboutUs = () => {
    const [loading, setloading] = useState(false)

const [team, setteam] = useState([])
const [investor, setinvestor] = useState([])
const [productAndTesting, setproductAndTesting] = useState([])
useEffect(() => {
    const fetchAboutUsData = async () => {
        try {
            setloading(true)
            const response = await fetchUtilsData(aboutUsPageUtilsApi)
            if (response?.data?.utilsData) {
                setproductAndTesting(response.data.utilsData.productAndTestingFacilities || [])
                setteam(response.data.utilsData.team || [])
                setinvestor(response.data.utilsData.investor || [])
            } else {
                console.warn('Invalid data structure', response.data)
               
            }
        } catch (error) {
            console.error('Error fetching data:', error)
             setproductAndTesting(aboutUsHardCodedData.utilsData.productAndTestingFacilities)
             setteam(aboutUsHardCodedData.utilsData.team)
             setinvestor(aboutUsHardCodedData.utilsData.investor)
        } finally {
            setloading(false)
        }
    }

    fetchAboutUsData()
}, [])

    const whyChooseNessaBoxData = [
        {
            title: '16+ Years of Expertise',
            description: 'Every Nessa product is designed and manufactured at our state-of-the-art facility in Ahmedabad, spanning 17,000 sq. ft.'
        },
        {
            title: 'Dedicated R&D Hub',
            description: 'Our in-house Nessa Technology & Innovation Centre in Ahmedabad is the engine of our progress.'
        },
        {
            title: 'Trusted by PSUs and Beyond',
            description:
                'Recognized and approved by numerous Public Sector Undertakings (PSUs) across India, our products reflect trust, durability, and quality.'
        }
    ]

    const [hover, sethover] = useState('')

    const whyChooseNessaBox = (item, index) => {
        return (
            <div
                key={index}
                onMouseEnter={() => sethover(index)}
                onMouseLeave={() => sethover('')}
                className="w-[22vw] pt-[20px] rounded-2xl shadow-md max-md:w-full relative overflow-hidden cursor-pointer"
                style={{
                    background: 'linear-gradient(to right, #841D84, #3DC3BB, #FF8983)'
                }}>
                <AnimatePresence>
                    {hover === index && (
                        <motion.div
                            key="overlay"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut'
                            }}
                            className="absolute inset-0 rounded-2xl bg-blue-500"
                        />
                    )}
                </AnimatePresence>
                <div className="border-2 h-full border-blue-500 bg-white w-full rounded-2xl p-6 shadow-md">
                    <div className="flex items-center mb-4 relative z-[2]">
                        <RiLightbulbFlashLine className={`text-4xl  ${hover === index ? 'text-white ' : 'text-blue-500'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 relative z-[2]  ${hover === index ? 'text-white ' : 'text-blue-500'} `}>
                        {item.title}
                    </h3>
                    <p className={`relative z-[2]  ${hover === index ? 'text-white ' : 'text-black'}`}>{item.description}</p>
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            </div>
        )
    }

    return (
        <div className="w-full overflow-hidden">
            <Navbar />
            <SideComponent />

            <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
                <img
                    className="w-full h-full object-cover absolute "
                    src={hero}
                    alt=""
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold w-full text-center text-white ml-[5vw] relative z-[2]">About Us</h1>
            </div>

            <div className="w-full min-h-[300px] relative py-[50px] px-[5vw]">
                <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 left-[-7vw] top-[-3vw]   rounded-full z-[-1]"></div>

                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Lighting the Future: About Nessa <br />
                    <span className="text-blue-500"> Illumination</span> Technologies
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
                <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">
                    Brightening lives with innovative, sustainable, and efficient lighting solutions.
                </div>
            </div>

            <div className="w-full h-fit px-[5vw] pb-[50px]">
                <video
                    className="w-full h-fit object-cover bg-gray-300 rounded-xl"
                    src={demoVideo}
                    autoPlay
                    muted
                    loop
                    alt="">
                    {' '}
                </video>
            </div>

            {/* about us para */}
            <div
                className=" w-full "
                style={{ background: 'linear-gradient(to bottom, #f7faff, #deeefc)' }}>
                <div className="w-full min-h-[300px] relative py-[50px] px-[5vw]">
                    <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                        About
                        <span className="text-blue-500"> US</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                    </div>
                    <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">{aboutUsPara1}</div>
                    <div className="relative mt-7 text-xl px-[5vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">{aboutUsPara2}</div>
                </div>
            </div>

            {/* our vision and Mission */}
            <div className="w-full text-xl flex max-md:flex-col min-h-[200px] relative p-[5vw]">
                <div className="w-1/2  max-md:w-full max-md:h-fit flex flex-col items-center gap-5 p-[30px] text-center ">
                    <img
                        className="h-[200px]"
                        src={ourVision}
                        alt=""
                    />
                    <h1 className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                        Our
                        <span className="text-blue-500"> Vision</span>
                    </h1>
                    <h1 className="px-[50px]">
                        {' '}
                        To become one of the best and most preferred lighting solution providers in domestic as well as international market.
                    </h1>
                </div>

                <div
                    className="min-h-[100px] w-[2px] max-md:hidden"
                    style={{
                        background: 'linear-gradient(to bottom, transparent, #0074E0, transparent)'
                    }}></div>

                <div className="w-1/2  max-md:w-full max-md:h-fit flex flex-col items-center gap-5 p-[30px] text-center ">
                    <img
                        className="h-[200px]"
                        src={ourMission}
                        alt=""
                    />
                    <h1 className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                        Our
                        <span className="text-blue-500"> Mission</span>
                    </h1>
                    <h1 className="px-[50px]"> To work as a team innovatively and dedicatedly to create safe & reliable products and services.</h1>
                </div>
            </div>

            {/* why we are */}
            <div className="py-[5vw]  ">
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Why we
                    <span className="text-blue-500"> are</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
                <div className="relative mt-7 text-xl px-[10vw] mb-4 leading-8 text-center text-zinc-900 max-md:max-w-full">{whoWeAre.para}</div>

                <div className="grid grid-cols-3 justify-items-center max-md:grid-cols-1 gap-4 px-[5vw] py-8">
                    {whyChooseNessaBoxData.map((item, index) => whyChooseNessaBox(item, index))}
                </div>
            </div>

            {/* the nessa edge */}
            <div
                className=" w-full py-[50px] "
                style={{ background: 'linear-gradient(to bottom, #f7faff, #deeefc)' }}>
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Nessa
                    <span className="text-blue-500"> Edge</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>

                <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-[5vw] mt-[50px] gap-20 justify-items-center">
                    {nessaEdgeItems.map((item, index) => (
                        <div
                            key={index}
                            className=" flex flex-col items-center gap-5 ">
                            <img
                                className="w-[80px] h-[80px]"
                                src={item.img}
                                alt=""
                            />
                            <h1 className="text-xl text-center">{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* our Team and Investor */}
            <div className="w-full py-[50px]">
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Our Team
                    <span className="text-blue-500"> &</span> Investor
                </div>
                <div className="w-full flex justify-center mb-5">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>

              
                   <TeamSwiper team={team} />

                    <InvestorSwiper investor={investor}/>
              
            </div>

            {/* customer segment */}

            <div
                className=" w-full py-[50px] "
                style={{ background: 'linear-gradient(to bottom, #f7faff, #deeefc)' }}>
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Customer
                    <span className="text-blue-500"> Segment</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>

                <div className="px-[5vw] w-full flex justify-center">
                    <img
                        className="mt-[50px] "
                        src={customersegment}
                        alt=""
                    />
                </div>
            </div>

            {/* product and testing */}
            <div className="w-full py-[50px]">
                <div className=" px-[5vw] text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Product
                    <span className="text-blue-500"> & Testing</span> Facilities
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
                <div className=" px-[5vw] ">
                    <ProductAndTestingSwiper data={productAndTesting} />
                </div>
            </div>
            {/*  certificates */}
            <div className="w-full py-[50px] px-[5vw]">
                <div className=" px-[5vw] text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    <span className="text-blue-500"> Certification</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
                <CertificatesSwiper />
            </div>

            <div className="w-full px-[5vw] py-[100px] flex max-md:flex-col">
                <div className=" px-[5vw] text-5xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Quality <br />
                    <span className="text-blue-500"> Policy</span>
                </div>
                <div className="min-h-[100px] w-[5px] max-md:hidden bg-blue-500 "></div>
                <div className=" px-[5vw] text-xl flex items-center justify-center text-black z-[2] relative">
                    <h1>
                        {' '}
                        To be World Class supplier of <span className="text-blue-500"> LED Lights, Solar LED Lights and Drivers, </span> which meet
                        the Customer’s expectations through Teamwork and continuous <span className="text-blue-500">Improvement and Innovation.</span>{' '}
                    </h1>
                </div>
            </div>

            {/* partners review */}
            <PartnersReviewsSwiper />

            <Footer />
        </div>
    )
}

export default AboutUs

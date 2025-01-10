import { Link, useParams } from 'react-router-dom'
import partner1 from '../../assets/images/homepageimages/partner1.png'
import partner2 from '../../assets/images/homepageimages/partner2.png'
import partner3 from '../../assets/images/homepageimages/partner3.png'
import Navbar from '../../Components/Header/Navbar'
import SideComponent from '../../Components/sideComponent/SideComponent'
import PartnersReviewsSwiper from '../../Components/partnerreviews/PartnersReviewsSwiper'
import { fetchUtilsData, solutionData } from '../../services/api.services'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Footer from '../../Components/Footer'
import { solutionDetailPage } from '../../Utils/Utils'

const SolutionDetail = () => {
    const { id  } = useParams() 

    const [loading, setloading] = useState(true)
    const [solution, setsolution] = useState([])

    useEffect(() => {
        const fetchSolution = async () => {
            try {
                setloading(true)

                const response = await solutionData(id)
                if (response?.data) {
                    setsolution(response.data)
                }
            } catch (error) {
                console.error('Error fetching product data:', error)
                toast.error('Failed to load products')
            } finally {
                setloading(false)
            }
        }

        fetchSolution()
    }, [])


    
    const [caseStudiesData, setcaseStudiesData] = useState([])
    useEffect(() => {
        const fetchCaseStudiesUtils = async () => {
            try {
                // setloading(true)

                const response = await fetchUtilsData(solutionDetailPage.caseStudiesUtilsId)
                if (response?.data) {
                    setcaseStudiesData(response.data.utilsData.caseStudiesUtils)
                    console.log(response.data.utilsData.caseStudiesUtils)
                }
            } catch (error) {
                console.error('Error fetching product data:', error)
                toast.error('Failed to load products')
            } finally {
                // setloading(false)
            }
        };

        fetchCaseStudiesUtils()
    },[])


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
                    src={solution.tumbnail} // dynamic poster
                    alt=""
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">
                    {/* dynamic heading */}
                    {solution.title}
                </h1>
            </div>

            {/* para for solution detail */}

            <div className="w-full h-fit flex gap-10 max-md:flex-col px-[5vw] py-[5vw] relative">
                <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 right-[-7vw] top-[-3vw]   rounded-full z-[-1]"></div>

                <div className="w-1/2 max-md:w-full">
                    <div className=" text-4xl font-semibold leading-snug text-black z-[2] relative">{solution.subTitle}</div>
                    <div className="w-full ">
                        <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                    </div>
                    <div className="relative mt-7 text-xl  mb-4 leading-8 text-zinc-900 max-md:max-w-full">{solution.description}</div>
                </div>

                <div className="w-1/2 max-md:w-full max-md:h-[300px] bg-gray-500">
                    <img
                        className="w-full h-[400px] max-md:h-[300px] bg-gray-600"
                        src={solution.solutionImageUrl}
                        alt=""
                    />
                </div>
            </div>

            {/* related products */}

            <div className="">
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Sub-Applications and <br />
                    <span className="text-blue-500"> Related Products</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
            </div>

            {/* <div className="w-full  flex items-center justify-center gap-10 mt-[50px]">
                {solution.relatedProduct.map((product, index) => (
                    <img
                        key={index}
                        className="w-[80px] h-[80px] bg-gray-400 rounded-full mb-4"
                        src={image}
                        alt=""
                    />
                ))}
            </div> */}

            {solution.relatedProduct.map((item, index) => (
                <div
                    key={index}
                    className="w-full px-[5vw] mx-auto my-6 mt-[50px] font-sans text-lg text-gray-800 ">
                    {/* <img
                        className="w-[50px] h-[50px] bg-gray-400 rounded-full mb-4"
                        src=""
                        alt=""
                    /> */}
                    <div className="text-2xl font-bold text-blue-500">{item.title}</div>
                    <div className="mt-4 text-lg">
                        <strong>Application : </strong>
                        {item.application}
                    </div>
                    <div className="mt-6">
                        <strong>Products:</strong>
                        <div className="mt-2 space-y-4 ml-[40px] flex flex-col">
                            {item.products.map((productitem, i) => (
                                <Link to={`/product/${productitem.productId}`} key={i}>
                                    <strong> • {productitem.name}</strong> :{productitem.description}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* case studies */}
            <div className=" mt-[100px]">
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Case
                    <span className="text-blue-500"> Studies</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full justify-items-center mt-[50px] ">
                {caseStudiesData.map((item, index) => (
                    <div
                        key={index}
                        className=" w-[20vw] max-md:w-[40vw] max-sm:w-[90%] max-sm:mb-10 h-[30vw] max-md:h-fit  flex flex-col items-center ">
                        <img
                            className="bg-gray-400 h-[80%] "
                            src={item.poster}
                            alt=""
                        />

                        <Link to={item.downloadLink? item.downloadLink :''} download target='_blank'  className="bg-blue-500 w-full text-center py-[10px] mt-[20px] rounded-md text-white">Download</Link>
                    </div>
                ))}
            </div>

            {/* // our clients
            <div className=" mt-[100px]">
                <div className=" text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
                    Our
                    <span className="text-blue-500"> Clients</span>
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
                </div>
            </div>
            <div className="w-full flex-wrap flex items-center justify-center gap-20 mt-[50px]">
                // clients images path 
                {[partner1, partner2, partner3, partner1, partner3].map((image, index) => (
                    <img
                        key={index}
                        className="w-[100px] h-[100px] bg-gray-400 rounded-full mb-4"
                        src={image}
                        alt=""
                    />
                ))}
            </div> */}

            {/* partners review */}
            <PartnersReviewsSwiper />

            <Footer/>
        </div>
    )
}

export default SolutionDetail

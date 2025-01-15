import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPowerOff } from 'react-icons/fa'
import { GiSwordsPower } from 'react-icons/gi'
import { ImPower } from 'react-icons/im'

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('features')

    const tabs = [
        { id: 'features', label: 'Features & Benefits' },
        { id: 'specification', label: 'Specification' },
        { id: 'applications', label: 'Applications' }
    ]

    const specification = product.specification

    return (
        <div className="w-full mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Products
                <span className="text-blue-500"> Details</span>
            </h1>
            <div className="flex justify-center items-center mb-8">
                <div className="flex relative shrink-0 mt-4 h-2.5 bg-[var(--light-blue)] rounded-[50px] w-[51px]" />
            </div>

            {/* Tab buttons */}
            <div className="flex justify-center gap-4 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-2 max-sm:text-xs  rounded-full transition-all shadow-md ${
                            activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600  hover:bg-gray-300'
                        }`}>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}>
                    {activeTab === 'features' && (
                        <div className="grid grid-cols-3  max-sm:grid-cols-1 gap-12 gap-x-28  px-[5vw]  ">
                            {product.feature.highlighted.length >0 ?( product.feature.highlighted.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="h-[100px]  max-sm:h-fit  flex flex-col items-center justify-center rounded-xl border-2 border-blue-200 text-center">
                                    <h3 className="text-xl font-semibold">{feature}</h3>
                                </motion.div>
                            ))):(
                                <div className="text-center text-gray-600 ">
                                    No highlighted features found.
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'specification' && (
                        <div className="grid grid-cols-2 gap-4 gap-x-10 p-4 px-[5vw] max-md:grid-cols-1 ">
                            { Object.keys(specification).length > 0 ?( Object.entries(specification).map(([key, value], index) => (
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={key}
                                    className="grid grid-cols-2 gap-6  py-[20px] border-b-2 border-blue-200 shadow-md rounded-xl px-[20px]">
                                    <div className="font-semibold w-fit text-2xl text-gray-700">{key}</div>
                                    <div className="text-blue-500 w-fit">{value}</div>
                                </motion.div>
                            ))):(
                                <div className="text-center text-gray-600 ">
                                    No specification found.
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'applications' && (
                        <div className="text-center text-gray-600 ">
                            <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-8  ">
                                {product.applicationImageUrls.length > 0 ? (  product.applicationImageUrls.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="h-[200px] max-sm:h-fit  flex flex-col items-center justify-center text-center">
                                        <img
                                            className="w-[200px] h-[200px] object-cover bg-gray-300"
                                            src={image}
                                            alt="Application Image"
                                        />
                                    </motion.div>
                                ))):(
                                    <div className="text-center text-gray-600 ">
                                        No applications found.
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ProductTabs

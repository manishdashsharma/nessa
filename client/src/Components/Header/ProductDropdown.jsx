import React, { act, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { duration } from '@mui/material'

const ProductDropdown = ({ setIsMenuOpen }) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null)
    const [categoryOpen, setcategoryOpen] = useState(false)

    const categories = {
        'AC Lighting': [
            'Street Light',
            'Flood Light',
            'Highway Light',
            'Well Glass Light',
            'Fission LED Street Light',
            'Fission Flood Light',
            'AC High Mast'
        ],
        Electronics: ['Drivers', 'Solar Charge Controllers'],
        Solar: [
            'Semi Integrated Solar',
            'LED Street Light (Two in One)',
            'Integrated Solar',
            'LED Street Light (All in One)',
            'Solar LED Street Light',
            'Solar Pumps',
            'Solar Roof Top'
        ],
        'Hybrid Lights': ['Hybrid Solar Street Light'],
        'Indoor Lighting': ['Surface', 'Panel', 'Downlight', 'Tube Light']
    }

    const handleProductClick = (category, subcategory) => {
        navigate('/allproducts', {
            state: {
                selectedCategory: category,
                selectedSubcategory: subcategory
            }
        })
        setIsOpen(false)
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
                duration: 0.2,
                ease: 'easeIn'
            }
        }
    }

    return (
        <>
            <div
                className="relative my-2  max-xl:hidden"
                // onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => {
                    setIsOpen(false)
                    setActiveCategory(null)
                }}>
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    className="flex items-center gap-1 cursor-pointer justify-between w-[100%] px-4">
                    <span>Products</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}>
                        <IoIosArrowDown className="w-5 h-5" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
                            {Object.entries(categories).map(([category, subcategories], index) => (
                                <div
                                    key={category}
                                    className="relative"
                                    onMouseEnter={() => {
                                        setActiveCategory(category)
                                    }}>
                                    <motion.div
                                    
                                        className="px-4 py-2 text-lg hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                        <span>{category}</span>
                                        <IoIosArrowDown className={`w-4 h-4 ${category === activeCategory ? 'rotate-180 transition-all' : ''} `} />
                                    </motion.div>

                                    {activeCategory === category && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="absolute left-full top-0 bg-white shadow-lg rounded-lg py-2 min-w-[250px]">
                                            {subcategories.map((subcategory) => (
                                                <div
                                                    key={subcategory}
                                                    className="px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        handleProductClick(category, subcategory)
                                                        setIsMenuOpen(false)
                                                    }}>
                                                    {subcategory}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* mobile view */}
            <div className="relative my-2 hidden max-xl:block">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1 cursor-pointer justify-between w-[100%] px-4">
                    <span>Products</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}>
                        <IoIosArrowDown className="w-5 h-5" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className=" top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
                            {Object.entries(categories).map(([category, subcategories]) => (
                                <div
                                    key={category}
                                    className="relative"
                                    onClick={() => {
                                        setActiveCategory(category === activeCategory ? '' : category)
                                        // setcategoryOpen(!categoryOpen)
                                    }}>
                                    <div className="px-4  border-b-2  py-2 text-lg hover:bg-gray-100 flex justify-between items-center cursor-pointer">
                                        <span>{category}</span>
                                        <IoIosArrowDown
                                            className={`w-4 h-4 transition-all ${category === activeCategory ? 'rotate-180 ' : 'rotate-0 '} `}
                                        />
                                    </div>

                                    {activeCategory === category && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className=" text-base  left-full top-0 bg-white shadow-lg rounded-lg py-2 px-5 min-w-[200px]">
                                            {subcategories.map((subcategory) => (
                                                <div
                                                    key={subcategory}
                                                    className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        handleProductClick(category, subcategory)
                                                        setIsMenuOpen(false)
                                                    }}>
                                                    {subcategory}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default ProductDropdown
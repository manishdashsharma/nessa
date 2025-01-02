import { useEffect, useState } from 'react'
// import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import product from '../../assets/images/product.png'
import {  fetchProduct, increaseIsEnquired } from '../../services/api.services'
import toast from 'react-hot-toast'

// categories structure
const categories = {
    'AC Lighting': [
        'Street Light',
        'Flood Light',
        'Highway Light',
        'Wall Glass Light',
        'Fission Led Street Light',
        'Fission Flood Light',
        'AC High Mast'
    ],
    'Solar': ['Solar LED Street Light', 'Solar Garden Light', 'Solar Panel', 'Solar Inverter'],
    'Electronics': ['LED Driver', 'Power Supply', 'Controllers'],
    'Indoor Lights': ['Panel Light', 'Down Light', 'Spot Light', 'Strip Light']
}



const ITEMS_PER_PAGE = 12

export default function ShowProducts() {

   const [products, setProducts] = useState([])
   const [loading, setloading] = useState(true)
   
   // get products from api 
   useEffect(() => {
       const fetchData = async () => {
           try {
               
               const params = {
                   query: 'all',
                   limit: 'all',
                   offset: 0
               }
               const data = await fetchProduct(params)
               if (data) {
                   setProducts(data.data.products)
                    // Logs the product data
               }
           } catch (error) {
               console.error('Error fetching product data:', error)
           }finally{
               setloading(false)
           }
       }

       fetchData()
   }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [expandedCategories, setExpandedCategories] = useState({
        'AC Lighting': true
    })
    const [selectedFilters, setSelectedFilters] = useState([])

    // filtering logic
    const filteredProducts = products.filter((product) => {
        if (selectedFilters.length === 0) return true
        return selectedFilters.includes(product.subcategories)
    })

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE

    const displayedProducts = filteredProducts.slice(startIndex, endIndex)

    const toggleCategory = (category) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    const toggleFilter = (filter) => {
        setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
        setCurrentPage(1)
    }
    
    
  const [loadingProduct, setLoadingProduct] = useState(null)

  const enquireAdd = async (productId) => {
      try {
          setLoadingProduct(productId) // Set loading state for the current product
          const response = await increaseIsEnquired(productId)
          if (response.success) {
              toast.success('Enquiry added successfully')
          } else {
              toast.error('Enquiry failed')
          }
      } catch (error) {
          console.error(error)
          toast.error('An error occurred')
      } finally {
          setLoadingProduct(null) // Reset loading state
      }
  }

    return (
        <>
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex max-md:flex-col gap-6">
                    {/* Filters Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        <div className="border rounded-lg p-4 ">
                            <h2 className="text-lg font-semibold mb-4">Filters</h2>

                            {Object.entries(categories).map(([category, subcategories]) => (
                                <div
                                    key={category}
                                    className="mb-4 h-auto ">
                                    <button
                                        onClick={() => toggleCategory(category)}
                                        className="flex text-lg items-center justify-between w-full  text-left font-medium mb-2">
                                        {category}
                                        {expandedCategories[category] ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                                    </button>

                                    {expandedCategories[category] && (
                                        <div className="space-y-2 ml-2 ">
                                            {subcategories.map((subcategory) => (
                                                <label
                                                    key={subcategory}
                                                    className="flex items-center space-x-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedFilters.includes(subcategory)}
                                                        onChange={() => toggleFilter(subcategory)}
                                                        className="rounded border-gray-300 cursor-pointer"
                                                    />
                                                    <span className="text-md">{subcategory}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <p className="text-lg text-gray-600 mb-4">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} Results from total {filteredProducts.length}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-contain rounded-lg mb-4"
                                    />
                                    <div className="text-sm text-gray-600 mb-1">
                                        {product.categories} - {product.subcategories}
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                                    <button
                                        onClick={() => enquireAdd(product._id)}
                                        className={`w-full bg-white border border-blue-500 text-blue-500 rounded-[50px] py-2 transition-colors ${
                                            loadingProduct === product._id ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'
                                        }`}
                                        disabled={loadingProduct === product._id}>
                                        {loadingProduct === product._id ? 'Loading...' : 'Enquire Now'}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2 mt-8">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 border rounded disabled:opacity-50">
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter((page) => page === 1 || page === totalPages || Math.abs(currentPage - page) <= 2)
                                .map((page, index, array) => (
                                    <>
                                        {index > 0 && array[index - 1] !== page - 1 && (
                                            <span
                                                key={`ellipsis-${page}`}
                                                className="px-2">
                                                ...
                                            </span>
                                        )}
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-8 h-8 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'border hover:bg-gray-50'}`}>
                                            {page}
                                        </button>
                                    </>
                                ))}

                            <button
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 border rounded disabled:opacity-50">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

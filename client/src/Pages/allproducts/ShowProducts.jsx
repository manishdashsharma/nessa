import { useEffect, useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { fetchProduct, increaseIsEnquired } from '../../services/api.services'
import toast from 'react-hot-toast'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const categories = {
    'AC Lighting': [
        'Street Light', 'Flood Light', 'Highway Light', 'Wall Glass Light',
        'Fission Led Street Light', 'Fission Flood Light', 'AC High Mast'
    ],
    'Solar': ['Solar LED Street Light', 'Solar Garden Light', 'Solar Panel', 'Solar Inverter'],
    'Electronics': ['LED Driver', 'Power Supply', 'Controllers'],
    'Indoor Lights': ['Panel Light', 'Down Light', 'Spot Light', 'Strip Light']
}

const ITEMS_PER_PAGE = 12

export default function ShowProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalProducts, setTotalProducts] = useState(0)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const offset = (page - 1) * ITEMS_PER_PAGE
                const params = {
                    query: 'all',
                    limit: ITEMS_PER_PAGE,
                    offset
                }
                const data = await fetchProduct(params)
                if (data) {
                    setProducts(data.data.products)
                    setTotalProducts(data.data.total)
                }
            } catch (error) {
                toast.error('Failed to fetched data')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [page])

    const [expandedCategories, setExpandedCategories] = useState({
        'AC Lighting': true
    })
    const [selectedFilters, setSelectedFilters] = useState([])
    const [loadingProduct, setLoadingProduct] = useState(null)

    const filteredProducts = products.filter((product) => {
        if (selectedFilters.length === 0) return true
        return selectedFilters.includes(product.subcategories)
    })

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
        window.scrollTo(0, 0)
    }

    const toggleCategory = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    const toggleFilter = (filter) => {
        setSelectedFilters(prev => 
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        )
        setPage(1)
    }

    const enquireAdd = async (productId) => {
        try {
            setLoadingProduct(productId)
            const response = await increaseIsEnquired(productId)
            if (response.success) {
                toast.success('Enquiry added successfully')
            } else {
                toast.error('Enquiry failed')
            }
        } catch (error) {
            toast.error('An error occurred')
        } finally {
            setLoadingProduct(null)
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center h-96">Loading...</div>
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex max-md:flex-col gap-6">
                <div className="w-64 flex-shrink-0">
                    <div className="border rounded-lg p-4">
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        {Object.entries(categories).map(([category, subcategories]) => (
                            <div key={category} className="mb-4 h-auto">
                                <button
                                    onClick={() => toggleCategory(category)}
                                    className="flex text-lg items-center justify-between w-full text-left font-medium mb-2"
                                >
                                    {category}
                                    {expandedCategories[category] ? 
                                        <FaChevronUp className="w-4 h-4" /> : 
                                        <FaChevronDown className="w-4 h-4" />
                                    }
                                </button>
                                {expandedCategories[category] && (
                                    <div className="space-y-2 ml-2">
                                        {subcategories.map((subcategory) => (
                                            <label
                                                key={subcategory}
                                                className="flex items-center space-x-2 cursor-pointer"
                                            >
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

                <div className="flex-1">
                    <p className="text-lg text-gray-600 mb-4">
                        Showing {((page - 1) * ITEMS_PER_PAGE) + 1}-
                        {Math.min(page * ITEMS_PER_PAGE, totalProducts)} 
                        Results from total {totalProducts}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gray-100 rounded-lg p-4 flex flex-col justify-between"
                            >
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
                                    className={`w-full bg-white border border-blue-500 text-blue-500 
                                        rounded-[50px] py-2 transition-colors ${
                                        loadingProduct === product._id ? 
                                            'opacity-50 cursor-not-allowed' : 
                                            'hover:bg-blue-50'
                                    }`}
                                    disabled={loadingProduct === product._id}
                                >
                                    {loadingProduct === product._id ? 'Loading...' : 'Enquire Now'}
                                </button>
                            </div>
                        ))}
                    </div>

                    <Stack spacing={2} alignItems="center" className="mt-8">
                        <Pagination 
                            count={Math.ceil(totalProducts / ITEMS_PER_PAGE)}
                            page={page}
                            onChange={handlePageChange}
                            color="primary"
                            size="large"
                            showFirstButton
                            showLastButton
                        />
                    </Stack>
                </div>
            </div>
        </div>
    )
}
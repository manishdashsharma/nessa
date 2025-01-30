import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import debounce from 'lodash/debounce'
import { useProducts } from '../../context/ProductContext'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState([])
    const { searchProducts, loading, products, getProducts } = useProducts()
    const navigate = useNavigate()

    // Fetch all products when component mounts
    useEffect(() => {
        if (!products.length) {
            getProducts()
        }
    }, [])

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            if (searchQuery) {
                const searchResults = searchProducts(searchQuery)
                setResults(searchResults)
            } else {
                setResults([])
            }
        }, 300)

        debouncedSearch()
        return () => debouncedSearch.cancel()
    }, [searchQuery, searchProducts])

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`)
        setSearchQuery('')
        setResults([])
    }

    return (
        <div className="relative">
            <div className="flex max-sm:w-[170px] items-center bg-[#2672BE] rounded-full px-3 py-1">
                <CiSearch className="w-5 h-5 text-white" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder={loading ? 'Loading products...' : 'Search Product'}
                    className="ml-2 max-sm:w-[120px] outline-none bg-[rgb(38,114,190)] text-white placeholder:text-[#ffffffe5]"
                    disabled={loading}
                />
            </div>

            {/* Results dropdown */}
            {(results.length > 0 || loading) && searchQuery && (
                <div className="absolute top-full left-0 mt-1 w-[300px] bg-white rounded-lg shadow-lg z-[99999999]">
                    {loading ? (
                        <div className="p-3 text-center text-gray-500">Loading...</div>
                    ) : (
                        <div className="max-h-[400px] overflow-y-auto">
                            {results.map((product) => (
                                <div
                                    key={product._id}
                                    onClick={() => handleProductClick(product._id)}
                                    className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0">
                                    <div className="flex items-center gap-3">
                                        {product.productImageUrl && product.productImageUrl[0] && (
                                            <img
                                                src={product.productImageUrl[0]}
                                                alt={product.name}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        )}
                                        <div>
                                            <div className="font-medium text-sm">{product.name}</div>
                                            <div className="text-xs text-gray-500">
                                                {product.categories} - {product.subcategories}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBar

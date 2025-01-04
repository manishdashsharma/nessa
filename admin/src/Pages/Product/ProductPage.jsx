import React, { useEffect, useState } from 'react'
import { getProduct } from '../../service/apiService';

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProduct('all', 10, 0)
            setProduct(response.data)
        }
        fetchProduct()
    }, [])
  return (
    <div>
      {product}
    </div>
  )
}

export default ProductPage

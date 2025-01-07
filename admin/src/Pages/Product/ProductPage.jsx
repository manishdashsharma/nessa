import { useEffect, useState } from 'react';
import { getProduct } from '../../service/apiService';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import ProductModal from '../../Components/Modal/ProductModal';
import { useNavigate } from 'react-router-dom';


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()

  const itemsPerPage = 2;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        navigate('/');
    }
}, [navigate]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await getProduct('all', itemsPerPage, (page - 1) * itemsPerPage);
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddProduct = (newProduct) => {
    console.log('New Product:', newProduct);
    setProducts([newProduct, ...products]); 
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Product List</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.productImageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-bold">{product.specification?.power}</span>
                <a
                  href={product.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 underline"
                >
                  Brochure
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
      <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleOpenModal}
      >
        <AddIcon />
      </button>

      <ProductModal
        open={openModal}
        onClose={handleCloseModal}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default ProductPage;

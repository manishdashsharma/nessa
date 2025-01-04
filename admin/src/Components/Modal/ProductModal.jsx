import { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ProductModal = ({ open, onClose, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    power: '',
    productImageUrl: '',
    brochureUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = () => {
    onAddProduct(newProduct);
    setNewProduct({
      name: '',
      description: '',
      power: '',
      productImageUrl: '',
      brochureUrl: ''
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form className="space-y-4">
          <TextField
            label="Product Name"
            name="name"
            fullWidth
            variant="outlined"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            variant="outlined"
            value={newProduct.description}
            onChange={handleInputChange}
          />
          <TextField
            label="Power"
            name="power"
            fullWidth
            variant="outlined"
            value={newProduct.power}
            onChange={handleInputChange}
          />
          <TextField
            label="Product Image URL"
            name="productImageUrl"
            fullWidth
            variant="outlined"
            value={newProduct.productImageUrl}
            onChange={handleInputChange}
          />
          <TextField
            label="Brochure URL"
            name="brochureUrl"
            fullWidth
            variant="outlined"
            value={newProduct.brochureUrl}
            onChange={handleInputChange}
          />
          <div className="flex justify-end">
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              className="ml-2"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ProductModal;

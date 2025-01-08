import { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import { motion } from 'framer-motion'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import PropTypes from 'prop-types'
import { getProduct, saveSolution, uploadFile } from '../../service/apiService'
import { toast } from 'react-hot-toast'

const SolutionsModel = ({ open, onClose,token }) => {
    const [formData, setFormData] = useState({
        title: '',
        subTitle: '',
        description: '',
        categories: 'Solutions',
        subcategories: '',
        thumbnail: null,
        solutionImageUrl: null,
        relatedProduct: [
            {
                title: '',
                application: '',
                products: []
            }
        ]
    })

    const [loading, setLoading] = useState(false)
    const [subcategoriesList] = useState([
        'Mines',
        'Factory',
        'Labs',
        'Airports',
        'Stadium',
        'Petrol Pump',
        'Refinery',
        'Highways',
        'Tunnels',
        'Rural, Hilly & Forest Areas',
        'Ports & Logistic Parks',
        'Hazardous Areas',
        'Thermal Power Plants',
        'Solar Parks'
    ])

    const [availableProducts, setAvailableProducts] = useState([])
    const [uploadsComplete, setUploadsComplete] = useState({ thumbnail: false, solutionImageUrl: false })

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProduct('all', 0, 0)
                const data = response.data.products
                console.log('this is data', data)

                const productDatas = data.map((element) => ({
                    productId: element._id,
                    name: element.name,
                    description: element.description
                }))
                setAvailableProducts(productDatas)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name.startsWith('relatedProduct.')) {
            const field = name.split('.')[1]
            setFormData((prev) => ({
                ...prev,
                relatedProduct: [
                    {
                        ...prev.relatedProduct[0],
                        [field]: value
                    }
                ]
            }))
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleFileUpload = async (e, type) => {
        const file = e.target.files[0]
        if (!file) return

        if (file.size > 1000000) {
            toast.error('File size must be less than 1MB')
            e.target.value = null
            return
        }

        setLoading(true)
        try {
            const uploadData = new FormData()
            uploadData.append('file', file)

            if (type === 'thumbnail') {
                uploadData.append('category', 'THUMBNAIL')
            } else if (type === 'solutionImageUrl') {
                uploadData.append('category', 'SOLUTION_IMAGE')
            } else {
                toast.error('Invalid upload type')
                return
            }

            const response = await uploadFile(uploadData)
            if (response.success) {
                setFormData((prev) => ({
                    ...prev,
                    [type]: response.data.fileUrl
                }))
                setUploadsComplete((prev) => ({ ...prev, [type]: true }))
                toast.success('File uploaded successfully')
            } else {
                toast.error('File upload failed')
            }
        } catch (error) {
            console.error('Upload failed:', error)
            toast.error('An error occurred during file upload')
        } finally {
            setLoading(false)
        }
    }

    const handleProductSelect = (e) => {
        const selectedProductIds = Array.from(e.target.selectedOptions, (option) => option.value)
        const selectedProducts = selectedProductIds.map((productId) => {
            const product = availableProducts.find((p) => p.productId === productId)
            return { productId: product.productId, name: product.name, description: product.description }
        })
        setFormData((prev) => ({ ...prev, relatedProduct: [{ ...prev.relatedProduct[0], products: selectedProducts }] }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!uploadsComplete.thumbnail || !uploadsComplete.solutionImageUrl) {
            toast.error('Please upload both thumbnail and solution image before submitting')
            return
        }

        setLoading(true)
        try {
            const response = await saveSolution(token,formData)
            if (response.success) {
                toast.success('Solution saved successfully')
                onClose()
            } else {
                toast.error('Solution save failed')
            }
            
        } catch (error) {
            console.error('Submission failed:', error)
            toast.error('An error occurred during submission')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(0, 0, 0, 0.7)'
            }}>
            <motion.div
                className="bg-white p-8 rounded-xl shadow-2xl w-[600px] max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 500 }}>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Solution</h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Subtitle */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                        <input
                            type="text"
                            name="subTitle"
                            value={formData.subTitle}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Subcategory */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subcategory</label>
                        <select
                            name="subcategories"
                            value={formData.subcategories}
                            onChange={handleInputChange}
                            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                            required>
                            <option value="">Select a subcategory</option>
                            {subcategoriesList.map((category) => (
                                <option
                                    key={category}
                                    value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Related Product Details */}
                    <div className="p-4 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Related Product Details</h3>
                        {/* Product Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Related Product Title</label>
                            <input
                                type="text"
                                name="relatedProduct.title"
                                value={formData.relatedProduct[0].title}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Related Product Application</label>
                            <input
                                type="text"
                                name="relatedProduct.application"
                                value={formData.relatedProduct[0].application}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Select Products</label>
                            <select
                                multiple
                                value={formData.relatedProduct[0].products.map((p) => p.productId)}
                                onChange={handleProductSelect}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
                                required>
                                {availableProducts.map((product) => (
                                    <option
                                        key={product.productId}
                                        value={product.productId}>
                                        {product.name}
                                    </option>
                                ))}
                            </select>
                            <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple products</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Upload Thumbnail */}
                        <FileUpload
                            label="Upload Thumbnail"
                            file={formData.thumbnail}
                            onUpload={(e) => handleFileUpload(e, 'thumbnail')}
                        />

                        <FileUpload
                            label="Upload Solution Image"
                            file={formData.solutionImageUrl}
                            onUpload={(e) => handleFileUpload(e, 'solutionImageUrl')}
                        />
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:opacity-90 transition-opacity ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={loading}>
                            {loading ? 'Saving...' : 'Save Solution'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </Modal>
    )
}

const FileUpload = ({ label, file, onUpload }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
        <label className="cursor-pointer block">
            <CloudUploadIcon className="text-gray-400 text-3xl mb-2" />
            <span className="block text-sm font-medium text-gray-700">{label}</span>
            <input
                type="file"
                onChange={onUpload}
                accept="image/*"
                className="hidden"
            />
            {file && (
                <div className="mt-2">
                    <p className="text-sm text-green-600">File uploaded</p>
                    <img
                        src={file}
                        alt="Preview"
                        className="mt-2 max-h-20 mx-auto"
                    />
                </div>
            )}
        </label>
    </div>
)

SolutionsModel.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    token: PropTypes.string
}
FileUpload.propTypes = {
    label: PropTypes.string.isRequired,
    file: PropTypes.object,
    onUpload: PropTypes.func.isRequired
}
export default SolutionsModel

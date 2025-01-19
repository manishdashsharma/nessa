import { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { toast } from 'react-hot-toast'
import { uploadFile } from '../../service/apiService'
const BlogModal = ({ open, onClose, token, blog }) => {
    const initialFormState = {
        title: '',
        tag: '',
        description: '',
        thumbnailImage: null,
        userImage: null,
        userName: '',
        content: ''
    }

    const [formData, setFormData] = useState(initialFormState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (blog) {
            setFormData({
                title: blog.title || '',
                tag: blog.tag || '',
                description: blog.description || '',
                thumbnailImage: blog.thumbnailImage || null,
                userImage: blog.userImage || null,
                userName: blog.userName || '',
                content: blog.content || ''
            })
        } else {
            setFormData(initialFormState)
        }
    }, [blog])

    useEffect(() => {
        if (!open) {
            setFormData(initialFormState)
        }
    }, [open])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEditorChange = (content) => {
        setFormData(prev => ({
            ...prev,
            content
        }))
    }

    const handleFileUpload = async (e, type) => {
        const files = e.target.files
        if (!files.length) return
    
        const maxFileSize = 1000000 // 1MB
        const newUrls = []
    
        setLoading(true)
        try {
            for (let file of files) {
                if (file.size > maxFileSize) {
                    toast.error('File size must be less than 1MB')
                    continue
                }
    
                const uploadData = new FormData()
                uploadData.append('file', file)
                uploadData.append('category', type.toUpperCase())
    
                const response = await uploadFile(uploadData)
                if (response.success) {
                    newUrls.push(response.data)
                } else {
                    toast.error('File upload failed')
                }
            }
    
            if (newUrls.length) {
                setFormData(prev => ({ 
                    ...prev, 
                    [type]: newUrls[0] 
                }))
                toast.success('File uploaded successfully')
            }
        } catch (error) {
            console.error('Upload failed:', error)
            toast.error('File upload failed')
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            // Mock API call for now
            console.log('Submitting blog data:', formData)
            toast.success(blog ? 'Blog updated successfully' : 'Blog created successfully')
            onClose()
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
                className="bg-white p-8 rounded-xl shadow-2xl w-[800px] max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 500 }}>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tag</label>
                            <input
                                type="text"
                                name="tag"
                                value={formData.tag}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2"
                                rows="4"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Author Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2"
                                required
                            />
                        </div>
                    </div>

                    {/* Image Uploads */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FileUpload
                            label="Upload Thumbnail Image"
                            file={formData.thumbnailImage}
                            onUpload={(e) => handleFileUpload(e, 'thumbnailImage')}
                        />
                        <FileUpload
                            label="Upload Author Image"
                            file={formData.userImage}
                            onUpload={(e) => handleFileUpload(e, 'userImage')}
                        />
                    </div>

                    {/* Blog Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <ReactQuill
                            value={formData.content}
                            onChange={handleEditorChange}
                            className="bg-white rounded-lg border border-gray-300"
                            theme="snow"
                        />
                    </div>

                    {/* Submit Buttons */}
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
                            {loading ? 'Saving...' : blog ? 'Update Blog' : 'Create Blog'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </Modal>
    )
}

const FileUpload = ({ label, file, onUpload, multiple = false }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
        <label className="cursor-pointer block">
            
            <span className="block text-sm font-medium text-gray-700">{label}</span>
            <input
                type="file"
                onChange={onUpload}
                accept="image/*"
                className="hidden"
                multiple={multiple}
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

BlogModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    blog: PropTypes.object
}

FileUpload.propTypes = {
    label: PropTypes.string.isRequired,
    file: PropTypes.string,
    onUpload: PropTypes.func.isRequired,
    multiple: PropTypes.bool
}


export default BlogModal
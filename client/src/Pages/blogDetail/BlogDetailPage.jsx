import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'
import { fetchOneBlog } from '../../services/api.services'
import Navbar from '../../Components/Header/Navbar'
import SideComponent from '../../Components/sideComponent/SideComponent'
import toast from 'react-hot-toast'


const BlogDetailPage = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetchOneBlog(id)
                setBlog(response.data)
                setLoading(false)
            } catch (err) {
                toast.error(err.message)
                setLoading(false)
            }
        }

        fetchBlogDetails()
    }, [id])

    if (loading) return <div className="flex justify-center items-center h-screen">Loading blog details...</div>

    if (error) return <div className="text-red-500 text-center mt-10">Error loading blog: {error.message}</div>

    return (
        <div className="w-full overflow-hidden">
            <Navbar />
            <SideComponent />
            {/* 
            <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-start ">
                <img
                    className="w-full h-full object-cover absolute "
                    src={}
                    alt=""
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white ml-[5vw] relative z-[2]">Resources</h1>
            </div> */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full  px-[5vw] ">
                {/* Blog Header Section */}
                <div className="mb-8">
                    {/* Thumbnail Image */}
                    {blog.thumbnailImage && (
                        <img
                            src={blog.thumbnailImage}
                            alt={blog.title}
                            className="w-full h-[350px] object-cover rounded-lg mb-6"
                        />
                    )}

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

                    {/* Tags */}
                    {blog.tag && (
                        <div className="mt-2 flex flex-wrap gap-2 mb-4">
                            {blog.tag.split(',').map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                    {tag.trim()}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 mb-4 text-lg">{blog.description}</p>
                </div>

                {/* Blog Content */}
                <div
                    className="prose max-w-full mb-6"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Author Info */}

                <p className="font-semibold text-gray-800 mb-4">Author :</p>

                <div className="flex items-center space-x-4 mb-4">
                    {blog.userImage && (
                        <img
                            src={blog.userImage}
                            alt={blog.userName}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    )}
                    <p className="font-semibold text-gray-800">{blog.userName}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-600">
                        Updated At: {''}
                        {new Date(blog.updatedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <p className="text-sm text-gray-600">
                        Created At: {''}
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default BlogDetailPage

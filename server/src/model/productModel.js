import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        categories: { 
            type: String, 
            required: true 
        },
        subcategories: { 
            type: String, 
            required: true 
        },
        specification: {
            type: Object,
            required: true
        },
        feature: { 
            type: [String], 
            required: true 
        },
        imageUrl: { 
            type: String, 
            required: true 
        },
        brochureUrl: { 
            type: String, 
            required: true 
        },
        applicationUrls: { 
            type: [String], 
            required: true 
        },
        isActive:{
            type: Boolean,
            default: true
        },
        isEnquired:{
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model('Product', productSchema)
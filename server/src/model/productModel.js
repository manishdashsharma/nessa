import mongoose from 'mongoose';

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
            type: {
                highlighted: { 
                    type: [String], 
                    required: true 
                },
                useCases: {
                    type: [
                        {
                            title: { 
                                type: String, 
                                required: true 
                            },
                            description: { 
                                type: String, 
                                default: "" 
                            },
                            imageUrl: { 
                                type: String, 

                            },
                        }
                    ]
                },
            }
        },
        productImageUrl: { 
            type: [String], 
            required: true 
        },
        brochureUrl: { 
            type: String,
            default: "",
            set: (value) => value === null ? "" : value
        },
        applicationImageUrls: { 
            type: [String],
            required: true 
        },
        bestSuitedFor: { 
            type: [String], 
            required: true 
        },
        SKUId:{
            type: String,
            required: true,
            unique: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isEnquired: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Product', productSchema);

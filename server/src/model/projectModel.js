import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
    {
        categories: {
            type: String,
            required: true,
            unique: true
        },
        projects: [
            {
                title: {
                    type: String,
                    required: true
                },
                place: {
                    type: String,
                    required: true
                },
                imageUrl: {
                    type: String,
                    required: true
                },
                isPublished: {
                    type: Boolean,
                    default: false,
                    required: true
                }
            }
        ]
    },
    { timestamps: true }
)


export default mongoose.model('Projects', projectSchema)
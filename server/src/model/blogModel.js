import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default mongoose.model('Blog', blogSchema);


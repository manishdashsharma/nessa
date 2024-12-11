import mongoose from 'mongoose'
import config from '../config/config.js'
import locationStatsModel from '../model/locationStatsModel.js'
import productModel from '../model/productModel.js'

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL)
            return mongoose.connection
        } catch (err) {
            throw err
        }
    },
    savelocationStats: (payload) => {
        return locationStatsModel.create(payload)
    },
    getLocationStats: () => {
        return locationStatsModel.find()
    },
    saveProduct: (payload) => {
        return productModel.create(payload)
    },
    queryProductData: (findQuery, limit, offset) => {
        return productModel.find(findQuery).limit(Number(limit)).skip(Number(offset)).sort({ isEnquired: -1 })
    },
    countDocuments: (findQuery) =>{
        return productModel.countDocuments(findQuery)
    },
    updateProductById : (id, data) => {
        return productModel.findByIdAndUpdate(id, data, { new: true });
    },
    increaseIsEnquired: (id) => {
        return productModel.findByIdAndUpdate(
            id,
            { $inc: { isEnquired: 1 } }, 
            { new: true }
        );
    }
}


import mongoose from 'mongoose'
import config from '../config/config.js'
import locationStatsModel from '../model/locationStatsModel.js'
import productModel from '../model/productModel.js'
import utilsModel from '../model/utilsModel.js'
import contactUsModel from '../model/contactUsModel.js'
import supportModel from '../model/supportEnquiryModel.js'
import solutionModel from '../model/solutionModel.js'
import testimonialModel from '../model/testimonialModel.js'

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
    queryProductDataById: (id) =>{
        return productModel.findById(id)
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
    },
    saveUtilsData: (payload) =>{
        return utilsModel.create(payload)
    },
    fetchUtilsData: (id) => {
        return utilsModel.findById(id);
    },
    updateUtilsData: (id, data) => {
        return utilsModel.findByIdAndUpdate(id, data, { new: true });
    },
    removeUtilsData: (id) =>{
        return utilsModel.findByIdAndDelete(id);
    },
    fetchAllUtils: () =>{
        return utilsModel.find()
    },
    saveContactUs: (payload) => {
        return contactUsModel.create(payload)
    },
    queryContactUsData: async (findQuery, limit, offset) => {
        return contactUsModel.find(findQuery)
            .skip(offset)
            .limit(limit);

    },
    countContactUsDocuments: (findQuery) => {
        return contactUsModel.countDocuments(findQuery);
    },
    updateContactUsById: (id,data) =>{
        return contactUsModel.findByIdAndUpdate(id, data, { new: true ,runValidators: true});
    },
    saveSupportEnquiry: (payload) => {
        return supportModel.create(payload)
    },
    querySupportEnquiry: async (findQuery, limit, offset) => {
        return supportModel.find(findQuery)
            .skip(offset)
            .limit(limit);

    },
    countSupportEnquiryDocuments: (findQuery) => {
        return supportModel.countDocuments(findQuery);
    },
    updateSupportEnquiryById: (id,data) =>{
        return supportModel.findByIdAndUpdate(id, data, { new: true ,runValidators: true});
    },
    saveSolutionData: (payload) => {
        return solutionModel.create(payload)
    },
    queryAllSolutions: () => {
        return solutionModel.find()
    },
    querySolutionById: (id) => {
        return solutionModel.findById(id)
    },
    updateSolutionData: (id,data) => {
        return solutionModel.findByIdAndUpdate(id, data, { new: true });
    },
    saveTestimonialData: (payload) => {
        return testimonialModel.create(payload)
    },
    queryAllTestimonials:() => {
        return testimonialModel.find()
    },
    updateTestimonialData: async (id) => {
        const testimonial = await testimonialModel.findById(id);
        
        if (testimonial) {
            testimonial.isPublished = !testimonial.isPublished;
            return await testimonial.save();
        }
        
        return null;
    }
}


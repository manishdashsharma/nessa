import httpResponse from '../util/httpResponse.js';
import responseMessage from '../constant/responseMessage.js';
import httpError from '../util/httpError.js';
import quicker from '../util/quicker.js';
import databaseService from '../service/databaseService.js'
import { uploadOnCloudinary } from '../service/cloudinaryService.js';
import { ValidateAddProduct, validateJoiSchema, ValidateUpdateProduct } from '../service/validationService.js';

export default {
    self: (req, res, next) => {
        try {
            httpResponse(req, res, 200, responseMessage.SUCCESS);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    health: (req, res, next) => {
        try {
            const healthData = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth(),
                timestamp: Date.now(),
            };

            httpResponse(req, res, 200, responseMessage.SUCCESS, healthData);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    locationStats: async (req, res, next) => {
        try {
            const locationDetails = await quicker.getLocationDetails()
            if (!locationDetails) {
                return httpError(next, new Error(responseMessage.NOT_FOUND('Location')), req, 400)
            }

            const newLocationStats = await databaseService.savelocationStats(locationDetails)
            if(!newLocationStats){
                return httpError(next,new Error(responseMessage.FAILED_TO_SAVE),req,500)
            }
    
            httpResponse(req, res, 200, responseMessage.SUCCESS, newLocationStats );
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    getLocationStats: async(req, res, next) => {
        try {
            const locationStats = await databaseService.getLocationStats()
            httpResponse(req, res, 200, responseMessage.SUCCESS,locationStats);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    websiteCount: async(req, res, next) => {
        try {
            const locationStats = await databaseService.getLocationStats()
            httpResponse(req, res, 200, responseMessage.SUCCESS,locationStats.length);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    addProduct: async (req, res, next) => {
        try {
            const { body } = req;
    
            if (!req.files.image || !req.files.brochureFile || !req.files.application) {
                return httpError(next, new Error('Required files are missing'), req, 422);
            }
    
            if (body.specification) {
                try {
                    body.specification = JSON.parse(body.specification);
                } catch (e) {
                    return httpError(next, new Error("Invalid JSON format for 'specification'"), req, 400);
                }
            }
    
            if (body.feature) {
                try {
                    body.feature = JSON.parse(body.feature);
                } catch (e) {
                    return httpError(next, new Error("Invalid JSON format for 'feature'"), req, 400);
                }
            }
    
            const { value, error } = validateJoiSchema(ValidateAddProduct, body);
    
            if (error) {
                return httpError(next, error, req, 422);
            }
    
            const { name, description, categories, subcategories, specification, feature } = value;
    
            let imageUrl = null;
            let brochureUrl = null;
            let applicationUrls = [];
    
            const imageUpload = await uploadOnCloudinary(req.files.image[0].path);
            if (imageUpload) imageUrl = imageUpload.secure_url;
    
            const brochureUpload = await uploadOnCloudinary(req.files.brochureFile[0].path);
            if (brochureUpload) brochureUrl = brochureUpload.secure_url;
    
            const applicationUploads = await Promise.all(
                req.files.application.map(file => uploadOnCloudinary(file.path))
            );
            applicationUrls = applicationUploads
                .filter(upload => upload)
                .map(upload => upload.secure_url);
    
            const productData = {
                name,
                description,
                categories,
                subcategories,
                specification,
                feature,
                imageUrl,
                brochureUrl,
                applicationUrls
            };
    
            const savedProduct = await databaseService.saveProduct(productData);
    
            if (!savedProduct) {
                return httpError(next, new Error(responseMessage.FAILED_TO_SAVE), req, 500);
            }
    
            httpResponse(req, res, 201, responseMessage.SUCCESS, productData);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    fetchProduct: async(req, res, next) => {
        try {
            const { 
                query = 'all', 
                categories, 
                subcategories, 
                limit = 100, 
                offset = 0 
            } = req.query;
    
            let findQuery = {};
    
            switch (query.toLowerCase()) {
                case 'all':
                    break;
                
                case 'active':
                    findQuery.isActive = true;
                    break;
                case 'inactive':
                    findQuery.isActive = false;
                    break;
                
                case 'popular':
                    findQuery = { isEnquired: { $gt: 0 } };
                    break;
                
                case 'required':
                    if (categories) {
                        findQuery.categories = categories;
                    }
                    if (subcategories) {
                        findQuery.subcategories = subcategories;
                    }
                    break;
                
                default:
                    break;
            }
    
            const products = await databaseService.queryProductData(findQuery,limit,offset)
    
            const total = await databaseService.countDocuments(findQuery)
    
            const response = {
                total,
                limit: Number(limit),
                offset: Number(offset),
                products
            };
    
            httpResponse(req, res, 200, responseMessage.SUCCESS, response);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    updateProduct: async (req, res, next) => {
        try {
            const { body } = req;
            const { id } = req.params;
    
            const { value, error } = validateJoiSchema(ValidateUpdateProduct, body);
    
            if (error) {
                return httpError(next, error, req, 422);
            }
    
            const { name, description, categories, subcategories, specification, feature, isActive, isEnquired } = value;
    
            const updatedProductData = {
                ...(name && { name }),
                ...(description && { description }),
                ...(categories && { categories }),
                ...(subcategories && { subcategories }),
                ...(specification && { specification }),
                ...(feature && { feature }),
                ...(isActive !== undefined && { isActive }),
                ...(isEnquired !== undefined && { isEnquired }),
            };
    
            const updatedProduct = await databaseService.updateProductById(id, updatedProductData);
    
            if (!updatedProduct) {
                return httpError(next, new Error(responseMessage.NOT_FOUND), req, 404);
            }
    
            httpResponse(req, res, 200, responseMessage.SUCCESS, updatedProduct);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    },
    increaseIsEnquired: async (req, res, next) => {
        try {
            const { id } = req.params;

            if(!id){
                return httpError(next,new Error(responseMessage.NOT_FOUND('Requested Product')))
            }

            const response = await databaseService.increaseIsEnquired(id)

            if(!response){
                return httpError(next, new Error(responseMessage.FAILED_TO_SAVE), req, 500);
            }

            httpResponse(req, res, 200, responseMessage.SUCCESS);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    }
};

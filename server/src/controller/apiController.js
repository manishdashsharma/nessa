import httpResponse from '../util/httpResponse.js';
import responseMessage from '../constant/responseMessage.js';
import httpError from '../util/httpError.js';
import quicker from '../util/quicker.js';
import databaseService from '../service/databaseService.js'
import { uploadOnCloudinary } from '../service/cloudinaryService.js';
import { ValidateAddProduct, validateJoiSchema } from '../service/validationService.js';

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

            const { value, error } = validateJoiSchema(ValidateAddProduct,body)

            if(error){
                return httpError(next, error, req, 422);
            }

            const { name, description, categories, subcategories, specification, feature } = value;

            let imageUrl = null;
            let brochureUrl = null;
            let applicationUrls = [];

            if (req.files.image) {
                const imageUpload = await uploadOnCloudinary(req.files.image[0].path);
                if (imageUpload) imageUrl = imageUpload.secure_url;
            }

            if (req.files.brochureFile) {
                const brochureUpload = await uploadOnCloudinary(req.files.brochureFile[0].path);
                if (brochureUpload) brochureUrl = brochureUpload.secure_url;
            }

            if (req.files.application) {
                const applicationUploads = await Promise.all(
                    req.files.application.map(file => uploadOnCloudinary(file.path))
                );
                applicationUrls = applicationUploads
                    .filter(upload => upload) 
                    .map(upload => upload.secure_url);
            }

            const productData = {
                name,
                description,
                categories,
                subcategories,
                specification,
                feature,
                imageUrl,
                brochureUrl,
                applicationUrls,
            };

            // Save product data (use your database service)
            // const savedProduct = await databaseService.saveProduct(productData);

            // Send response
            httpResponse(req, res, 200, responseMessage.SUCCESS,productData);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    }
};

import { Router } from 'express'
import apiController from '../controller/apiController.js'
import { uploadFiles } from '../middleware/multerHandler.js'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)
router.route('/save-location-stats').get(apiController.locationStats)
router.route('/fetch-location-stats').get(apiController.getLocationStats)
router.route('/website-count').get(apiController.websiteCount)
router.route('/upload-file').post(uploadFiles, apiController.uploadFile);
router.route('/add-product').post(uploadFiles,apiController.addProduct);
router.route('/query-product-data').get(apiController.fetchProduct);
router.route('/update-product/:id').post(apiController.updateProduct);
router.route('/increase-enquired/:id').get(apiController.increaseIsEnquired)

export default router
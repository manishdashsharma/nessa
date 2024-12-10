import { Router } from 'express'
import apiController from '../controller/apiController.js'
import { uploadFiles } from '../middleware/multerHandler.js'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)
router.route('/save-location-stats').get(apiController.locationStats)
router.route('/fetch-location-stats').get(apiController.getLocationStats)
router.route('/website-count').get(apiController.websiteCount)
router.post('/add-product', uploadFiles, apiController.addProduct);

export default router
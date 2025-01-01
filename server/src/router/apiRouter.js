import { Router } from 'express'
import apiController from '../controller/apiController.js'
import { uploadFiles } from '../middleware/multerHandler.js'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)
router.route('/api-details-check').get(apiController.apiDetailsCheck)
router.route('/save-location-stats').get(apiController.locationStats)
router.route('/fetch-location-stats').get(apiController.getLocationStats)
router.route('/website-count').get(apiController.websiteCount)
router.route('/upload-file').post(uploadFiles, apiController.uploadFile);
router.route('/add-product').post(uploadFiles,apiController.addProduct);
router.route('/query-product-data').get(apiController.fetchProduct);
router.route('/update-product/:id').post(apiController.updateProduct);
router.route('/increase-enquired/:id').get(apiController.increaseIsEnquired)
router.route('/save-utils-data').post(apiController.addUtilsData)
router.route('/fetch-utils-data/:id').get(apiController.fetchUtilsData)
router.route('/update-utils-data/:id').post(apiController.updateUtilsData)
router.route('/remove-utils-data/:id').delete(apiController.removeUtilsData)
router.route('/save-contact-us-data').post(apiController.saveContactUs)
router.route('/query-contact-us-data').get(apiController.queryContactUsData)
router.route('/update-contact-us-data/:id').post(apiController.updateContactUsData)
router.route('/save-support-enquiry').post(apiController.saveSupportEnquiry)
router.route('/query-support-enquiry-data').get(apiController.querySupportEnquiryData)
router.route('/update-support-enquiry-data/:id').post(apiController.updateSupportEnquiryData)

export default router
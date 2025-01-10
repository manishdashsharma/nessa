import { Router } from 'express'
import apiController from '../controller/apiController.js'
import { uploadFiles } from '../middleware/multerHandler.js'
import authentication from '../middleware/authentication.js'
import authorization from '../middleware/authorization.js'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)
router.route('/api-details-check').get(apiController.apiDetailsCheck)
router.route('/save-location-stats').get(apiController.locationStats)
router.route('/fetch-location-stats').get(apiController.getLocationStats)
router.route('/website-count').get(apiController.websiteCount)
router.route('/upload-file').post(uploadFiles, apiController.uploadFile);
router.route('/add-product').post(authentication,authorization() ,apiController.addProduct);
router.route('/query-product-data').get(apiController.fetchProduct);
router.route('/query-product/:id').get(apiController.querySingleProduct)
router.route('/update-product/:id').post(authentication,authorization(),apiController.updateProduct);
router.route('/increase-enquired/:id').get(apiController.increaseIsEnquired)
router.route('/save-utils-data').post(apiController.addUtilsData)
router.route('/fetch-utils-data/:id').get(apiController.fetchUtilsData)
router.route('/update-utils-data/:id').post(apiController.updateUtilsData)
router.route('/remove-utils-data/:id').delete(apiController.removeUtilsData)
router.route('/save-contact-us-data').post(apiController.saveContactUs)
router.route('/query-contact-us-data').get(authentication,authorization(),apiController.queryContactUsData)
router.route('/update-contact-us-data/:id').post(authentication,authorization(),apiController.updateContactUsData)
router.route('/save-support-enquiry').post(apiController.saveSupportEnquiry)
router.route('/query-support-enquiry-data').get(authentication,authorization(),apiController.querySupportEnquiryData)
router.route('/update-support-enquiry-data/:id').post(authentication,authorization(),apiController.updateSupportEnquiryData)
router.route('/sign-in').post(apiController.signIn)
router.route('/self-identification').get(authentication,apiController.selfIdentification)
router.route('/save-solution').post(authentication,authorization(),apiController.saveSolutions)
router.route('/query-solutions').get(apiController.querySolutions)
router.route('/query-solution/:id').get(apiController.querySolution)
router.route('/update-solution/:id').post(apiController.updateSolutions)
router.route('/add-testimonial').post(authentication,authorization(),apiController.saveTestimonial)
router.route('/query-testimonials').get(apiController.queryTestimonials)
router.route('/update-testimonial/:id').get(apiController.updateTestimonials)



export default router
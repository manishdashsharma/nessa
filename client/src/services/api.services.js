import { servicesAxiosInstance } from './config'

export const getServerHealth = async () => {
    const response = await servicesAxiosInstance.get('/v1/health')
    return response.data
}

export const saveVisitorLocation = async (locationData = {}) => {
    const { latitude, longitude } = locationData

    const params = latitude && longitude ? { lat: latitude, long: longitude } : {}

    const response = await servicesAxiosInstance.get('/v1/save-location-stats', { params })
    return response.data
}

export const fetchVisitorLocation = async () => {
    const response = await servicesAxiosInstance.get('/v1/fetch-location-stats')
    return response.data
}

export const apiDetailsStatus = async () => {
    const response = await servicesAxiosInstance('/v1/api-details-check')
    return response.data
}

export const uploadFile = async (file) => {
    const response = await servicesAxiosInstance.post('/v1/upload-file', file)
    return response.data
}

export const saveContactUs = async (contactData) => {
    const response = await servicesAxiosInstance.post('/v1/save-contact-us-data', contactData)
    return response.data
}

export const saveSupportEnquiry = async (supportData) => {
    const response = await servicesAxiosInstance.post('/v1/save-support-enquiry', supportData)
    return response.data
}

export const fetchProduct = async (params) => {
    const response = await servicesAxiosInstance.get('/v1/query-product-data', { params })
    return response.data
}

export const increaseIsEnquired = async (e) => {
    const response = await servicesAxiosInstance.get(`/v1/increase-enquired/${e}`)
    return response.data
}


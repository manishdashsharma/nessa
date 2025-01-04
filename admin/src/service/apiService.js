import { servicesAxiosInstance } from './config'

export const getServerHealth = async () => {
    const response = await servicesAxiosInstance.get('/v1/health')
    return response.data
}

export const getProduct = async (query,limit,offset) => {
    const response = await servicesAxiosInstance.get(`/v1/query-product-data/?query=${query}&limit=${limit}&offset=${offset}`)
    return response.data
}

export const fetchVisitorLocation = async () => {
    const response = await servicesAxiosInstance.get('/v1/fetch-location-stats')
    return response.data
}
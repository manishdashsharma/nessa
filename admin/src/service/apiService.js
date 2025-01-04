import { servicesAxiosInstance } from './config'

export const getProduct = async (query,limit,offset) => {
    const response = await servicesAxiosInstance.get(`/v1/query-product-data/?query=${query}&limit=${limit}&offset=${offset}`)
    return response.data
}

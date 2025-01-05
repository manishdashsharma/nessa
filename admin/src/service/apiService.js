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

export const fetchSupportTickets = async ({ limit, offset, subject, isRead, isSpam, isSolved } = {}) => {
    const params = new URLSearchParams();

    // Add parameters to the query string if they are provided
    if (limit !== undefined) params.append('limit', limit);
    if (offset !== undefined) params.append('offset', offset);
    if (subject !== undefined) params.append('subject', subject);
    if (isRead !== undefined) params.append('isread', isRead);
    if (isSpam !== undefined) params.append('isspam', isSpam);
    if (isSolved !== undefined) params.append('issolved', isSolved);

    const response = await servicesAxiosInstance.get(`/v1/query-support-enquiry-data/?${params.toString()}`);
    return response.data;
};

export const updateSupportTicket = async (ticketId, data) => {
    const response = await servicesAxiosInstance.post(`/v1/update-support-enquiry-data/${ticketId}`,  data);
    return response.data;
}


export const fetchContactUs = async ({ limit, offset, subject, isRead, isSpam, isSolved } = {}) => {    
    const params = new URLSearchParams();
    if (limit !== undefined) params.append('limit', limit);
    if (offset !== undefined) params.append('offset', offset);
    if (subject !== undefined) params.append('subject', subject);
    if (isRead !== undefined) params.append('isread', isRead);
    if (isSpam !== undefined) params.append('isspam', isSpam);
    if (isSolved !== undefined) params.append('issolved', isSolved);

    const response = await servicesAxiosInstance.get(`/v1/query-contact-us-data/?${params.toString()}`);
    return response.data;
}

export const updateContactUs = async (contactId, data) => {
    const response = await servicesAxiosInstance.post(`/v1/update-contact-us-data/${contactId}`, data);
    return response.data;
}

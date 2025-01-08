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

export const fetchSupportTickets = async ({ limit, offset, subject, isRead, isSpam, isSolved,token } = {}) => {
    const params = new URLSearchParams();

    const headers= {
        Authorization: `Bearer ${token}`
    }
    if (limit !== undefined) params.append('limit', limit);
    if (offset !== undefined) params.append('offset', offset);
    if (subject !== undefined) params.append('subject', subject);
    if (isRead !== undefined) params.append('isread', isRead);
    if (isSpam !== undefined) params.append('isspam', isSpam);
    if (isSolved !== undefined) params.append('issolved', isSolved);

    const response = await servicesAxiosInstance.get(`/v1/query-support-enquiry-data/?${params.toString()}`,{
        headers
    });
    return response.data;
};

export const updateSupportTicket = async (token,ticketId, data) => {
    const headers= {
        Authorization: `Bearer ${token}`
    }
    const response = await servicesAxiosInstance.post(`/v1/update-support-enquiry-data/${ticketId}`,  data,{
        headers
    });
    return response.data;
}


export const fetchContactUs = async ({ limit, offset, subject, isRead, isSpam, isSolved,token } = {}) => {    
    const params = new URLSearchParams();
    if (limit !== undefined) params.append('limit', limit);
    if (offset !== undefined) params.append('offset', offset);
    if (subject !== undefined) params.append('subject', subject);
    if (isRead !== undefined) params.append('isread', isRead);
    if (isSpam !== undefined) params.append('isspam', isSpam);
    if (isSolved !== undefined) params.append('issolved', isSolved);

    const headers= {
        Authorization: `Bearer ${token}`
    }
    const response = await servicesAxiosInstance.get(`/v1/query-contact-us-data/?${params.toString()}`,{
        headers
    });
    return response.data;
}

export const updateContactUs = async (token,contactId, data) => {
    const headers= {
        Authorization: `Bearer ${token}`
    }
    const response = await servicesAxiosInstance.post(`/v1/update-contact-us-data/${contactId}`, data, {
        headers
    });
    return response.data;
}

export const signIn = async (email,password) => {
    const response = await servicesAxiosInstance.post('/v1/sign-in', {
        "emailAddress":email,
        "password":password
    });
    return response.data;
};

export const uploadFile = async (file) => {
    const response = await servicesAxiosInstance.post('/v1/upload-file', file)
    return response.data
}

export const saveSolution = async (token,data) => {
    const headers= {
        Authorization: `Bearer ${token}`
    }
    const response = await servicesAxiosInstance.post('/v1/save-solution', data, {
        headers
    });

    return response.data;
}

export const querySolutions = async () => {
    const response = await servicesAxiosInstance.get('/v1/query-solutions')
    return response.data
}
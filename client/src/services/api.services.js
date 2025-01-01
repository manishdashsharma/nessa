import { servicesAxiosInstance } from './config';


export const getServerHealth = async () => {
  const response = await servicesAxiosInstance.get('/v1/health');
  return response.data;
};

export const saveVisitorLocation = async () => {
  const response = await servicesAxiosInstance.get('/v1/save-location-stats');
  return response.data
}

export const apiDetailsStatus = async() =>{
  const response = await servicesAxiosInstance('/v1/api-details-check')
  return response.data
}

export const uploadFile = async (file) => {
  const response = await servicesAxiosInstance.post('/v1/upload-file', file);
  return response.data;
};

export const saveContactUs = async (contactData) => {
  const response = await servicesAxiosInstance.post('/v1/save-contact-us-data', contactData);
  return response.data;
};

// Add new support enquiry API endpoint
export const saveSupportEnquiry = async (supportData) => {
  const response = await servicesAxiosInstance.post('/v1/save-support-enquiry', supportData);
  return response.data;
};
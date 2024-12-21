import { servicesAxiosInstance } from './config';


export const getServerHealth = async () => {
  const response = await servicesAxiosInstance.get('/api/v1/health');
  return response.data;
};

export const saveVisitorLocation = async () => {
  const response = await servicesAxiosInstance.get('/api/v1/save-location-stats');
  return response.data
}

export const apiDetailsStatus = async() =>{
  const response = await servicesAxiosInstance('/api/v1/api-details-check')
  return response.data
}
import { servicesAxiosInstance } from './config';


export const getServerHealth = async () => {
  const response = await servicesAxiosInstance.get('/api/v1/health');
  return response.data;
};

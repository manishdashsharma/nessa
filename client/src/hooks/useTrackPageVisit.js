import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { saveVisitorLocation } from '../services/api.services';

const useTrackPageVisit = () => {
  const location = useLocation();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await saveVisitorLocation(); 
      } catch (error) {
        console.error('Failed to track visitor location:', error);
      }
    };

    trackVisit(); 

  }, [location]);
};

export default useTrackPageVisit;

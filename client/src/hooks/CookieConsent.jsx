import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    const timer = setTimeout(() => {
      if (!hasAccepted) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  const handleViewSettings = () => {
    navigate('/cookiespolicy');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="relative bg-white border rounded-lg shadow-lg p-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </motion.button>
            
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                <Cookie className="h-5 w-5 text-blue-600" />
              </motion.div>
              <h2 className="text-lg font-semibold">Cookie Settings</h2>
            </div>
            
            <p className="mt-3 text-gray-600">
              We use cookies to enhance your experience and analyze site traffic. 
              Your data will be handled in accordance with our privacy policy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAccept}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Accept All Cookies
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDecline}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Decline Optional Cookies
              </motion.button>
              <div className="hidden sm:block w-px h-8 bg-gray-200" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewSettings}
                className="w-full sm:w-auto px-4 py-2 text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                View Cookie Settings
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
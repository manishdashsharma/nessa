import { motion } from 'framer-motion';
import IPAnalyticsDashboard from './IPAnalyticsDashboard';


const WelcomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen text-white overflow-hidden scrollbar-hide"
    >

      <div className="relative">
        <IPAnalyticsDashboard />
      </div>
    </motion.div>
  );
};

export default WelcomePage;
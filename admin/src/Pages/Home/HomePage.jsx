
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <img src={logo} alt="Nessa Logo" className="w-32 mb-4" />
          <h1 className="text-5xl font-bold">Welcome to Nessa</h1>
          <p className="mt-2 text-lg">Your go-to platform for seamless experiences.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">Features</h2>
        <p className="mt-2 text-center text-gray-600">Discover the amazing features we offer.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Feature One</h3>
            <p className="mt-2 text-gray-600">Description of feature one goes here.</p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Feature Two</h3>
            <p className="mt-2 text-gray-600">Description of feature two goes here.</p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800">Feature Three</h3>
            <p className="mt-2 text-gray-600">Description of feature three goes here.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Nessa. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

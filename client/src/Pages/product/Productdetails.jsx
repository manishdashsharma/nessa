import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPowerOff } from 'react-icons/fa';
import { GiSwordsPower } from 'react-icons/gi';
import { ImPower } from 'react-icons/im';



const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const tabs = [
    { id: 'features', label: 'Features & Benefits' },
    { id: 'specification', label: 'Specification' },
    { id: 'applications', label: 'Applications' }
  ];

  const features = [
    {
      id: 1,
      icon: <FaPowerOff />,
      title: 'Auto Shutdown & Auto Restart',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      icon: <GiSwordsPower />,
      title: 'Open & Short Circuit Protection',
      bgColor: 'bg-orange-100'
    },
    {
      id: 3,
      icon: <ImPower />,
      title: 'Over Voltage Protection',
      bgColor: 'bg-blue-50'
    }
  ];
  const specification = [
    {
      id: 1,
      icon: <FaPowerOff />,
      title: 'Auto Shutdown & Auto Restart',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      icon: <GiSwordsPower />,
      title: 'Open & Short Circuit Protection',
      bgColor: 'bg-orange-100'
    },
    {
      id: 3,
      icon: <ImPower />,
      title: 'Over Voltage Protection',
      bgColor: 'bg-blue-50'
    }
  ];
  const applications = [
    {
      id: 1,
      icon: <FaPowerOff />,
      title: 'Auto Shutdown & Auto Restart',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      icon: <GiSwordsPower />,
      title: 'Open & Short Circuit Protection',
      bgColor: 'bg-orange-100'
    },
    {
      id: 3,
      icon: <ImPower />,
      title: 'Over Voltage Protection',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="w-full mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
      Products
        <span className="text-blue-500"> Details</span> 
      </h1>
      <div className='flex justify-center items-center mb-8'>

      <div className="flex relative shrink-0 mt-4 h-2.5 bg-[var(--light-blue)] rounded-[50px] w-[51px]" />
      </div>

      
      {/* Tab buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 max-sm:text-xs  rounded-full transition-all ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600  hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        //   exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          
          
        >
          {activeTab === 'features' && (
            <div className="grid grid-cols-3  max-sm:grid-cols-1 gap-8   ">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: feature.id * 0.2 }}
                  className="h-[200px] max-sm:h-fit  flex flex-col items-center justify-center text-center"
                >
                  <div className={`${feature.bgColor} h-[80px] w-[80px] flex items-center justify-center text-3xl p-4 rounded-full mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-gray-800 font-medium">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          )}
          
          {activeTab === 'specification' && (
            <div className="text-center text-gray-600 ">
              <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8  ">
              {specification.map((specification) => (
                <motion.div
                  key={specification.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: specification.id * 0.2 }}
                  className="h-[200px] max-sm:h-fit  flex flex-col items-center justify-center text-center"
                >
                  <div className={`${specification.bgColor} h-[80px] w-[80px] flex items-center justify-center text-3xl p-4 rounded-full mb-4`}>
                    {specification.icon}
                  </div>
                  <h3 className="text-gray-800 font-medium">{specification.title}</h3>
                </motion.div>
              ))}
            </div>
            </div>
          )}
          
          {activeTab === 'applications' && (
            <div className="text-center text-gray-600 ">
              <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8  ">
              {applications.map((applications) => (
                <motion.div
                  key={applications.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: applications.id * 0.2 }}
                  className="h-[200px] max-sm:h-fit  flex flex-col items-center justify-center text-center"
                >
                  <div className={`${applications.bgColor} h-[80px] w-[80px] flex items-center justify-center text-3xl p-4 rounded-full mb-4`}>
                    {applications.icon}
                  </div>
                  <h3 className="text-gray-800 font-medium">{applications.title}</h3>
                </motion.div>
              ))}
            </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductTabs;
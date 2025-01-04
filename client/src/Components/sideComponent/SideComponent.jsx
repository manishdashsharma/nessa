import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSearch, BiEnvelope, BiPhone, BiCalculator } from 'react-icons/bi';
import { RiBookletLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


const SideComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(false);

  const menuItems = [
    { icon: BiSearch, label: 'Search Product', color: 'bg-[#0066CC]' },
    { icon: BiEnvelope, label: 'Mail Us', color: 'bg-[#0066CC]' },
    { icon: BiPhone, label: 'Call Us', color: 'bg-[#0066CC]' },
    { icon: BiCalculator, label: 'Payback Calculator', color: 'bg-[#0066CC]' },
    { icon: RiBookletLine, label: 'Brochure', color: 'bg-[#0066CC]' },
    { icon: FaWhatsapp, label: 'Whatsapp', color: 'bg-[#25D366]' },
  ];

  const handleItemClick = () => {
    if (expandedIndex === false) {
      setExpandedIndex(true);
    } else {
      setExpandedIndex(false);
    }
  };

  return (
   <div className="fixed right-0 top-[55%] z-50">
      <AnimatePresence mode="wait">
        {expandedIndex && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleItemClick} 
            className="absolute top-[-20px] left-[-20px] w-[30px] h-[30px] text-sm z-[100] text-white bg-[#0066CC] rounded-full flex items-center justify-center cursor-pointer"
          >
            <ImCross size={16} />
          </motion.div>
        )}

        <div className="relative">
          <motion.div 
            className="flex flex-col shadow-lg rounded-l-xl overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div key={index} className="relative flex">
                <motion.div
                  className={`${item.color} cursor-pointer relative z-10 border-r border-b`}
                  onClick={handleItemClick}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 text-white hover:bg-opacity-90">
                    <item.icon size={22} />
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {expandedIndex && (
                    <motion.div
                      initial={{ opacity: 0, x: -20, width: 0 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        width: '180px',
                        transition: {
                          duration: 0.3,
                          ease: 'easeOut'
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -20, 
                        width: 0,
                        transition: {
                          duration: 0.2,
                          ease: 'easeIn'
                        }
                      }}
                      onClick={handleItemClick}
                      className={`${item.color}  border-b flex items-center text-white px-3`}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SideComponent;

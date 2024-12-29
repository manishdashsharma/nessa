import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSearch, BiEnvelope, BiPhone, BiCalculator } from "react-icons/bi";
import { RiBookletLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const SideComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(false);

  const menuItems = [
    { icon: BiSearch, label: "Search Product", color: "bg-[#0066CC]" },
    { icon: BiEnvelope, label: "Mail Us", color: "bg-[#0066CC]" },
    { icon: BiPhone, label: "Call Us", color: "bg-[#0066CC]" },
    { icon: BiCalculator, label: "Payback Calculator", color: "bg-[#0066CC]" },
    { icon: RiBookletLine, label: "Brochure", color: "bg-[#0066CC]" },
    { icon: FaWhatsapp, label: "Whatsapp", color: "bg-[#25D366]" },
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

      {expandedIndex && (
        <div onClick={handleItemClick} className="absolute top-[-20px] left-[-20px] w-[30px] h-[30px] text-sm z-[100] text-white bg-[#0066CC] rounded-full flex items-center justify-center">
          <ImCross />

        </div>
      )}  

      <div className="relative">
        <AnimatePresence>
          <motion.div className="flex flex-col shadow-lg  rounded-l-xl overflow-hidden">
            {menuItems.map((item, index) => (
              <>
                <motion.div  key={index} className="relative flex ">
                  <motion.div
                    
                    className={`${item.color} cursor-pointer  relative z-10 border-r border-b`}
                    onClick={handleItemClick}
                  >
                    <div className="p-3 text-white hover:bg-opacity-90">
                      <item.icon size={22} />
                    </div>
                  </motion.div>
                  {expandedIndex && (
                    <motion.div
                      initial={{ opacity: 0, x: -50, width: "0" }}
                      animate={{ opacity: 1, x: 0, width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      onClick={handleItemClick}
                      className={` ${item.color} w-full border-b flex items-center text-white px-3`}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </motion.div>
              </>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SideComponent;

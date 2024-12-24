import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


// categories structure
const categories = {
  "AC Lighting": [
    "Street Light",
    "Flood Light", 
    "Highway Light",
    "Wall Glass Light",
    "Fission Led Street Light",
    "Fission Flood Light",
    "AC High Mast"
  ],
  "Solar Lighting": [
    "Solar Street Light",
    "Solar Garden Light",
    "Solar Panel",
    "Solar Inverter"
  ],
  "Electronics": [
    "LED Driver",
    "Power Supply",
    "Controllers"
  ],
  "Indoor Lights": [
    "Panel Light",
    "Down Light",
    "Spot Light",
    "Strip Light",
    
  ]
};

// Generate varied fake products
const generateFakeProducts = () => {
  const products = [];
  let id = 1;
  
  // Helper function to generate random price
  const randomPrice = () => Math.floor(Math.random() * (1000 - 100) + 100);
  
  // Product name patterns for each subcategory
  const productPatterns = {
    "Street Light": ["30W", "50W", "100W", "150W"],
    "Flood Light": ["100W", "200W", "300W", "500W"],
    "Highway Light": ["150W", "250W", "400W"],
    "Wall Glass Light": ["20W", "40W", "60W"],
    "Fission Led Street Light": ["80W", "120W", "160W"],
    "Fission Flood Light": ["150W", "250W", "350W"],
    "AC High Mast": ["400W", "600W", "800W"],
    "Solar Street Light": ["40W", "60W", "80W"],
    "Solar Garden Light": ["10W", "20W", "30W"],
    "Solar Panel": ["150W", "250W", "350W"],
    "Solar Inverter": ["1KW", "2KW", "3KW"],
    "LED Driver": ["30W", "50W", "100W"],
    "Power Supply": ["100W", "200W", "300W"],
    "Controllers": ["Smart", "Basic", "Premium"],
    "Panel Light": ["24W", "36W", "48W"],
    "Down Light": ["12W", "18W", "24W"],
    "Spot Light": ["7W", "10W", "15W"],
    "Strip Light": ["5M", "10M", "15M"]
  };

  // Generate products for each category and subcategory
  Object.entries(categories).forEach(([mainCategory, subcategories]) => {
    subcategories.forEach(subcategory => {
      const patterns = productPatterns[subcategory] || ["Standard"];
      patterns.forEach(pattern => {
        // Generate 2-3 products for each pattern
        const count = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < count; i++) {
          products.push({
            id: id++,
            name: `${pattern} ${subcategory}`,
            mainCategory,
            subcategory,
            price: randomPrice(),
            image: "/images/product.png",
            // description: `High-performance ${subcategory} suitable for professional use`,
            // features: [
            //   "Energy efficient",
            //   "Long lifespan",
            //   "Weather resistant",
            //   "Easy installation"
            // ],
            // specs: {
            //   wattage: pattern,
            //   voltage: "AC 180-265V",
            //   efficiency: ">90%"
            // }
          });
        }
      });
    });
  });
  
  return products;
};

const products = generateFakeProducts();
const ITEMS_PER_PAGE = 12;



export default function ShowProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCategories, setExpandedCategories] = useState({
    "AC Lighting": true
  });
  const [selectedFilters, setSelectedFilters] = useState([]);

  // filtering logic
  const filteredProducts = products.filter(product => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.includes(product.subcategory);
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
    setCurrentPage(1);
  };

  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex max-md:flex-col gap-6">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0" >
          <div className="border rounded-lg p-4 " >
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            {Object.entries(categories).map(([category, subcategories]) => (
              <div key={category} className="mb-4 h-auto " >
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex text-lg items-center justify-between w-full  text-left font-medium mb-2"
                 
                >
                  {category}
                  {expandedCategories[category] ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {expandedCategories[category] && (
                  <div className="space-y-2 ml-2 " >
                    {subcategories.map(subcategory => (
                      <label key={subcategory} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(subcategory)}
                          onChange={() => toggleFilter(subcategory)}
                          className="rounded border-gray-300 cursor-pointer"
                        />
                        <span className="text-md">{subcategory}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-lg text-gray-600 mb-4">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} Results from total {filteredProducts.length}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-lg p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-lg mb-4"
                />
                <div className="text-md text-gray-600 mb-1">{product.mainCategory} - {product.subcategory}</div>
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <div className="text-lg text-gray-600 mb-3">₹{product.price.toLocaleString()}</div>
                <button className="w-full bg-white border border-blue-500 text-blue-500 rounded py-2 hover:bg-blue-50 transition-colors">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => 
                page === 1 || 
                page === totalPages || 
                Math.abs(currentPage - page) <= 2
              )
              .map((page, index, array) => (
                <>
                  {index > 0 && array[index - 1] !== page - 1 && (
                    <span key={`ellipsis-${page}`} className="px-2">...</span>
                  )}
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded ${
                      currentPage === page 
                        ? 'bg-blue-500 text-white' 
                        : 'border hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                </>
              ))
            }
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
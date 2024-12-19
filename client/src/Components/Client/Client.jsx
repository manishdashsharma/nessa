import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ClientImg1 from "../../assets/client1.jpeg"
import ClientImg2 from "../../assets/client2.jpeg"
import ClientImg3 from "../../assets/client3.jpeg"

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const testimonials = [
      {
        image: ClientImg1,
        name: "Hannah Schmitt",
        role: "Lead designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas."
      },
      {
        image: ClientImg2,
        name: "Hannah Schmitt",
        role: "Lead designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas."
      },
      {
        image: ClientImg3,
        name: "Hannah Schmitt",
        role: "Lead designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas."
      }
    ];
  
    return (
      <div className="w-full bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">
              What Our <span className="text-blue-500">Partners</span> Say
            </h2>
            <p className="text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Our clients share their stories of success and satisfaction with Nessa's products and services. Your trust drives our innovation!
            </p>
            <div className="h-1 w-12 bg-blue-200 mx-auto mt-6"></div>

          </div>
          
  
          {/* Cards Container with Navigation */}
          <div className="relative">
            {/* Navigation Buttons - Hidden on mobile */}
            <button 
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 items-center justify-center bg-white rounded-full shadow-lg text-blue-500 hover:bg-blue-50"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={() => setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 items-center justify-center bg-white rounded-full shadow-lg text-blue-500 hover:bg-blue-50"
            >
              <ChevronRight size={20} />
            </button>
  
            {/* Cards Scroll Container */}
            <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-[85vw] md:w-full max-w-sm flex-shrink-0 snap-center"
                >
                  <div className="bg-white rounded-[40px] shadow-lg h-full">
                    <div className="relative">
                      <div className="h-20 bg-blue-500" />
                      <div 
                        className="h-16 bg-blue-500" 
                        style={{
                          clipPath: 'ellipse(100% 100% at 50% 0%)'
                        }} 
                      />
                      <div className="absolute top-6 left-0 w-full px-6">
                        <div className="flex items-center gap-3">
                          <img 
                            src={testimonial.image} 
                            alt="" 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="text-white">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-8">
                      <p className="text-gray-600 text-sm md:text-base">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialsSection;
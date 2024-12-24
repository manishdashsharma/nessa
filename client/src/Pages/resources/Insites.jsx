import React, { useState } from 'react';
import { IoChevronDown } from "react-icons/io5";

const InsightsResources = () => {
  const [expandedSections, setExpandedSections] = useState({
    Blogs: true,
    'Case Studies': true,
    'White Papers': false,
    'Articles': false,
    'Press Releases': false,
    'Others': false
  });
  
  const initialPosts = [
    {
      id: 1,
      title: "Essential UX Design Principles",
      category: "Analytics",
      description: "Key strategies for modern interfaces and how to implement them effectively in your next project. Learn about user-centered design approaches.",
      author: "Sarah Miller",
      date: "March 15, 2024",
      image: "/api/placeholder/400/250",
      readTime: "5 min read",
      section: "Blogs"
    },
    {
      id: 2,
      title: "Web Development Trends 2024",
      category: "Technology",
      description: "Latest innovations in web development that are shaping the future of online experiences. Discover emerging technologies.",
      author: "Mike Chen",
      date: "March 20, 2024",
      image: "/api/placeholder/400/250",
      readTime: "4 min read",
      section: "Blogs"
    },
    {
      id: 3,
      title: "Mobile-First Design Approach",
      category: "Business",
      description: "Strategies for responsive web design that prioritize mobile users while maintaining desktop functionality.",
      author: "Emma Davis",
      date: "March 18, 2024",
      image: "/api/placeholder/400/250",
      readTime: "6 min read",
      section: "Blogs"
    },
    // Case Studies
    {
      id: 4,
      title: "E-commerce Platform Redesign",
      category: "Design",
      description: "A comprehensive case study of how we improved conversion rates by 150% through UX optimization.",
      author: "Alex Johnson",
      date: "March 22, 2024",
      image: "/api/placeholder/400/250",
      readTime: "8 min read",
      section: "Case Studies"
    },
    {
      id: 5,
      title: "Healthcare App Development",
      category: "Technology",
      description: "How we built a HIPAA-compliant healthcare application serving over 100,000 patients.",
      author: "Lisa Zhang",
      date: "March 21, 2024",
      image: "/api/placeholder/400/250",
      readTime: "7 min read",
      section: "Case Studies"
    }
  ];

  const [posts] = useState(initialPosts);

  // Toggle section expansion
  const toggleSection = (sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const BlogCard = ({ post }) => (
    <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col space-y-2">
        <span className="text-blue-600 text-sm bg-blue-50 px-2 py-1 rounded-full w-fit">
          {post.category}
        </span>
        <h3 className="font-semibold text-lg hover:text-blue-600 cursor-pointer">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
        <div className="flex items-center space-x-3 pt-2">
          <img 
            src="/api/placeholder/32/32" 
            alt={post.author} 
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{post.author}</span>
            <div className="text-sm text-gray-500">
              {post.date} • {post.readTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">
        <span className="text-gray-800">Insights</span>
        <span className="text-blue-500"> & Resources</span>
      </h1>

      <div className="space-y-4">
        {Object.entries(expandedSections).map(([sectionTitle, isExpanded]) => {
          const sectionPosts = posts.filter(post => post.section === sectionTitle);
          
          return (
            <div key={sectionTitle} className="border border-gray-200 rounded-lg">
              <div 
                className="flex justify-between items-center p-4 bg-gray-50 rounded-t-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleSection(sectionTitle)}
              >
                <h2 className="text-lg font-semibold flex items-center">
                  {sectionTitle}
                  {sectionPosts.length > 0 && (
                    <span className="ml-2 text-sm text-gray-500">
                      ({sectionPosts.length})
                    </span>
                  )}
                </h2>
                <IoChevronDown 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isExpanded ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
              
              {isExpanded && (
                <div className="p-4">
                  {sectionPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sectionPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No items found in this section
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsResources;
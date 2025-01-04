async function insertProductData() {
    const productData = [
        {
            "name": "Advanced AC Street Light 500W",
            "description": "High-performance street lighting for multiple applications.",
            "categories": "AC Lighting",
            "subcategories": "Street Light",
            "specification": {
                "power": "500W",
                "voltage": "220V",
                "lumen": "50000lm",
                "material": "Aluminum alloy",
                "colorTemperature": "5000K",
                "lifespan": "50,000 hours",
                "beamAngle": "120°",
                "IPRating": "IP67",
                "CRI": "≥80",
                "frequency": "50/60Hz",
                "warranty": "5 years"
            },
            "feature": {
                "highlighted": [
                    "High durability",
                    "Energy efficient",
                    "Weather resistant",
                    "Low maintenance cost",
                    "Optimized heat dissipation"
                ],
                "useCases": [
                    {
                        "title": "Airport",
                        "description": "Ideal for bright and energy-efficient lighting at airports.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg"
                    },
                    {
                        "title": "Railway Station",
                        "description": "Perfect for railway station platforms and waiting areas.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg"
                    },
                    {
                        "title": "Urban Streets",
                        "description": "Enhances visibility and safety on urban roads and streets.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg"
                    }
                ]
            },
            "productImageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg",
            "brochureUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/brochure1.jpg",
            "applicationImageUrls": [
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image1.jpg"
            ],
            "bestSuitedFor": ["Offices", "Bank"],
            "SKUId": "sku001"
        },
        {
            "name": "Fission LED Street Light 300W",
            "description": "Durable and efficient street light for urban areas.",
            "categories": "AC Lighting",
            "subcategories": "Fission LED Street Light",
            "specification": {
                "power": "300W",
                "voltage": "220V",
                "lumen": "30000lm",
                "material": "Aluminum alloy",
                "colorTemperature": "4000K",
                "lifespan": "40,000 hours",
                "beamAngle": "100°",
                "IPRating": "IP65",
                "CRI": "≥70",
                "frequency": "50/60Hz",
                "warranty": "3 years"
            },
            "feature": {
                "highlighted": [
                    "Compact design",
                    "Energy-efficient LED",
                    "Weatherproof housing",
                    "Long lifespan",
                    "High visibility"
                ],
                "useCases": [
                    {
                        "title": "Industrial Parks",
                        "description": "Robust lighting for industrial complexes.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg"
                    },
                    {
                        "title": "Highways",
                        "description": "Improves visibility for safer highways.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg"
                    },
                    {
                        "title": "Residential Streets",
                        "description": "Ideal for residential neighborhoods.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg"
                    }
                ]
            },
            "productImageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg",
            "brochureUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/brochure2.jpg",
            "applicationImageUrls": [
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image2.jpg"
            ],
            "bestSuitedFor": ["Offices"],
            "SKUId": "sku002"
        },
        {
            "name": "Flood Light 400W",
            "description": "High-intensity floodlight perfect for large outdoor spaces.",
            "categories": "AC Lighting",
            "subcategories": "Flood Light",
            "specification": {
                "power": "400W",
                "voltage": "220V",
                "lumen": "45000lm",
                "material": "Steel",
                "colorTemperature": "5000K",
                "lifespan": "40,000 hours",
                "beamAngle": "90°",
                "IPRating": "IP66",
                "CRI": "≥85",
                "frequency": "50/60Hz",
                "warranty": "4 years"
            },
            "feature": {
                "highlighted": [
                    "High intensity",
                    "Wide beam angle",
                    "Ideal for outdoor applications",
                    "Weather resistant",
                    "Energy-efficient"
                ],
                "useCases": [
                    {
                        "title": "Stadium",
                        "description": "Provides bright lighting for sports events.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg"
                    },
                    {
                        "title": "Mines",
                        "description": "Reliable lighting for mining sites.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg"
                    },
                    {
                        "title": "Ports & Logistic Parks",
                        "description": "Ensures visibility in logistics operations.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg"
                    }
                ]
            },
            "productImageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg",
            "brochureUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/brochure3.jpg",
            "applicationImageUrls": [
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image3.jpg"
            ],
            "bestSuitedFor": ["Offices"],
            "SKUId": "sku003"
        },
        {
            "name": "Fission Flood Light 250W",
            "description": "High-efficiency floodlight for large outdoor and industrial areas.",
            "categories": "AC Lighting",
            "subcategories": "Fission Flood Light",
            "specification": {
                "power": "250W",
                "voltage": "220V",
                "lumen": "30000lm",
                "material": "Aluminum",
                "colorTemperature": "5000K",
                "lifespan": "35,000 hours",
                "beamAngle": "110°",
                "IPRating": "IP66",
                "CRI": "≥75",
                "frequency": "50/60Hz",
                "warranty": "3 years"
            },
            "feature": {
                "highlighted": [
                    "Compact size",
                    "High energy efficiency",
                    "Long lifespan",
                    "Suitable for harsh environments",
                    "Weatherproof"
                ],
                "useCases": [
                    {
                        "title": "Highways",
                        "description": "Ensures better visibility on highways.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg"
                    },
                    {
                        "title": "Railway Stations",
                        "description": "Perfect for station platforms.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg"
                    },
                    {
                        "title": "Construction Sites",
                        "description": "Bright lighting for construction zones.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg"
                    }
                ]
            },
            "productImageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg",
            "brochureUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/brochure4.jpg",
            "applicationImageUrls": [
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image4.jpg"
            ],
            "bestSuitedFor": ["Offices", "Bank", "Industries"],
            "SKUId": "sku004"
        },
        {
            "name": "LED Street Light 200W",
            "description": "Energy-efficient and eco-friendly street lighting solution.",
            "categories": "AC Lighting",
            "subcategories": "Street Light",
            "specification": {
                "power": "200W",
                "voltage": "220V",
                "lumen": "22000lm",
                "material": "Aluminum alloy",
                "colorTemperature": "4500K",
                "lifespan": "50,000 hours",
                "beamAngle": "110°",
                "IPRating": "IP65",
                "CRI": "≥80",
                "frequency": "50Hz",
                "warranty": "5 years"
            },
            "feature": {
                "highlighted": [
                    "Eco-friendly",
                    "Low energy consumption",
                    "Long lifespan",
                    "Weather-resistant",
                    "Easy installation"
                ],
                "useCases": [
                    {
                        "title": "Urban Streets",
                        "description": "Perfect for residential and urban roads.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg"
                    },
                    {
                        "title": "Highways",
                        "description": "Improves road safety with bright illumination.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg"
                    },
                    {
                        "title": "Parks & Open Spaces",
                        "description": "Brighten public parks and recreational spaces.",
                        "imageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg"
                    }
                ]
            },
            "productImageUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg",
            "brochureUrl": "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/brochure5.jpg",
            "applicationImageUrls": [
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg",
                "https://res.cloudinary.com/dvtfhco4j/image/upload/v1734735158/ac_lighting/image5.jpg"
            ],
            "bestSuitedFor": ["Industries"],
            "SKUId": "sku005"
        }
    ]
    

    for (const product of productData) {
        try {
            const response = await fetch('http://localhost:5000/v1/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                const responseData = await response.json();
            } else {
                console.error('Failed to add product. Status:', response.status);
            }
        } catch (error) {
            console.error('Error occurred while adding product:', error);
        }
    }
}

insertProductData();
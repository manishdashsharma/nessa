
import blogWebResources from '../../assets/images/resourcesImages/blog-webResources.png';
import blogPrinciple from '../../assets/images/resourcesImages/blog-principle.png';
import blogExample from '../../assets/images/resourcesImages/blog-greatExample.png';
import mediaPost1 from '../../assets/images/resourcesImages/mediaPost1.png';
import axios from 'axios'
import { fetchBlogs } from '../../services/api.services';

export const fetch = async () => {
    try {
        const response = await fetchBlogs()

        // Modify the blogs section in insitesAndResources
        const updatedResources = insitesAndResources.map((section) =>
            section.title === 'Blogs' ? { ...section, items: response.data.blogs } : section
        )
        
        console.log(response.data)
        return {
            updatedResources,
            blogs: response.data.blogs
            
        }
    } catch (error) {
        console.error('Blog fetch error:', error)
        return {
            updatedResources: insitesAndResources,
            blogs: []
        }
    }
}

export const insitesAndResources = [
  {
    title: 'Blogs',

    items: [
    
    ],
  },
  {
    title: 'Case Studies',
    items: [
      // {
      //   title: '5 Great Web Design Resources',
      //   image: blogExample,
      //   category: 'Analytics',
      //   sorttitle: 'Est placeat perspicia',
      //   profile: {
      //     author: 'Orlando Diggs',
      //     date: 'March 28, 2023',
      //     readTime: '5 min read',
      //     profilePicture: '',
      //   },
      // },
      // {
      //   title: '10 Great Examples of Websites',
      //   image: '',
      //   category: 'Marketing',
      //   sorttitle: 'Et odit soluta sint temporibus quia dolorem',
      //   profile: {
      //     author: 'Mike Dean',
      //     date: 'March 28, 2023',
      //     readTime: '3 min read',
      //     profilePicture: '',
      //   },
      // },
      // {
      //   title: '5 Principles Of Effective Web Design',
      //   image: '',
      //   category: 'Business',
      //   sorttitle: 'Sapiente amet molestias cum fugiat qui',
      //   profile: {
      //     author: 'Anna Provi',
      //     date: 'March 28, 2023',
      //     readTime: '8 min read',
      //     profilePicture: '',
      //   },
      // },
    ],
  },
  {
    title: 'White Papers',
    items: [
      // {
      //   title: '5 Great Web Design Resources',
      //   image: '',
      //   category: 'Analytics',
      //   sorttitle: 'Est placeat perspicia',
      //   profile: {
      //     author: 'Orlando Diggs',
      //     date: 'March 28, 2023',
      //     readTime: '5 min read',
      //     profilePicture: '',
      //   },
      // },
      // {
      //   title: '10 Great Examples of Websites',
      //   image: '',
      //   category: 'Marketing',
      //   sorttitle: 'Et odit soluta sint temporibus quia dolorem',
      //   profile: {
      //     author: 'Mike Dean',
      //     date: 'March 28, 2023',
      //     readTime: '3 min read',
      //     profilePicture: '',
      //   },
      // },
      // {
      //   title: '5 Principles Of Effective Web Design',
      //   image: '',
      //   category: 'Business',
      //   sorttitle: 'Sapiente amet molestias cum fugiat qui',
      //   profile: {
      //     author: 'Anna Provi',
      //     date: 'March 28, 2023',
      //     readTime: '8 min read',
      //     profilePicture: '',
      //   },
      // },
    ],
  },
  {
    title: 'Articles',
    items: [],
  },
 
  {
    title: 'Others',
    items: [],
  },
];

export const media = [
  {
    title: 'Press release',

    items: [
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image: mediaPost1,
        
      // },
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image: mediaPost1,
        
      // },
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image: mediaPost1,
        
      // },
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image: mediaPost1,
        
      // },
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image: mediaPost1,
        
      // },
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image: mediaPost1,
        
      // },
    
    ],
  },
  {
    title: 'Media coverage',
    items: [
      // {
      //   title: 'SEWA, bizmen use LEDs to lead veg vendors out of darkness!',
      //   image:  mediaPost1,
       
      // },
     
    ],
  },
 
  {
    title: 'Events and exhibition',
    items: [],
  },
  {
    title: 'Media kit ',
    items: [],
  },
  {
    title: 'Videos',
    items: [],
  },
];


import ncdl1 from '../../assets/images/resources/nessaCatalog.pdf'
import ncdl2 from '../../assets/images/resources/csr.pdf'
import ncdl3 from '../../assets/images/resources/compony.pdf'

import ncp1 from '../../assets/images/resources/nessacatalog.png'
import ncp2 from '../../assets/images/resources/csrprofile.png'
import ncp3 from '../../assets/images/resources/componyprofile.png'

import pmd from '../../assets/images/resources/Nessa Smart Solar Light.pdf'
import electronic from '../../assets/images/resources/Nessa-Electronics-Catalog.pdf'
import solar from '../../assets/images/resourcesImages/NESSA-SMART-SOLAR-LIGHTS.jpg'
import Electronics from '../../assets/images/resourcesImages/ele.jpg'

 export const resourcesUtilsConfigHardCodedData = {
     title: 'Resources Page Utils Data',
     utilsData: {
         nessaCatalogUtilsData: [
             {
                 poster: ncp1,
                 downloadLink: ncdl1,
                 name: 'Nessa  Catalog'
             },
             {
                 poster: ncp2,
                 downloadLink: ncdl2,
                 name: 'Nessa CSR Profile'
             },
             {
                 poster: ncp3,
                 downloadLink: ncdl3,
                 name: 'Nessa Profiie'
             }
         ],
         productManualUtilsData: [
             {
                 poster: ncp1,
                 downloadLink: pmd,
                 name: 'AC Products',
                 description: ''
             },
             {
                 poster: ncp1,
                 downloadLink: pmd,
                 name: 'Solar Products',
                 description: ''
             },
             {
                 poster: Electronics,
                 downloadLink: electronic,
                 name: 'Electronics',
                 description: ''
             },
             {
                 poster: solar,
                 downloadLink: pmd,
                 name: 'Smart Solar Lights',
                 description: ''
             }
         ],
         nessaManualUtilsData: [
             {
                 name: 'Airport Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1KZW-OHIX2RpIKmzdLasKrxO44AKVjIRDnk5SJbwP9Bk/edit?usp=sharing'
             },
             {
                 name: 'Hazardous Area Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1TAPaiz4pLVZkZPyYAW71lkntObg2DuCLUY0Kfvri8zw/edit?usp=sharing'
             },
             {
                 name: 'Highway and Toll Plaza',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1TAPaiz4pLVZkZPyYAW71lkntObg2DuCLUY0Kfvri8zw/edit?usp=sharing'
             },
             {
                 name: 'Mining Lighting',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1EsQfl7GDahINnzKJkL98T-eDGHLicdSDGIPB5x5LFyQ/edit?usp=sharing'
             },
             {
                 name: 'Petrol Pump Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1-v5eWvO745qM3kILkUwRaS8MaJiZA5982ffq7W036as/edit?usp=sharing'
             },
             {
                 name: 'Port and Logistics',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/15M-f86hxVgdcxYV0HklhvM1JPFEm0WgtPMBdD92fdKU/edit?usp=sharing'
             },
             {
                 name: 'Refinery Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/18WgVXyROZmlvoDGmkYFQNCeq373YIgD_SDjF_ilNVQQ/edit?usp=sharing'
             },
             {
                 name: 'Rural Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1bs35f4bBwLhmwAp-CvV_YbllaD4-D_vXUox5RA4hA08/edit?usp=sharing'
             },
             {
                 name: 'Solar Parks Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1Noaf0XZ5wnKkVX2frrJud-ZH97uwaDGc-6rHkkk3-fU/edit?usp=sharing'
             },
             {
                 name: 'Stadium Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1KR_-xj8BV8mdxT2B6jddxt99v8PLS17wlWDrNqvlPXQ/edit?usp=sharing'
             },
             {
                 name: 'Thermal Power Lighting',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1YQ-BmNDuTbYbif9Wf9jzSu0VkFPDYfWM-Z2H3N-qPyA/edit?usp=sharing'
             },
             {
                 name: 'Tunnel Lighting Solutions',
                 description: '',
                 downloadLink: 'https://docs.google.com/presentation/d/1Kzi0uDbzDrwt0f4Rj17GMohOxmtk7l8ZRsA0NxMG6Us/edit?usp=sharing'
             }
         ]
     }
 }
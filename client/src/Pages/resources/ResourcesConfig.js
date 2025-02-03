
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

 export const resourcesUtilsConfigHardCodedData ={
    'title': 'Resources Page Utils Data',
    'utilsData': {
        'nessaCatalogUtilsData': [
            {
                'poster': ncp1,
                'downloadLink': ncdl1,
                'name': 'Nessa  Catalog'
            },
            {
                'poster': ncp2,
                'downloadLink': ncdl2,
                'name': 'Nessa CSR Profile'
            },
            {
                'poster': ncp3,
                'downloadLink': ncdl3,
                'name': 'Nessa Profiie'
            }
        ],
        'productManualUtilsData': [
            {
                'poster': 'https://res.cloudinary.com/dfx1sukqp/image/upload/v1736543218/resources/1736543216421-solarAcProducts_eo8b9i.png',
                'downloadLink': '',
                'name': 'Solar & A.C Products',
                'description': 'Make our earth green and clean by using a wide range of Nessa\'s LED Products.'
            },
            {
                'poster': 'https://res.cloudinary.com/dfx1sukqp/image/upload/v1736543263/resources/1736543261854-electronics_leujs6.png',
                'downloadLink': 'https://res.cloudinary.com/dfx1sukqp/image/upload/v1736543263/resources/1736543261854-electronics_leujs6.png',
                'name': 'Electronics',
                'description': 'Nessa, founded in 2008, by people with vast global experience in the solar and semiconductor industry.'
            },
            {
                'poster': '',
                'downloadLink': '',
                'name': 'Solar Pump',
                'description': 'We are leading manufacturer, supplier and exporter of solar solutions in India.'
            },
            {
                'poster': '',
                'downloadLink': '',
                'name': 'UVC Products',
                'description': 'NESSA UVC Disinfectants-Proven to Kill 99.99% of Viruses'
            }
        ],
        'nessaManualUtilsData': [
            {
                'name': 'AC LED FLOOD LIGHTS',
                'description': 'Assembling & Repairing',
                'downloadLink': 'https://example.com/flood_lights_manual.pdf'
            },
            {
                'name': 'AC LED STREET LIGHTS',
                'description': 'Assembling & Repairing',
                'downloadLink': 'https://example.com/flood_lights_manual.pdf'
            },
            {
                'name': 'LED LIGHTS COMPONENTS',
                'description': 'Assembling & Repairing',
                'downloadLink': ''
            },
            {
                'name': 'SOLAR LED STREET LIGHTS',
                'description': 'Assembling & Repairing',
                'downloadLink': ''
            },
            {
                'name': 'All In One SOLAR LED STREET LIGHTS Repairing',
                'description': '',
                'downloadLink': ''
            },
            {
                'name': 'SEMI INTEGRATED SOLAR LED STREET LIGHTS Repairing',
                'description': '',
                'downloadLink': ''
            },
            {
                'name': 'Solar Street Light Pole Installation Manual',
                'description': '',
                'downloadLink': ''
            },
            {
                'name': 'UV-C Product User Manual',
                'description': '',
                'downloadLink': ''
            }
        ]
    }
}
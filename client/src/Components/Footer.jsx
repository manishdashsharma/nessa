import { RiFacebookBoxLine } from 'react-icons/ri'
import logo from '../assets/images/navbar/logo.svg'
import { FiYoutube } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-[5vw]">
      <div className="container mx-auto">
        <div className=" flex justify-between max-md:flex-col gap-10">
          {/* Company Info Column */}
          <div className="space-y-6 w-[30%] max-md:w-full">
            <img src={logo} alt="NESSA Logo" className="h-12" />
            <p className="text-gray-400 text-sm">
              With 15+ years of expertise and a global presence in 20+ countries, Nessa delivers sustainable, high-performance lighting tailored to your needs.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-white text-2xl hover:text-gray-400">
                 <FiYoutube/>   
              </Link>
              <Link to="#" className="text-white text-2xl hover:text-gray-400">
                 <RiFacebookBoxLine />
              </Link>
              <Link to="#" className="text-white text-2xl hover:text-gray-400">
                 <IoLogoWhatsapp />
              </Link>
            </div>
          </div>

          {/* Browse Column */}
          <div className="w-fit max-md:w-full ">
            <h3 className="text-lg font-semibold mb-4">Browse</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white">Solutions</Link></li>
              <li><Link to="/allproducts" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/aboutus" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contactus" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="w-fit max-md:w-full">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/valueAddedServices" className="text-gray-400 hover:text-white">Value Added Service</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Blogs</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Calculators</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="w-fit max-md:w-full">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/esgpolicy" className="text-gray-400 hover:text-white">ESG Policy</Link></li>
              <li><Link to="/cookiespolicy" className="text-gray-400 hover:text-white">Cookies Policy</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="w-[20%] max-md:w-full">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">+91-79-2970-1779</li>
              <li className="text-gray-400">info@nessa.in</li>
              <li className="text-gray-400">
                Devraj Industrial Park, Piplaj-Pirana Road, Ahmedabad-382405, Gujarat, India.
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          Copyright 2025. NESSA. All Right Reserved. Developed by Futuredesks Services
        </div>
      </div>
    </footer>
  )
}

export default Footer


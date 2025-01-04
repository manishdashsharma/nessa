import { 
  FaHome, 
  FaBoxOpen, 
  FaEnvelope, 
  FaLifeRing 
} from "react-icons/fa";
import logo from '../../assets/logo.svg';

export const dashboardConfig = {
  logo: {
    src: logo,
    alt: "Logo",
    title: "MyApp",
  },
  generalItems: [
    { label: "Dashboard", icon: FaHome, path: "/admin/dashboard", sublabels: [] },
    { label: "Product", icon: FaBoxOpen, path: "/admin/dashboard/product", sublabels: [] },
    { label: "Contact Us", icon: FaEnvelope, path: "/admin/dashboard/contactus", sublabels: [] },
    { label: "Support", icon: FaLifeRing, path: "/admin/dashboard/support", sublabels: [] },
  ],
  settingItems: [
    // { label: "Account Setting", icon: FaCog, path: "/account-settings" },
    // { label: "Sign Out", icon: FaSignOutAlt, path: "/sign-out" },
  ]
};

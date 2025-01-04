/* eslint-disable no-unused-vars */
import { FaHome, FaChartBar, FaUsers, FaCog, FaWallet, FaSignOutAlt, FaHandsHelping, FaLink, FaBoxOpen } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import logo from '../../assets/logo.svg';

export const dashboardConfig = {
  logo: {
    src: logo,
    alt: "Logo",
    title: "MyApp",
  },
  generalItems: [
    { label: "Dashboard", icon: FaHome, path: "/admin/dashboard", sublabels: [] },
    { label: "Product", icon: FaUsers, path: "/admin/dashboard/product", sublabels: [] },
    { label: "Contact Us", icon: FaChartBar, path: "/admin/dashboard/contactus", sublabels: [] },
    { label: "Support", icon: FaChartBar, path: "/admin/dashboard/suppport", sublabels: [] },
    // { label: "", icon: FaChartBar, path: "/admin/dashboard/contactus", sublabels: [] },
  ],
  settingItems: [
    // { label: "Account Setting", icon: FaCog, path: "/account-settings" },
    // { label: "Sign Out", icon: FaSignOutAlt, path: "/sign-out" },
  ]
};

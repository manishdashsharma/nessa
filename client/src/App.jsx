import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import WelcomePage from './Pages/Welcome/WelcomePage';
import useTrackPageVisit from './hooks/useTrackPageVisit';
import Homepage from './Pages/homepage/Homepage';
import Solutions from './Pages/solutions/Solutions';
import SolutionDetail from './Pages/solutionDetail/SolutionDetail';
import Terms from './Pages/terms/Terms';
import ContactUs from './Pages/contactUs/ContactUs';
import EsgPolicy from './Pages/esgpolicy/EsgPolicy';
// import AboutUs from './Pages/aboutUs/AboutUs';
import PrivacyPolicy from './Pages/privacy1/Privacy1';
import Support from './Pages/support/Support';
import { Resources } from './Pages/resources/Resources';
import AllProducts from './Pages/allproducts/Allproducts';
import Product from './Pages/product/Product';
import AboutUs from './Pages/aboutUs/AboutUs';
import ScrollToTop from './Components/ScrollToTop';
import { Projects } from './Pages/projects/Projects';
import { ValueAddedServices } from './Pages/valueAddedServices/ValueAddedServices';
import CookiesPolicy from './Pages/CookiesPolicy/CookiesPolicy';
import BlogDetailPage from './Pages/blogDetail/BlogDetailPage';

const App = () => {
    
    useTrackPageVisit();

    return (
        <>
           
            <Toaster reverseOrder={false} />

            <ScrollToTop />
            <Routes>
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/:id" element={<SolutionDetail />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/esgpolicy" element={<EsgPolicy />} />
                <Route path="/cookiespolicy" element={<CookiesPolicy />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/support" element={<Support />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/allproducts" element={<AllProducts />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/valueAddedServices" element={<ValueAddedServices />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                
                
            </Routes>
        </>
    );
};

export default App;

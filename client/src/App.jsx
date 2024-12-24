import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import WelcomePage from './Pages/Welcome/WelcomePage'
import useTrackPageVisit from './hooks/useTrackPageVisit';
import Homepage from "./pages/homepage/Homepage";
import Solutions from "./pages/solutions/Solutions";
import SolutionDetail from "./pages/solutionDetail/SolutionDetail";
import Terms from "./pages/terms/Terms";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/contactUs/ContactUs";
import EsgPolicy from "./pages/esgpolicy/EsgPolicy";
import AboutUs from "./pages/aboutUs/AboutUs";
import Privacy1 from "./pages/privacy1/Privacy1";
import Support from "./pages/support/Support";
import { Resources } from "./pages/resources/Resources";
import { Allproducts } from "./pages/allproducts/Allproducts";

const App = () => {
    useTrackPageVisit();
    return (
        <>
            <Toaster reverseOrder={false} />
            <Routes>
                <Route path='/Welcome' element={<WelcomePage />} /> 
                <Route path="/" element={<Homepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:type" element={<SolutionDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy1 />} />
        <Route path="/esgpolicy" element={<EsgPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/allproducts" element={<Allproducts />} />
            </Routes>
        </>
    )
}

export default App

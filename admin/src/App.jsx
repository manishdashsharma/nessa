import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LoginPage from './Pages/Auth/LoginPage'
import HomePage from './Pages/Home/HomePage'
import Dashboard from './Pages/DashBoard/DashBoard'
import ProductPage from './Pages/Product/ProductPage'
import SupportPage from './Pages/Support/SupportPage'
import ContactUsPage from './Pages/ContactUS/ContactUsPage'

const App = () => {
    return (
        <>
            <Toaster reverseOrder={false} />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route index element={<HomePage />} />
                    <Route path="product" element={<ProductPage />} />
                    <Route path="support" element={<SupportPage />} />
                    <Route path="contactus" element={<ContactUsPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App


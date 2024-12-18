import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import WelcomePage from './Pages/Welcome/WelcomePage'
import HomePage from './Pages/Home/HomePage';

const App = () => {
    return (
        <>
            <Toaster reverseOrder={false} />
            <Routes>
                <Route path="/welcome-page" element={<WelcomePage />} />
                <Route path='/' element={<HomePage />} /> 
            </Routes>
        </>
    )
}

export default App

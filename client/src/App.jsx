import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import WelcomePage from './Pages/Welcome/WelcomePage'
import useTrackPageVisit from './hooks/useTrackPageVisit';

const App = () => {
    useTrackPageVisit();
    return (
        <>
            <Toaster reverseOrder={false} />
            <Routes>
                <Route path='/' element={<WelcomePage />} /> 
            </Routes>
        </>
    )
}

export default App

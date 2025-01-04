import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './Pages/Auth/LoginPage';
import HomePage from './Pages/Home/HomePage';

const App = () => {
  

    return (
        <>
           
            <Toaster reverseOrder={false} />

            <Routes>
                <Route path="/admin" element={<LoginPage />} />
                <Route path="/admin/home" element={<HomePage />} />
            </Routes>
        </>
    );
};

export default App;

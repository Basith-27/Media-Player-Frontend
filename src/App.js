import Header from './components/Header'
import './styles.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
    </>
  );
  
}

export default App;

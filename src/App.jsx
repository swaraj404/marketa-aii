import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import ComingSoon from './components/ComingSoon';

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div className='text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/coming-soon' element={<ComingSoon />} /> */}
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComingSoon from './components/ComingSoon';

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
      </Routes>
    </div>
  );
};

export default App;

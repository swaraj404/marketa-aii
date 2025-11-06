import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Solutions from './pages/Solutions'
import FeautesPage  from './pages/FeautesPage'
import Pricing from './pages/Pricing'
import Home from './pages/Home'
import ComingSoon from './components/ComingSoon'
const App = () => {
  return (
    <div  className='text-white'>
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Solutions'element={<Solutions/>}/>
        <Route path='/Home'element={<Home/>}/>
        <Route path='/Pricing'element={<Pricing/>}/>
        <Route path='/Features'element={<FeautesPage/>}/>
        <Route path='/coming-soon'element={<ComingSoon/>}/>
        
      </Routes>
    </div>
  )
}

export default App;

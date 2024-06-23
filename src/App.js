import React from 'react';
import Home from './pages/home';

import Login from './Auth/login';
import Student from './Auth/std_reg';
import Driver from './Auth/drv_reg';
import Dash from './pages/driverdash';

import Profile from './pages/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
   
    <BrowserRouter>

    

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/std_reg' element={<Student />}/>
        <Route path='/drv_reg' element={<Driver />}/>
        <Route path='/dash' element={<Dash/>}/>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;

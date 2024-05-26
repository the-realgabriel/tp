import React from 'react';
import Home from './pages/home';

import Login from './Auth/login';
import Student from './Auth/std_reg';
import Driver from './Auth/drv_reg';

import Profile from './pages/profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <div className='navigation'>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/std_reg' element={<Student />}/>
        <Route path='/drv_reg' element={<Driver />}/>
      </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;

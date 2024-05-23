import React from 'react';
import './App.css';
import Home from './pages/home';



function App() {
  return (
    <div className="App"> 
    <Home />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>

    </div>
  );
}

export default App;

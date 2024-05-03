import React from 'react';
import './App.css';
import Profile from './profile';

function App() {
  return (
    <div className='Tp'>
          <div className='at-left'>
            <ul><li>Rides</li></ul>
            <ul><li>Food</li></ul>
            <h4>Hello Itadori</h4>
          </div>
           <div className='buttombar div-at-bottom'>
             <input placeholder='From where?'></input>
             <input placeholder='To where?'></input>
             <button onClick={console.log(('HEllo world'))}>Search</button>
         </div>
          <div placeholder="mid" >
            <h1>Drivers Online</h1>
             <input placeholder='Recent'></input>
             <button>FIlter</button>
             <div>
              <h3>Olamide</h3>
              <h3></h3>
             </div>
             <Profile/>
             
         </div>
      

    </div>
  );
}

export default App;
